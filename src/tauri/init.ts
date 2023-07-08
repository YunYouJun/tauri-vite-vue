import type { Event } from '@tauri-apps/api/event'
import { listen } from '@tauri-apps/api/event'
import consola from 'consola'
import { openFolder } from '~/api'

interface MenuItem {
  id: string
  callback: () => void
}

const menuItems: MenuItem[] = [
  {
    id: 'open',
    callback: openFolder,
  },
  {
    id: 'create',
    callback: () => {
      consola.success('New File')
      // todo
    },
  },
]

export async function listenMenuEvent() {
  try {
    const unlisten = await listen('menu-event', (event: Event<any>) => {
      consola.info('menu-event', event.payload)
      const menuItemId = event.payload
      const menuItem = menuItems.find(item => item.id === menuItemId)

      menuItem?.callback()
    })
    return unlisten
  }
  catch (e) {
    consola.error(e)
  }
}
