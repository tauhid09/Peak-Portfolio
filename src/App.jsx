import React from 'react';
import { ReactLenis } from 'lenis/react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import WorkExperience from './components/WorkExperience';
import Project from './components/Project';
import Certificate from './components/Certificate';
import ContactMe from './components/ContactMe';
import NeonCursor from './components/NeonCursor';

function App() {

  return (
    <>
     <ReactLenis root>
      <NeonCursor />
      <div className="relative w-full overflow-hidden bg-off-white dot-grid">
        <div id="home">
          <HeroSection />
        </div>
        <div id="about">
          <Navbar />
          <AboutMe />
        </div>
        <div id="highlight">
          <WorkExperience />
          <Project />
          <Certificate />
        </div>
        <div id="contact">
          <ContactMe />
        </div>
      </div>
     </ReactLenis>
    </>
  );
}

export default App;
