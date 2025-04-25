'use client';
import react from 'react';
import Marquee from 'react-fast-marquee';
const skills = ["LET'S WORK", "LET'S WORK", "LET'S WORK"];
export default function LetsWork() {
  return (
    <>
      <div className="relative -translate-y-44 overflow-hidden rounded-t-[74px] bg-[#A6B8C7] py-6">
        <Marquee
          pauseOnHover={false}
          speed={40}
          gradient={false}
          loop={0} // 0 = infinite
          play={true}
          direction="left"
          className="[--duration:20s]"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="mx-8 mb-10 mt-10 text-[60px] leading-[100px] before:content-['•'] md:text-[120px]"
            >
              {skill}
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
}
