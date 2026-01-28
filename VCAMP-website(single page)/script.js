/**
 * ITU VCAMP - Interactive Website
 * Immersive Experience Design
 */

// ============================================
// Audio Manager - Modern Mechanical Keyboard Sounds
// ============================================
class AudioManager {
    constructor() {
        this.bgMusic = document.getElementById('bgMusic');
        this.soundToggle = document.getElementById('soundToggle');
        this.isPlaying = true; // Start with sound enabled
        this.audioContext = null;
        this.soundEnabled = true;

        this.init();
    }

    init() {
        this.initAudioContext();

        if (this.soundToggle) {
            this.soundToggle.addEventListener('click', () => this.toggleSound());
            // Start with sound on
            this.soundToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
            this.soundToggle.classList.add('playing');
        }
    }

    initAudioContext() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.log('AudioContext not supported');
        }
    }

    resumeAudio() {
        if (this.audioContext && this.audioContext.state === 'suspended') {
            this.audioContext.resume();
        }
    }

    toggleSound() {
        this.soundEnabled = !this.soundEnabled;
        if (this.soundEnabled) {
            this.soundToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
            this.soundToggle.classList.add('playing');
        } else {
            this.soundToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
            this.soundToggle.classList.remove('playing');
        }
    }

    // Modern mechanical keyboard click - professional and crisp
    playKeyboardSound() {
        if (!this.audioContext || !this.soundEnabled) return;
        this.resumeAudio();

        const time = this.audioContext.currentTime;

        // Create crisp click with subtle overtones
        const osc = this.audioContext.createOscillator();
        const osc2 = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        const gain2 = this.audioContext.createGain();
        const filter = this.audioContext.createBiquadFilter();

        osc.connect(filter);
        osc2.connect(gain2);
        filter.connect(gain);
        gain.connect(this.audioContext.destination);
        gain2.connect(this.audioContext.destination);

        // Main click - quick sine burst
        osc.type = 'sine';
        osc.frequency.setValueAtTime(3500, time);
        osc.frequency.exponentialRampToValueAtTime(1200, time + 0.015);

        // Subtle harmonic
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(2000 + Math.random() * 500, time);
        osc2.frequency.exponentialRampToValueAtTime(600, time + 0.02);

        // Highpass for crispness
        filter.type = 'highpass';
        filter.frequency.setValueAtTime(800, time);

        // Very short envelope - snappy
        gain.gain.setValueAtTime(0, time);
        gain.gain.linearRampToValueAtTime(0.03, time + 0.001);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.04);

        gain2.gain.setValueAtTime(0, time);
        gain2.gain.linearRampToValueAtTime(0.015, time + 0.002);
        gain2.gain.exponentialRampToValueAtTime(0.001, time + 0.03);

        osc.start(time);
        osc2.start(time);
        osc.stop(time + 0.05);
        osc2.stop(time + 0.04);
    }

    // Subtle resonant tone for main letters (V, C, A, M, P)
    playMainLetterSound(index) {
        if (!this.audioContext || !this.soundEnabled) return;
        this.resumeAudio();

        const time = this.audioContext.currentTime;
        // Lower, warmer notes for main letters
        const frequencies = [220, 261.63, 293.66, 349.23, 392]; // A3, C4, D4, F4, G4
        const freq = frequencies[index] || 293.66;

        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        const filter = this.audioContext.createBiquadFilter();

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.audioContext.destination);

        // Warm sine wave
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, time);

        // Low-pass filter for warmth
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1500, time);
        filter.frequency.exponentialRampToValueAtTime(500, time + 0.2);
        filter.Q.setValueAtTime(1, time);

        // Smooth envelope
        gain.gain.setValueAtTime(0, time);
        gain.gain.linearRampToValueAtTime(0.05, time + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.3);

        osc.start(time);
        osc.stop(time + 0.35);
    }

    // Soft whoosh for logo reveal
    playWhooshSound() {
        if (!this.audioContext || !this.soundEnabled) return;
        this.resumeAudio();

        const time = this.audioContext.currentTime;

        // Create filtered noise for airy whoosh
        const bufferSize = this.audioContext.sampleRate * 1.2;
        const noiseBuffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            output[i] = Math.random() * 2 - 1;
        }

        const noise = this.audioContext.createBufferSource();
        const filter = this.audioContext.createBiquadFilter();
        const gain = this.audioContext.createGain();

        noise.buffer = noiseBuffer;
        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.audioContext.destination);

        // Gentle bandpass sweep
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(200, time);
        filter.frequency.exponentialRampToValueAtTime(1500, time + 0.4);
        filter.frequency.exponentialRampToValueAtTime(400, time + 1.0);
        filter.Q.setValueAtTime(2, time);

        // Soft fade in/out
        gain.gain.setValueAtTime(0, time);
        gain.gain.linearRampToValueAtTime(0.04, time + 0.2);
        gain.gain.setValueAtTime(0.04, time + 0.5);
        gain.gain.linearRampToValueAtTime(0, time + 1.2);

        noise.start(time);
        noise.stop(time + 1.2);
    }

    // Modern click sound for navigation
    playClickSound() {
        if (!this.audioContext || !this.soundEnabled) return;
        this.resumeAudio();

        const time = this.audioContext.currentTime;

        // Dual oscillator for rich click
        const osc = this.audioContext.createOscillator();
        const osc2 = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        const gain2 = this.audioContext.createGain();
        const filter = this.audioContext.createBiquadFilter();

        osc.connect(filter);
        osc2.connect(gain2);
        filter.connect(gain);
        gain.connect(this.audioContext.destination);
        gain2.connect(this.audioContext.destination);

        // Deep satisfying click
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1800, time);
        osc.frequency.exponentialRampToValueAtTime(600, time + 0.03);

        // High frequency accent
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(4000, time);
        osc2.frequency.exponentialRampToValueAtTime(1500, time + 0.02);

        // Bandpass for warmth
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(1200, time);
        filter.Q.setValueAtTime(1, time);

        // Punchy envelope
        gain.gain.setValueAtTime(0, time);
        gain.gain.linearRampToValueAtTime(0.08, time + 0.002);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.08);

        gain2.gain.setValueAtTime(0, time);
        gain2.gain.linearRampToValueAtTime(0.03, time + 0.001);
        gain2.gain.exponentialRampToValueAtTime(0.001, time + 0.04);

        osc.start(time);
        osc2.start(time);
        osc.stop(time + 0.1);
        osc2.stop(time + 0.05);
    }
}

