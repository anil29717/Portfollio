import React from "react";
import { Mail, FileText, Download, ExternalLink } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="px-6 py-16 bg-gradient-to-br from-[#1a002e] to-[#2b034d] text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-purple-200 flex items-center justify-center gap-3">
          <span>About Me</span>
        </h2>

        <div className="backdrop-blur-md bg-indigo-900/20 border border-violet-500/20 rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center md:items-start gap-12 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
          
          {/* Image (40%) */}
          <div className="w-full md:w-2/5 flex justify-center relative z-10">
            <div className="w-64 h-64 rounded-full relative group">
              {/* Image container with border effects */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
              <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-violet-300/30">
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 z-999"
                />
              </div>
              {/* Glow effect */}
              <div className="absolute -inset-3 bg-violet-500 rounded-full blur-md opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Content (60%) */}
          <div className="w-full md:w-3/5 space-y-6 relative z-10">
            <p className="text-lg leading-relaxed text-violet-100">
              I'm a passionate full-stack developer skilled in the MERN stack (MongoDB, Express, React, Node.js). I enjoy building modern web apps with great UI/UX and clean code. Always eager to learn and solve real-world challenges.
            </p>

            <div className="backdrop-blur-sm bg-violet-900/20 border border-violet-500/20 rounded-lg p-4 space-y-4">
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-violet-700/30 group-hover:bg-violet-600/50 transition-colors duration-300">
                  <Mail className="text-violet-300" size={18} />
                </div>
                <div>
                  <p className="text-violet-300 text-sm font-medium">Email</p>
                  <a
                    href="mailto:your.email@example.com"
                    className="text-white hover:text-violet-200 transition"
                  >
                    anilkumar.gugm@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-violet-700/30 group-hover:bg-violet-600/50 transition-colors duration-300">
                  <ExternalLink className="text-violet-300" size={18} />
                </div>
                <div>
                  <p className="text-violet-300 text-sm font-medium">Portfolio</p>
                  <a
                    href="https://yourportfolio.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-violet-200 transition"
                  >
                    anilkumarportfolio.vercel.app
                  </a>
                </div>
              </div>
            </div>

            <a
              href="https://drive.google.com/file/d/1kcR2bGaJLZILOQONFC9buixMX5WoxMxa/view?usp=drivesdk" target="_blank"
              download
              className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-violet-500/20 group"
            >
              <FileText size={18} />
              <span>Download Resume</span>
              <Download size={16} className="ml-1 opacity-70 group-hover:opacity-100 group-hover:translate-y-0.5 transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
