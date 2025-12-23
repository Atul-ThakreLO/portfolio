"use client";

import About from "@/components/app/About/About";
import Logo from "@/components/app/Fixed/Logo";
import Hero from "@/components/app/Hero/Hero";
import Projects from "@/components/app/Projects/Projects";
import Footer from "@/components/app/Footer/Footer";
import {
  generatePersonSchema,
  generateWebSiteSchema,
  generateProfilePageSchema,
} from "@/lib/schema";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Home() {
  const mainDivRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* Structured Data for SEO */}
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
        <Hero />
        <About />
        <Projects mainDivRef={mainDivRef} />
        <Footer />
      </div>
    </>
  );
}
