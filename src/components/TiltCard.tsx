import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string; // e.g. "rgba(59,130,246,0.15)"
}

export default function TiltCard({ children, className = '', glowColor = 'var(--accent-glow)' }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowX, setGlowX] = useState(0);
  const [glowY, setGlowY] = useState(0);
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    // Mouse coordinates relative to card element center
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Calculate rotation angles (max 12 degrees)
    const rX = -(mouseY / (height / 2)) * 12;
    const rY = (mouseX / (width / 2)) * 12;

    setRotateX(rX);
    setRotateY(rY);

    // Glow position (relative percentage from top-left)
    const gX = ((e.clientX - rect.left) / width) * 100;
    const gY = ((e.clientY - rect.top) / height) * 100;
    setGlowX(gX);
    setGlowY(gY);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotateX,
        rotateY: rotateY,
        transformPerspective: 1000,
        scale: hovered ? 1.02 : 1,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20, mass: 0.5 }}
      style={{ transformStyle: 'preserve-3d' }}
      className={`relative rounded-2xl theme-card overflow-hidden cursor-pointer transition-all duration-300 hover:border-[var(--accent-primary)] shadow-lg hover:shadow-accent-glow ${className}`}
    >
      {/* Dynamic hover-glow radial gradient tracking the mouse */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          opacity: hovered ? 1 : 0,
          backgroundImage: `radial-gradient(circle 350px at ${glowX}% ${glowY}%, ${glowColor}, transparent 80%)`,
        }}
      />

      {/* Iridescent procedural shimmer reflection */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-700 mix-blend-color-dodge"
        style={{
          opacity: hovered ? 0.22 : 0,
          backgroundImage: `linear-gradient(${45 + rotateY * 3}deg, rgba(59, 130, 246, 0.4) 0%, rgba(139, 92, 246, 0.4) 25%, rgba(236, 72, 153, 0.4) 50%, rgba(45, 212, 191, 0.4) 75%, rgba(59, 130, 246, 0.4) 100%)`,
          backgroundSize: '200% 200%',
          backgroundPosition: `${glowX}% ${glowY}%`,
        }}
      />

      {/* High-end glass reflection shine highlight (Anisotropic simulation) */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-overlay transition-opacity duration-500"
        style={{
          opacity: hovered ? 0.45 : 0,
          backgroundImage: `linear-gradient(${135 + rotateX * 2.5 + rotateY * 2.5}deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.05) 45%, rgba(255, 255, 255, 0) 70%)`,
        }}
      />

      {/* Laser-sharp scanning reflection shimmer sweep */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-overlay transition-all duration-500"
        style={{
          opacity: hovered ? 0.6 : 0,
          backgroundImage: `linear-gradient(${115 + (rotateX + rotateY) * 2}deg, transparent 35%, rgba(255, 255, 255, 0.35) 48%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.35) 52%, transparent 65%)`,
          backgroundSize: '350% 350%',
          backgroundPosition: `${(glowX + glowY) / 2}% ${(glowY + 100 - glowX) / 2}%`,
        }}
      />

      {/* Inner card wrapper that preserves 3D for children */}
      <div style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }} className="h-full">
        {children}
      </div>
    </motion.div>
  );
}
