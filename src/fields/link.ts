import type { Block, Field } from 'payload'

export const validateLink = (value: unknown): true | string => {
  if (typeof value !== 'string') return 'Please add a valid link'
  const match = value.startsWith('/') || value.startsWith('http')
  if (!match) return `${value} is not a valid link`
  return true
}

export const LinkField: Field = {
  name: 'link',
  label: 'Link',
  type: 'text',
  validate: validateLink,
  required: true,
  defaultValue: '/',
}

export const LabelField: Field = {
  name: 'label',
  label: 'Label',
  type: 'text',
  required: true,
}

export const VariantField: Field = {
  name: 'variant',
  label: 'Variant',
  type: 'select',
  required: true,
  defaultValue: 'link',
  options: ['primary', 'secondary', 'outline', 'ghost', 'link'],
}

export const LinkBlock: Block = {
  fields: [LinkField, LabelField],
  slug: 'link',
}

export const ButtonBlock: Block = {
  fields: [LinkField, LabelField, VariantField],
  slug: 'button',
}

export const ButtonsField: Field = {
  type: 'array',
  name: 'buttons',
  fields: [LinkField, LabelField, VariantField],
}

export const ButtonsBlock: Block = {
  fields: [ButtonsField],
  slug: 'buttons',
}
