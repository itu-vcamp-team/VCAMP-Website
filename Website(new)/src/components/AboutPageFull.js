import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './AboutPageFull.css';

const AboutPageFull = () => {
  const { language } = useLanguage();
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionsRef = useRef([]);
  
  const translations = {
    tr: {
      hakkimizda: 'HAKKIMIZDA',
      hakkimizdaSubtitle: 'İTÜ VCAMP - Teknoloji ve İnovasyonun Buluşma Noktası',
      vcampNedir: 'VCAMP NEDİR?',
      vcampNedirText: 'VCAMP, İstanbul Teknik Üniversitesi öğrencilerinin teknoloji ve yenilik odaklı projelerde aktif rol almasını sağlayan bir proje takımıdır. Takım, öğrencilerin proje geliştirme sürecinin her aşamasında deneyim kazanmasını hedeflerken, dijital dönüşüm odaklı çalışmalarıyla fark yaratır. Yazılım alanında ürettiği yaratıcı çözümlerle, öğrencilerin gerçek dünya problemlerine çözüm odaklı yaklaşmalarına destek olur. Dijitalleşen dünyaya uyum sağlayan projeleriyle teknoloji alanında sürdürülebilir başarıyı amaçlar.',
      misyonumuz: 'MİSYONUMUZ',
      misyonumuzText: 'ITU VCAMP olarak temel misyonumuz, farklı disiplinlerden gelen üyelerimizin katılımıyla oluşturduğumuz sinerji sayesinde, yürüttüğümüz projeler aracılığıyla inovasyon, mühendislik tasarımı, proje yönetimi ve Ar-Ge alanlarındaki yetkinliklerimizi kolektif olarak geliştirmektir. Takımımız, teorik bilginin pratiğe aktarıldığı, yaratıcılığın teşvik edildiği ve gerçek dünya problemlerine teknoloji odaklı çözümlerin üretildiği bir platform sağlamaktadır. Bu doğrultuda, hem takım üyelerimizin bireysel gelişimlerine katkı sağlamayı hem de üniversitemize ve topluma fayda sunan somut çıktılar üretmeyi amaçlamaktayız.',
      vizyonumuz: 'VİZYONUMUZ',
      vizyonumuzText: 'VCAMP olarak vizyonumuz, dijital dönüşüm süreçlerinde ve yenilikçi teknoloji alanlarında öncü projeler geliştirmektir. Takım olarak yürüttüğümüz çalışmalarla çağın gerektirdiği yetkinlikleri kazanmayı ve elde edeceğimiz başarılarla İstanbul Teknik Üniversitesi\'ni ulusal ve küresel platformlarda en iyi şekilde temsil etmeyi hedeflemekteyiz. Temel amacımız, teknoloji ve inovasyon alanında İTÜ bünyesinde sürdürülebilir ve fark yaratan bir proje geliştirme merkezi olmaktır.',
      bizKimiz: 'BİZ KİMİZ?',
      bizKimizText1: 'VCAMP, İstanbul Teknik Üniversitesi\'nin farklı fakülte ve bölümlerinden bir araya gelen, teknolojiye ve yeniliğe ortak bir tutkuyla bağlı 45 öğrenciden oluşan bir proje toğluluğudur. 2025 yılında kurulan takımımız, mühendislik, tasarım, proje yönetimi gibi çeşitli alanlardaki bilgi ve becerileri tek bir potada eriterek sinerji yaratmayı hedefler. Dinamik ve öğrenmeye açık yapımızla, her bir üyemizin bireysel yeteneklerini sergileyebileceği ve aynı zamanda takım çalışmasıyla kolektif hedeflere ulaşabileceği iş birlikçi bir ortam sunmaktayız.',
      bizKimizText2: 'VCAMP olarak bizler, sadece proje geliştiren değil, aynı zamanda birlikte öğrenen, üreten ve İTÜ\'nün yenilikçi ruhunu temsil eden bir takımız.',
      ekibimiz: 'EKİBİMİZ',
      teknikEkipler: 'Teknik Ekipler',
      yazilimEkipleri: 'Yazılım Ekipleri',
      tasarimEkipleri: 'Tasarım Ekipleri',
      gorselTasarim: 'Görsel ve Endüstriyel Tasarım',
      organizasyonEkipleri: 'Organizasyon Ekipleri',
      projeYonetimEkibi: 'Proje Yönetim Ekibi',
      vizyonRehberlik: 'Vizyon, Rehberlik ve Eğitim Ekibi',
      stratejikYonlendirme: 'Stratejik Yönlendirme',
      dinamikProjeEkipleri: 'Dinamik Proje Ekipleri',
      inovatifProje: 'İnovatif Proje Geliştirme',
      sponsorlukDisIliskiler: 'Sponsorluk ve Dış İlişkiler Ekibi',
      isBirlikleri: 'İş Birlikleri ve İletişim',
      etkinlikEkibi: 'Etkinlik Ekibi',
      organizasyonEtkinlik: 'Organizasyon ve Etkinlik Yönetimi',
      arastirmaDokumantasyon: 'Araştırma ve Dokümantasyon Ekibi',
      bilgiYonetimi: 'Bilgi Yönetimi ve Ar-Ge',
      mesajText: '"VCAMP olarak, İstanbul Teknik Üniversitesi\'nin köklü mühendislik birikimini yenilikçi bir vizyonla geleceğe taşımak amacıyla yola çıkmış bulunmaktayız. 2025 yılında kurulan genç ve dinamik bir takım olarak, üyelerimizin farklı disiplinlerdeki uzmanlıklarını birleştirerek teknoloji alanında iddialı projeler geliştirmeyi hedefliyoruz. Temel önceliğimiz, takım çalışması ve sürekli öğrenme kültürüyle hem üyelerimizin profesyonel gelişimine katkı sağlamak hem de ulusal ve uluslararası alanda ses getirecek başarılı çıktılar üretmektir. VCAMP çatısı altında yürütülen projelerle önemli başarılara imza atacağımıza olan inancımız tamdır."',
      takimKaptani: 'VCAMP Takım Kaptanı',
      bizeKatilin: 'BİZE KATILIN',
      bizeKatilinText: 'Değerli yetkili, VCAMP olarak teknoloji ve inovasyon alanında yürüttüğümüz projelere ve belirlediğimiz hedeflere ulaşma yolculuğumuzda sizlerin değerli desteklerini beklemekteyiz. Takımımıza sağlayacağınız katkılar, projelerimizin ilerlemesi ve genç mühendislerin gelişimine yatırım anlamı taşıyacaktır. Üniversite-İş Dünyası arasındaki bağlantının güçleneceğine inanarak, potansiyel iş birlikleri ve destek olanaklarını görüşmek üzere bizimle iletişime geçmenizi rica ederiz. Birlikte daha büyük başarılara ulaşmayı ümit ediyoruz.',
      vcampAilesineKatilin: 'VCAMP Ailesine Katılın',
      teknolojiYolculugu: 'Teknoloji ve inovasyon yolculuğumuzda bizimle olun',
      iletisimeGec: 'İletişime Geç'
    },
    en: {
      hakkimizda: 'ABOUT US',
      hakkimizdaSubtitle: 'ITU VCAMP - The Meeting Point of Technology and Innovation',
      vcampNedir: 'WHAT IS VCAMP?',
      vcampNedirText: 'VCAMP is a project team that enables Istanbul Technical University students to take an active role in technology and innovation-focused projects. While the team aims for students to gain experience at every stage of the project development process, it makes a difference with its digital transformation-focused work. With the creative solutions it produces in the software field, it supports students to approach real-world problems with a solution-oriented approach. It aims for sustainable success in the technology field with projects that adapt to the digitalizing world.',
      misyonumuz: 'OUR MISSION',
      misyonumuzText: 'As ITU VCAMP, our fundamental mission is to collectively develop our competencies in innovation, engineering design, project management, and R&D through the synergy we create with the participation of our members from different disciplines. Our team provides a platform where theoretical knowledge is transferred to practice, creativity is encouraged, and technology-focused solutions to real-world problems are produced. In this direction, we aim to both contribute to the individual development of our team members and produce concrete outputs that benefit our university and society.',
      vizyonumuz: 'OUR VISION',
      vizyonumuzText: 'As VCAMP, our vision is to develop pioneering projects in digital transformation processes and innovative technology fields. We aim to acquire the competencies required by the age through the work we carry out as a team and to represent Istanbul Technical University in the best way on national and global platforms with the successes we will achieve. Our main goal is to become a sustainable and differentiating project development center within ITU in the field of technology and innovation.',
      bizKimiz: 'WHO ARE WE?',
      bizKimizText1: 'VCAMP is a project community consisting of 45 students from different faculties and departments of Istanbul Technical University, united by a common passion for technology and innovation. Our team, established in 2025, aims to create synergy by combining knowledge and skills from various fields such as engineering, design, and project management in a single pot. With our dynamic and learning-oriented structure, we provide a collaborative environment where each of our members can showcase their individual talents and at the same time achieve collective goals through teamwork.',
      bizKimizText2: 'As VCAMP, we are not just a team that develops projects, but also a team that learns together, produces, and represents ITU\'s innovative spirit.',
      ekibimiz: 'OUR TEAM',
      teknikEkipler: 'Technical Teams',
      yazilimEkipleri: 'Software Teams',
      tasarimEkipleri: 'Design Teams',
      gorselTasarim: 'Visual and Industrial Design',
      organizasyonEkipleri: 'Organization Teams',
      projeYonetimEkibi: 'Project Management Team',
      vizyonRehberlik: 'Vision, Guidance and Education Team',
      stratejikYonlendirme: 'Strategic Direction',
      dinamikProjeEkipleri: 'Dynamic Project Teams',
      inovatifProje: 'Innovative Project Development',
      sponsorlukDisIliskiler: 'Sponsorship and External Relations Team',
      isBirlikleri: 'Partnerships and Communication',
      etkinlikEkibi: 'Events Team',
      organizasyonEtkinlik: 'Organization and Event Management',
      arastirmaDokumantasyon: 'Research and Documentation Team',
      bilgiYonetimi: 'Information Management and R&D',
      mesajText: '"As VCAMP, we have set out to carry Istanbul Technical University\'s deep engineering heritage into the future with an innovative vision. As a young and dynamic team established in 2025, we aim to develop ambitious projects in the technology field by combining the expertise of our members from different disciplines. Our fundamental priority is to both contribute to the professional development of our members through teamwork and continuous learning culture, and to produce successful outputs that will make an impact in national and international fields. We have full confidence that we will achieve significant successes with the projects carried out under the VCAMP umbrella."',
      takimKaptani: 'VCAMP Team Captain',
      bizeKatilin: 'JOIN US',
      bizeKatilinText: 'Dear executive, as VCAMP, we look forward to your valuable support in our journey to reach our projects and goals in the field of technology and innovation. The contributions you will provide to our team will mean investment in the progress of our projects and the development of young engineers. Believing that the connection between University and Business World will strengthen, we request you to contact us to discuss potential partnerships and support opportunities. We hope to achieve greater successes together.',
      vcampAilesineKatilin: 'Join the VCAMP Family',
      teknolojiYolculugu: 'Join us on our technology and innovation journey',
      iletisimeGec: 'Contact Us'
    }
  };
  
  const t = translations[language];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => new Set([...prev, entry.target.id]));
        }
      });
    }, observerOptions);

    const sections = sectionsRef.current;
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="about-page-full">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-hero-title">{t.hakkimizda}</h1>
          <p className="about-hero-subtitle">{t.hakkimizdaSubtitle}</p>
        </div>
      </section>

      {/* VCAMP Nedir Section */}
      <section 
        id="vcamp-nedir"
        ref={(el) => sectionsRef.current[0] = el}
        className={`about-section ${visibleSections.has('vcamp-nedir') ? 'visible' : ''}`}
      >
        <div className="about-section-container">
          <div className="about-section-content">
            <div className="section-number">01</div>
            <h2 className="section-title">{t.vcampNedir}</h2>
            <div className="section-divider"></div>
            <p className="section-text">
              {t.vcampNedirText}
            </p>
          </div>
        </div>
      </section>

      {/* Misyonumuz Section */}
      <section 
        id="misyonumuz"
        ref={(el) => sectionsRef.current[1] = el}
        className={`about-section about-section-alt ${visibleSections.has('misyonumuz') ? 'visible' : ''}`}
      >
        <div className="about-section-container">
          <div className="about-section-content">
            <div className="section-number">02</div>
            <h2 className="section-title">{t.misyonumuz}</h2>
            <div className="section-divider"></div>
            <p className="section-text">
              {t.misyonumuzText}
            </p>
          </div>
        </div>
      </section>

      {/* Vizyonumuz Section */}
      <section 
        id="vizyonumuz"
        ref={(el) => sectionsRef.current[2] = el}
        className={`about-section ${visibleSections.has('vizyonumuz') ? 'visible' : ''}`}
      >
        <div className="about-section-container">
          <div className="about-section-content">
            <div className="section-number">03</div>
            <h2 className="section-title">{t.vizyonumuz}</h2>
            <div className="section-divider"></div>
            <p className="section-text">
              {t.vizyonumuzText}
            </p>
          </div>
        </div>
      </section>

      {/* Biz Kimiz Section */}
      <section 
        id="biz-kimiz"
        ref={(el) => sectionsRef.current[3] = el}
        className={`about-section about-section-alt ${visibleSections.has('biz-kimiz') ? 'visible' : ''}`}
      >
        <div className="about-section-container">
          <div className="about-section-content">
            <div className="section-number">04</div>
            <h2 className="section-title">{t.bizKimiz}</h2>
            <div className="section-divider"></div>
            <p className="section-text">
              {t.bizKimizText1}
            </p>
            <p className="section-text section-text-spacing">
              {t.bizKimizText2}
            </p>
          </div>
        </div>
      </section>

      {/* Ekibimiz Section */}
      <section 
        id="ekibimiz"
        ref={(el) => sectionsRef.current[4] = el}
        className={`about-section about-ekibimiz ${visibleSections.has('ekibimiz') ? 'visible' : ''}`}
      >
        <div className="about-section-container">
          <div className="about-section-content">
            <div className="section-number">05</div>
            <h2 className="section-title">{t.ekibimiz}</h2>
            <div className="section-divider"></div>
            <div className="ekibimiz-grid">
              <div className="ekibimiz-card">
                <h3 className="ekibimiz-card-title">{t.teknikEkipler}</h3>
                <p className="ekibimiz-card-text">{t.yazilimEkipleri}</p>
              </div>
              <div className="ekibimiz-card">
                <h3 className="ekibimiz-card-title">{t.tasarimEkipleri}</h3>
                <p className="ekibimiz-card-text">{t.gorselTasarim}</p>
              </div>
              <div className="ekibimiz-card">
                <h3 className="ekibimiz-card-title">{t.organizasyonEkipleri}</h3>
                <p className="ekibimiz-card-text">{t.projeYonetimEkibi}</p>
              </div>
              <div className="ekibimiz-card">
                <h3 className="ekibimiz-card-title">{t.vizyonRehberlik}</h3>
                <p className="ekibimiz-card-text">{t.stratejikYonlendirme}</p>
              </div>
              <div className="ekibimiz-card">
                <h3 className="ekibimiz-card-title">{t.dinamikProjeEkipleri}</h3>
                <p className="ekibimiz-card-text">{t.inovatifProje}</p>
              </div>
              <div className="ekibimiz-card">
                <h3 className="ekibimiz-card-title">{t.sponsorlukDisIliskiler}</h3>
                <p className="ekibimiz-card-text">{t.isBirlikleri}</p>
              </div>
              <div className="ekibimiz-card">
                <h3 className="ekibimiz-card-title">{t.etkinlikEkibi}</h3>
                <p className="ekibimiz-card-text">{t.organizasyonEtkinlik}</p>
              </div>
              <div className="ekibimiz-card">
                <h3 className="ekibimiz-card-title">{t.arastirmaDokumantasyon}</h3>
                <p className="ekibimiz-card-text">{t.bilgiYonetimi}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mesaj Section */}
      <section 
        id="mesaj"
        ref={(el) => sectionsRef.current[5] = el}
        className={`about-section about-mesaj ${visibleSections.has('mesaj') ? 'visible' : ''}`}
      >
        <div className="about-section-container">
          <div className="about-section-content">
            <div className="mesaj-content">
              <div className="mesaj-quote">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                </svg>
              </div>
              <p className="mesaj-text">
                {t.mesajText}
              </p>
              <div className="mesaj-author">
                <div className="mesaj-author-line"></div>
                <p className="mesaj-author-name">Gaffar Dulkadir</p>
                <p className="mesaj-author-title">{t.takimKaptani}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destek Section */}
      <section 
        id="destek"
        ref={(el) => sectionsRef.current[6] = el}
        className={`about-section about-destek ${visibleSections.has('destek') ? 'visible' : ''}`}
      >
        <div className="about-section-container">
          <div className="about-section-content">
            <h2 className="section-title">{t.bizeKatilin}</h2>
            <div className="section-divider"></div>
            <p className="section-text">
              {t.bizeKatilinText}
            </p>
          </div>
        </div>
      </section>

      {/* Bize Katılın Button Section */}
      <section 
        id="bize-katilin"
        ref={(el) => sectionsRef.current[7] = el}
        className={`about-section about-join-section ${visibleSections.has('bize-katilin') ? 'visible' : ''}`}
      >
        <div className="about-section-container">
          <div className="about-join-wrapper">
            <h2 className="about-join-title">{t.vcampAilesineKatilin}</h2>
            <p className="about-join-subtitle">{t.teknolojiYolculugu}</p>
            <Link to="/contact" className="about-join-button">
              <span className="about-join-button-text">{t.iletisimeGec}</span>
              <svg className="about-join-button-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPageFull;
