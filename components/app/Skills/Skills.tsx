"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OrbitingSkills from "./OrbitingSkills";
import { SkillCategory } from "@/lib/notion";

gsap.registerPlugin(ScrollTrigger);

const Skills = ({ categories }: { categories: SkillCategory[] }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const orbitingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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
      cardsRef.current,
      { y: 50, opacity: 0, filter: "blur(6px)" },
      {
        y: 0,
        opacity: 1,
        filter: "none",
        duration: 0.5,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 45%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      orbitingRef.current,
      { x: -100, opacity: 0, filter: "blur(20px)" },
      {
        x: 0,
        opacity: 1,
        filter: "none",
        duration: 0.6,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 35%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="relative mt-16 md:mt-24 px-4 md:px-20">

      <h2
        ref={headingRef}
        className="text-7xl font-bold text-background mb-10 md:mb-14"
      >
        [Skills.]
      </h2>

      <div className="flex flex-col md:flex-row">
        <div ref={orbitingRef} className="md:w-[35%] w-full">
          <OrbitingSkills />
        </div>

        <div className="md:w-[65%] w-full grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              ref={(el) => { cardsRef.current[i] = el; }}
              className={`rounded-2xl border border-background/20 hover:bg-background/5 p-5 md:p-6 relative overflow-hidden`}
            >

              <h3 className="text-base font-semibold text-background/90 mb-4 font-mono">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs rounded-full bg-background/10 border border-border/20 text-background/80 hover:border-border/50 hover:bg-background/10 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>


    </section>
  );
};

export default Skills;
