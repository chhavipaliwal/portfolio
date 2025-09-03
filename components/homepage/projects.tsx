'use client';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import Marquee from 'react-fast-marquee';
import Projects from '../sections/work/projects';
import { projects } from '@/data/projects';
import { Button } from '@heroui/react';

const skills = [
  'TAILWIND CSS',
  'NEXT.JS',
  'REACT JS',
  'NODE.JS',
  'MONGODB',
  'TYPESCRIPT',
  'FRAMER MOTION',
  'GIT & GITHUB',
  'UI/UX DESIGN',
];

export default function LandingProjects() {
  return (
    <>
      <div className="w-full rounded-t-3xl bg-white text-black md:rounded-t-[74px]">
        <div className="p-4 sm:p-8">
          <div className="mb-8 flex flex-col items-center justify-between sm:flex-row">
            <h1 className="text-center font-neue-Helvetica text-[40px] sm:text-left sm:text-[60px] md:text-[82px]">
              FEATURED PROJECTS
            </h1>
            <div className="flex flex-row gap-4">
              <Link
                href="https://github.com/chhavipaliwal"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-background p-3"
              >
                <Icon icon="uil:github" className="h-6 w-6 text-background" />
              </Link>

              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/in/chhavipaliwal/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-background p-3"
              >
                <Icon icon="akar-icons:linkedin-fill" className="h-6 w-6 text-background" />
              </Link>
            </div>
          </div>
          <hr className="border-t border-gray-300" />

          <Projects projects={projects.slice(0, 4)} className="mt-0 max-w-full" isLanding={true} />
          <div className="flex w-full justify-center">
            <div className="mb-10 flex flex-col items-center justify-center gap-4 text-center">
              <p className="mt-10 max-w-lg text-2xl">
                I craft digital experiences where every pixel matters — blending personality with
                purpose, and design with intention.
              </p>
              <Link href="/work">
                <Button radius="full" size="lg" variant="bordered" className="text-black">
                  View All Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-t-3xl bg-black md:rounded-t-[74px]">
          <Marquee
            pauseOnHover={false}
            speed={40}
            gradient={false}
            loop={0} // 0 = infinite
            play={true}
            direction="left"
            className="font-neue-Helvetica [--duration:18s]"
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className="mx-2 py-2 pt-8 text-[80px] leading-[100px] text-primary before:mr-2 before:text-secondary before:content-['•'] md:py-10 md:pt-16 md:text-[120px]"
              >
                {skill}
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </>
  );
}
