import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Code, Lightbulb, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function InteractivePhoto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Mouse coordinate state for 3D parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for layered 3D depth
  const springConfig = { stiffness: 100, damping: 18, mass: 0.8 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Layer transforms: deeper movement for foreground cards, softer for portrait
  const glowX = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
  const glowY = useTransform(smoothY, [-0.5, 0.5], [-20, 20]);

  const portraitX = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const portraitY = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);
  const portraitRotateY = useTransform(smoothX, [-0.5, 0.5], [-6, 6]);
  const portraitRotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);

  const card1X = useTransform(smoothX, [-0.5, 0.5], [-25, 25]);
  const card1Y = useTransform(smoothY, [-0.5, 0.5], [-25, 25]);

  const card2X = useTransform(smoothX, [-0.5, 0.5], [-32, 32]);
  const card2Y = useTransform(smoothY, [-0.5, 0.5], [-32, 32]);

  const script1X = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);
  const script1Y = useTransform(smoothY, [-0.5, 0.5], [-15, 15]);

  const script2X = useTransform(smoothX, [-0.5, 0.5], [-22, 22]);
  const script2Y = useTransform(smoothY, [-0.5, 0.5], [-22, 22]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center w-full min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] select-none perspective-1000"
    >
      {/* 1. Theme-Reactive Ambient Glow Rings behind Subject */}
      <motion.div
        style={{
          x: glowX,
          y: glowY,
          background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
        }}
        className="absolute w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] rounded-full blur-[80px] pointer-events-none transition-colors duration-500"
        animate={{
          scale: isHovered ? 1.08 : 1.0,
          opacity: isHovered ? 0.95 : 0.8,
        }}
        transition={{ duration: 0.6 }}
      />

      {/* 2. Concentric Orbit Lines / Geometric Halo Rings */}
      <div
        className="absolute w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full border pointer-events-none animate-[spin_60s_linear_infinite]"
        style={{ borderColor: 'var(--accent-badge-border)' }}
      />
      <div
        className="absolute w-[420px] h-[420px] sm:w-[500px] sm:h-[500px] rounded-full border pointer-events-none"
        style={{ borderColor: 'var(--accent-badge-border)', opacity: 0.5 }}
      />

      {/* Decorative floating diamond particle */}
      <div className="absolute top-10 right-12 text-accent pointer-events-none animate-pulse">
        <Sparkles className="w-5 h-5" />
      </div>

      {/* 3. Main Center Cutout Portrait with 3D Depth */}
      <motion.div
        style={{
          x: portraitX,
          y: portraitY,
          rotateX: portraitRotateX,
          rotateY: portraitRotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative z-10 w-[280px] sm:w-[350px] lg:w-[400px] flex items-center justify-center"
      >
        <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden flex items-end justify-center shadow-2xl border" style={{ borderColor: 'var(--site-card-border)' }}>
          {!imgError ? (
            <img
              src={personalInfo.profileHeroImage || personalInfo.profileImage}
              alt="Jhasaketan Sa - Full Stack Developer"
              loading="eager"
              decoding="async"
              width={400}
              height={500}
              onError={() => setImgError(true)}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter contrast-[1.08] brightness-[0.95] drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full theme-card rounded-[2rem] flex flex-col items-center justify-center p-6">
              <div className="w-24 h-24 rounded-full bg-accent-badge flex items-center justify-center mb-4">
                <span className="font-sans text-3xl font-black text-accent">JS</span>
              </div>
              <span className="text-white font-bold text-lg">Jhasaketan Sa</span>
              <span className="text-accent text-xs mt-1">Full Stack Developer</span>
            </div>
          )}

          {/* Subtle bottom fade gradient */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--site-bg)] via-transparent to-transparent pointer-events-none" />
        </div>
      </motion.div>

      {/* 4. Top-Left Floating Glass Card: "Build Learn Improve Repeat" */}
      <motion.div
        style={{
          x: card1X,
          y: card1Y,
        }}
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: 'easeInOut',
        }}
        className="absolute top-12 sm:top-16 left-0 sm:left-4 z-20 p-3 sm:p-3.5 rounded-2xl theme-card shadow-2xl flex items-start gap-2.5 sm:gap-3"
      >
        <div className="w-8 h-8 rounded-xl bg-accent-badge flex items-center justify-center text-accent flex-shrink-0">
          <Code className="w-4 h-4" />
        </div>
        <div className="flex flex-col text-[11px] sm:text-xs font-semibold leading-tight">
          <span className="font-bold">Build</span>
          <span className="text-slate-400">Learn</span>
          <span className="text-slate-400">Improve</span>
          <span className="text-accent font-bold">Repeat</span>
        </div>
      </motion.div>

      {/* 5. Top-Right Floating Glass Card: "Turning Ideas into Reality" */}
      <motion.div
        style={{
          x: card2X,
          y: card2Y,
        }}
        animate={{
          y: [0, 7, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5.5,
          ease: 'easeInOut',
          delay: 0.5,
        }}
        className="absolute top-16 sm:top-20 right-0 sm:right-4 z-20 p-3 sm:p-3.5 rounded-2xl theme-card shadow-2xl flex items-start gap-2.5 sm:gap-3"
      >
        <div className="w-8 h-8 rounded-xl bg-accent-badge flex items-center justify-center text-accent flex-shrink-0">
          <Lightbulb className="w-4 h-4" />
        </div>
        <div className="flex flex-col text-[11px] sm:text-xs font-semibold leading-tight">
          <span className="text-slate-400">Turning</span>
          <span className="font-bold">Ideas into</span>
          <span className="text-accent font-bold">Reality</span>
        </div>
      </motion.div>

      {/* 6. Handwritten Cursive Quote: "Better Code. Brighter Future" */}
      <motion.div
        style={{
          x: script1X,
          y: script1Y,
        }}
        className="absolute right-6 sm:right-16 bottom-20 sm:bottom-28 z-20 pointer-events-none"
      >
        <div className="font-handwritten text-xl sm:text-2xl text-slate-200/90 leading-snug tracking-wide rotate-[-3deg] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          <p className="block">Better</p>
          <p className="block font-bold">Code</p>
          <p className="block">Brighter</p>
          <p className="block text-accent font-bold">Future</p>
        </div>
      </motion.div>

      {/* 7. Handwritten Cursive Quote (Far Right Accent): "Good Code Better Tomorrow" */}
      <motion.div
        style={{
          x: script2X,
          y: script2Y,
        }}
        className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none hidden xl:block"
      >
        <div className="font-handwritten text-xl sm:text-2xl text-slate-400/80 leading-snug tracking-wide rotate-[6deg] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          <p className="block">Good</p>
          <p className="block">Code</p>
          <p className="block">Better</p>
          <p className="block text-accent font-bold">Tomorrow</p>
        </div>
      </motion.div>
    </div>
  );
}
