import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight, Layers } from "lucide-react";

const projects = [
  {
    name: "deepDoc",
    description:
      "RAG-based AI chatbot built with Python, LLMs, vector databases, and React to deliver accurate, context-aware answers from documents using embeddings and retrieval pipelines.",
    technologies: ["Python", "RAG", "LLM", "Vector DB", "Embeddings", "React"],
    image: "/Deepdoc.png",
    live: "",
    source: "",
  },
  {
    name: "Office DPI Monitor",
    description:
      "Deep packet inspection system using Python, NFStream, nDPI, Node.js, and React to analyze network traffic, detect applications, and provide real-time monitoring dashboards.",
    technologies: [
      "Python",
      "NFStream",
      "nDPI",
      "Npcap",
      "Node.js",
      "Express",
      "MySQL",
      "WebSockets",
      "React",
      "Vite",
      "Recharts",
      "MUI",
    ],
    image: "/deep-packet.jpg",
    live: "",
    source: "",
  },
  {
    name: "FinanceBus",
    description:
      "Finance tracking app built with React, Node.js, Express, MongoDB, and Gemini API to manage expenses, savings, and investments with structured insights and dashboards.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "GeminiAPI"],
    image: "/finance.PNG",
    live: "https://finance-me-green.vercel.app/",
    source: "https://github.com/anil29717/FinanceMe",
  },
  {
    name: "ChatSphere",
    description:
      "Real-time chat application using React, Express, JWT, and MongoDB with secure authentication, persistent messaging, and seamless user communication.",
    technologies: ["React", "Express", "JWT", "MongoDB"],
    image: "/chatsphere.png",
    live: "https://chatsphereapp.vercel.app/",
    source: "https://github.com/anil29717/ChatSphere",
  },
  {
    name: "Pytutor",
    description:
      "Interactive Python learning platform built with React, Python, Gemini API, and MongoDB featuring live coding challenges, instant feedback, and guided problem-solving.",
    technologies: ["React", "Python", "Gemini API", "MongoDB"],
    image: "/pytutor.png",
    live: "https://pitutor-ehfj.onrender.com/",
    source: "https://github.com/anil29717/PiTutor",
  },
  {
    name: "TaskMate",
    description:
      "Task management system using React Vite, Node.js, and MongoDB to organize tasks with priorities, deadlines, and collaboration features for individuals and teams.",
    technologies: ["React Vite", "Node.js", "MongoDB"],
    image: "/taskmate.PNG",
    live: "https://task-mate-gray.vercel.app/",
    source: "https://github.com/anil29717/TaskMate",
  },
  {
    name: "Volunteer & Donor",
    description:
      "NGO platform built with React, Node.js, MongoDB, and Cloudinary to connect volunteers, manage donations, and streamline contribution tracking.",
    technologies: ["ReactJs", "CSS", "MongoDb", "Nodejs", "Cloudinary"],
    image: "/volunteer.PNG",
    live: "https://dharmakarm-foundation.vercel.app/",
    source: "https://github.com/anil29717/Dharmakarm-foundation",
  },
];

const AUTO_MS = 6000;

