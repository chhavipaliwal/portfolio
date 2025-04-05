'use client';
import react from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function Projects() {
  return (
    <>
      <div className="w-full rounded-t-[60px] bg-white p-10 text-black">
        <div className="mt-12 flex items-center justify-between">
          <div>
            <h1 className="text-[82px]">FEATURED PROJECTS</h1>
          </div>
          <div className="flex flex-row space-x-4">
            <Link
              href="https://github.com"
              className="rounded-full border border-gray-500 p-4"
            >
              <Icon icon="uil:github" className="h-8 w-8" />
            </Link>
            {/* LinkedIn */}
            <Link
              href="https://linkedin.com"
              className="rounded-full border border-gray-500 p-4"
            >
              <Icon icon="akar-icons:linkedin-fill" className="h-8 w-8" />
            </Link>
          </div>
        </div>
        <hr className="my-5 border-t border-gray-400" />
        <div></div>
      </div>
    </>
  );
}
