const Footer = () => {
  return (
    <footer
      id="footer"
      role="contentinfo"
      className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-600 dark:text-gray-400 py-8 px-4 text-center transition-colors duration-500"
    >
      <div className="container mx-auto">
        <p className="text-sm sm:text-base">
          &copy; {new Date().getFullYear()} <span className="font-semibold">Gemachis Tesfaye</span>. All rights reserved.
        </p>
        <div className="mt-2 space-x-4">
         
          <a href="https://github.com/urjiiko1" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors duration-300">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/gemachis-tesfaye-137196318" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors duration-300">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
