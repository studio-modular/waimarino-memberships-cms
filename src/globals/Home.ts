import { CarouselBlock } from '@/blocks/Carousel'
import { MediaBlock } from '@/blocks/Media'
import { PanelsBlock } from '@/blocks/Panel'
import { RichTextBlock } from '@/blocks/TextField'
import type { GlobalConfig } from 'payload'
import { SectionsBlock } from '~/blocks/Sections'

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  fields: [
    {
      type: 'text',
      label: 'Title',
      name: 'title',
      required: true,
    },
    {
      type: 'blocks',
      label: 'Content',
      name: 'content',
      blocks: [CarouselBlock, MediaBlock, PanelsBlock, RichTextBlock, SectionsBlock],
    },
  ],
}
