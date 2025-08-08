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
              className="mx-2 py-2 pt-8 text-[80px] leading-[80px] before:content-['•'] md:text-[120px]"
            >
              {skill}
            </div>
          ))}
        </Marquee>
      </div>
      <div className="relative overflow-hidden rounded-t-3xl bg-[#A6B8C7] md:rounded-t-large">
        <Marquee
          pauseOnHover={false}
          speed={40}
          gradient={false}
          loop={0} // 0 = infinite
          play={true}
          direction="left"
          className="font-neue-Helvetica [--duration:18s]"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="mx-2 py-2 pt-8 text-[80px] leading-[100px] text-primary before:mr-2 before:text-secondary before:content-['•'] md:py-10 md:pt-16 md:text-[120px]"
            >
              {skill}
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
}
