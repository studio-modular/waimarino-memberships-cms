import type { Block } from 'payload'
import ColorField from '~/fields/color'
import { CarouselBlock } from './Carousel'
import { RichTextBlock } from './TextField'
import { MediaBlock } from './Media'

export const SectionsBlock: Block = {
  slug: 'sections-block',
  interfaceName: 'Sections',
  labels: {
    singular: 'Sections',
    plural: 'Sections',
  },
  fields: [
    {
      type: 'blocks',
      blocks: [CarouselBlock, MediaBlock, RichTextBlock],
      name: 'sections',
      minRows: 1,
      required: true,
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
