/**
 * ITU VCAMP - Internationalization (i18n) System
 * English/Turkish language support with localStorage
 */

class I18n {
    constructor() {
        this.currentLang = this.getStoredLanguage() || 'en';
        this.translations = {};
        this.init();
    }

    init() {
        // Load translations
        this.loadTranslations();
        
        // Apply current language
        this.setLanguage(this.currentLang);
        
        // Setup language toggle button
        this.setupToggleButton();
    }

    getStoredLanguage() {
        try {
            return localStorage.getItem('vcamp_language') || 'en';
        } catch (e) {
            return 'en';
        }
    }

    storeLanguage(lang) {
        try {
            localStorage.setItem('vcamp_language', lang);
        } catch (e) {
            console.warn('Could not store language preference');
        }
    }

    loadTranslations() {
        this.translations = {
            en: {
                // Navigation
                navAbout: 'About',
                navTeam: 'Team',
                navProjects: 'Projects',
                navAchievements: 'Achievements',
                navContact: 'Contact',
                navVehicle: 'Vehicle',
                navDesign: 'Design',
                navBlog: 'Build Progress',
                navTesting: 'Testing',
                navSponsors: 'Sponsors',
                
                // Common
                backToHome: 'Back to Home',
                readMore: 'Read More',
                learnMore: 'Learn More',
                viewDetails: 'View Details',
                loading: 'Loading...',
                search: 'Search',
                searchPlaceholder: 'Search the website...',
                noResults: 'No results found',
                
                // Homepage
                heroTagline: 'ITU Entrepreneurship Team',
                heroSubtitle: 'Vision • Community • And • Making • Project',
                
                // About
                aboutTitle: 'About Us',
                aboutIntro: 'ITU VCAMP (Vision, Community and Making Project) is a project team formed under VCAMP, one of the most active communities in Istanbul Technical University\'s entrepreneurship ecosystem.',
                aboutText: 'Our team consists of entrepreneurial students from different engineering and design disciplines. Our goal is to quickly validate innovative business ideas, develop their prototypes, and bring them to a level that can be presented to potential investors.',
                ourValues: 'Our Values',
                ourMission: 'Our Mission',
                ourVision: 'Our Vision',
                missionText: 'To solve real problems with fast, user-focused, and sustainable solutions. As entrepreneurial students from different disciplines, we aim to validate innovative ideas, develop their prototypes, and transform technology into products that touch people\'s lives.',
                visionText: 'To create global impact as Turkey\'s most effective student entrepreneurship team. Our goal is to bring the projects we develop under ITU VCAMP to a level where they can receive investment, leading Turkey\'s technology entrepreneurship ecosystem.',
                
                // Stats
                activeMembers: 'Active Members',
                foundedYear: 'Founded',
                activeProjects: 'Active Projects',
                awards: 'Awards',
                
                // Team
                teamTitle: 'Our Team',
                teamLeader: 'Team Leader',
                filterAll: 'All',
                filterDevelopers: 'Developers',
                filterDesigners: 'Designers',
                filterBusiness: 'Business Development',
                
                // Projects
                projectsTitle: 'Our Projects',
                activeProject: 'Active Project',
                inDevelopment: 'In Development',
                
                // Achievements
                achievementsTitle: 'Our Achievements',
                pastEvent: 'Past Event',
                
                // Contact
                contactTitle: 'Contact',
                contactSubtitle: 'Get in touch with us to discuss our projects, partnerships, or sponsorship opportunities.',
                name: 'Name',
                email: 'Email',
                message: 'Message',
                send: 'Send',
                sent: 'Sent!',
                
                // Vehicle
                vehicleTitle: 'SUAS 26 Vehicle',
                vehicleSubtitle: 'Autonomous Unmanned Aerial System',
                specifications: 'Technical Specifications',
                maxFlightTime: 'Max Flight Time',
                maxSpeed: 'Max Speed',
                weight: 'Weight',
                wingspan: 'Wingspan',
                autonomousFlight: 'Autonomous Flight Capabilities',
                cameraSystems: 'Camera & Sensor Systems',
                designPhilosophy: 'Design Philosophy',
                gallery: 'Gallery',
                videos: 'Videos',
                
                // Design
                designTitle: 'Design Documentation',
                designDecisions: 'Design Decisions',
                engineeringWork: 'Engineering Work',
                cadModels: 'CAD Models',
                systemArchitecture: 'System Architecture',
                materialSelection: 'Material Selection',
                aerodynamicAnalysis: 'Aerodynamic Analysis',
                
                // Blog
                blogTitle: 'Build Progress',
                blogSubtitle: 'Historical records of our development process',
                readArticle: 'Read Article',
                weeksAgo: 'weeks ago',
                daysAgo: 'days ago',
                
                // Testing
                testingTitle: 'Testing & Procedures',
                testProcedures: 'Test Procedures',
                testResults: 'Test Results',
                safetyProtocols: 'Safety Protocols',
                calibration: 'Calibration Processes',
                flightTests: 'Flight Test Reports',
                systemValidation: 'System Validation',
                
                // Sponsors
                sponsorsTitle: 'Our Sponsors',
                sponsorsSubtitle: 'We thank our sponsors for their support',
                platinum: 'Platinum',
                gold: 'Gold',
                silver: 'Silver',
                bronze: 'Bronze',
                
                // Footer
                footerText: '© 2026 ITU VCAMP. Vision • Community • And • Making • Project',
                
                // Values
                valueAI: 'Artificial Intelligence',
                valueAIDesc: 'We develop AI-powered applications',
                valuePrototyping: 'Rapid Prototyping',
                valuePrototypingDesc: 'We quickly bring our ideas to life',
                valueInterdisciplinary: 'Interdisciplinary',
                valueInterdisciplinaryDesc: 'Experts from different fields together',
                valueUX: 'UX Focused',
                valueUXDesc: 'User experience is our priority'
            },
            tr: {
                // Navigation
                navAbout: 'Hakkımızda',
                navTeam: 'Ekibimiz',
                navProjects: 'Projeler',
                navAchievements: 'Başarılar',
                navContact: 'İletişim',
                navVehicle: 'Araç',
                navDesign: 'Tasarım',
                navBlog: 'Geliştirme Süreci',
                navTesting: 'Testler',
                navSponsors: 'Sponsorlar',
                
                // Common
                backToHome: 'Ana Sayfa',
                readMore: 'Devamını Oku',
                learnMore: 'Daha Fazla Bilgi',
                viewDetails: 'Detayları Gör',
                loading: 'Yükleniyor...',
                search: 'Ara',
                searchPlaceholder: 'Sitede ara...',
                noResults: 'Sonuç bulunamadı',
                
                // Homepage
                heroTagline: 'İTÜ Girişimcilik Takımı',
                heroSubtitle: 'Vision • Community • And • Making • Project',
                
                // About
                aboutTitle: 'Hakkımızda',
                aboutIntro: 'ITU VCAMP (Vision, Community and Making Project), İstanbul Teknik Üniversitesi girişimcilik ekosisteminin en aktif topluluklarından biri olan VCAMP çatısı altında oluşturulan proje takımıdır.',
                aboutText: 'Takımımız, farklı mühendislik ve tasarım disiplinlerinden gelen girişimci ruhlu öğrencilerden oluşmaktadır. Amacımız, yenilikçi iş fikirlerini hızlıca valide etmek, prototiplerini geliştirmek ve potansiyel yatırımcılara sunulabilecek seviyeye getirmektir.',
                ourValues: 'Değerlerimiz',
                ourMission: 'Misyonumuz',
                ourVision: 'Vizyonumuz',
                missionText: 'Gerçek problemleri hızlı, kullanıcı odaklı ve sürdürülebilir çözümlerle çözmek. Farklı disiplinlerden gelen girişimci öğrenciler olarak; yenilikçi fikirleri valide edip, prototiplerini geliştirerek, teknolojiyi insanların hayatına dokunan ürünlere dönüştürmeyi amaçlıyoruz.',
                visionText: 'Türkiye\'nin en etkili öğrenci girişim takımı olarak, global ölçekte etki yaratmak. Hedefimiz, İTÜ VCAMP çatısı altında geliştirdiğimiz projeleri yatırım alabilecek seviyeye getirerek, Türkiye\'nin teknoloji girişimciliği ekosistemine öncülük etmek.',
                
                // Stats
                activeMembers: 'Aktif Üye',
                foundedYear: 'Kuruluş Yılı',
                activeProjects: 'Aktif Proje',
                awards: 'Ödül',
                
                // Team
                teamTitle: 'Ekibimiz',
                teamLeader: 'Takım Lideri',
                filterAll: 'Tümü',
                filterDevelopers: 'Geliştiriciler',
                filterDesigners: 'Tasarımcılar',
                filterBusiness: 'İş Geliştirme',
                
                // Projects
                projectsTitle: 'Projelerimiz',
                activeProject: 'Aktif Proje',
                inDevelopment: 'Geliştirme',
                
                // Achievements
                achievementsTitle: 'Başarılarımız',
                pastEvent: 'Geçmiş Etkinlik',
                
                // Contact
                contactTitle: 'İletişim',
                contactSubtitle: 'Projelerimiz, iş birlikleri veya sponsorluk fırsatları hakkında konuşmak için bizimle iletişime geçin.',
                name: 'Ad Soyad',
                email: 'E-posta',
                message: 'Mesaj',
                send: 'Gönder',
                sent: 'Gönderildi!',
                
                // Vehicle
                vehicleTitle: 'SUAS 26 Araç',
                vehicleSubtitle: 'Otonom İnsansız Hava Aracı Sistemi',
                specifications: 'Teknik Özellikler',
                maxFlightTime: 'Maksimum Uçuş Süresi',
                maxSpeed: 'Maksimum Hız',
                weight: 'Ağırlık',
                wingspan: 'Kanat Açıklığı',
                autonomousFlight: 'Otonom Uçuş Yetenekleri',
                cameraSystems: 'Kamera ve Sensör Sistemleri',
                designPhilosophy: 'Tasarım Felsefesi',
                gallery: 'Galeri',
                videos: 'Videolar',
                
                // Design
                designTitle: 'Tasarım Dokümantasyonu',
                designDecisions: 'Tasarım Kararları',
                engineeringWork: 'Mühendislik Çalışmaları',
                cadModels: 'CAD Modelleri',
                systemArchitecture: 'Sistem Mimarisi',
                materialSelection: 'Malzeme Seçimi',
                aerodynamicAnalysis: 'Aerodinamik Analizler',
                
                // Blog
                blogTitle: 'Geliştirme Süreci',
                blogSubtitle: 'Geliştirme sürecimizin tarihsel kayıtları',
                readArticle: 'Makaleyi Oku',
                weeksAgo: 'hafta önce',
                daysAgo: 'gün önce',
                
                // Testing
                testingTitle: 'Testler ve Prosedürler',
                testProcedures: 'Test Prosedürleri',
                testResults: 'Test Sonuçları',
                safetyProtocols: 'Güvenlik Protokolleri',
                calibration: 'Kalibrasyon Süreçleri',
                flightTests: 'Uçuş Test Raporları',
                systemValidation: 'Sistem Validasyonu',
                
                // Sponsors
                sponsorsTitle: 'Sponsorlarımız',
                sponsorsSubtitle: 'Destekleri için sponsorlarımıza teşekkür ederiz',
                platinum: 'Platin',
                gold: 'Altın',
                silver: 'Gümüş',
                bronze: 'Bronz',
                
                // Footer
                footerText: '© 2026 İTÜ VCAMP. Vision • Community • And • Making • Project',
                
                // Values
                valueAI: 'Yapay Zeka',
                valueAIDesc: 'AI destekli uygulamalar geliştiriyoruz',
                valuePrototyping: 'Hızlı Prototipleme',
                valuePrototypingDesc: 'Fikirlerimizi hızla hayata geçiriyoruz',
                valueInterdisciplinary: 'Disiplinler Arası',
                valueInterdisciplinaryDesc: 'Farklı alanlardan uzmanlar bir arada',
                valueUX: 'UX Odaklı',
                valueUXDesc: 'Kullanıcı deneyimi önceliğimiz'
            }
        };
    }

