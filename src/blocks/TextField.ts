import ColorField from '@/fields/color'
import { ButtonsBlock } from '@/fields/link'
import {
  BlocksFeature,
  BoldFeature,
  EXPERIMENTAL_TableFeature,
  HeadingFeature,
  ItalicFeature,
  lexicalEditor,
  LinkFeature,
  OrderedListFeature,
  ParagraphFeature,
  UnderlineFeature,
  UnorderedListFeature,
} from '@payloadcms/richtext-lexical'
import type { Block } from 'payload'
import WidthField from '~/fields/width'

export const RichTextBlock: Block = {
  slug: 'rich-text',
  interfaceName: 'RichText',
  fields: [
    {
      name: 'content',
      label: 'Content',
      required: true,
      type: 'richText',
      editor: lexicalEditor({
        features: () => [
          BoldFeature(),
          ItalicFeature(),
          UnderlineFeature(),
          ParagraphFeature(),
          HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4', 'h5', 'h6'] }),
          UnorderedListFeature(),
          OrderedListFeature(),
          LinkFeature(),
          BlocksFeature({ blocks: [ButtonsBlock] }),
          EXPERIMENTAL_TableFeature(),
        ],
      }),
    },
    {
      type: 'checkbox',
      name: 'isFullScreen',
      label: 'Full Screen?',
      defaultValue: false,
    },
    ColorField,
    WidthField,
  ],
}
