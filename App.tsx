import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import InteractiveEffects from './components/InteractiveEffects';

const App: React.FC = () => {
  return (
    <div className="bg-[#1A1F36] min-h-screen relative transition-colors duration-300">
      <InteractiveEffects />
      <Navbar />
      <main>
        <Hero id="home" />
        <About id="about" />
        <Education id="education" />
        <Experience id="experience" />
        <Projects id="projects" />
        <Skills id="skills" />
        <Contact id="contact" />
      </main>
      <Footer />
    </div>
  );
};

export default App;