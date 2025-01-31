import type { Field } from 'payload'
import { CarouselBlock } from '../blocks/Carousel'
import { RichTextBlock } from '../blocks/TextField'
import { MediaBlock } from '../blocks/Media'

export const SectionsField: Field = {
  name: 'sections',
  type: 'blocks',
  blocks: [CarouselBlock, RichTextBlock, MediaBlock],
}
