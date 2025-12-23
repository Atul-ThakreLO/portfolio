"use client";

import { TextAnimate } from "@/components/ui/text-animate";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { TerminalSection } from "./TerminalSection";

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const outerContainer = useRef<HTMLDivElement>(null);
  const terminalContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const isMobile = window.innerWidth < 768;

    const tl = gsap.timeline({
      delay: 1,
      onComplete: () => {
        document.body.style.overflow = "auto";
      },
    });
    if (textRef.current) {
      tl.fromTo(
        textRef.current,
        {
          x: 0,
          y: 0,
        },
        {
          x: isMobile
            ? -window.innerWidth / 2 + 130
            : -window.innerWidth / 2 + 280,
          y: isMobile
            ? -window.innerHeight / 2 + 30
            : -window.innerHeight / 2 + 40,
          scale: 0.8,
          duration: 0.5,
          ease: "power1.inOut",
        }
      )
        .fromTo(
          outerContainer.current,
          {
            backgroundColor: "black",
          },
          {
            backgroundColor: "transparent",
            //   color: "black",
            duration: 2,
            delay: 0.5,
          }
        )
        .fromTo(
          terminalContainer.current,
          {
            display: "none",
            opacity: 0,
            filter: "blur(10px)",
          },
          {
            display: "flex",
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
          }
        );
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <main className="relative">
      <div className="absolute top-30 left-20 w-64 h-64 bg-chart-5/17 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div
        className="absolute bottom-20 right-40 w-80 h-80 bg-chart-3/15 rounded-full blur-3xl animate-pulse pointer-events-none"
        style={{ animationDelay: "2s" }}
      ></div>

      <div
        ref={outerContainer}
        className="h-screen w-full flex items-center justify-center z-50 absolute top-0 left-0"
      >
        <div ref={textRef}>
          <TextAnimate
            animation="blurInUp"
            by="character"
            className="text-5xl md:text-7xl font-medium text-red-500"
            once
          >
            Logers
          </TextAnimate>
        </div>
      </div>
      <div className="h-screen w-full justify-between md:justify-normal pb-5 md:pb-0 md:gap-10 flex relative items-center flex-col md:flex-row  md:pl-20 text-background">
        <div className="absolute top-0 right-0 flex flex-col md:flex-row md:py-4  md:mt-3 mt-2 md:mr-10 font-mono ">
          <div className="md:border-r border-black">
            <TextAnimate
              animation="blurInUp"
              by="word"
              delay={2.5}
              className="px-2 md:px-5"
              once
            >
              Address: 0xA7...9F
            </TextAnimate>
          </div>
          <div>
            <TextAnimate
              animation="blurInUp"
              by="word"
              delay={2.5}
              className="px-2 md:px-5"
              once
            >
              Network: Ethereum
            </TextAnimate>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-20 md:mt-0 px-2 md:px-0">
          <TextAnimate
            animation="blurInUp"
            by="word"
            delay={2.5}
            className="text-5xl md:text-6xl my-5 md:my-10"
            once
          >
            Hi 👋, I'M
          </TextAnimate>
          <div className="flex items-end">
            <TextAnimate
              animation="blurInUp"
              by="word"
              delay={3}
              className="text-6xl md:text-8xl font-bold"
              once
            >
              Atul Thakre
            </TextAnimate>
            {/* <TextAnimate
              animation="blurInUp"
              by="word"
              delay={3}
              className="text-3xl mb-1 md:mb-3 ml-5"
              once
            >
              ||
            </TextAnimate> */}
          </div>

          <TextAnimate
            animation="blurInUp"
            by="character"
            delay={4}
            className="text-lg text-background/50 my-5 md:my-10 w-full"
            once
          >
            Web & Web3 Developer building scalable apps, smart contracts, and
            modern user experiences.
          </TextAnimate>
        </div>
        <div className="w-full md:w-1/2 relative rounded-tl-2xl rounded-bl-2xl">
          {/* <h1 className="absolute top-0 left-0 text-background/50 font-extrabold text-[12rem]">
            WEB3
          </h1>
          <h1 className="absolute top-1/2 -translate-y-1/2 left-0 text-background/50 font-extrabold text-[12rem]">
            WEB
          </h1>
          <h1 className="absolute bottom-0 left-0 text-background/50 font-extrabold text-[12rem]">
            WEB3
          </h1> */}
          <div
            ref={terminalContainer}
            className="flex items-center justify-end w-full px-3 md:pr-10 opacity-0"
          >
            <TerminalSection />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
