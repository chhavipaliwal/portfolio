'use client';
import react from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function Projects() {
  return (
    <>
      <div className="h-screen rounded-t-3xl bg-white text-black">
        <div className="flex justify-between">
          <h1 className="mt-12 text-7xl">FEATURED PROJECTS</h1>
          <div className="mt-12 flex space-x-3">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gray-500 p-2"
            >
              <Icon icon="uil:github" className="h-5 w-5" />
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gray-500 p-2"
            >
              <Icon icon="akar-icons:linkedin-fill" className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