// ============================================
// Target Cursor - Element Framing Style
// ============================================
class TargetCursor {
    constructor(options = {}) {
        this.cursor = document.getElementById('targetCursor');
        this.dot = this.cursor?.querySelector('.target-cursor-dot');
        this.corners = this.cursor?.querySelectorAll('.target-cursor-corner');

        this.spinDuration = options.spinDuration || 2;
        this.parallaxOn = options.parallaxOn !== false;
        this.hoverDuration = options.hoverDuration || 0.2;

        this.mouseX = window.innerWidth / 2;
        this.mouseY = window.innerHeight / 2;
        this.cursorX = this.mouseX;
        this.cursorY = this.mouseY;

        this.activeTarget = null;
        this.isTargeting = false;
        this.cornerSize = 12;
        this.borderWidth = 3;

        // Default corner positions (relative to cursor center)
        this.defaultCornerPositions = [
            { x: -this.cornerSize * 1.5, y: -this.cornerSize * 1.5 }, // TL
            { x: this.cornerSize * 0.5, y: -this.cornerSize * 1.5 },  // TR
            { x: this.cornerSize * 0.5, y: this.cornerSize * 0.5 },   // BR
            { x: -this.cornerSize * 1.5, y: this.cornerSize * 0.5 }   // BL
        ];

        this.init();
    }

