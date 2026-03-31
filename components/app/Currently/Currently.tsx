"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CurrentlyItem } from "@/lib/notion";
import { Wrench, BookOpen, BookDashed, ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ICONS: Record<string, React.ReactNode> = {
  Building: <Wrench className="w-5 h-5 text-foreground/80" />,
  Learning: <BookOpen className="w-5 h-5 text-foreground/80" />,
  Reading: <BookDashed className="w-5 h-5 text-foreground/80" />,
};

const Currently = ({ items }: { items: CurrentlyItem[] }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
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
      { y: 50, opacity: 0, filter: "blur(5px)" },
      {
        y: 0,
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

  if (!items || items.length === 0) return null;

  return (
    <section id="currently" ref={sectionRef} className="relative mt-16 md:mt-24 px-4 md:px-20">
      <h2 ref={headingRef} className="text-5xl md:text-7xl font-bold text-background mb-10 md:mb-14">
        [Currently.]
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {items.map((item, i) => (
          <div
            key={item.category}
            ref={(el) => { cardsRef.current[i] = el; }}
            className="group relative bg-foreground/5 hover:bg-foreground/10 border border-background/20 rounded-2xl overflow-hidden transition-all duration-300"
          >
            {/* Header Badge */}
            <div className="px-5 pt-5 pb-3 border-b border-background/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="p-2 bg-background/10 rounded-lg">
                  {ICONS[item.category] || ICONS.Learning}
                </span>
                <span className="font-mono text-sm font-semibold tracking-wider text-background/90 uppercase">
                  {item.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-3">
              <h3 className="text-xl font-bold text-background leading-tight">
                {item.title}
              </h3>
              <p className="text-background/70 text-sm leading-relaxed">
                {item.description}
              </p>

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-background/50 hover:text-background transition-colors mt-2"
                >
                  View Details <ExternalLink size={14} />
                </a>
              )}
            </div>
            
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-background/20 rounded-2xl pointer-events-none transition-colors duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Currently;
