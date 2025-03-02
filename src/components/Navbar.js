import React, { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-transparent backdrop-blur-lg fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div>
              <h1 className="text-2xl font-bold text-black">Noushad Dawn</h1>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#home" className="text-black hover:text-gray-300 font-medium">Home</a>
              <a href="#about" className="text-black hover:text-gray-300 font-medium">About</a>
              <a href="#projects" className="text-black hover:text-gray-300 font-medium">Projects</a>
              <a href="#contact" className="text-black hover:text-gray-300 font-medium">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Fullscreen */}
      <div
        className={`fixed inset-0 bg-white bg-opacity-30 backdrop-blur-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6 p-8">
          <button onClick={() => setIsOpen(false)} className="absolute top-5 right-5 text-black focus:outline-none">
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <a href="#home" className="text-black hover:text-gray-700 font-medium text-2xl" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" className="text-black hover:text-gray-700 font-medium text-2xl" onClick={() => setIsOpen(false)}>About</a>
          <a href="#projects" className="text-black hover:text-gray-700 font-medium text-2xl" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact" className="text-black hover:text-gray-700 font-medium text-2xl" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
