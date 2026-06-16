import { isTauri } from '@tauri-apps/api/core'
import { initMenu, initTrayMenu } from './menu'

export * from './dialog'
export * from './fs'

export async function init() {
  if (!isTauri())
    return

  await initMenu()
  await initTrayMenu()
}
