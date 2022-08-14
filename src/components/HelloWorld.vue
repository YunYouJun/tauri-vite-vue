<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1 font="bold">
    {{ msg }}
  </h1>

  <div class="card">
    <button class="t-button mb-4" type="button" @click="count++">
      count is {{ count }}
    </button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
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
