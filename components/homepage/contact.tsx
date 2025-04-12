'use client';
import react from 'react';
import Link from 'next/link';
import DiscussText from '../ui/animate';
export default function ContactMe() {
  return (
    <>
      <section className="h-screen w-full rounded-t-[74px] bg-[#2F3847] text-foreground">
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
        <div className="relative sm:p-8">
          <div className="flex flex-row justify-between text-white">
            <div className="mt-12">
              <h1 className="max-w-xl text-[117px] leading-none tracking-wide">
                <span className="text-secondary">LET'S</span> CONNECT{' '}
                <span className="text-secondary">AND</span>{' '}
                <span className="text-secondary">CREATE</span> SOMETHING{' '}
                <span className="text-secondary">MAGICAL.</span>
              </h1>
            </div>
          </div>
          <div>
            <div className="text-left">
              <DiscussText
                text="HELLO@PIXELPAW"
                className="font-neue-Helvetica-Condensed-light text-2xl text-white decoration-2"
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
