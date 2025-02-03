import React from 'react'
import Base from '../components/Base'

export default function Portfolio() {
  return (
    <>
      <div className="portfolio">
        <h1>Portfolio</h1>
        <div className='projects'>
          <div data-aos="fade-right"><a className='proA' href="https://www.shreecoaching.in/" target='_blank'><p>Live website for Coaching Classs</p></a></div>
          <div data-aos="fade-left"><a className='proA' href="https://artgallery-five.vercel.app/" target='_blank'><p>Art Gallery (personal project)</p></a></div>
          <div data-aos="fade-right"><a className='proA' href="https://www.linkedin.com/posts/damini-nayak_meat-delivery-project-activity-7145345196501757952-idxU?utm_source=share&utm_medium=member_android" target='_blank'><p>UI design for Meat delivery project</p></a></div>
          <div data-aos="fade-left"><a className='proA' href="https://green-haven-one.vercel.app/" target='_blank'><p>Green Heaven (personal project)</p></a></div>
        </div>
      </div>
    </>
  )
}
