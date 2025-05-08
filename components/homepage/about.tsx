'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutMe() {
  const [isHovering, setIsHovering] = useState(false);

  // First paragraph content with keywords marked
  const firstParagraph = [
    "Hi, I'm ",
    { text: 'Chhavi', isKeyword: true },
    ' — a ',
    { text: 'dedicated developer', isKeyword: true },
    ', and ',
    { text: 'creative thinker', isKeyword: true },
    ' who finds joy in writing ',
    { text: 'clean code', isKeyword: true },
    ' and designing ',
    { text: 'functional UI', isKeyword: true },
    '. I specialize in framing seamless ',
    { text: 'user experiences', isKeyword: true },
    ' using ',
    { text: 'React', isKeyword: true },
    ' & ',
    { text: 'Tailwind CSS', isKeyword: true },
    ', and love turning ideas into reality with ',
    { text: 'Next.js', isKeyword: true },
    ' and ',
    { text: 'MongoDB', isKeyword: true },
    '. At the heart of my work is a balance of ',
    { text: 'design', isKeyword: true },
    ' and ',
    { text: 'logic', isKeyword: true },
    ', fueled by a mindset of ',
    { text: 'continuous learning', isKeyword: true },
    ' and ',
    { text: 'attention to detail', isKeyword: true },
    '.',
  ];

  // Second paragraph content with keywords marked
  const secondParagraph = [
    'I’m naturally ',
    { text: 'curious', isKeyword: true },
    ' and driven by ',
    { text: 'purpose', isKeyword: true },
    ', always eager to build ',
    { text: 'meaningful projects', isKeyword: true },
    ' that ',
    { text: 'connect people', isKeyword: true },
    ' and ',
    { text: 'solve real-world problems', isKeyword: true },
    '. I enjoy working on ',
    { text: 'user-centered design', isKeyword: true },
    ' and creating ',
    { text: 'interactive interfaces', isKeyword: true },
    ' that leave a lasting impact. Beyond the screen, I’m into ',
    { text: 'music', isKeyword: true },
    ', ',
    { text: 'writing', isKeyword: true },
    ', and dreaming up my next ',
    { text: 'big idea', isKeyword: true },
    '. Let’s collaborate and build something truly ',
    { text: 'impactful', isKeyword: true },
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
    <div
      className="grid w-full grid-cols-3 overflow-hidden rounded-t-[74px] bg-secondary font-neue-Helvetica-Condensed-light font-bold text-black sm:p-8"
      id="about"
    >
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
