import type { Block } from 'payload'

export const TimelineBlock: Block = {
  slug: 'timeline',
  interfaceName: 'Timeline',
  fields: [
    {
      type: 'text',
      name: 'heading',
    },
    {
      type: 'richText',
      name: 'beforeText',
    },
    {
      type: 'array',
      name: 'milestones',
      fields: [
        {
          type: 'text',
          name: 'title',
        },
        {
          type: 'richText',
          name: 'content',
        },
      ],
      minRows: 2,
    },
    {
      type: 'richText',
      name: 'afterText',
    },
  ],
}
