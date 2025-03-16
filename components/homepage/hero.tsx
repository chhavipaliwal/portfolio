'use client';
import { useState } from 'react';

const HeroSection = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="mb-4 text-5xl font-bold md:text-6xl">
          Welcome to My World
        </h1>
        <p className="text-xl text-gray-300 md:text-2xl">
          Chhavi: Where Innovation Meets Excellence
        </p>
        <button className="mt-6 rounded-full bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700">
          Explore My Work
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
