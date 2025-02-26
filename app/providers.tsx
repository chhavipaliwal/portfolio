'use client';

import { HeroUIProvider, ToastProvider } from '@heroui/react';
import React from 'react';
import { SessionProvider } from 'next-auth/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <ToastProvider
        toastProps={{
          variant: 'flat',
          shouldShowTimeoutProgess: true
        }}
      />
      <SessionProvider>{children}</SessionProvider>
    </HeroUIProvider>
  );
}
