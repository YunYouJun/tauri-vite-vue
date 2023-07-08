<script lang="ts" setup>
import { listenMenuEvent } from './tauri'

onMounted(() => {
  listenMenuEvent()
})
</script>

<template>
  <RouterView />
</template>
