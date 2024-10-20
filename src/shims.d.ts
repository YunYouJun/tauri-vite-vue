/// <reference types="vite/client" />

declare interface Window {
  // extend the window
  __TAURI_INTERNALS__: any
}

declare module '*.md' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<object, object, any>
  export default component
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<object, object, any>
  export default component
}
