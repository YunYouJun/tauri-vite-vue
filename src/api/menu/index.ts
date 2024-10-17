import { useAppStore } from '~/stores/app'
import { getFolderEntries, openFolderDialog } from '~/tauri'

export async function openFolder() {
  const app = useAppStore()

  app.folderPath = (await openFolderDialog() || '')
  app.folderEntries = await getFolderEntries(app.folderPath)
}
