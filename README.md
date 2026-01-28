# İTÜ VCAMP Website - Developer Dokümantasyonu

<div align="center">

![VCAMP Logo](Website(new)/src/assets/Logo%20svg.svg)

**React tabanlı çok dilli website projesi**

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)](https://reactjs.org/)
[![React Router](https://img.shields.io/badge/React%20Router-7.13.0-CA4245?logo=react-router)](https://reactrouter.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.14.2-88CE02?logo=greensock)](https://greensock.com/gsap/)
[![Node](https://img.shields.io/badge/Node.js-14+-339933?logo=node.js)](https://nodejs.org/)

</div>

---

## 📋 İçindekiler

- [Hızlı Başlangıç](#hızlı-başlangıç)
- [Proje Yapısı](#proje-yapısı)
- [Teknoloji Stack](#teknoloji-stack)
- [Klasör Yapısı ve Açıklamaları](#klasör-yapısı-ve-açıklamaları)
- [Geliştirme Rehberi](#geliştirme-rehberi)
- [Routing Yapısı](#routing-yapısı)
- [Çok Dilli Sistem](#çok-dilli-sistem)
- [Veri Yönetimi](#veri-yönetimi)
- [Animasyonlar (GSAP)](#animasyonlar-gsap)
- [Stil Yönetimi](#stil-yönetimi)
- [Build ve Deployment](#build-ve-deployment)
- [Yaygın Görevler](#yaygın-görevler)
- [Sorun Giderme](#sorun-giderme)

---

## 🚀 Hızlı Başlangıç

### Gereksinimler

- **Node.js**: v14.0.0 veya üzeri
- **npm**: v6.0.0 veya üzeri (veya yarn)
- **Git**: Versiyon kontrolü için

### Kurulum

```bash
# Repository'yi klonlayın
git clone https://github.com/[KULLANICI_ADI]/vcamp0.4.git
cd vcamp0.4

# Website klasörüne gidin
cd "Website(new)"

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm start
```

Tarayıcıda `http://localhost:3000` adresinde proje açılacaktır.

### İlk Çalıştırma Sonrası

- Hot reload aktif olacak (kod değişiklikleri otomatik yenilenir)
- ESLint hataları konsolda görünecektir
- Tarayıcı otomatik açılacaktır

---

## 📁 Proje Yapısı

```
vcamp0.4/
├── Website(new)/                    # Ana React uygulaması
│   ├── public/                      # Statik dosyalar (build'e kopyalanır)
│   │   ├── index.html               # HTML şablonu
│   │   ├── profile-photos/          # Takım üyesi profil fotoğrafları
│   │   └── sponsors/                # Sponsor logoları
│   ├── src/                         # Kaynak kodlar
│   │   ├── components/              # React bileşenleri
│   │   ├── contexts/                # React Context API
│   │   ├── data/                    # Veri dosyaları (projeler, bloglar)
│   │   ├── assets/                  # Görseller, SVG'ler
│   │   ├── App.js                   # Ana uygulama ve routing
│   │   ├── App.css                  # Global stiller
│   │   ├── index.js                 # Giriş noktası
│   │   └── index.css                # Global CSS reset ve temel stiller
│   ├── build/                       # Production build (gitignore'da)
│   ├── node_modules/                # Bağımlılıklar (gitignore'da)
│   ├── package.json                 # Proje konfigürasyonu
│   └── package-lock.json            # Bağımlılık versiyonları
├── VCAMP-website(single page)/      # Eski single-page versiyon (referans)
├── Takım Bilgileri Klasörü/         # Takım materyalleri (logo, dokümanlar)
├── .gitignore                       # Git ignore kuralları
├── LICENSE                          # MIT Lisansı
└── README.md                        # Bu dosya
```

---

## 🛠️ Teknoloji Stack

### Core Dependencies

| Paket | Versiyon | Amaç |
|-------|----------|------|
| **react** | ^18.2.0 | UI kütüphanesi |
| **react-dom** | ^18.2.0 | React DOM renderer |
| **react-router-dom** | ^7.13.0 | Client-side routing (HashRouter) |
| **gsap** | ^3.14.2 | Animasyon kütüphanesi |
| **react-scripts** | 5.0.1 | Create React App build tools |

### Development Dependencies

| Paket | Versiyon | Amaç |
|-------|----------|------|
| **gh-pages** | ^6.3.0 | GitHub Pages deployment |

### Neden Bu Teknolojiler?

- **React 18**: Modern hooks API, performans iyileştirmeleri
- **HashRouter**: GitHub Pages ile uyumlu (SPA routing)
- **GSAP**: Profesyonel animasyonlar, performanslı
- **Create React App**: Hızlı setup, zero-config

---

## 📂 Klasör Yapısı ve Açıklamaları

### `/Website(new)/public/`

**Amaç**: Build sırasında `build/` klasörüne olduğu gibi kopyalanan statik dosyalar.

```
public/
├── index.html              # Ana HTML şablonu (React root div'i içerir)
├── profile-photos/         # Takım üyesi profil fotoğrafları (.jpg, .png, .jpeg)
└── sponsors/              # Sponsor logoları (.svg, .png)
```

**Önemli Notlar**:
- `index.html` içinde Particles.js ve Stats.js CDN'den yüklenir
- Profil fotoğrafları `public/profile-photos/` içinde saklanır
- Build sonrası bu dosyalar `build/` içine kopyalanır

### `/Website(new)/src/`

**Amaç**: Tüm kaynak kodların bulunduğu ana klasör.

#### `/src/components/`

**Amaç**: Tüm React bileşenleri (sayfalar ve reusable component'ler).

**Bileşen Kategorileri**:

1. **Sayfa Bileşenleri** (Full Pages):
   - `HomePage.js` - Ana sayfa (logo ve tagline)
   - `AboutPage.js` - Ana sayfadaki hakkımızda bölümü
   - `AboutPageFull.js` - Tam hakkımızda sayfası (`/about` route'u)
   - `ProjectsPage.js` - Tüm projeler listesi (`/projects`)
   - `ProjectDetail.js` - Proje detay sayfası (`/projects/:projectId`)
   - `TeamPage.js` - Takım sayfası (`/team`)
   - `BlogPage.js` - Blog listesi (`/blog`)
   - `BlogDetail.js` - Blog detay sayfası (`/blog/:blogId`)
   - `ContactPage.js` - İletişim sayfası (`/contact`)
   - `SponsorshipPage.js` - Sponsorluk sayfası (`/sponsorship`)
   - `SearchResultsPage.js` - Arama sonuçları (`/search`)

2. **Section Bileşenleri** (Ana Sayfa Bölümleri):
   - `AboutPage.js` - Hakkımızda özeti
   - `ProjectsSection.js` - Projeler önizlemesi
   - `TeamSection.js` - Takım önizlemesi
   - `SponsorsSection.js` - Sponsorlar
   - `BlogSection.js` - Son blog yazıları

3. **Layout Bileşenleri**:
   - `Navbar.js` - Navigasyon menüsü (dil değiştirme, arama)
   - `Footer.js` - Footer bileşeni

4. **Özel Bileşenler**:
   - `ParticlesBackground.js` - Arka plan partikül animasyonu
   - `CardSwap.js` - Kart değiştirme animasyonu (GSAP)
   - `ChromaGrid.js` - Grid animasyonlu kart görünümü (GSAP)

**Dosya İsimlendirme**:
- Her bileşen kendi CSS dosyasına sahiptir: `ComponentName.js` + `ComponentName.css`
- Bileşenler functional component olarak yazılmıştır
- Hooks (useState, useEffect, useRef) kullanılır

#### `/src/contexts/`

**Amaç**: React Context API ile global state yönetimi.

```
contexts/
└── LanguageContext.js    # Dil yönetimi (TR/EN)
```

**LanguageContext.js**:
- `LanguageProvider`: Dil state'ini sağlar
- `useLanguage()`: Hook ile dil erişimi
- LocalStorage'da dil tercihi saklanır
- `language`: 'tr' veya 'en'
- `toggleLanguage()`: Dil değiştirme fonksiyonu

**Kullanım Örneği**:
```javascript
import { useLanguage } from '../contexts/LanguageContext';

const MyComponent = () => {
  const { language, toggleLanguage } = useLanguage();
  // language === 'tr' veya 'en'
};
```

#### `/src/data/`

**Amaç**: Statik veri dosyaları (projeler, blog yazıları, çeviriler).

```
data/
├── projectData.js    # Proje verileri ve çevirileri
└── blogData.js       # Blog yazıları ve çevirileri
```

**projectData.js Yapısı**:
```javascript
export const projectTranslations = {
  tr: {
    projects: {
      aios: { title, description, details, features, image, ... },
      teknofestHavacilik: { ... },
      // ... diğer projeler
    }
  },
  en: {
    // İngilizce çeviriler
  }
};
```

**blogData.js Yapısı**:
```javascript
export const blogPosts = [
  {
    id: 1,
    title: '...',
    excerpt: '...',
    date: '...',
    category: '...',
    image: '...',
    content: '...'
  },
  // ... diğer blog yazıları
];
```

**Önemli**: Veriler hem TR hem EN için ayrı ayrı tutulur. Component'ler `useLanguage()` ile doğru dili seçer.

#### `/src/assets/`

**Amaç**: Kaynak kodda import edilen görseller ve medya dosyaları.

```
assets/
└── Logo svg.svg    # VCAMP logosu
```

**Kullanım**:
```javascript
import logo from '../assets/Logo svg.svg';
<img src={logo} alt="VCAMP Logo" />
```

**Not**: `public/` içindeki dosyalar direkt URL ile erişilir, `assets/` içindekiler import edilir.

#### `/src/App.js`

**Amaç**: Ana uygulama bileşeni, routing yapılandırması.

**Yapı**:
- `LanguageProvider` ile sarılmış (dil context'i)
- `HashRouter` kullanılır (GitHub Pages uyumlu)
- `Routes` ve `Route` ile sayfa yönlendirmeleri
- Her route'da gerekli component'ler render edilir

**Route Yapısı**:
- `/` - Ana sayfa (HomePage + Sections + Footer)
- `/about` - Hakkımızda tam sayfa
- `/projects` - Projeler listesi
- `/projects/:projectId` - Proje detayı
- `/team` - Takım sayfası
- `/blog` - Blog listesi
- `/blog/:blogId` - Blog detayı
- `/contact` - İletişim
- `/sponsorship` - Sponsorluk
- `/search` - Arama sonuçları

#### `/src/index.js`

**Amaç**: Uygulamanın giriş noktası.

**Yapı**:
- React 18 `createRoot` API kullanılır
- `React.StrictMode` aktif (development'ta uyarılar)
- `App` component'i render edilir

#### `/src/App.css` ve `/src/index.css`

**Amaç**: Global stiller.

- `index.css`: CSS reset, temel stiller, global değişkenler
- `App.css`: App component'e özel stiller

---

## 🔧 Geliştirme Rehberi

### Yeni Sayfa Ekleme

1. **Component Oluştur**:
```bash
# src/components/ klasöründe
touch NewPage.js NewPage.css
```

2. **Component'i Yaz**:
```javascript
// NewPage.js
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './NewPage.css';

const NewPage = () => {
  const { language } = useLanguage();
  
  return (
    <div className="new-page">
      <h1>Yeni Sayfa</h1>
    </div>
  );
};

export default NewPage;
```

3. **Route Ekle** (`src/App.js`):
```javascript
import NewPage from './components/NewPage';

// Routes içine ekle
<Route path="/new-page" element={<><NewPage /><Footer /></>} />
```

4. **Navbar'a Menü Öğesi Ekle** (`src/components/Navbar.js`):
```javascript
const sections = [
  // ... mevcut sections
  { id: 'new-page', label: 'Yeni Sayfa', enLabel: 'New Page', path: '/new-page' }
];
```

### Yeni Proje Ekleme

1. **projectData.js'i Düzenle**:
```javascript
// src/data/projectData.js
export const projectTranslations = {
  tr: {
    projects: {
      // ... mevcut projeler
      yeniProje: {
        title: 'Yeni Proje Başlığı',
        description: 'Proje açıklaması...',
        details: ['Detay 1', 'Detay 2'],
        features: ['Özellik 1', 'Özellik 2'],
        image: 'https://...',
        // ... diğer alanlar
      }
    }
  },
  en: {
    projects: {
      yeniProje: {
        // İngilizce çeviriler
      }
    }
  }
};
```

2. **Proje ID'si**: `yeniProje` ID'si ile `/projects/yeniProje` route'unda görüntülenir.

### Yeni Blog Yazısı Ekleme

1. **blogData.js'e Ekle**:
```javascript
// src/data/blogData.js
export const blogPosts = [
  // ... mevcut yazılar
  {
    id: 3, // Benzersiz ID
    title: 'Yeni Blog Yazısı',
    excerpt: 'Kısa özet...',
    date: '28 Ocak 2026',
    category: 'Kategori',
    image: 'https://...',
    content: 'Blog içeriği...'
  }
];
```

### Çok Dilli İçerik Ekleme

Tüm kullanıcıya dönük metinler için çeviri sistemi kullanılmalı:

```javascript
const translations = {
  tr: {
    baslik: 'Başlık',
    aciklama: 'Açıklama'
  },
  en: {
    baslik: 'Title',
    aciklama: 'Description'
  }
};

const MyComponent = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  return <h1>{t.baslik}</h1>;
};
```

---

## 🗺️ Routing Yapısı

### HashRouter Kullanımı

**Neden HashRouter?**
- GitHub Pages static hosting kullanır
- Server-side routing yok
- HashRouter (`#`) ile client-side routing çalışır
- URL: `https://site.com/#/about`

### Route Tanımlamaları

```javascript
// src/App.js
<Routes>
  {/* Ana Sayfa - Birden fazla section */}
  <Route path="/" element={
    <>
      <HomePage />
      <AboutPage />
      <ProjectsSection />
      <TeamSection />
      <SponsorsSection />
      <BlogSection />
      <Footer />
    </>
  } />
  
  {/* Tekil Sayfalar */}
  <Route path="/about" element={<><AboutPageFull /><Footer /></>} />
  <Route path="/projects" element={<><ProjectsPage /><Footer /></>} />
  
  {/* Dinamik Route'lar */}
  <Route path="/projects/:projectId" element={<><ProjectDetail /><Footer /></>} />
  <Route path="/blog/:blogId" element={<><BlogDetail /><Footer /></>} />
</Routes>
```

### Route Parametrelerini Kullanma

```javascript
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
  const { projectId } = useParams(); // URL'den projectId'yi al
  // projectId === 'aios', 'teknofestHavacilik', vb.
};
```

### Programatik Navigasyon

```javascript
import { useNavigate } from 'react-router-dom';

const MyComponent = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/projects/aios');
  };
};
```

---

## 🌍 Çok Dilli Sistem

### LanguageContext Yapısı

```javascript
// src/contexts/LanguageContext.js
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('vcamp-language');
    return saved || 'tr'; // Varsayılan: Türkçe
  });
  
  // LocalStorage'a kaydet
  useEffect(() => {
    localStorage.setItem('vcamp-language', language);
  }, [language]);
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'tr' ? 'en' : 'tr');
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
```

### Kullanım

```javascript
import { useLanguage } from '../contexts/LanguageContext';

const MyComponent = () => {
  const { language, toggleLanguage } = useLanguage();
  
  // Dil kontrolü
  if (language === 'tr') {
    // Türkçe içerik
  } else {
    // İngilizce içerik
  }
  
  // Dil değiştirme butonu
  <button onClick={toggleLanguage}>
    {language === 'tr' ? 'EN' : 'TR'}
  </button>
};
```

### Veri Dosyalarında Çeviri

```javascript
// src/data/projectData.js
export const projectTranslations = {
  tr: {
    projects: {
      aios: {
        title: 'AIOS Projesi', // Türkçe
        // ...
      }
    }
  },
  en: {
    projects: {
      aios: {
        title: 'AIOS Project', // İngilizce
        // ...
      }
    }
  }
};

// Component'te kullanım
const { language } = useLanguage();
const project = projectTranslations[language].projects.aios;
```

---

## 📊 Veri Yönetimi

### Proje Verileri (projectData.js)

**Yapı**:
```javascript
{
  tr: {
    projects: {
      [projectId]: {
        title: string,
        description: string,
        details: string[],
        features: string[],
        image: string (URL),
        gallery?: array,
        documents?: array,
        timeline?: array,
        team?: array,
        sponsors?: array
      }
    }
  },
  en: { /* İngilizce çeviriler */ }
}
```

**Proje ID'leri** (mevcut):
- `aios` - AI Operation System
- `teknofestHavacilik` - TEKNOFEST Havacılık
- `mesaneKanseri` - Mesane Kanseri AI
- `teknofestSaglik` - TEKNOFEST Sağlık
- `suas26` - SUAS 26 İHA Projesi

### Blog Verileri (blogData.js)

**Yapı**:
```javascript
[
  {
    id: number (benzersiz),
    title: string,
    excerpt: string,
    date: string,
    category: string,
    image: string (URL),
    content: string (uzun metin)
  }
]
```

**Not**: Blog verileri çeviri içermez, sadece içerik diline göre ayrı blog yazıları eklenebilir.

---

## 🎨 Animasyonlar (GSAP)

### GSAP Kullanımı

**Import**:
```javascript
import { gsap } from 'gsap';
```

### Örnek Animasyonlar

#### 1. Fade In Animasyonu
```javascript
useEffect(() => {
  gsap.from('.element', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out'
  });
}, []);
```

#### 2. Scroll Animasyonu
```javascript
useEffect(() => {
  const handleScroll = () => {
    const scrollPercent = window.scrollY / window.innerHeight;
    gsap.to('.element', {
      rotation: scrollPercent * 360,
      duration: 0.3
    });
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

#### 3. Timeline Kullanımı
```javascript
const tl = gsap.timeline();
tl.to('.element1', { x: 100, duration: 1 })
  .to('.element2', { y: 50, duration: 1 }, '-=0.5'); // 0.5s önce başla
```

### Mevcut GSAP Component'leri

- **CardSwap.js**: Kart değiştirme animasyonu (3D transform)
- **ChromaGrid.js**: Grid hover animasyonu (mouse tracking)
- **AboutPage.js**: Scroll-based SVG path animasyonu

---

## 💅 Stil Yönetimi

### CSS Dosya Yapısı

Her component kendi CSS dosyasına sahiptir:
- `ComponentName.js` → `ComponentName.css`
- CSS Modules kullanılmaz, global class isimleri kullanılır
- BEM metodolojisi önerilir (opsiyonel)

### Global Stiller

**index.css**:
- CSS reset
- Global değişkenler (renkler, fontlar)
- Utility class'lar

**App.css**:
- App component'e özel stiller
- Global layout stilleri

### Responsive Tasarım

Media query'ler component CSS dosyalarında:
```css
@media (max-width: 968px) {
  .navbar {
    /* Mobil stiller */
  }
}
```

### CSS Best Practices

1. **Class İsimlendirme**: BEM metodolojisi kullanılabilir
2. **Specificity**: Mümkün olduğunca düşük tutulmalı
3. **Mobile First**: Küçük ekranlardan başla
4. **Variables**: Tekrar eden değerler için CSS variables

---

## 🚀 Build ve Deployment

### Development Build

```bash
npm start
```

- Port: 3000
- Hot reload: Aktif
- Source maps: Aktif
- Optimizasyon: Yok

### Production Build

```bash
npm run build
```

**Çıktı**: `build/` klasörü
- Minified JavaScript
- Optimized CSS
- Asset optimization
- Source maps: Yok (production)

---

## 📦 GitHub Pages Deployment - Detaylı Açıklama

### Deployment Mantığı

Proje **GitHub Pages** üzerinde host ediliyor. GitHub Pages, statik dosya hosting servisidir ve server-side routing desteklemez. Bu yüzden özel bir yapılandırma gerekiyor.

### 1. Neden HashRouter Kullanılıyor?

**Problem**: 
- GitHub Pages sadece statik dosyalar sunar
- Server-side routing yok (`.htaccess`, `nginx.conf` gibi)
- Normal React Router (`BrowserRouter`) çalışmaz

**Çözüm**: `HashRouter` kullanımı

```javascript
// src/App.js
import { HashRouter as Router } from 'react-router-dom';

// HashRouter URL'leri şöyle oluşturur:
// https://site.com/#/about
// https://site.com/#/projects/aios
```

**HashRouter Nasıl Çalışır?**
- URL'deki `#` işaretinden sonraki kısım **client-side** işlenir
- Tarayıcı `#` sonrasını sunucuya göndermez
- React Router bu kısmı JavaScript ile yönetir
- Sayfa yenilendiğinde GitHub Pages her zaman `index.html` döner
- React Router `#` sonrasını okuyup doğru component'i render eder

**Örnek URL Yapısı**:
```
✅ ÇALIŞIR (HashRouter):
https://[KULLANICI_ADI].github.io/[REPO_ADI]/#/about
https://[KULLANICI_ADI].github.io/[REPO_ADI]/#/projects/aios

❌ ÇALIŞMAZ (BrowserRouter):
https://[KULLANICI_ADI].github.io/[REPO_ADI]/about
→ GitHub Pages /about klasörü arar, bulamaz, 404 döner
```

### 2. package.json Yapılandırması

```json
{
  "name": "vcamp",
  "version": "0.4.0",
  "homepage": "https://[KULLANICI_ADI].github.io/[REPO_ADI]",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
  "devDependencies": {
    "gh-pages": "^6.3.0"
  }
}
```

**Önemli Ayarlar**:

1. **`homepage`**: 
   - Build sırasında asset path'lerini ayarlar
   - CSS/JS dosyaları bu base URL'den yüklenir
   - Örnek: `/static/js/main.js` → `https://[KULLANICI_ADI].github.io/[REPO_ADI]/static/js/main.js`

2. **`predeploy`**: 
   - `deploy` komutundan ÖNCE otomatik çalışır
   - Production build oluşturur

3. **`deploy`**: 
   - `gh-pages` paketini kullanır
   - `build/` klasörünü `gh-pages` branch'ine push eder

### 3. Deployment Süreci (Adım Adım)

#### Adım 1: Build Oluşturma

```bash
npm run build
```

**Ne Olur?**
- `src/` klasöründeki kodlar derlenir
- React component'leri JavaScript'e çevrilir
- CSS dosyaları optimize edilir
- Görseller optimize edilir
- `build/` klasörü oluşturulur

**Build Klasörü İçeriği**:
```
build/
├── index.html          # Ana HTML dosyası
├── static/
│   ├── css/
│   │   └── main.[hash].css    # Minified CSS
│   └── js/
│       └── main.[hash].js     # Minified JavaScript
├── profile-photos/     # public/ içindeki dosyalar kopyalandı
└── sponsors/          # public/ içindeki dosyalar kopyalandı
```

#### Adım 2: GitHub Pages Branch'ine Push

```bash
npm run deploy
```

**Ne Olur?**

1. **predeploy çalışır**:
   ```bash
   npm run build  # Build oluşturulur
   ```

2. **gh-pages çalışır**:
   ```bash
   gh-pages -d build
   ```
   
   Bu komut şunları yapar:
   - `build/` klasörünün içeriğini alır
   - Yeni bir `gh-pages` branch'i oluşturur (yoksa)
   - Bu branch'e tüm dosyaları commit eder
   - GitHub'a push eder

3. **GitHub Pages Aktif Olur**:
   - GitHub repository'nin Settings > Pages bölümünde
   - `gh-pages` branch'i otomatik algılanır
   - Site birkaç dakika içinde yayınlanır

### 4. GitHub Repository Ayarları

**Repository Settings > Pages**:
- Source: `gh-pages` branch
- Folder: `/ (root)`
- Custom domain: (opsiyonel)

**URL Formatı**:
```
https://[username].github.io/[repository-name]
```

Bizim durumumuzda:
```
https://[KULLANICI_ADI].github.io/[REPO_ADI]
```

### 5. Deployment Sonrası Kontrol

**Başarılı Deployment İçin Kontrol Listesi**:

1. ✅ `gh-pages` branch'i oluşturuldu mu?
   ```bash
   git branch -a  # Tüm branch'leri listele
   ```

2. ✅ Build dosyaları branch'te var mı?
   - GitHub'da `gh-pages` branch'ini kontrol et
   - `index.html` ve `static/` klasörü olmalı

3. ✅ Site erişilebilir mi?
   - `https://[KULLANICI_ADI].github.io/[REPO_ADI]` açılmalı
   - Ana sayfa görünmeli

4. ✅ Routing çalışıyor mu?
   - `/#/about` sayfası açılmalı
   - `/#/projects` sayfası açılmalı
   - Sayfa yenilendiğinde 404 hatası OLMAMALI

### 6. Otomatik Deployment (GitHub Actions) - ÖNERİLEN

**Sadece main branch'e push/merge olduğunda otomatik deploy yapılır.**

#### Nasıl Çalışır?

1. **Development branch'inde çalışma**:
   ```bash
   git checkout -b development
   # Değişiklikler yap
   git add .
   git commit -m "Yeni özellik"
   git push origin development
   # ❌ Deploy OLMAZ - sadece development branch'inde
   ```

2. **Main branch'e merge**:
   ```bash
   git checkout main
   git merge development
   git push origin main
   # ✅ Otomatik deploy BAŞLAR
   ```

3. **GitHub Actions çalışır**:
   - `.github/workflows/deploy.yml` dosyası tetiklenir
   - Build oluşturulur
   - `gh-pages` branch'ine push edilir
   - Site otomatik güncellenir

#### GitHub Actions Workflow

Workflow dosyası: `.github/workflows/deploy.yml`

**Özellikler**:
- ✅ Sadece `main` branch'te çalışır
- ✅ `development` branch'inde çalışmaz
- ✅ Pull request'lerde çalışmaz
- ✅ Manuel tetikleme desteği var

**Workflow Adımları**:
1. Repository'yi checkout et
2. Node.js kurulumu (v18)
3. Bağımlılıkları yükle (`npm ci`)
4. Build oluştur (`npm run build`)
5. GitHub Pages'e deploy et

#### GitHub Actions Kurulumu (İlk Kez)

**Adım 1: GitHub Repository Ayarları**

1. **Actions'ı Aktifleştir**:
   - GitHub repository'nize gidin
   - **Settings** > **Actions** > **General**
   - "Allow all actions and reusable workflows" seçeneğini işaretleyin
   - **Save** butonuna tıklayın

2. **GitHub Pages Ayarları**:
   - **Settings** > **Pages**
   - **Source**: `Deploy from a branch` seçin
   - **Branch**: `gh-pages` seçin
   - **Folder**: `/ (root)` seçin
   - **Save** butonuna tıklayın

**Adım 2: Workflow Dosyasını Commit ve Push Et**

```bash
# Workflow dosyası zaten oluşturuldu: .github/workflows/deploy.yml
# Şimdi bunu main branch'e push edin

git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions workflow for automatic deployment"
git push origin main
```

**Adım 3: İlk Otomatik Deploy**

Main branch'e push yaptığınızda:
- GitHub Actions otomatik olarak tetiklenir
- **Actions** sekmesinde workflow'u görebilirsiniz
- Yaklaşık 2-5 dakika içinde deploy tamamlanır
- Site otomatik olarak güncellenir

**GITHUB_TOKEN Hakkında**:
- GitHub Actions otomatik olarak `GITHUB_TOKEN` oluşturur
- Ekstra secret ayarı gerekmez
- Workflow dosyasında zaten tanımlı: `${{ secrets.GITHUB_TOKEN }}`

#### Workflow Durumunu Kontrol Etme

1. GitHub repository'de **Actions** sekmesine gidin
2. "Deploy to GitHub Pages" workflow'unu göreceksiniz
3. **Yeşil tik** ✅ = Başarılı deploy
4. **Kırmızı X** ❌ = Hata var (loglara bakın)
5. **Sarı nokta** 🟡 = Deploy devam ediyor

**Workflow Loglarını İnceleme**:
- Actions sekmesinde workflow'a tıklayın
- Her adımın detaylarını görebilirsiniz
- Hata varsa hangi adımda olduğunu görebilirsiniz

#### Otomatik Deploy Nasıl Çalışır? (Detaylı)

**Senaryo 1: Direkt Main Branch'e Push**
```bash
git checkout main
# Kod değişiklikleri yap
git add .
git commit -m "Yeni özellik"
git push origin main
# ✅ Otomatik deploy başlar (2-5 dakika)
```

**Senaryo 2: Development'tan Main'e Merge**
```bash
# Development branch'inde çalış
git checkout development
git add .
git commit -m "Yeni özellik"
git push origin development
# ❌ Deploy olmaz

# Main'e merge et
git checkout main
git merge development
git push origin main
# ✅ Otomatik deploy başlar
```

**Senaryo 3: Pull Request ile Merge**
```bash
# Feature branch oluştur
git checkout -b feature/yeni-ozellik
# Kod yaz
git push origin feature/yeni-ozellik
# GitHub'da Pull Request oluştur
# PR merge edildiğinde main'e merge olur
# ✅ Otomatik deploy başlar
```

**Önemli Notlar**:
- ⚠️ Sadece `main` branch'e push edildiğinde deploy olur
- ⚠️ Development, feature, hotfix branch'lerinde deploy OLMAZ
- ⚠️ Pull request açıldığında deploy OLMAZ (sadece merge edildiğinde)
- ✅ Her main push'unda otomatik deploy başlar

### 7. Manuel Deployment (Alternatif)

Eğer GitHub Actions kullanmak istemiyorsanız, manuel deploy yapabilirsiniz:

```bash
# 1. Değişiklikleri commit et
git add .
git commit -m "Yeni özellik eklendi"

# 2. Main branch'e push et
git push origin main

# 3. Manuel deploy et
cd "Website(new)"
npm run deploy
```

**Not**: 
- `npm run deploy` sadece `build/` klasörünü push eder
- Kaynak kodlar `main` branch'inde kalır
- Manuel deploy, GitHub Actions'ı bypass eder

### 8. Branch Stratejisi

**Önerilen Workflow**:

```
development branch
    ↓ (geliştirme yapılır)
    ↓ (test edilir)
    ↓ (pull request oluşturulur)
main branch
    ↓ (otomatik deploy başlar)
GitHub Pages (canlı site)
```

**Branch Kuralları**:
- ✅ `development`: Geliştirme yapılır, deploy OLMAZ
- ✅ `main`: Production branch, deploy OLUR
- ✅ `feature/*`: Feature branch'leri, deploy OLMAZ
- ✅ `hotfix/*`: Acil düzeltmeler, deploy OLMAZ (main'e merge edilince deploy olur)

**Örnek Senaryo**:

```bash
# 1. Development branch'inde çalış
git checkout development
# Kod yaz, test et
git commit -m "Yeni özellik"
git push origin development
# ❌ Deploy olmaz

# 2. Main'e merge et
git checkout main
git merge development
git push origin main
# ✅ Otomatik deploy başlar (GitHub Actions)
```

### 9. Deployment Sorunları ve Çözümleri

#### Sorun 1: "gh-pages branch bulunamadı"

**Çözüm**:
```bash
# İlk deployment için
npm run deploy

# Eğer hata alırsanız, manuel branch oluşturun:
git checkout --orphan gh-pages
git rm -rf .
npm run build
git add build/*
git commit -m "Initial gh-pages commit"
git push origin gh-pages
```

#### Sorun 2: "Asset path'leri yanlış"

**Çözüm**: `package.json`'daki `homepage` değerini kontrol edin:
```json
{
  "homepage": "https://[KULLANICI_ADI].github.io/[REPO_ADI]"
}
```

Eğer repository adı değiştiyse, `homepage`'i güncelleyin ve yeniden build edin.

#### Sorun 3: "Sayfa yenilendiğinde 404 hatası"

**Neden**: BrowserRouter kullanılıyorsa olur.

**Çözüm**: HashRouter kullanıldığından emin olun:
```javascript
// src/App.js
import { HashRouter as Router } from 'react-router-dom'; // ✅ Doğru
// import { BrowserRouter as Router } from 'react-router-dom'; // ❌ Yanlış
```

#### Sorun 4: "Deploy çok uzun sürüyor"

**Normal Süre**: 2-5 dakika

**Hızlandırma**:
- Sadece değişen dosyaları commit edin
- `.gitignore`'da gereksiz dosyaları ignore edin
- `node_modules` build'e dahil edilmemeli (zaten edilmiyor)

### 10. Alternatif Deployment Yöntemleri

#### Netlify (Önerilen Alternatif)

**Avantajlar**:
- BrowserRouter çalışır (server-side routing desteği)
- Otomatik deploy (Git push ile)
- Custom domain ücretsiz
- HTTPS otomatik

**Kurulum**:
1. Netlify'e GitHub ile bağlan
2. Repository seç
3. Build settings:
   - Build command: `cd "Website(new)" && npm run build`
   - Publish directory: `Website(new)/build`

#### Vercel

**Avantajlar**:
- Netlify'e benzer
- Daha hızlı build süreleri
- Edge functions desteği

### 11. Deployment Checklist

Her deployment öncesi:

- [ ] Tüm değişiklikler commit edildi
- [ ] `package.json`'daki `homepage` doğru
- [ ] HashRouter kullanılıyor (BrowserRouter değil)
- [ ] Build hatasız çalışıyor (`npm run build`)
- [ ] Local'de test edildi (`npm start`)
- [ ] `gh-pages` branch'i güncel

### 12. Deployment Komutları Özeti

```bash
# Development
npm start                    # Local development server

# Build
npm run build               # Production build oluştur

# Deploy
npm run deploy              # Build + GitHub Pages'e push

# Manuel Deploy (Alternatif)
npm run build
cd build
git init
git add .
git commit -m "Deploy"
git remote add origin https://github.com/[KULLANICI_ADI]/[REPO_ADI].git
git push -f origin gh-pages
```

---

## 📝 Deployment Sonrası Kontroller

### URL Yapısı Kontrolü

Tüm sayfaların çalıştığını kontrol edin:

- ✅ `https://[KULLANICI_ADI].github.io/[REPO_ADI]/` - Ana sayfa
- ✅ `https://[KULLANICI_ADI].github.io/[REPO_ADI]/#/about` - Hakkımızda
- ✅ `https://[KULLANICI_ADI].github.io/[REPO_ADI]/#/projects` - Projeler
- ✅ `https://[KULLANICI_ADI].github.io/[REPO_ADI]/#/projects/aios` - Proje detayı
- ✅ `https://[KULLANICI_ADI].github.io/[REPO_ADI]/#/team` - Takım
- ✅ `https://[KULLANICI_ADI].github.io/[REPO_ADI]/#/blog` - Blog
- ✅ `https://[KULLANICI_ADI].github.io/[REPO_ADI]/#/contact` - İletişim

### Performans Kontrolü

- [ ] Sayfa yükleme süresi < 3 saniye
- [ ] Tüm görseller yükleniyor
- [ ] Animasyonlar çalışıyor
- [ ] Mobil görünüm düzgün
- [ ] Dil değiştirme çalışıyor

---

## 📝 Yaygın Görevler

### Yeni Takım Üyesi Ekleme

1. **Profil Fotoğrafı Ekle**:
   - `public/profile-photos/` klasörüne fotoğraf ekle
   - Dosya adı: `[isim].jpg` (veya .png, .jpeg)

2. **TeamPage.js veya TeamSection.js'i Güncelle**:
   - Takım üyesi verilerini ekle
   - Fotoğraf path'ini belirt: `/profile-photos/[isim].jpg`

### Sponsor Ekleme

1. **Logo Ekle**:
   - `public/sponsors/` klasörüne logo ekle
   - Format: `.svg` veya `.png`

2. **SponsorsSection.js'i Güncelle**:
   - Sponsor verilerini ekle
   - Logo path'ini belirt

### Arama Fonksiyonunu Kullanma

Navbar'daki arama kutusu:
- Proje başlıkları ve açıklamalarında arama yapar
- Blog başlıkları ve içeriklerinde arama yapar
- Sonuçlar `/search` sayfasında gösterilir

**Arama Mantığı**: `SearchResultsPage.js` içinde implement edilmiştir.

---

## 🔍 Sorun Giderme

### Port 3000 Zaten Kullanılıyor

```bash
# Port'u değiştir
PORT=3001 npm start
```

### Build Hataları

```bash
# node_modules'ü temizle ve yeniden yükle
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Routing Çalışmıyor

- HashRouter kullanıldığından emin olun (`#` URL'lerde görünmeli)
- GitHub Pages'te HashRouter gerekli

### Dil Değişmiyor

- LocalStorage'ı temizle: `localStorage.clear()`
- Tarayıcıyı yenile

### GSAP Animasyonları Çalışmıyor

- GSAP import edildiğinden emin olun
- useEffect içinde animasyonları başlatın
- Component unmount olduğunda cleanup yapın

### CSS Değişiklikleri Görünmüyor

- Tarayıcı cache'ini temizle (Ctrl+Shift+R / Cmd+Shift+R)
- CSS dosyasının import edildiğinden emin olun

---

## 📚 Ek Kaynaklar

### React Dokümantasyonu
- [React Docs](https://react.dev/)
- [React Router Docs](https://reactrouter.com/)

### GSAP Dokümantasyonu
- [GSAP Docs](https://greensock.com/docs/)

### Create React App
- [CRA Docs](https://create-react-app.dev/)

---

## 👥 Katkıda Bulunma

1. Yeni bir branch oluşturun: `git checkout -b feature/yeni-ozellik`
2. Değişikliklerinizi commit edin: `git commit -m 'Yeni özellik eklendi'`
3. Branch'inizi push edin: `git push origin feature/yeni-ozellik`
4. Pull Request oluşturun

### Kod Standartları

- ESLint kurallarına uyun
- Functional component'ler kullanın
- Hooks kullanın (class component'lerden kaçının)
- Anlamlı değişken isimleri kullanın
- Yorum satırları ekleyin (karmaşık mantık için)

---

<div align="center">

**İTÜ VCAMP - Vision, Community and Making Project Team**

Made with ❤️ by VCAMP Developers

</div>
