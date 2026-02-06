import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import logo from '../assets/Logo svg.svg';
import './Footer.css';

const Footer = () => {
  const { language } = useLanguage();

  const translations = {
    tr: {
      sayfalar: 'Sayfalar',
      anaSayfa: 'Ana Sayfa',
      projeler: 'Projeler',
      takim: 'Takım',
      blog: 'Blog',
      iletisim: 'İletişim',
      email: 'Email',
      sosyalMedya: 'Sosyal Medya',
      tumHaklariSaklidir: 'Tüm hakları saklıdır.'
    },
    en: {
      sayfalar: 'Pages',
      anaSayfa: 'Home',
      projeler: 'Projects',
      takim: 'Team',
      blog: 'Blog',
      iletisim: 'Contact',
      email: 'Email',
      sosyalMedya: 'Social Media',
      tumHaklariSaklidir: 'All rights reserved.'
    }
  };

  const t = translations[language];
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo-section">
            <img src={logo} alt="İTÜ VCAMP Logo" className="footer-logo" />
            <h2 className="footer-title">İTÜ VCAMP</h2>
            <p className="footer-subtitle">VISION, COMMUNITY AND MAKING PROJECT TEAM</p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h3 className="footer-column-title">{t.sayfalar}</h3>
              <Link to="/" className="footer-link">{t.anaSayfa}</Link>
              <Link to="/projects" className="footer-link">{t.projeler}</Link>
              <Link to="/team" className="footer-link">{t.takim}</Link>
              <Link to="/blog" className="footer-link">{t.blog}</Link>
            </div>

            <div className="footer-column">
              <h3 className="footer-column-title">{t.iletisim}</h3>
              <Link to="/contact" className="footer-link">{t.iletisim}</Link>
              <a href="mailto:info@vcamp.itu.edu.tr" className="footer-link">{t.email}</a>
            </div>

            <div className="footer-column">
              <h3 className="footer-column-title">{t.sosyalMedya}</h3>
              <div className="footer-social-links">
                <a href="https://www.linkedin.com/company/i%CC%87tuvcamp/posts/?feedView=all&viewAsMember=true" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a href="https://www.instagram.com/ituvcamp/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>Instagram</span>
                </a>
                <a href="https://linktr.ee/itu_vcamp" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.953 15.066c-.08.163-.08.324-.08.486.08.517.241.8.564 1.054.242.163.484.244.726.325l.283.081c.081 0 .081.081.162.081.727.163 1.454.325 2.18.569l.485.162c.323.081.565.244.808.406.081.081.162.081.162.162.081.162.162.324.081.486-.081.244-.323.406-.566.487-.406.162-.893.244-1.380.325h-.16c-.162 0-.324.081-.486.081-.324 0-.646 0-.969-.081-.566-.082-1.131-.244-1.616-.569a4.154 4.154 0 01-.969-.811c-.323-.406-.485-.894-.566-1.381-.081-.486-.081-.893.081-1.381.162-.486.404-.893.727-1.218.404-.406.889-.65 1.454-.893.404-.163.889-.244 1.293-.325.081 0 .162 0 .243-.081.404-.081.808-.081 1.212-.081h.324c.404 0 .889.081 1.293.162.081 0 .162.081.243.081.324.081.646.162.969.325.242.081.485.244.646.406.162.162.243.325.323.568.081.163.081.325.081.487 0 .081-.081.162-.081.244-.162.243-.404.405-.647.486-.161.081-.404.081-.565.081h-.081c-.081 0-.162-.081-.243-.081-.404-.162-.888-.244-1.293-.325h-.242c-.081 0-.162 0-.243-.082-.566 0-1.131.082-1.697.244-.161.082-.323.163-.484.325-.162.162-.243.325-.324.487zm8.592-5.552c.081.162.081.324.081.486-.081.568-.323.893-.727 1.137-.322.162-.646.243-.969.325l-.283.081c-.081 0-.162.081-.242.081-.727.162-1.454.325-2.262.568l-.484.163c-.324.081-.566.244-.808.406-.081.081-.162.081-.162.162-.081.163-.081.325-.081.487.081.244.323.406.566.487.404.162.888.244 1.373.325h.162c.162 0 .323.081.485.081.323 0 .646 0 .969-.081.565-.082 1.131-.244 1.616-.569.404-.243.727-.568.969-.811.323-.406.484-.894.566-1.381.08-.486.08-.893-.081-1.381-.162-.486-.405-.893-.727-1.218-.405-.406-.889-.649-1.454-.893-.405-.162-.889-.244-1.293-.325-.081 0-.162 0-.243-.081-.404-.081-.808-.081-1.212-.081h-.323c-.405 0-.889.081-1.294.162-.08 0-.161.081-.242.081-.323.081-.646.163-.969.325-.243.082-.485.244-.647.406-.161.163-.242.325-.323.569-.081.162-.081.324-.081.486 0 .082.081.163.081.244.162.244.405.406.647.487.162.081.404.081.565.081h.081c.081 0 .162-.081.243-.081.404-.162.889-.244 1.293-.325h.243c.08 0 .161 0 .242-.082.566 0 1.131.082 1.697.244.162.082.323.163.485.325.161.163.242.325.323.487z" />
                  </svg>
                  <span>Linktree</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} İTÜ VCAMP. {t.tumHaklariSaklidir}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
