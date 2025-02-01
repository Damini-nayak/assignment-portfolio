import React from 'react'
import Base from '../components/Base'
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Gardendesingidea() {
  return (
    <>
      <Header />
      <div className='designideades'><h1>//Balcony Area</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi a ab id nobis cupiditate ducimus earum ad excepturi. Illum id non obcaecati laborum eligendi odio reiciendis quam a officia explicabo?</p></div>
      <div className='design3'>
        <div className='designs'><img src={Base.image2} alt="" /><div className='designdes'><h2>lorem ipsum dolor sit</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eaque nesciunt accusamus ratione odio natus quam doloremque quia eligendi, veniam dolorem minus quasi sapiente provident hic quis deserunt porro ullam.</p></div><div className='movingarrow'><img src={Base.arrowright} alt="" /></div></div>
        <div className='designs'><img src={Base.image3} alt="" /><div className='designdes'><h2>lorem ipsum dolor sit</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eaque nesciunt accusamus ratione odio natus quam doloremque quia eligendi, veniam dolorem minus quasi sapiente provident hic quis deserunt porro ullam.</p></div><div className='movingarrow'><img src={Base.arrowright} alt="" /></div></div>
        <div className='designs'><img src={Base.image4} alt="" /><div className='designdes'><h2>lorem ipsum dolor sit</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eaque nesciunt accusamus ratione odio natus quam doloremque quia eligendi, veniam dolorem minus quasi sapiente provident hic quis deserunt porro ullam.</p></div><div className='movingarrow'><img src={Base.arrowright} alt="" /></div></div>
      </div>
      <br />
      <div className='designhoriz'><hr className='horizontal' /><p>lorem ipsum dolor sit</p><hr className='horizontal' /></div>
      <div className='textalignright'><div></div><h2><span>Lorem ipsum</span> dolor sit amet consectetur adipisicing. quasi perspiciatis</h2></div>
      <div className='designideas'>
        <div><div><h2>//Tarrace Garden</h2></div>
          <div className='designideasleftH'><div><p>lorem ipsum dolor</p><p>sit amet consectetur</p></div></div></div>
        <div><div><img src={Base.image7} alt="" /><h3>lorem ipsum dolor sit</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste laboriosam quod officiis, ullam cum ipsa doloribus sit corrupti! Eaque maiores voluptatibus non dignissimos dolores sit animi inventore laboriosam illo rerum!</p></div>
          <div><img src={Base.image3} alt="" /><h3>lorem ipsum dolor sit</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste laboriosam quod officiis, ullam cum ipsa doloribus sit corrupti! Eaque maiores voluptatibus non dignissimos dolores</p></div>
          <div><img src={Base.image8} alt="" /><h3>lorem ipsum dolor sit</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste laboriosam quod officiis, ullam cum ipsa doloribus sit corrupti! Eaque maiores voluptatibus non dignissimos dolores sit animi inventore laboriosam illo rerum!</p></div>
          <div><img src={Base.image6} alt="" /><h3>lorem ipsum dolor sit</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste laboriosam quod officiis, ullam cum ipsa doloribus sit corrupti! Eaque maiores voluptatibus non dignissimos dolores</p></div></div>
      </div>
      <div className='designhoriz'><hr className='horizontal' /><p>&copy;2024</p><hr className='horizontal' /></div>
      <Footer />
    </>
  )
}
