"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import bg from "../../public/bg.png";
import six from "../../public/six logo.svg";

const HeroDealer = () => {
  const glassDivRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const splitTextRef = useRef<HTMLDivElement>(null);
  const [split, setSplit] = useState(false);

  useEffect(() => {
    // Restrict scroll to 270px from top on component mount
    window.scrollTo(0, 270);
    
    // Add scroll event listener to prevent scrolling above 270px
    const handleScroll = () => {
      if (window.scrollY < 270) {
        window.scrollTo(0, 270);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleReadMore = () => {
    if (split) return;
    setSplit(true);

    const tl = gsap.timeline();

    // Hide glass div
    tl.to(glassDivRef.current, {
      opacity: 0,
      y: -50,
      duration: 0.8,
      pointerEvents: "none",
    }, 0);

    // Animate text div to fixed left
    tl.to(splitTextRef.current, {
      position: "fixed",
      left: "5vw",
      top: "50%",
      y: "-50%",
      width: 717,
      height: 340,
      opacity: 1,
      duration: 1.2,
      ease: "power2.inOut",
    }, 0);

    // Animate bg image to right side with smooth path
    tl.to(bgImageRef.current, {
      position: "fixed",
      right: "5vw", // Stay at right edge
      top: "50%",
      y: "-50%",
      width: 717,
      height: 340,
      borderRadius: "1.5rem",
      duration: 1.2,
      ease: "power2.inOut",
    }, 0);

    // Remove scroll restriction after animation
    const scrollHandler = () => {
      if (window.scrollY < 270) {
        window.scrollTo(0, 270);
      }
    };

    window.removeEventListener('scroll', scrollHandler);
  };

  return (
    <div className="relative h-[400vh] w-full">
      {/* Background image - starts full screen */}
      <div
        ref={bgImageRef}
        className="fixed -z-10 bg-cover bg-center"
        style={{
          right: 0,
          top: 0,
          width: "100vw",
          height: "100vh",
          backgroundImage: `url(${bg.src})`,
          borderRadius: 0,
        }}
      />

      {/* Logo */}
      <div className="fixed top-10 left-10 z-30 flex flex-col items-center select-none">
        <Image src={six} alt="six logo" className="mb-1" />
        <span className="text-white absolute bottom-[-60px] font-extrabold text-5xl md:text-8xl tracking-tight leading-none drop-shadow-lg">
          Dealer
        </span>
      </div>

      {/* Glass div */}
      <section ref={glassDivRef} className="relative z-10 min-h-[200vh] flex flex-col items-center justify-center">
        <h1  className="text-5xl md:text-7xl font-extrabold  text-white text-center mt-96 mb-32">
          We Welcome Car Dealers
        </h1>
        <div
          
          className="w-[95%] md:w-[90%] flex flex-col items-center justify-center rounded-[2.5rem] p-10 md:p-16 text-white text-center backdrop-blur-2xl bg-white/10 shadow-2xl border-2 border-white/30"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-7">Why Become a dealer</h2>
          <p className="text-base md:text-xl leading-relaxed font-extrabold">
            SIX offers a trusted, user-friendly platform tailored for used car
            dealers and individual sellers. Connect directly with owners to skip
            middlemen, negotiate freely, and buy within budget at your best price.
            Selling is made easy with direct buyers.
          </p>
          <button
            onClick={handleReadMore}
            className="bg-black text-white font-bold px-6 py-3 text-2xl rounded-xl my-8"
          >
            Read More
          </button>
        </div>
      </section>

      {/* Split text (fixed left) */}
      <div
        ref={splitTextRef}
        className="fixed left-[5vw] z-30 text-white opacity-0"
        style={{
          width: 717,
          height: 340,
          background: "rgba(255,255,255,0.10)",
          borderRadius: "2.5rem",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          border: "1.5px solid rgba(255,255,255,0.25)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.45)",
          backdropFilter: "blur(10px)",
        }}
      >
        <h1 className="text-4xl font-bold mb-4 text-white">Point 1</h1>
        <p className="text-lg leading-relaxed font-semibold text-white mb-4">
          SIX offers a trusted, user-friendly platform tailored for used car dealers and individual sellers. Connect directly with owners to skip middlemen, negotiate freely, and buy within budget at your best price. With verified listings, genuine leads, and direct deals, SIX ensures a faster, safer, and more reliable experience. Selling is made easy with direct buyers.
        </p>
        
     
        <button
          onClick={() => (window.location.href = "/registration")}
          className="bg-white text-black font-bold px-8 py-3 rounded-xl mt-4 hover:bg-gray-100 transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HeroDealer;