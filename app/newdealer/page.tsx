"use client"

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import bg from "../../public/bg.png";
import six from "../../public/six logo.svg";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const glassDivRef = useRef<HTMLDivElement>(null);
  const splitTextRef = useRef<HTMLDivElement>(null);
  const splitImgRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [split, setSplit] = useState(false);

  useEffect(() => {
    // Heading fade out animation
    gsap.to(headingRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      scrollTrigger: {
        trigger: headingRef.current,
        start: "center center",
        end: "bottom center",
        scrub: true,
      }
    });

    // Pin the section when its top hits the center of the viewport
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top center",
      end: "+=100vh",
      pin: sectionRef.current,
      pinSpacing: true,
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  useEffect(() => {
    if (split) {
      // Animate glass div out
      gsap.to(glassDivRef.current, {
        x: -200,
        opacity: 0,
        duration: 1.1,
        ease: 'power2.inOut',
        pointerEvents: 'none',
      });
      // Animate text div fixed left, fade in from right
      gsap.fromTo(
        splitTextRef.current,
        { x: 100, opacity: 0, width: 720, height: 260 },
        {
          x: 0,
          opacity: 1,
          width: 720,
          height: 260,
          duration: 1.2,
          ease: 'power2.inOut',
        }
      );
       
      // Animate background image to shrink and shift right at the same time
      gsap.to(bgImageRef.current, {
        left: 'auto',
        right: 0,
        width: 720,
        height: 340,
        top: '50%',
        y: '-50%',
        borderRadius: '2.5rem',
        opacity: 1,
        duration: 1.2,
        ease: 'power2.inOut',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      });
    } else {
      gsap.to(glassDivRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'power2.inOut',
        pointerEvents: 'auto',
      });
      // Reset background image to full
      gsap.set(bgImageRef.current, {
        left: 0,
        right: 0,
        top: 0,
        y: 0,
        width: '100vw',
        height: '100vh',
        borderRadius: 0,
        opacity: 1,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      });
       gsap.set(splitTextRef.current, {
        left: 0,
        right: 0,
        top: 0,
        y: 0,
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        borderRadius: 0,
        opacity: 1,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      });
    }
  }, [split]);


  return (
    <div className="relative h-[400vh] w-full">
      {/* Fixed Background */}
      {/* Animated background image for split effect */}
      <div
        ref={bgImageRef}
        className="fixed -z-10"
        style={{
          left: 0,
          top: 0,
          width: '100vw',
          height: '100vh',
          backgroundImage: `url(${bg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transition: 'all 0.7s cubic-bezier(0.77,0,0.175,1)',
        }}
      />


      <div className="fixed top-10 left-10 z-30 flex flex-col items-center select-none" style={{pointerEvents: 'none'}}>
        <Image src={six} alt="six logo" className="mb-1" />
        <span className="text-white absolute bottom-[-60px] font-extrabold text-5xl md:text-8xl tracking-tight leading-none drop-shadow-lg" style={{fontFamily: 'inherit'}}>Dealer</span>
      </div>

     {split ? null : <section className="h-screen mb-12 flex flex-col justify-end items-center text-white relative z-20 pb-52">
  <h1 ref={headingRef} className="text-5xl md:text-7xl text-center" style={{letterSpacing: '-2px'}}>We Welcome Car Dealers</h1>
      </section> }

  <section ref={sectionRef} className="min-h-[200vh] flex flex-col items-center justify-start relative z-30">
    <div ref={glassDivRef} className="w-[95%] md:w-[90%] flex flex-col items-center justify-center rounded-[2.5rem] p-10 md:p-16 text-white text-center backdrop-blur-2xl bg-white/10 shadow-2xl border-2 border-white/30 -mt-12 md:-mt-44 absolute left-1/2 top-0 z-20" style={{ transform: 'translateX(-50%)', background: "rgba(255, 255, 255, 0.08)", border: "1.5px solid rgba(255, 255, 255, 0.25)", boxShadow: "0 8px 40px rgba(0,0,0,0.45), inset 0 0 30px rgba(255,255,255,0.05)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}>
      <h2 className="text-3xl md:text-4xl mb-7">Why Become a dealer</h2>
      <p className="text-base md:text-xl leading-relaxed">
        SIX offers a trusted, user-friendly platform tailored for used car dealers and individual sellers. Connect directly with owners to skip middlemen, negotiate freely, and buy within budget at your best price. With verified listings, genuine leads, and direct deals, SIX ensures a faster, safer, and more reliable experience. Selling is made easy with direct buyers,
      </p>
      <button onClick={() => setSplit(true)} className="bg-black text-white font-bold px-6 py-3 text-2xl rounded-xl my-8">Read More</button>
    </div>
    {/* Next phase: text left, image right */}
    {split && (
      <>
        {/* Fixed text box on left, fade in from right */}
        <div
          ref={splitTextRef}
          style={{
            position: 'fixed',
            left: 40,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 720,
            height: 260,
            background: 'rgba(255,255,255,0.10)',
            borderRadius: '2.5rem',
            overflow: 'hidden',
            boxShadow: '0 8px 40px rgba(0,0,0,0.45)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: 32,
            zIndex: 30,
            opacity: 0,
            border: '1.5px solid rgba(255, 255, 255, 0.25)',
          }}
          className="text-white"
        >
        
          <p className="text-base md:text-xl leading-relaxed">
            SIX offers a trusted, user-friendly platform tailored for used car dealers and individual sellers. Connect directly with owners to skip middlemen, negotiate freely, and buy within budget at your best price. With verified listings, genuine leads, and direct deals, SIX ensures a aster, safer, and more reliable experience. Selling is made easy with direct buyers.this is after the transition
          </p>
        </div>
      </>
    )}
  </section>
    </div>
  );
};

export default Page;
