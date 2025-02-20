import type { GlobalConfig } from 'payload'

export const Enquire: GlobalConfig = {
  slug: 'enquire',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      async function invalidateEnquire() {
        process.env.NODE_ENV === 'development'
          ? fetch('http://localhost:4002/api/vercel/invalidate/Enquire')
          : fetch('https://waimarino-app.vercel.app/api/vercel/invalidate/Enquire')
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
      type: 'richText',
      label: 'Content',
      name: 'content',
    },
  ],
}
