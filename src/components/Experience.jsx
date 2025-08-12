import React from 'react';
import { Calendar, Briefcase, Code, ArrowRight } from 'lucide-react';

const experiences = [
  {
    logo: '/salesqueen.jpeg',
    company: 'Salesqueen Software Solution',
    project: 'Working with live Project',
    role: 'Full Stack Developer Intern',
    date: 'March 2025 - Present',
    description: 'Working as a Full Stack Developer at SaleQueen, handling both frontend and backend development. I use PHP (CodeIgniter 4) and MySQL for backend, and HTML, CSS, JavaScript for frontend. I manage and maintain websites, ensuring smooth performance and user-friendly design.',
    techStack: ['HTML', 'Javascript', 'Coigniter 4','React Js']
  },
  // Add more experiences here
];

const ExperienceCard = ({ experience }) => {
  return (
    <div className="relative group">
      {/* Connector line for timeline effect */}
      <div className="absolute left-8 top-24 h-full w-0.5 bg-gradient-to-b from-purple-500 to-transparent hidden md:block group-last:hidden"></div>
      
      <div className="backdrop-blur-xl bg-gradient-to-br from-purple-900/30 to-indigo-900/30 border border-white/10 rounded-2xl p-6 shadow-lg transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:border-purple-500/30 relative z-10">
        <div className="flex items-start gap-4 mb-6">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative w-16 h-16 bg-white rounded-xl p-2 flex items-center justify-center overflow-hidden">
              <img src={experience.logo} alt={experience.company} className="w-full h-full object-contain" />
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">{experience.company}</h3>
            <div className="flex items-center gap-2 text-sm text-purple-200 mt-1">
              <Calendar size={14} className="opacity-70" />
              <span>{experience.date}</span>
            </div>
          </div>
        </div>
        
        <div className="ml-0 md:ml-20">
          <div className="flex items-center gap-2 mb-2">
            <Briefcase size={16} className="text-purple-400" />
            <p className="text-lg font-medium text-white">{experience.role}</p>
          </div>
          
          <div className="flex items-center gap-2 mb-4">
            <Code size={16} className="text-purple-400" />
            <p className="text-md font-medium text-white">{experience.project}</p>
          </div>
          
          <p className="text-gray-300 mb-4">{experience.description}</p>
          
          <div className="flex flex-wrap gap-2 mt-3">
            {experience.techStack.map((tech, index) => (
              <span key={index} className="text-xs px-3 py-1 bg-purple-900/50 text-purple-200 rounded-full border border-purple-700/30">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-purple-300 flex items-center gap-1 text-sm">
          <span>View Details</span>
          <ArrowRight size={14} />
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="bg-gradient-to-b from-[#14012b] to-[#1a002e] text-white px-6 py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-20"></div>
      <div className="absolute w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -top-48 -right-48"></div>
      <div className="absolute w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl -bottom-48 -left-48"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-violet-400 inline-block text-transparent bg-clip-text">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 mx-auto mt-2"></div>
          <p className="text-purple-300 mt-4 max-w-2xl mx-auto">
            Professional journey and projects I've contributed to
          </p>
        </div>
        
        <div className="space-y-8 md:space-y-12">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} experience={exp} />
          ))}
        </div>
        
        
      </div>
    </section>
  );
};

export default Experience;
