import React, { useState, useRef, useEffect } from 'react';
import img1 from '../../assets/img2.png'
import img2 from '../../assets/img3.png'
import img3 from '../../assets/img4.png'
import img4 from '../../assets/img7.png'
import img5 from '../../assets/img8.png'
import img6 from '../../assets/img9.png'
import arrow1 from '../../assets/arrow1.png'
import arrow2 from '../../assets/arrow2.png'
import Contact from '../contact/Contact';

const wid = window.innerWidth
const SliderItem = ({ imgSrc, title, description }) => (
  <div className="slider__item" style={{ width: `${wid - 25}px` }}>
    <img src={imgSrc} alt="" className="slider__img" style={{ width: `${wid - 10}px` }} />
    <h1 className="slider__h">{title}</h1>
    <p className="slider__p">{description}</p>
  </div>
);

const SliderBlock = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const slider = useRef(null);

  const items = [
    { imgSrc: img1, title: 'General Maintenance', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam corrupti aliquid qui assumenda soluta ipsa' },
    { imgSrc: img2, title: 'Repair and Replacement', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam corrupti aliquid qui assumenda soluta ipsa' },
    { imgSrc: img3, title: 'Fuel System Repair', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam corrupti aliquid qui assumenda soluta ipsa' },
    { imgSrc: img4, title: 'Tire Repair and Replacement', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam corrupti aliquid qui assumenda soluta ipsa' },
    { imgSrc: img5, title: 'Wheel Alignment', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam corrupti aliquid qui assumenda soluta ipsa' },
    { imgSrc: img6, title: 'Tune Up', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam corrupti aliquid qui assumenda soluta ipsa' },
  
  ];

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const moveToSlide = (index) => {
    if (index < 0 || index >= items.length) return;

    let slideWidth = windowWidth > 768 ? slider.current.offsetWidth / 3 : windowWidth - 0;
    let newLeft = index * -slideWidth;

    slider.current.style.transition = 'transform 0.5s ease-in-out';
    slider.current.style.transform = `translateX(${newLeft}px)`;

    setCurrentIndex(index);
  };

  return (
    <section className="what">
      <div className="container">
        <div className="what__do">
          <div className="what__title">
            <div className="what__p">What we do &gt;&gt;</div>
            <div className="what_h">
              <h1>We provide a full range of car repair services</h1>
            </div>
            <div className="what__btn">
              <img className="whates what__btn__one" src={arrow1} alt="Previous slide" onClick={() => moveToSlide(currentIndex - 1)} />
              <img className="whates what__btn__two" src={arrow2} alt="Next slide" onClick={() => moveToSlide(currentIndex + 1)} />
            </div>
            <a name="Services"></a>
          </div>
          <div className="slider" ref={slider}>
            {items.map((item, index) => (
              <SliderItem key={index} {...item} />
            ))}
          </div>
        </div>
        <Contact />
      </div>
    </section>
  );
};

export default SliderBlock;
