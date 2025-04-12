'use client';
import React from 'react';
import Marquee from '@/components/magicui/marquee';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Project, Project as ProjectType } from '@/lib/interface';
import { isCaching, PLACEHOLDERS } from '../../lib/config';
import { Icon } from '@iconify/react/dist/iconify.js';
import {
  Card,
  CardBody,
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
  Image
} from '@nextui-org/react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Props {
  projects: ProjectType[];
}

export default function ProjectProvider() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch(`/api/projects`, {
        cache: isCaching ? 'default' : 'no-cache'
      });
      if (res.ok) {
        const projects = await res.json();
        setProjects(projects);
      }
    };
    fetchProjects();
  }, []);
  return (
    <>
      <Projects projects={projects} />
    </>
  );
}

function Projects({ projects }: Props) {
  // sort project by priority
  projects.sort((a, b) => a.priority - b.priority);
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const y = useTransform(
    scrollYProgress,
    [0, 2],
    [isMobile ? '20%' : '90%', '-90%']
  );
  const backdrop = useTransform(
    scrollYProgress,
    [0, 1],
    ['blur(0px) brightness(1)', 'blur(10px) brightness(0.5)']
  );

  return (
    <>
      <section
        id="projects"
        className="relative h-[300vh] w-full"
        ref={targetRef}
      >
        <div className="sticky top-0 flex h-screen items-start overflow-hidden pb-8">
          <motion.div
            style={{ filter: backdrop }}
            className="absolute left-[50%] top-[50%] -z-10 translate-x-[-50%] translate-y-[-50%]"
          >
            <div className="text-center text-[50px] font-extrabold leading-[50px] md:text-[90px] md:leading-[90px]"></div>
            <Marquee pauseOnHover={false} className="[--duration:20s]">
              <div className="font-pp-migra text-[100px] font-extrabold uppercase italic leading-[100px] text-primary after:text-secondary after:content-['•'] md:text-[200px] md:leading-[200px]">
                PROJECTS
              </div>
            </Marquee>
          </motion.div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>

          <motion.div
            className="mx-auto mt-12 grid w-full max-w-[96rem] gap-4 px-4 sm:grid-cols-2 md:px-8 lg:grid-cols-2 lg:px-12 xl:grid-cols-3"
            style={{ y }}
          ></motion.div>
        </div>
      </section>
    </>
  );
}
