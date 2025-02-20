import type { GlobalConfig } from 'payload'

export const TermsAndConditions: GlobalConfig = {
  slug: 'terms-and-conditions',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      async function invalidateTermsAndConditions() {
        process.env.NODE_ENV === 'development'
          ? fetch('http://localhost:4002/api/vercel/invalidate/TermsAndConditions')
          : fetch('https://waimarino-app.vercel.app/api/vercel/invalidate/TermsAndConditions')
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
