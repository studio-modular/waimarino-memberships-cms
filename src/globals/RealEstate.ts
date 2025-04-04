import type { GlobalConfig } from 'payload'
import {
  Carousel,
  FullScreen,
  Questions,
  Section01,
  Section02,
  Section03,
  Section04,
  Section05,
  Section06,
  Section07,
  Section08,
  Section09,
  Section10,
  Section11,
  Section12,
  Section13,
  Section14,
  Section15,
  Section16,
  Section17,
  Section18,
  Section19,
  Section20,
  Section21,
  Section22,
  Section23,
  Section24,
  SectionSeparator,
  Testimonials,
} from '../blocks/sections/design-group'
import Highlights from '~/blocks/Highlights'
import { SectionCarouselWithThumbnail } from '~/blocks/Carousel'
import { QuoteBlock } from '~/blocks/Quote'
import { SectionMedia } from '~/blocks/Media'
import { PropertyBlock } from '~/blocks/Property'

export const RealEstate: GlobalConfig = {
  slug: 'real-estate',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      async function invalidateRealEstate() {
        return process.env.NODE_ENV === 'development'
          ? fetch('http://localhost:3001/api/vercel/invalidate/RealEstate')
          : fetch('https://waimarino-app.vercel.app/api/vercel/invalidate/RealEstate')
      },
    ],
  },
  fields: [
    {
      type: 'text',
      label: 'Title',
      name: 'title',
      required: true,
    },
    {
      name: 'asset',
      label: 'Header Asset',
      relationTo: ['images', 'videos'],
      type: 'relationship',
    },
    {
      type: 'text',
      label: 'Arrow Text',
      name: 'arrowText',
    },
    {
      type: 'blocks',
      label: 'Content',
      name: 'content',
      blocks: [
        Section01,
        Section02,
        Section03,
        Section04,
        Section05,
        Section06,
        Section07,
        Section08,
        Section09,
        Section10,
        Section11,
        Section12,
        Section13,
        Section14,
        Section15,
        Section16,
        Section17,
        Section18,
        Section19,
        Section20,
        Section21,
        Section22,
        Section23,
        Section24,
        SectionSeparator,
        FullScreen,
        Carousel,
        Questions,
        Testimonials,
        Highlights,
        SectionCarouselWithThumbnail,
        QuoteBlock,
        SectionMedia,
        PropertyBlock,
      ],
    },
  ],
}
