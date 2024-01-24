import React, { useRef, useState } from 'react';
import Cont from '../../assets/car.webp'
import Cont2 from '../../assets/car3.webp'
import emailjs from '@emailjs/browser';
import Popup from './popup';


const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    setShowPopup(true);
    setTimeout( function() {
      e.target.reset()
    }, 2000);
    e.preventDefault();

    emailjs.sendForm('contact_service', 'contact_form', form.current, 'dskbWQtmTS4MWFO6z')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact">
      <div className="contact__left">
      <a name="Contact"></a>
        <h1 className="contact__h">Let's discuss the repair of your car</h1>
        <p className="contact__p">
          Fill out the short form, <span>leave a request and we will contact you</span> to discuss the details as soon as possible
        </p>
        <form id="contact-form"  ref={form} onSubmit={sendEmail}>
          <input id="name" type="text" className="user_name" name="user_name" placeholder="Your Name" required />
          <input id="phone" type="number" className="user_phone" name="user_phone" placeholder="Your phone" required />
          <button className="form__btn" type="submit">Contact us</button>
        </form>
        <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
      </div>
      <div className="contact__right">
        <img src={Cont} alt="" className="contact__img im1" />
        <img src={Cont2} alt="" className="contact__img im2" />
      </div>
    </div>
  );
};

export default Contact;
