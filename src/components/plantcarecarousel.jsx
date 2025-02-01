import React, { useState } from 'react'
import '../style/App.css';
import Base from './Base';

const Plantcarecarousel = () => {
    const cards = [
        { id: 1, src: "indoorplant", heading:"Indoor Plants", example:"Snake plant, Pothos, Peace Lily.", care:"Bright indirect light, moderate watering, and occasional dusting."},
        { id: 2, src: "outdoorplant", heading:"Outdoor Plants", example:"Roses, Marigolds, Hibiscus.", care:"Full sunlight, regular watering, and seasonal fertilizing." },
        { id: 3, src: "cacti", heading:"Succulents & Cacti", example: "Aloe Vera, Jade Plant, Barrel Cactus.", care:"Bright light, minimal watering, and well-draining soil." },
        { id: 4, src: "tropicalplant", heading:"Tropical Plants", example: "Monstera, Orchids, Palms.", care:"High humidity, indirect light, and regular misting." },
        { id: 5, src: "floweringplant", heading:"Flowering Plants",example: "Lavender, Bougainvillea, Petunias.", care: "Ample sunlight, nutrient-rich soil, and deadheading blooms." },
        { id: 6, src: "herbs", heading:"Herbs", example: "Basil, Mint, Rosemary.", care: "Direct sunlight, frequent watering, and trimming to encourage growth." },
        { id: 7, src: "ferns", heading:"Ferns", example: "Boston Fern, Maidenhair Fern.", care: "Low light, high humidity, and consistent soil moisture." }
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
                    <h1>//Care BY Plant Type</h1>
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
                    {cards.map((card, index) => (
                        <div
                            key={card.id}
                            className="carousel-img carouselcontentdiv"
                            style={{
                                transition: `transform 0.5s ease-in-out`,
                                transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 20}px))`,
                            }}
                        >
                            <img className='imagecarousel' src={Base[card.src]} alt="" />
                            <div className='carouselhead'>
                                <h2>{card.heading}</h2>
                            </div>
                            <div className='carouselpara'>
                                <div>
                                <p><span>Example: </span>{card.example}</p>
                                <p><span>Care: </span>{card.care}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};

export default Plantcarecarousel