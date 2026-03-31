"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { University, BookOpen, Award } from "lucide-react";
import { EducationData } from "@/lib/notion";

gsap.registerPlugin(ScrollTrigger);

const Education = ({ data }: { data: EducationData }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

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
      cardRef.current,
      { y: 40, opacity: 0, filter: "blur(8px)" },
      {
        y: 0,
        opacity: 1,
        filter: "none",
        duration: 0.6,
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
    <section id="education" ref={sectionRef} className="relative mt-16 md:mt-24 px-4 md:px-20">
      <h2 ref={headingRef} className="text-6xl md:text-7xl font-bold text-background mb-10 md:mb-14">
        [Education.]
      </h2>

      <div ref={cardRef} className="relative">
        <div className="hover:bg-background/5 border border-background/20 rounded-2xl overflow-hidden hover:border-background/60 transition-colors duration-300">
          {/* Header stripe */}
          <div className="bg-background/5 border-b border-background/20 px-6 py-5 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-background/10 border border-background/20 shrink-0">
              <University className="text-background w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-background">
                {data.institution}
              </h3>
              <p className="text-background/60 text-sm font-mono mt-0.5">{data.subtitle}</p>
            </div>
            <span className="shrink-0 text-xs font-mono px-3 py-1.5 rounded-full bg-background/20 border border-border/20 text-background/50">
              {data.period}
            </span>
          </div>

          <div className="px-6 py-5 grid md:grid-cols-2 gap-6">
            {/* Left — Info */}
            <div className="flex flex-col gap-4">
              <div>
                <div className="flex items-center gap-2 text-background/50 text-xs font-mono mb-1">
                  <BookOpen size={12} /> Degree
                </div>
                <p className="text-background font-semibold">
                  {data.degree}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-background/50 text-xs font-mono mb-1">
                  <Award size={12} /> Current Status
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-background animate-pulse" />
                  <span className="text-background/80 text-sm">{data.status}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-1">
                {data.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs rounded-full bg-background/10 border border-border/20 text-background/70">{tag}</span>
                ))}
              </div>
            </div>

            {/* Right — Coursework */}
            <div>
              <p className="text-background/50 text-xs font-mono mb-3">Relevant Coursework</p>
              <div className="flex flex-wrap gap-2">
                {data.coursework.map((c) => (
                  <span
                    key={c}
                    className="px-3 py-1 text-xs rounded-full bg-background/10 border border-border/20 text-background/70 hover:border-border/50 hover:bg-background/10 transition-colors duration-200"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
