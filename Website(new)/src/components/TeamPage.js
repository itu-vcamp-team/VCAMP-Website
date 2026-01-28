import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ChromaGrid from './ChromaGrid';
import './TeamPage.css';

const TeamPage = () => {
  const { language } = useLanguage();
  
  const translations = {
    tr: {
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
  
  const teamMembers = [
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/ProfilePhoto - Kerem.jpg`,
      title: "Kerem Kayabaş",
      subtitle: "Software Developer",
      handle: "kayabas24@itu.edu.tr",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "https://www.linkedin.com/in/kerem-kayabas/"
    },
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/Profile Photo - Gaffar Dulkadir.png`,
      title: "Gaffar Dulkadir",
      subtitle: "Team Leader",
      handle: "gaffardulkadir@gmail.com",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "https://www.linkedin.com/in/gaffar-dulkadir/"
    },
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/FCA0B5CB-BF01-4BBE-B981-F1B64F309245 - İrem Şen-wedo.jpeg`,
      title: "İrem Şen",
      subtitle: "Grafik ve Endüstriyel Tasarım Uzmanı",
      handle: "senir21@itu.edu.tr",
      borderColor: "#F59E0B",
      gradient: "linear-gradient(165deg, #F59E0B, #000)",
      url: "https://www.linkedin.com/in/irem-%C5%9Fen-4037a7326/"
    },
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/WhatsApp Görsel 2025-08-23 saat 20.34.22_3f87c19d - Berker Yücesan.jpg`,
      title: "Berken Yücesan",
      subtitle: "İş Geliştirme ve Sponsorluk",
      handle: "yucesanberker@gmail.com",
      borderColor: "#EF4444",
      gradient: "linear-gradient(195deg, #EF4444, #000)",
      url: "https://www.linkedin.com/in/berker-y%C3%BCcesan-4b89bb277"
    },
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/WhatsApp Image 2024-08-20 at 20.54.00 - Zeynep Nurten Çalışkan.jpeg`,
      title: "Zeynep Nurten Çalışkan",
      subtitle: "Yapay Zeka Geliştirici",
      handle: "zeynurcal@gmail.com",
      borderColor: "#8B5CF6",
      gradient: "linear-gradient(225deg, #8B5CF6, #000)",
      url: "https://www.linkedin.com/in/zeynep-nurten-%C3%A7al%C4%B1%C5%9Fkan-9622b5334"
    },
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/WhatsApp Image 2025-01-05 at 15.05.17 - Yiğit Can Türk Kaya.jpeg`,
      title: "Yiğit Can Türk Kaya",
      subtitle: "Kontrol Otomasyon Mühendisi",
      handle: "yigitcanturkkaya@gmail.com",
      borderColor: "#06B6D4",
      gradient: "linear-gradient(135deg, #06B6D4, #000)",
      url: "https://www.linkedin.com/in/yi%C4%9Fit-kaya-925b2a294/"
    },
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/IMG-20250804-WA0000 - Esra.jpg`,
      title: "Esra Özyiğit",
      subtitle: "Grafik ve Endüstriyel Tasarım Uzmanı",
      handle: "esraozygt.07@gmail.com",
      borderColor: "#EC4899",
      gradient: "linear-gradient(150deg, #EC4899, #000)",
      url: "https://www.linkedin.com/in/esra-%C3%B6zyi%C4%9Fit-ab0b45245"
    },
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/pp - Fatma Nur Özvural.png`,
      title: "Fatma Nur Özvural",
      subtitle: "Grafik ve Endüstriyel Tasarım Uzmanı",
      handle: "fn.ozvural@gmail.com",
      borderColor: "#14B8A6",
      gradient: "linear-gradient(120deg, #14B8A6, #000)",
      url: "https://www.linkedin.com/in/fatma-nur-%C3%B6zvural-514b61378/"
    },
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/1711006829181 - Hamit Arslan.jpg`,
      title: "Hamit Tuğrul Arslan",
      subtitle: "Lise Temsilcisi ve Yazılım Geliştirici",
      handle: "hamitarsln09@gmail.com",
      borderColor: "#F97316",
      gradient: "linear-gradient(210deg, #F97316, #000)",
      url: "https://www.linkedin.com/in/hamitta/"
    },
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/1748438069613 - Selim Dilşad Ercan.jpeg`,
      title: "Selim Dilşad Ercan",
      subtitle: "Web Geliştirici",
      handle: "dilsadselim@gmail.com",
      borderColor: "#6366F1",
      gradient: "linear-gradient(180deg, #6366F1, #000)",
      url: "https://www.linkedin.com/in/selim-dil%C5%9Fad-ercan-4051161a2/"
    },
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/cv - Emir Şahin.jpg`,
      title: "Emir Şahin",
      subtitle: "Yazılım Geliştirici",
      handle: "emr.sahin35@gmail.com",
      borderColor: "#84CC16",
      gradient: "linear-gradient(145deg, #84CC16, #000)",
      url: "https://www.linkedin.com/in/emir-%C5%9Fahin-2b72a9297/"
    },
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/fatmanur kanıkuru.jpeg`,
      title: "Fatma Nur Kanıkuru",
      subtitle: "Grafik ve Endüstriyel Tasarım Uzmanı",
      handle: "fatmanurkanikuru44@gmail.com",
      borderColor: "#A855F7",
      gradient: "linear-gradient(165deg, #A855F7, #000)",
      url: "http://linkedin.com/in/fatma-nur-kan%C4%B1kuru-3a9aa9339"
    },
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/f - İlayda Çapar.jpg`,
      title: "İlayda Çapar",
      subtitle: "Grafik ve Endüstriyel Tasarım Uzmanı",
      handle: "ilaydacapar03@gmail.com",
      borderColor: "#22D3EE",
      gradient: "linear-gradient(195deg, #22D3EE, #000)",
      url: "https://www.linkedin.com/in/ilayda-capar-57724b256/"
    },
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/Adsız tasarım - miray.jpg`,
      title: "Elif Miray Saka",
      subtitle: "Grafik ve Endüstriyel Tasarım Uzmanı",
      handle: "elifmiraysaka@gmail.com",
      borderColor: "#FB7185",
      gradient: "linear-gradient(135deg, #FB7185, #000)",
      url: "https://www.linkedin.com/in/elif-miray-saka-b1a1682b8"
    },
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/1707415576514 - Ali Emir Kaplan.jpg`,
      title: "Ali Emir Kaplan",
      subtitle: "Elektronik ve Robotik Geliştirici",
      handle: "aliemirkpln49@gmail.com",
      borderColor: "#34D399",
      gradient: "linear-gradient(150deg, #34D399, #000)",
      url: "https://www.linkedin.com/in/ali-emir-kaplan/"
    },
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/me - Azizagha Majidov.jpeg`,
      title: "Azizagha Majidov",
      subtitle: "Robotik ve Yazılım Geliştirici",
      handle: "18azizmajid@gmail.com",
      borderColor: "#FBBF24",
      gradient: "linear-gradient(120deg, #FBBF24, #000)",
      url: "https://www.linkedin.com/in/azizagha-majidov-06b1602a6/"
    },
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/abd vize-- - Mücahit CAN.jpg`,
      title: "Muhammed Mücahit Can",
      subtitle: "Web ve Mobil Uygulama Geliştirici",
      handle: "canmucahit942@gmail.com",
      borderColor: "#60A5FA",
      gradient: "linear-gradient(210deg, #60A5FA, #000)",
      url: "https://www.linkedin.com/in/m%C3%BCcahitcan/"
    },
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/Adsız tasarım-2 - Tuna Ünüvar.png`,
      title: "Ahmet Tuna Ünüvar",
      subtitle: "İş ve Ürün Geliştirici",
      handle: "ahmet.tuna.unuvar@usduzey.com",
      borderColor: "#C084FC",
      gradient: "linear-gradient(180deg, #C084FC, #000)",
      url: "https://www.linkedin.com/in/tuna-ünüvar-1334a631b/"
    },
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/1739266121329 - Enes Arasan.jpeg`,
      title: "Abdullah Enes Arasan",
      subtitle: "Endüstri Mühendisi",
      handle: "enesarasan04@gmail.com",
      borderColor: "#4ADE80",
      gradient: "linear-gradient(145deg, #4ADE80, #000)",
      url: "https://www.linkedin.com/in/enes-arasan-985359247/"
    },
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/17546720191529156161715439423251 - Mehmet Furkan İnceoğlu.jpg`,
      title: "Mehmet Furkan İnceoğlu",
      subtitle: "Yazılım ve Uygulama Geliştirici",
      handle: "furkan_inceoglu@hotmail.com",
      borderColor: "#F87171",
      gradient: "linear-gradient(165deg, #F87171, #000)",
      url: null
    },
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/foto2 - Furkan Ahmet Arıcan.jpg`,
      title: "Furkan Ahmet Arıcan",
      subtitle: "Yapay Zeka ve Yazılım Geliştirici",
      handle: "f.arican2007@gmail.com",
      borderColor: "#818CF8",
      gradient: "linear-gradient(195deg, #818CF8, #000)",
      url: "https://www.linkedin.com/in/furkan-ahmet-arican"
    },
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/WhatsApp Görsel 2025-08-06 saat 16.00.07_2a7991e8 - Yaşar D.jpg`,
      title: "Yaşar Demirkıran",
      subtitle: "Elektronik ve Yapay Zeka Geliştirici",
      handle: "yasarrd8@gmail.com",
      borderColor: "#2DD4BF",
      gradient: "linear-gradient(135deg, #2DD4BF, #000)",
      url: "http://www.linkedin.com/in/yasar-demirkiran-ozu"
    },
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/ali yiğiy aksungur.png`,
      title: "Ali Yiğit Aksungur",
      subtitle: "Elektronik ve Robotik Geliştirici",
      handle: "aliyigitaksungur@gmail.com",
      borderColor: "#FCD34D",
      gradient: "linear-gradient(150deg, #FCD34D, #000)",
      url: "https://tr.linkedin.com/in/aliyigitaksungur"
    },
    {
      image: `${process.env.PUBLIC_URL}/profile-photos/WhatsApp Image 2025-08-11 at 23.49.29 - TürkerDeniz.jpeg`,
      title: "Türker Deniz Er",
      subtitle: "Endüstri Mühendisi",
      handle: "turkerkaan55@gmail.com",
      borderColor: "#A78BFA",
      gradient: "linear-gradient(120deg, #A78BFA, #000)",
      url: "https://www.linkedin.com/in/t%C3%BCrker-deniz-er-876b31313/"
    }
  ];

  // Subtitle'ları çevir
  const translatedTeamMembers = teamMembers.map(member => ({
    ...member,
    subtitle: t.roles[member.subtitle] || member.subtitle
  }));

  return (
    <section id="team" className="team-page">
      <div className="team-container">
        <div className="team-grid-wrapper">
          <ChromaGrid 
            items={translatedTeamMembers}
            radius={600}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
            columns={4}
            rows={Math.ceil(teamMembers.length / 4)}
          />
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
