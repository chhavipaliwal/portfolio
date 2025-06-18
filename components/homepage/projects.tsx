'use client';
import react from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import Button from '../ui/button';
import Marquee from 'react-fast-marquee';
import { Image, Button as HeroButton } from '@heroui/react';

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
interface ProjectsProps {
  projects: {
    title: string;
    image: string;
    link: string;
    tech: string[];
  }[];
}

const projectsData: ProjectsProps = {
  projects: [
    {
      title: 'The Policlinic',
      image: '/project/hospital.png',
      link: 'https://assignment-chhavi.netlify.app/',
      tech: ['NEXT.JS', 'TAILWIND CSS', 'MONGODB'],
    },
    {
      title: 'Invoice Generator',
      image: '/project/invoice.png',
      link: 'https://chhavi-paliwal-invoice-generator.vercel.app/',
      tech: ['REACT', 'TYPESCRIPT', 'FRAMER MOTION', 'NODE.JS'],
    },
    {
      title: 'Better.com Clone',
      image: '/project/better.png',
      link: 'https://better-com-clone.vercel.app/',
      tech: ['NEXT.JS', 'SHADCN', 'OPENAI API'],
    },
    {
      title: 'Kody',
      image: '/project/kodi.png',
      link: 'https://the-kody.netlify.app/',
      tech: ['HTML', 'CSS', 'JAVASCRIPT'],
    },
  ],
};

export default function Projects() {
  return (
    <>
      <div className="w-full rounded-t-[74px] bg-white text-black">
        <div className="sm:p-8">
          <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <h1 className="text-center text-[40px] font-bold sm:text-left sm:text-[60px] md:text-[82px]">
              FEATURED PROJECTS
            </h1>
            <div className="flex flex-row gap-4">
              <Link
                href="https://github.com/chhavipaliwal"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-gray-500 p-3"
              >
                <Icon icon="uil:github" className="h-6 w-6 text-gray-600" />
              </Link>

              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/in/chhavipaliwal/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-gray-500 p-3"
              >
                <Icon
                  icon="akar-icons:linkedin-fill"
                  className="h-6 w-6 text-gray-600 "
                />
              </Link>
            </div>
          </div>
          <hr className="my-5 border-t border-gray-300" />
          <div className="mt-20 grid  grid-cols-1 gap-10 sm:grid-cols-2">
            {projectsData.projects.map((project, index) => (
              <Link
                href={project.link}
                key={index}
                className="flex flex-col justify-center gap-8 rounded-lg"
              >
                {/* Image with hover zoom-out effect */}
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="object-fit h-full w-full rounded-lg shadow-lg transition-transform duration-500 ease-in-out scale-105 hover:scale-100"
                  />
                </div>
                <div className="mb-8 ml-4 font-neue-Helvetica-Medium">
                  <h2 className="text-4xl">{project.title}</h2>
                  <div className="mt-2 flex flex-wrap gap-3">
                    {project.tech.map((tag, i) => (
                      <span
                        key={i}
                        className="border-gray-300 rounded-full border px-5 py-2 text-xs font-semibold text-black"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="w-full flex justify-center font-neue-Helvetica-Medium px-6 lg:px-24">
            <div className="mb-20  flex flex-col items-center lg:items-end justify-center text-center">
              <p className="mt-10 ml-72 text-2xl  max-w-lg">
                I craft digital experiences where every pixel matters — blending
                personality with purpose, and design with intention.
              </p>
              <Link href="/work">
                <Button className="mt-2 mr-32  rounded-full border border-gray-500 px-8 py-6 text-lg text-black hover:bg-gray-900 hover:text-white">
                  View All Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-t-[74px] bg-black py-6">
          <Marquee
            pauseOnHover={false}
            speed={40}
            gradient={false}
            loop={0} // 0 = infinite
            play={true}
            direction="left"
            className="[--duration:20s]"
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className="mx-8 mb-10 mt-10 text-[60px] leading-[100px] text-primary before:text-secondary before:content-['•'] md:text-[120px]"
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
