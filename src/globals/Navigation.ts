import type { GlobalConfig } from 'payload'
import { DropdownBlock } from '~/blocks/Dropdown'
import { ButtonBlock } from '~/fields/link'

export const Navigation: GlobalConfig = {
  slug: 'navigation',
  fields: [
    {
      type: 'blocks',
      label: 'Items',
      name: 'items',
      blocks: [ButtonBlock, DropdownBlock],
    },
  ],
}
