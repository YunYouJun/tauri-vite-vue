<script lang="ts" setup>
import { init } from './tauri'

// init
onMounted(async () => {
  await init()
})
</script>

<template>
  <RouterView />
</template>
