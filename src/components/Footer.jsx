import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#1a002e] to-[#2b034d] text-purple-200 py-6">
      {/* Subtle glassmorphic effect */}
      <div className="absolute inset-0 bg-purple-900/30 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm md:text-base font-light">
          Made with &#128155; by Anil Kumar &copy; {new Date().getFullYear()}  All rights reserved.
        </p>
        
        <div className="flex items-center gap-2">
          <span className="text-purple-300 text-sm mr-2">Connect:</span>
          <div className="flex gap-4 text-xl">
            <a 
              href="https://github.com/anil29717" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-purple-300 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/anil-kumar85/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-purple-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="mailto:anilkumar.gugm@gmail.com" 
              className="text-purple-300 hover:text-white transition-colors"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a 
              href="https://leetcode.com/anilkumar_365" 
              className="text-purple-300 hover:text-white transition-colors"
              aria-label="Email"
            >
              <SiLeetcode />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;