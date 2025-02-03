import { CarouselBlock } from '@/blocks/Carousel'
import { MediaBlock } from '@/blocks/Media'
import { PanelsBlock } from '@/blocks/Panel'
import { RichTextBlock } from '@/blocks/TextField'
import { slugField } from '@/fields/slug'
import type { CollectionConfig } from 'payload'
import ContactForm from '~/blocks/ContactForm'
import ImagesBlock from '~/blocks/Images'
import PartnershipsForm from '~/blocks/PartnershipsForm'
import { SectionsBlock } from '~/blocks/Sections'
import { TimelineBlock } from '~/blocks/Timeline'

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: () => true,
  },
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
      blocks: [
        CarouselBlock,
        ContactForm,
        ImagesBlock,
        MediaBlock,
        PanelsBlock,
        PartnershipsForm,
        RichTextBlock,
        SectionsBlock,
        TimelineBlock,
      ],
    },
    ...slugField('title'),
  ],
}
