import type { Block } from 'payload'

export const PartnershipsForm: Block = {
  fields: [
    {
      label: 'Heading',
      name: 'heading',
      type: 'text',
    },
    {
      label: 'Before Text',
      name: 'beforeText',
      type: 'richText',
    },
    {
      label: 'After Text',
      name: 'afterText',
      type: 'richText',
    },
  ],
  interfaceName: 'PartnershipsFormBlock',
  slug: 'partnerships-form',
}

export default PartnershipsForm
