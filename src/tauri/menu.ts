import type { TrayIconOptions } from '@tauri-apps/api/tray'
import { TrayIcon } from '@tauri-apps/api/tray'
import type { AboutMetadata } from '@tauri-apps/api/menu'
import { Menu, PredefinedMenuItem, Submenu } from '@tauri-apps/api/menu'
import { getCurrentWindow } from '@tauri-apps/api/window'

import consola from 'consola'
import { defaultWindowIcon } from '@tauri-apps/api/app'
import { openFolder } from '../api'

import pkg from '../../package.json'

const nowYear = new Date().getFullYear()

/**
 * init menu and tray
 */
export async function initMenu() {
  const _aboutMetadata: AboutMetadata = {
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
          getCurrentWindow().minimize()
        },
      },
      {
        id: 'maximize',
        text: 'Maximize',
        action: () => {
          getCurrentWindow().maximize()
        },
      },
      {
        id: 'toggle-fullscreen',
        text: 'Toggle Fullscreen',
        action: async () => {
          const isFullscreen = await getCurrentWindow().isFullscreen()
          getCurrentWindow().setFullscreen(isFullscreen)
        },
      },
      {
        id: 'hide',
        text: 'Hide',
        action: () => {
          getCurrentWindow().hide()
        },
      },
      {
        id: 'close',
        text: 'Close',
        action: () => {
          getCurrentWindow().close()
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

  menu.setAsAppMenu()
}

/**
 * init tray menu
 */
export async function initTrayMenu() {
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
      },
    ],
  })

  const trayIconOptions: TrayIconOptions = {
    icon: await defaultWindowIcon() || '',
    tooltip: 'awesome tauri app',
    menu: trayMenu,
    menuOnLeftClick: true,
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
