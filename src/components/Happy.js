import React from 'react'
import happy from '../sources/carlton.gif'

export default function Happy() {
  return (
    <div>
      <h1 id="mood">You are Happy 🎉🎊</h1>
      <img className="img" src={happy} alt="animated" />
    </div>
  )
}
