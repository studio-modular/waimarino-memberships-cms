import type { Field } from 'payload'

export const validateHexColor = (value: unknown): true | string => {
  if (typeof value !== 'string') return 'Please add a valid colour'
  const match = value.match(/^#(?:[0-9a-fA-F]{3}){1,2}$/)
  if (!match) return `${value} is not a valid hex color`
  if (match.length !== 1) return `${value} is not a valid hex color`
  return true
}

const ColorField: Field = {
  name: 'color',
  label: 'Background Color',
  type: 'text',
  validate: validateHexColor,
  required: true,
  defaultValue: '#ffffff',
}

export default ColorField
