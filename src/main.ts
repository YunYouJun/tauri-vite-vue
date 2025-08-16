import type { UserModule } from '~/types'
import { createHead } from '@vueuse/head'
import { setupLayouts } from 'virtual:generated-layouts'
import { createApp } from 'vue'

import { createRouter, createWebHashHistory } from 'vue-router'

import { routes } from 'vue-router/auto-routes'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/css-vars.scss'
import './styles/main.css'
import './styles/index.scss'
import 'uno.css'

const router = createRouter({
  history: createWebHashHistory(),
  routes: setupLayouts(routes),
})

const app = createApp(App)

const head = createHead()
app.use(head)

// install all modules under `modules/`
Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
  .forEach(i => i.install?.({ app }))

app.use(router).mount('#app')
