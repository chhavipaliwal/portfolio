'use client';
import react from 'react';
import Link from 'next/link';
import DiscussText from '../ui/animate';
export default function ContactMe() {
  return (
    <>
      <section className="mt-0 h-screen w-full rounded-t-[74px] bg-[#2F3847] text-foreground">
        <div>
          <video
            autoPlay
            loop
            muted
            className="absolute inset-x-0 object-cover"
          >
            <source src="/vedio/kreyda.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative">
          <div className="flex flex-row justify-between text-white">
            <div className="">
              <h1 className="max-w-xl text-[101px] font-bold leading-none tracking-wide">
                LET'S CONNECT AND BUILD SOMETHING AMAZING TOGETHER
              </h1>
            </div>
          </div>
          <div>
            <div className="text-left">
              <DiscussText
                text="HELLO@PIXELPAW"
                className="font-neue-Helvetica-Condensed-light text-2xl text-white underline decoration-2 underline-offset-4"
              />
            </div>
            <div className="text-right">
              <DiscussText
                text="LET'S COLLABORATE"
                className="text-5xl text-primary underline decoration-2 underline-offset-4"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
