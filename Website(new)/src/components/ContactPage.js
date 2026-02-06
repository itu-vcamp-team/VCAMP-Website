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
      sosyalMedya: 'Sosyal Medya',
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
      sosyalMedya: 'Social Media',
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
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"></path>
                  <path d="M8 11l0 5"></path>
                  <path d="M8 8l0 .01"></path>
                  <path d="M12 16l0 -5"></path>
                  <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                </svg>
              </div>
              <div className="contact-info-content">
                <h3 className="contact-info-title">{t.sosyalMedya}</h3>
                <div className="contact-social-links">
                  <a href="https://www.instagram.com/ituvcamp/" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <span>Instagram</span>
                  </a>
                  <a href="https://www.linkedin.com/company/i%CC%87tuvcamp/posts/?feedView=all&viewAsMember=true" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://linktr.ee/itu_vcamp" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7.953 15.066c-.08.163-.08.324-.08.486.08.517.241.8.564 1.054.242.163.484.244.726.325l.283.081c.081 0 .081.081.162.081.727.163 1.454.325 2.18.569l.485.162c.323.081.565.244.808.406.081.081.162.081.162.162.081.162.162.324.081.486-.081.244-.323.406-.566.487-.406.162-.893.244-1.380.325h-.16c-.162 0-.324.081-.486.081-.324 0-.646 0-.969-.081-.566-.082-1.131-.244-1.616-.569a4.154 4.154 0 01-.969-.811c-.323-.406-.485-.894-.566-1.381-.081-.486-.081-.893.081-1.381.162-.486.404-.893.727-1.218.404-.406.889-.65 1.454-.893.404-.163.889-.244 1.293-.325.081 0 .162 0 .243-.081.404-.081.808-.081 1.212-.081h.324c.404 0 .889.081 1.293.162.081 0 .162.081.243.081.324.081.646.162.969.325.242.081.485.244.646.406.162.162.243.325.323.568.081.163.081.325.081.487 0 .081-.081.162-.081.244-.162.243-.404.405-.647.486-.161.081-.404.081-.565.081h-.081c-.081 0-.162-.081-.243-.081-.404-.162-.888-.244-1.293-.325h-.242c-.081 0-.162 0-.243-.082-.566 0-1.131.082-1.697.244-.161.082-.323.163-.484.325-.162.162-.243.325-.324.487zm8.592-5.552c.081.162.081.324.081.486-.081.568-.323.893-.727 1.137-.322.162-.646.243-.969.325l-.283.081c-.081 0-.162.081-.242.081-.727.162-1.454.325-2.262.568l-.484.163c-.324.081-.566.244-.808.406-.081.081-.162.081-.162.162-.081.163-.081.325-.081.487.081.244.323.406.566.487.404.162.888.244 1.373.325h.162c.162 0 .323.081.485.081.323 0 .646 0 .969-.081.565-.082 1.131-.244 1.616-.569.404-.243.727-.568.969-.811.323-.406.484-.894.566-1.381.08-.486.08-.893-.081-1.381-.162-.486-.405-.893-.727-1.218-.405-.406-.889-.649-1.454-.893-.405-.162-.889-.244-1.293-.325-.081 0-.162 0-.243-.081-.404-.081-.808-.081-1.212-.081h-.323c-.405 0-.889.081-1.294.162-.08 0-.161.081-.242.081-.323.081-.646.163-.969.325-.243.082-.485.244-.647.406-.161.163-.242.325-.323.569-.081.162-.081.324-.081.486 0 .082.081.163.081.244.162.244.405.406.647.487.162.081.404.081.565.081h.081c.081 0 .162-.081.243-.081.404-.162.889-.244 1.293-.325h.243c.08 0 .161 0 .242-.082.566 0 1.131.082 1.697.244.162.082.323.163.485.325.161.163.242.325.323.487z" />
                    </svg>
                    <span>Linktree</span>
                  </a>
                </div>
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
