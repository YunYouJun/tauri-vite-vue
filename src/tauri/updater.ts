import { check } from '@tauri-apps/plugin-updater'
import { relaunch } from '@tauri-apps/plugin-process'
import consola from 'consola'

const update = await check()
if (update?.available) {
  consola.log(`Update to ${update.version} available! Date: ${update.date}`)
  consola.log(`Release notes: ${update.body}`)
  await update.downloadAndInstall()
  // requires the `process` plugin
  await relaunch()
}
