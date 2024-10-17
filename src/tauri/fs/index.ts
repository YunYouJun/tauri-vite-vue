import type { DirEntry } from '@tauri-apps/plugin-fs'
import { readDir } from '@tauri-apps/plugin-fs'

export async function getFolderEntries(folderPath: string) {
  if (!folderPath)
    return []

  let entries: DirEntry[] = []
  try {
    entries = await readDir(folderPath, {
      // recursive: true,
    })
  }
  catch (e) {
    console.error(e)
    console.error('Error reading folder')
  }
  return entries
}
