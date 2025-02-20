import { slugField } from '@/fields/slug'
import type { CollectionConfig } from 'payload'

export const Properties: CollectionConfig = {
  slug: 'properties',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      async function invalidateProperties() {
        process.env.NODE_ENV === 'development'
          ? fetch('http://localhost:4002/api/vercel/invalidate/Properties')
          : fetch('https://waimarino-app.vercel.app/api/vercel/invalidate/Properties')
      },
    ],
  },
  fields: [
    ...slugField('title'),
    {
      type: 'text',
      label: 'Title',
      name: 'title',
      required: true,
      unique: true,
    },
    {
      type: 'text',
      label: 'Subtitle',
      name: 'subtitle',
      required: true,
    },
    {
      type: 'text',
      label: 'Starting Price',
      name: 'startingPrice',
      required: true,
    },
    {
      type: 'textarea',
      label: 'Description',
      name: 'description',
      required: true,
    },
    {
      type: 'richText',
      label: 'Content',
      name: 'content',
      required: true,
    },
    {
      type: 'array',
      label: 'Media',
      name: 'media',
      fields: [
        {
          name: 'asset',
          label: 'Asset',
          required: true,
          relationTo: ['images', 'videos'],
          type: 'relationship',
        },
        {
          name: 'description',
          type: 'text',
        },
      ],
    },
  ],
}
