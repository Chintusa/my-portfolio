import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Moon, Sun, Sparkles, ArrowRight, Code2, Palette } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export type ThemeMode = 'midnight' | 'purple' | 'emerald' | 'amber' | 'light';

export interface ThemeOption {
  id: ThemeMode;
  label: string;
  className: string;
  color: string;
  icon: typeof Moon;
  variables: Record<string, string>;
}

export const THEME_CONFIGS: Record<ThemeMode, ThemeOption> = {
  midnight: {
    id: 'midnight',
    label: 'Neon Blue',
    className: 'theme-blue',
    color: '#3b82f6',
    icon: Moon,
    variables: {
      '--site-bg': '#030712',
      '--site-card-bg': 'rgba(15, 23, 42, 0.7)',
      '--site-card-border': 'rgba(148, 163, 184, 0.12)',
      '--site-card-hover': 'rgba(15, 23, 42, 0.9)',
      '--text-main': '#f8fafc',
      '--text-muted': '#94a3b8',
      '--text-subtle': '#64748b',
      '--accent-primary': '#3b82f6',
      '--accent-secondary': '#6366f1',
      '--accent-tertiary': '#8b5cf6',
      '--accent-gradient': 'linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%)',
      '--accent-glow': 'rgba(59, 130, 246, 0.35)',
      '--accent-badge-bg': 'rgba(59, 130, 246, 0.12)',
      '--accent-badge-border': 'rgba(59, 130, 246, 0.35)',
      '--accent-shadow': '0 4px 20px rgba(59, 130, 246, 0.35)',
    },
  },
  purple: {
    id: 'purple',
    label: 'Cyber Violet',
    className: 'theme-purple',
    color: '#a855f7',
    icon: Sparkles,
    variables: {
      '--site-bg': '#090314',
      '--site-card-bg': 'rgba(28, 12, 50, 0.7)',
      '--site-card-border': 'rgba(168, 85, 247, 0.2)',
      '--site-card-hover': 'rgba(38, 16, 68, 0.9)',
      '--text-main': '#faf5ff',
      '--text-muted': '#d8b4fe',
      '--text-subtle': '#a855f7',
      '--accent-primary': '#a855f7',
      '--accent-secondary': '#c084fc',
      '--accent-tertiary': '#ec4899',
      '--accent-gradient': 'linear-gradient(135deg, #a855f7 0%, #c084fc 50%, #ec4899 100%)',
      '--accent-glow': 'rgba(168, 85, 247, 0.45)',
      '--accent-badge-bg': 'rgba(168, 85, 247, 0.15)',
      '--accent-badge-border': 'rgba(168, 85, 247, 0.45)',
      '--accent-shadow': '0 4px 20px rgba(168, 85, 247, 0.45)',
    },
  },
  emerald: {
    id: 'emerald',
    label: 'Matrix Green',
    className: 'theme-emerald',
    color: '#10b981',
    icon: Sparkles,
    variables: {
      '--site-bg': '#01130a',
      '--site-card-bg': 'rgba(4, 38, 22, 0.7)',
      '--site-card-border': 'rgba(16, 185, 129, 0.22)',
      '--site-card-hover': 'rgba(6, 52, 30, 0.9)',
      '--text-main': '#ecfdf5',
      '--text-muted': '#6ee7b7',
      '--text-subtle': '#10b981',
      '--accent-primary': '#10b981',
      '--accent-secondary': '#059669',
      '--accent-tertiary': '#06b6d4',
      '--accent-gradient': 'linear-gradient(135deg, #10b981 0%, #059669 50%, #06b6d4 100%)',
      '--accent-glow': 'rgba(16, 185, 129, 0.45)',
      '--accent-badge-bg': 'rgba(16, 185, 129, 0.15)',
      '--accent-badge-border': 'rgba(16, 185, 129, 0.45)',
      '--accent-shadow': '0 4px 20px rgba(16, 185, 129, 0.45)',
    },
  },
  amber: {
    id: 'amber',
    label: 'Sunset Gold',
    className: 'theme-amber',
    color: '#f59e0b',
    icon: Palette,
    variables: {
      '--site-bg': '#140a02',
      '--site-card-bg': 'rgba(44, 21, 6, 0.7)',
      '--site-card-border': 'rgba(245, 158, 11, 0.22)',
      '--site-card-hover': 'rgba(60, 29, 8, 0.9)',
      '--text-main': '#fffbeb',
      '--text-muted': '#fde68a',
      '--text-subtle': '#f59e0b',
      '--accent-primary': '#f59e0b',
      '--accent-secondary': '#ea580c',
      '--accent-tertiary': '#ef4444',
      '--accent-gradient': 'linear-gradient(135deg, #f59e0b 0%, #ea580c 50%, #ef4444 100%)',
      '--accent-glow': 'rgba(245, 158, 11, 0.45)',
      '--accent-badge-bg': 'rgba(245, 158, 11, 0.15)',
      '--accent-badge-border': 'rgba(245, 158, 11, 0.45)',
      '--accent-shadow': '0 4px 20px rgba(245, 158, 11, 0.45)',
    },
  },
  light: {
    id: 'light',
    label: 'Light Mode',
    className: 'light',
    color: '#2563eb',
    icon: Sun,
    variables: {
      '--site-bg': '#f8fafc',
      '--site-card-bg': 'rgba(255, 255, 255, 0.92)',
      '--site-card-border': 'rgba(203, 213, 225, 0.85)',
      '--site-card-hover': 'rgba(241, 245, 249, 0.98)',
      '--text-main': '#0f172a',
      '--text-muted': '#334155',
      '--text-subtle': '#64748b',
      '--accent-primary': '#2563eb',
      '--accent-secondary': '#4f46e5',
      '--accent-tertiary': '#7c3aed',
      '--accent-gradient': 'linear-gradient(135deg, #2563eb 0%, #4f46e5 50%, #7c3aed 100%)',
      '--accent-glow': 'rgba(37, 99, 235, 0.22)',
      '--accent-badge-bg': 'rgba(37, 99, 235, 0.08)',
      '--accent-badge-border': 'rgba(37, 99, 235, 0.35)',
      '--accent-shadow': '0 4px 20px rgba(37, 99, 235, 0.25)',
    },
  },
};

