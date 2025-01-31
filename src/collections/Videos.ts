import AspectRatioField from '@/fields/aspect-ratio'
import type { CollectionConfig } from 'payload'

export const Videos: CollectionConfig = {
  slug: 'videos',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'caption',
      label: 'Caption',
      type: 'text',
      required: true,
    },
    {
      name: 'cover',
      label: 'Cover',
      required: true,
      type: 'relationship',
      relationTo: 'images',
    },
    AspectRatioField,
  ],
  upload: {
    mimeTypes: ['video/mp4'],
    staticDir: 'media',
  },
}
