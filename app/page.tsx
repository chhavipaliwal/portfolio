import React from 'react';
import Image from 'next/image';
import { Code } from '@heroui/react';
import { cn } from '@/lib/utils';
import HeroSection from '@/components/homepage/hero';
import HomePage from './homepage/page';
export default function Home() {
  return (
    <>
      <div
        className={cn(
          'flex h-screen flex-col items-center justify-center space-y-10',
          'bg-default-100 text-default-900 dark:bg-default-900 dark:text-default-100'
        )}
      >
        <HomePage />
      </div>
    </>
  );
}
