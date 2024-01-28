// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpForm, setShowOtpForm] = useState(false);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    // TODO: Implement sending OTP to the server and replace the form with OTP form
    // After successful response, setShowOtpForm(true);
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    // TODO: Implement OTP verification on the server
    // If verification successful, redirect to welcome page
  };

// New components
const Navbar = () => (
  <nav>
    <NavLink to="/" exact activeClassName="active">
      Home
    </NavLink>
    <NavLink to="/otp-authentication" activeClassName="active">
      OTP Authentication
    </NavLink>
  </nav>
);

const Heading = () => (
  <header>
    <h1>OTP Authentication App</h1>
  </header>
);

const Home = () => (
  <div>
    <p>Welcome to the OTP Authentication App</p>
  </div>
);

const OTPAuthentication = () => {
  // Your OTP Authentication component code goes here
  return (
    <div className="form-container">
      {/* ... existing OTP Authentication component code ... */}
    </div>
  );
};



  return (
    <div className="App">
      <div className="form-container">
        {showOtpForm ? (
          <form onSubmit={handleOtpSubmit}>
            <label className="label">Enter OTP:</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              className="input-field"
            />
            <button type="submit" className="button">
              Submit OTP
            </button>
          </form>
        ) : (
          <form onSubmit={handleEmailSubmit}>
            <label className="label">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input-field"
            />
            <button type="submit" className="button">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}



export default App;
