import { LabelField, LinkField, VariantField } from '@/fields/link'
import type { Block } from 'payload'
import WidthField from '~/fields/width'

export const MediaBlock: Block = {
  slug: 'media',
  interfaceName: 'MediaBlock',
  fields: [
    {
      name: 'asset',
      label: 'Asset',
      required: true,
      relationTo: ['images', 'videos'],
      type: 'relationship',
    },
    {
      name: 'heading',
      type: 'text',
    },
    {
      name: 'description',
      type: 'text',
    },
    {
      type: 'array',
      name: 'buttons',
      fields: [LinkField, LabelField, VariantField],
    },
    {
      type: 'checkbox',
      name: 'isFullScreen',
      label: 'Full Screen?',
      defaultValue: false,
    },
    WidthField,
  ],
}
