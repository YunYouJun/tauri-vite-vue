<script setup lang="ts">
import type { FileEntry } from '@tauri-apps/api/fs'
import { ref } from 'vue'
import { useAppStore } from '~/stores/app'
import { getFolderEntries, openFolderDialog } from '~/tauri'

defineProps<{ msg: string }>()

const app = useAppStore()

const folderEntries = ref<FileEntry[]>([])

async function openFolder() {
  app.folderPath = await openFolderDialog()

  folderEntries.value = await getFolderEntries(app.folderPath)
}
</script>

<template>
  <h1 font="bold">
    {{ msg }}
  </h1>

  <div class="card" text-center>
    <button class="t-button mb-4" type="button" @click="openFolder">
      Open Folder ...
    </button>
    <p font="bold black" text="lg" my="4">
      {{ app.folderPath || 'Folder Path' }}
    </p>

    <table text="left" m="auto">
      <thead>
        <tr>
          <th>Name</th>
          <th>Path</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="entry in folderEntries" :key="entry.path">
          <td>{{ entry.name }}</td>
          <td>
            <code text="xs" bg="gray-50 dark:dark-500" p="x-2 y-1" rounded>
              {{ entry.path }}
            </code>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>
    Check out
    <a href="https://github.com/YunYouJun/tauri-vite-vue" target="_blank">tauri-vite-vue</a>, Tauri + Vue + Vite starter
  </p>
  <p class="read-the-docs mt-4">
    Click on the logos to learn more
  </p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
