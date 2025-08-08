'use client';
import Marquee from 'react-fast-marquee';
const skills = ["LET'S WORK", "LET'S WORK", "LET'S WORK"];

export default function LetsWork() {
  return (
    <>
      <div className="relative -translate-y-72 overflow-hidden rounded-t-3xl bg-[#A6B8C7] font-neue-Helvetica md:rounded-t-large">
        <Marquee
          pauseOnHover={false}
          speed={40}
          gradient={false}
          loop={0}
          play={true}
          direction="left"
          className="[--duration:20s]"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="mx-2 py-2 pb-6 pt-6 text-[80px] leading-[80px] before:content-['•'] md:pb-12 md:pt-10 md:text-[120px]"
            >
              {skill}
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
}
