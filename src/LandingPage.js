import React, { useState } from 'react';
import './LandingPage.css'; // We'll create this CSS file

function LandingPage({ onPasswordSubmit }) {
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onPasswordSubmit(password);
  };

  return (
    <div className="landing-page">
      <h1>Welcome to Your Surprise!</h1>
      <p>Enter the secret password to unlock your special message:</p>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          className="password-input"
        />
        <button type="submit" className="submit-button">Unlock</button>
      </form>
    </div>
  );
}

export default LandingPage;