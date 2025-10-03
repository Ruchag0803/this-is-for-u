import React, { useState } from 'react';
import LandingPage from './LandingPage';
import LetterPage from './LetterPage';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const correctPassword = "290425";
  const handlePasswordSubmit = (password) => {
    console.log("password -->",password)
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password. Please try again!");
    }
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <LetterPage letterImagePath={`${process.env.PUBLIC_URL}/letter1.jpg`} />
      ) : (
        <LandingPage onPasswordSubmit={handlePasswordSubmit} />
      )}
    </div>
  );
}

export default App;