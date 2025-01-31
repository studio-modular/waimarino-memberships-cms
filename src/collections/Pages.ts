import { CarouselBlock } from '@/blocks/Carousel'
import { MediaBlock } from '@/blocks/Media'
import { PanelsBlock } from '@/blocks/Panel'
import { RichTextBlock } from '@/blocks/TextField'
import { slugField } from '@/fields/slug'
import type { CollectionConfig } from 'payload'
import { SectionsBlock } from '~/blocks/Sections'

export const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    {
      type: 'text',
      label: 'Title',
      name: 'title',
      required: true,
      unique: true,
    },
    {
      type: 'blocks',
      label: 'Content',
      name: 'content',
      blocks: [CarouselBlock, MediaBlock, PanelsBlock, RichTextBlock, SectionsBlock],
    },
    ...slugField('title'),
  ],
}
