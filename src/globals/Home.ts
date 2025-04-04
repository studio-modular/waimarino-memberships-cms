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

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      async function invalidateHomePage() {
        process.env.NODE_ENV === 'development'
          ? fetch('http://localhost:4002/api/vercel/invalidate/HomePage')
          : fetch('https://waimarino-app.vercel.app/api/vercel/invalidate/HomePage')
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
      ],
    },
  ],
}
