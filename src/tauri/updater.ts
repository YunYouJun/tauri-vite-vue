/* eslint-disable antfu/no-top-level-await */
import { relaunch } from '@tauri-apps/plugin-process'
import { check } from '@tauri-apps/plugin-updater'
import { consola } from 'consola'

const update = await check()
if (update) {
  consola.log(`Update to ${update.version} available! Date: ${update.date}`)
  consola.log(`Release notes: ${update.body}`)
  await update.downloadAndInstall()
  // requires the `process` plugin
  await relaunch()
}
