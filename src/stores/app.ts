import type { DirEntry } from '@tauri-apps/plugin-fs'
import { isTauri } from '@tauri-apps/api/core'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { shallowRef } from 'vue'

export const useAppStore = defineStore('app', () => {
  const inTauri = shallowRef(isTauri())

  const folderPath = shallowRef('')
  const folderEntries = shallowRef<DirEntry[]>([])

  return {
    inTauri,

    folderPath,
    folderEntries,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
