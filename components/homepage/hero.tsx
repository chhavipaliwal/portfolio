'use client';
import react from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/vedio/kreyda2.mp4" type="video/mp4" />
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 flex w-full flex-col justify-between p-8 text-white md:flex-row">
        {/* Left Section: Main Headline */}
        <div className="max-w-xl">
          <h1 className="font-sans text-7xl font-extrabold tracking-tight md:text-7xl">
            <span className="text-secondary">BRINGING</span> IDEAS TO LIFE{' '}
            <span className="text-secondary">WITH</span>{' '}
            <span className="text-secondary">CODE</span> AND{' '}
            <span className="text-secondary">CREATIVITY.</span>
          </h1>
          <div className="mt-6 flex items-center space-x-3">
            {/* Instagram */}
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gray-500 p-2"
            >
              <Icon icon="ri:instagram-line" className="h-5 w-5 text-white" />
            </Link>

            {/* GitHub */}
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gray-500 p-2"
            >
              <Icon icon="uil:github" className="h-5 w-5 text-white" />
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gray-500 p-2"
            >
              <Icon
                icon="akar-icons:linkedin-fill"
                className="h-5 w-5 text-white"
              />
            </Link>

            {/* Twitter */}
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gray-500 p-2"
            >
              <Icon
                icon="akar-icons:twitter-fill"
                className="h-5 w-5 text-white"
              />
            </Link>
          </div>
        </div>

        {/* Right Section: Subtext */}
        <div className="max-w-lg md:mt-64 md:text-right">
          <p className="text-3xl font-light">
            I can design and develop intelligent products that transform ideas
            into reality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
