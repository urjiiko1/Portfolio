import React from 'react';
import { useInView } from 'react-intersection-observer';

const Skill = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const skillsData = [
    {
      title: 'Programming Languages & Frameworks',
      items: [
        { name: 'HTML', level: 90, color: 'bg-orange-500', img: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
        { name: 'CSS', level: 85, color: 'bg-blue-600', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
        { name: 'Python', level: 60, color: 'bg-blue-300', img: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
        { name: 'JavaScript', level: 70, color: 'bg-yellow-400', img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
         { name: 'React', level: 50, color: 'bg-blue-400', img: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' }
      ]
    },
    {
      title: 'Databases & Analytics',
      items: [
        { name: 'MySQL', level: 90, color: 'bg-blue-700', img: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png' },
        { name: 'MongoDB', level: 70, color: 'bg-green-600', img: 'https://cdn.iconscout.com/icon/free/png-256/mongodb-4-1175139.png' },
        { name: 'Power BI', level: 60, color: 'bg-yellow-500', img: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' }
      ]
    },
    {
      title: 'Tools & Software',
      items: [
        { name: 'Git', level: 70, color: 'bg-red-600', img: 'https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png' },
        { name: 'VS Code', level: 90, color: 'bg-blue-500', img: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg' },
        { name: 'Tailwind CSS', level: 60, color: 'bg-teal-400', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' }
      ]
    }
  ];

  return (
    <section
      id="skills"
      className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ease-in-out"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto">
            A comprehensive look at the tools and technologies I'm proficient in.
          </p>
        </div>

        <div ref={ref} className={`space-y-12 transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          {skillsData.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className={`bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-xl flex flex-col items-center text-center transform transition-all duration-700
                      ${inView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
                    `}
                  >
                    <div
                      className={`h-16 w-16 mb-4 flex-shrink-0 transform transition-transform duration-700
                        ${inView ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}
                      `}
                    >
                      <img src={skill.img} alt={skill.name} className="h-full w-full object-contain" />
                    </div>
                    <p className="text-xl font-semibold text-gray-900 dark:text-white">{skill.name}</p>
                    
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2 overflow-hidden">
                      <div
                        className={`${skill.color} h-2 rounded-full transition-all duration-1000 ease-in-out`}
                        style={{ width: inView ? `${skill.level}%` : '0%' }}
                      ></div>
                    </div>
                    <span className="mt-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                      {skill.level}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
