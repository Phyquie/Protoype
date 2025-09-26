'use client'

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const AboutUsSix = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
            markers: false
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

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
            <div className="bg-gradient-to-br from-orange-500/90 via-red-500/90 to-pink-600/90 backdrop-blur-lg border border-white/20 rounded-[2.5rem] p-12 h-full min-h-[500px] flex flex-col justify-center shadow-2xl">
              <h1 className="text-5xl font-bold text-white mb-8 leading-tight">About Us</h1>
              <p className="text-white text-lg leading-relaxed font-medium">
                SIX – Buy & Sell is a next-generation classified e-commerce platform that connects buyers 
                and sellers across India. It enables individuals and businesses to post advertisements for their 
                products or services, making it simple to buy, sell, or rent both used and new items.
              </p>
            </div>
          </div>
          
          {/* Right side - Two stacked images */}
          <div className="flex flex-col gap-6">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-[2rem] overflow-hidden shadow-2xl flex-1">
              <div className="h-64 bg-gradient-to-r from-orange-100/50 to-pink-100/50 backdrop-blur-sm flex items-center justify-center">
                <div className="w-full h-full bg-gray-200 rounded-t-[2rem] flex items-center justify-center">
                  <span className="text-gray-500">Interior Image</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-[2rem] overflow-hidden shadow-2xl flex-1">
              <div className="h-64 bg-gradient-to-r from-blue-100/50 to-green-100/50 backdrop-blur-sm flex items-center justify-center">
                <div className="w-full h-full bg-gray-200 rounded-t-[2rem] flex items-center justify-center">
                  <span className="text-gray-500">Car Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Three category cards horizontal */}
      <section className="section min-h-screen flex items-center px-8 py-16">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Property Card */}
            <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-[2.5rem] overflow-hidden shadow-2xl group hover:scale-105 transition-transform duration-300">
              <div className="h-80 bg-gradient-to-br from-yellow-200/50 to-orange-200/50 backdrop-blur-sm flex items-center justify-center">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-600 text-lg">Interior/Property</span>
                </div>
              </div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-bold text-white drop-shadow-lg">Property</h3>
              </div>
            </div>

            {/* Car & Bike Card */}
            <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-[2.5rem] overflow-hidden shadow-2xl group hover:scale-105 transition-transform duration-300">
              <div className="h-80 bg-gradient-to-br from-blue-200/50 to-purple-200/50 backdrop-blur-sm flex items-center justify-center">
                <div className="w-full h-full bg-gray-200/30 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-gray-800 text-lg font-medium">Car Image</span>
                </div>
              </div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-bold text-white drop-shadow-lg">Car & Bike</h3>
              </div>
            </div>

            {/* Commercial Vehicle Card */}
            <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-[2.5rem] overflow-hidden shadow-2xl group hover:scale-105 transition-transform duration-300">
              <div className="h-80 bg-gradient-to-br from-green-200/50 to-blue-200/50 backdrop-blur-sm flex items-center justify-center">
                <div className="w-full h-full bg-gray-200/30 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-gray-800 text-lg font-medium">Truck Image</span>
                </div>
              </div>
              <div className="absolute bottom-8 right-8">
                <h3 className="text-3xl font-bold text-white drop-shadow-lg">Commercial<br/>Vehicle</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Automobiles - Platform categories */}
      <section className="section min-h-screen flex items-center px-8 py-16">
        <div className="max-w-5xl mx-auto w-full text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-[3rem] p-16 border border-white/20 shadow-2xl">
            <h2 className="text-2xl text-white font-medium mb-8">
              Our platform covers a wide range of categories
            </h2>
            <h1 className="text-7xl font-bold text-white mb-8">Automobiles</h1>
            <p className="text-xl text-white/90 font-light">
              Cars, bikes, commercial Vehicles
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Real Estate */}
      <section className="section min-h-screen flex items-center px-8 py-16">
        <div className="max-w-5xl mx-auto w-full text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-[3rem] p-16 border border-white/20 shadow-2xl">
            <h2 className="text-2xl text-white font-medium mb-8">
              Our platform covers a wide range of categories
            </h2>
            <h1 className="text-7xl font-bold text-white mb-8">Real Estate</h1>
            <p className="text-xl text-white/90 font-light">
              Property for rent and property for sale
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Showroom Connect */}
      <section className="section min-h-screen flex items-center px-8 py-16">
        <div className="max-w-5xl mx-auto w-full text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-[3rem] p-16 border border-white/20 shadow-2xl">
            <h2 className="text-2xl text-white font-medium mb-8">
              Our platform covers a wide range of categories
            </h2>
            <h1 className="text-7xl font-bold text-white mb-8">Showroom Connect</h1>
            <p className="text-xl text-white/90 font-light">
              Direct connection with authorized dealerships for new cars
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
      <section className="section min-h-screen flex items-center px-8 py-16">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-6xl font-bold text-white text-center mb-20">
            How Does SIX – Buy & Sell Work?
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-[2.5rem] overflow-hidden shadow-2xl group hover:scale-105 transition-transform duration-300">
              <div className="h-96 bg-gradient-to-br from-gray-100/50 to-gray-200/50 backdrop-blur-sm flex items-center justify-center">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-600 text-lg">Business Person</span>
                </div>
              </div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-bold text-white drop-shadow-lg">For<br/>Dealer</h3>
              </div>
            </div>

            <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-[2.5rem] overflow-hidden shadow-2xl group hover:scale-105 transition-transform duration-300">
              <div className="h-96 bg-gradient-to-br from-yellow-100/50 to-orange-200/50 backdrop-blur-sm flex items-center justify-center">
                <div className="w-full h-full bg-gray-200/30 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-gray-800 text-lg font-medium">Woman with Packages</span>
                </div>
              </div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-bold text-white drop-shadow-lg">For<br/>Sellers</h3>
              </div>
            </div>

            <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-[2.5rem] overflow-hidden shadow-2xl group hover:scale-105 transition-transform duration-300">
              <div className="h-96 bg-gradient-to-br from-blue-100/50 to-purple-200/50 backdrop-blur-sm flex items-center justify-center">
                <div className="w-full h-full bg-gray-200/30 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-gray-800 text-lg font-medium">Couple at Desk</span>
                </div>
              </div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-bold text-white drop-shadow-lg">For<br/>Buyers</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: For Sellers Detail */}
      <section className="section min-h-screen flex items-center px-8 py-16">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-6xl font-bold text-white text-center mb-20">
            How Does SIX – Buy & Sell Work?
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 rounded-[3rem] p-16">
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
                  <span className="text-gray-800 text-lg font-medium">Woman with Packages in Warehouse</span>
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
            <div className="bg-gradient-to-br from-gray-700/90 via-gray-800/90 to-gray-900/90 backdrop-blur-lg border border-white/20 rounded-[3rem] p-16 shadow-2xl">
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
                  <span className="text-gray-800 text-lg font-medium">Couple at Desk with Documents</span>
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
            <div className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 rounded-[3rem] p-16">
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
                  <span className="text-gray-800 text-lg font-medium">Auto Service Garage</span>
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
            <div className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 rounded-[3rem] p-16">
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
                  <span className="text-gray-800 text-lg font-medium">House/Property Image</span>
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
            <div className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 rounded-[3rem] p-16">
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
                  <span className="text-gray-800 text-lg font-medium">Business Meeting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 14: Availability & Expansion */}
      <section className="section min-h-screen flex items-center px-8 py-16 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-yellow-500/10 to-pink-500/20"></div>
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <h1 className="text-6xl font-bold text-white text-center mb-16">
            Availability & Expansion
          </h1>
          
          <div className="text-white space-y-8">
            <p className="text-xl leading-relaxed text-center font-light">
              SIX – Buy & Sell was founded in 2024 in Kolkata with a vision to simplify online buying and selling for 
              everyone. In a short span of time, it has expanded rapidly and now operates in over 4,500 locations across 
              India.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
              <div className="space-y-4">
                <p className="text-2xl font-semibold">• Headquarters: <span className="text-orange-400">KOLKATA</span>, India</p>
                <p className="text-2xl font-semibold">• Regional Office: <span className="text-orange-400">DELHI</span>, India</p>
              </div>
              
              <div>
                <p className="text-lg font-light mb-6">Other branches coming soon in:</p>
                <p className="text-lg font-light leading-relaxed">
                  <span className="text-orange-400">Bangalore, Hyderabad, Ahmedabad, Mumbai, Jaipur, Chennai, Pune, 
                  Visakhapatnam</span> and others
                </p>
              </div>
            </div>
            
            <p className="text-xl leading-relaxed text-center font-light mt-16">
              With a strong presence across the country and a continuously growing user base, SIX is dedicated to 
              building a nationwide marketplace that seamlessly connects buyers, sellers, and businesses in every 
              region of India.
            </p>
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
