import type { GlobalConfig } from 'payload'

export const PrivacyPolicy: GlobalConfig = {
  slug: 'privacy-policy',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      async function invalidatePrivacyPolicy() {
        process.env.NODE_ENV === 'development'
          ? fetch('http://localhost:4002/api/vercel/invalidate/PrivacyPolicy')
          : fetch('https://waimarino-app.vercel.app/api/vercel/invalidate/PrivacyPolicy')
      },
    ],
  },
  fields: [
    {
      type: 'richText',
      label: 'Content',
      name: 'content',
    },
  ],
}
