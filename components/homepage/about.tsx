'use client';
import { Avatar } from '@heroui/react';
import { SpringElement } from '../ui/spring-element';

export default function AboutMe() {
  return (
    <div
      className="grid w-full grid-cols-3 overflow-auto rounded-t-[74px] bg-secondary text-background sm:p-8"
      id="about"
    >
      <h1 className="col-span-1 mt-10 text-6xl text-white">About Me</h1>
      <div className="col-span-2 mt-10 flex flex-col pb-40 line-clamp-3">
        <p className="mt-4 text-3xl tracking-wider leading-snug">
          Hi, I&apos;m Chhavi — a dedicated developer, and creative thinker who
          finds joy in writing clean code and designing functional UI. I
          specialize in framing seamless user experiences using React & Tailwind
          CSS, and love turning ideas into reality with Next.js and MongoDB. At
          the heart of my work is a balance of design and logic, fueled by a
          mindset of continuous learning and attention to detail.
        </p>
        <p className="mt-4 text-3xl tracking-wider leading-snug">
          I&apos;m naturally curious and driven by purpose, always eager to
          build meaningful projects that connect people and solve real-world
          problems. I enjoy working on user-centered design and creating
          interactive interfaces that leave a lasting impact. Beyond the screen,
          I&apos;m into music, writing, and dreaming up my next big idea.
          Let&apos;s collaborate and build something truly impactful together.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <SpringElement>
            <Avatar
              className="pointer-events-none"
              src="/chhavi.jpeg"
              size="lg"
              classNames={{
                img: 'object-top',
              }}
            />
          </SpringElement>
          <div>
            <h2 className="text-3xl font-semibold text-foreground">
              Chhavi Paliwal
            </h2>
            <p className="">Web Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
