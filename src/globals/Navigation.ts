import type { GlobalConfig } from 'payload'
import { DropdownBlock } from '~/blocks/Dropdown'
import { LinkBlock } from '~/fields/link'

export const Navigation: GlobalConfig = {
  slug: 'navigation',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'blocks',
      label: 'Items',
      name: 'items',
      blocks: [LinkBlock, DropdownBlock],
    },
  ],
}
