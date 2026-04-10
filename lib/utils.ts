import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAssetPath(path: string) {
  const isProd = process.env.NODE_ENV === 'production'
  const basePath = isProd ? '/heatmain' : ''
  
  if (path.startsWith('http') || path.startsWith('https') || path.startsWith('data:')) {
    return path
  }
  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`
}

