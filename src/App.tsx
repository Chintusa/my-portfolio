import React, { useState } from 'react';
import Header from './components/Header';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';
import TiltCard from './components/TiltCard';
import InteractivePhoto from './components/InteractivePhoto';
import { getTechIcon } from './components/TechIcons';
import SEO from './components/SEO';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  Sparkles,
  Layers,
  Cpu,
  Send,
  GraduationCap,
  MapPin,
  Heart,
  ExternalLink,
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Mail,
  X,
  CheckCircle,
  Briefcase,
  Grid,
} from 'lucide-react';
import {
  personalInfo,
  stats,
  featuredTools,
  skills,
  timeline,
  projects,
} from './data/portfolioData';

export default function App() {
  const [activeProject, setActiveProject] = useState<any | null>(null);
  const [allProjectsModalOpen, setAllProjectsModalOpen] = useState(false);
  const [allSkillsModalOpen, setAllSkillsModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [skillFilter, setSkillFilter] = useState<string>('all');

  // Contact Form State
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok && result.success) {
        setSubmitted(true);
        setFormState({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => {
          setSubmitted(false);
          setContactModalOpen(false);
        }, 3500);
      } else {
        setErrorMsg(result.error || 'Failed to send message. Please try again or email directly.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setErrorMsg('Network error. Please check your connection or email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const featuredProjectsList = projects.filter((p) => p.featured);
  const filteredAllProjects = projects.filter(
    (p) => selectedCategory === 'all' || p.category === selectedCategory
  );
  const filteredSkills = skills.filter(
    (s) => skillFilter === 'all' || s.category === skillFilter
  );

  return (
    <div className="relative min-h-screen bg-[var(--site-bg)] text-[var(--text-main)] selection:bg-[var(--accent-primary)]/30 selection:text-[var(--text-main)] overflow-x-hidden font-sans antialiased transition-colors duration-500">
      {/* SEO Engine */}
      <SEO />

      {/* Dynamic Ambient Cosmic Glow Backgrounds */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] blur-[140px] pointer-events-none -z-20 transition-all duration-700"
        style={{ background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-1/3 right-[-10%] w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none -z-20 transition-all duration-700"
        style={{ background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)', opacity: 0.6 }}
      />
      <div
        className="absolute top-2/3 left-[-10%] w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none -z-20 transition-all duration-700"
        style={{ background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)', opacity: 0.6 }}
      />

      {/* Subtle fine dot grid texture */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(148,163,184,0.06)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none -z-10" />

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Smooth Scroll Frame */}
      <SmoothScroll>
        {/* Floating Navbar */}
        <Header />

        <main className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6">

          {/* ========================================================== */}
          {/* 1. HERO SECTION */}
          {/* ========================================================== */}
          <section
            id="home"
            aria-label="Hero Introduction"
            className="min-h-[85vh] lg:min-h-[92vh] flex flex-col justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 relative"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center w-full">
              {/* Left Column: Greeting, Title, Subtitle, Description, CTAs, Socials */}
              <div className="lg:col-span-7 flex flex-col justify-center z-10">
                {/* Active Status Badge: 🟢 HELLO, I'M */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full theme-card text-xs font-semibold tracking-wider mb-5 w-fit shadow-lg"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em]">
                    HELLO, I'M
                  </span>
                </motion.div>

                {/* Massive Display Styled Name: Jhasaketan Sa */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="font-sans text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-4"
                >
                  Jhasaketan{' '}
                  <span className="text-accent-gradient">
                    Sa
                  </span>
                </motion.h1>

                {/* Subtitle Role */}
                <motion.h2
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="font-sans text-base sm:text-lg lg:text-xl font-semibold opacity-90 mb-5"
                >
                  {personalInfo.role} | {personalInfo.subRole}
                </motion.h2>

                {/* Sub-Headline Description */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="text-sm sm:text-base opacity-80 leading-relaxed font-normal max-w-xl mb-8"
                >
                  {personalInfo.headline}
                </motion.p>

                {/* Action Trigger Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className="flex flex-wrap items-center gap-4 mb-8"
                >
                  <a
                    href="#projects"
                    className="px-6 py-3 rounded-full bg-accent-gradient text-white font-sans font-semibold text-xs sm:text-sm tracking-wide flex items-center gap-2 shadow-accent-glow hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    View My Work
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href={personalInfo.resume}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 rounded-full theme-card hover:border-[var(--accent-primary)] font-sans font-medium text-xs sm:text-sm tracking-wide flex items-center gap-2 shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <Download className="w-4 h-4 text-accent" />
                    Download Resume
                  </a>
                </motion.div>

                {/* Social Icons Row */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center gap-3 pt-2"
                >
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub Profile"
                    className="w-10 h-10 rounded-full theme-card flex items-center justify-center hover:text-accent hover:border-[var(--accent-primary)] transition-all hover:scale-110 shadow-sm"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn Profile"
                    className="w-10 h-10 rounded-full theme-card flex items-center justify-center hover:text-accent hover:border-[var(--accent-primary)] transition-all hover:scale-110 shadow-sm"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={personalInfo.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram Profile"
                    className="w-10 h-10 rounded-full theme-card flex items-center justify-center hover:text-accent hover:border-[var(--accent-primary)] transition-all hover:scale-110 shadow-sm"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={personalInfo.twitter}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Twitter Profile"
                    className="w-10 h-10 rounded-full theme-card flex items-center justify-center hover:text-accent hover:border-[var(--accent-primary)] transition-all hover:scale-110 shadow-sm"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    aria-label="Send Email"
                    className="w-10 h-10 rounded-full theme-card flex items-center justify-center hover:text-accent hover:border-[var(--accent-primary)] transition-all hover:scale-110 shadow-sm"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </motion.div>
              </div>

              {/* Right Column: High-Impact 3D Visual Composition */}
              <div className="lg:col-span-5 flex justify-center items-center relative">
                <InteractivePhoto />
              </div>
            </div>
          </section>

          {/* ========================================================== */}
          {/* 2. STATS BAR SECTION */}
          {/* ========================================================== */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="w-full my-12"
          >
            <div className="w-full rounded-2xl theme-card p-5 sm:p-6 shadow-2xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-[var(--site-card-border)]">
                {/* 1. Projects Built */}
                <div className="flex items-center gap-4 px-2 sm:px-4 pt-2 md:pt-0">
                  <div className="w-11 h-11 rounded-xl bg-accent-badge flex items-center justify-center text-accent flex-shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans text-xl sm:text-2xl font-bold leading-tight">
                      10+
                    </span>
                    <span className="font-sans text-xs sm:text-sm opacity-70 leading-tight">
                      Projects Built
                    </span>
                  </div>
                </div>

                {/* 2. Tools & Technologies */}
                <div className="flex items-center gap-4 px-2 sm:px-4 pt-4 md:pt-0">
                  <div className="w-11 h-11 rounded-xl bg-accent-badge flex items-center justify-center text-accent flex-shrink-0">
                    <Grid className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans text-xs sm:text-sm opacity-70 leading-tight">
                      Tools &amp;
                    </span>
                    <span className="font-sans text-base sm:text-lg font-bold leading-tight">
                      Technologies
                    </span>
                  </div>
                </div>

                {/* 3. 3+ Years of Experience */}
                <div className="flex items-center gap-4 px-2 sm:px-4 pt-4 md:pt-0">
                  <div className="w-11 h-11 rounded-xl bg-accent-badge flex items-center justify-center text-accent flex-shrink-0">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans text-xl sm:text-2xl font-bold leading-tight">
                      3+
                    </span>
                    <span className="font-sans text-xs sm:text-sm opacity-70 leading-tight">
                      Years of Experience <span className="text-[10px] opacity-60 block">(Freelance &amp; Internship)</span>
                    </span>
                  </div>
                </div>

                {/* 4. Open to Opportunities */}
                <div className="flex items-center gap-4 px-2 sm:px-4 pt-4 md:pt-0">
                  <div className="w-11 h-11 rounded-xl bg-accent-badge flex items-center justify-center text-accent flex-shrink-0">
                    <Send className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans text-xs sm:text-sm opacity-70 leading-tight">
                      Open to
                    </span>
                    <span className="font-sans text-base sm:text-lg font-bold leading-tight">
                      Opportunities
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ========================================================== */}
          {/* 3. ABOUT SECTION */}
          {/* ========================================================== */}
          <section
            id="about"
            aria-labelledby="about-heading"
            className="py-16 sm:py-24"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Portrait Card with "A Learner Forever" handwritten script */}
              <div className="lg:col-span-5 flex justify-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative w-full max-w-[380px] aspect-[4/5] rounded-3xl overflow-hidden theme-card shadow-2xl group"
                >
                  <img
                    src={personalInfo.profileAboutImage || personalInfo.profileImage}
                    alt="Jhasaketan Sa"
                    loading="lazy"
                    decoding="async"
                    width={400}
                    height={500}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter contrast-[1.08] brightness-[0.85] group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--site-bg)] via-transparent to-transparent opacity-80" />

                  {/* Cursive text overlay: "A Learner Forever" */}
                  <div className="absolute right-6 top-1/3 z-20 pointer-events-none">
                    <span className="font-handwritten text-3xl sm:text-4xl text-slate-200/90 drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)] rotate-[-6deg] block leading-tight">
                      A Learner<br />Forever
                    </span>
                  </div>

                  {/* Corner ambient glow */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl theme-card flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold font-sans">{personalInfo.fullName}</h4>
                      <p className="text-accent text-[10px] font-mono">{personalInfo.location}</p>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Label, Heading, Description, 3 Info Cards */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Label: ■ ABOUT ME */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-sm bg-accent-solid" />
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent font-bold">
                      ABOUT ME
                    </span>
                  </div>

                  {/* Heading: Turning Ideas into Impact */}
                  <h2
                    id="about-heading"
                    className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4"
                  >
                    Turning Ideas into{' '}
                    <span className="text-accent-gradient">
                      Impact
                    </span>
                  </h2>

                  {/* Bio Paragraph */}
                  <p className="font-sans text-sm sm:text-base opacity-80 leading-relaxed font-normal mb-8">
                    {personalInfo.aboutText}
                  </p>

                  {/* 3 Horizontal Compact Info Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    {/* Education Card */}
                    <div className="p-4 rounded-2xl theme-card flex items-start gap-3 hover:border-[var(--accent-primary)] transition-colors">
                      <div className="p-2.5 rounded-xl bg-accent-badge text-accent flex-shrink-0">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold leading-tight">
                          {personalInfo.education}
                        </span>
                        <span className="text-[11px] opacity-70 leading-tight mt-0.5">
                          {personalInfo.university}
                        </span>
                      </div>
                    </div>

                    {/* Location Card */}
                    <div className="p-4 rounded-2xl theme-card flex items-start gap-3 hover:border-[var(--accent-primary)] transition-colors">
                      <div className="p-2.5 rounded-xl bg-accent-badge text-accent flex-shrink-0">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold leading-tight">
                          Location
                        </span>
                        <span className="text-[11px] opacity-70 leading-tight mt-0.5">
                          {personalInfo.location}
                        </span>
                      </div>
                    </div>

                    {/* Focus / Motto Card */}
                    <div className="p-4 rounded-2xl theme-card flex items-start gap-3 hover:border-[var(--accent-primary)] transition-colors">
                      <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex-shrink-0">
                        <Heart className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold leading-tight">
                          Focus
                        </span>
                        <span className="text-[11px] opacity-70 leading-tight mt-0.5">
                          {personalInfo.motto}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* ========================================================== */}
          {/* 4. SKILLS SECTION ("Tools I Work With") */}
          {/* ========================================================== */}
          <section
            id="skills"
            aria-labelledby="skills-heading"
            className="py-16 sm:py-24"
          >
            {/* Header: Label, Title, View All Button */}
            <div className="flex items-end justify-between gap-4 mb-10">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-sm bg-accent-solid" />
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent font-bold">
                    MY SKILLS
                  </span>
                </div>
                <h2
                  id="skills-heading"
                  className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
                >
                  Tools I{' '}
                  <span className="text-accent-gradient">
                    Work With
                  </span>
                </h2>
              </div>

              <button
                onClick={() => setAllSkillsModalOpen(true)}
                className="px-4 sm:px-5 py-2 rounded-full theme-card text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]"
              >
                View All
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 9-Card Dark Glass Grid matching reference design */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-3 sm:gap-3.5">
              {featuredTools.map((tool) => (
                <TiltCard
                  key={tool.id}
                  glowColor={tool.glowColor}
                  className="p-4 sm:p-5 flex flex-col items-center justify-center text-center rounded-2xl theme-card min-h-[120px] transition-all group"
                >
                  {/* Icon Container */}
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    {getTechIcon(tool.iconType, 'w-7 h-7')}
                  </div>

                  {/* Tool Name */}
                  <span className="font-sans text-xs sm:text-[13px] font-semibold opacity-90 group-hover:opacity-100 transition-colors">
                    {tool.name}
                  </span>
                </TiltCard>
              ))}
            </div>
          </section>

          {/* ========================================================== */}
          {/* 5. PROJECTS SECTION ("Some Things I've Built") */}
          {/* ========================================================== */}
          <section
            id="projects"
            aria-labelledby="projects-heading"
            className="py-16 sm:py-24"
          >
            {/* Header: Label, Title, View All Projects Button */}
            <div className="flex items-end justify-between gap-4 mb-10">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-sm bg-accent-solid" />
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent font-bold">
                    FEATURED PROJECTS
                  </span>
                </div>
                <h2
                  id="projects-heading"
                  className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
                >
                  Some Things{' '}
                  <span className="text-accent-gradient">
                    I've Built
                  </span>
                </h2>
              </div>

              <button
                onClick={() => setAllProjectsModalOpen(true)}
                className="px-4 sm:px-5 py-2 rounded-full theme-card text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]"
              >
                View All Projects
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 3-Column Project Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredProjectsList.map((proj) => (
                <motion.div
                  key={proj.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  onClick={() => setActiveProject(proj)}
                  className="cursor-pointer group"
                >
                  <div className="h-full rounded-2xl theme-card hover:border-[var(--accent-primary)] overflow-hidden shadow-2xl transition-all duration-500 flex flex-col justify-between">
                    {/* Project Image Preview */}
                    <div className="aspect-[16/10] w-full bg-slate-950 relative overflow-hidden">
                      <img
                        src={proj.image}
                        alt={proj.title}
                        loading="lazy"
                        decoding="async"
                        width={600}
                        height={375}
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1000&auto=format&fit=crop&q=80';
                        }}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--site-bg)] via-transparent to-transparent opacity-80" />
                    </div>

                    {/* Project Info */}
                    <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
                      <div>
                        <h3 className="font-sans text-lg sm:text-xl font-bold group-hover:text-accent transition-colors mb-2">
                          {proj.title}
                        </h3>
                        <p className="font-sans text-xs sm:text-sm opacity-75 leading-relaxed font-normal mb-5 line-clamp-2">
                          {proj.description}
                        </p>
                      </div>

                      {/* Tech Pills & External Link Row */}
                      <div className="flex items-center justify-between gap-2 pt-2">
                        <div className="flex flex-wrap gap-1.5">
                          {proj.tags.map((tag) => (
                            <span
                              key={tag}
                              className="font-mono text-[10px] theme-card px-2.5 py-0.5 rounded-md"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="p-2 rounded-lg theme-card group-hover:bg-[var(--accent-primary)] group-hover:text-white transition-all">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ========================================================== */}
          {/* 6. EXPERIENCE SECTION */}
          {/* ========================================================== */}
          <section
            id="experience"
            aria-labelledby="experience-heading"
            className="py-16 sm:py-24"
          >
            <div className="flex flex-col gap-3 mb-10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-sm bg-accent-solid" />
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent font-bold">
                  EXPERIENCE &amp; EDUCATION
                </span>
              </div>
              <h2
                id="experience-heading"
                className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
              >
                Work &amp;{' '}
                <span className="text-accent-gradient">
                  Academic Journey
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Experience Timeline */}
              <div className="p-6 sm:p-8 rounded-3xl theme-card">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[var(--site-card-border)]">
                  <div className="p-2.5 rounded-xl bg-accent-badge text-accent">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h3 className="font-sans text-lg font-bold">
                    Professional Experience
                  </h3>
                </div>

                <div className="relative pl-6 border-l border-[var(--site-card-border)] space-y-8">
                  {timeline
                    .filter((item) => item.id.startsWith('exp'))
                    .map((item) => (
                      <div key={item.id} className="relative">
                        <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[var(--site-bg)] border-2 border-[var(--accent-primary)]" />
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                          <h4 className="font-sans text-sm sm:text-base font-bold">
                            {item.role}
                          </h4>
                          <span className="font-mono text-[10px] bg-accent-badge px-2 py-0.5 rounded-md w-fit">
                            {item.year}
                          </span>
                        </div>
                        <span className="text-xs opacity-75 font-medium block mb-2">
                          {item.company}
                        </span>
                        <p className="text-xs opacity-70 leading-relaxed mb-3">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {item.tags.map((t) => (
                            <span
                              key={t}
                              className="font-mono text-[9px] theme-card px-2 py-0.5 rounded"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Education Timeline */}
              <div className="p-6 sm:p-8 rounded-3xl theme-card">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[var(--site-card-border)]">
                  <div className="p-2.5 rounded-xl bg-accent-badge text-accent">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="font-sans text-lg font-bold">
                    Education &amp; Credentials
                  </h3>
                </div>

                <div className="relative pl-6 border-l border-[var(--site-card-border)] space-y-8">
                  {timeline
                    .filter((item) => item.id.startsWith('edu'))
                    .map((item) => (
                      <div key={item.id} className="relative">
                        <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[var(--site-bg)] border-2 border-[var(--accent-primary)]" />
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                          <h4 className="font-sans text-sm sm:text-base font-bold">
                            {item.role}
                          </h4>
                          <span className="font-mono text-[10px] bg-accent-badge px-2 py-0.5 rounded-md w-fit">
                            {item.year}
                          </span>
                        </div>
                        <span className="text-xs opacity-75 font-medium block mb-2">
                          {item.company}
                        </span>
                        <p className="text-xs opacity-70 leading-relaxed mb-3">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {item.tags.map((t) => (
                            <span
                              key={t}
                              className="font-mono text-[9px] theme-card px-2 py-0.5 rounded"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================== */}
          {/* 7. CONTACT / CTA BANNER ("Let's Work Together") */}
          {/* ========================================================== */}
          <section
            id="contact"
            aria-label="Collaboration & Contact"
            className="py-12 sm:py-20"
          >
            <div className="relative w-full rounded-3xl overflow-hidden theme-card p-8 sm:p-12 lg:p-16 text-center shadow-2xl">
              {/* Starry Night / Ambient Glow Details */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at top, var(--accent-glow) 0%, transparent 70%)' }}
              />

              {/* Left Handwritten Script: "Let's Build Something Amazing Together" */}
              <div className="absolute left-6 sm:left-10 top-8 sm:top-12 z-20 pointer-events-none hidden md:block">
                <span className="font-handwritten text-xl sm:text-2xl lg:text-3xl opacity-80 rotate-[-8deg] block drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] text-left leading-snug">
                  Let's Build<br />Something Amazing<br />Together
                </span>
              </div>

              {/* Right Handwritten Script: "Same Dreams Higher Standards" */}
              <div className="absolute right-6 sm:right-10 bottom-8 sm:bottom-12 z-20 pointer-events-none hidden md:block">
                <span className="font-handwritten text-xl sm:text-2xl lg:text-3xl opacity-80 rotate-[6deg] block drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] text-right leading-snug">
                  Same<br />Dreams<br />Higher<br />Standards
                </span>
              </div>

              {/* Center Content */}
              <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
                {/* Subtitle / Tag */}
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent font-bold mb-3">
                  READY TO COLLABORATE?
                </span>

                {/* Main Heading */}
                <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
                  Let's Work Together
                </h2>

                {/* Supporting Description */}
                <p className="font-sans text-sm sm:text-base opacity-80 leading-relaxed font-normal mb-8 max-w-md">
                  I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                </p>

                {/* CTA Action Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <button
                    onClick={() => setContactModalOpen(true)}
                    className="px-7 py-3.5 rounded-full bg-accent-gradient text-white font-sans font-semibold text-xs sm:text-sm tracking-wide flex items-center gap-2 shadow-accent-glow hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    Get In Touch
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="px-7 py-3.5 rounded-full theme-card hover:border-[var(--accent-primary)] font-sans font-medium text-xs sm:text-sm tracking-wide flex items-center gap-2 shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <Mail className="w-4 h-4 text-accent" />
                    Email Me
                  </a>
                </div>
              </div>
            </div>
          </section>

        </main>

        {/* ========================================================== */}
        {/* 8. FOOTER */}
        {/* ========================================================== */}
        <footer className="border-t border-[var(--site-card-border)] py-8 relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-sans text-xs sm:text-sm opacity-70">
              © 2025 Jhasaketan Sa. All rights reserved.
            </span>

            <div className="flex items-center gap-6 font-sans text-xs sm:text-sm opacity-75">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent transition-colors"
              >
                GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent transition-colors"
              >
                Instagram
              </a>
              <a
                href={personalInfo.twitter}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </footer>
      </SmoothScroll>

      {/* ========================================================== */}
      {/* 9. MODALS (Case Study, All Projects, All Skills, Contact) */}
      {/* ========================================================== */}

      {/* A. Case Study Detailed Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative z-10 w-full max-w-3xl theme-card rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Header Image */}
              <div className="relative aspect-[21/9] w-full bg-[var(--site-bg)] overflow-hidden border-b border-[var(--site-card-border)]">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1000&auto=format&fit=crop&q=80';
                  }}
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--site-bg)] via-transparent to-transparent" />

                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 p-2.5 rounded-full theme-card hover:text-accent transition-all shadow-lg"
                  aria-label="Close Case Study"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="absolute bottom-4 left-6 right-6">
                  <h2 className="font-sans text-2xl sm:text-3xl font-bold">
                    {activeProject.title}
                  </h2>
                </div>
              </div>

              {/* Scrollable Body */}
              <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-accent mb-2">
                    OVERVIEW
                  </h4>
                  <p className="font-sans text-sm sm:text-base opacity-85 leading-relaxed font-normal">
                    {activeProject.longDescription || activeProject.description}
                  </p>
                </div>

                {activeProject.highlights && (
                  <div className="pt-4 border-t border-[var(--site-card-border)]">
                    <h4 className="font-mono text-xs uppercase tracking-widest text-accent mb-3">
                      KEY ARCHITECTURAL HIGHLIGHTS
                    </h4>
                    <div className="space-y-2">
                      {activeProject.highlights.map((h: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-solid mt-2 flex-shrink-0" />
                          <p className="text-xs sm:text-sm opacity-85 leading-relaxed">
                            {h}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-4 border-t border-[var(--site-card-border)]">
                  <h4 className="font-mono text-xs uppercase tracking-widest opacity-70 mb-2">
                    TECHNOLOGIES USED
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.tags.map((t: string) => (
                      <span
                        key={t}
                        className="font-mono text-xs bg-accent-badge px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-[var(--site-card-border)]">
                  {activeProject.liveUrl && activeProject.liveUrl !== '#' && (
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-full bg-accent-gradient text-white font-sans text-xs font-semibold flex items-center gap-1.5 shadow-accent-glow"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                  )}
                  {activeProject.githubUrl && (
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-full theme-card hover:border-[var(--accent-primary)] font-sans text-xs font-semibold flex items-center gap-1.5"
                    >
                      <Github className="w-3.5 h-3.5" />
                      GitHub Repo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* B. All Projects Modal / Gallery */}
      <AnimatePresence>
        {allProjectsModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setAllProjectsModalOpen(false)}
              className="absolute inset-0 cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative z-10 w-full max-w-5xl theme-card rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="p-6 sm:p-8 border-b border-[var(--site-card-border)] flex items-center justify-between">
                <div>
                  <h3 className="font-sans text-2xl font-bold">
                    Project Archive
                  </h3>
                  <p className="text-xs opacity-70 mt-1">
                    Complete portfolio of full-stack applications, microservices, ML models, and APIs.
                  </p>
                </div>
                <button
                  onClick={() => setAllProjectsModalOpen(false)}
                  className="p-2.5 rounded-full theme-card hover:text-accent"
                  aria-label="Close Project Archive"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Category Filter Tabs */}
              <div className="px-6 sm:px-8 py-3 border-b border-[var(--site-card-border)] flex flex-wrap gap-2">
                {[
                  { id: 'all', label: 'All Projects' },
                  { id: 'frontend', label: 'Frontend' },
                  { id: 'fullstack', label: 'Full Stack' },
                  { id: 'ml-ai', label: 'AI & ML' },
                  { id: '3d-webgl', label: '3D WebGL' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedCategory(tab.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                      selectedCategory === tab.id
                        ? 'bg-accent-solid text-white shadow-sm'
                        : 'theme-card opacity-70 hover:opacity-100'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Grid of All Projects */}
              <div className="overflow-y-auto p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredAllProjects.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => {
                      setAllProjectsModalOpen(false);
                      setActiveProject(p);
                    }}
                    className="p-4 rounded-2xl theme-card hover:border-[var(--accent-primary)] cursor-pointer transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-sans text-base font-bold group-hover:text-accent transition-colors">
                          {p.title}
                        </h4>
                        <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:text-accent transition-colors" />
                      </div>
                      <p className="text-xs opacity-75 leading-relaxed mb-3 line-clamp-2">
                        {p.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1 mt-auto">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[9px] bg-accent-badge px-2 py-0.5 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* C. All Skills Modal / Drawer */}
      <AnimatePresence>
        {allSkillsModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setAllSkillsModalOpen(false)}
              className="absolute inset-0 cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative z-10 w-full max-w-4xl theme-card rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="p-6 sm:p-8 border-b border-[var(--site-card-border)] flex items-center justify-between">
                <div>
                  <h3 className="font-sans text-2xl font-bold">
                    Skills &amp; Technical Capabilities
                  </h3>
                  <p className="text-xs opacity-70 mt-1">
                    Comprehensive breakdown of backend, frontend, databases, and DevOps competencies.
                  </p>
                </div>
                <button
                  onClick={() => setAllSkillsModalOpen(false)}
                  className="p-2.5 rounded-full theme-card hover:text-accent"
                  aria-label="Close Skills Modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Filter Tabs */}
              <div className="px-6 sm:px-8 py-3 border-b border-[var(--site-card-border)] flex flex-wrap gap-2">
                {[
                  { id: 'all', label: 'All Skills' },
                  { id: 'languages', label: 'Languages' },
                  { id: 'backend', label: 'Backend & DBs' },
                  { id: 'frontend', label: 'Frontend & 3D' },
                  { id: '3d-creative', label: 'Tools & DevOps' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSkillFilter(tab.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                      skillFilter === tab.id
                        ? 'bg-accent-solid text-white shadow-sm'
                        : 'theme-card opacity-70 hover:opacity-100'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Skills Grid */}
              <div className="overflow-y-auto p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {filteredSkills.map((s) => (
                  <div
                    key={s.name}
                    className="p-4 rounded-xl theme-card flex items-center justify-between"
                  >
                    <span className="font-sans text-sm font-semibold">
                      {s.name}
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-1.5 bg-[var(--site-card-border)] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-accent-gradient rounded-full"
                          style={{ width: `${s.level}%` }}
                        />
                      </div>
                      <span className="font-mono text-xs opacity-75 w-8 text-right">
                        {s.level}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* D. Contact Form Modal */}
      <AnimatePresence>
        {contactModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setContactModalOpen(false)}
              className="absolute inset-0 cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative z-10 w-full max-w-lg theme-card rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8"
            >
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-[var(--site-card-border)]">
                <div>
                  <h3 className="font-sans text-xl font-bold">
                    Let's Connect
                  </h3>
                  <p className="text-xs opacity-70 mt-0.5">
                    Send a direct transmission to Jhasaketan Sa.
                  </p>
                </div>
                <button
                  onClick={() => setContactModalOpen(false)}
                  className="p-2 rounded-full theme-card hover:text-accent"
                  aria-label="Close Contact Modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-mono uppercase opacity-70 mb-1">
                    Your Name *
                  </label>
                  <input
                    id="modal-name"
                    name="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-2.5 rounded-xl theme-card text-sm focus:border-[var(--accent-primary)] outline-none transition-all placeholder:opacity-50"
                  />
                </div>

                <div>
                  <label htmlFor="modal-email" className="block text-xs font-mono uppercase opacity-70 mb-1">
                    Your Email *
                  </label>
                  <input
                    id="modal-email"
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full px-4 py-2.5 rounded-xl theme-card text-sm focus:border-[var(--accent-primary)] outline-none transition-all placeholder:opacity-50"
                  />
                </div>

                <div>
                  <label htmlFor="modal-subject" className="block text-xs font-mono uppercase opacity-70 mb-1">
                    Subject / Project Role
                  </label>
                  <input
                    id="modal-subject"
                    name="subject"
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="Full Stack Opportunity / Collaboration"
                    className="w-full px-4 py-2.5 rounded-xl theme-card text-sm focus:border-[var(--accent-primary)] outline-none transition-all placeholder:opacity-50"
                  />
                </div>

                <div>
                  <label htmlFor="modal-message" className="block text-xs font-mono uppercase opacity-70 mb-1">
                    Message Body *
                  </label>
                  <textarea
                    id="modal-message"
                    name="message"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Hi Jhasaketan, I came across your portfolio..."
                    className="w-full px-4 py-2.5 rounded-xl theme-card text-sm focus:border-[var(--accent-primary)] outline-none transition-all placeholder:opacity-50 resize-none"
                  />
                </div>

                {errorMsg && (
                  <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-medium">
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-full bg-accent-gradient text-white font-sans font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-accent-glow flex items-center justify-center gap-2 mt-2 hover:scale-[1.01] active:scale-[0.99]"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending Message...
                    </>
                  ) : submitted ? (
                    <>
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      Message Sent Successfully!
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
