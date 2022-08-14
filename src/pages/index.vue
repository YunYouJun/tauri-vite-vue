<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
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
  <HelloWorld msg="Tauri + Vite + Vue" />
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
