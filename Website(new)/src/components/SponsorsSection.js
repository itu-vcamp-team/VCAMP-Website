import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './SponsorsSection.css';

const SponsorsSection = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  
  const translations = {
    tr: {
      sponsorlarimiz: 'Sponsorlarımız',
      sponsorOl: 'Sponsor Ol'
    },
    en: {
      sponsorlarimiz: 'Our Sponsors',
      sponsorOl: 'Become a Sponsor'
    }
  };
  
  const t = translations[language];

  const handleSponsorClick = () => {
    navigate('/sponsorship');
  };

  return (
    <section id="sponsors" className="sponsors-section">
      <div className="sponsors-container">
        <h2 className="sponsors-title">{t.sponsorlarimiz}</h2>
        <div className="sponsors-logos">
          <div className="sponsor-logo-wrapper">
            <img 
              src={`${process.env.PUBLIC_URL}/sponsors/havelsan-logo.svg`}
              alt="HAVELSAN Logo" 
              className="sponsor-logo sponsor-logo-white"
            />
          </div>
          <div className="sponsor-logo-wrapper">
            <img 
              src={`${process.env.PUBLIC_URL}/sponsors/odeal-logo.png`}
              alt="ÖDEAL Logo" 
              className="sponsor-logo sponsor-logo-colored"
            />
          </div>
        </div>
        <button className="sponsor-button" onClick={handleSponsorClick}>
          {t.sponsorOl}
        </button>
      </div>
    </section>
  );
};

export default SponsorsSection;
