import AspectRatioField from '@/fields/aspect-ratio'
import type { CollectionConfig } from 'payload'
import { slugField } from '~/fields/slug'

export const Videos: CollectionConfig = {
  slug: 'videos',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      async function invalidateVideos() {
        process.env.NODE_ENV === 'development'
          ? fetch('http://localhost:4002/api/vercel/invalidate/Videos')
          : fetch('https://waimarino-app.vercel.app/api/vercel/invalidate/Videos')
      },
    ],
  },
  fields: [
    ...slugField('title'),
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'caption',
      label: 'Caption',
      type: 'text',
      required: true,
    },
    {
      name: 'muxPlaybackId',
      label: 'Mux Playback ID',
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
    {
      name: 'isFeatured',
      label: 'Featured?',
      type: 'checkbox',
      defaultValue: true,
      required: true,
    },
  ],
  // upload: {
  //   mimeTypes: ['video/mp4'],
  //   staticDir: 'media',
  // },
}
