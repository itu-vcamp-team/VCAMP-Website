import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import gsap from 'gsap';
import './CardSwap.css';

gsap.ticker.lagSmoothing(0);

const Card = forwardRef(({ customClass, ...rest }, ref) => (
  <div
    ref={ref}
    {...rest}
    className={`card ${customClass ?? ''} ${rest.className ?? ''}`.trim()}
  />
));
Card.displayName = 'Card';

/* ---------- helpers ---------- */

const makeSlot = (i, dx, dy, total) => ({
  x: i * dx,
  y: -i * dy,
  z: -i * dx * 1.5,
  zIndex: total - i
});

const placeNow = (el, slot, skew) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: 'center center',
    zIndex: slot.zIndex,
    force3D: true
  });

/* ---------- component ---------- */

const CardSwap = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  skewAmount = 6,
  easing = 'elastic',
  autoPlay = true,
  autoDelay = 3500,
  children
}) => {

  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  /* animation config */
  const config =
    easing === 'elastic'
      ? {
          ease: 'elastic.out(0.7,0.9)',
          durDrop: 1.05,
          durMove: 0.9,
          durReturn: 0.9,
          promoteOverlap: 0.85,
          returnDelay: 0.05
        }
      : {
          ease: 'power2.out',
          durDrop: 0.7,
          durMove: 0.7,
          durReturn: 0.7,
          promoteOverlap: 0.5,
          returnDelay: 0.1
        };

  const childArr = useMemo(() => Children.toArray(children), [children]);
  const refs = useMemo(
    () => childArr.map(() => React.createRef()),
    [childArr.length]
  );

  const order = useRef(Array.from({ length: childArr.length }, (_, i) => i));
  const container = useRef(null);

  const isAnimating = useRef(false);
  const activeTL = useRef(null);
  const lastScrollTime = useRef(0);
  const isPaused = useRef(false);

  /* mobile refs */
  const swapMobileRef = useRef(null);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchLocked = useRef(false);

  const MIN_INTERVAL = 120; // ms
  const TOUCH_THRESHOLD = 40; // px

  /* Check if mobile */
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  /* DESKTOP - ORIGINAL CODE */
  useEffect(() => {
    if (isMobile) return;

    const total = refs.length;

    refs.forEach((r, i) =>
      placeNow(
        r.current,
        makeSlot(i, cardDistance, verticalDistance, total),
        skewAmount
      )
    );

    const swap = direction => {
      const now = performance.now();
      if (now - lastScrollTime.current < MIN_INTERVAL) return;
      lastScrollTime.current = now;

      if (order.current.length < 2 || isAnimating.current) return;

      isAnimating.current = true;

      let active, rest;

      if (direction > 0) {
        // önden → arkaya
        [active, ...rest] = order.current;
      } else {
        // arkadan → öne
        active = order.current[order.current.length - 1];
        rest = order.current.slice(0, -1);
      }

      const elActive = refs[active].current;

      const tl = gsap.timeline({
        onComplete: () => {
          order.current =
            direction > 0 ? [...rest, active] : [active, ...rest];
          isAnimating.current = false;
        }
      });

      activeTL.current = tl;

      /* drop */
      tl.to(elActive, {
        y: '+=450',
        duration: config.durDrop,
        ease: config.ease
      });

      tl.addLabel('promote', `-=${config.durDrop * config.promoteOverlap}`);

      /* shift others */
      rest.forEach((idx, i) => {
        const slotIndex = direction > 0 ? i : i + 1;
        const slot = makeSlot(
          slotIndex,
          cardDistance,
          verticalDistance,
          refs.length
        );

        tl.set(refs[idx].current, { zIndex: slot.zIndex }, 'promote');
        tl.to(
          refs[idx].current,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease
          },
          `promote+=${i * 0.12}`
        );
      });

      /* return active */
      const backSlot =
        direction > 0
          ? makeSlot(
              refs.length - 1,
              cardDistance,
              verticalDistance,
              refs.length
            )
          : makeSlot(0, cardDistance, verticalDistance, refs.length);

      tl.addLabel('return', `promote+=${config.durMove * config.returnDelay}`);
      tl.call(() => {
        gsap.set(elActive, { zIndex: backSlot.zIndex });
      }, null, 'return');

      tl.to(
        elActive,
        {
          x: backSlot.x,
          y: backSlot.y,
          z: backSlot.z,
          duration: config.durReturn,
          ease: config.ease
        },
        'return'
      );
    };

    /* ---------- desktop wheel ---------- */
    const onWheel = e => {
      e.preventDefault();
      swap(e.deltaY > 0 ? 1 : -1);
    };

    /* ---------- mobile touch ---------- */
    const onTouchStart = e => {
      touchStartY.current = e.touches[0].clientY;
      touchLocked.current = false;
    };

    const onTouchMove = e => {
      if (touchLocked.current) return;

      const currentY = e.touches[0].clientY;
      const deltaY = touchStartY.current - currentY;

      if (Math.abs(deltaY) < TOUCH_THRESHOLD) return;

      touchLocked.current = true;
      swap(deltaY > 0 ? 1 : -1);
    };

    const onTouchEnd = () => {
      touchLocked.current = false;
    };

    const node = container.current;

    node.addEventListener('wheel', onWheel, { passive: false });
    node.addEventListener('touchstart', onTouchStart, { passive: true });
    node.addEventListener('touchmove', onTouchMove, { passive: true });
    node.addEventListener('touchend', onTouchEnd);

    return () => {
      node.removeEventListener('wheel', onWheel);
      node.removeEventListener('touchstart', onTouchStart);
      node.removeEventListener('touchmove', onTouchMove);
      node.removeEventListener('touchend', onTouchEnd);
    };
  }, [isMobile, cardDistance, verticalDistance, skewAmount, easing, refs.length, config]);

