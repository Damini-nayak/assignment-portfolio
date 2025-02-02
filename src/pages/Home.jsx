import React from 'react'
import Base from '../components/Base'

export default function Home() {
  return (
    <>
      <div className='container'>
      <div className='home-grid1'><img src={Base.image1} alt="" /></div>
        <div className='home-grid2'>
          <div><h1>DAMINI NAYAK</h1>
          <p><span style={{color : "var(--5)"}}>Frontend</span> <span>developer</span></p></div>
        </div>
      </div>
    </>
  )
}
