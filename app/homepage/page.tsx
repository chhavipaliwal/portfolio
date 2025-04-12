import HeroSection from '@/components/homepage/hero';
import ProjectProvider from '@/components/homepage/project';
import Projects from '@/components/homepage/projects';
import Skills from '@/components/homepage/skills';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Projects />
      <ProjectProvider />
    </>
  );
};

export default HomePage;
