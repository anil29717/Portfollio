import React, { useState } from "react";

const projects = [
  {
    name: "Pytutor",
    description: "An interactive platform to learn Python through live coding challenges.",
    technologies: ["React", "Python", "Gemini API", "MongoDB"],
    image: "/pytutor.PNG",
    live: "https://pitutor-ehfj.onrender.com/",
    source: "https://github.com/anil29717/PiTutor",
  },
  {
    name: "FinanceBus",
    description: "A finance management app to track expenses, savings, and investments.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "GeminiAPI"],
    image: "/finance.PNG",
    live: "https://finance-me-green.vercel.app/",
    source: "https://github.com/anil29717/FinanceMe",
  },
  {
    name: "Volunteer and Donor Website",
    description: "Connect volunteers with NGOs and manage donations with ease.",
    technologies: ["ReactJs", "CSS", "MongoDb", "Nodejs", "Cloudinary"],
    image: "/volunteer.PNG",
    live: "https://dharmakarm-foundation.vercel.app/  ",
    source: "https://github.com/anil29717/Dharmakarm-foundation",
  },
  {
    name: "Task Management",
    description: "Organize daily tasks with priorities and deadlines. Great for teams too.",
    technologies: ["React Vite", "Node.js", "MongoDB"],
    image: "/taskmate.PNG",
    live: "https://task-mate-gray.vercel.app/",
    source: "https://github.com/anil29717/TaskMate",
  },
  {
    name: "Background Remover",
    description: "Remove background from images using AI and ML algorithms.",
    technologies: ["ReactJs", "Python", "Tailwind CSS"],
    image: "/background remover.PNG",
    live: "https://background-remover-sigma.vercel.app/",
    source: "https://github.com/anil29717/BackgroundRemover",
  },
  {
    name: "Portfolio",
    description: "My personal portfolio website built using React and Tailwind CSS.",
    technologies: ["React", "Vite", "Tailwind CSS"],
    image: "/portfolioimage.PNG",
    live: "#",
    source: "#",
  },
];

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 hover:shadow-2xl relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        transformStyle: 'preserve-3d',
        transform: isHovered ? 'translateY(-10px)' : 'translateY(0)'
      }}
    >
      <div className="relative overflow-hidden h-52">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-700 transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6 w-full">
            <div className="flex gap-3 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white px-4 py-2 rounded-lg hover:from-fuchsia-600 hover:to-purple-600 transition-all duration-300 text-sm font-medium flex-1 text-center"
              >
                Live Demo
              </a>
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border border-purple-400 text-white px-4 py-2 rounded-lg hover:bg-purple-800/50 transition-colors duration-300 text-sm font-medium flex-1 text-center"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors duration-300">
          {project.name}
        </h3>
        <p className="mb-4 text-gray-300 text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-1">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="bg-purple-800/50 backdrop-blur-sm text-xs px-3 py-1 rounded-full border border-purple-700/30 text-purple-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/50 rounded-2xl transition-colors duration-300 pointer-events-none"></div>
    </div>
  );
};

const ProjectSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#1a002e] to-[#14012b] text-white py-20 px-4" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-violet-500 inline-block text-transparent bg-clip-text">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 mx-auto mt-2"></div>
          <p className="text-purple-300 mt-4 max-w-2xl mx-auto">
            Explore my recent work and creative solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;