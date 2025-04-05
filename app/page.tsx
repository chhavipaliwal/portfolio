import React from 'react';
import Image from 'next/image';
import { Code } from '@heroui/react';
import { cn } from '@/lib/utils';
import HeroSection from '@/components/homepage/hero';
import HomePage from './homepage/page';
export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-10 bg-background">
        <HomePage />
      </div>
    </>
  );
}
