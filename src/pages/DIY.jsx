import React, { useState } from 'react';
import Base from '../components/Base';
import DIYcarousel from '../components/DIYcarousel';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function DIY() {
  return (
    <>
      <Header />
      <div className='diymain'>
        <div>
          <h1>Why DIY In Your Garden?</h1>
          <p><span>Affordable</span>   <span>Creative</span>   <span>Sustainable</span>   <span>Rewarding</span></p>
        </div>
      </div>
      <div className='designhoriz'><hr className='horizontal' /><p>lorem ipsum dolor sit</p><hr className='horizontal' /></div>
      <div className='textaligncenter'><div></div><h2><span>Lorem ipsum</span> dolor sit amet consectetur adipisicing. quasi perspiciatis</h2></div>
      <div className='diymain2'>
        <div className='diy1 diys'>
          <div className='box box1'><p>lorem ipsum dolor sit</p></div>
          <div className='designideasleftH'><div><p>lorem ipsum dolor</p><p>sit amet consectetur</p></div></div>
        </div>
        <div className='diy2 diys'>
          <div className='box box2'><p>lorem ipsum dolor sit</p></div>
        </div>
        <div className='diy3 diys'>
          <div className='designideasleftH'><div><p>lorem ipsum dolor</p><p>sit amet consectetur</p></div></div>
          <div className='box box3'><p>lorem ipsum dolor sit</p></div>
        </div>
      </div>
      <div className='designhoriz'><hr className='horizontal' /><p>lorem ipsum dolor sit</p><hr className='horizontal' /></div>

      <DIYcarousel />
      <div className='showcase'><p className='showcaseDec2nd'>"Discover a variety of vibrant, fresh, and exotic plants, perfect for every outdoor space. Whether you're a seasoned gardener or just starting, these plants bring life and beauty to your surroundings. Explore now and find the perfect addition to your garden"</p></div>
      < div className='designhoriz' ><hr className='horizontal' /><p>&copy;2024</p><hr className='horizontal' /></div >
      <Footer />
    </>
  )
}