    init() {
        if (!this.cursor) return;

        // Set initial position
        this.cursor.style.left = this.cursorX + 'px';
        this.cursor.style.top = this.cursorY + 'px';

        // Track mouse position
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        });

        // Mouse down/up for click effect
        document.addEventListener('mousedown', () => {
            this.cursor.classList.add('clicking');
        });

        document.addEventListener('mouseup', () => {
            this.cursor.classList.remove('clicking');
        });

        // Animate cursor
        this.animate();

        // Setup hover targets
        this.setupTargets();
        setTimeout(() => this.setupTargets(), 3000);
        setTimeout(() => this.setupTargets(), 6000);
    }

    animate() {
        // Smooth following with easing
        const ease = this.parallaxOn ? 0.1 : 0.5;

        this.cursorX += (this.mouseX - this.cursorX) * ease;
        this.cursorY += (this.mouseY - this.cursorY) * ease;

        this.cursor.style.left = this.cursorX + 'px';
        this.cursor.style.top = this.cursorY + 'px';

        // Update corner positions if targeting an element
        if (this.isTargeting && this.activeTarget) {
            this.updateCornerPositions();
        }

        requestAnimationFrame(() => this.animate());
    }

    setupTargets() {
        const targets = document.querySelectorAll('a, button, .cursor-target, .letter-row, .hero-nav-link, .nav-link');

        targets.forEach(target => {
            // Remove old listeners to prevent duplicates
            target.removeEventListener('mouseenter', target._cursorEnter);
            target.removeEventListener('mouseleave', target._cursorLeave);

            target._cursorEnter = () => this.onTargetEnter(target);
            target._cursorLeave = () => this.onTargetLeave();

            target.addEventListener('mouseenter', target._cursorEnter);
            target.addEventListener('mouseleave', target._cursorLeave);
        });
    }

    onTargetEnter(target) {
        this.activeTarget = target;
        this.isTargeting = true;

        // Stop spinning, start targeting
        this.cursor.classList.remove('spinning');
        this.cursor.classList.add('targeting');

        // Calculate target corners
        this.updateCornerPositions();
    }

    onTargetLeave() {
        this.isTargeting = false;
        this.activeTarget = null;

        // Reset corners to default positions
        this.resetCorners();

        // Resume spinning after a short delay
        setTimeout(() => {
            if (!this.isTargeting) {
                this.cursor.classList.remove('targeting');
                this.cursor.classList.add('spinning');
            }
        }, 50);
    }

    updateCornerPositions() {
        if (!this.activeTarget || !this.corners) return;

        const rect = this.activeTarget.getBoundingClientRect();

        // Calculate corner positions relative to cursor
        const positions = [
            { x: rect.left - this.borderWidth - this.cursorX, y: rect.top - this.borderWidth - this.cursorY },
            { x: rect.right + this.borderWidth - this.cornerSize - this.cursorX, y: rect.top - this.borderWidth - this.cursorY },
            { x: rect.right + this.borderWidth - this.cornerSize - this.cursorX, y: rect.bottom + this.borderWidth - this.cornerSize - this.cursorY },
            { x: rect.left - this.borderWidth - this.cursorX, y: rect.bottom + this.borderWidth - this.cornerSize - this.cursorY }
        ];

        this.corners.forEach((corner, i) => {
            corner.style.transform = `translate(${positions[i].x}px, ${positions[i].y}px)`;
        });
    }

    resetCorners() {
        if (!this.corners) return;

        const transforms = [
            'translate(-150%, -150%)',
            'translate(50%, -150%)',
            'translate(50%, 50%)',
            'translate(-150%, 50%)'
        ];

        this.corners.forEach((corner, i) => {
            corner.style.transform = transforms[i];
        });
    }
}

// ============================================
// Logo Splash Animation - Only on first visit
// ============================================
class LogoSplash {
    constructor(onComplete) {
        this.splash = document.getElementById('logoSplash');
        this.logo = document.getElementById('splashLogo');
        this.onComplete = onComplete;
        this.audioManager = window.audioManager;

        this.init();
    }

    init() {
        if (!this.splash || !this.logo) {
            this.onComplete && this.onComplete();
            return;
        }

        // Check if user has visited before in this session
        const hasVisited = sessionStorage.getItem('vcampVisited');

        if (hasVisited) {
            // Skip animation - immediately show content
            this.splash.classList.add('logo-positioned');
            this.logo.style.animation = 'none';
            this.logo.style.opacity = '1';
            this.logo.style.transform = 'scale(0.8)';

            // Immediately trigger completion
            setTimeout(() => {
                this.onComplete && this.onComplete();
            }, 100);
            return;
        }

        // First visit - show full animation
        sessionStorage.setItem('vcampVisited', 'true');

        // Start whoosh sound
        setTimeout(() => {
            if (this.audioManager) {
                this.audioManager.playWhooshSound();
            }
        }, 300);

        // Logo pulse animation
        setTimeout(() => {
            this.logo.classList.add('animating');
        }, 1800);

        // Stop pulse, logo stays visible
        setTimeout(() => {
            this.logo.classList.remove('animating');
            this.splash.classList.add('logo-positioned');

            // Call completion callback after logo moves
            setTimeout(() => {
                this.onComplete && this.onComplete();
            }, 800);
        }, 3200);
    }
}

