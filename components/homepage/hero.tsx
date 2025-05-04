'use client';
import react from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import DiscussText from '../ui/animate';

const HeroSection = () => {
  return (
    <section className="bg-background font-neue-Helvetica leading-none text-foreground sm:p-8">
      <div>
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 mt-20 h-full w-full object-cover"
        >
          <source src="/video/banner.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative mt-48">
        <div className="flex flex-row justify-between text-white">
          <div className="">
            <h1 className="mr-80 max-w-2xl text-[101px] font-bold leading-none tracking-wide">
              <span className="text-[#999]">BRINGING</span> IDEAS TO LIFE{' '}
              <span className="text-[#999]">WITH</span>{' '}
              <span className="text-[#999]">CODE</span> AND{' '}
              <span className="text-[#999]">CREATIVITY.</span>
            </h1>
            <div className="mt-6 flex items-center space-x-3">
              {/* Instagram */}
              <Link
                href="https://instagram.com/kittious"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-gray-500 p-2"
              >
                <Icon icon="ri:instagram-line" className="h-5 w-5 text-white" />
              </Link>

              {/* GitHub */}
              <Link
                href="https://github.com/chhavipaliwal"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-gray-500 p-2"
              >
                <Icon icon="uil:github" className="h-5 w-5 text-white" />
              </Link>

              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/in/chhavipaliwal/"
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
                href="https://x.com/PaliwalChhavi"
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
          <div className="max-w-lg font-pp-neue-machina md:mt-80 md:text-right">
            <p className="text-3xl font-light">
              I can design and develop intelligent products that transform ideas
              into reality.
            </p>
          </div>
        </div>
        <div className="relative mt-52 flex flex-col items-start justify-between text-white md:flex-row md:items-center">
          <div className="text-left">
            <DiscussText
              text="LET'S DISCUSS"
              href="/contact"
              className="text-7xl text-primary underline decoration-2 underline-offset-4"
            />
          </div>
          <div className="flex flex-row space-x-3 text-left font-neue-Helvetica-Medium">
            <div>
              <p className="mr-20 text-2xl text-[#999] font-neue-Helvetica-Condensed-light tracking-wide">
                skills
              </p>
            </div>
            <ul className="space-y-2 text-xl md:text-3xl">
              <li>Next.js</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Tailwind CSS</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
