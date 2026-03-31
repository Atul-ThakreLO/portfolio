"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Experience as ExpType } from "@/data";

gsap.registerPlugin(ScrollTrigger);

const Experience = ({ experiences }: { experiences: ExpType[] }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { x: -60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 55%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      itemRefs.current,
      { x: -40, opacity: 0, filter: "blur(5px)" },
      {
        x: 0,
        opacity: 1,
        filter: "none",
        duration: 0.5,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 45%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="relative mt-16 md:mt-24 px-4 md:px-20">
      <h2 ref={headingRef} className="text-6xl md:text-7xl font-bold text-background mb-10 md:mb-14">
        [Experience.]
      </h2>

      {/* Timeline */}
      <div className="relative border-l-2 border-border/20 flex flex-col gap-10">
        {experiences.map((exp, i) => (
          <div
            key={i}
            ref={(el) => { itemRefs.current[i] = el; }}
            className="relative"
          >
            {/* Timeline dot */}
            {/* <div className="absolute -left-[2.4rem] md:-left-[2.6rem] top-1.5 w-4 h-4 rounded-full bg-foreground border-2 border-background shadow-lg shadow-black/10" /> */}

            <div className="bg-foreground/90 border border-background/20 rounded-2xl p-5 md:p-6 hover:bg-background/5 transition-all duration-300">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-background">{exp.role}</h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-background/80 font-mono text-sm font-medium">{exp.company}</span>
                    <span className="text-border">·</span>
                    <span className="text-background/50 text-xs font-mono">{exp.type}</span>
                  </div>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-background/10 border border-border/20 text-background/80">
                    {exp.period}
                  </span>
                  <span className="text-xs text-background/50 font-mono flex items-center gap-1">
                    <PinIcon /> {exp.location}
                  </span>
                </div>
              </div>

              {/* Bullets */}
              <ul className="flex flex-col gap-2">
                {exp.bullets.map((bullet, j) => (
                  <li key={j} className="flex gap-2.5 text-sm text-background/80 leading-relaxed">
                    <span className="text-background/50 mt-1.5 shrink-0 text-xs">▸</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

const PinIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);
