import './App.css';
import Hero from './sections/Hero';
import AboutMe from './sections/AboutMe';
import FeaturedProjects from './sections/FeaturedProjects';
import Skills from './sections/Skills';
import Achievements from './sections/Achievements';
import Education from './sections/Education';
import HowItWorks from './sections/HowItWorks';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import { ThemeProvider } from './theme';
import ThemeToggle from './components/ThemeToggle';
import AnimatedBackground from './components/AnimatedBackground';
import SocialFloat from './components/SocialFloat';
import StarshipGameEmbed from './sections/StarshipGameEmbed';
import PortfolioMusic from './components/PortfolioMusic';
import React, { useState } from 'react';
import WelcomeModal from './components/WelcomeModal';

function App() {
  const [entered, setEntered] = useState(false);

  return (
    <ThemeProvider>
      <PortfolioMusic />
      <AnimatedBackground />
      <ThemeToggle />
      <SocialFloat />
      {!entered && <WelcomeModal onEnter={() => setEntered(true)} />}
      <div className="portfolio-root-main" style={{ filter: !entered ? 'blur(6px)' : 'none', pointerEvents: !entered ? 'none' : 'auto' }}>
        <Hero />
        <AboutMe />
        <FeaturedProjects />
        <Skills />
        <Achievements />
        <Education />
        <HowItWorks />
        <Testimonials />
        <Contact />
      </div>
      <StarshipGameEmbed />
    </ThemeProvider>
  );
}

export default App;
