import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './ContactPage.css';

const ContactPage = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderme işlemi burada yapılacak
    const translations = {
      tr: { nameLabel: 'İsim', messageLabel: 'Mesaj' },
      en: { nameLabel: 'Name', messageLabel: 'Message' }
    };
    const t = translations[language];
    window.location.href = `mailto:info@vcamp.itu.edu.tr?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`${t.nameLabel}: ${formData.name}\nEmail: ${formData.email}\n\n${t.messageLabel}:\n${formData.message}`)}`;
  };
  
  const translations = {
    tr: {
      iletisim: 'İletişim',
      iletisimSubtitle: 'Bizimle iletişime geçin, sorularınızı yanıtlamaktan memnuniyet duyarız.',
      adres: 'Adres',
      adresText: 'İstanbul Teknik Üniversitesi',
      email: 'Email',
      telefon: 'Telefon',
      isim: 'İsim',
      konu: 'Konu',
      mesaj: 'Mesaj',
      gonder: 'Gönder'
    },
    en: {
      iletisim: 'Contact',
      iletisimSubtitle: 'Contact us, we are happy to answer your questions.',
      adres: 'Address',
      adresText: 'Istanbul Technical University',
      email: 'Email',
      telefon: 'Phone',
      isim: 'Name',
      konu: 'Subject',
      mesaj: 'Message',
      gonder: 'Send'
    }
  };
  
  const t = translations[language];

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">{t.iletisim}</h1>
          <p className="contact-subtitle">{t.iletisimSubtitle}</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="contact-info-content">
                <h3 className="contact-info-title">{t.adres}</h3>
                <p className="contact-info-text">{t.adresText}<br />Maslak, İstanbul</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="contact-info-content">
                <h3 className="contact-info-title">{t.email}</h3>
                <a href="mailto:info@vcamp.itu.edu.tr" className="contact-info-text">info@vcamp.itu.edu.tr</a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="contact-info-content">
                <h3 className="contact-info-title">{t.telefon}</h3>
                <a href="tel:+902123333333" className="contact-info-text">+90 (212) 333 33 33</a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">{t.isim}</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">{t.konu}</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">{t.mesaj}</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="form-submit-button">
              {t.gonder}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
