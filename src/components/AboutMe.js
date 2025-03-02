import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false }); // Initializes AOS
    }, []);

    return (
        <section id="about" className="bg-white text-black py-12 sm:px-6">
            <div className="max-w-7xl mx-auto my-8 flex flex-col px-8 md:flex-row items-center gap-12">
                
                {/* Left Content */}
                <div className="flex-1" data-aos="fade-up">
                    <h2 className="text-4xl font-bold mb-4 flex items-center gap-2">
                        <span className="text-orange-400 text-2xl">⚡</span> About Me
                    </h2>

                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        Hey! I'm <span className="text-black font-semibold">Mohammad Noushad</span>,
                        I've been close to a computer since an early age and have been passionate
                        about it ever since.
                    </p>

                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        I have always been fascinated by technology and how it can solve real-world problems.
                        My journey started with exploring <span className="text-green-500">creative tools</span> and soon transitioned into coding, where I discovered my passion for building innovative solutions.
                        Over time, I've worked on projects like a <span className="text-blue-500">College Updates Platform</span> using MERN and a 
                        <span className="text-blue-500"> CRM Web App</span> for managing driver orders.
                    </p>

                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        I enjoy working with <span className="text-green-500">MERN Stack</span> and contributing to <span className="text-green-500">Web & Mobile Development</span>.
                        My focus now lies in building scalable applications, improving user experience, and continuously learning new technologies to stay ahead in the ever-evolving tech landscape.
                    </p>

                    <p className="text-gray-600 text-lg leading-relaxed">
                        When I'm not coding, I play games with my friends, watch some shows on Netflix,
                        or spend time drawing and exploring my creative side! <span className="text-orange-400 text-2xl">🎨</span>
                    </p>
                </div>

                {/* Right Image */}
                <div className="flex-1 relative" data-aos="fade-left">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto shadow-lg rounded-full overflow-hidden">
                        <img
                            src="./assets/myimage.jg" // Ensure correct file extension
                            alt="Mohammad Noushad"
                            className="rounded-full object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute top-0 right-0 -z-10">
                            <svg
                                width="200"
                                height="200"
                                viewBox="0 0 100 100"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-gray-300 opacity-30"
                            >
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
