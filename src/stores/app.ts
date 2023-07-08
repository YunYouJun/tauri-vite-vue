import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'
import type { FileEntry } from '@tauri-apps/api/fs'

export const useAppStore = defineStore('app', () => {
  const folderPath = ref('')
  const folderEntries = ref<FileEntry[]>([])

  return {
    folderPath,
    folderEntries,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
