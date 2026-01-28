import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import CardSwap, { Card } from './CardSwap';
import logo from '../assets/Logo svg.svg';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [cardDimensions, setCardDimensions] = useState({ width: 500, height: 400 });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setCardDimensions({ width: 300, height: 350 });
      } else if (window.innerWidth < 768) {
        setCardDimensions({ width: 400, height: 380 });
      } else {
        setCardDimensions({ width: 500, height: 400 });
      }
    };

    // Set initial dimensions
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const translations = {
    tr: {
      projelerimiz: 'PROJELERİMİZ',
      projelerimizSubtitle: 'Yapay zeka, otonom sistemler ve ileri mühendislik çözümleriyle geliştirdiğimiz, geleceğin teknolojilerine yön veren vizyoner projelerimiz.',
      dahaFazlaBilgi: 'Daha Fazla Bilgi Alın',
      projects: {
        aios: {
          title: 'AI Operation System (AIOS)',
          description: 'Dijital cihazların yapay zekâ modelleriyle daha üretken çalışmasını sağlayacak AI tabanlı bir işletim sistemi.',
          shortDesc: 'Büyük dil modeli destekli komut tanıma, kullanıcı modelleme ve dinamik arayüz oluşturma gibi modülleri içeren çok bileşenli bir sistem.'
        },
        teknofestHavacilik: {
          title: 'TEKNOFEST Havacılık - Obje ve Konum Tespiti',
          description: 'Drone görüntülerinden yararlanarak otomatik obje ve konum tespiti yapabilen bir yapay zeka sistemi.',
          shortDesc: 'TEKNOFEST 2025 Havacılık kategorisi için hazırlıklarımız devam etmektedir.'
        },
        mesaneKanseri: {
          title: 'Mesane Kanseri AI Projesi',
          description: 'Mesane kanseri verileri üzerinde makine öğrenmesi modelleri geliştiren akademik bir yayın projesi.',
          shortDesc: 'Alanında uzman bir doktor ile düzenli olarak proje toplantıları yapmaktayız.'
        },
        teknofestSaglik: {
          title: 'TEKNOFEST - Sağlıkta Yapay Zeka',
          description: 'Bilgisayarlı tomografi (CT) görüntülerinden otomatik olarak inme teşhisi yapabilen bir yapay zeka modeli.',
          shortDesc: 'TEKNOFEST 2025 Sağlıkta Yapay Zeka kategorisine odaklanmıştır.'
        },
        suas26: {
          title: 'SUAS 26 Projesi',
          description: 'Otonom hava araçları için gelişmiş görüntü işleme ve navigasyon sistemleri geliştiren proje.',
          shortDesc: 'SUAS yarışması için otonom sistem geliştirme çalışmalarımız devam etmektedir.'
        },
        aiToolPool: {
          title: 'AI Tool Pool Projesi',
          description: 'Yapay zeka araçlarının keşfini ve kullanımını kolaylaştırmayı hedefleyen platform.',
          shortDesc: 'Konsept geliştirme ve araştırma aşamasındayız.'
        }
      }
    },
    en: {
      projelerimiz: 'OUR PROJECTS',
      projelerimizSubtitle: 'Our visionary projects developed with artificial intelligence, autonomous systems and advanced engineering solutions that shape the technologies of the future.',
      dahaFazlaBilgi: 'Learn More',
      projects: {
        aios: {
          title: 'AI Operation System (AIOS)',
          description: 'An AI-based operating system that will enable digital devices to work more productively with artificial intelligence models.',
          shortDesc: 'A multi-component system including modules such as large language model-supported command recognition, user modeling, and dynamic interface creation.'
        },
        teknofestHavacilik: {
          title: 'TEKNOFEST Aviation - Object and Location Detection',
          description: 'An artificial intelligence system capable of automatic object and location detection using drone images.',
          shortDesc: 'Our preparations for the TEKNOFEST 2025 Aviation category continue.'
        },
        mesaneKanseri: {
          title: 'Bladder Cancer AI Project',
          description: 'An academic publication project developing machine learning models on bladder cancer data.',
          shortDesc: 'We regularly hold project meetings with an expert doctor in the field.'
        },
        teknofestSaglik: {
          title: 'TEKNOFEST - AI in Healthcare',
          description: 'An artificial intelligence model capable of automatically diagnosing stroke from computed tomography (CT) images.',
          shortDesc: 'Focused on the TEKNOFEST 2025 Artificial Intelligence in Healthcare category.'
        },
        suas26: {
          title: 'SUAS 26 Project',
          description: 'A project developing advanced image processing and navigation systems for autonomous aerial vehicles.',
          shortDesc: 'Our autonomous system development work for the SUAS competition continues.'
        },
        aiToolPool: {
          title: 'AI Tool Pool Project',
          description: 'A platform aimed at facilitating the discovery and use of artificial intelligence tools.',
          shortDesc: 'We are in the concept development and research phase.'
        }
      }
    }
  };

  const t = translations[language];

  const projects = [
    {
      id: 'aios',
      title: t.projects.aios.title,
      description: t.projects.aios.description,
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      shortDesc: t.projects.aios.shortDesc
    },
    {
      id: 'teknofest-havacilik',
      title: t.projects.teknofestHavacilik.title,
      description: t.projects.teknofestHavacilik.description,
      image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop',
      shortDesc: t.projects.teknofestHavacilik.shortDesc
    },
    {
      id: 'mesane-kanseri',
      title: t.projects.mesaneKanseri.title,
      description: t.projects.mesaneKanseri.description,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
      shortDesc: t.projects.mesaneKanseri.shortDesc
    },
    {
      id: 'teknofest-saglik',
      title: t.projects.teknofestSaglik.title,
      description: t.projects.teknofestSaglik.description,
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop',
      shortDesc: t.projects.teknofestSaglik.shortDesc
    },
    {
      id: 'suas-26',
      title: t.projects.suas26.title,
      description: t.projects.suas26.description,
      image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop',
      shortDesc: t.projects.suas26.shortDesc
    },
    {
      id: 'ai-tool-pool',
      title: t.projects.aiToolPool.title,
      description: t.projects.aiToolPool.description,
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
      shortDesc: t.projects.aiToolPool.shortDesc
    }
  ];

  const handleCardClick = (index) => {
    const project = projects[index];
    if (project) {
      navigate(`/projects/${project.id}`);
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-section-container">
        <div className="projects-section-layout">
          <div className="projects-section-header">
            <img src={logo} alt="VCAMP Logo" className="projects-section-logo" />
            <h1 className="projects-section-title">{t.projelerimiz}</h1>
            <p className="projects-section-subtitle">
              {t.projelerimizSubtitle}
            </p>
            <Link to="/projects" className="projects-section-button">
              {t.dahaFazlaBilgi}
            </Link>
          </div>

          <div className="projects-section-content">
            <CardSwap
              width={cardDimensions.width}
              height={cardDimensions.height}
              cardDistance={55}
              verticalDistance={70}
              delay={4000}
              pauseOnHover={false}
              onCardClick={handleCardClick}
            >
              {projects.map((project) => (
                <Card key={project.id} onClick={() => navigate(`/projects/${project.id}`)}>
                  <div>
                    {project.image && (
                      <img src={project.image} alt={project.title} />
                    )}
                    <h3>{project.title}</h3>
                    <p>{project.shortDesc}</p>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
