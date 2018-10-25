import React from 'react'

export default function Reset({ clearEmotions }) {
  return (
  <button
    style={{
      position: 'absolute',
      left: '50vw',
      transform: 'translate(-50%)',
      bottom: '30px',
      fontSize: '1rem',
    }}
    onClick={clearEmotions}
  >
    Reset
  </button>
  )
}
