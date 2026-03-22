import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Face3DScene from "./Face3D";

const terminalLines = [
  { prompt: true, text: 'cat about_me.txt' },
  { prompt: false, text: '' },
  { prompt: false, text: "I'm a passionate full-stack developer skilled in the" },
  { prompt: false, text: 'MERN stack (MongoDB, Express, React, Node.js).' },
  { prompt: false, text: 'I enjoy building modern web apps with great UI/UX' },
  { prompt: false, text: 'and clean code. Always eager to learn and solve' },
  { prompt: false, text: 'real-world challenges.' },
  { prompt: false, text: '' },
  { prompt: true, text: 'cat contact.json' },
  { prompt: false, text: '{' },
  { prompt: false, text: '  "email": "anilkumar.gugm@gmail.com",' },
  { prompt: false, text: '  "portfolio": "anilkumarportfolio.vercel.app",' },
  { prompt: false, text: '  "role": "Full Stack Developer"' },
  { prompt: false, text: '}' },
];

const About = () => {
  return (
    <section id="about" className="px-6 py-24 relative overflow-hidden cyber-grid-bg">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00f0ff]/3 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#ff00aa]/3 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold font-['Orbitron'] text-center mb-16 tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[#00f0ff] glow-text-pulse">ABOUT</span>
          <span className="text-[#8888aa]"> ME</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Interactive 3D Face */}
          <motion.div
            className="w-full md:w-2/5 flex justify-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative group">
              <Suspense
                fallback={
                  <div className="w-56 h-56 md:w-64 md:h-64 flex items-center justify-center">
                    <div className="w-8 h-8 border border-[#00f0ff]/30 border-t-[#00f0ff] rounded-full animate-spin" />
                  </div>
                }
              >
                <Face3DScene />
              </Suspense>
              {/* Glow behind face */}
              <div className="absolute inset-0 -z-10 bg-[#00f0ff]/5 blur-2xl rounded-full group-hover:bg-[#00f0ff]/10 transition-all duration-500" />
              {/* <p className="text-center font-['JetBrains_Mono'] text-[10px] text-[#00f0ff]/30 tracking-[0.3em] uppercase mt-2">move your mouse</p> */}
            </div>
          </motion.div>

          {/* Terminal card */}
          <motion.div
            className="w-full md:w-3/5"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative bg-[#0a0a18] border border-[#00f0ff]/15 rounded-lg overflow-hidden scanlines">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0f0f20] border-b border-[#00f0ff]/10">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 font-['JetBrains_Mono'] text-xs text-[#8888aa] tracking-wider">about_anil.sh — bash</span>
              </div>

              {/* Terminal body */}
              <div className="p-5 font-['JetBrains_Mono'] text-sm leading-relaxed space-y-0.5 max-h-[380px] overflow-y-auto">
                {terminalLines.map((line, i) => (
                  <div key={i} className="flex">
                    {line.prompt && (
                      <span className="text-[#00ff88] mr-2 select-none shrink-0">
                        <span className="text-[#ff00aa]">anil</span>
                        <span className="text-[#8888aa]">@</span>
                        <span className="text-[#00f0ff]">dev</span>
                        <span className="text-[#8888aa]">:~$</span>
                      </span>
                    )}
                    <span className={line.prompt ? 'text-[#e0e0ff]' : 'text-[#8888aa]'}>
                      {line.text}
                    </span>
                  </div>
                ))}
                <div className="flex items-center mt-3 pt-3 border-t border-[#00f0ff]/10">
                  <span className="text-[#ff00aa] mr-2 select-none">anil</span>
                  <span className="text-[#8888aa] mr-2 select-none">@dev:~$</span>
                  <a
                    href="https://drive.google.com/file/d/1XycseD0lzRC8-nweO0EqiPPqXp-bbzPD/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#00f0ff] hover:text-[#00ff88] transition-colors group"
                  >
                    <span>./download_resume.exe</span>
                    <Download size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                    <span className="inline-block w-2 h-4 bg-[#00f0ff] animate-pulse" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
