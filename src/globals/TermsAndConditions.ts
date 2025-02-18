import type { GlobalConfig } from 'payload'

export const TermsAndConditions: GlobalConfig = {
  slug: 'terms-and-conditions',
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
