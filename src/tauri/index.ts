import { initMenu, initTrayMenu } from './menu'

export * from './fs'
export * from './dialog'

export async function init() {
  await initMenu()
  await initTrayMenu()
}
