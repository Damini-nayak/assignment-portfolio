import React from 'react'
import Base from '../components/Base'
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Showcase() {
  return (
    <>
      <Header />
      <div className='showcase'><h1>Refresh your senses in this serene haven.</h1>
        <p className='showcaseDec'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis officia, error voluptas, enim quis vitae eos repudiandae cumque aut laboriosam neque, odio id repellat nisi. Itaque nemo architecto accusantium placeat.</p></div>
      <div className='showcases'>
        <div><img src={Base.image1} alt="" /><h1 className='plantName'>Purple sevanti</h1></div>
        <div><img src={Base.image2} alt="" /><h1 className='plantName'>Sulfur cosmos</h1></div>
        <div><img src={Base.image3} alt="" /><h1 className='plantName'>Bougainvillea</h1></div>
        <div><img src={Base.image4} alt="" /><h1 className='plantName'>Marigold</h1></div>
        <div><img src={Base.image5} alt="" /><h1 className='plantName'>Yellow rain lilly</h1></div>
        <div><img src={Base.image6} alt="" /><h1 className='plantName'>Red sunflower</h1></div>
        <div><img src={Base.image7} alt="" /><h1 className='plantName'>Pink roses</h1></div>
        <div><img src={Base.image8} alt="" /><h1 className='plantName'>Red sevanti</h1></div>
        <div><img src={Base.image9} alt="" /><h1 className='plantName'>Gaillardia</h1></div>
        <div><img src={Base.image10} alt="" /><h1 className='plantName'>Sphagneticola</h1></div>
        <div><img src={Base.image11} alt="" /><h1 className='plantName'>Zinnia</h1></div>
        <div><img src={Base.image12} alt="" /><h1 className='plantName'>Shoeblackplant</h1></div>
        <div><img src={Base.image13} alt="" /><h1 className='plantName'>Red valvet rose</h1></div>
      </div>
      <div className='showcase'>
        {/* <p className='showcaseDec'>"We will continue to add new plants, making our haven even more vibrant and alive. Get ready to immerse yourself in our colorful haven."</p></div> */}
        <p className='showcaseDec2nd'>"Discover a variety of vibrant, fresh, and exotic plants, perfect for every outdoor space. Whether you're a seasoned gardener or just starting, these plants bring life and beauty to your surroundings. Explore now and find the perfect addition to your garden"</p></div>
      <div className='designhoriz'><hr className='horizontal' /><p>&copy;2024</p><hr className='horizontal' /></div>
      <Footer />
    </>
  )
}
