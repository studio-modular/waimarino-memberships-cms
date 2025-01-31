import type { Field } from 'payload'

export const validateAspectRatio = (value: unknown): true | string => {
  if (typeof value !== 'string') return 'Please add a valid aspect ratio'
  const match = value.match(/^(\d+)\/(\d+)$/)
  if (!match) return `${value} is not a valid aspect ratio`
  if (match.length !== 1) return `${value} is not a valid aspect ratio`
  return true
}

const AspectRatioField: Field = {
  name: 'aspectRatio',
  type: 'text',
  label: 'Aspect Ratio',
  validate: validateAspectRatio,
  required: true,
  defaultValue: '16/9',
}

export default AspectRatioField
