import React from 'react';
import './LetterPage.css'; 

function LetterPage({ letterImagePath }) {
    console.log("letterImagePath --->",letterImagePath)
  return (
    <div className="letter-page">
      <h2>A Special Message Just for You!</h2>
      <div className="letter-container">
        <img src={letterImagePath} alt="Your special letter" className="letter-image" />
      </div>
      <p>Hope you love your surprise! ❤️</p>
    </div>
  );
}

export default LetterPage;