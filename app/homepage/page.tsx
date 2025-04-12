import AboutMe from '@/components/homepage/about';
import HeroSection from '@/components/homepage/hero';
import Projects from '@/components/homepage/projects';
import Skills from '@/components/homepage/skills';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Projects />
      <AboutMe />
    </>
  );
};

export default HomePage;
