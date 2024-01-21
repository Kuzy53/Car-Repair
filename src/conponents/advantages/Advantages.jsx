import React from 'react';
import Img from '../../assets/img6.png'
import Star from '../../assets/star.svg'
import FaqItem from './FaqItem'

const faqItems = [
 { question: 'Can your auto service conduct a comprehensive diagnosis to identify any potential issues with my vehicle?', answer: 'Thank you for reaching out to our auto service! We can perform a comprehensive diagnosis of your vehicle and offer optimal solutions for any issues found. Our specialists are ready to assist you at the earliest convenience.' },
 { question: 'Do you offer a wide range of repair services, and are you equipped to handle specific problems related to different car brands?', answer: 'Our auto service provides comprehensive repair and maintenance services for vehicles of all brands. We use only quality parts and equipment to ensure the reliability and safety of your car.' },
 { question: 'What is the typical turnaround time for vehicle repairs in your service center?', answer: 'If you notice any malfunctions or strange noises in your car, do not delay your visit to our auto service. We will conduct a thorough inspection and fix any problems so that you can feel confident and safe on the road.' },
 { question: 'Can you provide details on the warranties or guarantees offered for your services and the parts used during repairs?', answer: 'Caring for your car is our priority. We offer regular maintenance services to keep your vehicle in perfect condition. Prevent costly repairs in the future by turning to our professionals.' },
 { question: '"Is there an online booking system available for your services, and how can I monitor the progress of my cars repair?', answer: 'Our auto service employs experienced mechanics who continually improve their skills. We are ready to offer you a wide range of services, including engine repair, cooling system, transmission, as well as body repair and painting.' },
];

const Advantages = () => (
 <section className="why">
 <div className="container">
 <div className="why__title">
  <p className="why__p">Our advantages &gt;&gt;</p>
  <img src={Star} alt="" className="why__img wy" />
  <h1 className="why__h">Why you should choose sales & service for repairs</h1>
  <img src={Star} alt="" className="why__img wi" />
 </div>
 <a name="Adventures"></a>
 <div className="why__block">
  <div className="faq_7" unique-script-id="w-w-dm-id">
    <div className="responsive-container-block">
      <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-5 wk-ipadp-5 faq-head-bg" id="imgk">
        <div className="faq-head-content">
          <img src={Img} alt="" className="faq__img" />
        </div>
      </div>
      <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-7 wk-ipadp-7 faq-dropdown-bg" id="imiw">
        <div className="container-block" id="iwk5t">
          {faqItems.map((item, index) => (
            <FaqItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </div>
  </div>
 </div>
 </div>
</section>
);

export default Advantages;
