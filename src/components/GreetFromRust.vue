<script setup lang="ts">
import { invoke, isTauri } from '@tauri-apps/api/core'
import { shallowRef } from 'vue'

const canInvoke = isTauri()
const greetMsg = shallowRef('')
const name = shallowRef('')

async function greet() {
  if (!canInvoke)
    return

  // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  greetMsg.value = await invoke('greet', { name: name.value })
}
</script>

<template>
  <form class="mt-4 gap-2 items-center justify-center p-2" flex="~" @submit.prevent="greet">
    <input v-model="name" class="greet-input" placeholder="Enter a name...">
    <button type="submit" class="greet-button hover:bg-light" :disabled="!canInvoke">
      Greet
    </button>
  </form>
  <p class="p-2">
    {{ greetMsg }}
  </p>
</template>

<style scoped>
.greet-input,
.greet-button {
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

.greet-button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.greet-input {
  margin-right: 5px;
}

:global(.dark) .greet-input,
:global(.dark) .greet-button {
  color: #ffffff;
  background-color: #0f0f0f98;
}

:global(.dark) .greet-button:active {
  background-color: #0f0f0f69;
}
</style>
