'use client';
import { Project as ProjectType } from '@/lib/interface';
import { Icon } from '@iconify/react/dist/iconify.js';
import { motion } from 'framer-motion';
import { Button, cn, Divider } from '@nextui-org/react';
import Link from 'next/link';
import { isOnce } from '@/lib/utils';
import { Chip, Tooltip } from '@heroui/react';

interface Props {
  project: ProjectType;
}

export default function Project({ project }: Props) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7 }}
        className="mx-auto mt-24 max-w-7xl p-4 sm:p-8 md:p-12"
      >
        <div className="flex flex-col">
          <h1 className="flex items-center justify-center gap-4 font-pp-migra text-[clamp(1rem,7vw,11.5rem)] font-extrabold italic leading-none text-secondary">
            {project?.title}
          </h1>
          <p className="mt-2 text-center text-[clamp(1rem,1.5vw,2rem)] text-default-600">
            {project?.tagline}
          </p>
        </div>
        <Divider className="my-12 bg-default-500" />
        <div className="flex flex-col justify-between gap-12 sm:flex-row">
          <div className="sm:mr-[10%] sm:w-1/2">
            <div className="mb-12">
              <h3 className="text-lg">Overview</h3>
              <p className="mt-4 text-justify text-default-600">{project?.description}</p>
            </div>
            <div className="flex gap-4">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 0.1,
                  delay: 0.5,
                  type: 'spring',
                  stiffness: 80,
                }}
                viewport={{ once: isOnce }}
              >
                <Tooltip
                  delay={500}
                  isDisabled={!!project.source}
                  content="Source code is either private or not available"
                  color="primary"
                >
                  <div>
                    <Button
                      isDisabled={!project?.source}
                      as={Link}
                      size="lg"
                      color="primary"
                      variant="bordered"
                      href={`${project?.source}`}
                      endContent={<Icon icon="tabler:arrow-up-right" fontSize={20} />}
                      target="_blank"
                    >
                      Source
                    </Button>
                  </div>
                </Tooltip>
              </motion.div>
              {project?.link && (
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    duration: 0.1,
                    delay: 0.9,
                    type: 'spring',
                    stiffness: 80,
                  }}
                  viewport={{ once: isOnce }}
                >
                  <Button
                    as={Link}
                    variant={project?.source ? 'bordered' : 'flat'}
                    color={project?.source ? 'default' : 'primary'}
                    size="lg"
                    href={`${project?.link}`}
                    endContent={<Icon icon="tabler:arrow-up-right" fontSize={20} />}
                    target="_blank"
                  >
                    Preview
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-12 pt-0 sm:p-16">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.5,
                type: 'spring',
                stiffness: 80,
              }}
              viewport={{ once: isOnce }}
            >
              <h4>TECHNOLOGIES</h4>
              <p className="text-default-600">
                {project?.technologies
                  ?.map((tech) => {
                    const parts = tech.split('-').pop() || '';
                    return parts.charAt(0).toUpperCase() + parts.slice(1);
                  })
                  .join(', ')}
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="mx-auto max-w-6xl py-14"
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        viewport={{ once: isOnce }}
      >
        <video
          autoPlay
          loop
          muted
          className={cn(
            'pointer-events-none w-full rounded-3xl bg-default object-cover transition-all group-hover:opacity-30'
          )}
          playsInline
          width={1200}
          height={1200}
          controls={false}
          preload="auto"
          src={process.env.NEXT_PUBLIC_CLOUDFLARE_URL + project?.video}
        />
      </motion.div>
    </>
  );
}
