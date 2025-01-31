import type { Block } from 'payload'
import { LinkBlockWithDescription } from '~/fields/link'

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
      fields: [...LinkBlockWithDescription.fields],
      name: 'links',
      required: true,
      minRows: 1,
    },
  ],
}
