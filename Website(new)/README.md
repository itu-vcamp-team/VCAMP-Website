# VCAMP Website - React Uygulaması

<div align="center">

**İTÜ VCAMP resmi websitesi - React tabanlı modern SPA**

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)](https://reactjs.org/)
[![React Router](https://img.shields.io/badge/React%20Router-7.13.0-CA4245?logo=react-router)](https://reactrouter.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.14.2-88CE02?logo=greensock)](https://greensock.com/gsap/)

</div>

---

## 📋 İçindekiler

- [Proje Hakkında](#proje-hakkında)
- [Teknoloji Stack](#teknoloji-stack)
- [Klasör Yapısı](#klasör-yapısı)
- [Dosya Açıklamaları](#dosya-açıklamaları)
- [Kurulum](#kurulum)
- [Geliştirme](#geliştirme)
- [Build ve Deploy](#build-ve-deploy)
- [Kod Yapısı](#kod-yapısı)

---

## 🎯 Proje Hakkında

Bu proje, İTÜ VCAMP (Vision, Community and Making Project) takımının resmi websitesidir. React 18 ve modern web teknolojileri kullanılarak geliştirilmiştir.

**Özellikler**:
- 🌍 Çok dilli destek (Türkçe/İngilizce)
- 🎨 GSAP animasyonları
- 📱 Responsive tasarım
- 🚀 Single Page Application (SPA)
- 🔍 Arama fonksiyonu
- 📝 Blog sistemi
- 👥 Takım sayfası
- 💼 Proje detay sayfaları

---

## 🛠️ Teknoloji Stack

### Core Dependencies

| Teknoloji | Versiyon | Amaç |
|-----------|----------|------|
| **React** | 18.2.0 | UI kütüphanesi, component yapısı |
| **React DOM** | 18.2.0 | React'in DOM renderer'ı |
| **React Router DOM** | 7.13.0 | Client-side routing (HashRouter) |
| **GSAP** | 3.14.2 | Profesyonel animasyon kütüphanesi |
| **React Scripts** | 5.0.1 | Create React App build tools |

### Development Dependencies

| Teknoloji | Versiyon | Amaç |
|-----------|----------|------|
| **gh-pages** | 6.3.0 | GitHub Pages deployment |

### Neden Bu Teknolojiler?

- **React 18**: Modern hooks API, performans iyileştirmeleri, concurrent features
- **HashRouter**: GitHub Pages ile uyumlu (SPA routing için gerekli)
- **GSAP**: Yüksek performanslı animasyonlar, timeline kontrolü
- **Create React App**: Zero-config setup, hızlı geliştirme

---

## 📁 Klasör Yapısı

```
Website(new)/
├── public/                    # Statik dosyalar (build'e kopyalanır)
│   ├── index.html             # Ana HTML şablonu
│   ├── profile-photos/        # Takım üyesi profil fotoğrafları
│   └── sponsors/              # Sponsor logoları
│
├── src/                       # Kaynak kodlar
│   ├── components/            # React bileşenleri
│   │   ├── HomePage.js        # Ana sayfa
│   │   ├── AboutPage.js       # Hakkımızda bölümü
│   │   ├── ProjectsPage.js    # Projeler sayfası
│   │   ├── TeamPage.js        # Takım sayfası
│   │   ├── BlogPage.js        # Blog sayfası
│   │   ├── Navbar.js          # Navigasyon menüsü
│   │   ├── Footer.js          # Footer bileşeni
│   │   └── ...                # Diğer component'ler
│   │
│   ├── contexts/              # React Context API
│   │   └── LanguageContext.js # Dil yönetimi (TR/EN)
│   │
│   ├── data/                  # Veri dosyaları
│   │   ├── projectData.js     # Proje verileri ve çevirileri
│   │   └── blogData.js        # Blog yazıları
│   │
│   ├── assets/                # Görseller ve medya
│   │   └── Logo svg.svg       # VCAMP logosu
│   │
│   ├── App.js                 # Ana uygulama ve routing
│   ├── App.css                # Global stiller
│   ├── index.js               # Giriş noktası
│   └── index.css              # Global CSS reset
│
├── build/                     # Production build (gitignore'da)
├── node_modules/              # Bağımlılıklar (gitignore'da)
├── package.json               # Proje konfigürasyonu
└── package-lock.json          # Bağımlılık versiyonları
```

---

## 📄 Dosya Açıklamaları

### `/public/` Klasörü

**Amaç**: Build sırasında `build/` klasörüne olduğu gibi kopyalanan statik dosyalar.

#### `index.html`
- **Ne işe yarar**: Ana HTML şablonu, React uygulamasının mount edildiği yer
- **Önemli**: `<div id="root"></div>` React'in render edeceği container
- **CDN Scripts**: Particles.js ve Stats.js buradan yüklenir

#### `profile-photos/`
- **Ne işe yarar**: Takım üyesi profil fotoğrafları
- **Format**: `.jpg`, `.png`, `.jpeg`
- **Kullanım**: Component'lerde `/profile-photos/[dosya-adı]` şeklinde referans edilir

#### `sponsors/`
- **Ne işe yarar**: Sponsor logoları
- **Format**: `.svg`, `.png`
- **Kullanım**: SponsorsSection component'inde kullanılır

---

### `/src/` Klasörü

#### `index.js`
- **Ne işe yarar**: Uygulamanın giriş noktası
- **Teknoloji**: React 18 `createRoot` API
- **Yapı**:
  ```javascript
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
  ```

#### `App.js`
- **Ne işe yarar**: Ana uygulama component'i, routing yapılandırması
- **Teknoloji**: React Router (HashRouter)
- **Yapı**:
  - `LanguageProvider`: Dil context'i ile sarılmış
  - `HashRouter`: Client-side routing
  - `Routes`: Route tanımlamaları
  - Her route'da ilgili component'ler render edilir

**Route Yapısı**:
- `/` - Ana sayfa (HomePage + Sections + Footer)
- `/about` - Hakkımızda tam sayfa
- `/projects` - Projeler listesi
- `/projects/:projectId` - Proje detayı (dinamik)
- `/team` - Takım sayfası
- `/blog` - Blog listesi
- `/blog/:blogId` - Blog detayı (dinamik)
- `/contact` - İletişim
- `/sponsorship` - Sponsorluk
- `/search` - Arama sonuçları

#### `App.css`
- **Ne işe yarar**: App component'e özel global stiller
- **İçerik**: Layout stilleri, overflow ayarları

#### `index.css`
- **Ne işe yarar**: Global CSS reset ve temel stiller
- **İçerik**: CSS reset, global değişkenler, utility class'lar

---

### `/src/components/` Klasörü

**Amaç**: Tüm React bileşenleri (sayfalar ve reusable component'ler)

#### Sayfa Bileşenleri (Full Pages)

##### `HomePage.js` + `HomePage.css`
- **Ne işe yarar**: Ana sayfa (logo ve tagline gösterir)
- **Teknoloji**: React functional component
- **Kullanım**: Sadece `/` route'unda görünür

##### `AboutPage.js` + `AboutPage.css`
- **Ne işe yarar**: Ana sayfadaki hakkımızda özet bölümü
- **Teknoloji**: React, GSAP (scroll animasyonları)
- **Özellikler**: SVG path animasyonları, scroll-based animasyonlar

##### `AboutPageFull.js` + `AboutPageFull.css`
- **Ne işe yarar**: Tam hakkımızda sayfası (`/about` route'u)
- **Teknoloji**: React, GSAP
- **İçerik**: Misyon, vizyon, takım hakkında detaylı bilgiler

##### `ProjectsPage.js` + `ProjectsPage.css`
- **Ne işe yarar**: Tüm projelerin listelendiği sayfa (`/projects`)
- **Teknoloji**: React Router, LanguageContext
- **Veri Kaynağı**: `src/data/projectData.js`

##### `ProjectDetail.js` + `ProjectDetail.css`
- **Ne işe yarar**: Proje detay sayfası (`/projects/:projectId`)
- **Teknoloji**: React Router (`useParams` hook)
- **Dinamik Route**: URL'den `projectId` alır, ilgili projeyi gösterir

##### `TeamPage.js` + `TeamPage.css`
- **Ne işe yarar**: Takım sayfası (`/team`)
- **Teknoloji**: React
- **İçerik**: Takım üyelerinin profilleri, fotoğrafları

##### `BlogPage.js` + `BlogPage.css`
- **Ne işe yarar**: Blog yazılarının listelendiği sayfa (`/blog`)
- **Teknoloji**: React Router
- **Veri Kaynağı**: `src/data/blogData.js`

##### `BlogDetail.js` + `BlogDetail.css`
- **Ne işe yarar**: Blog detay sayfası (`/blog/:blogId`)
- **Teknoloji**: React Router (`useParams`)
- **Dinamik Route**: URL'den `blogId` alır

##### `ContactPage.js` + `ContactPage.css`
- **Ne işe yarar**: İletişim sayfası (`/contact`)
- **Teknoloji**: React

##### `SponsorshipPage.js` + `SponsorshipPage.css`
- **Ne işe yarar**: Sponsorluk sayfası (`/sponsorship`)
- **Teknoloji**: React

##### `SearchResultsPage.js` + `SearchResultsPage.css`
- **Ne işe yarar**: Arama sonuçları sayfası (`/search`)
- **Teknoloji**: React Router (`useSearchParams`)
- **Fonksiyon**: Proje ve blog içeriklerinde arama yapar

#### Section Bileşenleri (Ana Sayfa Bölümleri)

##### `ProjectsSection.js` + `ProjectsSection.css`
- **Ne işe yarar**: Ana sayfadaki projeler önizlemesi
- **Kullanım**: Ana sayfada (`/`) gösterilir
- **Özellik**: Projelerin özet görünümü

##### `TeamSection.js` + `TeamSection.css`
- **Ne işe yarar**: Ana sayfadaki takım önizlemesi
- **Kullanım**: Ana sayfada gösterilir

##### `SponsorsSection.js` + `SponsorsSection.css`
- **Ne işe yarar**: Sponsorlar bölümü
- **Kullanım**: Ana sayfada gösterilir

##### `BlogSection.js` + `BlogSection.css`
- **Ne işe yarar**: Son blog yazıları önizlemesi
- **Kullanım**: Ana sayfada gösterilir

#### Layout Bileşenleri

##### `Navbar.js` + `Navbar.css`
- **Ne işe yarar**: Navigasyon menüsü
- **Teknoloji**: React Router (`Link`, `useNavigate`), LanguageContext
- **Özellikler**:
  - Dil değiştirme butonu
  - Arama fonksiyonu
  - Responsive menü
  - Aktif sayfa vurgulama

##### `Footer.js` + `Footer.css`
- **Ne işe yarar**: Footer bileşeni
- **Kullanım**: Tüm sayfalarda gösterilir

#### Özel Bileşenler

##### `ParticlesBackground.js`
- **Ne işe yarar**: Arka plan partikül animasyonu
- **Teknoloji**: Particles.js (CDN'den yüklenir)
- **Kullanım**: Tüm sayfalarda arka planda gösterilir

##### `CardSwap.js` + `CardSwap.css`
- **Ne işe yarar**: Kart değiştirme animasyonu
- **Teknoloji**: GSAP (3D transforms, timeline)
- **Özellikler**: Otomatik kart değişimi, hover pause

##### `ChromaGrid.js` + `ChromaGrid.css`
- **Ne işe yarar**: Grid animasyonlu kart görünümü
- **Teknoloji**: GSAP (mouse tracking, CSS variables)
- **Özellikler**: Mouse hareketine göre animasyon

---

### `/src/contexts/` Klasörü

#### `LanguageContext.js`
- **Ne işe yarar**: Global dil yönetimi (TR/EN)
- **Teknoloji**: React Context API
- **Yapı**:
  ```javascript
  LanguageProvider: Dil state'ini sağlar
  useLanguage(): Hook ile dil erişimi
  ```
- **State**: `language` ('tr' veya 'en')
- **Fonksiyonlar**: `toggleLanguage()`, `setLanguage()`
- **Persistence**: LocalStorage'da dil tercihi saklanır

**Kullanım Örneği**:
```javascript
import { useLanguage } from '../contexts/LanguageContext';

const MyComponent = () => {
  const { language, toggleLanguage } = useLanguage();
  // language === 'tr' veya 'en'
};
```

---

### `/src/data/` Klasörü

#### `projectData.js`
- **Ne işe yarar**: Proje verileri ve çevirileri
- **Yapı**: 
  ```javascript
  export const projectTranslations = {
    tr: {
      projects: {
        [projectId]: {
          title, description, details, features, image, ...
        }
      }
    },
    en: { /* İngilizce çeviriler */ }
  };
  ```
- **Proje ID'leri**: `aios`, `teknofestHavacilik`, `mesaneKanseri`, `teknofestSaglik`, `suas26`
- **Kullanım**: Component'lerde `projectTranslations[language].projects[projectId]` şeklinde

#### `blogData.js`
- **Ne işe yarar**: Blog yazıları
- **Yapı**: 
  ```javascript
  export const blogPosts = [
    {
      id: number,
      title: string,
      excerpt: string,
      date: string,
      category: string,
      image: string,
      content: string
    }
  ];
  ```
- **Kullanım**: BlogPage ve BlogDetail component'lerinde

---

### `/src/assets/` Klasörü

#### `Logo svg.svg`
- **Ne işe yarar**: VCAMP logosu
- **Kullanım**: Import edilerek kullanılır
- **Örnek**: 
  ```javascript
  import logo from '../assets/Logo svg.svg';
  <img src={logo} alt="VCAMP Logo" />
  ```

---

### `/package.json`

- **Ne işe yarar**: Proje konfigürasyonu, bağımlılıklar, script'ler
- **Önemli Alanlar**:
  - `homepage`: GitHub Pages URL'i (build için)
  - `scripts`: npm komutları
  - `dependencies`: Production bağımlılıkları
  - `devDependencies`: Development bağımlılıkları

**Scripts**:
- `npm start`: Development server başlatır
- `npm run build`: Production build oluşturur
- `npm test`: Test suite çalıştırır
- `npm run deploy`: GitHub Pages'e deploy eder

---

## 🚀 Kurulum

### Gereksinimler

- Node.js v14.0.0 veya üzeri
- npm v6.0.0 veya üzeri

### Adımlar

```bash
# 1. Klasöre gidin
cd Website(new)

# 2. Bağımlılıkları yükleyin
npm install

# 3. Development server'ı başlatın
npm start
```

Tarayıcıda `http://localhost:3000` adresinde proje açılacaktır.

---

## 💻 Geliştirme

### Yeni Component Ekleme

1. **Component dosyası oluştur**:
   ```bash
   touch src/components/NewComponent.js
   touch src/components/NewComponent.css
   ```

2. **Component'i yaz**:
   ```javascript
   // NewComponent.js
   import React from 'react';
   import { useLanguage } from '../contexts/LanguageContext';
   import './NewComponent.css';

   const NewComponent = () => {
     const { language } = useLanguage();
     
     return (
       <div className="new-component">
         <h1>Yeni Component</h1>
       </div>
     );
   };

   export default NewComponent;
   ```

3. **App.js'de route ekle** (sayfa ise):
   ```javascript
   import NewComponent from './components/NewComponent';
   
   <Route path="/new-page" element={<><NewComponent /><Footer /></>} />
   ```

### Çok Dilli İçerik Ekleme

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

### GSAP Animasyonu Ekleme

```javascript
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const MyComponent = () => {
  const elementRef = useRef(null);
  
  useEffect(() => {
    gsap.from(elementRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out'
    });
  }, []);
  
  return <div ref={elementRef}>Animasyonlu Element</div>;
};
```

---

## 🏗️ Build ve Deploy

### Development Build

```bash
npm start
```

- Port: 3000
- Hot reload: Aktif
- Source maps: Aktif

### Production Build

```bash
npm run build
```

**Çıktı**: `build/` klasörü
- Minified JavaScript
- Optimized CSS
- Asset optimization

### GitHub Pages Deploy

```bash
npm run deploy
```

**Süreç**:
1. `predeploy` → `npm run build`
2. `gh-pages` → `build/` klasörünü `gh-pages` branch'ine push eder

**Not**: GitHub Actions ile otomatik deploy yapılandırılmıştır. Main branch'e push edildiğinde otomatik deploy olur.

---

## 📚 Kod Yapısı

### Component Yapısı

- **Functional Components**: Tüm component'ler functional
- **Hooks**: useState, useEffect, useRef, useContext kullanılır
- **CSS**: Her component kendi CSS dosyasına sahip
- **Naming**: PascalCase (ComponentName.js)

### State Yönetimi

- **Local State**: `useState` hook'u
- **Global State**: `LanguageContext` (dil yönetimi)
- **URL State**: React Router (`useParams`, `useSearchParams`)

### Stil Yönetimi

- **CSS Files**: Her component için ayrı CSS dosyası
- **Global Styles**: `index.css`, `App.css`
- **Responsive**: Media queries component CSS'lerinde

### Best Practices

1. **Component İsimlendirme**: PascalCase
2. **Dosya İsimlendirme**: ComponentName.js, ComponentName.css
3. **Import Sırası**: React → Third-party → Local
4. **Hooks Kullanımı**: Component'in en üstünde
5. **Cleanup**: useEffect'te cleanup fonksiyonları

---

## 🔍 Sorun Giderme

### Port 3000 Kullanımda

```bash
PORT=3001 npm start
```

### Build Hataları

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Routing Çalışmıyor

- HashRouter kullanıldığından emin olun
- URL'lerde `#` görünmeli: `/#/about`

---

**İTÜ VCAMP - Vision, Community and Making Project Team**
