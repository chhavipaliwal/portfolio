'use client';
import { Avatar } from '@heroui/react';
import { SpringElement } from '../ui/spring-element';
import React from 'react';

export default function AboutMe() {
  return (
    <div
      className="grid w-full grid-cols-3 rounded-t-[74px] bg-secondary p-4 text-background sm:p-8"
      id="about"
    >
      <h1 className="col-span-full mt-10 text-white lg:col-span-1">about me</h1>
      <div className="col-span-full mt-10 line-clamp-3 flex flex-col gap-12 pb-40 lg:col-span-2">
        <Content>
          &quot;Hi, I&apos;m <span className="text-white">Chhavi</span> — a dedicated{' '}
          <span className="text-white">web developer</span>, and creative thinker who finds joy in
          writing clean code and designing functional UI. I specialize in framing seamless user
          experiences using <span className="text-white">React</span> &{' '}
          <span className="text-white">Tailwind CSS</span>, and love turning ideas into reality with{' '}
          <span className="text-white">Next.js.</span> At the heart of my work is a balance of
          design and logic, fueled by a mindset of continuous learning and attention to detail.
        </Content>
        <Content>
          I&apos;m naturally curious and driven by purpose, always eager to build meaningful
          projects that connect people and solve{' '}
          <span className="text-white">real-world problems.</span> I enjoy working on user-centered
          design and creating interactive interfaces that leave a lasting impact. Beyond the screen,
          I&apos;m into music, writing, and dreaming up my next big idea. Let&apos;s collaborate and
          build something truly impactful together.
        </Content>
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
  return <p className="mt-4 text-xl font-medium leading-snug tracking-[-0.475]">{children}</p>;
};
