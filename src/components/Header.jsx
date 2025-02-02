import React, { useState } from 'react'
import Base from './Base'
import '../style/App.css'


export default function Header() {
  return (
    <>
      <div className='header'>
        <a href='/'>Home</a>
        <a href='/about'>About</a>
        <a href='/portfolio'>Portfolio</a>
      {/* <a href='/contactus'>Contact</a> */}
    </div>
  </>
  )
}
