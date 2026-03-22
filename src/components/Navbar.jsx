import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const navItems = ['about', 'experience', 'projects', 'education', 'contact'];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-['Rajdhani'] ${
        scrolled
          ? 'bg-[#050510]/90 backdrop-blur-xl border-b border-[#00f0ff]/15 shadow-[0_2px_20px_rgba(0,240,255,0.05)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="group">
          <h1 className="text-xl md:text-2xl font-bold tracking-[0.2em] uppercase font-['Orbitron'] text-[#00f0ff] glow-text-pulse">
            ANIL<span className="text-[#ff00aa]">.</span>DEV
          </h1>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8 text-[15px] font-medium tracking-wider uppercase">
          {navItems.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * i + 0.3 }}
            >
              <a
                href={`#${item}`}
                className="relative text-[#8888aa] hover:text-[#00f0ff] transition-colors duration-300 py-1 group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#ff00aa] group-hover:w-full transition-all duration-300 shadow-[0_0_6px_#ff00aa]" />
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 border border-[#00f0ff]/20 rounded flex items-center justify-center text-[#00f0ff] hover:bg-[#00f0ff]/10 transition-all"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 top-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-black/60" onClick={() => setMenuOpen(false)} />
            <div className="absolute right-0 top-0 h-full w-64 bg-[#0a0a1a]/95 backdrop-blur-xl border-l border-[#00f0ff]/10 p-8 pt-20">
              {navItems.map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="block py-3 text-lg uppercase tracking-wider text-[#8888aa] hover:text-[#00f0ff] transition-colors font-medium border-b border-[#00f0ff]/5"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
