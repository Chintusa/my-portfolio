import React, { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import HeroScene from './HeroScene';

interface ThreeCanvasProps {
  className?: string;
}

export default function ThreeCanvas({ className = "absolute inset-0 -z-10 w-full h-full pointer-events-none" }: ThreeCanvasProps) {
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isInView, setIsInView] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check WebGL support & reduced motion preference
    try {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        setHasWebGL(false);
        return;
      }

      const canvas = document.createElement('canvas');
      const supportsWebGL = !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      );
      setHasWebGL(supportsWebGL);
    } catch {
      setHasWebGL(false);
    }

    // Pause WebGL rendering when scrolled out of view to save battery and CPU/GPU cycles
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  if (!hasWebGL) {
    return (
      <div ref={containerRef} className={`${className} flex items-center justify-center`}>
        {/* Sleek CSS Ambient Fallback for low-power or non-WebGL devices */}
        <div className="relative w-64 h-64 rounded-full bg-gradient-to-tr from-purple-500/10 via-indigo-500/10 to-blue-500/10 blur-2xl border border-white/[0.05] flex items-center justify-center">
          <div className="w-32 h-32 rounded-full border border-purple-400/20 animate-spin" style={{ animationDuration: '20s' }} />
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`${className} overflow-hidden`}>
      <Suspense fallback={
        <div className="absolute inset-0 flex items-center justify-center bg-transparent">
          <div className="flex flex-col items-center gap-2.5">
            <div className="w-8 h-8 rounded-full border-2 border-t-[#d0bcff] border-white/10 animate-spin" />
            <span className="font-mono text-[8px] text-[#cac4d0] tracking-widest uppercase">INITIALIZING ENGINE...</span>
          </div>
        </div>
      }>
        {isInView && (
          <Canvas
            shadows
            gl={{
              antialias: true,
              alpha: true,
              powerPreference: 'high-performance',
              stencil: false,
              depth: true,
            }}
            dpr={[1, 1.5]} // Restrict DPR on high-res displays to optimize GPU
            camera={{
              position: [0, 0, 7.5],
              fov: 48,
              near: 0.1,
              far: 100,
            }}
            className="w-full h-full pointer-events-auto"
          >
            {/* Custom Scene Manager with lighting, controls and geometries */}
            <HeroScene />
            
            {/* Preload assets to avoid frame stutters */}
            <Preload all />
          </Canvas>
        )}
      </Suspense>
    </div>
  );
}
