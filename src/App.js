import React from 'react';
import Header from './conponents/header/Header';
import MainSection from './conponents/main/MainSection';
import LentaSection from './conponents/lenta/LentaSection';
import AboutUs from './conponents/about/AboutUs';
import './App.css';
import './reset.css';
import Advantages from './conponents/advantages/Advantages';
import Footer from './conponents/footer/Footer';
import SliderBlock from './conponents/slider/Slider';


const App = () => (
  <>
  <div className="back">
    <Header />
    <MainSection />
    </div>
    <LentaSection />
    <AboutUs />
    <SliderBlock />
   <Advantages />
   <Footer />
    </>
);

export default App;
