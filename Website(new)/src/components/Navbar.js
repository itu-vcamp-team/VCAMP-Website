import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import logo from '../assets/Logo svg.svg';
import './Navbar.css';

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const searchInputRef = useRef(null);
  const searchContainerRef = useRef(null);
  const navbarRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const sections = [
    { id: 'about', label: 'Hakkımızda', enLabel: 'About', path: '/about' },
    { id: 'projects', label: 'Projeler', enLabel: 'Projects', path: '/projects' },
    { id: 'team', label: 'Takım', enLabel: 'Team', path: '/team' },
    { id: 'blog', label: 'Blog', enLabel: 'Blog', path: '/blog' },
    { id: 'contact', label: 'İletişim', enLabel: 'Contact', path: '/contact' }
  ];


  const handleSearchClick = () => {
    setIsSearchExpanded(true);
  };

  // Mobilde search'ü her zaman expanded yap
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 968) {
        setIsSearchExpanded(true);
      } else if (!searchQuery.trim()) {
        setIsSearchExpanded(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [searchQuery]);

  const handleSearchBlur = (e) => {
    // Eğer input boşsa ve dışarı tıklanmışsa kapat
    setTimeout(() => {
      if (!searchQuery.trim() && !searchContainerRef.current?.contains(document.activeElement)) {
        setIsSearchExpanded(false);
      }
    }, 200);
  };

  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchExpanded(false);
      setSearchQuery('');
    }
  };

  const handleSearchIconClick = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchExpanded(false);
      setSearchQuery('');
    } else {
      setIsSearchExpanded(true);
    }
  };

  useEffect(() => {
    if (isSearchExpanded && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchExpanded]);

  useEffect(() => {
    // Sayfa arka planına göre navbar rengini belirle
    const determineNavbarColor = () => {
      const path = location.pathname;

      // Siyah sayfalar - navbar beyaz olmalı (isDark = false)
      const darkPages = ['/about', '/projects', '/team'];
      const isProjectDetail = path.startsWith('/projects/') && path !== '/projects';

      // Beyaz sayfalar - navbar siyah olmalı (isDark = true)
      const lightPages = ['/blog', '/contact', '/sponsorship'];

      if (darkPages.includes(path) || isProjectDetail) {
        // Siyah sayfalarda navbar beyaz
        setIsDark(false);
      } else if (lightPages.includes(path)) {
        // Beyaz sayfalarda navbar siyah
        setIsDark(true);
      } else if (path === '/') {
        // Ana sayfa için scroll kontrolü yap
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          const aboutTop = aboutSection.offsetTop;
          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;

          // Eğer about section görünür alandaysa (beyaz sayfa) - navbar siyah
          if (scrollY >= aboutTop - windowHeight * 0.3) {
            setIsDark(true);
          } else {
            // Ana sayfa başlangıcı siyah - navbar beyaz
            setIsDark(false);
          }
        } else {
          // Ana sayfa başlangıcı siyah - navbar beyaz
          setIsDark(false);
        }
      } else {
        // Varsayılan olarak beyaz navbar
        setIsDark(false);
      }
    };

    const handleScroll = () => {
      // Ana sayfada scroll kontrolü yap
      if (location.pathname === '/') {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          const aboutTop = aboutSection.offsetTop;
          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;

          if (scrollY >= aboutTop - windowHeight * 0.3) {
            // Beyaz sayfada siyah navbar
            setIsDark(true);
          } else {
            // Siyah sayfada beyaz navbar
            setIsDark(false);
          }
        }
      }
    };

    // İlk yüklemede ve sayfa değiştiğinde kontrol et
    determineNavbarColor();

    // Ana sayfada scroll dinle
    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav ref={navbarRef} className={`navbar ${isDark ? 'dark' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-logo-container">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="İTÜ VCAMP Logo" className="navbar-logo" />
        </Link>
        <button className="hamburger-menu" onClick={handleMenuClick} aria-label="Menu">
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      <div className={`navbar-mobile-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>

      <div className={`navbar-content ${isMenuOpen ? 'active' : ''}`}>
        <div className="navbar-sections">
          {sections.map((section) => {
            if (section.path.startsWith('/#')) {
              return (
                <a
                  key={section.id}
                  href={section.path}
                  className="nav-section"
                  onClick={(e) => {
                    closeMenu();
                    if (location.pathname !== '/') {
                      e.preventDefault();
                      window.location.href = section.path;
                    }
                  }}
                >
                  {language === 'tr' ? section.label : section.enLabel}
                </a>
              );
            }
            return (
              <Link
                key={section.id}
                to={section.path}
                className="nav-section"
                onClick={closeMenu}
              >
                {language === 'tr' ? section.label : section.enLabel}
              </Link>
            );
          })}
        </div>
        <div className="navbar-right">
          <div
            className={`search-container ${isSearchExpanded ? 'expanded' : ''}`}
            ref={searchContainerRef}
            onBlur={handleSearchBlur}
          >
            <svg
              className="search-icon"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              onClick={handleSearchIconClick}
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <input
              ref={searchInputRef}
              type="text"
              className="search-input"
              placeholder={language === 'tr' ? 'Ara...' : 'Search...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onClick={handleSearchClick}
              onKeyDown={handleSearchSubmit}
            />
          </div>
          <button className="language-toggle" onClick={toggleLanguage}>
            {language === 'tr' ? 'EN' : 'TR'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
