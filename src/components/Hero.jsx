import React, { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';
import DevRoom3DScene from './Robot3D';

const Hero = () => {
  const fullText = "> building modern full-stack apps with the MERN stack_";
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex >= fullText.length) return;
    const timer = setTimeout(() => setCharIndex(i => i + 1), 45);
    return () => clearTimeout(timer);
  }, [charIndex]);

  const text = fullText.slice(0, charIndex);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section className="relative min-h-screen flex items-center px-6 py-8 overflow-hidden cyber-grid-bg">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-[#00f0ff]/5 blur-[140px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#ff00aa]/5 blur-[160px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#7b00ff]/3 blur-[200px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: text */}
        <motion.div
          className="w-full md:w-[45%] text-center md:text-left space-y-5 mt-16 md:mt-0"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-block font-['JetBrains_Mono'] text-xs tracking-[0.25em] uppercase text-[#00f0ff] border border-[#00f0ff]/30 px-4 py-1.5 bg-[#00f0ff]/5">
              // full_stack_developer
            </span>
          </motion.div>

          <motion.h1 className="leading-tight" variants={fadeUp}>
            <span className="block text-3xl sm:text-4xl md:text-5xl font-bold font-['Orbitron'] text-[#8888aa] tracking-wide">
              HI, I'M
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl font-black font-['Orbitron'] text-[#00f0ff] glow-text-pulse tracking-wider mt-1">
              ANIL KUMAR
            </span>
          </motion.h1>

          <motion.div className="min-h-12" variants={fadeUp}>
            <p className="font-['JetBrains_Mono'] text-sm md:text-base text-[#00ff88] tracking-wide">
              {text}
              <span className="inline-block w-2 h-4 bg-[#00ff88] ml-0.5 animate-pulse align-middle" />
            </p>
          </motion.div>

          <motion.div className="flex justify-center md:justify-start gap-4 pt-1" variants={fadeUp}>
            <a
              href="https://drive.google.com/file/d/1XycseD0lzRC8-nweO0EqiPPqXp-bbzPD/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-7 py-2.5 text-sm font-semibold uppercase tracking-wider text-[#050510] bg-[#00f0ff] hover:bg-[#00f0ff]/80 transition-all duration-300 hud-card shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)]"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="relative px-7 py-2.5 text-sm font-semibold uppercase tracking-wider text-[#00f0ff] border border-[#00f0ff]/40 hover:bg-[#00f0ff]/10 hover:border-[#00f0ff]/70 transition-all duration-300 hud-card"
            >
              View Projects
            </a>
          </motion.div>

          <motion.div className="flex justify-center md:justify-start gap-3 pt-3" variants={fadeUp}>
            {[
              { href: 'https://github.com/anil29717', icon: <Github size={18} />, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/anil-kumar85/', icon: <Linkedin size={18} />, label: 'LinkedIn' },
              { href: 'mailto:anilkumar.gugm@gmail.com', icon: <Mail size={18} />, label: 'Email' },
              { href: 'https://leetcode.com/anilkumar_365', icon: <SiLeetcode size={18} />, label: 'LeetCode' },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[#00f0ff]/20 bg-[#00f0ff]/5 flex items-center justify-center text-[#00f0ff]/70 hover:text-[#00f0ff] hover:bg-[#00f0ff]/10 hover:border-[#00f0ff]/50 hover:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all duration-300"
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: 3D Bot */}
        <motion.div
          className="w-full md:w-[50%] h-[300px] sm:h-[380px] md:h-[500px] lg:h-[560px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <Suspense fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 border border-[#00f0ff]/30 border-t-[#00f0ff] rounded-full animate-spin" />
                <span className="font-['JetBrains_Mono'] text-xs text-[#00f0ff]/50 tracking-wider">LOADING_SCENE...</span>
              </div>
            </div>
          }>
            <DevRoom3DScene />
          </Suspense>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
