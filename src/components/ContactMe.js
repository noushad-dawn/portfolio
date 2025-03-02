import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const ContactMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000,
      once: false, // Ensures animation runs every time
      mirror: true,
     }); // Initialize AOS
  }, []);

  return (
    <div id='contact' className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-6.5xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Section: Contact Form */}
        <div
          className="w-full md:w-1/2 p-8"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Me</h1>
          <p className="text-gray-600 mb-8">
            Have a question or want to work together? Feel free to reach out!
          </p>

          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                placeholder="Your message..."
                required
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-gray-800 text-white py-3 px-4 rounded-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Right Section: Social Links */}
        <div
          className="w-full md:w-1/2 bg-gray-800 p-8 flex flex-col items-center justify-center"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Let's Connect</h2>
          <p className="text-gray-200 text-center mb-8">
            Reach out to me via WhatsApp, LinkedIn, or email for collaborations and inquiries.
          </p>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/your-whatsapp-number"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-xs bg-green-500 text-white py-3 px-4 rounded-lg mb-4 flex items-center justify-center hover:bg-green-600 transition-all"
          >
            <FaWhatsapp className="h-6 w-6 mr-2" />
            WhatsApp
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-xs bg-blue-600 text-white py-3 px-4 rounded-lg mb-4 flex items-center justify-center hover:bg-blue-700 transition-all"
          >
            <FaLinkedin className="h-6 w-6 mr-2" />
            LinkedIn
          </a>

          {/* Email Button */}
          <a
            href="mailto:your-email@example.com"
            className="w-full max-w-xs bg-gray-700 text-white py-3 px-4 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-all"
          >
            <HiMail className="h-6 w-6 mr-2" />
            Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;