'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useScroll, motion, useMotionValueEvent } from 'framer-motion';
import { Button, Image } from '@heroui/react';
import CommandMenu from '../ui/command-menu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 1000) {
      const previous = scrollY.getPrevious();
      const diff = previous ? latest - previous : 0;

      if (diff > 10) {
        setIsHidden(true);
        setIsOpen(false);
      } else if (diff < -10) {
        setIsHidden(false);
      }
    }
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      className="fixed top-0 z-10 w-full scroll-smooth bg-background/70 px-4 shadow-md backdrop-blur-lg md:px-8"
      initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        delay: 0.5,
        type: 'spring',
        stiffness: 100,
      }}
    >
      <div className="mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="">
            <Image
              isBlurred
              src="/chhavi.jpeg"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full object-cover object-top"
            />
          </div>
          <span className="text-xl font-medium text-white md:text-2xl">Chhavi</span>
        </Link>

        {/* Right side: Contact, Menu, and Circle Logo */}
        <div className="flex items-center gap-4 md:gap-6">
          <div className="flex items-center md:flex">
            <Button as={Link} radius="full" variant="light" href="/contact">
              Contact
            </Button>
          </div>
          <div className="flex items-center gap-3">
            <CommandMenu />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
