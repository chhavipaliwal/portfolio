'use client';
import react from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
interface ProjectsProps {
  projects: {
    title: string;
    description: string;
    image: string;
    link: string;
  }[];
}
const projectsData: ProjectsProps = {
  projects: [
    {
      title: 'The Policlinic',
      description: 'Description of Project 1',
      image: '/project/hospital.png',
      link: 'https://example.com/project1'
    },
    {
      title: 'Invoice Generator',
      description: 'Description of Project 2',
      image: '/project/invoice.png',
      link: 'https://example.com/project2'
    },
    {
      title: 'Kittify',
      description: 'Description of Project 3',
      image: '/project/kittify.png',
      link: 'https://example.com/project3'
    },
    {
      title: 'Kodi',
      description: 'Description of Project 4',
      image: '/project/kodi.png',
      link: 'https://example.com/project4'
    }
  ]
};

export default function Projects() {
  return (
    <>
      <div className="w-full rounded-t-[60px] bg-white p-10 text-black">
        <div className="mt-12 flex items-center justify-between">
          <div>
            <h1 className="text-[82px]">FEATURED PROJECTS</h1>
          </div>
          <div className="flex flex-row space-x-4">
            <Link
              href="https://github.com"
              className="rounded-full border border-gray-500 p-4"
            >
              <Icon icon="uil:github" className="h-8 w-8" />
            </Link>
            {/* LinkedIn */}
            <Link
              href="https://linkedin.com"
              className="rounded-full border border-gray-500 p-4"
            >
              <Icon icon="akar-icons:linkedin-fill" className="h-8 w-8" />
            </Link>
          </div>
        </div>
        <hr className="my-5 border-t border-gray-400" />
        <div>
          <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2">
            {projectsData.projects.map((project, index) => (
              <div
                key={index}
                className="relative flex h-[400px] items-center justify-center overflow-hidden rounded-lg p-8 shadow-lg"
              >
                {/* Image with hover zoom-out effect */}

                <img
                  src={project.image}
                  alt={project.title}
                  className="object-fit absolute inset-0 h-full w-full rounded-lg transition-transform duration-500 ease-in-out hover:scale-95"
                />

                <div className="relative z-10 text-center text-white">
                  <Link
                    href={project.link}
                    className="mt-4 inline-block rounded px-4 py-2 text-white"
                  >
                    {/* Button text here if needed */}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
