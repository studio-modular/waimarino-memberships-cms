'use client'

export default function AfterNavLinks() {
  return null
  return (
    <button
      className="w-full"
      onClick={() => {
        process.env.NODE_ENV === 'development'
          ? fetch('http://localhost:4002/api/vercel/invalidate/All', {
              mode: 'cors',
            })
          : fetch('https://waimarino-app.vercel.app/api/vercel/invalidate/All')
      }}
    >
      Purge Cache
    </button>
  )
}
