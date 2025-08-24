import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Home from "./home";
import About from "./about";
import Skill from "./skill";
import Project from "./project";
import Contact from "./contact";
import Footer from "./footer";

import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <main className="bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
