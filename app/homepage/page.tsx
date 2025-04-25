import AboutMe from '@/components/homepage/about';
import Expertise from '@/components/homepage/cando';
import ContactMe from '@/components/homepage/contact';
import HeroSection from '@/components/homepage/hero';
import LetsWork from '@/components/homepage/letwork';
import Projects from '@/components/homepage/projects';
import Skills from '@/components/homepage/skills';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Projects />
      <AboutMe />
      <ContactMe />
      <Expertise />
      <LetsWork />
    </>
  );
};

export default HomePage;
