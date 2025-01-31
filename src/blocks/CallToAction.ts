import { ButtonsField } from '@/fields/link'
import type { Block } from 'payload'

export const CallToAction: Block = {
  fields: [
    {
      name: 'heading',
      required: true,
      type: 'text',
    },
    {
      name: 'description',
      required: true,
      type: 'richText',
    },
    ButtonsField,
  ],
  interfaceName: 'CallToActionBlock',
  slug: 'call-to-action',
}

export default CallToAction