    t(key, defaultValue = '') {
        return this.translations[this.currentLang]?.[key] || defaultValue || key;
    }

    setLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLang = lang;
            this.storeLanguage(lang);
            this.updatePageContent();
            this.updateToggleButton();
        }
    }

    toggleLanguage() {
        const newLang = this.currentLang === 'en' ? 'tr' : 'en';
        this.setLanguage(newLang);
    }

    updatePageContent() {
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.t(key);
            
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else if (element.hasAttribute('data-i18n-html')) {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
        });

        // Update page title
        const titleKey = document.body.getAttribute('data-title-key');
        if (titleKey) {
            document.title = this.t(titleKey) + ' | ITU VCAMP';
        }

        // Update lang attribute
        document.documentElement.lang = this.currentLang;

        // Update search placeholder if search input exists
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.placeholder = this.t('searchPlaceholder');
        }
    }

    setupToggleButton() {
        // Create toggle button if it doesn't exist
        let toggleBtn = document.getElementById('langToggle');
        
        if (!toggleBtn) {
            toggleBtn = document.createElement('button');
            toggleBtn.id = 'langToggle';
            toggleBtn.className = 'lang-toggle';
            toggleBtn.setAttribute('aria-label', 'Toggle language');
            toggleBtn.innerHTML = '<span class="lang-code">EN</span>';
            
            // Insert into page (preferably in header or fixed position)
            const header = document.querySelector('.page-header') || document.querySelector('header') || document.body;
            if (header) {
                header.insertBefore(toggleBtn, header.firstChild);
            } else {
                document.body.insertBefore(toggleBtn, document.body.firstChild);
            }
        }

        toggleBtn.addEventListener('click', () => {
            this.toggleLanguage();
            if (window.audioManager) {
                window.audioManager.playClickSound();
            }
        });

        this.updateToggleButton();
    }

    updateToggleButton() {
        const toggleBtn = document.getElementById('langToggle');
        if (toggleBtn) {
            const langCode = this.currentLang.toUpperCase();
            toggleBtn.querySelector('.lang-code').textContent = langCode;
            toggleBtn.setAttribute('aria-label', `Switch to ${this.currentLang === 'en' ? 'Turkish' : 'English'}`);
        }
    }
}

// Initialize i18n on page load
let i18n;
document.addEventListener('DOMContentLoaded', () => {
    i18n = new I18n();
    window.i18n = i18n; // Make it globally available
});
