import React from 'react';
import logo from '../assets/Logo svg.svg';
import './HomePage.css';

const HomePage = () => {
  // VISION, COMMUNITY AND MAKING PROJECT kısaltması çevrilmeyecek
  return (
    <div className="home-page">
      <div className="home-content">
        <img src={logo} alt="İTÜ VCAMP Logo" className="home-logo" />
        <h1 className="team-name">İTÜ VCAMP</h1>
        <p className="team-tagline">VISION, COMMUNITY AND MAKING PROJECT TEAM</p>
      </div>
    </div>
  );
};

export default HomePage;
