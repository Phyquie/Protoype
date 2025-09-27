'use client'

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import AboutUsSixMobile from './aboutUsSixMobile';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const AboutUsSix = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if screen is mobile size
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // Use lg breakpoint (1024px)
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    // Only run GSAP animations on desktop
    if (isMobile) return;
    const sections = gsap.utils.toArray('.section');
    
    sections.forEach((section: any, index) => {
      gsap.fromTo(section, 
        { 
          opacity: 0, 
          y: 100,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            markers: false,
            immediateRender: false,
          }
        }
      );
    });

    // Special animation for Section 2 - dynamic height growth
    const section2Container = document.querySelector('.section-2-container');
    if (section2Container) {
      gsap.fromTo(section2Container, 
        { 
          height: "200px"
        },
        {
          height: "600px",
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section2Container,
            start: "top 60%",
            end: "center 20%",
            scrub: 1,
            markers: false,
            immediateRender: false,
          }
        }
      );
    }

    // Special animation for Section 7 - dynamic height growth then fade out left
    const section7Container = document.querySelector('.section-7-container');
    if (section7Container) {
      // First animation: Height expansion
      gsap.fromTo(section7Container, 
        { 
          height: "200px"
        },
        {
          height: "600px",
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section7Container,
            start: "top 60%",
            end: "center 20%",
            scrub: 1,
            markers: false,
            immediateRender: false,
          }
        }
      );

      // Second animation: Fade out to left after height expansion
      gsap.to(section7Container, {
        x: -window.innerWidth,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: section7Container,
          start: "center 10%",
          end: "bottom top",
          scrub: 1,
          markers: false,
          immediateRender: false,
        }
      });
    }

    // Section 8 fade in from right simultaneously with Section 7 fade out - using Section 7 as trigger
    const section8 = document.querySelector('.section-8');
    if (section8 && section7Container) {
      gsap.fromTo(section8, 
        {
          x: window.innerWidth,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: section7Container, // Use section 7 as trigger instead of section 8
            start: "center 10%", // Same trigger point as section 7 fade out
            end: "bottom top",
            scrub: 1,
            markers: false,
            immediateRender: false,
          }
        }
      );
    }

    // Combined Section 3-4-5 text animations
    const combinedSection = document.querySelector('.combined-section');
    if (combinedSection) {
      const heading = combinedSection.querySelector('.section-heading');
      const description = combinedSection.querySelector('.section-description');
      
      // Animation timeline for text changes
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: combinedSection,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          markers: false,
       
        }
      });

      // First transition: Automobiles -> Real Estate
    tl.to({}, { duration: 3 }); // optional small delay

      tl.to([heading, description], {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut"
      })
      .call(() => {
        if (heading && description) {
          heading.innerHTML = "Real Estate";
          description.innerHTML = "Property for rent and property for sale";
        }
      })
      .to([heading, description], {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut"
      })
      // Second transition: Real Estate -> Showroom Connect
      .to([heading, description], {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut"
      })
      .call(() => {
        if (heading && description) {
          heading.innerHTML = "Showroom Connect";
          description.innerHTML = "Direct connection with authorized dealerships for new cars";
        }
      })
      .to([heading, description], {
        y: 0,
        opacity: 1,
        duration: 3,
        ease: "power2.inOut"
      })
      tl.to({}, { duration: 5 }); // optional small delay
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isMobile]);

  // Render mobile component on small screens
  if (isMobile) {
    return <AboutUsSixMobile />;
  }

  return (
    <>
      {/* Fixed Background */}
      <div 
        className="fixed inset-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black"
        style={{
          backgroundImage: 'url(/bg2.png)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundAttachment: 'fixed',
          zIndex: -1
        }}
      />
      
      {/* Scrollable Content */}
      <div 
        ref={containerRef}
        className="relative w-full min-h-screen"
      >
      {/* Section 1: About Us with left text, right images */}
      <section className="section min-h-screen flex items-center px-8 py-16">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - About Us text with gradient */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-[2.5rem] p-12 h-full min-h-[500px] flex flex-col justify-center shadow-2xl">
              <h1 className="text-5xl font-bold text-white mb-8 leading-tight">About Us</h1>
              <p className="text-white text-lg leading-relaxed font-medium">
                SIX – Buy & Sell is a next-generation classified e-commerce platform that connects buyers 
                and sellers across India. It enables individuals and businesses to post advertisements for their 
                products or services, making it simple to buy, sell, or rent both used and new items.
              </p>
            </div>
          </div>
          
          {/* Right side - Two stacked images */}
          <div className="flex flex-row gap-6">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-4xl overflow-hidden shadow-2xl flex-1">
              <div className="h-full w-max-5xl  backdrop-blur-sm ">
                
                  <img className="text-gray-500 min-h-full object-cover" src="/six/room.png" alt="Interior Image"  />
              </div>
            </div>
            <div className=" border border-white/20 rounded-4xl overflow-hidden shadow-2xl flex-1">
              <div className="h-full bg-gradient-to-r from-blue-100/50 to-green-100/50 backdrop-blur-sm flex items-center justify-center">
                
                  <img className="text-gray-500 min-h-full object-cover" src="/six/car.png" alt="Interior Image"  />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Three category cards horizontal */}
      <section className="section  items-center px-8 py-16" style={{ minHeight: '100vh' }}>
  <div className="max-w-7xl mx-auto w-full section-2-container h-[200px]" >
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
      {/* Property Card */}
      <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-[2.5rem] overflow-hidden shadow-2xl group  transition-transform duration-300">
        <div className="h-full bg-gradient-to-br from-yellow-200/50 to-orange-200/50 backdrop-blur-sm flex items-center justify-center">
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <img
              className="text-gray-500 min-h-full object-cover"
              src="/six/room.png"
              alt="Interior Image"
            />
          </div>
          <div className="absolute bottom-8 left-8">
            <h3 className="text-3xl font-bold text-white drop-shadow-lg">
              Property
            </h3>
          </div>
        </div>
      </div>

      {/* Car & Bike Card */}
      <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-[2.5rem] overflow-hidden shadow-2xl group  transition-transform duration-300">
        <div className="h-full bg-gradient-to-br from-blue-200/50 to-purple-200/50 backdrop-blur-sm flex items-center justify-center">
          <div className="w-full h-full bg-gray-200/30 backdrop-blur-sm flex items-center justify-center">
            <img
              className="text-gray-500 min-h-full object-cover"
              src="/six/car.png"
              alt="Car Image"
            />
          </div>
          <div className="absolute bottom-8 left-8">
            <h3 className="text-3xl font-bold text-white drop-shadow-lg">
              Car & Bike
            </h3>
          </div>
        </div>
      </div>

      {/* Commercial Vehicle Card */}
      <div className="relative bg-white/10  backdrop-blur-lg border border-white/20 rounded-[2.5rem] overflow-hidden shadow-2xl  group  transition-transform duration-300">
        <div className="h-full bg-gradient-to-br from-green-200/50 to-blue-200/50 backdrop-blur-sm flex items-center justify-center">
          <div className="w-full h-full bg-gray-200/30 backdrop-blur-sm flex items-center justify-center">
            <img
              className="text-gray-500 min-h-full object-cover"
              src="/six/truck.png"
              alt="Truck Image"
            />
          </div>
          <div className="absolute bottom-8 right-8">
            <h3 className="text-3xl font-bold text-white drop-shadow-lg">
              Commercial <br /> Vehicle
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Combined Section 3-4-5: Platform categories with text transitions */}
      <section className="section combined-section min-h-[1000px] flex items-center px-8 py-16">
        <div className="max-w-5xl mx-auto w-full text-center sticky top-1/2 transform -translate-y-1/2">
          <div className="bg-white/10 backdrop-blur-lg rounded-[3rem] p-16 border border-white/20 shadow-2xl">
            <h2 className="text-2xl text-white font-medium mb-8">
              Our platform covers a wide range of categories
            </h2>
            <h1 className="section-heading text-7xl font-bold text-white mb-8">Automobiles</h1>
            <p className="section-description text-xl text-white/90 font-light">
              Cars, bikes, commercial Vehicles
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Why Six Buys & Sell */}
      <section className="section min-h-screen flex items-center px-8 py-16">
        <div className="max-w-6xl mx-auto w-full">
          <div className="bg-white/10 backdrop-blur-lg rounded-[3rem] p-16 border border-white/20 shadow-2xl">
            <h1 className="text-6xl font-bold text-white text-center mb-16">Why Six Buys & Sell</h1>
            
            <div className="space-y-12 text-white">
              <p className="text-xl leading-relaxed text-center font-light">
                SIX operates on a free and premium subscription model. While anyone can post and browse 
                ads for free, our paid plans offer advanced features such as faster sales, boosted visibility, 
                and advertising options.
              </p>
              
              <p className="text-xl leading-relaxed text-center font-light">
                By combining the best of B2C (Business-to-Consumer) and C2C (Consumer-to-Consumer) 
                models, SIX serves as a comprehensive online marketplace where people can conveniently 
                buy, sell, or rent products and services nearby.
              </p>
              
              <p className="text-xl leading-relaxed text-center font-medium">
                With a presence all over India, SIX is committed to making transactions <strong>faster, safer, and 
                smarter</strong> for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: How Does SIX Work - 3 cards */}
      <section className="section items-center px-8 py-16" style={{ minHeight: '100vh' }}>
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-6xl font-bold text-white text-center mb-20">
            How Does SIX – Buy & Sell Work?
          </h1>
          
          <div className="max-w-7xl mx-auto w-full section-7-container h-[200px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
              <div className="h-full relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-[2.5rem] overflow-hidden shadow-2xl group transition-transform duration-300">
                <div className=" h-full bg-gradient-to-br from-gray-100/50 to-gray-200/50 backdrop-blur-sm flex items-center justify-center">
                  <div className="w-full h-full  bg-gray-200 flex items-center justify-center">
                    <img
                      className="text-gray-500 min-h-full object-cover"
                      src="/six/carguy.png"
                      alt="Car Guy"
                    />
                  </div>
                  <div className="absolute bottom-8 left-8">
                    <h3 className="text-3xl font-bold text-white drop-shadow-lg">For<br/>Dealer</h3>
                  </div>
                </div>
              </div>

              <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-[2.5rem] overflow-hidden shadow-2xl group transition-transform duration-300">
                <div className="h-full bg-gradient-to-br from-yellow-100/50 to-orange-200/50 backdrop-blur-sm flex items-center justify-center">
                  <div className="w-full h-full bg-gray-200/30 backdrop-blur-sm flex items-center justify-center">
                    <img
                      className="text-gray-500 min-h-full object-cover"
                      src="/six/girlwithPackage.png"
                      alt="Woman with Packages"
                    />
                  </div>
                  <div className="absolute bottom-8 left-8">
                    <h3 className="text-3xl font-bold text-white drop-shadow-lg">For<br/>Sellers</h3>
                  </div>
                </div>
              </div>

              <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-[2.5rem] overflow-hidden shadow-2xl group transition-transform duration-300">
                <div className="h-full bg-gradient-to-br from-blue-100/50 to-purple-200/50 backdrop-blur-sm flex items-center justify-center">
                  <div className="w-full h-full bg-gray-200/30 backdrop-blur-sm flex items-center justify-center">
                    <img
                      className="text-gray-500 min-h-full object-cover"
                      src="/six/officeCouple.png"
                      alt="Couple at Desk"
                    />
                  </div>
                  <div className="absolute bottom-8 right-8">
                    <h3 className="text-3xl font-bold text-white drop-shadow-lg">For<br/>Buyers</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: For Sellers Detail */}
      <section className="section section-8 min-h-screen flex items-center px-8 py-16">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-6xl font-bold text-white text-center mb-20">
            How Does SIX – Buy & Sell Work?
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className=" bg-white/10  backdrop-blur-lg border rounded-[3rem] p-16">
              <h2 className="text-5xl font-bold text-white mb-12">For Sellers</h2>
              <p className="text-xl text-white leading-relaxed font-light">
                Sellers can easily post advertisements for their products or services with 
                photos, pricing, and detailed descriptions. Our platform ensures 
                maximum visibility, giving sellers the tools to reach more potential buyers 
                quickly.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-[3rem] overflow-hidden shadow-2xl">
              <div className="h-96 bg-gradient-to-br from-yellow-100/50 to-orange-200/50 backdrop-blur-sm flex items-center justify-center">
                <div className="w-full h-full bg-gray-200/30 backdrop-blur-sm flex items-center justify-center">
                   <img className='w-full h-full object-cover' src="/six/girlwithPackage.png" alt="Woman with Packages in Warehouse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: For Buyers Detail */}
      <section className="section min-h-screen flex items-center px-8 py-16">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-6xl font-bold text-white text-center mb-20">
            How Does SIX – Buy & Sell Work?
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className=" bg-white/10  backdrop-blur-lg  border border-white/20 rounded-[3rem] p-16 shadow-2xl">
              <h2 className="text-5xl font-bold text-white mb-12">For Buyers</h2>
              <p className="text-xl text-white leading-relaxed font-light">
                Buyers can browse thousands of listings across categories such as cars, bikes, 
                scooters, commercial vehicles, and properties. They can connect directly 
                with sellers or showrooms and make purchases or rental agreements 
                conveniently and securely.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-[3rem] overflow-hidden shadow-2xl">
              <div className="h-96 bg-gradient-to-br from-blue-100/50 to-purple-200/50 backdrop-blur-sm flex items-center justify-center">
                <div className="w-full h-full bg-gray-200/30 backdrop-blur-sm flex items-center justify-center">
                  <img className='w-full h-full object-cover' src="/six/officeCouple.png" alt="Couple at Desk" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Products & Services Intro */}
      <section className="section min-h-screen flex items-center px-8 py-16">
        <div className="max-w-6xl mx-auto w-full">
          <div className="bg-white/10 backdrop-blur-lg rounded-[3rem] p-16 border border-white/20 shadow-2xl text-center">
            <h1 className="text-6xl font-bold text-white mb-12">Products & Services</h1>
            <p className="text-xl text-white leading-relaxed font-light">
              SIX – Buy & Sell offers a wide range of categories where users can list, discover, and transact with 
              ease. Our platform supports both new and used products, as well as services, ensuring that buyers 
              and sellers find exactly what they need.
            </p>
          </div>
        </div>
      </section>

      {/* Section 11: Automobiles Products Detail */}
      <section className="section min-h-screen flex items-center px-8 py-16">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-6xl font-bold text-white text-center mb-20">Products & Services</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-white/10 backdrop-blur-lg border rounded-[3rem] p-16">
              <h2 className="text-5xl font-bold text-white mb-12">Automobiles</h2>
              <ul className="space-y-4 text-white text-xl">
                <li className="flex items-center font-light">
                  <span className="w-3 h-3 bg-white rounded-full mr-6"></span>
                  New Cars
                </li>
                <li className="flex items-center font-light">
                  <span className="w-3 h-3 bg-white rounded-full mr-6"></span>
                  Used Cars
                </li>
                <li className="flex items-center font-light">
                  <span className="w-3 h-3 bg-white rounded-full mr-6"></span>
                  New Bikes & Scooters
                </li>
                <li className="flex items-center font-light">
                  <span className="w-3 h-3 bg-white rounded-full mr-6"></span>
                  Used Bikes & Scooters
                </li>
                <li className="flex items-center font-light">
                  <span className="w-3 h-3 bg-white rounded-full mr-6"></span>
                  New Commercial Vehicles
                </li>
                <li className="flex items-center font-light">
                  <span className="w-3 h-3 bg-white rounded-full mr-6"></span>
                  Used Commercial Vehicles
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-[3rem] overflow-hidden shadow-2xl">
              <div className="h-96 bg-gradient-to-br from-red-100/50 to-blue-200/50 backdrop-blur-sm flex items-center justify-center">
                <div className="w-full h-full bg-gray-200/30 backdrop-blur-sm flex items-center justify-center">
                <img className='w-full h-full object-cover' src="/six/carMech.jpg" alt="Car Guy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 12: Real Estate Products Detail */}
      <section className="section min-h-screen flex items-center px-8 py-16">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-6xl font-bold text-white text-center mb-20">Products & Services</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-white/10 backdrop-blur-lg border rounded-[3rem] p-16">
              <h2 className="text-5xl font-bold text-white mb-12">Real Estate</h2>
              <ul className="space-y-6 text-white text-xl">
                <li className="flex items-center font-light">
                  <span className="w-3 h-3 bg-white rounded-full mr-6"></span>
                  Properties for Rent
                </li>
                <li className="flex items-center font-light">
                  <span className="w-3 h-3 bg-white rounded-full mr-6"></span>
                  Properties for Sale
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-[3rem] overflow-hidden shadow-2xl">
              <div className="h-96 bg-gradient-to-br from-yellow-100/50 to-green-200/50 backdrop-blur-sm flex items-center justify-center">
                <div className="w-full h-full bg-gray-200/30 backdrop-blur-sm flex items-center justify-center">
                  <img className='w-full h-full object-cover' src="/six/HomeV.png" alt="House/Property" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 13: Services Detail */}
      <section className="section min-h-screen flex items-center px-8 py-16">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-6xl font-bold text-white text-center mb-20">Products & Services</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-white/10 backdrop-blur-lg border rounded-[3rem] p-16">
              <h2 className="text-5xl font-bold text-white mb-12">Services</h2>
              <ul className="space-y-6 text-white text-xl">
                <li className="flex items-center font-light">
                  <span className="w-3 h-3 bg-white rounded-full mr-6"></span>
                  Dealer & Showroom Listings
                </li>
                <li className="flex items-center font-light">
                  <span className="w-3 h-3 bg-white rounded-full mr-6"></span>
                  Advertising & Promotions for faster sales
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-[3rem] overflow-hidden shadow-2xl">
              <div className="h-96 bg-gradient-to-br from-blue-100/50 to-gray-200/50 backdrop-blur-sm flex items-center justify-center">
                <div className="w-full h-full bg-gray-200/30 backdrop-blur-sm flex items-center justify-center">
                  <img className='w-full h-full object-cover' src="/six/Service.png" alt="Car Guy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 14: Availability & Expansion */}
      <section className="section min-h-screen flex items-center px-8 py-16 relative overflow-hidden" style={{ backgroundImage : 'url(/six/bg-last.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-yellow-500/10 to-pink-500/20"></div>
        <div className=' "bg-white/10 backdrop-blur-md border py-3 rounded-3xl w-full'>
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <h1 className="text-6xl font-bold text-white text-center mb-16">
            Availability & Expansion
          </h1>
          
          <div className="text-white space-y-8">
            <p className="text-xl leading-relaxed text-center font-medium">
              SIX – Buy & Sell was founded in 2024 in Kolkata with a vision to simplify online buying and selling for 
              everyone. In a short span of time, it has expanded rapidly and now operates in over 4,500 locations across 
              India.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
              <div className="space-y-4">
                <p className="text-2xl font-semibold">• Headquarters: <span className="text-orange-400">KOLKATA</span>, India</p>
                <p className="text-2xl font-semibold">• Regional Office: <span className="text-orange-400">DELHI</span>, India</p>
              </div>
              
              <div className=''>
                <p className="text-lg font-medium mb-6">Other branches coming soon in:</p>
                <p className="text-lg font-medium leading-relaxed">
                  <span className="text-orange-400">Bangalore, Hyderabad, Ahmedabad, Mumbai, Jaipur, Chennai, Pune, 
                  Visakhapatnam</span> and others
                </p>
              </div>
            </div>
            
            <p className="text-xl leading-relaxed text-center font-medium mt-16">
              With a strong presence across the country and a continuously growing user base, SIX is dedicated to 
              building a nationwide marketplace that seamlessly connects buyers, sellers, and businesses in every 
              region of India.
            </p>
          </div>
        </div>
        </div>
        
        {/* Bridge silhouette overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent"></div>
      </section>
      </div>
    </>
  );
};

export default AboutUsSix;
