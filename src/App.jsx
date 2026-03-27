import React, { useState, useEffect, useRef } from 'react';
import { ReactLenis } from 'lenis/react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import WorkExperience from './components/WorkExperience';
import Project from './components/Project';
import Certificate from './components/Certificate';
import ContactMe from './components/ContactMe';
import NeonCursor from './components/NeonCursor';
import LoadingPage from './components/LoadingPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [browserReady, setBrowserReady] = useState(false);
  const startTimeRef = useRef(Date.now());

  // Track real browser load state
  useEffect(() => {
    // If already loaded (e.g. cached), mark ready immediately
    if (document.readyState === 'complete') {
      setBrowserReady(true);
      return;
    }

    const handleLoad = () => setBrowserReady(true);
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <>
      {isLoading && (
        <LoadingPage
          onLoadingComplete={() => setIsLoading(false)}
          browserReady={browserReady}
          startTime={startTimeRef.current}
        />
      )}

      {/* Always render content — hidden behind loading overlay so browser loads all assets */}
      <div style={isLoading ? { visibility: 'hidden', position: 'fixed', inset: 0, overflow: 'hidden' } : undefined}>
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
      </div>
    </>
  );
}

export default App;
