'use client';
import react from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
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
      link: 'https://example.com/project1',
      tech: ['NEXT.JS', 'TAILWIND CSS', 'MONGODB']
    },
    {
      title: 'Invoice Generator',
      image: '/project/invoice.png',
      link: 'https://example.com/project2',
      tech: ['REACT', 'TYPESCRIPT', 'FRAMER MOTION', 'NODE.JS']
    },
    {
      title: 'Kittify',
      image: '/project/kittify.png',
      link: 'https://example.com/project3',
      tech: ['NEXT.JS', 'SHADCN', 'OPENAI API']
    },
    {
      title: 'Kodi',
      image: '/project/kodi.png',
      link: 'https://example.com/project4',
      tech: ['HTML', 'CSS', 'JAVASCRIPT']
    }
  ]
};

export default function Projects() {
  return (
    <>
      <div className="w-full rounded-[74px] bg-white p-6 text-black sm:p-10">
        <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <h1 className="text-center text-[40px] font-bold sm:text-left sm:text-[60px] md:text-[82px]">
            FEATURED PROJECTS
          </h1>
          <div className="flex flex-row space-x-4">
            <Link
              href="https://github.com"
              className="rounded-full border border-gray-500 p-4"
            >
              <Icon icon="uil:github" className="h-8 w-8" />
            </Link>
            <Link
              href="https://linkedin.com"
              className="rounded-full border border-gray-500 p-4"
            >
              <Icon icon="akar-icons:linkedin-fill" className="h-8 w-8" />
            </Link>
          </div>
        </div>
        <hr className="my-5 border-t border-gray-300" />
        <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2">
          {projectsData.projects.map((project, index) => (
            <Link
              href={project.link}
              key={index}
              className="flex flex-col justify-center gap-8 rounded-lg"
            >
              {/* Image with hover zoom-out effect */}
              <div className="overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-fit h-full w-full rounded-lg shadow-lg transition-transform duration-500 ease-in-out hover:scale-95"
                />
              </div>
              <div className="mb-8 ml-4 font-neue-Helvetica-Medium">
                <h2 className="text-4xl">{project.title}</h2>
                <div className="mt-2 flex flex-wrap gap-3">
                  {project.tech.map((tag, i) => (
                    <span
                      key={i}
                      className="border-gray rounded-full border px-5 py-3 text-sm font-semibold text-black"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div>
          <p>
            I craft digital experiences where every pixel matters — blending
            personality with purpose, and design with intention.
          </p>
        </div>
      </div>
    </>
  );
}
