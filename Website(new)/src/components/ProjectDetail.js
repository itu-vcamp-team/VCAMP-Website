import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { projectTranslations } from '../data/projectData';
import './ProjectDetail.css';
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  LayoutDashboard,
  Drone,
  PenTool,
  Clock,
  Image,
  ListChecks,
  FileText,
  FlaskConical,
  Users,
  Handshake
} from "lucide-react";

const ICON_MAP = {
  about: LayoutDashboard,
  specs: Drone,
  design: PenTool,
  timeline: Clock,
  gallery: Image,
  procedures: ListChecks,
  docs: FileText,
  tests: FlaskConical,
  team: Users,
  sponsors: Handshake
};

/* ===== SVG ICONS ===== */
const ArrowLeftIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
  </svg>
);

const PlayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const DocumentIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

/* ===== ANIMATED COUNTER ===== */
const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.5 }
    );
    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTime;
    const animate = (t) => {
      if (!startTime) startTime = t;
      const p = Math.min((t - startTime) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * end));
      if (p < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <span ref={countRef}>
      {count}
      {suffix}
    </span>
  );
};

/* ===== FADE IN SECTION ===== */
const FadeInSection = ({ children, delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTimeout(() => setIsVisible(true), delay);
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    );
    const r = domRef.current;
    if (r) observer.observe(r);
    return () => {
      if (r) observer.unobserve(r);
    };
  }, [delay]);

  return (
    <div
      ref={domRef}
      className={`fade-in-section ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

/* ===== TIMELINE ITEM ===== */
const TimelineItem = ({ item, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);
  const position = index % 2 === 0 ? 'left' : 'right';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTimeout(() => setIsVisible(true), index * 80);
      },
      { threshold: 0.2 }
    );
    const r = itemRef.current;
    if (r) observer.observe(r);
    return () => {
      if (r) observer.unobserve(r);
    };
  }, [index]);

  return (
    <div ref={itemRef} className={`pd-timeline-item ${position} ${isVisible ? 'is-visible' : ''}`}>
      <div className="pd-timeline-dot" />
      <div className="pd-timeline-card">
        <span className="pd-timeline-date">{item.date}</span>
        <h4>{item.title}</h4>
        <p>{item.content}</p>
      </div>
    </div>
  );
};

/* ===== MAIN COMPONENT ===== */
const ProjectDetail = () => {
  const { language } = useLanguage();
  const { projectId } = useParams();
  const navigate = useNavigate();
  const t = projectTranslations[language];

  const projectMap = {
    'aios': t.projects.aios,
    'teknofest-havacilik': t.projects.teknofestHavacilik,
    'mesane-kanseri': t.projects.mesaneKanseri,
    'teknofest-saglik': t.projects.teknofestSaglik,
    'suas-26': t.projects.suas26,
    'ai-tool-pool': t.projects.aiToolPool
  };

  const project = projectMap[projectId];
  const isSuasProject = !!project?.specifications;

  const [activeSection, setActiveSection] = useState('about');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [expandedProcedures, setExpandedProcedures] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [hideSidebar, setHideSidebar] = useState(false);

  const heroRef = useRef(null);
  const sectionRefs = useRef({});

  // Footer'a scroll edildiğinde sidebar'ı gizle
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('.footer');
      if (!footer) return;
      
      const footerTop = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      // Footer görünmeye başladığında sidebar'ı gizle
      if (footerTop < windowHeight) {
        setHideSidebar(true);
      } else {
        setHideSidebar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // İlk yüklemede kontrol et
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  const labels = language === 'tr' ? {
    projeBulunamadi: 'Proje Bulunamadı',
    projelereDon: 'Projelere Dön',
    hakkinda: 'Genel Bakış',
    teknikOzellikler: 'Teknik Özellikler',
    galeri: 'Medya',
    dokumantasyon: 'Dokümanlar',
    gelisimSureci: 'Zaman Çizelgesi',
    prosedurler: 'Prosedürler',
    ekip: 'Ekip',
    sponsorlar: 'Sponsorlar',
    tasarimKararlari: 'Tasarım',
    testSonuclari: 'Testler',
    indir: 'İndir',
    kisiSayisi: 'Üye',
    aylikSure: 'Ay',
    testUcusu: 'Test Uçuşu',
    basariOrani: 'Başarı',
    neden: 'Tercih Nedeni',
    alternatifler: 'Değerlendirilen Alternatifler',
    govde: 'Gövde',
    tahrik: 'Tahrik Sistemi',
    aviyonik: 'Aviyonik',
    yazilim: 'Yazılım',
    tip: 'Tip',
    kanatAcikligi: 'Kanat Açıklığı',
    uzunluk: 'Uzunluk',
    azamiKalkisAgirligi: 'MTOW',
    yukKapasitesi: 'Payload',
    malzeme: 'Malzeme',
    vtolMotorlari: 'VTOL Motorları',
    seyirMotoru: 'Cruise Motor',
    batarya: 'Batarya',
    ucusSuresi: 'Uçuş Süresi',
    azamiHiz: 'Max Hız',
    ucusKontrolcusu: 'Flight Controller',
    eslikciIslemci: 'Companion',
    gps: 'GPS',
    telemetri: 'Telemetri',
    kamera: 'Kamera',
    otoPilot: 'Autopilot',
    yerKontrolIstasyonu: 'GCS',
    goruntuIsleme: 'Vision',
    haritalama: 'Mapping',
    toplamUcus: 'Toplam Uçuş',
    ucusSaati: 'Uçuş Saati',
    azamiIrtifa: 'Max İrtifa',
    azamiMenzil: 'Max Menzil',
    tespitDogrulugu: 'Tespit Doğruluğu',
    basariliGorev: 'Başarılı Görev',
    testKategorileri: 'Test Kategorileri'
  } : {
    projeBulunamadi: 'Project Not Found',
    projelereDon: 'Back to Projects',
    hakkinda: 'Overview',
    teknikOzellikler: 'Specifications',
    galeri: 'Media',
    dokumantasyon: 'Documents',
    gelisimSureci: 'Timeline',
    prosedurler: 'Procedures',
    ekip: 'Team',
    sponsorlar: 'Sponsors',
    tasarimKararlari: 'Design',
    testSonuclari: 'Testing',
    indir: 'Download',
    kisiSayisi: 'Members',
    aylikSure: 'Months',
    testUcusu: 'Test Flights',
    basariOrani: 'Success Rate',
    neden: 'Rationale',
    alternatifler: 'Alternatives Considered',
    govde: 'Airframe',
    tahrik: 'Propulsion',
    aviyonik: 'Avionics',
    yazilim: 'Software',
    tip: 'Type',
    kanatAcikligi: 'Wingspan',
    uzunluk: 'Length',
    azamiKalkisAgirligi: 'MTOW',
    yukKapasitesi: 'Payload',
    malzeme: 'Material',
    vtolMotorlari: 'VTOL Motors',
    seyirMotoru: 'Cruise Motor',
    batarya: 'Battery',
    ucusSuresi: 'Flight Time',
    azamiHiz: 'Max Speed',
    ucusKontrolcusu: 'Flight Controller',
    eslikciIslemci: 'Companion',
    gps: 'GPS',
    telemetri: 'Telemetry',
    kamera: 'Camera',
    otoPilot: 'Autopilot',
    yerKontrolIstasyonu: 'GCS',
    goruntuIsleme: 'Vision',
    haritalama: 'Mapping',
    toplamUcus: 'Total Flights',
    ucusSaati: 'Flight Hours',
    azamiIrtifa: 'Max Altitude',
    azamiMenzil: 'Max Range',
    tespitDogrulugu: 'Detection Accuracy',
    basariliGorev: 'Successful Missions',
    testKategorileri: 'Test Categories'
  };

  const navItems = useMemo(() => {
    if (!project) return [];

    const items = [];

    items.push({ id: 'about', label: labels.hakkinda, icon: ICON_MAP.about });

    if (project.specifications)
      items.push({ id: 'specs', label: labels.teknikOzellikler, icon: ICON_MAP.specs });

    if (project.designDecisions)
      items.push({ id: 'design', label: labels.tasarimKararlari, icon: ICON_MAP.design });

    if (project.timeline)
      items.push({ id: 'timeline', label: labels.gelisimSureci, icon: ICON_MAP.timeline });

    if (project.gallery)
      items.push({ id: 'gallery', label: labels.galeri, icon: ICON_MAP.gallery });

    if (project.procedures)
      items.push({ id: 'procedures', label: labels.prosedurler, icon: ICON_MAP.procedures });

    if (project.documents)
      items.push({ id: 'docs', label: labels.dokumantasyon, icon: ICON_MAP.docs });

    if (project.testResults)
      items.push({ id: 'tests', label: labels.testSonuclari, icon: ICON_MAP.tests });

    if (project.team)
      items.push({ id: 'team', label: labels.ekip, icon: ICON_MAP.team });

    if (project.sponsors)
      items.push({ id: 'sponsors', label: labels.sponsorlar, icon: ICON_MAP.sponsors });

    return items;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project, language]);

  const galleryImages = useMemo(() => {
    if (!project?.gallery) return [];
    return project.gallery.filter(item => item.type === 'image');
  }, [project]);

  useEffect(() => {
    if (!project) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id.replace('pd-', ''));
        });
      },
      { rootMargin: '-100px 0px -60% 0px' }
    );
    Object.values(sectionRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, [project]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') setLightboxIndex(prev => Math.min(prev + 1, galleryImages.length - 1));
      if (e.key === 'ArrowLeft') setLightboxIndex(prev => Math.max(prev - 1, 0));
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxOpen, galleryImages.length]);

  const scrollToSection = useCallback((sectionId) => {
    const el = sectionRefs.current[sectionId];
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  }, []);

  const toggleProcedure = useCallback((i) => {
    setExpandedProcedures(prev => ({ ...prev, [i]: !prev[i] }));
  }, []);

  const openLightbox = useCallback((i) => {
    setLightboxIndex(i);
    setLightboxOpen(true);
  }, []);

  const setSectionRef = useCallback((id) => (el) => {
    sectionRefs.current[id] = el;
  }, []);

  if (!project) {
    return (
      <main className="pd-page" role="main">
        <div className="pd-not-found">
          <h2>{labels.projeBulunamadi}</h2>
          <button onClick={() => navigate('/projects')}>{labels.projelereDon}</button>
        </div>
      </main>
    );
  }

  const sectionsContent = (
    <>
      <FadeInSection>
        <section className="pd-section" id="pd-about" ref={setSectionRef('about')}>
          <div className="pd-container">
            <div className="pd-section-header">
              {isSuasProject && <span className="pd-section-number">01</span>}
              <div>
                <span className="pd-section-label">{labels.hakkinda}</span>
                <h2 className="pd-section-title">
                  {isSuasProject ? (language === 'tr' ? 'Görev Genel Bakışı' : 'Mission Overview') : project.title}
                </h2>
              </div>
            </div>
            <div className="pd-about-grid">
              <div className="pd-about-content">
                {project.details.map((d, i) => (
                  <p key={i} className="pd-about-paragraph">{d}</p>
                ))}
              </div>
              <div className="pd-features-panel">
                <h3 className="pd-features-title">{language === 'tr' ? 'Temel Yetenekler' : 'Key Capabilities'}</h3>
                <div className="pd-features-list">
                  {project.features.map((f, i) => (
                    <div key={i} className="pd-feature-item">
                      <div className="pd-feature-check">
                        <CheckIcon />
                      </div>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {project.specifications && (
        <FadeInSection>
          <section className="pd-section pd-section-alt" id="pd-specs" ref={setSectionRef('specs')}>
            <div className="pd-container">
              <div className="pd-section-header">
                <span className="pd-section-number">02</span>
                <div>
                  <span className="pd-section-label">{labels.teknikOzellikler}</span>
                  <h2 className="pd-section-title">SKY-X1 {language === 'tr' ? 'Teknik Detaylar' : 'Technical Details'}</h2>
                </div>
              </div>
              <div className="pd-specs-grid">
                <div className="pd-spec-card">
                  <div className="pd-spec-header">
                    <div className="pd-spec-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    </div>
                    <h3>{labels.govde}</h3>
                  </div>
                  <div className="pd-spec-items">
                    <div className="pd-spec-row"><span>{labels.tip}</span><strong>{project.specifications.airframe.type}</strong></div>
                    <div className="pd-spec-row"><span>{labels.kanatAcikligi}</span><strong>{project.specifications.airframe.wingspan}</strong></div>
                    <div className="pd-spec-row"><span>{labels.uzunluk}</span><strong>{project.specifications.airframe.length}</strong></div>
                    <div className="pd-spec-row"><span>{labels.azamiKalkisAgirligi}</span><strong>{project.specifications.airframe.mtow}</strong></div>
                    <div className="pd-spec-row"><span>{labels.yukKapasitesi}</span><strong>{project.specifications.airframe.payload}</strong></div>
                    <div className="pd-spec-row"><span>{labels.malzeme}</span><strong>{project.specifications.airframe.material}</strong></div>
                  </div>
                </div>
                <div className="pd-spec-card">
                  <div className="pd-spec-header">
                    <div className="pd-spec-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                      </svg>
                    </div>
                    <h3>{labels.tahrik}</h3>
                  </div>
                  <div className="pd-spec-items">
                    <div className="pd-spec-row"><span>{labels.vtolMotorlari}</span><strong>{project.specifications.propulsion.vtolMotors}</strong></div>
                    <div className="pd-spec-row"><span>{labels.seyirMotoru}</span><strong>{project.specifications.propulsion.cruiseMotor}</strong></div>
                    <div className="pd-spec-row"><span>{labels.batarya}</span><strong>{project.specifications.propulsion.battery}</strong></div>
                    <div className="pd-spec-row"><span>{labels.ucusSuresi}</span><strong>{project.specifications.propulsion.flightTime}</strong></div>
                    <div className="pd-spec-row"><span>{labels.azamiHiz}</span><strong>{project.specifications.propulsion.maxSpeed}</strong></div>
                  </div>
                </div>
                <div className="pd-spec-card">
                  <div className="pd-spec-header">
                    <div className="pd-spec-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="4" y="4" width="16" height="16" rx="2" />
                        <rect x="9" y="9" width="6" height="6" />
                        <line x1="9" y1="1" x2="9" y2="4" />
                        <line x1="15" y1="1" x2="15" y2="4" />
                        <line x1="9" y1="20" x2="9" y2="23" />
                        <line x1="15" y1="20" x2="15" y2="23" />
                        <line x1="20" y1="9" x2="23" y2="9" />
                        <line x1="20" y1="14" x2="23" y2="14" />
                        <line x1="1" y1="9" x2="4" y2="9" />
                        <line x1="1" y1="14" x2="4" y2="14" />
                      </svg>
                    </div>
                    <h3>{labels.aviyonik}</h3>
                  </div>
                  <div className="pd-spec-items">
                    <div className="pd-spec-row"><span>{labels.ucusKontrolcusu}</span><strong>{project.specifications.avionics.flightController}</strong></div>
                    <div className="pd-spec-row"><span>{labels.eslikciIslemci}</span><strong>{project.specifications.avionics.companion}</strong></div>
                    <div className="pd-spec-row"><span>{labels.gps}</span><strong>{project.specifications.avionics.gps}</strong></div>
                    <div className="pd-spec-row"><span>{labels.telemetri}</span><strong>{project.specifications.avionics.telemetry}</strong></div>
                    <div className="pd-spec-row"><span>{labels.kamera}</span><strong>{project.specifications.avionics.camera}</strong></div>
                  </div>
                </div>
                <div className="pd-spec-card">
                  <div className="pd-spec-header">
                    <div className="pd-spec-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                    </div>
                    <h3>{labels.yazilim}</h3>
                  </div>
                  <div className="pd-spec-items">
                    <div className="pd-spec-row"><span>{labels.otoPilot}</span><strong>{project.specifications.software.autopilot}</strong></div>
                    <div className="pd-spec-row"><span>{labels.yerKontrolIstasyonu}</span><strong>{project.specifications.software.gcs}</strong></div>
                    <div className="pd-spec-row"><span>{labels.goruntuIsleme}</span><strong>{project.specifications.software.vision}</strong></div>
                    <div className="pd-spec-row"><span>{labels.haritalama}</span><strong>{project.specifications.software.mapping}</strong></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
      )}

      {project.designDecisions && (
        <FadeInSection>
          <section className="pd-section" id="pd-design" ref={setSectionRef('design')}>
            <div className="pd-container">
              <div className="pd-section-header">
                <span className="pd-section-number">03</span>
                <div>
                  <span className="pd-section-label">{labels.tasarimKararlari}</span>
                  <h2 className="pd-section-title">{language === 'tr' ? 'Mühendislik Kararları' : 'Engineering Decisions'}</h2>
                </div>
              </div>
              <div className="pd-design-grid">
                {project.designDecisions.map((d, i) => (
                  <div key={i} className="pd-design-card">
                    <div className="pd-design-index">{String(i + 1).padStart(2, '0')}</div>
                    <h3 className="pd-design-title">{d.title}</h3>
                    <p className="pd-design-desc">{d.description}</p>
                    <div className="pd-design-rationale">
                      <span className="pd-design-rationale-label">{labels.neden}</span>
                      <p>{d.rationale}</p>
                    </div>
                    <div className="pd-design-alternatives">
                      <span className="pd-design-alt-label">{labels.alternatifler}</span>
                      <div className="pd-design-alt-tags">
                        {d.alternatives.map((a, j) => (
                          <span key={j} className="pd-design-alt-tag">{a}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeInSection>
      )}

      {project.timeline && (
        <FadeInSection>
          <section className="pd-section pd-section-alt" id="pd-timeline" ref={setSectionRef('timeline')}>
            <div className="pd-container">
              <div className="pd-section-header">
                <span className="pd-section-number">04</span>
                <div>
                  <span className="pd-section-label">{labels.gelisimSureci}</span>
                  <h2 className="pd-section-title">{language === 'tr' ? 'Geliştirme Yol Haritası' : 'Development Roadmap'}</h2>
                </div>
              </div>
              <div className="pd-timeline-wrapper">
                <div className="pd-timeline-line" aria-hidden="true" />
                {project.timeline.map((item, i) => (
                  <TimelineItem key={i} item={item} index={i} />
                ))}
              </div>
            </div>
          </section>
        </FadeInSection>
      )}

      {project.gallery && (
        <FadeInSection>
          <section className="pd-section" id="pd-gallery" ref={setSectionRef('gallery')}>
            <div className="pd-container">
              <div className="pd-section-header">
                <span className="pd-section-number">05</span>
                <div>
                  <span className="pd-section-label">{labels.galeri}</span>
                  <h2 className="pd-section-title">{language === 'tr' ? 'Fotoğraf & Video' : 'Photos & Videos'}</h2>
                </div>
              </div>
              <div className="pd-gallery-grid">
                {project.gallery.map((item, index) => {
                  const imgIdx = item.type === 'image' ? galleryImages.findIndex(img => img.url === item.url) : -1;
                  return (
                    <div
                      key={index}
                      className={`pd-gallery-item ${item.type === 'video' ? 'is-video' : ''}`}
                      onClick={item.type === 'image' ? () => openLightbox(imgIdx) : undefined}
                      role={item.type === 'image' ? 'button' : undefined}
                      tabIndex={item.type === 'image' ? 0 : undefined}
                      onKeyDown={item.type === 'image' ? (e) => { if (e.key === 'Enter') openLightbox(imgIdx); } : undefined}
                      aria-label={item.caption}
                    >
                      {item.type === 'video' ? (
                        <div className="pd-gallery-video">
                          <iframe
                            src={item.url}
                            title={item.caption}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      ) : (
                        <>
                          <img src={item.url} alt={item.caption} loading="lazy" />
                          <div className="pd-gallery-zoom" aria-hidden="true">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="11" cy="11" r="8" />
                              <line x1="21" y1="21" x2="16.65" y2="16.65" />
                              <line x1="11" y1="8" x2="11" y2="14" />
                              <line x1="8" y1="11" x2="14" y2="11" />
                            </svg>
                          </div>
                        </>
                      )}
                      <div className="pd-gallery-caption">
                        {item.type === 'video' && <PlayIcon />}
                        <span>{item.caption}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </FadeInSection>
      )}

      {project.procedures && (
        <FadeInSection>
          <section className="pd-section pd-section-alt" id="pd-procedures" ref={setSectionRef('procedures')}>
            <div className="pd-container">
              <div className="pd-section-header">
                <span className="pd-section-number">06</span>
                <div>
                  <span className="pd-section-label">{labels.prosedurler}</span>
                  <h2 className="pd-section-title">{language === 'tr' ? 'Standart Operasyon Prosedürleri' : 'Standard Operating Procedures'}</h2>
                </div>
              </div>
              <div className="pd-procedures-list">
                {project.procedures.map((proc, i) => (
                  <div key={i} className={`pd-procedure-card ${expandedProcedures[i] ? 'is-expanded' : ''}`}>
                    <button className="pd-procedure-header" onClick={() => toggleProcedure(i)} aria-expanded={!!expandedProcedures[i]}>
                      <span className="pd-procedure-number">{String(i + 1).padStart(2, '0')}</span>
                      <div className="pd-procedure-title-group">
                        <h4>{proc.title}</h4>
                        <span className="pd-procedure-category">{proc.category}</span>
                      </div>
                      <div className={`pd-procedure-toggle ${expandedProcedures[i] ? 'rotated' : ''}`}>
                        <ChevronDownIcon />
                      </div>
                    </button>
                    <div className="pd-procedure-body">
                      <ul className="pd-procedure-steps">
                        {proc.steps.map((s, j) => (
                          <li key={j}>
                            <span className="pd-step-number">{j + 1}</span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeInSection>
      )}

      {project.documents && (
        <FadeInSection>
          <section className="pd-section" id="pd-docs" ref={setSectionRef('docs')}>
            <div className="pd-container">
              <div className="pd-section-header">
                <span className="pd-section-number">07</span>
                <div>
                  <span className="pd-section-label">{labels.dokumantasyon}</span>
                  <h2 className="pd-section-title">{language === 'tr' ? 'Teknik Dokümanlar' : 'Technical Documents'}</h2>
                </div>
              </div>
              <div className="pd-docs-grid">
                {project.documents.map((doc, i) => (
                  <div key={i} className="pd-doc-card">
                    <div className="pd-doc-icon">
                      <DocumentIcon />
                      <span className="pd-doc-type">{doc.type}</span>
                    </div>
                    <div className="pd-doc-content">
                      <h4>{doc.title}</h4>
                      <p>{doc.description}</p>
                      <div className="pd-doc-meta">
                        <span>{doc.date}</span>
                        {doc.size && <span>&middot;</span>}
                        {doc.size && <span>{doc.size}</span>}
                      </div>
                    </div>
                    <button className="pd-doc-download" aria-label={`${labels.indir} ${doc.title}`}>
                      <DownloadIcon />
                      <span>{labels.indir}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeInSection>
      )}

      {project.testResults && (
        <FadeInSection>
          <section className="pd-section pd-section-alt" id="pd-tests" ref={setSectionRef('tests')}>
            <div className="pd-container">
              <div className="pd-section-header">
                <span className="pd-section-number">08</span>
                <div>
                  <span className="pd-section-label">{labels.testSonuclari}</span>
                  <h2 className="pd-section-title">{language === 'tr' ? 'Uçuş Test Sonuçları' : 'Flight Test Results'}</h2>
                </div>
              </div>
              <h3 className="pd-test-cat-title">{labels.testKategorileri}</h3>
              <div className="pd-test-cards">
                {project.testResults.categories.map((cat, i) => (
                  <div key={i} className="pd-test-card">
                    <h4 className="pd-test-card-title">{cat.name}</h4>
                    <p className="pd-test-card-desc">
                      {language === 'tr' ? 'Bu test kategorisi tam görev profili kapsamında doğrulanmıştır.' : 'This test category has been validated within the full mission profile.'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeInSection>
      )}

      {project.team && (
        <FadeInSection>
          <section className="pd-section" id="pd-team" ref={setSectionRef('team')}>
            <div className="pd-container">
              <div className="pd-section-header">
                <span className="pd-section-number">09</span>
                <div>
                  <span className="pd-section-label">{labels.ekip}</span>
                  <h2 className="pd-section-title">{language === 'tr' ? 'Proje Ekibi' : 'Project Team'}</h2>
                </div>
              </div>
              <div className="pd-team-cards">
                {project.team.map((member, index) => (
                  <div key={index} className="pd-team-member-card">
                    <div className="pd-member-photo">
                      {member.image ? (
                        <img src={`${process.env.PUBLIC_URL || ''}${member.image}`} alt={member.name} />
                      ) : (
                        <span>{member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}</span>
                      )}
                    </div>
                    <div className="pd-member-info">
                      <h4>{member.name}</h4>
                      <p className="pd-member-role">{member.role}</p>
                      {member.department && <p className="pd-member-dept">{member.department}</p>}
                      <div className="pd-member-links">
                        {member.email && (
                          <a href={`mailto:${member.email}`} className="pd-member-link" title="E-posta" aria-label="E-posta">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <rect x="2" y="4" width="20" height="16" rx="2" />
                              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                          </a>
                        )}
                        {member.linkedIn && (
                          <a href={member.linkedIn} target="_blank" rel="noopener noreferrer" className="pd-member-link" title="LinkedIn" aria-label="LinkedIn">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeInSection>
      )}

      {project.sponsors && (
        <FadeInSection>
          <section className="pd-section pd-section-alt" id="pd-sponsors" ref={setSectionRef('sponsors')}>
            <div className="pd-container">
              <div className="pd-section-header">
                <span className="pd-section-number">10</span>
                <div>
                  <span className="pd-section-label">{labels.sponsorlar}</span>
                  <h2 className="pd-section-title">{language === 'tr' ? 'Sponsorlarımız' : 'Our Sponsors'}</h2>
                </div>
              </div>
              <div className="pd-sponsors-simple">
                <div className="pd-sponsor-logo-card havelsan-card">
                  <img src={`${process.env.PUBLIC_URL || ''}/sponsors/havelsan-logo.svg`} alt="HAVELSAN" className="pd-sponsor-logo-img havelsan" />
                </div>
                <div className="pd-sponsor-logo-card">
                  <img src={`${process.env.PUBLIC_URL || ''}/sponsors/odeal-logo.png`} alt="ÖDEAL" className="pd-sponsor-logo-img odeal" />
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
      )}
    </>
  );

  return (
    <main className="pd-page" role="main">
      {/* ===== HERO ===== */}
      <section 
  className={`pd-hero ${isSuasProject ? 'pd-hero-suas' : ''} ${!isSidebarOpen ? 'sidebar-closed' : ''}`} 
  ref={heroRef} 
  aria-label="Project Hero"
>
        <div className="pd-hero-bg">
          <div className="pd-hero-gradient" />
          <img
            src={isSuasProject ? 'https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=1200&fit=crop' : project.image}
            alt={project.title}
            className="pd-hero-image"
          />
        </div>
        <div className="pd-hero-content">
          <button className="pd-back-btn" onClick={() => navigate('/projects')} aria-label={labels.projelereDon}>
            <ArrowLeftIcon />
            <span>{labels.projelereDon}</span>
          </button>
          <div className="pd-hero-text">
            {isSuasProject && <span className="pd-hero-badge">SUAS 2026 &middot; Maryland, USA</span>}
            <h1 className="pd-hero-title">{project.title}</h1>
            <p className="pd-hero-description">{project.description}</p>
          </div>
        </div>
      </section>

      {/* ===== DOC LAYOUT: Sidebar + Main (SUAS only) ===== */}
      {(isSuasProject && navItems.length > 0) ? (
        <div className="pd-doc-layout">
          <aside className={`pd-doc-sidebar ${isSidebarOpen ? 'open' : 'closed'} ${hideSidebar ? 'hide-for-footer' : ''}`}>
            {/* OK BUTONU – SIDEBAR'IN İÇİNDE */}
           <button
  className="pd-sidebar-toggle"
  onClick={toggleSidebar}
  aria-label={isSidebarOpen ? "Sidebar'ı Kapat" : "Sidebar'ı Aç"}
>
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
</button>

            <nav className="pd-doc-nav">
              {navItems.map(item => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    className={`pd-doc-nav-item ${activeSection === item.id ? 'active' : ''}`}
                    onClick={() => scrollToSection(item.id)}
                  >
                    {Icon && <Icon size={16} />}
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </aside>

          <div className={`pd-doc-main ${isSidebarOpen ? '' : 'sidebar-closed'}`}>
            {sectionsContent}
          </div>
        </div>
      ) : (
        sectionsContent
      )}

      {/* ===== LIGHTBOX ===== */}
      {lightboxOpen && galleryImages.length > 0 && (
        <div className="pd-lightbox" role="dialog" aria-modal="true" aria-label="Image viewer">
          <div className="pd-lightbox-backdrop" onClick={() => setLightboxOpen(false)} />
          <button className="pd-lightbox-close" onClick={() => setLightboxOpen(false)} aria-label="Close">
            <CloseIcon />
          </button>
          <div className="pd-lightbox-content">
            {lightboxIndex > 0 && (
              <button
                className="pd-lightbox-arrow pd-lightbox-prev"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(p => p - 1);
                }}
                aria-label="Previous"
              >
                <ArrowLeftIcon />
              </button>
            )}
            <img src={galleryImages[lightboxIndex]?.url} alt={galleryImages[lightboxIndex]?.caption} className="pd-lightbox-image" />
            {lightboxIndex < galleryImages.length - 1 && (
              <button
                className="pd-lightbox-arrow pd-lightbox-next"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(p => p + 1);
                }}
                aria-label="Next"
              >
                <ArrowRightIcon />
              </button>
            )}
          </div>
          <div className="pd-lightbox-info">
            <p>{galleryImages[lightboxIndex]?.caption}</p>
            <span>{lightboxIndex + 1} / {galleryImages.length}</span>
          </div>
        </div>
      )}
    </main>
  );
};

export default ProjectDetail;