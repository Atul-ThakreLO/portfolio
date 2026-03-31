"use client";

import React, { useEffect, useRef, RefObject, useState } from "react";
import ProjectCard from "./ProjectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Timeline from "./Timeline";
import { ProjectCategory, Project } from "@/types";

gsap.registerPlugin(ScrollTrigger);

interface ProjectsProps {
  mainDivRef: RefObject<HTMLDivElement | null>;
  projects: Project[];
}

const FILTERS: { label: string; value: ProjectCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Web3", value: "web3" },
  { label: "Full Stack", value: "fullstack" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "Other", value: "other" },
];

const Projects = ({ mainDivRef, projects }: ProjectsProps) => {
  const projectSectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "all">("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  useEffect(() => {
    if (projectSectionRef.current && mainDivRef.current) {
      gsap.fromTo(
        mainDivRef.current,
        { backgroundColor: "oklch(0.985 0 0)" },
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

  // Animate cards on filter change
  useEffect(() => {
    if (!cardsContainerRef.current) return;
    const cards = cardsContainerRef.current.querySelectorAll(".project-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 20, scale: 0.97 },
      { opacity: 1, y: 0, scale: 1, duration: 0.3, stagger: 0.05, ease: "power2.out" }
    );
  }, [activeFilter]);

  return (
    <section
      id="projects"
      ref={projectSectionRef}
      className="relative mt-5 mb-52 md:mb-10 md:mt-72 pb-28"
    >

      <div className="flex flex-col items-center pt-12 md:pt-10">
        <Timeline
          sectionRef={projectSectionRef}
          cardsContainerRef={cardsContainerRef}
        />

        {/* Filter Tabs */}
        <div className="w-full md:px-28 mb-6" id="projects-filter-row">
          <div className="flex flex-wrap gap-2 justify-center">
            {FILTERS.map(({ label, value }) => (
              <button
                key={value}
                onClick={() => setActiveFilter(value)}
                className={`px-4 py-2 rounded-full text-sm font-mono border transition-all duration-250
                  ${
                    activeFilter === value
                      ? "bg-foreground text-background font-bold border-foreground"
                      : "bg-foreground/5 border-border/25 text-foreground/60 hover:border-border/50 hover:text-foreground hover:bg-foreground/10"
                  }`}
              >
                {label}
                {value !== "all" && (
                  <span className="ml-1.5 text-xs opacity-50">
                    ({projects.filter((p) => p.category === value).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div ref={cardsContainerRef} className="opacity-0 mt-2 w-full md:px-28">
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] items-center justify-center gap-4 w-full">
            {filteredProjects.map((project, index) => (
              <div key={`${project.name}-${index}`} className="project-card">
                <ProjectCard details={project} />
              </div>
            ))}
          </div>
          {filteredProjects.length === 0 && (
            <p className="text-center text-foreground/40 font-mono text-sm py-12">
              No projects in this category yet.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