const themeOrder: ThemeMode[] = ['midnight', 'purple', 'emerald', 'amber', 'light'];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentTheme, setCurrentTheme] = useState<ThemeMode>('midnight');
  const [themeToast, setThemeToast] = useState<string | null>(null);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('portfolio-theme') as ThemeMode;
      if (savedTheme && THEME_CONFIGS[savedTheme]) {
        applyTheme(savedTheme);
      } else {
        applyTheme('midnight');
      }
    } catch {
      applyTheme('midnight');
    }
  }, []);

  const applyTheme = (themeId: ThemeMode) => {
    const validId = THEME_CONFIGS[themeId] ? themeId : 'midnight';
    const config = THEME_CONFIGS[validId];

    setCurrentTheme(validId);
    try {
      localStorage.setItem('portfolio-theme', validId);
    } catch (_) {}

    const root = document.documentElement;
    root.classList.remove('theme-blue', 'theme-purple', 'theme-emerald', 'theme-amber', 'light', 'dark');
    root.setAttribute('data-theme', validId);

    if (validId === 'light') {
      root.classList.add('light');
    } else {
      root.classList.add('dark', config.className);
    }

    // Set all CSS variables directly onto document.documentElement style object for instant reactivity
    Object.entries(config.variables).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });
  };

  const cycleNextTheme = () => {
    const currentIndex = themeOrder.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themeOrder.length;
    const nextThemeId = themeOrder[nextIndex];
    const nextTheme = THEME_CONFIGS[nextThemeId];

    applyTheme(nextThemeId);

    // Show feedback toast
    setThemeToast(`Theme: ${nextTheme.label}`);
    setTimeout(() => setThemeToast(null), 2000);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(scrollY / totalHeight);
      }

      // Determine active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1));
      let currentSection = 'home';

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setMobileMenuOpen(false);
    }
  };

  const currentThemeObj = THEME_CONFIGS[currentTheme] || THEME_CONFIGS.midnight;
  const ThemeIcon = currentThemeObj.icon;

  return (
    <>
      {/* Dynamic Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[2.5px] z-[100] bg-white/[0.04]">
        <motion.div
          className="h-full shadow-accent-glow"
          style={{
            scaleX: scrollProgress,
            transformOrigin: '0%',
            background: 'var(--accent-gradient)',
          }}
        />
      </div>

      {/* Floating Modern Header */}
      <div className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 sm:px-6 py-3 sm:py-4 pointer-events-none">
        <motion.header
          id="site-header"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`w-full max-w-6xl pointer-events-auto rounded-full theme-card transition-all duration-500 px-4 sm:px-6 py-2.5 sm:py-3 shadow-2xl ${
            scrolled ? 'backdrop-blur-2xl shadow-xl' : 'backdrop-blur-lg'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Brand Logo: </> Jhasaketan */}
            <a
              href="#home"
              className="group flex items-center gap-2 relative cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="flex items-center gap-1.5 text-accent transition-colors">
                <Code2 className="w-5 h-5 text-accent group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-sans font-bold tracking-tight text-base sm:text-lg text-[var(--text-main)]">
                  Jhasaketan
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`relative px-3.5 py-1.5 rounded-full font-sans text-xs lg:text-[13px] font-medium tracking-wide transition-all duration-300 ${
                      isActive
                        ? 'text-accent font-semibold'
                        : 'opacity-70 hover:opacity-100 hover:text-accent'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-header-indicator"
                        className="absolute inset-0 bg-accent-badge border border-accent-badge rounded-full z-0 shadow-accent-glow"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </a>
                );
              })}
            </nav>

            {/* Right Action: Interactive Theme Selector Button + Let's Connect CTA */}
            <div className="flex items-center gap-3 relative">
              {/* Theme switcher toast notification */}
              <AnimatePresence>
                {themeToast && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full theme-card text-[11px] font-mono shadow-2xl pointer-events-none z-50 flex items-center gap-2 border border-accent-badge"
                  >
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: currentThemeObj.color }} />
                    <span className="text-[var(--text-main)] font-semibold">{themeToast}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Theme switcher toggle button */}
              <button
                type="button"
                onClick={cycleNextTheme}
                title={`Current Theme: ${currentThemeObj.label}. Click to switch theme.`}
                aria-label={`Switch Theme from ${currentThemeObj.label}`}
                className="group relative w-9 h-9 rounded-full flex items-center justify-center theme-card hover:border-[var(--accent-primary)] hover:scale-105 active:scale-95 transition-all shadow-sm"
              >
                <motion.div
                  key={currentTheme}
                  initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <ThemeIcon className="w-4 h-4 text-accent" />
                </motion.div>
              </button>

              {/* Let's Connect Button */}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-accent-gradient text-white text-xs sm:text-[13px] font-semibold transition-all duration-300 shadow-accent-glow hover:scale-[1.02] active:scale-[0.98]"
              >
                Let's Connect
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-xl theme-card hover:border-[var(--accent-primary)] transition-all"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-4 h-4 text-accent" /> : <Menu className="w-4 h-4 text-accent" />}
              </button>
            </div>
          </div>
        </motion.header>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden flex flex-col justify-start px-4 pt-20 pointer-events-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md pointer-events-auto"
            />

            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full p-5 theme-card border border-[var(--site-card-border)] rounded-3xl shadow-2xl pointer-events-auto flex flex-col gap-3"
            >
              <div className="flex flex-col gap-1.5">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.03 }}
                      className={`flex items-center justify-between p-3 rounded-2xl transition-all duration-300 ${
                        isActive
                          ? 'bg-accent-badge border border-accent-badge text-accent font-semibold'
                          : 'opacity-80 hover:opacity-100 hover:bg-white/[0.04]'
                      }`}
                    >
                      <span className="font-sans text-sm tracking-wide">{item.label}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-60 text-accent" />
                    </motion.a>
                  );
                })}

                <div className="flex items-center justify-between px-3 py-2 mt-2 border-t border-[var(--site-card-border)]">
                  <span className="text-xs opacity-70">Current Theme</span>
                  <button
                    onClick={cycleNextTheme}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full theme-card text-xs text-accent border border-accent-badge font-semibold"
                  >
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: currentThemeObj.color }} />
                    {currentThemeObj.label}
                  </button>
                </div>

                <motion.a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.03 }}
                  className="mt-2 text-center py-3 rounded-full bg-accent-gradient text-white font-sans font-semibold text-xs transition-all shadow-accent-glow flex items-center justify-center gap-1.5"
                >
                  Let's Connect
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
