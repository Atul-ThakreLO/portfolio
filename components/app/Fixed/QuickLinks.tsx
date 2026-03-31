"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const links = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const QuickLinks = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const menuRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Animate menu open/close
  useEffect(() => {
    if (!menuRef.current) return;
    if (open) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: 20, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.25, ease: "power2.out" }
      );
      gsap.fromTo(
        itemRefs.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, stagger: 0.05, duration: 0.2, ease: "power2.out" }
      );
    } else {
      gsap.to(menuRef.current, {
        opacity: 0,
        y: 10,
        scale: 0.95,
        duration: 0.15,
        ease: "power1.in",
      });
    }
  }, [open]);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      if (menuRef.current && !menuRef.current.contains(target)) {
        const fab = document.getElementById("quick-links-fab");
        if (fab && !fab.contains(target)) setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className="fixed bottom-15 right-15 z-50 flex flex-col items-end gap-3">
      {/* Link Menu */}
      {open && (
        <div
          ref={menuRef}
          className="flex flex-col gap-2 items-end"
          style={{ opacity: 0 }}
        >
          {links.map(({ label, id }, i) => (
            <a
              key={id}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              onClick={() => scrollTo(id)}
              className={`cursor-pointer px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md border transition-all duration-200 whitespace-nowrap
                ${
                  activeSection === id
                    ? "bg-chart-1/20 border-chart-1/60 text-chart-1 shadow-lg shadow-chart-1/20"
                    : "bg-background/60 border-border/30 text-foreground/70 hover:border-chart-1/40 hover:text-foreground hover:bg-background/80"
                }`}
              style={{ opacity: 0 }}
            >
              {label}
            </a>
          ))}
        </div>
      )}

      {/* FAB Button */}
      <button
        id="quick-links-fab"
        onClick={() => setOpen((v) => !v)}
        aria-label="Quick Links"
        className={`group flex items-center gap-2 px-4 py-3 rounded-full backdrop-blur-md border font-mono font-bold text-sm transition-all duration-300
          ${
            open
              ? "bg-chart-1/20 border-chart-1/60 text-chart-1 shadow-lg shadow-chart-1/25"
              : "bg-background/70 border-border/30 text-foreground/80 hover:border-chart-1/50 hover:text-chart-1 hover:shadow-lg hover:shadow-chart-1/20"
          }`}
      >
        <span
          className={`transition-transform duration-300 ${open ? "rotate-45" : "rotate-0"}`}
        >
          <MenuIcon open={open} />
        </span>
        <span className="hidden sm:inline">{open ? "Close" : "Navigate"}</span>
      </button>
    </div>
  );
};

export default QuickLinks;

const MenuIcon = ({ open }: { open: boolean }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="transition-all duration-300"
  >
    {open ? (
      // X icon
      <>
        <line
          x1="2"
          y1="2"
          x2="14"
          y2="14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="14"
          y1="2"
          x2="2"
          y2="14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </>
    ) : (
      // Grid/compass icon
      <>
        <circle cx="4" cy="4" r="1.5" fill="currentColor" />
        <circle cx="8" cy="4" r="1.5" fill="currentColor" />
        <circle cx="12" cy="4" r="1.5" fill="currentColor" />
        <circle cx="4" cy="8" r="1.5" fill="currentColor" />
        <circle cx="8" cy="8" r="1.5" fill="currentColor" />
        <circle cx="12" cy="8" r="1.5" fill="currentColor" />
        <circle cx="4" cy="12" r="1.5" fill="currentColor" />
        <circle cx="8" cy="12" r="1.5" fill="currentColor" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </>
    )}
  </svg>
);
