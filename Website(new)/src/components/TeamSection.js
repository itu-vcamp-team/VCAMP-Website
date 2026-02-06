import React, { useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './TeamSection.css';

const TeamSection = () => {
  const { language } = useLanguage();

  const translations = {
    tr: {
      ekibimiz: 'Ekibimiz',
      kesfedin: 'Keşfedin',
      roles: {
        'Software Developer': 'Yazılım Geliştirici',
        'Team Leader': 'Takım Lideri',
        'Grafik ve Endüstriyel Tasarım Uzmanı': 'Grafik ve Endüstriyel Tasarım Uzmanı',
        'İş Geliştirme ve Sponsorluk': 'İş Geliştirme ve Sponsorluk',
        'Yapay Zeka Geliştirici': 'Yapay Zeka Geliştirici',
        'Kontrol Otomasyon Mühendisi': 'Kontrol Otomasyon Mühendisi',
        'Lise Temsilcisi ve Yazılım Geliştirici': 'Lise Temsilcisi ve Yazılım Geliştirici',
        'Web Geliştirici': 'Web Geliştirici',
        'Yazılım Geliştirici': 'Yazılım Geliştirici',
        'Elektronik ve Robotik Geliştirici': 'Elektronik ve Robotik Geliştirici',
        'Robotik ve Yazılım Geliştirici': 'Robotik ve Yazılım Geliştirici',
        'Web ve Mobil Uygulama Geliştirici': 'Web ve Mobil Uygulama Geliştirici',
        'İş ve Ürün Geliştirici': 'İş ve Ürün Geliştirici',
        'Endüstri Mühendisi': 'Endüstri Mühendisi',
        'Yazılım ve Uygulama Geliştirici': 'Yazılım ve Uygulama Geliştirici',
        'Yapay Zeka ve Yazılım Geliştirici': 'Yapay Zeka ve Yazılım Geliştirici',
        'Elektronik ve Yapay Zeka Geliştirici': 'Elektronik ve Yapay Zeka Geliştirici'
      }
    },
    en: {
      ekibimiz: 'Our Team',
      kesfedin: 'Discover',
      roles: {
        'Software Developer': 'Software Developer',
        'Team Leader': 'Team Leader',
        'Grafik ve Endüstriyel Tasarım Uzmanı': 'Graphic and Industrial Design Specialist',
        'İş Geliştirme ve Sponsorluk': 'Business Development and Sponsorship',
        'Yapay Zeka Geliştirici': 'AI Developer',
        'Kontrol Otomasyon Mühendisi': 'Control Automation Engineer',
        'Lise Temsilcisi ve Yazılım Geliştirici': 'High School Representative and Software Developer',
        'Web Geliştirici': 'Web Developer',
        'Yazılım Geliştirici': 'Software Developer',
        'Elektronik ve Robotik Geliştirici': 'Electronics and Robotics Developer',
        'Robotik ve Yazılım Geliştirici': 'Robotics and Software Developer',
        'Web ve Mobil Uygulama Geliştirici': 'Web and Mobile Application Developer',
        'İş ve Ürün Geliştirici': 'Business and Product Developer',
        'Endüstri Mühendisi': 'Industrial Engineer',
        'Yazılım ve Uygulama Geliştirici': 'Software and Application Developer',
        'Yapay Zeka ve Yazılım Geliştirici': 'AI and Software Developer',
        'Elektronik ve Yapay Zeka Geliştirici': 'Electronics and AI Developer'
      }
    }
  };

  const t = translations[language];
  const scrollContainerRef = useRef(null);
  const scrollSpeed = 1.5; // px per frame - daha hızlı

  const teamMembers = [
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/ProfilePhoto - Kerem.jpg`,
      title: "Kerem Kayabaş",
      subtitle: "Software Developer",
      handle: "kayabas24@itu.edu.tr",
      borderColor: "#3B82F6",
      url: "https://www.linkedin.com/in/kerem-kayabas/"
    },
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/Profile Photo - Gaffar Dulkadir.png`,
      title: "Gaffar Dulkadir",
      subtitle: "Team Leader",
      handle: "gaffardulkadir@gmail.com",
      borderColor: "#10B981",
      url: "https://www.linkedin.com/in/gaffar-dulkadir/"
    },
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/FCA0B5CB-BF01-4BBE-B981-F1B64F309245 - İrem Şen-wedo.jpeg`,
      title: "İrem Şen",
      subtitle: "Grafik ve Endüstriyel Tasarım Uzmanı",
      handle: "senir21@itu.edu.tr",
      borderColor: "#F59E0B",
      url: "https://www.linkedin.com/in/irem-%C5%9Fen-4037a7326/"
    },
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/WhatsApp Görsel 2025-08-23 saat 20.34.22_3f87c19d - Berker Yücesan.jpg`,
      title: "Berken Yücesan",
      subtitle: "İş Geliştirme ve Sponsorluk",
      handle: "yucesanberker@gmail.com",
      borderColor: "#EF4444",
      url: "https://www.linkedin.com/in/berker-y%C3%BCcesan-4b89bb277"
    },
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/WhatsApp Image 2024-08-20 at 20.54.00 - Zeynep Nurten Çalışkan.jpeg`,
      title: "Zeynep Nurten Çalışkan",
      subtitle: "Yapay Zeka Geliştirici",
      handle: "zeynurcal@gmail.com",
      borderColor: "#8B5CF6",
      url: "https://www.linkedin.com/in/zeynep-nurten-%C3%A7al%C4%B1%C5%9Fkan-9622b5334"
    },
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/WhatsApp Image 2025-01-05 at 15.05.17 - Yiğit Can Türk Kaya.jpeg`,
      title: "Yiğit Can Türk Kaya",
      subtitle: "Kontrol Otomasyon Mühendisi",
      handle: "yigitcanturkkaya@gmail.com",
      borderColor: "#06B6D4",
      url: "https://www.linkedin.com/in/yi%C4%9Fit-kaya-925b2a294/"
    },
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/IMG-20250804-WA0000 - Esra.jpg`,
      title: "Esra Özyiğit",
      subtitle: "Grafik ve Endüstriyel Tasarım Uzmanı",
      handle: "esraozygt.07@gmail.com",
      borderColor: "#EC4899",
      url: "https://www.linkedin.com/in/esra-%C3%B6zyi%C4%9Fit-ab0b45245"
    },
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/pp - Fatma Nur Özvural.png`,
      title: "Fatma Nur Özvural",
      subtitle: "Grafik ve Endüstriyel Tasarım Uzmanı",
      handle: "fn.ozvural@gmail.com",
      borderColor: "#14B8A6",
      url: "https://www.linkedin.com/in/fatma-nur-%C3%B6zvural-514b61378/"
    },
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/1711006829181 - Hamit Arslan.jpg`,
      title: "Hamit Tuğrul Arslan",
      subtitle: "Lise Temsilcisi ve Yazılım Geliştirici",
      handle: "hamitarsln09@gmail.com",
      borderColor: "#F97316",
      url: "https://www.linkedin.com/in/hamitta/"
    },
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/1748438069613 - Selim Dilşad Ercan.jpeg`,
      title: "Selim Dilşad Ercan",
      subtitle: "Web Geliştirici",
      handle: "dilsadselim@gmail.com",
      borderColor: "#6366F1",
      url: "https://www.linkedin.com/in/selim-dil%C5%9Fad-ercan-4051161a2/"
    },
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/cv - Emir Şahin.jpg`,
      title: "Emir Şahin",
      subtitle: "Yazılım Geliştirici",
      handle: "emr.sahin35@gmail.com",
      borderColor: "#84CC16",
      url: "https://www.linkedin.com/in/emir-%C5%9Fahin-2b72a9297/"
    },
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/fatmanur kanıkuru.jpeg`,
      title: "Fatma Nur Kanıkuru",
      subtitle: "Grafik ve Endüstriyel Tasarım Uzmanı",
      handle: "fatmanurkanikuru44@gmail.com",
      borderColor: "#A855F7",
      url: "http://linkedin.com/in/fatma-nur-kan%C4%B1kuru-3a9aa9339"
    },
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/f - İlayda Çapar.jpg`,
      title: "İlayda Çapar",
      subtitle: "Grafik ve Endüstriyel Tasarım Uzmanı",
      handle: "ilaydacapar03@gmail.com",
      borderColor: "#22D3EE",
      url: "https://www.linkedin.com/in/ilayda-capar-57724b256/"
    },
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/Adsız tasarım - miray.jpg`,
      title: "Elif Miray Saka",
      subtitle: "Grafik ve Endüstriyel Tasarım Uzmanı",
      handle: "elifmiraysaka@gmail.com",
      borderColor: "#FB7185",
      url: "https://www.linkedin.com/in/elif-miray-saka-b1a1682b8"
    },
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/1707415576514 - Ali Emir Kaplan.jpg`,
      title: "Ali Emir Kaplan",
      subtitle: "Elektronik ve Robotik Geliştirici",
      handle: "aliemirkpln49@gmail.com",
      borderColor: "#34D399",
      url: "https://www.linkedin.com/in/ali-emir-kaplan/"
    },
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/me - Azizagha Majidov.jpeg`,
      title: "Azizagha Majidov",
      subtitle: "Robotik ve Yazılım Geliştirici",
      handle: "18azizmajid@gmail.com",
      borderColor: "#FBBF24",
      url: "https://www.linkedin.com/in/azizagha-majidov-06b1602a6/"
    },
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/abd vize-- - Mücahit CAN.jpg`,
      title: "Muhammed Mücahit Can",
      subtitle: "Web ve Mobil Uygulama Geliştirici",
      handle: "canmucahit942@gmail.com",
      borderColor: "#60A5FA",
      url: "https://www.linkedin.com/in/m%C3%BCcahitcan/"
    },
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/Adsız tasarım-2 - Tuna Ünüvar.png`,
      title: "Ahmet Tuna Ünüvar",
      subtitle: "İş ve Ürün Geliştirici",
      handle: "ahmet.tuna.unuvar@usduzey.com",
      borderColor: "#C084FC",
      url: "https://www.linkedin.com/in/tuna-ünüvar-1334a631b/"
    },
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/1739266121329 - Enes Arasan.jpeg`,
      title: "Abdullah Enes Arasan",
      subtitle: "Endüstri Mühendisi",
      handle: "enesarasan04@gmail.com",
      borderColor: "#4ADE80",
      url: "https://www.linkedin.com/in/enes-arasan-985359247/"
    },
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/17546720191529156161715439423251 - Mehmet Furkan İnceoğlu.jpg`,
      title: "Mehmet Furkan İnceoğlu",
      subtitle: "Yazılım ve Uygulama Geliştirici",
      handle: "furkan_inceoglu@hotmail.com",
      borderColor: "#F87171",
      url: null
    },
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/foto2 - Furkan Ahmet Arıcan.jpg`,
      title: "Furkan Ahmet Arıcan",
      subtitle: "Yapay Zeka ve Yazılım Geliştirici",
      handle: "f.arican2007@gmail.com",
      borderColor: "#818CF8",
      url: "https://www.linkedin.com/in/furkan-ahmet-arican"
    },
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/WhatsApp Görsel 2025-08-06 saat 16.00.07_2a7991e8 - Yaşar D.jpg`,
      title: "Yaşar Demirkıran",
      subtitle: "Elektronik ve Yapay Zeka Geliştirici",
      handle: "yasarrd8@gmail.com",
      borderColor: "#2DD4BF",
      url: "http://www.linkedin.com/in/yasar-demirkiran-ozu"
    },
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/ali yiğiy aksungur.png`,
      title: "Ali Yiğit Aksungur",
      subtitle: "Elektronik ve Robotik Geliştirici",
      handle: "aliyigitaksungur@gmail.com",
      borderColor: "#FCD34D",
      url: "https://tr.linkedin.com/in/aliyigitaksungur"
    },
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/WhatsApp Image 2025-08-11 at 23.49.29 - TürkerDeniz.jpeg`,
      title: "Türker Deniz Er",
      subtitle: "Endüstri Mühendisi",
      handle: "turkerkaan55@gmail.com",
      borderColor: "#A78BFA",
      url: "https://www.linkedin.com/in/t%C3%BCrker-deniz-er-876b31313/"
    },
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/Yusuf Alper İlhan.jpg`,
      title: "Yusuf Alper İlhan",
      subtitle: "Yapay Zeka ve Yazılım Geliştirici",
      handle: "yusufalperilhan7@gmail.com",
      borderColor: "#38BDF8",
      url: "https://www.linkedin.com/in/yusuf-alper-ilhan/"
    }
  ];

  // Sonsuz döngü için kartları iki kez ekle
  const duplicatedMembers = [...teamMembers, ...teamMembers];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId;
    let lastTimestamp = performance.now();

    const animate = (timestamp) => {
      if (container) {
        const delta = timestamp - lastTimestamp;
        lastTimestamp = timestamp;

        container.scrollLeft += scrollSpeed * (delta / 16);

        // Sonsuz döngü için scroll pozisyonunu kontrol et
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <section id="team-section" className="team-section">
      <div className="team-section-container">
        <div className="team-section-header">
          <h2 className="team-section-title">{t.ekibimiz}</h2>
          <a href="/team" className="discover-button">
            <span>{t.kesfedin}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        <div
          className="team-section-strip"
          ref={scrollContainerRef}
        >
          <div className="team-cards-container">
            {duplicatedMembers.map((member, index) => (
              <div
                key={index}
                className="team-card-simple"
              >
                {/* Profile image */}
                <div className="team-card-image-wrapper">
                  <div className="team-card-image-circle">
                    <img src={member.image} alt={member.title} />
                  </div>
                </div>

                {/* Info section */}
                <div className="team-card-info">
                  <h3 className="team-card-name">{member.title}</h3>
                  <p className="team-card-role">{t.roles[member.subtitle] || member.subtitle}</p>
                </div>

                {/* Social icons */}
                <div className="team-card-contacts">
                  <a
                    href={`mailto:${member.handle}`}
                    className="team-card-contact-link"
                    title="E-posta"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <span>{member.handle}</span>
                  </a>
                  {member.url && (
                    <a
                      href={member.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-card-contact-link linkedin"
                      title="LinkedIn"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      <span>{member.title}</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
