import React from "react";
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

const EducationSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#1a002e] to-[#2b034d] text-white py-12 px-4" id="education">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-purple-200 flex items-center justify-center gap-2">
          <GraduationCap className="text-violet-300" size={28} />
          <span>Education</span>
        </h2>

        {/* Timeline container */}
        <div className="relative">
          {/* The vertical timeline line */}
          <div className="absolute hidden md:block h-full top-0 left-1/2 w-0.5 -translate-x-1/2 bg-gradient-to-b from-violet-400 via-fuchsia-500 to-indigo-500"></div>

          <div className="space-y-8 md:space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="relative flex flex-col md:flex-row"
              >
                {/* For mobile: simple stacked layout */}
                <div className="md:hidden w-full backdrop-blur-md bg-indigo-900/30 border border-violet-500/20 p-4 rounded-lg shadow-md">
                  <div className="flex items-center gap-2 mb-1">
                    <BookOpen className="text-violet-300" size={18} />
                    <h3 className="text-xl font-semibold text-violet-200">{edu.institute}</h3>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="text-violet-400" size={14} />
                    <p className="text-xs text-violet-300 font-medium">{edu.date}</p>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="text-violet-400" size={14} />
                    <p className="text-xs text-violet-300 font-medium">{edu.course}</p>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <PercentIcon className="text-violet-400" size={14} />
                    <p className="text-xs text-violet-300 font-medium">{edu.percentage}</p>
                  </div>
                </div>

                {/* For desktop: timeline layout */}
                <div
                  className={`hidden md:block backdrop-blur-md bg-indigo-900/30 border border-violet-500/20 p-4 rounded-lg shadow-md hover:shadow-violet-500/10 transition-all duration-300 w-5/12 ${index % 2 === 0 ? "ml-0 mr-auto" : "mr-0 ml-auto"
                    }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <School className="text-violet-300" size={18} />
                    <h3 className="text-xl font-semibold text-violet-200">{edu.institute}</h3>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="text-violet-400" size={14} />
                    <p className="text-xs text-violet-300 font-medium">{edu.date}</p>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="text-violet-400" size={14} />
                    <p className="text-xs text-violet-300 font-medium">{edu.course}</p>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <PercentIcon className="text-violet-400" size={14} />
                    <p className="text-xs text-violet-300 font-medium">{edu.percentage}</p>
                  </div>
                </div>

                {/* Timeline dots - only visible on desktop */}
                <div className="hidden md:block absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-3 h-3 bg-violet-600 rounded-full"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-violet-500 rounded-full animate-pulse"></div>
                  <div className="absolute -inset-1 bg-violet-400 rounded-full blur opacity-30"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;