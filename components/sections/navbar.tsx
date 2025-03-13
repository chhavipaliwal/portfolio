'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-background shadow-md backdrop-blur-md">
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
          <span className="text-2xl font-medium tracking-wide text-white">
            Chhavi
          </span>
        </Link>
        <div className="flex">
          <div className="flex items-center justify-center">
            <Button>Contact Us</Button>
          </div>
          <div>
            <p>menu</p>
            <div></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
