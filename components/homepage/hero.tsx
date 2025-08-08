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
    <section className="bg-background p-4 font-neue-Helvetica leading-none text-foreground sm:p-8">
      <div className="">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-x-0 mt-20 w-full overflow-hidden object-cover"
        >
          <source src="/video/banner.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative mt-20 md:mt-28">
        <div className="flex flex-row justify-between text-white">
          <div>
            <h2 className="h-[300px] p-4 text-5xl tracking-wide sm:h-[200px] sm:leading-none md:h-[600px] md:max-w-2xl md:text-[117px]">
              <span className="text-secondary">BRINGING</span> IDEAS{' '}
              <span className="text-secondary">TO LIFE</span> THROUGH{' '}
              <span className="text-secondary">CODE</span> AND{' '}
              <span className="text-secondary">CREATIVITY</span>
            </h2>
            <div className="flex items-center space-x-3">
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
                <Icon icon="akar-icons:linkedin-fill" className="h-5 w-5 text-white" />
              </Link>

              {/* Twitter */}
              <Link
                href="https://x.com/PaliwalChhavi"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-gray-500 p-2"
              >
                <Icon icon="akar-icons:twitter-fill" className="h-5 w-5 text-white" />
              </Link>
            </div>
          </div>
          {/* Right Section: Subtext */}
          <div className="max-w-lg font-pp-neue-machina md:mt-80 md:text-right">
            <p className="text-3xl font-light">
              I can design and develop intelligent products that transform ideas into reality.
            </p>
          </div>
        </div>
        <div className="relative mt-52 flex flex-col items-start justify-between md:flex-row md:items-center">
          <div className="flex flex-col gap-5 text-left font-neue-Helvetica-Medium md:flex-row md:gap-20">
            <p className="font-neue-Helvetica-Condensed-light text-xl tracking-wide text-default-500">
              skills
            </p>
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
          <div className="text-right">
            <DiscussText
              text="LET'S DISCUSS"
              href="#contact"
              className="mt-4 text-4xl tracking-wide text-primary underline decoration-2 underline-offset-4 md:text-7xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
