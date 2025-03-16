'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
        <div className="flex items-center gap-6">
          <div className="flex items-center justify-center">
            <button className="border-gray rounded-full border px-4 py-3 hover:bg-white hover:text-black">
              Contact
            </button>
          </div>
          <div className="flex items-center justify-center gap-3">
            <p>menu</p>
            <div className="relative h-14 w-14">
              <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-white">
                {/* Four smaller circles */}
                <div className="flex space-x-1">
                  <div className="h-2 w-2 rounded-full bg-black"></div>
                  <div className="h-2 w-2 rounded-full bg-black"></div>
                </div>
                <div className="mt-1 flex space-x-1">
                  <div className="h-2 w-2 rounded-full bg-black"></div>
                  <div className="h-2 w-2 rounded-full bg-black"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
