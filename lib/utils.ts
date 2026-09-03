import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAssetPath(path: string) {
  if (path.startsWith('http') || path.startsWith('https') || path.startsWith('data:')) {
    return path
  }
  return path.startsWith('/') ? path : `/${path}`
}

