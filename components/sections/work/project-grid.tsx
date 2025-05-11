'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ProjectCard } from '@/components/sections/work/project-cards';
import { projects } from '@/data/projects';

export function ProjectGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          whileHover={{ scale: 1.02 }}
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
        >
          <Link href={`/projects/${project.id}`}>
            <ProjectCard project={project} isHovered={hoveredIndex === index} />
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
