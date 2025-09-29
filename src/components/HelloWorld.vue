<script setup lang="ts">
import { openFolder } from '~/api'
import { useAppStore } from '~/stores/app'

defineProps<{ msg: string }>()

const app = useAppStore()

const platform = import.meta.env.TAURI_ENV_PLATFORM
const isDeskTop = computed(() => ['windows', 'darwin', 'linux'].includes(platform))
</script>

<template>
  <h1 font="bold">
    {{ msg }}({{ platform }})!
  </h1>

  <div v-if="isDeskTop" class="card" text-center>
    <button
      class="t-button mb-4" type="button"
      @click="openFolder"
    >
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
        <tr v-for="entry in app.folderEntries" :key="entry.name">
          <td>{{ entry.name }}</td>
          <td>
            <code text="xs" bg="gray-50 dark:dark-500" p="x-2 y-1" rounded>
              {{ entry.name }}
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
</template>
