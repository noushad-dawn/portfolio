import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Ensures animation runs every time
      mirror: true,
    });
  }, []);

  const projects = [
    {
      id: 1,
      name: "College Updates",
      description:
        "A social media platform designed for my college community to connect, share news, notes, and updates. Built with the MERN stack, it enables students and faculty to engage effortlessly. Integrated Cloudinary for secure and efficient image and video storage.",
      tags: ["React js", "Node js", "Express js", "MongoDB", "Cloudinary", "Tailwind css"],
      thumbnail: "./assets/p1.png", // Replace with actual image URL
      link: "#",
    },
    {
      "id": 2,
      "name": "CRM Web App",
      "description": "A customer relationship management (CRM) web application built with the MERN stack. Designed for efficient order management, driver assignments, and customer interactions. Features include real-time updates, role-based access, and an intuitive UI. Tailwind CSS enhances the styling, while MongoDB ensures seamless data storage.",
      "tags": ["React js", "Node js", "Express js", "MongoDB", "Tailwind css"],
      "thumbnail": "./assets/p2.jpg", // Replace with actual image URL
      "link": "#"
    },
    {
      "id": 3,
      "name": "Animal Rescue App",
      "description": "A compassionate platform built with Flutter and Node.js to rescue and support stray animals. Users can report animals in need, find nearby shelters, and volunteer for rescues. The backend ensures smooth data processing, while the intuitive UI enhances user experience.",
      "tags": ["Flutter", "Node.js", "Express.js", "MongoDB", "Firebase"],
      "thumbnail": "./assets/p3.jpg", // Replace with actual image URL
      "link": "#"
    }
    ,
  ];

  return (
    <section id="projects" className="bg-white text-black py-12 lg:mx-12 lg:px-9 sm:px-6 lg:px-8">
      <div className="max-w-8xl lg:px-10  py-12">
        <section

          className="min-h-screen bg-white text-black  mx-5"
          data-aos="fade-up"
        >
          {/* Header Section */}
          <h2 className="text-5xl font-bold px-4 text-left mb-4">All Creative Works.</h2>
          <p className="text-left px-4 text-gray-400 text-lg mb-6">
            Here's some of my projects that I have worked on.
          </p>
          <div className="text-left px-4 mb-10">
            <a
              href="#"
              className="text-grey-400 text-lg font-medium hover:underline"
            >
              Explore more →
            </a>
          </div>

          {/* Staggered Projects */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`flex flex-col md:flex-row items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                data-aos="fade-up"
              >
                {/* Project Thumbnail */}
                <div className="w-full md:w-1/2 p-4" data-aos="zoom-in">
                  <img
                    src={project.thumbnail}
                    alt={project.name}
                    className="rounded-lg border border-black h-64 w-full object-cover"
                  />

                </div>

                {/* Project Details */}
                <div className="w-full md:w-1/2 p-4" data-aos="fade-left">
                  <h3 className="text-2xl font-bold mb-3">{project.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-700 text-white text-xs px-2 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-grey-400 text-sm font-medium hover:underline flex items-center"
                  >
                    View Repository
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-4 h-4 ml-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5l6 6m0 0l-6 6m6-6H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Projects;
