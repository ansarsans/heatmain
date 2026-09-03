import { copyFile, mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises"
import path from "node:path"
import process from "node:process"
import sharp from "sharp"

const projectRoot = process.cwd()
const sourceRoot = path.join(projectRoot, "public", "images")
const backupRoot = path.join(projectRoot, "image-originals", "catalog")
const reportPath = path.join(projectRoot, "image-originals", "optimization-report.json")
const supportedExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"])
const concurrency = 4

function formatBytes(bytes) {
  const units = ["B", "KB", "MB", "GB"]
  let value = bytes
  let unitIndex = 0

  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024
    unitIndex += 1
  }

  return `${value.toFixed(unitIndex === 0 ? 0 : 2)} ${units[unitIndex]}`
}

async function listFiles(directory, relativeDirectory = "") {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const relativePath = path.join(relativeDirectory, entry.name)
    const absolutePath = path.join(directory, entry.name)

    if (entry.isDirectory()) {
      files.push(...await listFiles(absolutePath, relativePath))
    } else if (entry.isFile()) {
      files.push(relativePath)
    }
  }

  return files
}

async function ensureOriginalBackup(relativePath) {
  const sourcePath = path.join(sourceRoot, relativePath)
  const backupPath = path.join(backupRoot, relativePath)

  try {
    await stat(backupPath)
  } catch {
    await mkdir(path.dirname(backupPath), { recursive: true })
    await copyFile(sourcePath, backupPath)
  }

  return backupPath
}

async function encodeImage(input, extension) {
  let pipeline = sharp(input, { failOn: "warning" }).keepIccProfile()

  if (extension === ".jpg" || extension === ".jpeg") {
    pipeline = pipeline.jpeg({
      quality: 90,
      chromaSubsampling: "4:4:4",
      mozjpeg: true,
      optimiseScans: true,
    })
  } else if (extension === ".png") {
    pipeline = pipeline.png({
      compressionLevel: 9,
      adaptiveFiltering: true,
      palette: false,
    })
  } else if (extension === ".webp") {
    pipeline = pipeline.webp({ lossless: true, effort: 6 })
  }

  return pipeline.toBuffer()
}

async function optimizeFile(relativePath) {
  const extension = path.extname(relativePath).toLowerCase()
  const sourcePath = path.join(sourceRoot, relativePath)
  const backupPath = await ensureOriginalBackup(relativePath)
  const currentSize = (await stat(sourcePath)).size

  if (!supportedExtensions.has(extension)) {
    return { file: relativePath, status: "backup-only", before: currentSize, after: currentSize }
  }

  const original = await readFile(backupPath)
  const originalMetadata = await sharp(original).metadata()
  const optimized = await encodeImage(original, extension)
  const optimizedMetadata = await sharp(optimized).metadata()

  if (
    originalMetadata.width !== optimizedMetadata.width ||
    originalMetadata.height !== optimizedMetadata.height ||
    originalMetadata.pages !== optimizedMetadata.pages
  ) {
    throw new Error(`Размер изображения изменился: ${relativePath}`)
  }

  if (optimized.length >= currentSize) {
    return { file: relativePath, status: "kept", before: currentSize, after: currentSize }
  }

  await writeFile(sourcePath, optimized)
  return { file: relativePath, status: "optimized", before: currentSize, after: optimized.length }
}

async function mapWithConcurrency(items, limit, worker) {
  const results = new Array(items.length)
  let nextIndex = 0

  async function run() {
    while (nextIndex < items.length) {
      const currentIndex = nextIndex
      nextIndex += 1
      results[currentIndex] = await worker(items[currentIndex])
    }
  }

  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, run))
  return results
}

async function main() {
  const files = await listFiles(sourceRoot)
  await mkdir(backupRoot, { recursive: true })

  console.log(`Найдено файлов: ${files.length}`)
  console.log(`Оригиналы: ${backupRoot}`)

  let completed = 0
  const results = await mapWithConcurrency(files, concurrency, async (relativePath) => {
    const result = await optimizeFile(relativePath)
    completed += 1

    if (result.status === "optimized") {
      const saved = result.before - result.after
      console.log(`[${completed}/${files.length}] ${relativePath}: ${formatBytes(result.before)} → ${formatBytes(result.after)} (-${formatBytes(saved)})`)
    }

    return result
  })

  const before = results.reduce((sum, item) => sum + item.before, 0)
  const after = results.reduce((sum, item) => sum + item.after, 0)
  const saved = before - after
  const optimizedCount = results.filter((item) => item.status === "optimized").length
  const skippedCount = results.length - optimizedCount
  const report = {
    generatedAt: new Date().toISOString(),
    source: path.relative(projectRoot, sourceRoot),
    originals: path.relative(projectRoot, backupRoot),
    files: results.length,
    optimized: optimizedCount,
    skipped: skippedCount,
    beforeBytes: before,
    afterBytes: after,
    savedBytes: saved,
    savedPercent: before === 0 ? 0 : Number(((saved / before) * 100).toFixed(2)),
    results,
  }

  await mkdir(path.dirname(reportPath), { recursive: true })
  await writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`, "utf8")

  console.log("\nГотово")
  console.log(`Оптимизировано: ${optimizedCount}`)
  console.log(`Без изменений: ${skippedCount}`)
  console.log(`Общий размер: ${formatBytes(before)} → ${formatBytes(after)}`)
  console.log(`Экономия: ${formatBytes(saved)} (${report.savedPercent}%)`)
  console.log(`Отчёт: ${reportPath}`)
}

async function restoreOriginals() {
  const files = await listFiles(backupRoot)

  for (const relativePath of files) {
    const backupPath = path.join(backupRoot, relativePath)
    const destinationPath = path.join(sourceRoot, relativePath)
    await mkdir(path.dirname(destinationPath), { recursive: true })
    await copyFile(backupPath, destinationPath)
  }

  console.log(`Восстановлено оригиналов: ${files.length}`)
  console.log(`Источник: ${backupRoot}`)
}

const command = process.argv.includes("--restore") ? restoreOriginals : main

command().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
