<script setup lang="ts">
import { ref } from 'vue'
import { invoke } from '@tauri-apps/api/core'

const greetMsg = ref('')
const name = ref('')

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  greetMsg.value = await invoke('greet', { name: name.value })
}
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

  <form class="row mt-4" @submit.prevent="greet">
    <input id="greet-input" v-model="name" placeholder="Enter a name...">
    <button type="submit">
      Greet
    </button>
  </form>
  <p>{{ greetMsg }}</p>
</template>

<style scoped>
input,
button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  color: #0f0f0f;
  background-color: #ffffff;
  transition: border-color 0.25s;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
}

#greet-input {
  margin-right: 5px;
}

@media (prefers-color-scheme: dark) {
  :root {
    color: #f6f6f6;
    background-color: #2f2f2f;
  }

  a:hover {
    color: #24c8db;
  }

  input,
  button {
    color: #ffffff;
    background-color: #0f0f0f98;
  }
  button:active {
    background-color: #0f0f0f69;
  }
}

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
