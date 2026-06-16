<script lang="ts" setup>
import { init } from './tauri'

// init
onBeforeMount(async () => {
  await init()
})
</script>

<template>
  <main w="full" h="full" class="text-center text-gray-700 dark:text-gray-200">
    <NavMenu />
    <RouterView />
    <BaseFooter />
  </main>
</template>
