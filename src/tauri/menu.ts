import type { AboutMetadata } from '@tauri-apps/api/menu'
import type { TrayIconOptions } from '@tauri-apps/api/tray'
import { defaultWindowIcon } from '@tauri-apps/api/app'
import { Menu, PredefinedMenuItem, Submenu } from '@tauri-apps/api/menu'
import { TrayIcon } from '@tauri-apps/api/tray'

import { getCurrentWindow } from '@tauri-apps/api/window'
import { consola } from 'consola'
import pkg from '../../package.json'

import { openFolder } from '../api'

const nowYear = new Date().getFullYear()

/**
 * init menu and tray
 */
export async function initMenu() {
  const currentWindow = getCurrentWindow()
  const aboutMetadata: AboutMetadata = {
    name: pkg.name,
    version: pkg.version,
    authors: [pkg.author.name],
    comments: pkg.description,
    website: pkg.homepage,
    copyright: `${nowYear} ${pkg.author.name}`,
    license: pkg.license,
  }

  const aboutMenu = await Submenu.new({
    text: 'About',
    items: [
      {
        id: 'about',
        text: 'About',
        action: () => {

        },
      },
    ],
  })

  const separator = await PredefinedMenuItem.new({
    item: 'Separator',
  })
  const fileMenu = await Submenu.new({
    text: 'File',
    items: [
      {
        id: 'open',
        text: 'Open',
        accelerator: 'CmdOrCtrl+O',
        action: openFolder,
      },
      separator,
      {
        id: 'create',
        text: 'Create',
        accelerator: 'CmdOrCtrl+N',
        action: () => {
          consola.success('New File')
          // todo
        },
      },
    ],
  })

  const windowMenu = await Submenu.new({
    text: 'Window',
    items: [
      {
        id: 'minimize',
        text: 'Minimize',
        action: () => {
          currentWindow.minimize()
        },
      },
      {
        id: 'maximize',
        text: 'Maximize',
        action: () => {
          currentWindow.maximize()
        },
      },
      {
        id: 'toggle-fullscreen',
        text: 'Toggle Fullscreen',
        action: async () => {
          const isFullscreen = await currentWindow.isFullscreen()
          await currentWindow.setFullscreen(!isFullscreen)
        },
      },
      {
        id: 'hide',
        text: 'Hide',
        action: () => {
          currentWindow.hide()
        },
      },
      {
        id: 'close',
        text: 'Close',
        action: () => {
          currentWindow.close()
        },
      },
    ],
  })

  const menu = await Menu.new({
    items: [
      aboutMenu,
      fileMenu,
      windowMenu,
    ],
  })

  await menu.setAsAppMenu()

  return {
    aboutMetadata,
  }
}

/**
 * init tray menu
 */
export async function initTrayMenu() {
  const currentWindow = getCurrentWindow()
  // 托盘菜单
  const trayMenu = await Menu.new({
    items: [
      {
        id: 'open',
        text: 'Open',
        action: openFolder,
      },
      {
        id: 'create',
        text: 'Create',
        action: () => {
          consola.success('New File')
          // todo
        },
      },
      {
        id: 'quit',
        text: 'Quit',
        action: () => {
          currentWindow.close()
        },
      },
    ],
  })

  const icon = await defaultWindowIcon()
  const trayIconOptions: TrayIconOptions = {
    ...(icon ? { icon } : {}),
    tooltip: 'awesome tauri app',
    menu: trayMenu,
    showMenuOnLeftClick: true,
    action: (event) => {
      switch (event.type) {
        case 'Click':
          consola.info(
            `mouse ${event.button} button pressed, state: ${event.buttonState}`,
          )
          break
        case 'DoubleClick':
          consola.info(`mouse ${event.button} button pressed`)
          break
        case 'Enter':
          consola.info(
            `mouse hovered tray at ${event.rect.position.x}, ${event.rect.position.y}`,
          )
          break
        case 'Move':
          consola.info(
            `mouse moved on tray at ${event.rect.position.x}, ${event.rect.position.y}`,
          )
          break
        case 'Leave':
          consola.info(
            `mouse left tray at ${event.rect.position.x}, ${event.rect.position.y}`,
          )
          break
      }
    },
  }

  const tray = await TrayIcon.new(trayIconOptions)

  return {
    menu: trayMenu,
    tray,
  }
}
