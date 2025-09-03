'use client';
import { isImage } from '@/functions/utility';
import { Project } from '@/lib/interface';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Chip, cn, ScrollShadow, Skeleton } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { isOnce } from '@/lib/utils';

interface Props {
  projects: Project[];
}

export default function Projects({ projects }: Props) {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const y = useTransform(scrollYProgress, [0, 1.5], ['2%', '-5%']);
  return (
    <>
      <div ref={targetRef} className="relative mx-auto mt-24 max-w-7xl p-4 sm:p-8 md:p-12">
        <motion.div style={{ y }} className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} cardIndex={index} project={project} />
          ))}
        </motion.div>
      </div>
    </>
  );
}

function ProjectCard({ project, cardIndex }: { project: Project; cardIndex: number }) {
  const [hasError, setHasError] = useState(false);

  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl"
      initial={{
        opacity: 0,
        y: 100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        delay: cardIndex < 6 ? cardIndex * 0.1 : 0.3,
      }}
      viewport={{ once: isOnce }}
    >
      <Link href={`/work/${project.slug}`} className="group flex flex-col gap-4">
        <div className="relative h-fit w-full">
          <div className="relative w-full">
            {!hasError && (
              <video
                autoPlay
                loop
                muted
                className={cn(
                  'pointer-events-none flex aspect-video w-full rounded-3xl bg-default object-cover transition-all group-hover:opacity-30'
                )}
                playsInline
                width={400}
                height={400}
                controls={false}
                preload="auto"
                src={process.env.NEXT_PUBLIC_CLOUDFLARE_URL + project.video}
                onError={() => {
                  setHasError(true); // Trigger fallback if an error occurs
                }}
              />
            )}

            {hasError && (
              <Image
                src="/project.gif" // Fallback image
                objectFit="cover"
                alt={project.title}
                className="pointer-events-none aspect-video w-full rounded-3xl bg-default object-cover transition-all group-hover:opacity-30"
                width={400}
                height={400}
              />
            )}
          </div>

          <h3 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-3xl text-white opacity-0 transition-all group-hover:opacity-100">
            <span>{project.title}</span>
          </h3>
        </div>

        <div className="flex flex-col gap-2">
          <ScrollShadow orientation="horizontal" className="no-scrollbar flex gap-2">
            {project.technologies?.map((tech) => (
              <Chip
                key={tech}
                // size="sm"
                className="capitalize"
                startContent={<Icon icon={tech} className="mx-1" />}
              >
                {tech.split(/[:-]/).pop()}
              </Chip>
            ))}
          </ScrollShadow>
        </div>
      </Link>
    </motion.div>
  );
}
