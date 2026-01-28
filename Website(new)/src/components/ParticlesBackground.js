import { useEffect } from 'react';

const ParticlesBackground = () => {
  useEffect(() => {
    // Wait for particles.js to load (it's loaded in index.html)
    const initParticles = () => {
      if (!window.particlesJS) return;
      
      try {
        window.particlesJS("particles-js", {
          "particles": {
            "number": {
              "value": 120,
              "density": {
                "enable": true,
                "value_area": 700
              }
            },
            "color": {
              "value": "#ffffff"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              }
            },
            "opacity": {
              "value": 0.5,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 3,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 180,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 6,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 400,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 100,
                "duration": 0.6
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true
        });


        // Stats.js için
        if (window.Stats) {
          try {
            const stats = new window.Stats();
            stats.setMode(0);
            stats.domElement.style.position = 'absolute';
            stats.domElement.style.left = '0px';
            stats.domElement.style.top = '0px';
            document.body.appendChild(stats.domElement);

            const updateStats = function() {
              try {
                stats.begin();
                stats.end();
              } catch (e) {
                // Silent fail for stats
              }
              requestAnimationFrame(updateStats);
            };
            requestAnimationFrame(updateStats);
          } catch (e) {
            // Stats.js başlatılamadı, devam et
          }
        }
      } catch (error) {
        console.error('Particles.js başlatılamadı:', error);
      }
    };

    // Wait for particles.js to be available
    if (window.particlesJS) {
      initParticles();
    } else {
      // Poll for particles.js
      const checkInterval = setInterval(() => {
        if (window.particlesJS) {
          clearInterval(checkInterval);
          initParticles();
        }
      }, 100);

      // Timeout after 5 seconds
      setTimeout(() => {
        clearInterval(checkInterval);
        if (window.particlesJS) {
          initParticles();
        } else {
          console.warn('Particles.js yüklenemedi');
        }
      }, 5000);
    }

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div id="particles-js" className="particles-background"></div>
  );
};

export default ParticlesBackground;
