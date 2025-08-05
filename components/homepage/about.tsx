'use client';
import { Avatar } from '@heroui/react';
import { SpringElement } from '../ui/spring-element';
import React from 'react';

const fallbackAbout1 = `Hi, I'm Chhavi — a dedicated web developer, and creative thinker who finds joy in
          writing clean code and designing functional UI. I specialize in framing seamless user
          experiences using React & Tailwind CSS, and love turning ideas into reality with Next.js.
          At the heart of my work is a balance of design and logic, fueled by a mindset of continuous learning and attention to detail.`;

const fallbackAbout2 = ` I'm naturally curious and driven by purpose, always eager to build meaningful
          projects that connect people and solve real-world problems. I enjoy working on user-centered
          design and creating interactive interfaces that leave a lasting impact. Beyond the screen,
          I'm into music, writing, and dreaming up my next big idea. Let's collaborate and build
          something truly impactful together.`;

export default function AboutMe() {
  return (
    <div
      className="grid w-full grid-cols-3 rounded-t-medium bg-secondary p-4 text-background sm:p-8 md:rounded-t-large"
      id="about"
    >
      <h1 className="col-span-full mt-10 text-white lg:col-span-1">about me</h1>
      <div className="col-span-full line-clamp-3 flex flex-col gap-8 pb-40 md:mt-10 lg:col-span-2">
        <Content>{fallbackAbout1}</Content>
        <Content>{fallbackAbout2}</Content>
        <div className="flex items-center gap-4">
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
          <div className="font-bold">
            <h2 className="text-3xl font-semibold text-foreground">Chhavi Paliwal</h2>
            <p>Web Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const Content = ({ children }: { children: React.ReactNode }) => {
  return <p className="mt-4 text-2xl leading-normal tracking-[-0.450]">{children}</p>;
};
