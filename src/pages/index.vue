<script setup lang="ts">
import { useAppStore } from '../stores/app'

const appStore = useAppStore()
const globalVars = computed<{
  name: string
  exists: boolean
}[]>(() => {
  return [
    {
      name: 'window.__TAURI_INTERNALS__',
      exists: appStore.inTauri,
    },
  ]
})
</script>

<template>
  <div class="mb-4">
    <a href="https://tauri.app/" target="_blank">
      <img src="../../src-tauri/icons/icon.png" class="logo tauri" alt="Tauri logo">
    </a>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo">
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="../assets/vue.svg" class="logo vue" alt="Vue logo">
    </a>
  </div>

  <ul class="my-2">
    <li v-for="globalVar in globalVars" :key="globalVar.name">
      <strong>{{ globalVar.name }}</strong> {{ globalVar.exists ? '✅' : '❌' }}
    </li>
  </ul>

  <HelloWorld msg="Tauri + Vite + Vue" />

  <GreetFromRust />
</template>

<style scoped>
.logo {
  display: inline-block;
  height: 10em;
  padding: 1.5em;
  will-change: filter;
  transition: 0.2s;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.tauri:hover {
  filter: drop-shadow(0 0 2em #ffd500aa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
