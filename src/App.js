import React, { useState } from 'react';
import LandingPage from './LandingPage';
import LetterPage from './LetterPage';
import './App.css'; 
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const correctPassword = "290422"; 

  const handlePasswordSubmit = (password) => {
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password. Please try again!");
    }
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <LetterPage letterImagePath="/letter1.jpg" /> 
      ) : (
        <LandingPage onPasswordSubmit={handlePasswordSubmit} />
      )}
    </div>
  );
}

export default App;