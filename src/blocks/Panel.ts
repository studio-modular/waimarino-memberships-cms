import ColorField from '@/fields/color'
import { ButtonsField } from '@/fields/link'
import type { Block } from 'payload'

export const PanelBlock: Block = {
  slug: 'panel',
  interfaceName: 'Panel',
  fields: [
    {
      type: 'text',
      name: 'heading',
    },
    {
      type: 'richText',
      name: 'description',
    },
    {
      type: 'array',
      name: 'items',
      fields: [
        {
          type: 'textarea',
          name: 'label',
        },
        {
          type: 'textarea',
          name: 'description',
        },
      ],
    },
    {
      type: 'richText',
      name: 'moreDetails',
      label: 'More Details',
    },
    ButtonsField,
  ],
}

export const PanelsBlock: Block = {
  slug: 'panels',
  interfaceName: 'Panels',
  labels: {
    singular: 'Panels',
    plural: 'Panels',
  },
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
      type: 'array',
      fields: [...PanelBlock.fields],
      name: 'panels',
      required: true,
      minRows: 1,
    },
    {
      label: 'After Text',
      name: 'afterText',
      type: 'richText',
    },
    {
      type: 'checkbox',
      name: 'isFullScreen',
      label: 'Full Screen?',
      defaultValue: false,
    },
    ColorField,
  ],
}
