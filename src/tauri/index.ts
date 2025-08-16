import { initMenu, initTrayMenu } from './menu'

export * from './dialog'
export * from './fs'

export async function init() {
  await initMenu()
  await initTrayMenu()
}
