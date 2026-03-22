import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, Code, MapPin } from 'lucide-react';

const experiences = [
  {
    logo: 'https://cachedigitech.com/navbar-logo.svg',
    company: 'Cache Digitech Pvt. Ltd',
    project: 'Company Website & In-house HRMS Platform',
    role: 'Web Developer / IT Cloud Trainee',
    date: 'August 2025 – Present',
    location: 'Delhi',
    description: 'Developed and deployed the company\'s official website, replacing the legacy WordPress system with a scalable full-stack architecture. Designed and built an in-house HRMS platform to manage employee data, onboarding workflows, and internal operations. Implemented RBAC, RESTful APIs for authentication and employee management, and assisted in cloud infrastructure setup including VMs and database deployment.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'RBAC', 'REST APIs', 'Cloud']
  },
  {
    logo: '/salesqueen.jpeg',
    company: 'Salesqueen Software Solution',
    project: 'Working with live Project',
    role: 'Full Stack Developer Intern',
    date: 'March 2025 - August 2025',
    description: 'Worked as a Full Stack Developer at SalesQueen, handling both frontend and backend development. Used PHP (CodeIgniter 4) and MySQL for backend, and HTML, CSS, JavaScript for frontend. Managed and maintained websites, ensuring smooth performance and user-friendly design.',
    techStack: ['HTML', 'JavaScript', 'CodeIgniter 4', 'React Js']
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden cyber-grid-bg">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#ff00aa]/15 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-['Orbitron'] tracking-wider mb-3">
            <span className="text-[#ff00aa] neon-pink">EXP</span>
            <span className="text-[#8888aa]">ERIENCE</span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#ff00aa] to-[#00f0ff] mx-auto shadow-[0_0_8px_rgba(255,0,170,0.4)]" />
          <p className="text-[#8888aa] mt-4 text-sm font-['Rajdhani'] tracking-wide">
            Professional journey and projects I've contributed to
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <div className="relative h-full bg-[#0a0a1a] border border-[#ff00aa]/15 hud-card p-6 group hover:border-[#ff00aa]/40 hover:shadow-[0_0_20px_rgba(255,0,170,0.1)] transition-all duration-500">
                <div className="absolute left-0 top-3 bottom-3 w-[2px] bg-gradient-to-b from-[#ff00aa] via-[#7b00ff] to-[#00f0ff] shadow-[0_0_6px_rgba(255,0,170,0.5)]" />

                <div className="flex items-start gap-4 mb-4 pl-3">
                  <div className="shrink-0 w-12 h-12 bg-[#0f0f20] border border-[#00f0ff]/20 rounded-lg p-1.5 flex items-center justify-center overflow-hidden">
                    <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm md:text-base font-bold font-['Orbitron'] text-[#e0e0ff] tracking-wide leading-tight">
                      {exp.company}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5">
                      <span className="flex items-center gap-1.5 text-xs text-[#00f0ff]/60 font-['JetBrains_Mono']">
                        <Calendar size={11} />
                        {exp.date}
                      </span>
                      {exp.location && (
                        <span className="flex items-center gap-1 text-xs text-[#ff00aa]/50 font-['JetBrains_Mono']">
                          <MapPin size={11} />
                          {exp.location}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="pl-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <Briefcase size={13} className="text-[#ff00aa] shrink-0" />
                    <p className="text-sm font-semibold text-[#e0e0ff]">{exp.role}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Code size={13} className="text-[#00f0ff] shrink-0" />
                    <p className="text-sm text-[#8888aa]">{exp.project}</p>
                  </div>
                  <p className="text-[13px] text-[#8888aa] leading-relaxed mt-3">{exp.description}</p>

                  <div className="flex flex-wrap gap-2 mt-4 pt-2">
                    {exp.techStack.map((tech, i) => (
                      <span key={i} className="font-['JetBrains_Mono'] text-[10px] tracking-wider px-2.5 py-1 border border-[#00f0ff]/15 text-[#00f0ff]/70 bg-[#00f0ff]/5 uppercase">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
