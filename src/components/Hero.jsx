import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import devAnimation from '../assets/dev-lottie.json'; // your Lottie file here
import { Github, Linkedin, Mail, FileText,  } from 'lucide-react';
import { SiLeetcode } from "react-icons/si";

const Hero = () => {
  const [text, setText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "A passionate full-stack developer building modern MERN stack apps";
  const typingSpeed = 50; // milliseconds per character

  useEffect(() => {
    let currentIndex = 0;

    if (!isTypingComplete) {
      const typingInterval = setInterval(() => {
        if (currentIndex < fullText.length) {
          setText(prevText => prevText + fullText[currentIndex]);
          currentIndex += 1;
        } else {
          setIsTypingComplete(true);
          clearInterval(typingInterval);
        }
      }, typingSpeed);

      return () => clearInterval(typingInterval);
    }
  }, [isTypingComplete]);

  return (
    <section className="bg-gradient-to-br from-[#1a002e] to-[#2b034d] text-white min-h-screen flex flex-col md:flex-row justify-center items-center px-6 py-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-500 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-indigo-600 blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto w-full z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6 mt-6 text-sm">
          <div className="mb-2">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 px-4 py-1 rounded-full text-sm font-medium">
              Full Stack Developer
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            <span className="block">Hi, I'm</span>
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-500 to-violet-400 inline-block max-w-96 text-transparent bg-clip-text font-extrabold">
              Anil Kumar
            </span>
          </h1>

          <div className="min-h-16 relative">
            <p className="text-lg md:text-xl mb-6 text-gray-300 max-w-xl after:inline-block after:w-0.5 after:h-6 after:bg-purple-400 after:animate-blink after:ml-1">
              {fullText}
            </p>
          </div>

          <div className="flex justify-center md:justify-start gap-4 pt-4">
            <a
              href="https://drive.google.com/file/d/1IkdC-MHkSgIVnsAtHZKPW90QcuIx8jd2/view?usp=sharing" target='_blank'
              className="bg-gradient-to-r from-purple-600 to-fuchsia-600 px-8 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="bg-transparent border border-purple-400 px-8 py-3 rounded-lg font-medium hover:bg-purple-900/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              View Projects
            </a>
          </div>

          <div className="flex justify-center md:justify-start gap-6 pt-6">
            <a href="https://github.com/anil29717" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors">
              <Github size={22} />
            </a>
            <a href="https://www.linkedin.com/in/anil-kumar85/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors">
              <Linkedin size={22} />
            </a>
            <a href="mailto:anilkumar.gugm@gmail.com" className="text-white hover:text-purple-400 transition-colors">
              <Mail size={22} />
            </a>
            <a href="https://leetcode.com/anilkumar_365" className="text-white hover:text-purple-400 transition-colors">
              <SiLeetcode size={22} />
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="relative">
            {/* Glow effect behind the Lottie animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-full filter blur-3xl opacity-30"></div>
            <Lottie
              animationData={devAnimation}
              loop={true}
              className="w-80 h-80 drop-shadow-2xl relative z-10"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;