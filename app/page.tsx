import React from 'react';
import HomePage from './homepage/page';
import SmoothScroll from '@/components/ui/smooth-scroll';

export default function Home() {
  return (
    // <SmoothScroll>
    <div className="flex flex-col">
      <HomePage />
    </div>
    // </SmoothScroll>
  );
}
