import type { Block } from 'payload'
import { MediaBlock } from './Media'
import WidthField from '~/fields/width'

export const CarouselBlock: Block = {
  slug: 'carousel',
  interfaceName: 'CarouselBlock',
  fields: [
    {
      type: 'array',
      required: true,
      minRows: 1,
      name: 'slides',
      fields: [...MediaBlock.fields],
    },
    WidthField,
  ],
}
