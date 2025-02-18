import type { GlobalConfig } from 'payload'

export const PrivacyPolicy: GlobalConfig = {
  slug: 'privacy-policy',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'richText',
      label: 'Content',
      name: 'content',
    },
  ],
}
