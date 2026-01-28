import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './AboutPage.css';

const AboutPage = () => {
  const { language } = useLanguage();

  const translations = {
    tr: {
      vcampNedir: 'VCAMP NEDİR?',
      vcampNedirText: 'İTÜ öğrencilerinin teknoloji ve yenilik odaklı projelerde aktif rol almasını sağlayan bir proje takımıdır.',
      misyonumuz: 'MİSYONUMUZ',
      misyonumuzText: 'Farklı disiplinlerden gelen üyelerimizin sinerjisiyle inovasyon, mühendislik tasarımı ve proje yönetimi alanlarında yetkinliklerimizi geliştirmektir.',
      vizyonumuz: 'VİZYONUMUZ',
      vizyonumuzText: 'Dijital dönüşüm süreçlerinde öncü projeler geliştirerek İTÜ bünyesinde sürdürülebilir bir proje geliştirme merkezi olmaktır.'
    },
    en: {
      vcampNedir: 'WHAT IS VCAMP?',
      vcampNedirText: 'A project team that enables ITU students to take an active role in technology and innovation-focused projects.',
      misyonumuz: 'OUR MISSION',
      misyonumuzText: 'To develop our competencies in innovation, engineering design, and project management through the synergy of our members from different disciplines.',
      vizyonumuz: 'OUR VISION',
      vizyonumuzText: 'To become a sustainable project development center within ITU by developing pioneering projects in digital transformation processes.'
    }
  };

  const t = translations[language];
  const containerRef = useRef(null);
  const contentItemsRef = useRef([]);
  const linesRef = useRef([]);
  const dotsRef = useRef([]);
  const svgContainerRef = useRef(null);
  const animatedSections = useRef(new Set());
  const [pathsData, setPathsData] = useState(['', '', '']);
  const [viaPoints, setViaPoints] = useState([]); // Terminal/köşe noktaları

  // Devre kartı temalı çizgi çizme
  useEffect(() => {
    const drawCircuitPath = () => {
      const width = window.innerWidth;

      // Update the condition to check for mobile width
      if (width < 768) {
        // Mobile view adjustment: clear paths or draw simplified ones
        setPathsData(['', '', '']);
        setViaPoints([]);
        return;
      }

      // About sayfasının başlangıcı
      const aboutSection = document.getElementById('about');
      if (!aboutSection) return;

      const aboutTop = aboutSection.offsetTop;

      // Projects section'ı bul (bitiş noktası)
      const projectsSection = document.getElementById('projects');
      const endY = projectsSection ? projectsSection.offsetTop - aboutTop : 1500;

      // SVG container height'ı ayarla (about section'dan projects section'a kadar)
      const sectionHeight = endY + 100;
      svgContainerRef.current.style.height = sectionHeight + 'px';

      // Çizgi parametreleri
      const lineGap = 15; // Çizgiler arası mesafe
      const centerX = width / 2;

      // 3 çizgi için başlangıç pozisyonları (ortada, yakın)
      const startPositions = [
        centerX - lineGap,
        centerX,
        centerX + lineGap
      ];

      // Her bölüm için hedef alanları hesapla (koordinatlar about-page'e relative)
      const sections = contentItemsRef.current.map((item, index) => {
        if (!item) return null;

        const rect = item.getBoundingClientRect();
        const absoluteTop = rect.top + window.scrollY;
        const absoluteBottom = absoluteTop + rect.height;

        // About page'e relative koordinatlar
        const relativeTop = absoluteTop - aboutTop;
        const relativeBottom = absoluteBottom - aboutTop;

        // İçerik solda mı sağda mı?
        const isLeft = index % 2 === 0;

        // Çizgilerin gideceği taraf (içeriğin karşısı)
        const targetSide = isLeft ? 'right' : 'left';

        // Hedef X pozisyonları
        let targetX;
        if (width > 768) {
          targetX = isLeft ? width * 0.72 : width * 0.28;
        } else {
          targetX = centerX;
        }

        return {
          top: relativeTop,
          bottom: relativeBottom,
          centerY: relativeTop + rect.height / 2,
          targetSide,
          targetX,
          isLeft
        };
      }).filter(Boolean);

      if (sections.length < 3) return;

      // 3 çizgi için path'ler oluştur
      let paths = ['', '', ''];

      // Her çizgi için mevcut pozisyon (about page'in başından başla)
      let currentX = [...startPositions];
      let currentY = [0, 0, 0];

      // Başlangıç noktaları
      for (let i = 0; i < 3; i++) {
        paths[i] = `M ${currentX[i]} ${currentY[i]}`;
      }

      // ============ BÖLÜM 1: VCAMP NEDİR (Sol içerik, çizgiler sağda) ============
      const section1 = sections[0];
      const s1_startY = section1.top - 20;
      const s1_midY = section1.centerY;

      // Dikdörtgen desen oluştur - sağ tarafa genişle
      const rightExpand1 = width > 768 ? width * 0.85 : width * 0.75;
      const rightExpand2 = width > 768 ? width * 0.78 : width * 0.68;
      const rightExpand3 = width > 768 ? width * 0.71 : width * 0.61;

      // Çizgi 1 - En dışta
      paths[0] += ` L ${currentX[0]} ${s1_startY}`;
      paths[0] += ` L ${rightExpand1} ${s1_startY}`;
      paths[0] += ` L ${rightExpand1} ${s1_midY + 60}`;
      paths[0] += ` L ${section1.targetX + lineGap * 2} ${s1_midY + 60}`;
      currentX[0] = section1.targetX + lineGap * 2;
      currentY[0] = s1_midY + 60;

      // Çizgi 2 - Ortada
      paths[1] += ` L ${currentX[1]} ${s1_startY + 30}`;
      paths[1] += ` L ${rightExpand2} ${s1_startY + 30}`;
      paths[1] += ` L ${rightExpand2} ${s1_midY + 30}`;
      paths[1] += ` L ${section1.targetX + lineGap} ${s1_midY + 30}`;
      currentX[1] = section1.targetX + lineGap;
      currentY[1] = s1_midY + 30;

      // Çizgi 3 - En içte
      paths[2] += ` L ${currentX[2]} ${s1_startY + 60}`;
      paths[2] += ` L ${rightExpand3} ${s1_startY + 60}`;
      paths[2] += ` L ${rightExpand3} ${s1_midY}`;
      paths[2] += ` L ${section1.targetX} ${s1_midY}`;
      currentX[2] = section1.targetX;
      currentY[2] = s1_midY;

      // ============ GEÇİŞ: Sağdan Sola ============
      const section2 = sections[1];
      const transitionY1 = section1.bottom + (section2.top - section1.bottom) * 0.3;
      const transitionY2 = section1.bottom + (section2.top - section1.bottom) * 0.5;
      const transitionY3 = section1.bottom + (section2.top - section1.bottom) * 0.7;

      const leftTarget = width > 768 ? width * 0.15 : width * 0.25;
      const leftTarget2 = width > 768 ? width * 0.22 : width * 0.32;
      const leftTarget3 = width > 768 ? width * 0.29 : width * 0.39;

      // Çizgi 1 - Kesişerek sola
      paths[0] += ` L ${currentX[0]} ${transitionY1}`;
      paths[0] += ` L ${leftTarget} ${transitionY1}`;
      currentX[0] = leftTarget;
      currentY[0] = transitionY1;

      // Çizgi 2 - Kesişerek sola (çizgi 1'in altından)
      paths[1] += ` L ${currentX[1]} ${transitionY2}`;
      paths[1] += ` L ${leftTarget2} ${transitionY2}`;
      currentX[1] = leftTarget2;
      currentY[1] = transitionY2;

      // Çizgi 3 - Kesişerek sola (çizgi 1 ve 2'nin altından)
      paths[2] += ` L ${currentX[2]} ${transitionY3}`;
      paths[2] += ` L ${leftTarget3} ${transitionY3}`;
      currentX[2] = leftTarget3;
      currentY[2] = transitionY3;

      // ============ BÖLÜM 2: MİSYONUMUZ (Sağ içerik, çizgiler solda) ============
      const s2_midY = section2.centerY;

      // Dikdörtgen desen oluştur - sol tarafa genişle
      const leftExpand1 = width > 768 ? width * 0.12 : width * 0.18;
      const leftExpand2 = width > 768 ? width * 0.18 : width * 0.25;
      const leftExpand3 = width > 768 ? width * 0.24 : width * 0.32;

      // Çizgi 1 - En dışta
      paths[0] += ` L ${currentX[0]} ${s2_midY - 40}`;
      paths[0] += ` L ${leftExpand1} ${s2_midY - 40}`;
      paths[0] += ` L ${leftExpand1} ${s2_midY + 50}`;
      paths[0] += ` L ${section2.targetX - lineGap * 2} ${s2_midY + 50}`;
      currentX[0] = section2.targetX - lineGap * 2;
      currentY[0] = s2_midY + 50;

      // Çizgi 2 - Ortada
      paths[1] += ` L ${currentX[1]} ${s2_midY - 10}`;
      paths[1] += ` L ${leftExpand2} ${s2_midY - 10}`;
      paths[1] += ` L ${leftExpand2} ${s2_midY + 20}`;
      paths[1] += ` L ${section2.targetX - lineGap} ${s2_midY + 20}`;
      currentX[1] = section2.targetX - lineGap;
      currentY[1] = s2_midY + 20;

      // Çizgi 3 - En içte
      paths[2] += ` L ${currentX[2]} ${s2_midY}`;
      paths[2] += ` L ${leftExpand3} ${s2_midY}`;
      paths[2] += ` L ${leftExpand3} ${s2_midY - 10}`;
      paths[2] += ` L ${section2.targetX} ${s2_midY - 10}`;
      currentX[2] = section2.targetX;
      currentY[2] = s2_midY - 10;

      // ============ GEÇİŞ: Soldan Sağa ============
      const section3 = sections[2];
      const transitionY4 = section2.bottom + (section3.top - section2.bottom) * 0.3;
      const transitionY5 = section2.bottom + (section3.top - section2.bottom) * 0.5;
      const transitionY6 = section2.bottom + (section3.top - section2.bottom) * 0.7;

      const rightTarget = width > 768 ? width * 0.85 : width * 0.75;
      const rightTarget2 = width > 768 ? width * 0.78 : width * 0.68;
      const rightTarget3 = width > 768 ? width * 0.71 : width * 0.61;

      // Çizgi 1 - Kesişerek sağa
      paths[0] += ` L ${currentX[0]} ${transitionY4}`;
      paths[0] += ` L ${rightTarget} ${transitionY4}`;
      currentX[0] = rightTarget;
      currentY[0] = transitionY4;

      // Çizgi 2 - Kesişerek sağa
      paths[1] += ` L ${currentX[1]} ${transitionY5}`;
      paths[1] += ` L ${rightTarget2} ${transitionY5}`;
      currentX[1] = rightTarget2;
      currentY[1] = transitionY5;

      // Çizgi 3 - Kesişerek sağa
      paths[2] += ` L ${currentX[2]} ${transitionY6}`;
      paths[2] += ` L ${rightTarget3} ${transitionY6}`;
      currentX[2] = rightTarget3;
      currentY[2] = transitionY6;

      // ============ BÖLÜM 3: VİZYONUMUZ (Sol içerik, çizgiler sağda) ============
      const s3_midY = section3.centerY;

      // Dikdörtgen desen oluştur - sağ tarafa
      const rightExpand4 = width > 768 ? width * 0.88 : width * 0.78;
      const rightExpand5 = width > 768 ? width * 0.81 : width * 0.71;
      const rightExpand6 = width > 768 ? width * 0.74 : width * 0.64;

      // Çizgi 1 - En dışta
      paths[0] += ` L ${currentX[0]} ${s3_midY - 30}`;
      paths[0] += ` L ${rightExpand4} ${s3_midY - 30}`;
      paths[0] += ` L ${rightExpand4} ${s3_midY + 40}`;
      paths[0] += ` L ${section3.targetX + lineGap * 2} ${s3_midY + 40}`;
      currentX[0] = section3.targetX + lineGap * 2;
      currentY[0] = s3_midY + 40;

      // Çizgi 2 - Ortada
      paths[1] += ` L ${currentX[1]} ${s3_midY}`;
      paths[1] += ` L ${rightExpand5} ${s3_midY}`;
      paths[1] += ` L ${rightExpand5} ${s3_midY + 10}`;
      paths[1] += ` L ${section3.targetX + lineGap} ${s3_midY + 10}`;
      currentX[1] = section3.targetX + lineGap;
      currentY[1] = s3_midY + 10;

      // Çizgi 3 - En içte
      paths[2] += ` L ${currentX[2]} ${s3_midY + 20}`;
      paths[2] += ` L ${rightExpand6} ${s3_midY + 20}`;
      paths[2] += ` L ${rightExpand6} ${s3_midY - 20}`;
      paths[2] += ` L ${section3.targetX} ${s3_midY - 20}`;
      currentX[2] = section3.targetX;
      currentY[2] = s3_midY - 20;

      // ============ BİTİŞ: Projelerimiz'e doğru ============
      const finalY = endY - 50; // endY artık relative
      const finalX = centerX;

      // Tüm çizgileri ortada birleştir
      paths[0] += ` L ${currentX[0]} ${finalY - 60}`;
      paths[0] += ` L ${finalX - lineGap} ${finalY - 60}`;
      paths[0] += ` L ${finalX - lineGap} ${finalY}`;

      paths[1] += ` L ${currentX[1]} ${finalY - 30}`;
      paths[1] += ` L ${finalX} ${finalY - 30}`;
      paths[1] += ` L ${finalX} ${finalY}`;

      paths[2] += ` L ${currentX[2]} ${finalY}`;
      paths[2] += ` L ${finalX + lineGap} ${finalY}`;

      // Via noktaları (köşe ve terminal noktaları) - her birinin hangi çizgiye ait olduğunu belirle
      const vias = [
        // Başlangıç noktaları
        { x: startPositions[0], y: 0, type: 'start', lineIndex: 0 },
        { x: startPositions[1], y: 0, type: 'start', lineIndex: 1 },
        { x: startPositions[2], y: 0, type: 'start', lineIndex: 2 },

        // Bölüm 1 köşeleri
        { x: rightExpand1, y: s1_startY, type: 'corner', lineIndex: 0 },
        { x: rightExpand2, y: s1_startY + 30, type: 'corner', lineIndex: 1 },
        { x: rightExpand3, y: s1_startY + 60, type: 'corner', lineIndex: 2 },

        // Geçiş noktaları 1
        { x: leftTarget, y: transitionY1, type: 'corner', lineIndex: 0 },
        { x: leftTarget2, y: transitionY2, type: 'corner', lineIndex: 1 },
        { x: leftTarget3, y: transitionY3, type: 'corner', lineIndex: 2 },

        // Bölüm 2 köşeleri
        { x: leftExpand1, y: s2_midY - 40, type: 'corner', lineIndex: 0 },
        { x: leftExpand2, y: s2_midY - 10, type: 'corner', lineIndex: 1 },
        { x: leftExpand3, y: s2_midY, type: 'corner', lineIndex: 2 },

        // Geçiş noktaları 2
        { x: rightTarget, y: transitionY4, type: 'corner', lineIndex: 0 },
        { x: rightTarget2, y: transitionY5, type: 'corner', lineIndex: 1 },
        { x: rightTarget3, y: transitionY6, type: 'corner', lineIndex: 2 },

        // Bölüm 3 köşeleri
        { x: rightExpand4, y: s3_midY - 30, type: 'corner', lineIndex: 0 },
        { x: rightExpand5, y: s3_midY, type: 'corner', lineIndex: 1 },
        { x: rightExpand6, y: s3_midY + 20, type: 'corner', lineIndex: 2 },

        // Bitiş noktaları (terminal)
        { x: finalX - lineGap, y: finalY, type: 'terminal', lineIndex: 0 },
        { x: finalX, y: finalY, type: 'terminal', lineIndex: 1 },
        { x: finalX + lineGap, y: finalY, type: 'terminal', lineIndex: 2 },
      ];

      setViaPoints(vias);
      setPathsData(paths);
    };

    // İlk hesaplama - content item'lar render edildikten sonra
    const timeoutId = setTimeout(() => {
      drawCircuitPath();
    }, 300);

    // Resize'da yeniden hesapla
    const handleResize = () => {
      setTimeout(() => {
        drawCircuitPath();
      }, 100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Path'leri SVG'e uygula
  useEffect(() => {
    if (pathsData[0] === '') return;

    linesRef.current.forEach((line, i) => {
      if (line && pathsData[i]) {
        line.setAttribute('d', pathsData[i]);
        const len = line.getTotalLength();
        line.style.strokeDasharray = len;
        line.style.strokeDashoffset = len;
      }
    });
  }, [pathsData]);

  // Scroll animasyonu
  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      const scrollTop = window.scrollY;

      // About section'a göre scroll hesapla
      const aboutSection = document.getElementById('about');
      const projectsSection = document.getElementById('projects');

      if (!aboutSection) return;

      const aboutTop = aboutSection.offsetTop;
      const windowHeight = window.innerHeight;

      // About section'ın viewport'ta görünür olduğu noktayı hesapla
      // About section'ın üst kısmı viewport'un ortasına geldiğinde çizim başlasın
      const animationStart = aboutTop - windowHeight * 0.5;
      const animationEnd = projectsSection ? projectsSection.offsetTop - windowHeight * 0.5 : aboutTop + 1500;
      const animationRange = animationEnd - animationStart;

      // Scroll yüzdesi (0-1 arası)
      let scrollPercent = 0;
      if (scrollTop > animationStart) {
        scrollPercent = Math.min(1, (scrollTop - animationStart) / animationRange);
      }

      linesRef.current.forEach((line, i) => {
        if (!line) return;

        // Path boş mu kontrol et
        const pathData = line.getAttribute('d');
        if (!pathData || pathData.trim() === '' || pathData === 'M 0 0') {
          return;
        }

        const length = line.getTotalLength();
        if (length === 0) return;

        const drawLength = Math.max(0, Math.min(length, length * scrollPercent));

        line.style.strokeDashoffset = length - drawLength;

        const dot = dotsRef.current[i];
        if (dot && scrollPercent > 0.01 && drawLength > 10) {
          try {
            const point = line.getPointAtLength(drawLength);
            dot.setAttribute('cx', point.x);
            dot.setAttribute('cy', point.y);
            dot.style.opacity = 1;
          } catch (e) {
            // Path henüz hazır değilse hata verme
            dot.style.opacity = 0;
          }
        } else if (dot) {
          dot.style.opacity = 0;
        }
      });

      // Via noktalarını scroll ile göster - her via kendi çizgisini takip eder
      const viaElements = document.querySelectorAll('.via-point');
      viaElements.forEach((via) => {
        const lineIndex = parseInt(via.getAttribute('data-line-index') || '0');
        const viaCy = parseFloat(via.getAttribute('cy') || 0);
        const viaCx = parseFloat(via.getAttribute('cx') || 0);

        // İlgili çizgiyi bul
        const line = linesRef.current[lineIndex];
        if (!line) {
          via.style.opacity = '0';
          return;
        }

        // Çizginin çizilen uzunluğunu hesapla
        const length = line.getTotalLength();
        const drawLength = length * scrollPercent;

        // Via noktasının path üzerindeki pozisyonunu bul
        let shouldShow = false;
        if (scrollPercent > 0.01 && drawLength > 20) {
          try {
            // Path üzerinde via noktasına en yakın noktayı bul
            let closestDistance = Infinity;
            let closestLength = 0;

            // Path üzerinde her 5px'te bir kontrol et
            for (let testLength = 0; testLength <= Math.min(drawLength + 30, length); testLength += 5) {
              try {
                const point = line.getPointAtLength(testLength);
                const distance = Math.sqrt(
                  Math.pow(point.x - viaCx, 2) + Math.pow(point.y - viaCy, 2)
                );

                if (distance < closestDistance) {
                  closestDistance = distance;
                  closestLength = testLength;
                }
              } catch (e) {
                continue;
              }
            }

            // Via noktası çizilen uzunluğun içindeyse ve yakınsa göster (50px tolerans)
            if (closestDistance < 50 && closestLength <= drawLength + 20) {
              shouldShow = true;
            }
          } catch (e) {
            // Hata durumunda via noktasını gizle
            shouldShow = false;
          }
        }

        via.style.opacity = shouldShow ? '0.7' : '0';
      });

      // Content items görünürlük kontrolü
      contentItemsRef.current.forEach((item, index) => {
        if (!item) return;

        const rect = item.getBoundingClientRect();
        const isVisible = rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2;

        if (isVisible) {
          if (!animatedSections.current.has(index)) {
            animatedSections.current.add(index);
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }
        }
      });

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    updateScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [pathsData]);

  return (
    <section id="about" className="about-page">
      <div className="about-container" ref={containerRef}>
        {/* Dinamik devre akışı çizgileri */}
        <div className="circuit-lines-container" ref={svgContainerRef}>
          <svg className="circuit-lines-svg" width="100%" height="100%" preserveAspectRatio="none">
            <path
              ref={el => linesRef.current[0] = el}
              id="line-1"
              className="circuit-line"
              d={pathsData[0]}
            />
            <path
              ref={el => linesRef.current[1] = el}
              id="line-2"
              className="circuit-line"
              d={pathsData[1]}
            />
            <path
              ref={el => linesRef.current[2] = el}
              id="line-3"
              className="circuit-line"
              d={pathsData[2]}
            />

            {/* Via noktaları (köşe ve terminal daireleri) */}
            {viaPoints.map((via, index) => (
              <circle
                key={`via-${index}`}
                className={`via-point via-${via.type}`}
                cx={via.x}
                cy={via.y}
                r={via.type === 'terminal' ? 5 : 3}
                data-line-index={via.lineIndex}
              />
            ))}

            {/* Takip eden noktalar */}
            <circle
              ref={el => dotsRef.current[0] = el}
              id="dot-1"
              className="follower-dot"
              cx="0"
              cy="0"
            />
            <circle
              ref={el => dotsRef.current[1] = el}
              id="dot-2"
              className="follower-dot"
              cx="0"
              cy="0"
            />
            <circle
              ref={el => dotsRef.current[2] = el}
              id="dot-3"
              className="follower-dot"
              cx="0"
              cy="0"
            />
          </svg>
        </div>

        {/* Çapraz konumlandırılmış içerik */}
        <div className="about-content">
          <div className="content-item content-item-left" ref={el => contentItemsRef.current[0] = el}>
            <div className="content-text-wrapper">
              <h2 className="section-title">{t.vcampNedir}</h2>
              <p className="content-text">
                {t.vcampNedirText}
              </p>
            </div>
          </div>

          <div className="content-item content-item-right" ref={el => contentItemsRef.current[1] = el}>
            <div className="content-text-wrapper">
              <h2 className="section-title">{t.misyonumuz}</h2>
              <p className="content-text">
                {t.misyonumuzText}
              </p>
            </div>
          </div>

          <div className="content-item content-item-left" ref={el => contentItemsRef.current[2] = el}>
            <div className="content-text-wrapper">
              <h2 className="section-title">{t.vizyonumuz}</h2>
              <p className="content-text">
                {t.vizyonumuzText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
