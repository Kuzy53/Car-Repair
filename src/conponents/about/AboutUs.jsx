import React from 'react';
import Img1 from '../../assets/img10.png'
import Img2 from '../../assets/img11.png'
import Img3 from '../../assets/img12.png'

const AboutUs = () => (
 <section className="about">
   <div className="container">
   <a name="About"></a>
     <div className="about__us">
       <h1 className="about__h">
         <span>Welcome to our Auto Service!</span> Whether it's routine maintenance or complex repairs, we're equipped to handle
all your automotive needs. 
       </h1>
       <p>Join us for top-notch service and experience our commitment to excellence. Your vehicle deserves the best, and that's what we provide. Visit us today!</p>
     </div>
     <div class="about__num">
                <div className="about__item">
                  <div className="about__container">
                    <div className="about__title">
                    200+
                  </div>
                  <div className="about__p">
                  cars were repaired during the entire operation
                  </div>
                  </div>
                    <img className="about__image a__i" src={Img1} />
                </div>
                <div className="about__item">
                  <div className="about__container">
                    <div className="about__title">
                    18
                  </div>
                  <div className="about__p">
                  highly qualified specialists service the cars in our team                   </div>
                  </div>
                    <img className="about__image a__i1" src={Img2} />
                </div>
                <div className="about__item">
                  <div className="about__container">
                    <div className="about__title">
                    97%
                  </div>
                  <div className="about__p">
                  the orders were completed perfectly without missing deadlines                  </div>
                  </div>
                    <img className="about__image a__i2" src={Img3} />
                </div>
            </div>
     </div>
 </section>
);

export default AboutUs;
