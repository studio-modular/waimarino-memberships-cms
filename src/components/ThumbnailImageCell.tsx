import type { Image } from '~/payload-types'

export default async function ThumbnailImageCell(props: { rowData: Image }) {
  const image = (await props).rowData
  // @ts-expect-error img
  return <img src={image.sizes?.thumbnail?.url} style={{ width: '2rem' }} />
}
