import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      if (containerRef.current) {
        const motionEls = containerRef.current.querySelectorAll(
          '.gsap-reveal, .gsap-reveal-left, .gsap-reveal-right, .gsap-reveal-stagger > *'
        );
        if (motionEls.length > 0) {
          gsap.set(motionEls, {
            opacity: 1,
            x: 0,
            y: 0,
          });
        }
      }
      return;
    }

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    // GSAP ScrollTrigger Animations safely querying elements
    const ctx = gsap.context(() => {
      if (!containerRef.current) return;

      // 1. Standard Fade & Slide Up Reveal
      const revealEls = containerRef.current.querySelectorAll<HTMLElement>('.gsap-reveal');
      revealEls.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // 2. Slide In From Left Reveal
      const revealLeftEls = containerRef.current.querySelectorAll<HTMLElement>('.gsap-reveal-left');
      revealLeftEls.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 1.1,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // 3. Slide In From Right Reveal
      const revealRightEls = containerRef.current.querySelectorAll<HTMLElement>('.gsap-reveal-right');
      revealRightEls.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: 40 },
          {
            opacity: 1,
            x: 0,
            duration: 1.1,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // 4. Staggered Entrance Reveal for group children
      const staggerEls = containerRef.current.querySelectorAll<HTMLElement>('.gsap-reveal-stagger');
      staggerEls.forEach((parent) => {
        const children = parent.children;
        if (children.length > 0) {
          gsap.fromTo(
            children,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              stagger: 0.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: parent,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      });
    }, containerRef);

    // Clean up
    return () => {
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
      ctx.revert();
    };
  }, []);

  return <div ref={containerRef} className="smooth-scroll-wrapper">{children}</div>;
}
