import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './SponsorshipPage.css';

const SponsorshipPage = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  
  const translations = {
    tr: {
      sponsorluk: 'SPONSORLUK',
      degerliYetkili: 'Değerli yetkili,',
      introText: 'V-CAMP olarak teknoloji ve inovasyon alanında yürüttüğümüz projelere ve belirlediğimiz hedeflere ulaşma yolculuğumuzda sizlerin değerli desteklerini beklemekteyiz. Takımımıza sağlayacağınız katkılar, projelerimizin ilerlemesi ve genç mühendislerin gelişimine yatırım anlamı taşıyacaktır. Üniversite-sanayi iş birliğinin gücüne inanarak, potansiyel iş birlikleri ve destek olanaklarını görüşmek üzere bizimle iletişime geçmenizi rica ederiz. Birlikte daha büyük başarılara ulaşmayı ümit ediyoruz.',
      introNote: '(Takımımız 2025 yılında kurulmuş olup, vizyonumuza ve projelerimize inanarak bize destek olacak ilk iş ortaklarımızı ve sponsorlarımız bu bölümde yer alacaktır.)',
      sponsorlukPaketleri: 'Sponsorluk Paketleri',
      paketlerAciklama: 'Takımımıza ve projelerimize destek olmak isteyen kurum ve kuruluşlar için hazırlamış olduğumuz farklı sponsorluk paketleri bulunmaktadır. Aşağıda bu paketlerin genel halini inceleyebilirsiniz.',
      digerPaketler: 'Diğer Sponsorluk Paketleri',
      genelFaydalar: 'Genel Faydalar*',
      genelFaydalarNot: '*Bu Sayfadaki Sponsorluk Paketlerini Kapsayan Faydalardır.',
      sponsorlukGenelBakis: 'Sponsorluk Genel Bakış',
      paketler: 'Paketler',
      fiyat: 'Fiyat',
      fiyatNot: '*Bu Sayfadaki Sponsorluk Paketlerinin Fiyatları ortalama olarak belirtilmiştir.',
      iletisimeGecin: 'İletişime Geçin'
    },
    en: {
      sponsorluk: 'SPONSORSHIP',
      degerliYetkili: 'Dear executive,',
      introText: 'As V-CAMP, we look forward to your valuable support in our journey to reach our projects and goals in the field of technology and innovation. The contributions you will provide to our team will mean investment in the progress of our projects and the development of young engineers. Believing in the power of university-industry cooperation, we request you to contact us to discuss potential partnerships and support opportunities. We hope to achieve greater successes together.',
      introNote: '(Our team was established in 2025, and our first business partners and sponsors who will support us by believing in our vision and projects will be featured in this section.)',
      sponsorlukPaketleri: 'Sponsorship Packages',
      paketlerAciklama: 'There are different sponsorship packages we have prepared for institutions and organizations that want to support our team and projects. Below you can review the general state of these packages.',
      digerPaketler: 'Other Sponsorship Packages',
      genelFaydalar: 'General Benefits*',
      genelFaydalarNot: '*These are benefits covering the Sponsorship Packages on this page.',
      sponsorlukGenelBakis: 'Sponsorship Overview',
      paketler: 'Packages',
      fiyat: 'Price',
      fiyatNot: '*The prices of the Sponsorship Packages on this page are indicated as averages.',
      iletisimeGecin: 'Contact Us'
    }
  };
  
  const t = translations[language];

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="sponsorship-page">
      <div className="sponsorship-container">
        <div className="sponsorship-header">
          <h1 className="sponsorship-title">{t.sponsorluk}</h1>
        </div>

        <div className="sponsorship-intro">
          <p className="intro-text">
            {t.degerliYetkili}
          </p>
          <p className="intro-text">
            {t.introText}
          </p>
          <p className="intro-note">
            {t.introNote}
          </p>
        </div>

        <div className="sponsorship-packages-section">
          <h2 className="section-title">{t.sponsorlukPaketleri}</h2>
          <p className="section-description">
            {t.paketlerAciklama}
          </p>

          <div className="packages-grid">
            <div className="package-card">
              <h3 className="package-title">Ana Sponsor</h3>
              <ul className="package-benefits">
                <li>Firmanızın ismi ve logosu takım web sitemizde yer alacaktır.</li>
                <li>Sosyal medya hesaplarımızda firmanıza ithafen teşekkür paylaşımı yapılacaktır.</li>
                <li>Firmanızın ismi ve logosu görsel tanıtım ürünlerimizde yer alacaktır.</li>
                <li>Kurumsal Kimliğin Tanıtımlarda Kullanımı (Demo, Afiş vb.)</li>
                <li>Tanıtım dosyamızda firmanızın ismi ve logosu yer alacaktır.</li>
                <li>Firmanızın düzenleyeceği uygun medya ve halka ilişkiler faaliyetlerine iştirak edilecektir.</li>
                <li>Firmanız tarafından takımımıza tedarik edilecek tanıtım ürünlerinin dağıtımı yapılacaktır.</li>
                <li>Takım Roll Up üzerine logo eklenmesi</li>
                <li>Şirket ile Sosyal Sorumluluk projelerinin organizasyonu</li>
              </ul>
            </div>

            <div className="package-card">
              <h3 className="package-title">Altın Sponsor</h3>
              <ul className="package-benefits">
                <li>Firmanızın ismi ve logosu takım web sitemizde yer alacaktır.</li>
                <li>Sosyal medya hesaplarımızda firmanıza ithafen teşekkür paylaşımı yapılacaktır.</li>
                <li>Firmanızın ismi ve logosu görsel tanıtım ürünlerimizde yer alacaktır.</li>
                <li>Kurumsal Kimliğin Tanıtımlarda Kullanımı (Demo, Afiş vb.)</li>
                <li>Tanıtım dosyamızda firmanızın ismi ve logosu yer alacaktır.</li>
                <li>Firmanızın düzenleyeceği uygun medya ve halka ilişkiler faaliyetlerine iştirak edilecektir.</li>
                <li>Firmanız tarafından takımımıza tedarik edilecek tanıtım ürünlerinin dağıtımı yapılacaktır.</li>
                <li>Takım Roll Up üzerine logo eklenmesi</li>
              </ul>
            </div>

            <div className="package-card">
              <h3 className="package-title">Gümüş Sponsor</h3>
              <ul className="package-benefits">
                <li>Firmanızın ismi ve logosu takım web sitemizde yer alacaktır.</li>
                <li>Sosyal medya hesaplarımızda firmanıza ithafen teşekkür paylaşımı yapılacaktır.</li>
                <li>Firmanızın ismi ve logosu görsel tanıtım ürünlerimizde yer alacaktır.</li>
                <li>Kurumsal Kimliğin Tanıtımlarda Kullanımı (Demo, Afiş vb.)</li>
                <li>Tanıtım dosyamızda firmanızın ismi ve logosu yer alacaktır.</li>
                <li>Firmanızın düzenleyeceği uygun medya ve halka ilişkiler faaliyetlerine iştirak edilecektir.</li>
              </ul>
            </div>

            <div className="package-card">
              <h3 className="package-title">Bronz Sponsor</h3>
              <ul className="package-benefits">
                <li>Firmanızın ismi ve logosu takım web sitemizde yer alacaktır.</li>
                <li>Sosyal medya hesaplarımızda firmanıza ithafen teşekkür paylaşımı yapılacaktır.</li>
                <li>Firmanızın ismi ve logosu görsel tanıtım ürünlerimizde yer alacaktır.</li>
                <li>Kurumsal Kimliğin Tanıtımlarda Kullanımı (Demo, Afiş vb.)</li>
                <li>Tanıtım dosyamızda firmanızın ismi ve logosu yer alacaktır.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="other-packages-section">
          <h2 className="section-title">{t.digerPaketler}</h2>
          
          <div className="other-packages-grid">
            <div className="other-package-card">
              <h3 className="other-package-title">Lojistik Destek Sponsoru</h3>
              <p className="other-package-description">
                Etkinlik katılımı için ulaşım, konaklama, kırtasiye, teknik
                materyal desteği sağlar.
              </p>
            </div>

            <div className="other-package-card">
              <h3 className="other-package-title">Platform Destek Sponsoru</h3>
              <p className="other-package-description">
                API kredileri, yazılım lisansı, bulut servisleri sağlar.
                VCAMP ekibinden kullanım raporu alır.
                Geliştirilen çözümün yayımlandığı platformlarda katkı ibaresi
                yer alır.
              </p>
            </div>

            <div className="other-package-card">
              <h3 className="other-package-title">Donanım Destek Sponsoru</h3>
              <p className="other-package-description">
                Donanım, cihaz ya da test altyapısı temin eder.
                Donanımın kullanıldığı projede özel teknik rapor sağlanır.
                İsteğe bağlı olarak teknik toplantılara katılım sağlanabilir.
              </p>
            </div>

            <div className="other-package-card">
              <h3 className="other-package-title">Ar-Ge Sponsoru</h3>
              <p className="other-package-description">
                Belirli bir projeye altyapı, yazılım, bulut hizmeti veya maddi
                destek sağlar.
                Seçilen projenin içeriğinde yer alma. (sunum, çıktı, makale,
                poster vs.)
                Özel sonuç raporuna erişim.
                Dilerse teknik mentor olarak sürece katılım.
              </p>
            </div>

            <div className="other-package-card">
              <h3 className="other-package-title">Vizyon, Rehberlik ve Eğitim Sponsoru</h3>
              <p className="other-package-description">
                Eğitim oturumları, atölyeler veya seminerlerin
                gerçekleştirilmesine katkı sunar.
                Uzman konuşmacılarla teknik gelişim seanslarına destek olur
                Teknik Mentor Olarak Katılım.
                Proje ekiplerine kariyer planlama ve rehberlik desteği sağlar.
              </p>
            </div>
          </div>

          <div className="general-benefits">
            <h3 className="general-benefits-title">{t.genelFaydalar}</h3>
            <ul className="general-benefits-list">
              <li>Web sitesinde ve sosyal medya içeriklerinde sponsorun ismi ve logosuyla tanıtım.</li>
              <li>Tanıtım dökümanlarında "destekçi" veya "sponsor" olarak yer alma.</li>
              <li>Sosyal medya içeriklerinde destekçi olarak paylaşım yapılması.</li>
              <li>Demo günü veya ürün sunumlarında kurumsal kimliğe yer verilmesi.</li>
              <li>Teşekkür belgesi ve/veya dijital e-sertifika.</li>
              <li>Dilerse sürece teknik mentor olarak katılım fırsatı.</li>
              <li>Katkı sağladığı proje ya da eğitim içeriğinin çıktılarına erişim. (sunum, makale, poster vb.)</li>
            </ul>
            <p className="general-benefits-note">
              {t.genelFaydalarNot}
            </p>
          </div>
        </div>

        <div className="pricing-section">
          <h2 className="section-title">{t.sponsorlukGenelBakis}</h2>
          <div className="pricing-table">
            <div className="pricing-row">
              <div className="pricing-package">{t.paketler}</div>
              <div className="pricing-price">{t.fiyat}</div>
            </div>
            <div className="pricing-row">
              <div className="pricing-package">Ana Sponsor</div>
              <div className="pricing-price">200.000 TL*</div>
            </div>
            <div className="pricing-row">
              <div className="pricing-package">Altın Sponsor</div>
              <div className="pricing-price">150.000 TL*</div>
            </div>
            <div className="pricing-row">
              <div className="pricing-package">Gümüş Sponsor</div>
              <div className="pricing-price">100.000 TL*</div>
            </div>
            <div className="pricing-row">
              <div className="pricing-package">Bronz Sponsor</div>
              <div className="pricing-price">50.000 TL*</div>
            </div>
            <div className="pricing-row">
              <div className="pricing-package">Lojistik Destek Sponsoru</div>
              <div className="pricing-price">50.000 TL*</div>
            </div>
            <div className="pricing-row">
              <div className="pricing-package">Platform Destek Sponsoru</div>
              <div className="pricing-price">100.000 TL*</div>
            </div>
            <div className="pricing-row">
              <div className="pricing-package">Donanım Destek Sponsoru</div>
              <div className="pricing-price">100.000 TL*</div>
            </div>
            <div className="pricing-row">
              <div className="pricing-package">Ar-Ge Sponsoru</div>
              <div className="pricing-price">200.000 TL*</div>
            </div>
            <div className="pricing-row">
              <div className="pricing-package">Vizyon, Rehberlik ve Eğitim Sponsoru</div>
              <div className="pricing-price">30.000 TL*</div>
            </div>
          </div>
          <p className="pricing-note">
            {t.fiyatNot}
          </p>
        </div>

        <div className="contact-cta-section">
          <button className="contact-cta-button" onClick={handleContactClick}>
            {t.iletisimeGecin}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SponsorshipPage;
