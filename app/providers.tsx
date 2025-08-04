'use client';

import { HeroUIProvider, ToastProvider } from '@heroui/react';
import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        refetchOnWindowFocus: false,
        refetchOnMount: true,
      },
    },
  });
  return (
    <HeroUIProvider>
      <QueryClientProvider client={queryClient}>
        <ToastProvider
          toastProps={{
            variant: 'flat',
            shouldShowTimeoutProgess: true,
          }}
        />
        <SessionProvider>{children}</SessionProvider>
      </QueryClientProvider>
    </HeroUIProvider>
  );
}
