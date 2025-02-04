import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiExpress, SiPostman, SiDart, SiFlutter, SiJavascript, SiTailwindcss, SiMongodb, SiFirebase, SiC } from "react-icons/si";

const skills = [
    { name: "C Language", icon: <SiC className="text-blue-500 text-4xl" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-4xl" /> },
    { name: "Express", icon: <SiExpress className="text-gray-600 text-4xl" /> },
    { name: "NodeJS", icon: <FaNodeJs className="text-green-600 text-4xl" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500 text-4xl" /> },
    { name: "Dart", icon: <SiDart className="text-blue-400 text-4xl" /> },
    { name: "Flutter", icon: <SiFlutter className="text-blue-500 text-4xl" /> },
    { name: "React", icon: <FaReact className="text-blue-400 text-4xl" /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
    { name: "CSS", icon: <FaCss3 className="text-blue-600 text-4xl" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500 text-4xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500 text-4xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-4xl" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-600 text-4xl" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-4xl" /> },
];

const experiences = [
    { year: "2024", role: "Front-end Developer", company: "Dutta Integrated Services." },
];

const SkillsExperiences = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="container max-w-7xl px-8 ">
                <h2 className="text-3xl font-bold text-left mb-10" data-aos="fade-up">
                    Skills & Experiences
                </h2>
                <div className="grid md:grid-cols-2 gap-20">
                    {/* Skills Section */}
                    <div className="grid grid-cols-4 gap-4" data-aos="fade-right">
                        {skills.map((skill, index) => (
                            <div key={index} className="flex flex-col items-start">
                                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center shadow-md">
                                    {skill.icon}
                                </div>
                                <p className="mt-2 text-sm font-medium">{skill.name}</p>
                            </div>
                        ))}
                    </div>
                    {/* Experiences Section */}
                    <div data-aos="fade-left">
                        {experiences.map((exp, index) => (
                            <div key={index} className="mb-5">
                                <h3 className="text-xl font-bold text-indigo-600">{exp.year}</h3>
                                <p className="text-lg font-medium">{exp.role}</p>
                                <p className="text-gray-500">{exp.company}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsExperiences;
