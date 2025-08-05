'use client';
import DiscussText from '../ui/animate';
export default function ContactMe() {
  return (
    <>
      <section className="relative w-full -translate-y-20 rounded-t-[74px] bg-[#2F3847] p-8 py-16 pb-48 font-neue-Helvetica text-foreground">
        <div className="flex flex-row justify-between text-white">
          <div className="mt-12">
            <h2 className="max-w-xl font-neue-Helvetica text-[80px] leading-none tracking-tight md:text-[100px]">
              <span className="text-secondary">LET&apos;S</span> CONNECT{' '}
              <span className="text-secondary">AND</span>{' '}
              <span className="text-secondary">CREATE</span> SOMETHING{' '}
              <span className="text-secondary">MAGICAL.</span>
            </h2>
          </div>
        </div>

        <div className="mt-56 flex flex-col items-start justify-between gap-8 md:mt-36 md:flex-row md:items-center">
          <div className="text-left">
            <DiscussText
              text="CHHAVI.DIVINELY.DEV"
              className="font-manrope text-2xl text-white decoration-2"
            />
          </div>
          <div className="text-right">
            <DiscussText
              href="#contact"
              text="LET'S COLLABORATE"
              className="text-6xl text-primary underline decoration-2 underline-offset-4"
            />
          </div>
        </div>
        <div className="absolute left-1/2 top-1/2 z-10 flex h-full w-full -translate-x-1/2 -translate-y-[48%] items-center justify-center">
          <video autoPlay loop muted className="max-w-3xl object-cover">
            <source src="/video/contact.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </>
  );
}
