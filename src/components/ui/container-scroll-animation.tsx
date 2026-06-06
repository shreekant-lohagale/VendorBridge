import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const card = cardRef.current;
    const header = headerRef.current;

    if (!container || !card || !header) return;

    // Set initial 3D transform properties
    gsap.set(card, {
      transformPerspective: 1000,
      rotateX: 20,
      scale: isMobile ? 0.8 : 1.05,
      y: 0,
    });

    // Create GSAP ScrollTrigger timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top bottom", // trigger when top of section hits bottom of screen
        end: "bottom top",   // end when bottom of section hits top of screen
        scrub: 1,            // smooth delay catch-up (silky smooth scroll!)
      },
    });

    tl.to(header, {
      y: -100,
      ease: "none",
    }, 0)
    .to(card, {
      rotateX: 0,
      scale: 1, // Settle to standard scale
      y: -50,
      ease: "none",
    }, 0);

    return () => {
      // Clean up ScrollTrigger instances on unmount
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [isMobile]);

  return (
    <div
      className="h-[60rem] md:h-[80rem] flex flex-col items-center justify-center relative p-2 md:p-20 overflow-hidden w-full"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <div ref={headerRef} className="max-w-5xl mx-auto text-center">
          {titleComponent}
        </div>
        
        <div
          ref={cardRef}
          style={{
            boxShadow:
              "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
          }}
          className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl"
        >
          <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
