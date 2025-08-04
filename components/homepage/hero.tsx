'use client';
import react from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import DiscussText from '../ui/animate';

const skills = [
  {
    name: 'Next.js',
    icon: 'nextjs',
    url: 'https://nextjs.org',
  },
  {
    name: 'React.js',
    icon: 'react',
    url: 'https://reactjs.org',
  },

  {
    name: 'Node.js',
    icon: 'nodejs',
    url: 'https://nodejs.org',
  },
  {
    name: 'Tailwind CSS',
    icon: 'tailwindcss',
    url: 'https://tailwindcss.com',
  },
  {
    name: 'MongoDB',
    icon: 'mongodb',
    url: 'https://www.mongodb.com',
  },
];

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
            <h1 className="mr-80 max-w-2xl text-[101px]  leading-none ">
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
        <div className="relative mt-52 flex flex-col items-start justify-between md:flex-row md:items-center">
          <div className="text-left">
            <DiscussText
              text="LET'S DISCUSS"
              href="#contact"
              className="text-7xl text-primary underline decoration-2 underline-offset-4"
            />
          </div>
          <div className="flex gap-20 text-left font-neue-Helvetica-Medium">
            <p className="text-xl text-default-500 tracking-wide">skills</p>
            <ul className="space-y-2 text-xl md:text-4xl">
              {skills.map((skill) => (
                <li key={skill.name}>
                  <a
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {skill.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
