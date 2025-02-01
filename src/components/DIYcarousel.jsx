import React, { useState, useEffect } from 'react'
import '../style/App.css';
import Base from './Base';

const DIYcarousel = () => {
  const cards = [
    { id: 1, title: "card 1", description: "this is card 1", src: "image1" },
    { id: 2, title: "card 2", description: "this is card 2", src: "image2" },
    { id: 3, title: "card 3", description: "this is card 3", src: "image3" },
    { id: 4, title: "card 4", description: "this is card 4", src: "image4" },
    { id: 5, title: "card 5", description: "this is card 5", src: "image5" },
    { id: 6, title: "card 6", description: "this is card 6", src: "image6" },
    { id: 7, title: "card 7", description: "this is card 7", src: "image7" },
    { id: 8, title: "card 8", description: "this is card 8", src: "image8" },
    { id: 9, title: "card 8", description: "this is card 8", src: "image9" },
    { id: 10, title: "card 8", description: "this is card 8", src: "image10" },
    { id: 11, title: "card 8", description: "this is card 8", src: "image11" },
    { id: 13, title: "card 8", description: "this is card 8", src: "image13" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCard, setVisibleCard] = useState(4);

  React.useEffect(()=> {
    const updateVisibleCard = ()=> {
      if (window.innerWidth <= 576) {
        setVisibleCard(1);
      }else if(window.innerWidth <= 1025) {
        setVisibleCard(3);
      }else {
        setVisibleCard(4);
      }
    };

  updateVisibleCard();
    window.addEventListener("resize", updateVisibleCard);

    return () => window.removeEventListener("resize", updateVisibleCard);
  }, []);

  const next = () => {
    if (currentIndex < cards.length - visibleCard) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };


  return (
    <>
      <div className='carousel-container'>
        <div className='nextprev-container'>
          <h1>//Do It Yourself</h1>
          <div className='nextprev'>

            <button className='prev'
              onClick={prev}
              disabled={currentIndex === 0}
              style={{ opacity: currentIndex === 0 ? 0.5 : 1 }}>
              <img src={Base.ableleft} alt="" /></button>

            <button className='next'
              onClick={next}
              disabled={currentIndex === cards.length - visibleCard}
              style={{ opacity: currentIndex === cards.length - visibleCard ? 0.5 : 1 }}>
              <img src={Base.ableright} alt="" /></button>

          </div>
        </div>
        <div className='carousel'>
          {cards.map((card) => (
            <div
              key={card.id}
              className="carousel-img"
              style={{
                transition: `transform 0.5s ease-in-out`,
                transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 20}px))`,
              }}
            >
              <img src={Base[card.src]} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  )
};

export default DIYcarousel