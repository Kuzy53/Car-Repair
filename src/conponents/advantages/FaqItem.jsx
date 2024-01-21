import React from 'react';

const FaqItem = ({ question, answer }) => {
 const [isActive, setIsActive] = React.useState(false);

 const handleClick = () => {
  setIsActive(!isActive);
 };

 return (
 <div className={`faq ${isActive ? "active" : ""}`}>
 <div className="faq-question-container" onClick={handleClick}>
  <p className="text-blk faq-questions">{question}</p>
  <img className="openimg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/arrow.svg" />
 </div>
 <div className="answer-box">
  <p className="text-blk faq-answer">{answer}</p>
 </div>
 </div>
 );
};

export default FaqItem;