const slideVariants = {
  enter: (dir) => ({
    x: dir > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir) => ({
    x: dir < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

const ProjectSection = () => {
  const [[index, direction], setSlide] = useState([0, 0]);

  const goTo = useCallback((i) => {
    if (i === index) return;
    const len = projects.length;
    const target = ((i % len) + len) % len;
    setSlide([target, target > index ? 1 : -1]);
  }, [index]);

  const next = useCallback(() => {
    setSlide(([i]) => [(i + 1) % projects.length, 1]);
  }, []);

  const prev = useCallback(() => {
    setSlide(([i]) => [(i - 1 + projects.length) % projects.length, -1]);
  }, []);

  useEffect(() => {
    const t = setInterval(next, AUTO_MS);
    return () => clearInterval(t);
  }, [next]);

  const project = projects[index];

  return (
    <section className="py-16 md:py-20 px-4 relative overflow-hidden" id="projects">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00f0ff]/15 to-transparent" />
      <div className="absolute w-96 h-96 bg-[#00f0ff]/3 rounded-full blur-[180px] top-20 -right-48" />
      <div className="absolute w-80 h-80 bg-[#ff00aa]/3 rounded-full blur-[160px] bottom-20 -left-40" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-7 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-['Orbitron'] tracking-wider mb-3">
            <span className="text-[#00f0ff] glow-text-pulse">MY</span>
            <span className="text-[#8888aa]"> PROJECTS</span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#00f0ff] to-[#ff00aa] mx-auto shadow-[0_0_8px_rgba(0,240,255,0.4)]" />
          <p className="text-[#8888aa] mt-4 text-sm font-['Rajdhani'] tracking-wide">
            Swipe through — one project at a time
          </p>
        </motion.div>

        <div className="relative">
          {/* Nav arrows */}
          <button
            type="button"
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 -translate-x-1 md:-translate-x-3 w-10 h-10 md:w-11 md:h-11 border border-[#00f0ff]/25 bg-[#0a0a1a]/90 flex items-center justify-center text-[#00f0ff] hover:bg-[#00f0ff]/10 hover:border-[#00f0ff]/50 transition-all hud-card"
            aria-label="Previous project"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 translate-x-1 md:translate-x-3 w-10 h-10 md:w-11 md:h-11 border border-[#00f0ff]/25 bg-[#0a0a1a]/90 flex items-center justify-center text-[#00f0ff] hover:bg-[#00f0ff]/10 hover:border-[#00f0ff]/50 transition-all hud-card"
            aria-label="Next project"
          >
            <ChevronRight size={22} />
          </button>

          <div className="mx-8 md:mx-11 overflow-hidden rounded-lg border border-[#00f0ff]/15 bg-[#0a0a1a]/80 hud-card shadow-[0_0_30px_rgba(0,240,255,0.06)] isolate">
            <div className="relative min-h-0 md:min-h-[280px]">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={index}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-0"
                >
                  {/* Left: fixed-aspect preview (narrower column, same shape every slide) */}
                  <div className="md:col-span-5 flex flex-col items-center justify-center p-4 sm:p-5 md:py-5 md:pl-5 md:pr-3 border-b md:border-b-0 md:border-r border-[#00f0ff]/10 bg-[#050510]/40">
                    <div className="relative w-full max-w-[260px] sm:max-w-[300px] md:max-w-[280px] lg:max-w-[300px] aspect-[4/3] rounded-xl overflow-hidden border border-[#00f0ff]/25 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.8),0_0_24px_rgba(0,240,255,0.12)] ring-1 ring-inset ring-white/5 md:[transform:perspective(880px)_rotateY(-6deg)] md:origin-center transition-transform duration-500 md:hover:[transform:perspective(880px)_rotateY(-3deg)]">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="absolute inset-0 w-full h-full object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a1a]/50 via-transparent to-[#00f0ff]/5 pointer-events-none" />
                      <div className="absolute top-2.5 left-2.5 font-['JetBrains_Mono'] text-[9px] sm:text-[10px] tracking-[0.15em] uppercase text-[#00f0ff] bg-[#050510]/90 px-2 py-1 border border-[#00f0ff]/30 backdrop-blur-sm">
                        PROJECT_{String(index + 1).padStart(2, "0")}
                      </div>
                    </div>
                  </div>

                  {/* Right: about + stack */}
                  <div className="md:col-span-7 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                    <h3 className="text-xl md:text-2xl font-bold font-['Orbitron'] text-[#00f0ff] tracking-wide mb-3">
                      {project.name}
                    </h3>
                    <p className="text-sm text-[#8888aa] leading-relaxed mb-3">
                      {project.description}
                    </p>
                    {project.bullets?.length > 0 && (
                      <ul className="text-[12px] text-[#8888aa]/90 leading-relaxed mb-4 space-y-2 pl-3.5 list-disc marker:text-[#00f0ff]/50">
                        {project.bullets.map((line, bi) => (
                          <li key={bi}>{line}</li>
                        ))}
                      </ul>
                    )}
                    {project.acknowledgement && (
                      <p className="text-[11px] text-[#8888aa]/65 leading-relaxed italic mb-4 border-l-2 border-[#ff00aa]/25 pl-3">
                        {project.acknowledgement}
                      </p>
                    )}

                    <div className="flex items-center gap-2 mb-3">
                      <Layers size={16} className="text-[#ff00aa]" />
                      <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#8888aa]">
                        Tech stack
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="font-['JetBrains_Mono'] text-[10px] tracking-wider px-2.5 py-1 border border-[#00f0ff]/20 text-[#00f0ff]/80 bg-[#00f0ff]/5 uppercase"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider bg-[#00f0ff] text-[#050510] hover:bg-[#00f0ff]/85 transition-colors hud-card"
                        >
                          <ExternalLink size={14} /> Live demo
                        </a>
                      ) : (
                        <span className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider border border-[#00f0ff]/20 text-[#00f0ff]/35 cursor-default hud-card">
                          <ExternalLink size={14} /> Private / internal
                        </span>
                      )}
                      {project.source ? (
                        <a
                          href={project.source}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider border border-[#ff00aa]/45 text-[#ff00aa] hover:bg-[#ff00aa]/10 transition-colors hud-card"
                        >
                          <Github size={14} /> Source code
                        </a>
                      ) : (
                        <span className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider border border-[#ff00aa]/20 text-[#ff00aa]/35 cursor-default hud-card">
                          <Github size={14} /> Source private
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-1.5 mt-5 flex-wrap">
            {projects.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-8 bg-[#00f0ff] shadow-[0_0_10px_rgba(0,240,255,0.5)]"
                    : "w-2 bg-[#00f0ff]/25 hover:bg-[#00f0ff]/45"
                }`}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
