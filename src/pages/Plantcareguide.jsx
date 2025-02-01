import React from 'react'
import Base from '../components/Base'
import Plantcarecarousel from '../components/plantcarecarousel'
import Seasonal from '../components/Seasonal'
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Plantcareguide() {
  return (
    <>
      <Header />
      <div className='plantcarehead'>
        <div>
          <h1>Plant Care Guide</h1>
          <p>"Healthy Plants, Happy Homes</p>
        </div>
      </div>
      <div className='designhoriz'><hr className='horizontal' /><p>lorem ipsum dolor sit</p><hr className='horizontal' /></div>
      <div className='designideades'><h1>//Plant Care For Beginner's</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi a ab id nobis cupiditate ducimus earum ad excepturi. Illum id non obcaecati laborum eligendi odio reiciendis quam a officia explicabo?</p></div>
      <div className='forbeginner'>
        <div className='beginnercontent'><div><img src={Base.image1} alt="" /><h1 className='beginnerhead'>Top 5 easiest plants to care for</h1><div className='beginnerpara'><div><p className='beginnerp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti expedita nemo totam quos aliquam at, consectetur magni commodi nesciunt odit sed quasi molestias modi eligendi provident hic laboriosam consequuntur rem!</p></div></div></div></div>
        <div className='beginnercontent'><div><img src={Base.image2} alt="" /><h1 className='beginnerhead'>What NOT to DO</h1><div className='beginnerpara'><div><p className='beginnerp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, aliquam ea! Odit vel quia, ullam facilis doloribus iusto fugit quos eligendi, minima natus blanditiis reprehenderit voluptatum non. Officiis, vitae distinctio.</p></div></div></div></div>
        <div className='beginnercontent'><div><img src={Base.image3} alt="" /><h1 className='beginnerhead'>First aid for dying plants</h1><div className='beginnerpara'><div><p className='beginnerp'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam vero ipsam tenetur similique sequi amet deserunt, provident exercitationem? Ex, quibusdam quod! Explicabo quam quidem aut ullam quae vero amet cum!</p></div></div></div></div>
      </div>
      <div className='designhoriz'><hr className='horizontal' /><p>lorem ipsum dolor sit</p><hr className='horizontal' /></div>
      <div className='textaligncenter'><div></div><h2><span>Seasonal</span> Plants Care Guide</h2></div>
      <p className='seasonaldec'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis officia, error voluptas, enim quis vitae eos repudiandae cumque aut laboriosam neque, odio id repellat nisi. Itaque nemo architecto accusantium placeat.</p>
      <div className='seasonal'>
        <div className='seasonal1'>
          <Seasonal src={Base.tulips} plantname="Spring Plants" example="easdfghjk" cares={'asfghkljkhhg'} />
          <Seasonal src={Base.sunflower} plantname="Summer Plants" example="easdfghjk" />
        </div>
        <div className='seasonal2'>
          <Seasonal src={Base.pansies} plantname="Fall Plants" example="easdfghjk" />
          <Seasonal src={Base.hellebores} plantname="Winter Plants" example="easdfghjk" />
        </div>
      </div>
      <div className='designhoriz'><hr className='horizontal' /><p>lorem ipsum dolor sit</p><hr className='horizontal' /></div>
      <Plantcarecarousel />
      <div className='designhoriz'><hr className='horizontal' /><p>&copy;2024</p><hr className='horizontal' /></div>
      <Footer />
    </>
  )
}
