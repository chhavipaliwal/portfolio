'use client';
import NextTopLoader from 'nextjs-toploader';

const Sonner = () => {
  return (
    <>
      <NextTopLoader
        height={4}
        showSpinner={false}
        shadow="false"
        easing="ease"
        color="hsl(var(--heroui-primary))"
      />
    </>
  );
};

export default Sonner;
