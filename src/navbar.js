import React, { useState } from "react";
import { Sun, Moon } from "react-feather";

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

 
  const DarkModeToggle = () => (
    <button
      onClick={toggleDarkMode}
      className="relative w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300 focus:outline-none"
    >
      <div
        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
          isDarkMode ? "translate-x-6" : "translate-x-0"
        }`}
      ></div>
      <Sun
        className={`absolute left-1 text-yellow-400 transition-opacity duration-300 ${
          isDarkMode ? "opacity-0" : "opacity-100"
        }`}
        size={16}
      />
      <Moon
        className={`absolute right-1 text-gray-900 dark:text-yellow-400 transition-opacity duration-300 ${
          isDarkMode ? "opacity-100" : "opacity-0"
        }`}
        size={16}
      />
    </button>
  );

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-filter backdrop-blur-sm shadow-lg dark:bg-gray-900/80 transition-colors duration-300 ease-in-out">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex-shrink-0">
            <a
              href="#home"
              className="text-xl font-bold text-gray-900 dark:text-white"
            >
              My Portfolio
            </a>
          </div>

         
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#about"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
            >
              Contact
            </a>
            <a
              href="#footer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
            >
              Footer
            </a>

            
            <div className="ml-4">
              <DarkModeToggle />
            </div>
          </div>

   
          <div className="flex md:hidden items-center space-x-2">
            <DarkModeToggle />
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 shadow-md">
            <a
              href="#about"
              onClick={toggleMenu}
              className="text-gray-600 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={toggleMenu}
              className="text-gray-600 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={toggleMenu}
              className="text-gray-600 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={toggleMenu}
              className="text-gray-600 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            >
              Contact
            </a>
            <a
              href="#footer"
              onClick={toggleMenu}
              className="text-gray-600 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            >
              Footer
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
