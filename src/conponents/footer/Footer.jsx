import React from 'react';
import icon from '../../assets/icon.png'
import { Link } from "react-scroll";

const Footer = () => (
 <footer className="footer">
 <div className="container">
 <div className="footer__block">
   <div className="footer__item it1">
     <div className="logo">
       <h1>Prestige</h1>
       <p className="logo__p">AUTO REPAIR</p>
       <button className="footer__btn"><a href="#Contact">Contact us</a></button>
       <a href="https://maps.app.goo.gl/BbLhWCFEgZQLoVR66?g_st=ic"><img className="icon__img" src={icon} alt="" /></a>
     </div>
   </div>
   <div className="footer__item it2">
   <a className="lk" href="mailto:Prestige8545@hotmail.com"><p>Prestige8545@hotmail.com</p></a>
     <p>196 high st waltham ma 02454</p>
     <a className="lk" href="tel:+17818939160"><p>+1 781 893 9160</p></a>
     <a className="grid__link" href="https://offthegridlab.com/">Made by OffTheGrid</a>

   </div>
   <div className="footer__item it3">
   <div className="footer__nav"><Link to="About" spy={true} smooth={true} offset={-70} duration={500}>
            About Us
          </Link></div>
   <div className="footer__nav"><Link to="Services" spy={true} smooth={true} offset={-70} duration={500}>
            Services
          </Link></div>
<div className="footer__nav"><Link to="Adventures" spy={true} smooth={true} offset={-70} duration={500}>
            Adventures
          </Link></div>
<div className="footer__nav"><Link to="Contact" spy={true} smooth={true} offset={-70} duration={500}>
            Contact us
          </Link></div>
   </div>
 </div>
 <div className="footer__block2">
   <div className="footer__item it1">
     <div className="logo">
     <a className="grid__link" href="https://offthegridlab.com/">Made by OffTheGrid</a>
       <h1>Prestige</h1>
       <p className="logo__p">AUTO REPAIR</p>
     </div>
   </div>
   <div className="footer__container">
   <div className="footer__item it2">
   <a className="lk" href="mailto:Prestige8545@hotmail.com"> <p>Prestige8545@hotmail.com</p></a>
     <p>196 high st waltham ma 02454</p>
     <a className="lk" href="tel:+17818939160"><p>+1 781 893 9160</p></a>
   </div>
   <div className="footer__item it3">
   <div className="footer__nav"><Link to="About" spy={true} smooth={true} offset={-70} duration={500}>
            About Us
          </Link></div>
   <div className="footer__nav"><Link to="Services" spy={true} smooth={true} offset={-70} duration={500}>
            Services
          </Link></div>
<div className="footer__nav"><Link to="Adventures" spy={true} smooth={true} offset={-70} duration={500}>
            Adventures
          </Link></div>
<div className="footer__nav"><Link to="Contact" spy={true} smooth={true} offset={-70} duration={500}>
            Contact us
          </Link></div>
   </div>
   </div>
   <div className="footer__but">
   <a href="https://maps.app.goo.gl/BbLhWCFEgZQLoVR66?g_st=ic" className="a__foo"><img className="icon__img" src={icon} alt="" /></a>
   <button className="footer__btn"><Link to="Contact" spy={true} smooth={true} offset={-70} duration={500}>
            Contact us
          </Link></button>
   </div>
 </div>
 </div>
</footer>
);

export default Footer;
