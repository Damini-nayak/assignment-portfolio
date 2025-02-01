import React from 'react'
import Base from '../components/Base'
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <div className='main'><p>WELCOME TO <br /> OUR GARDEN</p></div>

      <div className='main2'><div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est maiores esse quis soluta optio</p></div><div className='logo'><img src={Base.logo} alt="" />GreenHaven</div><div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est maiores esse quis soluta optio</p></div></div>

      <hr className='horizontal' />

      <div className='main3'>
        <div><p>A Visit To GreenHaven</p></div>
        <div className='visit-to'>
          <div><img src={Base.image2} alt="" /></div>
          <div><h1>Discover the beauty of nature</h1><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem minima earum amet voluptatibus praesentium?</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt cum asperiores distinctio voluptas consequuntur porro corporis fugiat</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, a deserunt at deleniti hic quisquam quae consequuntur</p></div>
        </div>
      </div>

      <div className='main4'>
        <div className='main4-heading'><h1>Catagory of garden </h1><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint repellat qui accusamus natus aut libero pariatur. Adipisci, odit. Cupiditate quod distinctio magni repellendus facere perspiciatis sequi molestiae fugit ut beatae?</p></div>
        <div className="catagories">
          <div><img src={Base.image8} alt="" /><h2>the garden</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eaque tenetur quo vero distinctio expedita consectetur repellendus alias impedit!</p><p><a href="">Lorem ipsum dolor</a></p></div>
          <div><img src={Base.image10} alt="" /><h2>the garden</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eaque tenetur quo vero distinctio expedita consectetur repellendus alias impedit!</p><p><a href="">Lorem ipsum dolor</a></p></div>
          <div><img src={Base.image11} alt="" /><h2>the garden</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eaque tenetur quo vero distinctio expedita consectetur repellendus alias impedit!</p><p><a href="">Lorem ipsum dolor</a></p></div>
        </div>
      </div>

      <div className="main5">
        <div><h1>Flower Showcase</h1><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis incidunt nisi expedita in exercitationem eius qui ad, obcaecati consequatur tempora sint atque voluptatem modi dolores maxime velit neque et illum.</p><a href="/showcase"><p>Lorem ipsum dolor sit amet consectet</p></a></div>
        <div><div><img src={Base.image6} alt="" /></div>
          <div><img src={Base.image3} alt="" /></div></div>
      </div>

      <div className="main6">
        <p>Lorem ipsum dolor sit</p>
      </div>

      <div className="main7">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis tenetur quos, accusantium natus ipsa architecto cum. Autem architecto at consequatur enim, ipsa dicta facere nostrum sed beatae eligendi nisi vel?</p>
        <p>lorem ipsum dolor sit</p>
        <h3>lorem link</h3>
      </div>
      <Footer />
    </>
  )
}
