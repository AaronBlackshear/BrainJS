import React from 'react'
import '../css/tab.css';

export default function Tab({ tabTitle, onClick, className }) {
  return (
    <button className={`${className} tab`} onClick={onClick}>
      { tabTitle }
    </button>
  )
}
