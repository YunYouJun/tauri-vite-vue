<script lang="ts" setup>
import { init } from './tauri'

// init
onBeforeMount(async () => {
  await init()
})
</script>

<template>
  <RouterView />
</template>
