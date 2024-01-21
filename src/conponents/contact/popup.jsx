import React from 'react';





const Popup = ({ showPopup, setShowPopup }) => {
  if (!showPopup) return null;

  return (
    <div className='popup'>
      <div className='popup-content'>
        <h2>THANK YOU!</h2>
        <p className='pop__p'>Your data has been sent successfully, expect a call from our managers.</p>

        <button className='close-btn' onClick={() => setShowPopup(false)}>GO BACK TO THE MAIN PAGE</button>
      </div>
    </div>
  );
};

export default Popup;