/* ---------- AUTO PLAY ---------- */
useEffect(() => {
  if (!autoPlay || childArr.length < 2) return;

  const interval = setInterval(() => {
    if (isAnimating.current) return;
    if (isPaused.current) return;

    if (isMobile) {
      swapMobileRef.current?.(1);
    } else {
      const event = new WheelEvent('wheel', { deltaY: 100 });
      container.current.dispatchEvent(event);
    }
  }, autoDelay);

  return () => clearInterval(interval);
}, [autoPlay, autoDelay, isMobile, childArr.length]);



  /* MOBILE - 3 CARD CAROUSEL */
  useEffect(() => {
    if (!isMobile) return;

    const updateMobileCards = () => {
      refs.forEach((r, i) => {
        const el = r.current;
        if (!el) return;

        const offset = i - currentIndex;

        // Sonsuz döngü için wrap around
        let normalizedOffset = offset;
        if (offset > childArr.length / 2) {
          normalizedOffset = offset - childArr.length;
        } else if (offset < -childArr.length / 2) {
          normalizedOffset = offset + childArr.length;
        }

        const absNormalizedOffset = Math.abs(normalizedOffset);

        // Sadece görünür kartları güncelle (performans optimizasyonu)
        if (absNormalizedOffset > 1) {
          // Görünmeyen kartlar - sadece gizle
          if (el.style.visibility !== 'hidden') {
            el.style.visibility = 'hidden';
            el.style.opacity = '0';
          }
        } else {
          // Görünür kartlar
          el.style.visibility = 'visible';
          
          if (normalizedOffset === 0) {
            // Ortadaki ana kart
            el.style.transform = 'translate(-50%, -50%) translate(0px, 0px) scale(1)';
            el.style.opacity = '1';
            el.style.zIndex = '10';
          } else if (normalizedOffset === 1) {
            // Sağdaki kart
            el.style.transform = 'translate(-50%, -50%) translate(200px, 40px) scale(0.8)';
            el.style.opacity = '0.4';
            el.style.zIndex = '5';
          } else if (normalizedOffset === -1) {
            // Soldaki kart
            el.style.transform = 'translate(-50%, -50%) translate(-200px, 40px) scale(0.8)';
            el.style.opacity = '0.4';
            el.style.zIndex = '5';
          }
        }
      });
    };

    // İlk pozisyonlama (GSAP ile)
    refs.forEach((r, i) => {
      const el = r.current;
      if (!el) return;
      
      gsap.set(el, {
        position: 'absolute',
        top: '35%',
        left: '50%',
        xPercent: -50,
        yPercent: -50,
        skewX:0,
        skewY:0,
        rotate:0
      });
    });

    updateMobileCards();

    const swapMobile = (direction) => {
      if (isAnimating.current) return;
      
      isAnimating.current = true;

      const newIndex = (currentIndex + direction + childArr.length) % childArr.length;
      const currentCard = refs[currentIndex].current;
      const nextCard = refs[newIndex].current;

      if (direction > 0) {
        // Sağa kaydırma
        
        // Yeni sağdaki kartı belirle
        const nextRightIndex = (newIndex + 1) % childArr.length;
        const nextRightCard = refs[nextRightIndex].current;
        
        gsap.set(nextRightCard, { 
          visibility: 'visible',
          x: 280, 
          y: 60, 
          scale: 0.7, 
          opacity: 0
        });

        const tl = gsap.timeline({
          onComplete: () => {
            setCurrentIndex(newIndex);
            isAnimating.current = false;
          }
        });

        // Mevcut kart sola - HIZLI
        tl.to(currentCard, {
          x: -200,
          y: 40,
          scale: 0.8,
          opacity: 0.4,
          zIndex: 5,
          duration: 0.35, // 0.45'den 0.35'e
          ease: 'power2.out' // power3.out yerine power2.out (daha hızlı)
        }, 0);

        // Sağdaki kart ortaya - HIZLI
        tl.to(nextCard, {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          zIndex: 10,
          duration: 0.35,
          ease: 'power2.out'
        }, 0);

        // Yeni sağdaki kart - HIZLI
        tl.to(nextRightCard, {
          x: 200,
          y: 40,
          scale: 0.8,
          opacity: 0.4,
          zIndex: 5,
          duration: 0.35,
          ease: 'power2.out'
        }, 0);

        // Eski soldaki kart kaybolsun
        const oldLeftIndex = (currentIndex - 1 + childArr.length) % childArr.length;
        const oldLeftCard = refs[oldLeftIndex].current;
        tl.to(oldLeftCard, {
          opacity: 0,
          duration: 0.2,
          ease: 'power2.out',
          onComplete: () => {
            oldLeftCard.style.visibility = 'hidden';
          }
        }, 0);

      } else {
        // Sola kaydırma
        
        // Yeni soldaki kartı belirle
        const nextLeftIndex = (newIndex - 1 + childArr.length) % childArr.length;
        const nextLeftCard = refs[nextLeftIndex].current;
        
        gsap.set(nextLeftCard, { 
          visibility: 'visible',
          x: -280, 
          y: 60, 
          scale: 0.7, 
          opacity: 0
        });

        const tl = gsap.timeline({
          onComplete: () => {
            setCurrentIndex(newIndex);
            isAnimating.current = false;
          }
        });

        // Mevcut kart sağa - HIZLI
        tl.to(currentCard, {
          x: 200,
          y: 40,
          scale: 0.8,
          opacity: 0.4,
          zIndex: 5,
          duration: 0.35,
          ease: 'power2.out'
        }, 0);

        // Soldaki kart ortaya - HIZLI
        tl.to(nextCard, {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          zIndex: 10,
          duration: 0.35,
          ease: 'power2.out'
        }, 0);

        // Yeni soldaki kart - HIZLI
        tl.to(nextLeftCard, {
          x: -200,
          y: 40,
          scale: 0.8,
          opacity: 0.4,
          zIndex: 5,
          duration: 0.35,
          ease: 'power2.out'
        }, 0);

        // Eski sağdaki kart kaybolsun
        const oldRightIndex = (currentIndex + 1) % childArr.length;
        const oldRightCard = refs[oldRightIndex].current;
        tl.to(oldRightCard, {
          opacity: 0,
          duration: 0.2,
          ease: 'power2.out',
          onComplete: () => {
            oldRightCard.style.visibility = 'hidden';
          }
        }, 0);
      }
    };
    swapMobileRef.current = swapMobile;


    const onTouchStart = e => {
      isPaused.current = false;

      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
      touchLocked.current = false;
    };

    const onTouchMove = e => {
      if (touchLocked.current) return;

      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;
      const deltaX = touchStartX.current - currentX;
      const deltaY = Math.abs(touchStartY.current - currentY);

      if (Math.abs(deltaX) < TOUCH_THRESHOLD) return;
      if (deltaY > Math.abs(deltaX)) return;

      e.preventDefault();
      touchLocked.current = true;

      swapMobile(deltaX > 0 ? 1 : -1);
    };

    const onTouchEnd = () => {
      isPaused.current = false;

      touchLocked.current = false;
    };

    const node = container.current;
    node.addEventListener('touchstart', onTouchStart, { passive: true });
    node.addEventListener('touchmove', onTouchMove, { passive: false });
    node.addEventListener('touchend', onTouchEnd);

    return () => {
      node.removeEventListener('touchstart', onTouchStart);
      node.removeEventListener('touchmove', onTouchMove);
      node.removeEventListener('touchend', onTouchEnd);
    };
  }, [isMobile, currentIndex, childArr.length, refs]);

  const rendered = childArr.map((child, i) =>
    isValidElement(child)
      ? cloneElement(child, {
          key: i,
          ref: refs[i],
          style: { width, height, ...(child.props.style ?? {}) }
        })
      : child
  );

  return (
  <div
  ref={container}
  className={`card-swap-container ${isMobile ? 'mobile' : ''}`}
  style={{ width, height }}
  onMouseEnter={() => (isPaused.current = true)}
  onMouseLeave={() => (isPaused.current = false)}
  onTouchStart={() => (isPaused.current = true)}
  onTouchEnd={() => (isPaused.current = false)}
>

    {rendered}

    {/* Desktop Navigation — left/right edge of front card */}
{!isMobile && (
  <>
    <button
      className="edge-nav-btn edge-nav-prev"
      style={{ top: '42%', left: `calc(50% - ${width/2}px - 12px)` }}
      onClick={() => {
        const event = new WheelEvent('wheel', { deltaY: -100 });
        container.current.dispatchEvent(event);
      }}
    >
      <svg viewBox="0 0 24 24" width="18" height="18">
        <polyline points="15 18 9 12 15 6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
    <button
      className="edge-nav-btn edge-nav-next"
      style={{ top: '42%', right: `calc(50% - ${width/2}px - 12px)` }}
      onClick={() => {
        const event = new WheelEvent('wheel', { deltaY: 100 });
        container.current.dispatchEvent(event);
      }}
    >
      <svg viewBox="0 0 24 24" width="18" height="18">
        <polyline points="9 18 15 12 9 6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  </>
)}

  </div>
);

};

export { Card };
export default CardSwap;