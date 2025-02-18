import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { seoPlugin } from '@payloadcms/plugin-seo'
import computeBlurhash from 'payload-blurhash-plugin'

import { Images } from './collections/Images'
import { Users } from './collections/Users'
import { HomePage } from './globals/Home'
import { Videos } from './collections/Videos'
import { env } from 'process'
import { s3Storage } from '@payloadcms/storage-s3'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

import invariant from 'tiny-invariant'
import { Location } from './globals/Location'
import { Properties } from './collections/Properties'
import { Partnerships } from './globals/Partnerships'
import { Enquire } from './globals/Enquire'
import { TermsAndConditions } from './globals/TermsAndConditions'
import { PrivacyPolicy } from './globals/PrivacyPolicy'

invariant(env.PAYLOAD_SECRET)
invariant(env.DATABASE_URI)
invariant(env.S3_BUCKET)
invariant(env.S3_ACCESS_KEY_ID)
invariant(env.S3_SECRET_ACCESS_KEY)
invariant(env.S3_REGION)
invariant(env.S3_ENDPOINT)
invariant(env.CLOUDFRONT_DISTRIBUTION)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Images, Properties, Users, Videos],
  globals: [HomePage, Location, Partnerships, Enquire, TermsAndConditions, PrivacyPolicy],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  // db:
  //   process.env.NODE_ENV === 'development'
  //     ? sqliteAdapter({
  //         client: {
  //           url: './memberships-app.db',
  //         },
  //       })
  //     : postgresAdapter({
  //         pool: {
  //           connectionString: process.env.DATABASE_URI,
  //         },
  //       }),
  sharp,
  plugins: [
    computeBlurhash({
      collections: ['images'],
      width: 64,
    }),
    s3Storage({
      acl: 'public-read',
      bucket: env.S3_BUCKET!,
      collections: {
        images: {
          generateFileURL: ({ filename, prefix }) =>
            `${env.CLOUDFRONT_DISTRIBUTION}/${prefix}/${filename}`,
          prefix: 'images',
        },
      },
      config: {
        credentials: {
          accessKeyId: env.S3_ACCESS_KEY_ID!,
          secretAccessKey: env.S3_SECRET_ACCESS_KEY!,
        },
        region: env.S3_REGION,
      },
      disableLocalStorage: true,
      enabled: true,
    }),
    seoPlugin({
      globals: [
        'home-page',
        'location',
        'enquire',
        'partnerships',
        'privacy-policy',
        'terms-and-conditions',
      ],
      collections: ['properties'],
      tabbedUI: true,
      generateTitle: ({ doc }) => `${doc.title} | Waimarino Lodge`,
    }),
  ],
})
