"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ── Icons ─────────────────────────────────────────────────────────────
const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/30 group-hover:text-foreground transition-colors duration-300">
    <path d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
);
const PinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);
const EmailIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const DiscordIcon = () => (
  <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
    <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
  </svg>
);
const GitHubIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);
const TwitterIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// ── Data ──────────────────────────────────────────────────────────────
const contactInfo = [
  {
    label: "Email",
    value: "atulthakre.dev@gmail.com",
    href: "mailto:atulthakre.dev@gmail.com",
    icon: <EmailIcon />,
    color: "foreground",
    border: "border-border/20",
    bg: "bg-background/90",
  },
  {
    label: "Location",
    value: "Nagpur, Maharashtra, India",
    href: undefined,
    icon: <PinIcon />,
    color: "foreground",
    border: "border-border/20",
    bg: "bg-background/90",
  },
  {
    label: "Discord",
    value: "AtulThakre_Lg",
    href: "https://discord.com/users/1123143947536048129",
    icon: <DiscordIcon />,
    color: "foreground",
    border: "border-border/20",
    bg: "bg-background/90",
  },
];

const socialLinks = [
  { name: "GitHub", icon: <GitHubIcon />, url: "https://github.com/Atul-ThakreLO", label: "Source Code" },
  { name: "LinkedIn", icon: <LinkedInIcon />, url: "https://www.linkedin.com/in/atul-thakre-logers", label: "Connect" },
  { name: "Twitter / X", icon: <TwitterIcon />, url: "https://x.com/AtulThakre_Lg", label: "Follow" },
];

// ── Component ─────────────────────────────────────────────────────────
const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const infoRef = useRef<(HTMLDivElement | null)[]>([]);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { x: -60, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 0.6, ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 55%", toggleActions: "play none none reverse" },
      }
    );
    gsap.fromTo(
      infoRef.current,
      { y: 40, opacity: 0, filter: "blur(6px)" },
      {
        y: 0, opacity: 1, filter: "none", duration: 0.5, stagger: 0.12, ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 45%", toggleActions: "play none none reverse" },
      }
    );
    gsap.fromTo(
      rightRef.current,
      { x: 50, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 0.6, ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 45%", toggleActions: "play none none reverse" },
      }
    );
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="relative mt-16 md:mt-24 mb-20 px-4 md:px-20">
      <h2 ref={headingRef} className="text-7xl font-bold text-background mb-10 md:mb-14">
        [Contact.]
      </h2>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Left — Info Cards */}
        <div className="flex flex-col gap-4">
          <p className="text-foreground/60 text-base leading-relaxed mb-2">
            Open to freelance, collaborations, and full-time opportunities. Feel free to reach out — I respond fast.
          </p>

          {contactInfo.map((info, i) => (
            <div
              key={info.label}
              ref={(el) => { infoRef.current[i] = el; }}
              className={`flex items-center gap-4 p-4 rounded-2xl ${info.bg} border ${info.border} group hover:border-border/60 transition-colors duration-200`}
            >
              <div className={`p-2.5 rounded-xl bg-foreground/10 text-${info.color} shrink-0`}>
                {info.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-mono text-foreground/40 mb-0.5">{info.label}</p>
                {info.href ? (
                  <a href={info.href} target="_blank" rel="noopener noreferrer"
                    className="text-sm font-medium text-foreground hover:underline transition-all duration-200 truncate block">
                    {info.value}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-foreground truncate">{info.value}</p>
                )}
              </div>
            </div>
          ))}

          {/* CTA Button */}
          <a
            href="mailto:atulthakre.dev@gmail.com"
            className="mt-2 w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-foreground border border-foreground text-background font-semibold text-sm hover:bg-foreground/90 transition-all duration-300"
          >
            <span className="w-4 h-4"><EmailIcon /></span>
            Send me a message
          </a>
        </div>

        {/* Right — Social Links */}
        <div ref={rightRef} className="flex flex-col gap-4">
          <p className="text-foreground/60 text-sm font-mono mb-2">// find me on</p>

          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-2xl bg-background/90 border border-border/20 hover:border-border/60 hover:bg-background transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="w-8 h-8 text-foreground/70 group-hover:text-foreground transition-colors duration-300 shrink-0">
                {link.icon}
              </div>
              <div className="flex-1">
                <p className="text-foreground font-semibold">{link.name}</p>
                <p className="text-foreground/40 text-xs font-mono">{link.label}</p>
              </div>
              <ArrowIcon />
            </a>
          ))}

          {/* Availability status */}
          <div className="mt-2 p-4 rounded-2xl bg-background/90 border border-border/20 flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-foreground animate-pulse shrink-0" />
            <div>
              <p className="text-foreground/80 text-sm font-medium">Available for opportunities</p>
              <p className="text-foreground/40 text-xs font-mono">Nagpur, India · Remote friendly</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
