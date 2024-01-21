import React, { useState } from 'react';
import Telefon from '../../assets/telefon.png'
import Telefon1 from '../../assets/telefon1.png'
import { Link } from "react-scroll";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleBurgerClick = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="headers">
      <div className="container">
        <div className="header">
          <div className={`logo ${isActive ? 'active' : ''}`}>
            <h1>PRESTIGE</h1>
            <p className="logo__p">AUTO REPAIR</p>
          </div>
          <div className={`nav__b ${isActive ? '' : 'hidden'}`}><a href="tel:+17818939160" className="a__tel"><img className="telef" src={Telefon} alt="" /><img className="telef1" src={Telefon1} alt="" /><p>+1 781 893 9160</p></a></div>

          <button className={`burger ${isActive ? 'active' : ''}`} onClick={handleBurgerClick}>
            <span className="sp1"></span>
            <span className="sp2"></span>
            <span className="sp3"></span>
          </button>
          <nav className={`nav ${isActive ? 'active' : ''}`}>
        <div className="nav__item">
          <Link to="Main" spy={true} smooth={true} offset={-70} duration={500}>
            Main
          </Link>
        </div>
        <div className="nav__item">
          <Link to="About" spy={true} smooth={true} offset={-70} duration={500}>
            About Us
          </Link>
        </div>
        <div className="nav__item">
          <Link to="Services" spy={true} smooth={true} offset={-70} duration={500}>
            Services
          </Link>
        </div>
        <div className="nav__item">
          <Link to="Adventures" spy={true} smooth={true} offset={-70} duration={500}>
            Adventures
          </Link>
        </div>
        <div className="nav__item">
          <Link to="Contact" spy={true} smooth={true} offset={-70} duration={500}>
            Contact us
          </Link>
        </div>
        <div className={`nav__footer ${isActive ? '' : 'hidden'}` }>
            <a className="lk" href="mailto:Prestige8545@hotmail.com"><p>Prestige8545@hotmail.com</p></a>
                <p>196 high st waltham ma 02454</p>
                </div>
                <p className={`n__p ${isActive ? '' : 'hidden'}`}><a className="grid__link" href="https://offthegridlab.com/">Made by OffTheGrid</a></p>
      </nav>
          <div className={`nav__btn ${isActive ? 'hidden' : ''}`}><a href="tel:+17818939160" className="a__tel"><img className="telef" src={Telefon} alt="" /><img className="telef1" src={Telefon1} alt="" /><p>+1 781 893 9160</p></a></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
