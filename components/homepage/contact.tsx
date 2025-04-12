'use client';
import react from 'react';
import Link from 'next/link';
import DiscussText from '../ui/animate';
export default function ContactMe() {
  return (
    <>
      <section className="relative -mb-36 mt-36 bg-[#2F3847]">
        <div>
          <video
            autoPlay
            loop
            muted
            className="absolute inset-0 mt-20 h-full w-full object-cover"
          >
            <source src="/vedio/kreyda.mp4" />
          </video>
        </div>
        <div className="relative">
          <div className="flex flex-row justify-between text-white">
            <div className="">
              <h1 className="mr-80 max-w-xl text-[101px] font-bold leading-none tracking-wide">
                <span className="text-secondary">LET'S</span> BUILD{' '}
                <span className="text-secondary">SOMETHING</span> AMAZING{' '}
                <span className="text-secondary">TOGETHER.</span>
              </h1>
            </div>
          </div>
          <div className="text-left">
            <DiscussText
              text="LET'S COLLABORATE"
              className="text-7xl text-primary underline decoration-2 underline-offset-4"
            />
          </div>
        </div>
      </section>
    </>
  );
}
