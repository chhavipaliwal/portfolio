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
          <div className="flex h-fit flex-row">
            <Link href="https://github.com" className="">
              <Icon icon="uil:github" className="h-5 w-5" />
            </Link>
            {/* LinkedIn */}
            <Link href="https://linkedin.com" className="">
              <Icon icon="akar-icons:linkedin-fill" className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
