import type { Field } from 'payload'
import { SectionCarousel } from '../Carousel'
import { SectionMedia } from '../Media'
import {
  BoldFeature,
  HeadingFeature,
  ItalicFeature,
  lexicalEditor,
  OrderedListFeature,
  ParagraphFeature,
  UnderlineFeature,
  UnorderedListFeature,
} from '@payloadcms/richtext-lexical'

export const SectionHeading: (name: string) => Field = (name = 'heading') => ({
  name,
  required: true,
  type: 'text',
})

export const SectionMediaBlock: (name: string) => Field = (name = 'mediaBlockOne') => ({
  type: 'blocks',
  blocks: [SectionCarousel, SectionMedia],
  name,
  minRows: 1,
  maxRows: 1,
  required: true,
})

export const SectionContent: (name: string) => Field = (name = 'copy') => ({
  type: 'richText',
  name,
  required: true,
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      BoldFeature(),
      ItalicFeature(),
      UnderlineFeature(),
      ParagraphFeature(),
      UnorderedListFeature(),
      OrderedListFeature(),
      HeadingFeature({
        enabledHeadingSizes: ['h2', 'h3'],
      }),
    ],
  }),
})