// ============================================
// Hero Animation - VCAMP with Keyboard Sound Effect
// ============================================
class HeroAnimation {
    constructor() {
        this.letterRows = document.querySelectorAll('.letter-row');
        this.heroNav = document.getElementById('heroNav');
        this.tagline = document.querySelector('.tagline');
        this.vcampContainer = document.querySelector('.vcamp-container');
        this.audioManager = window.audioManager;

        this.init();
    }

    init() {
        // Initially hide VCAMP container
        if (this.vcampContainer) {
            this.vcampContainer.style.opacity = '0';
        }

        this.createParticles();
    }

    startAnimation() {
        // Show VCAMP container
        if (this.vcampContainer) {
            this.vcampContainer.style.opacity = '1';
            this.vcampContainer.style.transition = 'opacity 0.8s ease';
        }

        // Animate each letter row with SLOWER staggered timing
        this.letterRows.forEach((row, rowIndex) => {
            // Slower: 600ms between each row instead of 350ms
            const rowDelay = 400 + rowIndex * 600;

            setTimeout(() => {
                row.classList.add('visible');

                // Play main letter sound
                if (this.audioManager) {
                    this.audioManager.playMainLetterSound(rowIndex);
                }

                // Play keyboard sounds for expansion letters (slower)
                const expansionLetters = row.querySelectorAll('.expansion-horizontal span');
                expansionLetters.forEach((letter, letterIndex) => {
                    // Slower: 120ms between each letter instead of 70ms
                    const soundDelay = 400 + letterIndex * 120;

                    setTimeout(() => {
                        if (this.audioManager) {
                            this.audioManager.playKeyboardSound();
                        }
                    }, soundDelay);
                });
            }, rowDelay);
        });

        // Show tagline (adjusted for slower animation)
        const taglineDelay = 400 + (this.letterRows.length * 600) + 800;
        setTimeout(() => {
            if (this.tagline) {
                this.tagline.classList.add('visible');
            }
        }, taglineDelay);

        // Show navigation with elegant delay
        const navDelay = taglineDelay + 600;
        setTimeout(() => {
            if (this.heroNav) {
                this.heroNav.classList.add('visible');
            }
        }, navDelay);
    }

    createParticles() {
        const container = document.getElementById('particles');
        if (!container) return;

        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 20 + 's';
            particle.style.animationDuration = (25 + Math.random() * 15) + 's';
            container.appendChild(particle);
        }
    }
}

// ============================================
// Initialize Experience
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize audio manager globally
    window.audioManager = new AudioManager();

    // Initialize Target Cursor
    new TargetCursor({
        parallaxOn: true,
        hoverDuration: 0.15
    });

    // Initialize hero animation (but don't start yet)
    const heroAnimation = new HeroAnimation();

    // Start with logo splash, then animate VCAMP
    new LogoSplash(() => {
        // After logo splash completes, start VCAMP animation
        heroAnimation.startAnimation();
    });

    // Add click sounds to interactive elements
    document.querySelectorAll('.hero-nav-link, .back-button, #soundToggle, a, button').forEach(el => {
        el.addEventListener('click', () => {
            if (window.audioManager) {
                window.audioManager.playClickSound();
            }
        });
    });
});

// Enable audio on first user interaction (browser requirement)
document.addEventListener('click', () => {
    if (window.audioManager && window.audioManager.audioContext) {
        window.audioManager.audioContext.resume();
    }
}, { once: true });

// Also enable on touch for mobile
document.addEventListener('touchstart', () => {
    if (window.audioManager && window.audioManager.audioContext) {
        window.audioManager.audioContext.resume();
    }
}, { once: true });
