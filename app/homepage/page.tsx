import AboutMe from '@/components/homepage/about';
import Expertise from '@/components/homepage/expertise';
import ProjectInquiryForm from '@/components/homepage/connect';
import ContactMe from '@/components/homepage/contact';
import HeroSection from '@/components/homepage/hero';
import LetsWork from '@/components/homepage/letwork';
import Projects from '@/components/homepage/projects';
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
      <ProjectInquiryForm />
    </>
  );
};

export default HomePage;
