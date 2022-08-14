import { createApp } from 'vue'
import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import type { UserModule } from '~/types'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import './styles/index.scss'
import 'uno.css'

// router
import generatedRoutes from '~pages'
const routes = setupLayouts(generatedRoutes)
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)

// install all modules under `modules/`
Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
  .forEach(i => i.install?.({ app }))

app.use(router).mount('#app')
