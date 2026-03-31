"use client";

import About from "@/components/app/About/About";
import Logo from "@/components/app/Fixed/Logo";
import QuickLinks from "@/components/app/Fixed/QuickLinks";
import Hero from "@/components/app/Hero/Hero";
import Skills from "@/components/app/Skills/Skills";
import Education from "@/components/app/Education/Education";
import Experience from "@/components/app/Experience/Experience";
import Projects from "@/components/app/Projects/Projects";
import Contact from "@/components/app/Contact/Contact";
import Footer from "@/components/app/Footer/Footer";
import Currently from "@/components/app/Currently/Currently";
import {
  generatePersonSchema,
  generateWebSiteSchema,
  generateProfilePageSchema,
} from "@/lib/schema";
import { useRef } from "react";
import {
  AboutData,
  CurrentlyItem,
  EducationData,
  SkillCategory,
} from "@/lib/notion";
import { Project } from "@/types";
import { Experience as ExpType } from "@/data";

interface HomeClientProps {
  initialData: {
    about: AboutData;
    skills: SkillCategory[];
    education: EducationData;
    experiences: ExpType[];
    projects: Project[];
    currently: CurrentlyItem[];
  };
}

export default function HomeClient({ initialData }: HomeClientProps) {
  const mainDivRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generatePersonSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateWebSiteSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateProfilePageSchema()),
        }}
      />

      <div ref={mainDivRef} className="bg-foreground overflow-hidden">
        <Logo />
        <QuickLinks />
        <Hero />
        <About data={initialData.about} />
        <Skills categories={initialData.skills} />
        <Education data={initialData.education} />
        <Experience experiences={initialData.experiences} />
        <Currently items={initialData.currently} />
        <Projects mainDivRef={mainDivRef} projects={initialData.projects} />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
