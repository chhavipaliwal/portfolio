'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutMe() {
  const [isHovering, setIsHovering] = useState(false);

  // First paragraph content with keywords marked
  const firstParagraph = [
    "Hi, I'm Kitti — a ",
    { text: 'passionate developer', isKeyword: true },
    ', fresh ',
    { text: 'ML Engineer', isKeyword: true },
    ', and ',
    { text: 'creative thinker', isKeyword: true },
    ' with a love for ',
    { text: 'clean code', isKeyword: true },
    ' and ',
    { text: 'beautiful UI', isKeyword: true },
    ". Whether it's crafting sleek interfaces with ",
    { text: 'React', isKeyword: true },
    ' & ',
    { text: 'Tailwind', isKeyword: true },
    ' or bringing ideas to life with ',
    { text: 'Next.js', isKeyword: true },
    ' and ',
    { text: 'MongoDB', isKeyword: true },
    ', I thrive at the intersection of ',
    { text: 'design', isKeyword: true },
    ' and ',
    { text: 'logic', isKeyword: true },
    '.',
  ];

  // Second paragraph content with keywords marked
  const secondParagraph = [
    { text: 'Curious', isKeyword: true },
    ' by nature and driven by ',
    { text: 'purpose', isKeyword: true },
    ', I enjoy building meaningful ',
    { text: 'digital experiences', isKeyword: true },
    ' that ',
    { text: 'connect people', isKeyword: true },
    ' and ',
    { text: 'solve real problems', isKeyword: true },
    ". When I'm not coding, you'll find me exploring music, writing, or dreaming up my next big idea. Let's build something ",
    { text: 'magical', isKeyword: true },
    ' together.',
  ];

  // Render paragraph with keyword highlighting
  const renderParagraph = (
    content: Array<string | { text: string; isKeyword: boolean }>
  ) => {
    return content.map((item, index) => {
      if (typeof item === 'string') {
        return (
          <span key={index} className={isHovering ? 'text-gray-500' : ''}>
            {item}
          </span>
        );
      } else {
        return (
          <span
            key={index}
            className={
              isHovering && item.isKeyword
                ? 'font-neue-Helvetica-Medium text-black'
                : ''
            }
          >
            {item.text}
          </span>
        );
      }
    });
  };

  return (
    <div className="grid w-full grid-cols-3 overflow-hidden rounded-t-[74px] bg-secondary font-neue-Helvetica-Condensed-light font-bold text-black sm:p-8">
      <h1 className="col-span-1 mt-10 text-6xl text-white">About Me :</h1>
      <div className="col-span-2 mt-10 flex flex-col pb-40 line-clamp-3">
        <p
          className="mt-4 text-3xl transition-colors duration-300"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {renderParagraph(firstParagraph)}
        </p>
        <p
          className="mt-4 text-3xl transition-colors duration-300"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {renderParagraph(secondParagraph)}
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
            <span className="text-3xl tracking-wide text-white">
              Chhavi Paliwal
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
