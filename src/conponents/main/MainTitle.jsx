import React from 'react';
import Img from '../../assets/img.webp'
import { Link } from "react-scroll";

const MainTitle = () => (
  <div className="main__title">
    <div className="main__title__one">
      <div className="main__title__h">
        <h1>Car Repair<br className='br' /> and Maintenance</h1>
        <p>Welcome to our Auto Service! Whether it's routine maintenance or complex repairs</p>
      </div>
    </div>
    <div className="main__title__two">
      <div className="main__card__img">
        <img className="main__image" src={Img} alt="" />
      </div>
      <button className="main__title__btn"><Link to="Contact" spy={true} smooth={true} offset={-70} duration={500}>
            Contact us
          </Link></button>
    </div>
  </div>
);

export default MainTitle;
