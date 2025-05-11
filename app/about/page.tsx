import Banner from '@/components/sections/about/banner';
import Skills from '@/components/sections/about/skills';
import Stats from '@/components/sections/about/stats';
import Commitment from '@/components/sections/about/commit';
import Contact from '@/components/sections/about/contact';
import Navbar from '@/components/sections/navbar';
import React from 'react';

const Page = () => {
  return (
    <>
      <Banner />
      <Commitment />
      <Stats />
      <Skills />
      <Contact />
    </>
  );
};

export default Page;
