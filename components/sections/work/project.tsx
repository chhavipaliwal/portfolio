import React from 'react';

const Header = () => {
  return (
    <>
      <section className="relative h-56 md:h-96 translate-y-10">
        <div className="absolute top-0 left-[50%] mt-12 translate-x-[-50%] text-[50px] leading-[60px] md:text-[80px] md:leading-[80px] text-center">
          <img
            src="/sparkle.png"
            width={60}
            alt="sparkle"
            className="text-primary absolute left-[-10%] md:left-[10%] top-[35%]"
          />
          <img
            src="/sparkle.png"
            width={60}
            alt="sparkle"
            className="text-primary absolute left-[40%] md:left-[50%] top-[80%] rotate-45"
          />
          <img
            src="/sparkle-filled.png"
            width={70}
            alt="sparkle"
            className="text-primary absolute left-[90%] md:left-[84%] top-[0%]"
          />
          <div className="gap-5 ">My</div>
          <div className="flex gap-2">
            <span className="font-extrabold italic font-pp-migra text-secondary -rotate-12 block">
              Projects
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
