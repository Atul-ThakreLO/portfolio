"use client";

import React, { useEffect, useRef, RefObject, useState } from "react";
import { projects } from "../../../data";
import ProjectCard from "./ProjectCard";
import { TextAnimate } from "@/components/ui/text-animate";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Timeline from "./Timeline";

gsap.registerPlugin(ScrollTrigger);

interface ProjectsProps {
  mainDivRef: RefObject<HTMLDivElement | null>;
}

const Projects = ({ mainDivRef }: ProjectsProps) => {
  const projectSectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (projectSectionRef.current && mainDivRef.current) {
      gsap.fromTo(
        mainDivRef.current,
        {
          backgroundColor: "oklch(0.985 0 0)",
        },
        {
          backgroundColor: "oklch(0.145 0 0)",
          scrollTrigger: {
            trigger: projectSectionRef.current,
            start: "top 40%",
            end: "top top",
            scrub: 1,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [mainDivRef]);

  return (
    <section ref={projectSectionRef} className="relative mt-28 mb-52 md:mb-10 md:mt-72 pb-28">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255, 0.4) 1px, transparent 1px)
          `,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="absolute top-20 right-20 w-96 h-96 bg-chart-3/4 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div
        className="absolute top-96 left-20 w-96 h-96 bg-chart-1/4 rounded-full blur-3xl animate-pulse pointer-events-none"
        style={{ animationDelay: "1.5s" }}
      ></div>
      <div className="absolute top-1/2 right-20 w-80 h-80 bg-chart-2/10 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div
        className="absolute bottom-40 left-20 w-80 h-80 bg-chart-1/10 rounded-full blur-3xl animate-pulse pointer-events-none"
        style={{ animationDelay: "1.5s" }}
      ></div>
      <div className="flex flex-col items-center pt-20 md:pt-10">
        <Timeline
          sectionRef={projectSectionRef}
          cardsContainerRef={cardsContainerRef}
        />
        <div ref={cardsContainerRef} className="opacity-0 mt-8 w-full md:px-28">
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] items-center justify-center gap-4 w-full">
            {projects.map((project, index) => (
              <ProjectCard key={index} details={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
