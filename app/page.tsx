import React from 'react';
import Image from 'next/image';
import { Code } from '@heroui/react';
import { cn } from '@/lib/utils';
export default function Home() {
  return (
    <>
      <div
        className={cn(
          'flex h-screen flex-col items-center justify-center space-y-10',
          'bg-default-100 text-default-900 dark:bg-default-900 dark:text-default-100'
        )}
      >
        <h1>
          Edit this page on
          <Code>app/page.tsx</Code>
        </h1>
      </div>
    </>
  );
}
