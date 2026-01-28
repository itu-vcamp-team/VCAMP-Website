# VCAMP Website - Single Page Versiyonu

<div align="center">

**İTÜ VCAMP websitesi - Vanilla JavaScript ve HTML5 tabanlı eski versiyon**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

</div>

---

## 📋 İçindekiler

- [Proje Hakkında](#proje-hakkında)
- [Teknoloji Stack](#teknoloji-stack)
- [Klasör Yapısı](#klasör-yapısı)
- [Dosya Açıklamaları](#dosya-açıklamaları)
- [Kurulum](#kurulum)
- [Geliştirme](#geliştirme)
- [Notlar](#notlar)

---

## 🎯 Proje Hakkında

Bu klasör, VCAMP websitesinin **eski single-page versiyonunu** içerir. Bu versiyon vanilla JavaScript, HTML5 ve CSS3 kullanılarak geliştirilmiştir.

**⚠️ Önemli**: Bu versiyon artık aktif olarak kullanılmamaktadır. Yeni React versiyonu `Website(new)/` klasöründe bulunmaktadır.

**Bu versiyon referans amaçlı saklanmaktadır.**

---

## 🛠️ Teknoloji Stack

### Core Technologies

| Teknoloji | Amaç |
|-----------|------|
| **HTML5** | Sayfa yapısı, semantic markup |
| **CSS3** | Stil ve tasarım |
| **Vanilla JavaScript** | İnteraktivite, DOM manipülasyonu |
| **Particles.js** | Arka plan partikül animasyonu |

### External Libraries

- **Particles.js**: Arka plan animasyonları için
- **Font Awesome**: İkonlar için (CDN)

---

## 📁 Klasör Yapısı

```
VCAMP-website(single page)/
├── index.html              # Ana sayfa
├── about.html              # Hakkımızda sayfası
├── projects.html           # Projeler sayfası
├── team.html               # Takım sayfası
├── blog.html               # Blog sayfası
├── contact.html            # İletişim sayfası
├── sponsors.html           # Sponsorlar sayfası
├── design.html             # Tasarım sayfası
├── achievements.html       # Başarılar sayfası
├── testing.html            # Test sayfası
│
├── js/                     # JavaScript dosyaları
│   ├── main.js             # Ana JavaScript dosyası
│   ├── i18n.js             # Çok dilli sistem
│   ├── projects.js         # Proje yönetimi
│   ├── blog.js             # Blog yönetimi
│   ├── search.js            # Arama fonksiyonu
│   └── mockData.js         # Mock veriler
│
├── assets/                  # Görseller
│   ├── ai-shell-hero.png
│   ├── blocktrace-hero.png
│   ├── vehicle-hero.png
│   └── wedo-hero.png
│
├── styles.css              # Ana stil dosyası
├── pages.css               # Sayfa stilleri
├── script.js               # Global script'ler
├── galaxy.js               # Galaksi animasyonu
├── logo.svg                # Logo dosyası
└── logo.png                # Logo (PNG)
```

---

## 📄 Dosya Açıklamaları

### HTML Dosyaları

#### `index.html`
- **Ne işe yarar**: Ana sayfa, proje giriş noktası
- **Yapı**: Single-page application yapısı
- **İçerik**: Hero section, proje özetleri, takım özeti

#### `about.html`
- **Ne işe yarar**: Hakkımızda sayfası
- **İçerik**: VCAMP hakkında detaylı bilgiler, misyon, vizyon

#### `projects.html`
- **Ne işe yarar**: Projeler listesi ve detayları
- **Fonksiyon**: Proje kartları, filtreleme, detay görünümü

#### `team.html`
- **Ne işe yarar**: Takım sayfası
- **İçerik**: Takım üyelerinin profilleri

#### `blog.html`
- **Ne işe yarar**: Blog yazıları listesi
- **Fonksiyon**: Blog kartları, kategori filtreleme

#### `contact.html`
- **Ne işe yarar**: İletişim formu
- **İçerik**: İletişim bilgileri, form alanları

#### `sponsors.html`
- **Ne işe yarar**: Sponsorlar sayfası
- **İçerik**: Sponsor logoları ve bilgileri

#### `design.html`
- **Ne işe yarar**: Tasarım dokümantasyonu
- **İçerik**: Tasarım sistem bilgileri

#### `achievements.html`
- **Ne işe yarar**: Başarılar sayfası
- **İçerik**: Takım başarıları, ödüller

#### `testing.html`
- **Ne işe yarar**: Test sayfası
- **Amaç**: Geliştirme sırasında test için

#### Proje Detay Sayfaları

##### `wedo.html`
- **Ne işe yarar**: WeDo projesi detay sayfası
- **İçerik**: Proje açıklaması, özellikler, teknoloji stack

##### `vehicle.html`
- **Ne işe yarar**: Vehicle projesi detay sayfası

##### `blocktrace.html`
- **Ne işe yarar**: BlockTrace projesi detay sayfası

##### `ai-shell.html`
- **Ne işe yarar**: AI Shell projesi detay sayfası

---

### JavaScript Dosyaları (`/js/`)

#### `main.js`
- **Ne işe yarar**: Ana JavaScript dosyası
- **Fonksiyonlar**:
  - Sayfa yükleme işlemleri
  - Navigasyon yönetimi
  - Event listener'lar
  - DOM manipülasyonu

**Yapı**:
```javascript
// Sayfa yüklendiğinde çalışan fonksiyonlar
window.addEventListener('DOMContentLoaded', () => {
  // Initialization code
});

// Smooth scroll
// Navigation handling
// Modal management
```

#### `i18n.js`
- **Ne işe yarar**: Çok dilli sistem (Internationalization)
- **Fonksiyonlar**:
  - Dil değiştirme
  - Metin çevirileri
  - LocalStorage ile dil tercihi saklama

**Yapı**:
```javascript
class I18n {
  constructor() {
    this.currentLanguage = 'tr';
    this.translations = { /* ... */ };
  }
  
  setLanguage(lang) { /* ... */ }
  translate(key) { /* ... */ }
}
```

#### `projects.js`
- **Ne işe yarar**: Proje yönetimi ve gösterimi
- **Fonksiyonlar**:
  - Proje listesi oluşturma
  - Proje detay sayfası render etme
  - Proje filtreleme
  - Proje arama

**Yapı**:
```javascript
// Proje verilerini yükle
// Proje kartlarını oluştur
// Proje detay sayfasını render et
// Filtreleme ve arama fonksiyonları
```

#### `blog.js`
- **Ne işe yarar**: Blog yönetimi
- **Fonksiyonlar**:
  - Blog yazılarını listeleme
  - Blog detay sayfası
  - Kategori filtreleme
  - Blog arama

#### `search.js`
- **Ne işe yarar**: Arama fonksiyonu
- **Fonksiyonlar**:
  - Proje ve blog içeriklerinde arama
  - Arama sonuçlarını gösterme
  - Highlight işlemleri

#### `mockData.js`
- **Ne işe yarar**: Mock veriler (test ve geliştirme için)
- **İçerik**:
  - Proje verileri
  - Blog yazıları
  - Takım üyesi bilgileri
  - Sponsor bilgileri

**Yapı**:
```javascript
export const projects = [ /* ... */ ];
export const blogPosts = [ /* ... */ ];
export const teamMembers = [ /* ... */ ];
```

---

### CSS Dosyaları

#### `styles.css`
- **Ne işe yarar**: Ana stil dosyası
- **İçerik**:
  - Global stiller
  - CSS reset
  - Utility class'lar
  - Component stilleri
  - Responsive tasarım

**Yapı**:
```css
/* CSS Variables */
:root {
  --primary-color: #...;
  --font-family: ...;
}

/* Global Styles */
* { /* ... */ }

/* Component Styles */
.navbar { /* ... */ }
.hero { /* ... */ }
```

#### `pages.css`
- **Ne işe yarar**: Sayfa özel stilleri
- **İçerik**: Her sayfa için özel stil tanımlamaları

---

### Diğer Dosyalar

#### `script.js`
- **Ne işe yarar**: Global script'ler
- **İçerik**: Tüm sayfalarda kullanılan ortak fonksiyonlar

#### `galaxy.js`
- **Ne işe yarar**: Galaksi animasyonu
- **Teknoloji**: Canvas API, JavaScript animasyonları
- **Kullanım**: Arka plan animasyonu için

#### `logo.svg` / `logo.png`
- **Ne işe yarar**: VCAMP logosu
- **Format**: SVG (vektör) ve PNG (raster)

---

## 🚀 Kurulum

### Gereksinimler

- Modern web tarayıcısı (Chrome, Firefox, Safari, Edge)
- Local web server (opsiyonel, CORS için)

### Adımlar

#### Yöntem 1: Doğrudan Açma

```bash
# index.html dosyasını tarayıcıda açın
open index.html
```

**Not**: Bazı özellikler (AJAX, modüller) için local server gerekebilir.

#### Yöntem 2: Local Server (Önerilen)

```bash
# Python 3 ile
python3 -m http.server 8000

# Node.js ile (http-server)
npx http-server

# PHP ile
php -S localhost:8000
```

Tarayıcıda `http://localhost:8000` adresini açın.

---

## 💻 Geliştirme

### Yeni Sayfa Ekleme

1. **HTML dosyası oluştur**:
   ```html
   <!-- new-page.html -->
   <!DOCTYPE html>
   <html lang="tr">
   <head>
       <meta charset="UTF-8">
       <title>Yeni Sayfa - VCAMP</title>
       <link rel="stylesheet" href="styles.css">
       <link rel="stylesheet" href="pages.css">
   </head>
   <body>
       <!-- Sayfa içeriği -->
       <script src="js/main.js"></script>
   </body>
   </html>
   ```

2. **Navigasyon menüsüne ekle** (varsa):
   ```javascript
   // js/main.js içinde
   const navItems = [
     // ... mevcut items
     { name: 'Yeni Sayfa', url: 'new-page.html' }
   ];
   ```

### JavaScript Modülü Ekleme

1. **Yeni JS dosyası oluştur**:
   ```javascript
   // js/newModule.js
   export const newFunction = () => {
     // Fonksiyon içeriği
   };
   ```

2. **HTML'de import et**:
   ```html
   <script type="module">
     import { newFunction } from './js/newModule.js';
     newFunction();
   </script>
   ```

### Stil Ekleme

1. **Global stil** (tüm sayfalarda):
   - `styles.css` dosyasına ekle

2. **Sayfa özel stil**:
   - `pages.css` dosyasına ekle
   - Veya sayfa içinde `<style>` tag'i kullan

### Çok Dilli İçerik Ekleme

```javascript
// js/i18n.js içinde
translations: {
  tr: {
    'new.key': 'Türkçe Metin'
  },
  en: {
    'new.key': 'English Text'
  }
}

// Kullanım
i18n.translate('new.key');
```

---

## 📚 Kod Yapısı

### JavaScript Pattern

- **Vanilla JavaScript**: Framework kullanılmaz
- **ES6+ Features**: Arrow functions, classes, modules
- **Event-Driven**: Event listener'lar ile interaktivite

### CSS Pattern

- **CSS Variables**: Renk ve değer yönetimi
- **BEM Methodology**: Class isimlendirme (opsiyonel)
- **Mobile First**: Responsive tasarım

### HTML Pattern

- **Semantic HTML5**: `<header>`, `<nav>`, `<main>`, `<footer>`
- **Accessibility**: ARIA labels, alt texts
- **SEO**: Meta tags, semantic structure

---

## ⚠️ Notlar

### Bu Versiyon Hakkında

1. **Aktif Değil**: Bu versiyon artık aktif olarak kullanılmamaktadır
2. **Referans Amaçlı**: Yeni React versiyonu için referans olarak saklanmaktadır
3. **Bakım Yok**: Bu versiyon üzerinde aktif geliştirme yapılmamaktadır

### Yeni Versiyon

- **Aktif Versiyon**: `Website(new)/` klasöründe React versiyonu bulunmaktadır
- **Önerilen**: Yeni geliştirmeler için React versiyonunu kullanın

### Migration Notları

Eğer bu versiyondan React versiyonuna geçiş yapıyorsanız:

1. **Veri Yapısı**: `mockData.js` → `projectData.js`, `blogData.js`
2. **Routing**: HTML sayfaları → React Router
3. **State**: Global variables → React Context/State
4. **DOM Manipulation**: Vanilla JS → React components

---

## 🔍 Sorun Giderme

### CORS Hatası

**Sorun**: Local file açarken CORS hatası

**Çözüm**: Local web server kullanın:
```bash
python3 -m http.server 8000
```

### Module Import Hatası

**Sorun**: ES6 module import çalışmıyor

**Çözüm**: 
- `type="module"` attribute'u ekleyin
- Local server kullanın (file:// protokolü modülleri desteklemez)

### Particles.js Yüklenmiyor

**Sorun**: Arka plan animasyonu çalışmıyor

**Çözüm**: 
- CDN bağlantısını kontrol edin
- Internet bağlantısını kontrol edin

---

**İTÜ VCAMP - Vision, Community and Making Project Team**

**Not**: Bu versiyon referans amaçlıdır. Aktif geliştirme `Website(new)/` klasöründe yapılmaktadır.
