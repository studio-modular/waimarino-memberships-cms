import type { Block } from 'payload'
import { MediaBlock } from './Media'
import ColorField from '@/fields/color'
import {
  BlocksFeature,
  BoldFeature,
  EXPERIMENTAL_TableFeature,
  HeadingFeature,
  ItalicFeature,
  lexicalEditor,
  LinkFeature,
  OrderedListFeature,
  ParagraphFeature,
  UnderlineFeature,
  UnorderedListFeature,
} from '@payloadcms/richtext-lexical'
import { ButtonsBlock } from '@/fields/link'

export const ContentAndCarouselBlock: Block = {
  slug: 'content-carousel',
  labels: {
    singular: 'Content and Carousel',
    plural: 'Content and Carousel',
  },
  interfaceName: 'ContentAndCarouselBlock',
  fields: [
    {
      type: 'richText',
      name: 'content',
      required: true,
      editor: lexicalEditor({
        features: () => [
          BoldFeature(),
          ItalicFeature(),
          UnderlineFeature(),
          ParagraphFeature(),
          HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4', 'h5', 'h6'] }),
          UnorderedListFeature(),
          OrderedListFeature(),
          LinkFeature(),
          BlocksFeature({ blocks: [ButtonsBlock] }),
          EXPERIMENTAL_TableFeature(),
        ],
      }),
    },
    {
      type: 'array',
      required: true,
      minRows: 1,
      name: 'slides',
      fields: [...MediaBlock.fields],
    },
    {
      type: 'checkbox',
      name: 'isFullScreen',
      label: 'Full Screen?',
      defaultValue: false,
    },
    {
      type: 'checkbox',
      name: 'reversed',
      label: 'Reversed?',
      defaultValue: false,
    },
    ColorField,
  ],
}
