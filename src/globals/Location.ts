import type { GlobalConfig } from 'payload'
import {
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
} from '../blocks/sections/design-group'

export const Location: GlobalConfig = {
  slug: 'location',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      async function invalidateLocation() {
        process.env.NODE_ENV === 'development'
          ? fetch('http://localhost:4002/api/vercel/invalidate/Location')
          : fetch('https://waimarino-app.vercel.app/api/vercel/invalidate/Location')
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
      type: 'textarea',
      label: 'Marker Text',
      name: 'markerText',
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
      ],
    },
  ],
}
