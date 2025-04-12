import HeroSection from '@/components/homepage/hero';
import SkillsStrip from '@/components/homepage/project';
import SkillsMarquee from '@/components/homepage/project';
import ProjectProvider from '@/components/homepage/project';
import Projects from '@/components/homepage/projects';
import Skills from '@/components/homepage/skills';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Projects />
      <SkillsMarquee />
    </>
  );
};

export default HomePage;
