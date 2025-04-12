'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
export default function AboutMe() {
  return (
    <div className="flex h-screen w-full flex-row items-center justify-center rounded-t-[74px] bg-secondary font-neue-Helvetica-Condensed-light font-bold text-black sm:p-8">
      <h1 className="text-2xl text-white">About Me</h1>
      <div>
        <p className="mt-4 text-4xl">
          "Hi, I'm Kitti — a passionate developer, fresh ML Engineer, and
          creative thinker with a love for clean code and beautiful UI. Whether
          it's crafting sleek interfaces with React & Tailwind or bringing ideas
          to life with Next.js and MongoDB, I thrive at the intersection of
          design and logic.{' '}
        </p>
        <p className="mt-4 text-4xl">
          Curious by nature and driven by purpose, I enjoy building meaningful
          digital experiences that connect people and solve real problems. When
          I'm not coding, you&apos;ll find me exploring music, writing, or
          dreaming up my next big idea. Let&apos;s build something magical
          together."
        </p>
        <div className="mt-8">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/favicon.ico"
              alt="Logo"
              width={60}
              height={60}
              className="rounded-full object-fill"
            />
            <span className="text-4xl font-medium tracking-wide text-white">
              Chhavi Paliwal
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
