'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-black shadow-md backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/favicon.ico"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="font-sans text-2xl font-bold tracking-wide text-white">
            Chhavi
          </span>
        </Link>

        <div className="hidden space-x-6 md:flex">
          <Link
            href="#home"
            className="text-lg font-medium transition-all hover:text-primary hover:underline"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-lg font-medium transition-all hover:text-primary hover:underline"
          >
            About
          </Link>
          <Link
            href="#work"
            className="text-lg font-medium text-white transition-all hover:text-primary hover:underline"
          >
            Work
          </Link>
          <Link
            href="#contact"
            className="text-lg font-medium text-white transition-all hover:text-primary hover:underline"
          >
            Contact
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none md:hidden"
        >
          {isOpen ? (
            <span className="text-3xl">&times;</span>
          ) : (
            <span className="text-3xl">&#9776;</span>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="flex flex-col space-y-3 bg-[#202020] py-3 text-white md:hidden">
          <Link
            href="#home"
            className="block text-center text-lg transition-all hover:text-primary hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#about"
            className="block text-center text-lg transition-all hover:text-primary hover:underline"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="#work"
            className="block text-center text-lg transition-all hover:text-primary hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Work
          </Link>
          <Link
            href="#contact"
            className="block text-center text-lg transition-all hover:text-primary hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
