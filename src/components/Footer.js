import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="container mx-auto px-6">
        {/* Social Media Links */}
        <div className="flex justify-center space-x-8 mb-8">
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400 transition-all"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400 transition-all"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/your-twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400 transition-all"
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:your-email@example.com"
            className="text-2xl hover:text-gray-400 transition-all"
          >
            <HiMail />
          </a>
        </div>

        {/* Copyright Notice */}
        <div className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Mohammad Noushad. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;