import type { Block } from 'payload'

export const ImagesBlock: Block = {
  fields: [
    {
      label: 'Images',
      name: 'images',
      fields: [
        {
          name: 'image',
          type: 'relationship',
          hasMany: false,
          relationTo: 'images',
        },
      ],
      type: 'array',
    },
  ],
  interfaceName: 'ImagesBlock',
  slug: 'images-block',
}

export default ImagesBlock
