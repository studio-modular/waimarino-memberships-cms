import type { GlobalConfig } from 'payload'

export const Enquire: GlobalConfig = {
  slug: 'enquire',
  access: {
    read: () => true,
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
