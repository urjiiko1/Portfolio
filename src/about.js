import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Linkedin, GitHub } from 'react-feather';

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="about"
      className="text-gray-900 dark:text-gray-100 py-16 px-8 transition-colors duration-300"
    >
      <div className="container mx-auto">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            A brief introduction to who I am and what I do.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-12">
          {/* Profile Image */}
          <div
            className={`w-full lg:w-1/3 mb-12 lg:mb-0 transform transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '150ms' }}
          >
            <img
              src="/Profile.jpg"
              alt="Profile"
              className="rounded-full shadow-lg border-4 border-indigo-500 mx-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* About Text */}
          <div
            className={`w-full lg:w-2/3 transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <p className="text-lg leading-relaxed mb-6 text-gray-800 dark:text-gray-300">
                I am a passionate Information Science student with a strong interest
                in front-end development and data-driven solutions. I have built
                skills in HTML, CSS, JavaScript, React, and Python through academic
                projects and personal learning.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-gray-800 dark:text-gray-300">
                I am continuously expanding my expertise in modern technologies like
                Tailwind CSS, databases, and data visualization. My goal is to apply
                these skills to real-world projects and contribute to innovative
                solutions that create real impact.
              </p>
              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/gemachis-tesfaye-137196318"
                  aria-label="LinkedIn profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/urjiiko1"
                  aria-label="GitHub profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
                >
                  <GitHub size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
