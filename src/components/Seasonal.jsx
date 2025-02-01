import React from 'react'
import Base from '../components/Base'

function Seasonal({src,plantname,example,cares}) {
  return (
    <div className='seasonalflower'>
            <div className='seasflowimg'><img src={src} alt="" /></div>
            <div className='arrow90deg'><img src={Base.arrowright} alt="" /></div>
            <div className='seasflowhead'><h1>{plantname}</h1></div>
            <div className="seasdec">
              <p><span>Example: </span>{example}</p>
              <p><span>Care Tips: </span>{cares}</p>
            </div>
          </div>
  )
}

export default Seasonal