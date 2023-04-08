import type { FileEntry } from '@tauri-apps/api/fs'
import { readDir } from '@tauri-apps/api/fs'

export async function getFolderEntries(folderPath: string) {
  if (!folderPath)
    return []

  let entries: FileEntry[] = []
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
