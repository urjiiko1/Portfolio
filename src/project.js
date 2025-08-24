import React from "react";
import { useInView } from "react-intersection-observer";
import { FaDatabase, FaPython, FaReact, FaChartBar } from "react-icons/fa";

const Project = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    
  {
    name: "Ethiopian Airlines DB",
    description: "Relational MySQL database for Ethiopian Airlines domestic operations.",
    img: "https://www.shutterstock.com/shutterstock/photos/2258134001/display_1500/stock-photo-relational-database-tables-on-databases-are-placed-on-structured-query-language-code-with-server-2258134001.jpg",
    link: "https://github.com/urjiiko1/Database-Project",
    liveDemo: "https://raw.githubusercontent.com/urjiiko1/Database-Project/main/Database%20Diagram.png",
    icon: <FaDatabase size={20} />,
  },
  {
    name: "E-Commerce Insights Dashboard",
    description: "Interactive Power BI dashboard with live data insights.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQASdfa0Y9ejWZNpIQbmKXe4Hngiw9sBoRGGQ&s",
    link: "https://github.com/urjiiko1/FUTURE_DS_01",
    liveDemo: "https://raw.githubusercontent.com/urjiiko1/FUTURE_DS_01/main/Dashboard_Overview_Image.png",
    icon: <FaChartBar size={20} />,
  },

    {
      name: "GlassLogin UI Experience",
      description: "Animated login UI using glassmorphism and CSS animations.",
     img :process.env.PUBLIC_URL + "/authentication-methods.jpg"  ,
      link: "https://github.com/urjiiko1/code-craft/tree/main/CSS02",
      liveDemo: "https://urjiiko1.github.io/code-craft/CSS02/", 
      icon: <FaReact size={20} />,
    },
    {
      name: "Smart Grade Evaluator",
      description: "Grade Evaluator app built in Python (first project in 2017).",
      img: "https://webandcrafts.com/_next/image?url=https%3A%2F%2Fadmin.wac.co%2Fuploads%2FFeatures_Of_Python_1_f4ccd6d9f7.jpg&w=4500&q=90",
      link: "https://github.com/urjiiko1/GradeEvaluator",
      liveDemo: "https://grade-evaluator.onrender.com/",
      icon: <FaPython size={20} />,
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20 px-6 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          My Projects
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Recent work showcasing skills in web development and data visualization.
        </p>
      </div>

      <div
        ref={ref}
        className={`grid grid-cols-1 md:grid-cols-2 gap-10 transition-opacity duration-1000 ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105"
          >
            
            <img
              src={project.img}
              alt={project.name}
              className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
            />
           
            <div className="absolute inset-0 bg-black/25 backdrop-blur-sm group-hover:bg-black/50 transition-all duration-500"></div>

           
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
              
              <div className="flex items-center gap-2 mb-2">
                <span className="p-2 bg-white/20 rounded-full backdrop-blur-sm animate-bounce">
                  {project.icon}
                </span>
                <h3 className="text-2xl font-bold">{project.name}</h3>
              </div>

              <p className="text-sm mb-4">{project.description}</p>

             
              <div className="flex gap-4">
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-600 hover:bg-indigo-700 py-2 px-4 rounded-lg font-medium text-sm transition-all duration-300 cursor-pointer"
                  >
                    View Project
                  </a>
                )}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-white py-2 px-4 rounded-lg font-medium text-sm transition-all duration-300 group-hover:text-indigo-500 group-hover:border-indigo-500 cursor-pointer"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
