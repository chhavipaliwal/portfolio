'use client';
import react from 'react';

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/vedio/kreyda2.mp4" type="video/mp4" />
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 p-8">
        <div>
          <p> Bringing Ideas to Life with Code and Creativity.</p>
        </div>
        <div>
          <p>
            I can design and develop intelligent products that transform ideas
            into reality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
