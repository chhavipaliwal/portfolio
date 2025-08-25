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
          playsInline
          preload="auto"
          controls={false}
          className="absolute inset-x-0 mt-40 w-full overflow-hidden object-cover sm:mt-20"
        >
          <source src="/video/banner.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative mt-28">
        <div className="flex flex-col justify-between gap-20 text-white sm:flex-row">
          <div>
            <h2 className="mb-3 max-w-[70%] text-4xl tracking-wide sm:h-[200px] sm:leading-none md:h-[500px] md:max-w-2xl md:text-[117px]">
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
                className="rounded-full border border-gray-500 p-2 sm:p-2"
              >
                <Icon icon="ri:instagram-line" className="h-3 w-3 text-white sm:h-5 sm:w-5" />
              </Link>

              {/* GitHub */}
              <Link
                href="https://github.com/chhavipaliwal"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-gray-500 p-2"
              >
                <Icon icon="uil:github" className="h-3 w-3 text-white sm:h-5 sm:w-5" />
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
                  className="h-3 w-3 text-white sm:h-5 sm:w-5"
                />
              </Link>

              {/* Twitter */}
              <Link
                href="https://x.com/PaliwalChhavi"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-gray-500 p-2"
              >
                <Icon icon="akar-icons:twitter-fill" className="h-3 w-3 text-white sm:h-5 sm:w-5" />
              </Link>
            </div>
          </div>
          {/* Right Section: Subtext */}
          <div className="ml-auto max-w-[60%] p-4 text-right font-pp-neue-machina sm:max-w-lg md:mt-80">
            <p className="text-lg font-light sm:text-3xl">
              I can design and develop intelligent products that transform ideas into reality.
            </p>
          </div>
        </div>
        <div className="relative flex flex-col items-start justify-between md:flex-row md:items-center">
          <div className="flex flex-col gap-5 text-left font-neue-Helvetica-Medium md:mt-40 md:flex-row md:gap-20">
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
              className="mb-6 mt-4 text-4xl tracking-wide text-primary underline decoration-2 underline-offset-4 md:text-7xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
