import { dialog } from '@tauri-apps/api'

// Open a file dialog
export async function openFolderDialog() {
  const folderPath = await dialog.open({
    // default use last path
    title: 'Please select a folder',
    directory: true,
  }) as string

  return folderPath
}
