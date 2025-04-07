import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-violet-950/60 border-b border-violet-500/30 shadow-lg text-white font-medium">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="relative">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-wider text-violet-300 drop-shadow-lg font-['Poppins']">
            Anil Kumar
          </h1>
          <div className="absolute -inset-1 bg-violet-500 rounded-lg blur opacity-20 -z-10"></div>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-lg">
          {['about', 'projects', 'education', 'contact'].map((item) => (
            <li key={item} className="relative group">
              <a
                href={`#${item}`}
                className="text-violet-100 transition duration-300 ease-in-out group-hover:text-violet-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-violet-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl text-violet-300"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-violet-900/90 text-center px-6 pb-6 space-y-4">
          {['about', 'projects', 'education', 'contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className="block text-violet-100 text-lg font-semibold transition duration-300 hover:text-violet-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
