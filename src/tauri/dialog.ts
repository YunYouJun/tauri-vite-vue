import { open } from '@tauri-apps/plugin-dialog'

// Open a file dialog
export async function openFolderDialog() {
  const folderPath = await open({
    // default use last path
    title: 'Please select a folder',
    directory: true,
  })
  return folderPath
}
