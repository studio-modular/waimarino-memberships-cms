import type { CollectionConfig } from 'payload'

export const Images: CollectionConfig = {
  slug: 'images',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'caption',
      label: 'Caption',
      type: 'text',
      required: true,
    },
    {
      name: 'alternativeText',
      label: 'Alternative Text',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    adminThumbnail: 'thumbnail',
    imageSizes: [
      {
        height: 300,
        name: 'thumbnail',
        position: 'centre',
        width: 300,
      },
      {
        width: 750,
        name: 'small',
      },
      {
        width: 1500,
        name: 'medium',
      },
      {
        width: 2250,
        name: 'large',
      },
      {
        width: 3000,
        name: 'extra-large',
      },
    ],
    mimeTypes: ['image/jpg', 'image/jpeg'],
    staticDir: 'media',
  },
}
