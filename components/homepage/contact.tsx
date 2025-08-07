'use client';
import DiscussText from '../ui/animate';
export default function ContactMe() {
  return (
    <>
      <section className="w-full -translate-y-16 rounded-t-3xl bg-[#2F3847] py-16 font-neue-Helvetica text-foreground md:rounded-t-[74px]">
        <div>
          <video autoPlay loop muted className="absolute inset-x-0 object-cover">
            <source src="/video/contact.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative mb-32 sm:p-8">
          <div className="flex flex-row justify-between text-white">
            <div>
              <h2 className="p-4 text-5xl tracking-wide sm:max-w-xl sm:text-[117px] sm:leading-none">
                <span className="text-secondary">LET&apos;S</span> CONNECT{' '}
                <span className="text-secondary">AND</span>{' '}
                <span className="text-secondary">CREATE</span> SOMETHING{' '}
                <span className="text-secondary">MAGICAL.</span>
              </h2>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-4 p-4 sm:flex-row">
            <div>
              <p className="font-neue-Helvetica-Medium">Say Hi</p>
              <DiscussText
                text="CHHAVI.DIVINELY.DEV"
                className="font-manrope text-2xl text-white decoration-2 sm:text-2xl"
              />
            </div>
            <div>
              <DiscussText
                href="#contact"
                text="LET'S COLLABORATE"
                className="text-4xl tracking-wider text-primary underline decoration-2 underline-offset-4 sm:text-6xl sm:tracking-normal"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
