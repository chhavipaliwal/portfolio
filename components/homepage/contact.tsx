'use client';
import DiscussText from '../ui/animate';
export default function ContactMe() {
  return (
    <>
      <section className="w-full py-16 -translate-y-16 font-neue-Helvetica rounded-t-[74px] bg-[#2F3847] text-foreground ">
        <div>
          <video
            autoPlay
            loop
            muted
            className="absolute inset-x-0 object-cover"
          >
            <source src="/video/contact.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative mb-32 sm:p-8">
          <div className="flex flex-row justify-between text-white">
            <div className="mt-12">
              <h2 className="max-w-xl text-[117px] leading-none tracking-wide">
                <span className="text-secondary">LET&apos;S</span> CONNECT{' '}
                <span className="text-secondary">AND</span>{' '}
                <span className="text-secondary">CREATE</span> SOMETHING{' '}
                <span className="text-secondary">MAGICAL.</span>
              </h2>
            </div>
          </div>
          <div className="flex justify-between items-end mb-20">
            <div className="text-left">
              <DiscussText
                text="CHHAVI.DIVINELY.DEV"
                className="mt-12 text-2xl font-manrope text-white decoration-2"
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
        </div>
      </section>
    </>
  );
}
