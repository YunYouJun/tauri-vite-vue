import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'
import type { DirEntry } from '@tauri-apps/plugin-fs'

export const useAppStore = defineStore('app', () => {
  const folderPath = ref('')
  const folderEntries = ref<DirEntry[]>([])

  return {
    folderPath,
    folderEntries,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
