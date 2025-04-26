"use client";

import { useEffect, useRef } from 'react';

const GlowCard = ({ children, identifier = "glow-card" }) => {
  const containerRef = useRef(null);
  const eventAttachedRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const CONTAINER = containerRef.current;
    if (!CONTAINER || eventAttachedRef.current) return;

    const CONFIG = {
      blur: 0,
      gap: 0,
      spread: 180,
      vertical: false,
    };

    const UPDATE = (event) => {
      if (!event || !CONTAINER) return;

      const CARD = CONTAINER.getBoundingClientRect();
      const CARD_BOUNDS = {
        left: CARD.left,
        top: CARD.top,
        width: CARD.width,
        height: CARD.height,
      };

      const CARD_CENTER = [
        CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5,
        CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5,
      ];

      let ANGLE =
        (Math.atan2(event?.y - CARD_CENTER[1], event?.x - CARD_CENTER[0]) *
          180) /
        Math.PI;

      ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;
      CONTAINER.style.setProperty('--start', ANGLE + 90);
    };

    const RESTYLE = () => {
      if (!CONTAINER) return;
      CONTAINER.style.setProperty('--gap', CONFIG.gap);
      CONTAINER.style.setProperty('--blur', CONFIG.blur);
      CONTAINER.style.setProperty('--spread', CONFIG.spread);
      CONTAINER.style.setProperty(
        '--direction',
        CONFIG.vertical ? 'column' : 'row'
      );
    };

    const handlePointerMove = (e) => {
      if (typeof window === 'undefined') return;
      if (typeof requestAnimationFrame !== 'undefined') {
        requestAnimationFrame(() => UPDATE(e));
      } else {
        UPDATE(e);
      }
    };

    document.body.addEventListener('pointermove', handlePointerMove);
    eventAttachedRef.current = true;
    
    RESTYLE();
    UPDATE({ x: 0, y: 0 });

    return () => {
      if (typeof document !== 'undefined') {
        document.body.removeEventListener('pointermove', handlePointerMove);
        eventAttachedRef.current = false;
      }
    };
  }, [identifier]);

  return (
    <div ref={containerRef} className="glow-card">
      {children}
    </div>
  );
};

export default GlowCard;
