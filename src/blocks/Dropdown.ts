import type { Block } from 'payload'
import { LinkBlock } from '~/fields/link'

export const DropdownBlock: Block = {
  slug: 'dropdown',
  interfaceName: 'Dropdown',
  labels: {
    singular: 'Dropdown',
    plural: 'Dropdowns',
  },
  fields: [
    {
      type: 'text',
      name: 'label',
      required: true,
    },
    {
      type: 'array',
      fields: [...LinkBlock.fields],
      name: 'links',
      required: true,
      minRows: 1,
    },
  ],
}
