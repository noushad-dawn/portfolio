import React from "react";

const AboutMe = () => {
    return (
        <section className="bg-white text-black py-12 sm:px-6 ">
            <div className="max-w-7xl mx-auto my-12 flex flex-col px-8 md:flex-row items-center gap-12">
                {/* Left Content */}
                <div className="flex-1">
                    <h2 className="text-4xl font-bold mb-4 flex items-center gap-2">
                        <span className="text-orange-400 text-2xl">⚡</span> About Me
                    </h2>

                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        Hey! I'm <span className="text-black font-semibold">Mohammad Noushad</span>,
                        I've been close to a computer since an early age, and been passionate
                        about it ever since.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        I have always been fascinated by technology and how it can solve real-world problems.
                        My journey started with exploring <span className="text-green-500">creative tools</span> and soon transitioned
                        into coding, where I discovered my passion for building innovative solutions. Over the years,
                        I've had the opportunity to work with a <span className="text-blue-500">Recruitment Company</span> and a
                        <span className="text-blue-500">SaaS Company</span>, gaining valuable experience in various aspects of software
                        development. My focus now lies in crafting impactful projects in
                        <span className="text-green-500"> Web & Mobile Development</span>, contributing to <span className="text-green-500">Open Source</span>,
                        and solving challenging problems through <span className="text-green-500">Competitive Programming</span>.
                    </p>

                    <p className="text-gray-600 text-lg leading-relaxed">
                        When I'm not coding I play games with my friends, watch some show on Netflix,
                        or if the weather's good, play basketball! <span className="text-orange-400">🏀</span>
                    </p>
                </div>

                {/* Right Image */}
                <div className="flex-1 relative">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                        <img
                            src="./assets/myimage.jpg" // Replace with actual profile image
                            alt="Mohammad Noushad"
                            className="rounded-full object-cover w-full h-full"
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
                                <circle cx="5" cy="5" r="5" fill="currentColor" />
                                <circle cx="25" cy="5" r="5" fill="currentColor" />
                                <circle cx="45" cy="5" r="5" fill="currentColor" />
                                <circle cx="65" cy="5" r="5" fill="currentColor" />
                                <circle cx="85" cy="5" r="5" fill="currentColor" />
                                <circle cx="5" cy="25" r="5" fill="currentColor" />
                                <circle cx="25" cy="25" r="5" fill="currentColor" />
                                <circle cx="45" cy="25" r="5" fill="currentColor" />
                                <circle cx="65" cy="25" r="5" fill="currentColor" />
                                <circle cx="85" cy="25" r="5" fill="currentColor" />
                                <circle cx="5" cy="45" r="5" fill="currentColor" />
                                <circle cx="25" cy="45" r="5" fill="currentColor" />
                                <circle cx="45" cy="45" r="5" fill="currentColor" />
                                <circle cx="65" cy="45" r="5" fill="currentColor" />
                                <circle cx="85" cy="45" r="5" fill="currentColor" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
