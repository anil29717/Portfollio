import React from "react";
import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaJava, FaDatabase
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiPostgresql,
  SiDocker,
  SiGooglecloud,
  SiGithubactions,
  SiAnsible,
  SiAmazons3,
} from "react-icons/si";

const row1 = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React", icon: <FaReact /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express", icon: <SiExpress /> },
];

const row2 = [
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MySQL", icon: <FaDatabase /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "GCP", icon: <SiGooglecloud /> },
  { name: "CI/CD", icon: <SiGithubactions /> },
  { name: "Automation", icon: <SiAnsible /> },
  { name: "Storage", icon: <SiAmazons3 /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Python", icon: <SiPython /> },
  { name: "C++", icon: <SiCplusplus /> },
];

const SkillCard = ({ skill }) => (
  <div className="w-[100px] h-[90px] sm:w-[110px] sm:h-[95px] md:w-[120px] md:h-[100px] bg-[#0a0a1a] border border-[#00f0ff]/10 text-[#e0e0ff] flex flex-col items-center justify-center gap-2 shrink-0 transition-all duration-400 hover:border-[#00f0ff]/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.15)] hover:bg-[#00f0ff]/5 group relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/0 to-[#ff00aa]/0 group-hover:from-[#00f0ff]/5 group-hover:to-[#ff00aa]/5 transition-all duration-500" />
    <div className="text-2xl md:text-3xl text-[#8888aa] group-hover:text-[#00f0ff] transition-colors duration-300 relative z-10">
      {skill.icon}
    </div>
    <div className="text-[10px] md:text-xs font-['JetBrains_Mono'] tracking-wider text-[#8888aa] group-hover:text-[#e0e0ff] transition-colors relative z-10 uppercase">
      {skill.name}
    </div>
  </div>
);

function MarqueeRow({ skills, direction = "left", duration = 25 }) {
  const doubled = [...skills, ...skills];
  return (
    <div className="relative py-2 overflow-hidden group/marquee">
      <div className="absolute left-0 top-0 w-16 sm:w-24 h-full z-10 bg-gradient-to-r from-[#050510] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 w-16 sm:w-24 h-full z-10 bg-gradient-to-l from-[#050510] to-transparent pointer-events-none" />
      <div
        className="flex gap-3 sm:gap-4 w-max"
        style={{
          animation: `marquee-${direction} ${duration}s linear infinite`,
        }}
        onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
        onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
      >
        {doubled.map((s, i) => <SkillCard key={i} skill={s} />)}
      </div>
    </div>
  );
}

const SkillSlider = () => (
  <section className="py-20 relative overflow-hidden">
    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00f0ff]/15 to-transparent" />

    <div className="max-w-7xl mx-auto px-2">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-['Orbitron'] tracking-wider mb-3">
          <span className="text-[#00f0ff] glow-text-pulse">TECH</span>
          <span className="text-[#8888aa]"> STACK</span>
        </h2>
        <div className="w-16 h-[2px] bg-gradient-to-r from-[#00f0ff] to-[#ff00aa] mx-auto shadow-[0_0_8px_rgba(0,240,255,0.4)]" />
        <p className="text-[#8888aa] mt-4 text-sm font-['Rajdhani'] tracking-wide">
          Technologies I work with to bring ideas to life
        </p>
      </motion.div>

      <div className="space-y-4">
        <MarqueeRow skills={row1} direction="left" duration={22} />
        <MarqueeRow skills={row2} direction="right" duration={20} />
      </div>
    </div>

    <style>{`
      @keyframes marquee-left {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      @keyframes marquee-right {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0); }
      }
    `}</style>
  </section>
);

export default SkillSlider;
