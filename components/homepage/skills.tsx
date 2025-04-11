'use client';
import React from 'react';
import Marquee from '../magicui/marquee';
import { Icon } from '@iconify/react/dist/iconify.js';
import { motion } from 'framer-motion';
import { useInView } from 'react-hook-inview';
import { Skill } from '@/lib/interface';
import { cn } from '@/lib/utils';

export default function Skills() {
  const [marqueeRef, inView] = useInView();

  return (
    <>
      <motion.section
        className="relative -mb-36 mt-36"
        ref={marqueeRef}
        initial={{ scale: 0, y: 100 }}
        animate={inView ? { scale: 1, y: 0 } : { scale: 0, y: 100 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        // initial="hidden"
        // whileInView="visible"
        // variants={{
        //   hidden: { scale: 0, y: 100 },
        //   visible: { scale: 1, y: 0 },
        // }}
      >
        <Marquee
          pauseOnHover={true}
          className={cn(
            'flex items-center font-pp-migra text-[100px] font-extrabold uppercase italic leading-[100px] text-default-500 [--duration:20s]'
          )}
          repeat={5}
        >
          {primarySkills.map((skill) => (
            <React.Fragment key={`primary-skill-${skill._id}`}>
              <a
                href={skill?.url}
                target="_BLANK"
                className="hover:text-primary"
              >
                {skill.name}
              </a>
              <Icon
                fontSize={70}
                icon="emojione-monotone:eight-spoked-asterisk"
                className="mb-4 text-secondary"
              />
            </React.Fragment>
          ))}
        </Marquee>
        <Marquee
          pauseOnHover={true}
          reverse
          className="flex items-center font-pp-migra text-[100px] font-extrabold uppercase italic leading-[100px] text-default-500 [--duration:10s]"
          repeat={5}
        >
          {secondarySkills.map((skill) => (
            <React.Fragment key={`secondary-skill-${skill._id}`}>
              <a
                href={skill?.url}
                target="_BLANK"
                className="hover:text-primary"
              >
                {skill.name}
              </a>
              <Icon
                fontSize={70}
                icon="emojione-monotone:eight-spoked-asterisk"
                className="mb-4 text-secondary"
              />
            </React.Fragment>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </motion.section>
    </>
  );
}

const primarySkills: Skill[] = [
  {
    _id: '1',
    name: 'NextJS',
    url: 'https://nextjs.org/'
  },
  {
    _id: '2',
    name: 'ReactJs',
    url: 'https://reactjs.org/'
  },
  {
    _id: '3',
    name: 'Nodejs',
    url: 'https://nodejs.org/'
  },
  {
    _id: '4',
    name: 'Tailwind CSS',
    url: 'https://tailwindcss.com/'
  },
  {
    _id: '5',
    name: 'MongoDB',
    url: 'https://www.mongodb.com/'
  },
  {
    _id: '6',
    name: 'SQL',
    url: 'https://en.wikipedia.org/wiki/SQL'
  },
  {
    _id: '7',
    name: 'PHP',
    url: 'https://www.php.net/'
  }
];

const secondarySkills: Skill[] = [
  {
    _id: '1',
    name: 'Shadcn',
    url: 'https://shadcn.com/'
  },
  {
    _id: '2',
    name: 'NextUI',
    url: 'https://nextui.org/'
  },
  {
    _id: '3',
    name: 'Formik',
    url: 'https://formik.org/'
  },
  {
    _id: '4',
    name: 'Framer Motion',
    url: 'https://www.framer.com/motion/'
  }
];
