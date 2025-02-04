import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { ReactTyped as Typed } from 'react-typed';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';  // Correct CSS import for Swiper v8+
import { EffectCards } from 'swiper';

const ProfileSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-white text-black min-h-screen flex flex-col md:flex-row justify-center items-center mt-10 pt-12 px-20 mx-7 font-sans">
      {/* Left Side: Profile Text */}
      <div className="flex flex-col items-start max-w-4xl px-6 md:px-12 md:w-1/2">
        <h1
          className="text-4xl md:text-5xl mb-4 md:mb-6 font-light text-gray-800"
          data-aos="fade-up"
        >
          Hey there!, I'm-
        </h1>
        <h1
          className="text-5xl md:text-6xl font-bold mb-4 md:mb-6 text-black"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Mohammad Noushad.
        </h1>
        <div
          className="text-xl md:text-2xl mt-4 text-gray-700"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Typed
            strings={['Software Engineer.', 'Frontend Developer.', 'Lifelong Learner.']}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </div>
        <div className="mt-6 md:mt-8" data-aos="fade-up" data-aos-delay="600">
          <p className="text-base md:text-lg mb-3 md:mb-4 text-gray-600">
            🚀 Currently specializing in Frontend (React.js)
          </p>
          <p className="text-base md:text-lg text-gray-600">⚡ Frontend Engineer at GGL</p>
        </div>
        <div
          className="flex flex-row sm:flex-row gap-4 sm:gap-6 mt-8 md:mt-10"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <a
            href="#"
            className="flex items-center gap-2 text-gray-700 bg-gray-100 text-sm md:text-lg px-4 md:px-6 py-2 md:py-3 rounded shadow hover:bg-gray-200 transition"
          >
            <FaGithub className="text-lg md:text-xl" />
            Github
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-gray-700 bg-gray-100 text-sm md:text-lg px-4 md:px-6 py-2 md:py-3 rounded shadow hover:bg-gray-200 transition"
          >
            <FaLinkedin className="text-lg md:text-xl" />
            LinkedIn
          </a>
          <a
            href="mailto:"
            className="flex items-center gap-2 text-gray-700 bg-gray-100 text-sm md:text-lg px-4 md:px-6 py-2 md:py-3 rounded shadow hover:bg-gray-200 transition"
          >
            <FaEnvelope className="text-lg md:text-xl" />
            Email
          </a>
        </div>
      </div>

      {/* Right Side: Image Slider */}
      <div className="relative mt-12 md:mt-0 md:w-1/2">
        <Swiper
          effect="cards"
          grabCursor={true}
          modules={[EffectCards]} // Apply the EffectCards module here
          className="w-80 h-96"
        >
          <SwiperSlide>
            <img
              src="./assets/p1.jpg"
              alt="Project 1"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./assets/p2.jpg"
              alt="Project 2"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./assets/p3.jpg"
              alt="Project 3"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ProfileSection;
