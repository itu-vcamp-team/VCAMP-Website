import React, { useState, useMemo, useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { blogPosts } from '../data/blogData';
import './SearchResultsPage.css';

const SearchResultsPage = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [filterType, setFilterType] = useState('all');
  const [sortBy, setSortBy] = useState('relevance');

  const translations = {
    tr: {
      aramaSonuclari: 'Arama Sonuçları',
      aramaYapin: 'Arama yapın...',
      sonucBulunamadi: 'Sonuç bulunamadı',
      sonucBulunamadiAciklama: 'Aradığınız kriterlere uygun sonuç bulunamadı. Lütfen farklı anahtar kelimeler deneyin.',
      tumu: 'Tümü',
      blog: 'Blog',
      projeler: 'Projeler',
      takim: 'Takım',
      sirala: 'Sırala',
      ilgili: 'En İlgili',
      tarih: 'Tarih',
      alfabetik: 'Alfabetik',
      sonuc: 'sonuç',
      sonucBulundu: 'sonuç bulundu',
      devaminiOku: 'Devamını Oku',
      detaylariGor: 'Detayları Gör',
      anaSayfayaDon: 'Ana Sayfaya Dön',
      kategori: 'Kategori',
      rol: 'Rol',
      email: 'E-posta'
    },
    en: {
      aramaSonuclari: 'Search Results',
      aramaYapin: 'Search...',
      sonucBulunamadi: 'No results found',
      sonucBulunamadiAciklama: 'No results found matching your criteria. Please try different keywords.',
      tumu: 'All',
      blog: 'Blog',
      projeler: 'Projects',
      takim: 'Team',
      sirala: 'Sort',
      ilgili: 'Most Relevant',
      tarih: 'Date',
      alfabetik: 'Alphabetical',
      sonuc: 'result',
      sonucBulundu: 'results found',
      devaminiOku: 'Read More',
      detaylariGor: 'View Details',
      anaSayfayaDon: 'Back to Home',
      kategori: 'Category',
      rol: 'Role',
      email: 'Email'
    }
  };

  const t = translations[language];

  // Blog yazıları - dil desteği
  const blogPostsData = useMemo(() => language === 'tr' ? blogPosts : [
    {
      id: 1,
      title: 'Our Project Development Process',
      excerpt: 'We share how we develop our projects and what methodologies we use as VCAMP.',
      date: 'January 15, 2025',
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'Meet Our New Members',
      excerpt: 'Discover our new members who joined our team and their contributions to our projects.',
      date: 'January 10, 2025',
      category: 'Team',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'TEKNOFEST Preparations',
      excerpt: 'Details about our preparations and projects we developed for the TEKNOFEST competition.',
      date: 'January 5, 2025',
      category: 'Competition',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'Vehicle Design Decisions',
      excerpt: 'Critical decisions we made in our vehicle design and the engineering logic behind these decisions.',
      date: 'December 28, 2024',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=400&fit=crop'
    },
    {
      id: 5,
      title: 'Our Testing Processes',
      excerpt: 'Testing processes of the systems we developed and our quality control approaches.',
      date: 'December 20, 2024',
      category: 'Testing',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop'
    },
    {
      id: 6,
      title: 'Cooperation with Our Sponsors',
      excerpt: 'Our partnerships with our sponsors and the contributions of these partnerships to our projects.',
      date: 'December 15, 2024',
      category: 'Sponsorship',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop'
    },
    {
      id: 7,
      title: 'Our Vehicle Development Process',
      excerpt: 'Challenges we faced in our vehicle development process and our solution approaches.',
      date: 'December 10, 2024',
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=400&fit=crop'
    },
    {
      id: 8,
      title: 'Competition Preparations',
      excerpt: 'Our final preparations and tests before the competition.',
      date: 'December 5, 2024',
      category: 'Competition',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=400&fit=crop'
    },
    {
      id: 9,
      title: 'Team Meetings',
      excerpt: 'Our regular team meetings and project management approach.',
      date: 'December 1, 2024',
      category: 'Team',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop'
    }
  ], [language]);

  // Projeler verisi
  const projects = useMemo(() => [
    {
      id: 'aios',
      title: language === 'tr' ? 'AI Operation System (AIOS)' : 'AI Operation System (AIOS)',
      description: language === 'tr' 
        ? 'Dijital cihazların yapay zekâ modelleriyle daha üretken çalışmasını sağlayacak AI tabanlı bir işletim sistemi.'
        : 'An AI-based operating system that will enable digital devices to work more productively with artificial intelligence models.',
      shortDesc: language === 'tr'
        ? 'Büyük dil modeli destekli komut tanıma, kullanıcı modelleme ve dinamik arayüz oluşturma gibi modülleri içeren çok bileşenli bir sistem.'
        : 'A multi-component system including modules such as large language model-supported command recognition, user modeling, and dynamic interface creation.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      type: 'project'
    },
    {
      id: 'teknofest-havacilik',
      title: language === 'tr' ? 'TEKNOFEST Havacılık - Obje ve Konum Tespiti' : 'TEKNOFEST Aviation - Object and Location Detection',
      description: language === 'tr'
        ? 'Drone görüntülerinden yararlanarak otomatik obje ve konum tespiti yapabilen bir yapay zeka sistemi.'
        : 'An artificial intelligence system capable of automatic object and location detection using drone images.',
      shortDesc: language === 'tr'
        ? 'TEKNOFEST 2025 Havacılık kategorisi için hazırlıklarımız devam etmektedir.'
        : 'Our preparations for the TEKNOFEST 2025 Aviation category continue.',
      image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop',
      type: 'project'
    },
    {
      id: 'mesane-kanseri',
      title: language === 'tr' ? 'Mesane Kanseri AI Projesi' : 'Bladder Cancer AI Project',
      description: language === 'tr'
        ? 'Mesane kanseri verileri üzerinde makine öğrenmesi modelleri geliştiren akademik bir yayın projesi.'
        : 'An academic publication project developing machine learning models on bladder cancer data.',
      shortDesc: language === 'tr'
        ? 'Alanında uzman bir doktor ile düzenli olarak proje toplantıları yapmaktayız.'
        : 'We regularly hold project meetings with an expert doctor in the field.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
      type: 'project'
    },
    {
      id: 'teknofest-saglik',
      title: language === 'tr' ? 'TEKNOFEST - Sağlıkta Yapay Zeka' : 'TEKNOFEST - AI in Healthcare',
      description: language === 'tr'
        ? 'Bilgisayarlı tomografi (CT) görüntülerinden otomatik olarak inme teşhisi yapabilen bir yapay zeka modeli.'
        : 'An artificial intelligence model capable of automatically diagnosing stroke from computed tomography (CT) images.',
      shortDesc: language === 'tr'
        ? 'TEKNOFEST 2025 Sağlıkta Yapay Zeka kategorisine odaklanmıştır.'
        : 'Focused on the TEKNOFEST 2025 Artificial Intelligence in Healthcare category.',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop',
      type: 'project'
    },
    {
      id: 'suas-26',
      title: language === 'tr' ? 'SUAS 26 Projesi' : 'SUAS 26 Project',
      description: language === 'tr'
        ? 'Otonom hava araçları için gelişmiş görüntü işleme ve navigasyon sistemleri geliştiren proje.'
        : 'A project developing advanced image processing and navigation systems for autonomous aerial vehicles.',
      shortDesc: language === 'tr'
        ? 'SUAS yarışması için otonom sistem geliştirme çalışmalarımız devam etmektedir.'
        : 'Our autonomous system development work for the SUAS competition continues.',
      image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop',
      type: 'project'
    },
    {
      id: 'ai-tool-pool',
      title: language === 'tr' ? 'AI Tool Pool Projesi' : 'AI Tool Pool Project',
      description: language === 'tr'
        ? 'Yapay zeka araçlarının keşfini ve kullanımını kolaylaştırmayı hedefleyen platform.'
        : 'A platform aimed at facilitating the discovery and use of artificial intelligence tools.',
      shortDesc: language === 'tr'
        ? 'Konsept geliştirme ve araştırma aşamasındayız.'
        : 'We are in the concept development and research phase.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
      type: 'project'
    }
  ], [language]);

  // Rol çevirileri
  const roleTranslations = useMemo(() => ({
    tr: {
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
    },
    en: {
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
  }), []);

  const rt = useMemo(() => roleTranslations[language], [language, roleTranslations]);

  // Takım üyeleri verisi
  const teamMembers = useMemo(() => [
    { name: 'Kerem Kayabaş', role: 'Software Developer', email: 'kayabas24@itu.edu.tr', type: 'team' },
    { name: 'Gaffar Dulkadir', role: 'Team Leader', email: 'gaffardulkadir@gmail.com', type: 'team' },
    { name: 'İrem Şen', role: 'Grafik ve Endüstriyel Tasarım Uzmanı', email: 'senir21@itu.edu.tr', type: 'team' },
    { name: 'Berken Yücesan', role: 'İş Geliştirme ve Sponsorluk', email: 'yucesanberker@gmail.com', type: 'team' },
    { name: 'Zeynep Nurten Çalışkan', role: 'Yapay Zeka Geliştirici', email: 'zeynurcal@gmail.com', type: 'team' },
    { name: 'Yiğit Can Türk Kaya', role: 'Kontrol Otomasyon Mühendisi', email: 'yigitcanturkkaya@gmail.com', type: 'team' },
    { name: 'Esra Özyiğit', role: 'Grafik ve Endüstriyel Tasarım Uzmanı', email: 'esraozygt.07@gmail.com', type: 'team' },
    { name: 'Fatma Nur Özvural', role: 'Grafik ve Endüstriyel Tasarım Uzmanı', email: 'fn.ozvural@gmail.com', type: 'team' },
    { name: 'Hamit Tuğrul Arslan', role: 'Lise Temsilcisi ve Yazılım Geliştirici', email: 'hamitarsln09@gmail.com', type: 'team' },
    { name: 'Selim Dilşad Ercan', role: 'Web Geliştirici', email: 'dilsadselim@gmail.com', type: 'team' },
    { name: 'Emir Şahin', role: 'Yazılım Geliştirici', email: 'emr.sahin35@gmail.com', type: 'team' },
    { name: 'Fatma Nur Kanıkuru', role: 'Grafik ve Endüstriyel Tasarım Uzmanı', email: 'fatmanurkanikuru44@gmail.com', type: 'team' },
    { name: 'İlayda Çapar', role: 'Grafik ve Endüstriyel Tasarım Uzmanı', email: 'ilaydacapar03@gmail.com', type: 'team' },
    { name: 'Elif Miray Saka', role: 'Grafik ve Endüstriyel Tasarım Uzmanı', email: 'elifmiraysaka@gmail.com', type: 'team' },
    { name: 'Ali Emir Kaplan', role: 'Elektronik ve Robotik Geliştirici', email: 'aliemirkpln49@gmail.com', type: 'team' },
    { name: 'Azizagha Majidov', role: 'Robotik ve Yazılım Geliştirici', email: '18azizmajid@gmail.com', type: 'team' },
    { name: 'Muhammed Mücahit Can', role: 'Web ve Mobil Uygulama Geliştirici', email: 'canmucahit942@gmail.com', type: 'team' },
    { name: 'Ahmet Tuna Ünüvar', role: 'İş ve Ürün Geliştirici', email: 'ahmet.tuna.unuvar@usduzey.com', type: 'team' },
    { name: 'Abdullah Enes Arasan', role: 'Endüstri Mühendisi', email: 'enesarasan04@gmail.com', type: 'team' },
    { name: 'Mehmet Furkan İnceoğlu', role: 'Yazılım ve Uygulama Geliştirici', email: 'furkan_inceoglu@hotmail.com', type: 'team' },
    { name: 'Furkan Ahmet Arıcan', role: 'Yapay Zeka ve Yazılım Geliştirici', email: 'f.arican2007@gmail.com', type: 'team' },
    { name: 'Yaşar Demirkıran', role: 'Elektronik ve Yapay Zeka Geliştirici', email: 'yasarrd8@gmail.com', type: 'team' },
    { name: 'Ali Yiğit Aksungur', role: 'Elektronik ve Robotik Geliştirici', email: 'aliyigitaksungur@gmail.com', type: 'team' },
    { name: 'Türker Deniz Er', role: 'Endüstri Mühendisi', email: 'turkerkaan55@gmail.com', type: 'team' }
  ], []);

  // Arama fonksiyonu
  const searchItems = useCallback((searchQuery, typeFilter) => {
    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase().trim();
    const results = [];

    // Blog araması
    if (typeFilter === 'all' || typeFilter === 'blog') {
      const blogResults = blogPostsData
        .map(post => {
          const titleMatch = post.title.toLowerCase().includes(query);
          const excerptMatch = post.excerpt.toLowerCase().includes(query);
          const categoryMatch = post.category.toLowerCase().includes(query);
          
          let score = 0;
          if (titleMatch) score += 3;
          if (excerptMatch) score += 2;
          if (categoryMatch) score += 1;

          if (titleMatch || excerptMatch || categoryMatch) {
            return {
              type: 'blog',
              id: post.id,
              title: post.title,
              description: post.excerpt,
              category: post.category,
              date: post.date,
              image: post.image,
              score
            };
          }
          return null;
        })
        .filter(item => item !== null);
      
      results.push(...blogResults);
    }

    // Proje araması
    if (typeFilter === 'all' || typeFilter === 'project') {
      const projectResults = projects
        .map(project => {
          const titleMatch = project.title.toLowerCase().includes(query);
          const descMatch = project.description.toLowerCase().includes(query);
          const shortDescMatch = project.shortDesc.toLowerCase().includes(query);
          
          let score = 0;
          if (titleMatch) score += 3;
          if (descMatch) score += 2;
          if (shortDescMatch) score += 1;

          if (titleMatch || descMatch || shortDescMatch) {
            return {
              type: 'project',
              id: project.id,
              title: project.title,
              description: project.shortDesc,
              image: project.image,
              score
            };
          }
          return null;
        })
        .filter(item => item !== null);
      
      results.push(...projectResults);
    }

    // Takım üyesi araması
    if (typeFilter === 'all' || typeFilter === 'team') {
      const teamResults = teamMembers
        .map(member => {
          const nameMatch = member.name.toLowerCase().includes(query);
          const roleMatch = member.role.toLowerCase().includes(query);
          const emailMatch = member.email.toLowerCase().includes(query);
          
          let score = 0;
          if (nameMatch) score += 3;
          if (roleMatch) score += 2;
          if (emailMatch) score += 1;

          if (nameMatch || roleMatch || emailMatch) {
            return {
              type: 'team',
              id: member.email,
              name: member.name,
              role: rt[member.role] || member.role,
              email: member.email,
              score
            };
          }
          return null;
        })
        .filter(item => item !== null);
      
      results.push(...teamResults);
    }

    return results;
  }, [blogPostsData, projects, teamMembers, rt]);

  // Sonuçları hesapla
  const results = useMemo(() => {
    if (!query.trim()) return [];
    let searchResults = searchItems(query, filterType);
    
    // Sıralama
    if (sortBy === 'relevance') {
      searchResults.sort((a, b) => b.score - a.score);
    } else if (sortBy === 'alphabetical') {
      searchResults.sort((a, b) => {
        const titleA = (a.title || a.name || '').toLowerCase();
        const titleB = (b.title || b.name || '').toLowerCase();
        return titleA.localeCompare(titleB);
      });
    }
    
    return searchResults;
  }, [query, filterType, sortBy, searchItems]);

  // Metin vurgulama fonksiyonu
  const highlightText = (text, query) => {
    if (!query.trim()) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) => 
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={index} className="highlight">{part}</mark>
      ) : part
    );
  };

  const handleItemClick = (item) => {
    if (item.type === 'blog') {
      navigate('/blog');
    } else if (item.type === 'project') {
      navigate(`/projects/${item.id}`);
    } else if (item.type === 'team') {
      navigate('/team');
    }
  };

  return (
    <div className="search-results-page">
      <div className="search-results-container">
        <button className="search-back-button" onClick={() => navigate('/')}>
          ← {t.anaSayfayaDon}
        </button>

        <div className="search-results-header">
          <h1 className="search-results-title">{t.aramaSonuclari}</h1>
          {query && (
            <p className="search-query">
              "{query}" için {results.length} {results.length === 1 ? t.sonuc : t.sonucBulundu}
            </p>
          )}
        </div>

        {query && (
          <div className="search-filters">
            <div className="filter-group">
              <label>{t.tumu}:</label>
              <div className="filter-buttons">
                <button
                  className={`filter-btn ${filterType === 'all' ? 'active' : ''}`}
                  onClick={() => setFilterType('all')}
                >
                  {t.tumu}
                </button>
                <button
                  className={`filter-btn ${filterType === 'blog' ? 'active' : ''}`}
                  onClick={() => setFilterType('blog')}
                >
                  {t.blog}
                </button>
                <button
                  className={`filter-btn ${filterType === 'project' ? 'active' : ''}`}
                  onClick={() => setFilterType('project')}
                >
                  {t.projeler}
                </button>
                <button
                  className={`filter-btn ${filterType === 'team' ? 'active' : ''}`}
                  onClick={() => setFilterType('team')}
                >
                  {t.takim}
                </button>
              </div>
            </div>
            <div className="sort-group">
              <label>{t.sirala}:</label>
              <select
                className="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="relevance">{t.ilgili}</option>
                <option value="alphabetical">{t.alfabetik}</option>
              </select>
            </div>
          </div>
        )}

        {!query ? (
          <div className="search-empty-state">
            <p>{t.aramaYapin}</p>
          </div>
        ) : results.length === 0 ? (
          <div className="search-empty-state">
            <h2>{t.sonucBulunamadi}</h2>
            <p>{t.sonucBulunamadiAciklama}</p>
          </div>
        ) : (
          <div className="search-results-grid">
            {results.map((item, index) => (
              <div
                key={`${item.type}-${item.id}-${index}`}
                className="search-result-card"
                onClick={() => handleItemClick(item)}
              >
                {item.image && (
                  <div className="search-result-image">
                    <img src={item.image} alt={item.title || item.name} />
                    {item.category && (
                      <div className="search-result-category">{item.category}</div>
                    )}
                  </div>
                )}
                <div className="search-result-content">
                  <div className="search-result-type">{item.type === 'blog' ? t.blog : item.type === 'project' ? t.projeler : t.takim}</div>
                  <h3 className="search-result-title">
                    {highlightText(item.title || item.name, query)}
                  </h3>
                  {item.description && (
                    <p className="search-result-description">
                      {highlightText(item.description, query)}
                    </p>
                  )}
                  {item.role && (
                    <p className="search-result-meta">
                      <strong>{t.rol}:</strong> {highlightText(item.role, query)}
                    </p>
                  )}
                  {item.email && (
                    <p className="search-result-meta">
                      <strong>{t.email}:</strong> {item.email}
                    </p>
                  )}
                  {item.date && (
                    <p className="search-result-meta">
                      <strong>{t.tarih}:</strong> {item.date}
                    </p>
                  )}
                  <button className="search-result-button">
                    {item.type === 'blog' ? t.devaminiOku : item.type === 'project' ? t.detaylariGor : t.detaylariGor}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;
