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

// export const Section11: Block = {
//   fields: [...SectionCarousel.fields, SectionHeading('heading'), SectionContent('copyOne')],
//   interfaceName: 'Section11Block',
//   slug: 'section-11-block',
// }

// export const Section12: Block = {
//   fields: [...SectionMedia.fields],
//   interfaceName: 'Section12Block',
//   slug: 'section-12-block',
// }

// export const Section13: Block = {
//   fields: [...SectionCarousel.fields],
//   interfaceName: 'Section13Block',
//   slug: 'section-13-block',
// }
