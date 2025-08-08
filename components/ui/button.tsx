'use client';
import { motion } from 'framer-motion';
import { ButtonProps, Button as HeroButton, cn } from '@heroui/react';
import React from 'react';
const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & {
    children: string;
    className?: string;
    duration?: number;
  }
>(({ children, className, duration = 0.4, ...props }, ref) => {
  const letters = children.split('');

  return (
    <HeroButton
      as={motion.button}
      initial="rest"
      whileHover="hover"
      animate="rest"
      variant="bordered"
      radius="full"
      className={cn('px-4 py-4 text-base', className)}
      {...props}
    >
      <div className="absolute flex">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={{
              rest: {
                y: 0,
                transition: {
                  duration,
                  delay: index * 0.05,
                  ease: 'easeInOut',
                },
              },
              hover: {
                y: -35,
                transition: {
                  duration,
                  delay: index * 0.05,
                  ease: 'easeInOut',
                },
              },
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </div>
      <div className="flex">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={{
              rest: {
                y: 35,
                transition: {
                  duration,
                  delay: index * 0.02,
                  ease: 'easeInOut',
                },
              },
              hover: {
                y: 0,
                transition: {
                  duration,
                  delay: index * 0.05,
                  ease: 'easeInOut',
                },
              },
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </div>
    </HeroButton>
  );
});

Button.displayName = 'Button';

export default Button;
