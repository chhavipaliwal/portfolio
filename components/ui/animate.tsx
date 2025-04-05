'use client';

import { motion } from 'framer-motion';
import React from 'react';

type DiscussTextProps = {
  text: string;
  duration?: number;
  className?: string;
};

const DiscussText: React.FC<DiscussTextProps> = ({
  text = '',
  duration = 0.4,
  className = ''
}) => {
  const letters = text?.split('') || [];

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={`relative inline-block cursor-pointer overflow-hidden ${className}`}
    >
      {/* Top layer (starts visible, moves up on hover) */}
      <motion.div className="absolute left-0 top-0 flex w-full underline underline-offset-4">
        {letters.map((letter, index) => (
          <motion.span
            key={`top-${index}`}
            className="inline-block"
            variants={{
              rest: {
                y: 0,
                opacity: 1,
                transition: {
                  duration,
                  delay: index * 0.03,
                  ease: 'easeInOut'
                }
              },
              hover: {
                y: -40,
                opacity: 0,
                transition: {
                  duration,
                  delay: index * 0.03,
                  ease: 'easeInOut'
                }
              }
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.div>

      {/* Bottom layer (starts hidden below, comes up on hover) */}
      <motion.div className="flex">
        {letters.map((letter, index) => (
          <motion.span
            key={`bottom-${index}`}
            className="inline-block"
            variants={{
              rest: {
                y: 40,
                opacity: 0,
                transition: {
                  duration,
                  delay: index * 0.03,
                  ease: 'easeInOut'
                }
              },
              hover: {
                y: 0,
                opacity: 1,
                transition: {
                  duration,
                  delay: index * 0.03,
                  ease: 'easeInOut'
                }
              }
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default DiscussText;
