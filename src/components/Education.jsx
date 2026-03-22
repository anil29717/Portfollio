import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, BookOpen, School, PercentIcon } from "lucide-react";

const educationData = [
  {
    institute: "Gurugram University",
    date: "2021 - 2025",
    course: "B.Tech in Computer Science (AI)",
    percentage: "80%"
  },
  {
    institute: "Suraj School",
    date: "2019 - 2021",
    course: "Science (PCM)",
    percentage: "96%"
  },
  {
    institute: "Jhankar School",
    date: "2017 - 2019",
    course: "Secondary Education",
    percentage: "85%"
  },
];

const EducationCard = ({ edu, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative flex flex-col md:flex-row">
      {/* Mobile */}
      <motion.div
        className="md:hidden w-full bg-[#0a0a1a] border border-[#00f0ff]/10 p-5 hud-card hover:border-[#00f0ff]/30 hover:shadow-[0_0_15px_rgba(0,240,255,0.08)] transition-all duration-400"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
      >
        <CardContent edu={edu} index={index} />
      </motion.div>

      {/* Desktop */}
      <motion.div
        className={`hidden md:block bg-[#0a0a1a] border border-[#00f0ff]/10 p-5 hud-card hover:border-[#00f0ff]/30 hover:shadow-[0_0_15px_rgba(0,240,255,0.08)] transition-all duration-400 w-5/12 ${
          isLeft ? "ml-0 mr-auto" : "mr-0 ml-auto"
        }`}
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
      >
        <CardContent edu={edu} index={index} />
      </motion.div>

      {/* Timeline dot */}
      <div className="hidden md:flex absolute top-5 left-1/2 -translate-x-1/2 z-10 items-center justify-center">
        <div className="w-3 h-3 bg-[#00f0ff] rounded-full shadow-[0_0_10px_rgba(0,240,255,0.6)] neon-border-pulse" />
        <div className="absolute w-6 h-6 border border-[#00f0ff]/20 rounded-full" />
      </div>
    </div>
  );
};

const CardContent = ({ edu, index }) => (
  <div className="relative">
    {/* HUD index label */}
    <div className="absolute top-0 right-0 font-['JetBrains_Mono'] text-[9px] text-[#00f0ff]/30 tracking-wider">
      NODE_{String(index + 1).padStart(2, '0')}
    </div>

    <div className="flex items-center gap-2 mb-2">
      <School size={16} className="text-[#00f0ff]" />
      <h3 className="text-sm font-bold font-['Orbitron'] text-[#e0e0ff] tracking-wide">{edu.institute}</h3>
    </div>
    <div className="flex items-center gap-2 mb-1.5">
      <Calendar size={12} className="text-[#ff00aa]/60" />
      <p className="font-['JetBrains_Mono'] text-[11px] text-[#8888aa]">{edu.date}</p>
    </div>
    <div className="flex items-center gap-2 mb-1.5">
      <BookOpen size={12} className="text-[#00f0ff]/50" />
      <p className="font-['JetBrains_Mono'] text-[11px] text-[#8888aa]">{edu.course}</p>
    </div>
    <div className="flex items-center gap-2">
      <PercentIcon size={12} className="text-[#00ff88]/50" />
      <p className="font-['JetBrains_Mono'] text-[11px] text-[#00ff88]/70">{edu.percentage}</p>
    </div>
  </div>
);

const EducationSection = () => (
  <section className="py-24 px-4 relative overflow-hidden cyber-grid-bg" id="education">
    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00f0ff]/15 to-transparent" />

    <div className="max-w-3xl mx-auto relative z-10">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-['Orbitron'] tracking-wider mb-3">
          <span className="text-[#00f0ff] glow-text-pulse">EDU</span>
          <span className="text-[#8888aa]">CATION</span>
        </h2>
        <div className="w-16 h-[2px] bg-gradient-to-r from-[#00f0ff] to-[#7b00ff] mx-auto shadow-[0_0_8px_rgba(0,240,255,0.4)]" />
      </motion.div>

      <div className="relative">
        {/* Neon timeline line */}
        <div className="absolute hidden md:block h-full top-0 left-1/2 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#00f0ff]/40 via-[#7b00ff]/30 to-[#ff00aa]/20 shadow-[0_0_6px_rgba(0,240,255,0.3)]" />
        <div className="space-y-8 md:space-y-12">
          {educationData.map((edu, index) => (
            <EducationCard key={index} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
