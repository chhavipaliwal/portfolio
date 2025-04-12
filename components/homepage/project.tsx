'use client';

import Marquee from 'react-fast-marquee';

const skills = [
  'TAILWIND CSS',
  'NEXT.JS',
  'REACT JS',
  'NODE.JS',
  'MONGODB',
  'TYPESCRIPT',
  'FRAMER MOTION',
  'GIT & GITHUB',
  'UI/UX DESIGN'
];

export default function SkillsMarquee() {
  return (
    <div className="rounded-t-[74px]">
      <div className="relative w-full overflow-hidden py-6">
        <Marquee pauseOnHover={false} className="[--duration:20s]">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="px-8 text-[60px] font-extrabold uppercase italic leading-[100px] text-primary before:text-secondary before:content-['•'] md:text-[120px]"
            >
              {skill}
            </div>
          ))}
        </Marquee>

        {/* Fading gradient edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </div>
  );
}
