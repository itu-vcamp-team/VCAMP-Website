import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './ProjectsPage.css';

const ProjectsPage = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  
  const translations = {
    tr: {
      projelerimiz: 'PROJELERİMİZ',
      projelerimizSubtitle: 'Yapay zeka ve teknoloji alanındaki çalışmalarımız',
      detaylariGor: 'Detayları Gör'
    },
    en: {
      projelerimiz: 'OUR PROJECTS',
      projelerimizSubtitle: 'Our work in artificial intelligence and technology',
      detaylariGor: 'View Details'
    }
  };
  
  const t = translations[language];

  const projectTranslations = {
    tr: {
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
    },
    en: {
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
  };
  
  const pt = projectTranslations[language];

  const projects = [
    {
      id: 'aios',
      title: pt.aios.title,
      description: pt.aios.description,
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      shortDesc: pt.aios.shortDesc
    },
    {
      id: 'teknofest-havacilik',
      title: pt.teknofestHavacilik.title,
      description: pt.teknofestHavacilik.description,
      image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop',
      shortDesc: pt.teknofestHavacilik.shortDesc
    },
    {
      id: 'mesane-kanseri',
      title: pt.mesaneKanseri.title,
      description: pt.mesaneKanseri.description,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
      shortDesc: pt.mesaneKanseri.shortDesc
    },
    {
      id: 'teknofest-saglik',
      title: pt.teknofestSaglik.title,
      description: pt.teknofestSaglik.description,
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop',
      shortDesc: pt.teknofestSaglik.shortDesc
    },
    {
      id: 'suas-26',
      title: pt.suas26.title,
      description: pt.suas26.description,
      image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop',
      shortDesc: pt.suas26.shortDesc
    },
    {
      id: 'ai-tool-pool',
      title: pt.aiToolPool.title,
      description: pt.aiToolPool.description,
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
      shortDesc: pt.aiToolPool.shortDesc
    }
  ];

  return (
    <section id="projects" className="projects-page">
      <div className="projects-container">
        <div className="projects-header">
          <h1 className="projects-title">{t.projelerimiz}</h1>
          <p className="projects-subtitle">{t.projelerimizSubtitle}</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              <div className="project-card-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-card-content">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-description">{project.shortDesc}</p>
                <button className="project-card-button">{t.detaylariGor}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
