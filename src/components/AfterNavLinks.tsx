'use client'

export default function AfterNavLinks() {
  return (
    <button
      style={{
        width: '100%',
        background: '#3C3A2C',
        color: 'white',
        padding: '0.5rem 1rem',
        border: 'none',
        cursor: 'pointer',
      }}
      onClick={() => {
        fetch('/api/invalidate-all')
      }}
    >
      PURGE CACHE
    </button>
  )
}
