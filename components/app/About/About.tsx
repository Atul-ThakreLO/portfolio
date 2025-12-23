"use client";

import React, { MouseEvent, useEffect, useRef } from "react";
import OrbitingSkills from "./OrbitingSkills";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const aboutHeading = useRef<HTMLHeadingElement>(null);
  const abountText = useRef<HTMLDivElement>(null);
  const socialLinksRef = useRef<HTMLUListElement>(null);
  const orbitingCircleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      aboutHeading.current,
      {
        x: -200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      abountText.current,
      {
        y: 100,
        opacity: 0,
        filter: "blur(10px)",
      },
      {
        y: 0,
        opacity: 1,
        filter: "none",
        duration: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      orbitingCircleRef.current,
      {
        opacity: 0,
        filter: "blur(20px)",
      },
      {
        opacity: 1,
        filter: "none",
        duration: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 30%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      }
    );

    if (socialLinksRef.current) {
      const listItems = socialLinksRef.current.querySelectorAll("li");
      gsap.fromTo(
        listItems,
        {
          y: 50,
          opacity: 0,
          filter: "blur(20px)",
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          filter: "none",
          scale: 1,
          duration: 0.3,
          // ease: "back.out(1.7)",
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "top top",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      icon: <GitHubIcon />,
      url: "https://github.com/Atul-ThakreLO",
    },
    {
      name: "LinkedIn",
      icon: <LinkedInIcon />,
      url: "https://www.linkedin.com/in/atul-thakre-logers",
    },
    {
      name: "Twitter",
      icon: <TwitterIcon />,
      url: "https://x.com/AtulThakre_Lg",
    },
    {
      name: "Discord",
      icon: <Discord />,
      url: "https://discord.com/users/1123143947536048129",
    },
    {
      name: "Email",
      icon: <EmailIcon />,
      url: "mailto:your.email@example.com",
    },
  ];

  function onHover(e: MouseEvent<HTMLElement>) {
    e.currentTarget.style.transform = "scale(1.3)";
  }

  function onLeave(e: MouseEvent<HTMLElement>) {
    e.currentTarget.style.transform = "scale(1)";
  }

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col md:flex-row gap-5"
    >
      <div
        className="absolute top-0 right-10 w-60 h-60 bg-chart-4/15 md:bg-chart-4/20 rounded-full blur-2xl animate-pulse pointer-events-none"
        style={{ animationDelay: "1s" }}
      ></div>
      <div className="absolute bottom-70 md:bottom-0 left-10 w-60 h-60 bg-chart-1/10 md:bg-chart-1/20 rounded-full blur-2xl animate-pulse pointer-events-none"></div>

      <div className="w-full md:w-[60%] text-background p-3 md:p-0">
        <h6 ref={aboutHeading} className="text-7xl font-bold">
          [About.]
        </h6>
        <div
          ref={abountText}
          className="bg-background/90 rounded-2xl p-0 md:ml-20 text-foreground mt-10"
        >
          <div className="bg-foreground">
            <p className="text-justify bg-background/90 rounded-4xl rounded-bl-none rounded-br-[40px] text-2xl p-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic eos
              iste sit corrupti. Inventore architecto fuga culpa temporibus
              consectetur nobis vitae tenetur, commodi sit optio. Explicabo
              quaerat harum ducimus necessitatibus! Aperiam, saepe. Veniam
              adipisci ad vero modi mollitia sunt magni harum voluptatem
              perferendis nisi? Ipsa voluptatem nesciunt ducimus nisi, repellat
              omnis esse odit distinctio labore nobis, maiores vel inventore
              fuga? Quam voluptatibus ipsum saepe est, modi totam aliquam ullam
              sed expedita voluptatum impedit
            </p>
          </div>
          <div className="w-full flex justify-end">
            <div className="md:w-[80%] bg-foreground rounded-tl-[40px] py-6 inverted-border-custom after:bg-background/90 before:bg-foreground">
              <ul
                ref={socialLinksRef}
                className="flex w-full justify-center gap-5 px-3 md:px-0 md:gap-10"
              >
                {socialLinks.map((link) => (
                  <li
                    key={link.name}
                    className="group relative p-2 md:p-4 bg-background/5 rounded-full border border-border/20 hover:border-chart-1/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-chart-1/20"
                  >
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                    >
                      <div className="w-6 h-6 text-background/70 group-hover:text-chart-1 transition-colors duration-300">
                        {link.icon}
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div ref={orbitingCircleRef} className="w-full h-full md:w-[40%] pt-10">
        <OrbitingSkills />
      </div>
    </section>
  );
};

export default About;

const GitHubIcon = () => (
  <svg
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const TwitterIcon = () => (
  <svg
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const EmailIcon = () => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const Discord = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 16 16"
    className="w-full h-full"
  >
    <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
  </svg>
);
