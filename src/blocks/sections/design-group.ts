import type { Block } from 'payload'
import { SectionContent, SectionHeading, SectionMediaBlock } from './utils'
import { SectionCarousel } from '../Carousel'

export const Section01: Block = {
  fields: [
    SectionHeading('heading'),
    SectionHeading('subheading'),
    SectionMediaBlock('mediaBlockOne'),
    SectionMediaBlock('mediaBlockTwo'),
    SectionContent('copyOne'),
  ],
  interfaceName: 'Section01Block',
  slug: 'section-01-block',
}

export const Section02: Block = {
  fields: [
    SectionHeading('heading'),
    SectionMediaBlock('mediaBlockOne'),
    SectionContent('copyOne'),
  ],
  interfaceName: 'Section02Block',
  slug: 'section-02-block',
}

export const Section03: Block = {
  fields: [
    SectionHeading('heading'),
    SectionMediaBlock('mediaBlockOne'),
    SectionContent('copyOne'),
  ],
  interfaceName: 'Section03Block',
  slug: 'section-03-block',
}

export const Section04: Block = {
  fields: [
    SectionMediaBlock('mediaBlockOne'),
    SectionContent('copyOne'),
    SectionContent('copyTwo'),
  ],
  interfaceName: 'Section04Block',
  slug: 'section-04-block',
}

export const Section05: Block = {
  fields: [
    SectionHeading('heading'),
    SectionMediaBlock('mediaBlockOne'),
    SectionContent('copyOne'),
    SectionContent('copyTwo'),
  ],
  interfaceName: 'Section05Block',
  slug: 'section-05-block',
}

export const Section06: Block = {
  fields: [
    SectionMediaBlock('mediaBlockOne'),
    SectionContent('copyOne'),
    SectionContent('copyTwo'),
  ],
  interfaceName: 'Section06Block',
  slug: 'section-06-block',
}

export const Section07: Block = {
  fields: [
    SectionHeading('heading'),
    SectionMediaBlock('mediaBlockOne'),
    SectionContent('copyOne'),
    SectionContent('copyTwo'),
  ],
  interfaceName: 'Section07Block',
  slug: 'section-07-block',
}

export const Section08: Block = {
  fields: [
    SectionHeading('heading'),
    SectionMediaBlock('mediaBlockOne'),
    SectionContent('copyOne'),
    SectionContent('copyTwo'),
  ],
  interfaceName: 'Section08Block',
  slug: 'section-08-block',
}

export const Section09: Block = {
  fields: [
    SectionHeading('heading'),
    SectionContent('copyOne'),
    SectionMediaBlock('mediaBlockOne'),
  ],
  interfaceName: 'Section09Block',
  slug: 'section-09-block',
}

export const Section10: Block = {
  fields: [
    SectionHeading('heading'),
    SectionContent('copyOne'),
    SectionContent('copyTwo'),
    SectionMediaBlock('mediaBlockOne'),
  ],
  interfaceName: 'Section10Block',
  slug: 'section-10-block',
}

export const Section11: Block = {
  fields: [...SectionCarousel.fields],
  interfaceName: 'Section11Block',
  slug: 'section-11-block',
}

export const Section12: Block = {
  fields: [SectionHeading('heading'), SectionContent('copyOne')],
  interfaceName: 'Section12Block',
  slug: 'section-12-block',
}

export const Section13: Block = {
  fields: [
    {
      type: 'array',
      fields: [
        {
          type: 'text',
          name: 'heading',
        },
        {
          type: 'text',
          name: 'link',
        },
        {
          type: 'text',
          name: 'title',
        },
        {
          type: 'text',
          name: 'nextToTitle',
        },
        {
          type: 'text',
          name: 'byline',
        },
        {
          type: 'array',
          name: 'items',
          fields: [
            {
              type: 'textarea',
              name: 'label',
            },
            {
              type: 'textarea',
              name: 'description',
            },
          ],
        },
        {
          type: 'richText',
          name: 'moreDetails',
          label: 'More Details',
        },
      ],
      name: 'panels',
      required: true,
      minRows: 1,
    },
  ],
  interfaceName: 'Section13Block',
  slug: 'section-13-block',
}

export const Section14: Block = {
  fields: [...SectionCarousel.fields, SectionContent('copyOne')],
  interfaceName: 'Section14Block',
  slug: 'section-14-block',
}

// TODO

export const Section15: Block = {
  fields: [
    ...SectionCarousel.fields,
    SectionHeading('heading'),
    SectionContent('copyOne'),
    SectionContent('copyTwo'),
  ],
  interfaceName: 'Section15Block',
  slug: 'section-15-block',
}

export const Section16: Block = {
  fields: [
    SectionHeading('heading'),
    SectionContent('copyOne'),
    SectionMediaBlock('mediaBlockOne'),
  ],
  interfaceName: 'Section16Block',
  slug: 'section-16-block',
}

export const Section17: Block = {
  fields: [
    SectionHeading('heading'),
    SectionHeading('link'),
    SectionHeading('linkText'),
    {
      type: 'array',
      name: 'milestones',
      minRows: 1,
      fields: [
        {
          type: 'text',
          name: 'title',
          required: true,
        },
        {
          type: 'richText',
          name: 'content',
          required: true,
        },
      ],
    },
  ],
  interfaceName: 'Section17Block',
  slug: 'section-17-block',
}

export const Section18: Block = {
  fields: [
    {
      type: 'array',
      name: 'panels',
      fields: [
        ...SectionCarousel.fields,
        SectionHeading('title'),
        SectionHeading('subtitle'),
        SectionHeading('startingPrice'),
        SectionContent('copyOne'),
        SectionHeading('exploreLink'),
        SectionHeading('bookingLink'),
      ],
    },
  ],
  interfaceName: 'Section18Block',
  slug: 'section-18-block',
}

export const Section19: Block = {
  fields: [
    {
      name: 'title',
      type: 'textarea',
      required: true,
    },
    {
      name: 'content',
      type: 'textarea',
      required: true,
    },
  ],
  interfaceName: 'Section19Block',
  slug: 'section-19-block',
}

export const Section20: Block = {
  fields: [SectionMediaBlock('mediaBlockOne')],
  interfaceName: 'Section20Block',
  slug: 'section-20-block',
}

export const Section21: Block = {
  fields: [
    SectionContent('copyOne'),
    SectionContent('copyTwo'),
    SectionMediaBlock('mediaBlockOne'),
  ],
  interfaceName: 'Section21Block',
  slug: 'section-21-block',
}

export const Section22: Block = {
  fields: [
    SectionContent('copyOne'),
    SectionContent('copyTwo'),
    SectionMediaBlock('mediaBlockOne'),
  ],
  interfaceName: 'Section22Block',
  slug: 'section-22-block',
}

export const Section23: Block = {
  fields: [
    SectionHeading('heading'),
    SectionContent('copyOne'),
    SectionContent('copyTwo'),
    SectionMediaBlock('mediaBlockOne'),
  ],
  interfaceName: 'Section23Block',
  slug: 'section-23-block',
}

export const Section24: Block = {
  fields: [...SectionCarousel.fields],
  interfaceName: 'Section24Block',
  slug: 'section-24-block',
}

export const SectionSeparator: Block = {
  fields: [
    {
      name: 'isFullWidth',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
  interfaceName: 'SectionSeparatorBlock',
  slug: 'section-separator-block',
}
