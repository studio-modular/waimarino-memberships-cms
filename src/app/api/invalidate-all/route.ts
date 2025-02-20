'use server'

export async function GET() {
  process.env.NODE_ENV === 'development'
    ? fetch('http://localhost:4002/api/vercel/invalidate/All')
    : fetch('https://waimarino-app.vercel.app/api/vercel/invalidate/All')

  return new Response('Success!', {
    status: 200,
  })
}
