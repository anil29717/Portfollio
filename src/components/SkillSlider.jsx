import React, { useRef, useEffect, useState } from "react";
import {
    FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaJava, FaDatabase
} from "react-icons/fa";
import {
    SiMongodb, SiExpress, SiTailwindcss, SiTypescript, SiPython, SiCplusplus
} from "react-icons/si";

const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Express", icon: <SiExpress className="text-gray-200" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "MySQL", icon: <FaDatabase className="text-indigo-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "Java", icon: <FaJava className="text-red-600" /> },
    { name: "Python", icon: <SiPython className="text-blue-300" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
];

const SkillCard = ({ skill, index }) => {
    return (
        <div
            className="min-w-[150px] h-[120px] bg-gradient-to-br from-purple-900/40 to-indigo-900/40 backdrop-blur-sm text-white 
      flex flex-col items-center justify-center rounded-xl border border-purple-500/20
      transform transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20 
      hover:border-purple-400/50 group relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-fuchsia-500/0 to-purple-600/0 group-hover:from-purple-600/20 group-hover:via-fuchsia-500/20 group-hover:to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="text-4xl mb-3 transform transition-all duration-300 group-hover:scale-110 group-hover:text-white relative z-10">
                {skill.icon}
            </div>

            <div className="text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity relative z-10">
                {skill.name}
            </div>
        </div>
    );
};

const SkillSlider = () => {
    const slider1Ref = useRef(null);
    const slider2Ref = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const speed = 0.5; // Adjust speed here

        const slider1 = slider1Ref.current;
        const slider2 = slider2Ref.current;
        let animationFrame1;
        let animationFrame2;

        const scrollForward = () => {
            if (!isPaused && slider1) {
                slider1.scrollLeft += speed;
                if (slider1.scrollLeft >= slider1.scrollWidth / 2) {
                    slider1.scrollLeft = 0;
                }
            }
            animationFrame1 = requestAnimationFrame(scrollForward);
        };

        const scrollBackward = () => {
            if (!isPaused && slider2) {
                slider2.scrollLeft -= speed;
                if (slider2.scrollLeft <= 0) {
                    slider2.scrollLeft = slider2.scrollWidth / 2;
                }
            }
            animationFrame2 = requestAnimationFrame(scrollBackward);
        };

        animationFrame1 = requestAnimationFrame(scrollForward);
        animationFrame2 = requestAnimationFrame(scrollBackward);

        return () => {
            cancelAnimationFrame(animationFrame1);
            cancelAnimationFrame(animationFrame2);
        };
    }, [isPaused]);

    return (
        <section className="bg-gradient-to-b from-[#1a002e] to-[#14012b] py-20 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/20 to-transparent"></div>
            <div className="absolute w-64 h-64 rounded-full bg-purple-600/30 blur-3xl -top-32 -left-20"></div>
            <div className="absolute w-64 h-64 rounded-full bg-indigo-600/20 blur-3xl -bottom-32 -right-15 z-20"></div>

            <div className="max-w-7xl mx-auto px-2">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-violet-400 inline-block text-transparent bg-clip-text">
                        Tech Stack
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 mx-auto mt-2"></div>
                    <p className="text-purple-300 mt-4 max-w-2xl mx-auto">
                        Technologies I work with to bring ideas to life
                    </p>
                </div>

                {/* First slider - right to left */}
                <div className="relative mb-8 py-4">
                    <div className="absolute left-0 w-20 h-full z-10 bg-gradient-to-r from-[#14012b] to-transparent pointer-events-none"></div>
                    <div className="absolute right-0 w-20 h-full z-10 bg-gradient-to-l from-[#14012b] to-transparent pointer-events-none"></div>

                    <div
                        className="overflow-hidden relative w-full"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <div
                            ref={slider1Ref}
                            className="flex gap-6 w-max px-10 py-4 will-change-transform"
                            style={{ scrollBehavior: "auto", transform: "translateZ(0)" }}
                        >
                            {[...skills, ...skills].map((skill, index) => (
                                <SkillCard key={`slider1-${index}`} skill={skill} index={index} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Second slider - left to right (reversed direction) */}
                <div className="relative py-4">
                    <div className="absolute left-0 w-20 h-full z-10 bg-gradient-to-r from-[#14012b] to-transparent pointer-events-none"></div>
                    <div className="absolute right-0 w-20 h-full z-10 bg-gradient-to-l from-[#14012b] to-transparent pointer-events-none"></div>

                    <div
                        className="overflow-hidden relative w-full"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <div
                            ref={slider2Ref}
                            className="flex gap-6 w-max px-10 py-4"
                        >
                            {[...skills.slice().reverse(), ...skills.slice().reverse()].map((skill, index) => (
                                <SkillCard key={`slider2-${index}`} skill={skill} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillSlider;