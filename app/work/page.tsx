'use client';
import { ProjectGrid } from '@/components/sections/work/project-grid';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-hook-inview';

export default function Home() {
  const [isOnce] = useState(true);

  return (
    <>
      <div className="flex translate-y-20 px-4 md:px-0 font-extrabold flex-row  mt-8 md:mt-0  items-start md:items-center md:pb-8 text-[60px] leading-[60px] md:text-[110px] md:leading-[110px]">
        <div className="mt-12 relative">
          <motion.img
            src="/sparkle-filled.png"
            width={70}
            className="absolute hidden md:block left-[60%] translate-x-[-50%] top-[-45%]"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, scale: 2, rotate: 0 },
              visible: { opacity: 1, scale: 1, rotate: -30 },
            }}
            transition={{ duration: 1, type: 'spring', stiffness: 100 }}
            viewport={{ once: isOnce }}
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.5 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 1, type: 'spring', stiffness: 100 }}
            viewport={{ once: isOnce }}
            className="uppercase"
          >
            My
          </motion.div>
        </div>
        <div className="flex relative items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.5 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            viewport={{ once: isOnce }}
            transition={{
              duration: 1,
              type: 'spring',
              stiffness: 100,
              delay: 0.1,
            }}
            className="font-extrabold italic font-pp-migra text-secondary"
          >
            Projects
          </motion.div>
        </div>
      </div>
      <div className="mt-20  font-neue-Helvetica-Medium text-2xl maax-w-xl ">
        <p>
          Explore my latest projects showcasing innovative solutions and
          creative designs
        </p>
      </div>
      <div className="mt-20">
        <ProjectGrid />
      </div>
    </>
  );
}
