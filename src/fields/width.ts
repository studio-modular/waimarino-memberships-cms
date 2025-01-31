import type { Field } from 'payload'

export const validateWidth = (value: unknown): true | string => {
  if (typeof value !== 'string') return 'Please add a valid width (with percentage)'
  const match = value.match(/^(\d+)%$/)
  if (!match) return `${value} is not a valid width (with percentage)`
  if (match.length !== 1) return `${value} is not a valid width (with percentage)`
  return true
}

const WidthField: Field = {
  name: 'width',
  type: 'text',
  label: 'Width',
  validate: validateWidth,
  required: true,
  defaultValue: '100%',
}

export default WidthField
