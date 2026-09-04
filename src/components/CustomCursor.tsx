import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [magneticElement, setMagneticElement] = useState<HTMLElement | null>(null);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (isTouchDevice || prefersReducedMotion) {
      setHidden(true);
      return;
    }

    setHidden(false);

    const handleMouseMove = (e: MouseEvent) => {
      if (magneticElement) {
        const rect = magneticElement.getBoundingClientRect();
        // Calculate center of element
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        // Lerp towards the center slightly (magnetic attraction)
        const targetX = centerX + (e.clientX - centerX) * 0.25;
        const targetY = centerY + (e.clientY - centerY) * 0.25;
        cursorX.set(targetX);
        cursorY.set(targetY);
      } else {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      }
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('[data-hover-glow]') ||
        target.classList.contains('cursor-pointer');

      const magnetic = target.closest('[data-magnetic]');

      if (isInteractive) {
        setLinkHovered(true);
      } else {
        setLinkHovered(false);
      }

      if (magnetic) {
        setMagneticElement(magnetic as HTMLElement);
      } else {
        setMagneticElement(null);
      }
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    const handleMouseEnter = () => {
      setHidden(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [magneticElement, cursorX, cursorY]);

  if (hidden) return null;

  return (
    <>
      {/* Outer Follower */}
      <motion.div
        id="custom-cursor-follower"
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-neutral-400 dark:border-neutral-500 pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: clicked ? 0.8 : linkHovered ? 1.8 : 1,
          backgroundColor: linkHovered ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0)',
          borderColor: linkHovered ? 'rgba(255, 255, 255, 0.8)' : clicked ? 'rgba(255, 255, 255, 0.6)' : 'rgba(255, 255, 255, 0.4)',
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 20 }}
      />
      {/* Inner Dot */}
      <motion.div
        ref={dotRef}
        id="custom-cursor-dot"
        className="fixed top-0 left-0 w-2 h-2 bg-neutral-900 dark:bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: clicked ? 1.2 : linkHovered ? 0.3 : 1,
        }}
      />
    </>
  );
}
