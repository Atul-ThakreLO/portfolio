import { TextAnimate } from "@/components/ui/text-animate";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { RefObject, useEffect, useRef, useState } from "react";
import SolutionAnimation from "./SolutionAnimation";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  sectionRef: RefObject<HTMLElement | null>;
  cardsContainerRef: RefObject<HTMLDivElement | null>;
}

const Timeline = ({ sectionRef, cardsContainerRef }: Props) => {
  const timelineWrapperRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<SVGLineElement>(null);
  const line2Ref = useRef<SVGLineElement>(null);
  const line3Ref = useRef<SVGLineElement>(null);
  const line4Ref = useRef<SVGLineElement>(null);
  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);
  const step4Ref = useRef<HTMLDivElement>(null);
  const [isSolutionActive, setIsSolutionActive] = useState(false);
  useEffect(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        // end: "bottom center",
        end: "+=" + window.innerHeight * 10,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        // markers: true,
      },
    });

    // gsap.to(sectionRef.current, {
    //   y: 200,
    //   scrollTrigger: {
    //     trigger: sectionRef.current,
    //     start: "top bottom",
    //     end: "top top",
    //     scrub: 1,
    //     markers: true,
    //   },
    // });

    tl.fromTo(
      line1Ref.current,
      { attr: { y2: 0 } },
      { attr: { y2: 100 }, duration: 2 }
    )
      .fromTo(
        step1Ref.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5 }
      )
      .fromTo(
        line2Ref.current,
        { attr: { y2: 0 } },
        { attr: { y2: 100 }, duration: 2 }
      )
      .fromTo(
        step2Ref.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5 }
      )
      .fromTo(
        line3Ref.current,
        { attr: { y2: 0 } },
        { attr: { y2: 100 }, duration: 2 }
      )
      .fromTo(
        step3Ref.current,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          onStart: () => setIsSolutionActive(true),
          onReverseComplete: () => setIsSolutionActive(false),
        }
      )
      .fromTo(
        line4Ref.current,
        { attr: { y2: 0 } },
        {
          attr: { y2: 100 },
          duration: 3,
          onComplete: () => setIsSolutionActive(false),
        }
      )
      .fromTo(
        cardsContainerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
        }
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <div ref={timelineWrapperRef} className="flex flex-col items-center">
      <div>
        <TextAnimate
          animation="blurIn"
          as="h1"
          className="text-7xl text-center font-bold"
          startOnView={true}
        >
          Consensus
        </TextAnimate>
      </div>
      <svg width="4" height="100" className="my-4">
        <line
          ref={line1Ref}
          x1="2"
          y1="0"
          x2="2"
          y2="0"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
      <div ref={step1Ref} className="opacity-0">
        <h2 className="text-5xl text-center font-semibold">Proof of Work</h2>
      </div>
      <svg width="4" height="100" className="my-4">
        <line
          ref={line2Ref}
          x1="2"
          y1="0"
          x2="2"
          y2="0"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
      <div ref={step2Ref} className="opacity-0">
        <h2 className="text-4xl text-center font-medium">Calculate Solution</h2>
      </div>
      <svg width="4" height="100" className="my-4">
        <line
          ref={line3Ref}
          x1="2"
          y1="0"
          x2="2"
          y2="0"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
      <div ref={step3Ref} className="opacity-0">
        <SolutionAnimation isActive={isSolutionActive} />
      </div>
      <svg width="4" height="100" className="my-4">
        <line
          ref={line4Ref}
          x1="2"
          y1="0"
          x2="2"
          y2="0"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default Timeline;
