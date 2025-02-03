import React from 'react'
import Base from '../components/Base'
import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <>
      <div className='container'>
        <div className='home-grid1' data-aos="zoom-in"><img src={Base.image1} alt="" /></div>
        <div className='home-grid2'>
          <div><h1>DAMINI NAYAK</h1>
            <ReactTyped
              strings={['<span style = "color:var(--5)">Frontend</span> Developer', '<span style = "color:var(--6)">Figma</span> Designer', '<span style = "color:var(--4)">Creative Canva</span> Expert']}
              typeSpeed={50}
              backSpeed={30}
              loop
              className="typed-text"
            /></div>
        </div>
      </div>
    </>
  )
}
