'use client'

import React, { useEffect } from 'react';
import Image from 'next/image';

const AboutUsSixMobile = () => {
  useEffect(() => {
    // Simple scroll-triggered animations using Intersection Observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, observerOptions);

    // Observe all sections with the 'mobile-section' class
    const sections = document.querySelectorAll('.mobile-section');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
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
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        .mobile-section {
          opacity: 0;
          transform: translateY(2rem);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .animate-slide-up {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
      
      {/* Scrollable Content */}
      <div className="relative w-full ">
        
        {/* Section 1: About Us */}
        <section className="mobile-section min-h-screen flex items-center px-4 ">
          <div className="w-full">
            {/* About Us Text */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 mb-6 shadow-2xl">
              <h1 className="text-4xl font-bold text-white mb-6 text-center">About Us</h1>
              <p className="text-white text-base leading-relaxed font-medium">
                SIX – Buy & Sell is a next-generation classified e-commerce platform that connects buyers 
                and sellers across India. It enables individuals and businesses to post advertisements for their 
                products or services, making it simple to buy, sell, or rent both used and new items.
              </p>
            </div>
            
            {/* Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
                <img className="w-full h-48 object-cover" src="/six/room.png" alt="Interior Image" />
              </div>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
                <img className="w-full h-48 object-cover" src="/six/car.png" alt="Car Image" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Categories */}
        <section className="mobile-section min-h-screen flex items-center px-4 py-8">
          <div className="w-full space-y-6">
            {/* Property Card */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
              <div className="h-48 bg-gradient-to-br from-yellow-200/50 to-orange-200/50 backdrop-blur-sm relative">
                <img className="w-full h-full object-cover" src="/six/room.png" alt="Property" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">Property</h3>
                </div>
              </div>
            </div>

            {/* Car & Bike Card */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
              <div className="h-48 bg-gradient-to-br from-blue-200/50 to-purple-200/50 backdrop-blur-sm relative">
                <img className="w-full h-full object-cover" src="/six/car.png" alt="Car & Bike" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">Car & Bike</h3>
                </div>
              </div>
            </div>

            {/* Commercial Vehicle Card */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
              <div className="h-48 bg-gradient-to-br from-green-200/50 to-blue-200/50 backdrop-blur-sm relative">
                <img className="w-full h-full object-cover" src="/six/truck.png" alt="Commercial Vehicle" />
                <div className="absolute bottom-4 right-4">
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg text-right">Commercial<br/>Vehicle</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Platform Categories */}
        <section className="mobile-section  flex items-center px-4 ">
            
          <div className="w-full text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h2 className="text-lg text-white font-medium mb-6">
                Our platform covers a wide range of categories
              </h2>
              <h1 className="text-5xl font-bold text-white mb-6">Automobiles</h1>
              <p className="text-lg text-white/90 font-light">
                Cars, bikes, commercial Vehicles
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Real Estate */}
        <section className="mobile-section  flex items-center px-4 py-2">
          <div className="w-full text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h2 className="text-lg text-white font-medium mb-6">
                Our platform covers a wide range of categories
              </h2>
              <h1 className="text-5xl font-bold text-white mb-6">Real Estate</h1>
              <p className="text-lg text-white/90 font-light">
                Property for rent and property for sale
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Showroom Connect */}
        <section className="mobile-section  flex items-center px-4 py-2 ">
          <div className="w-full text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h2 className="text-lg text-white font-medium mb-6">
                Our platform covers a wide range of categories
              </h2>
              <h1 className="text-5xl font-bold text-white mb-6">Showroom Connect</h1>
              <p className="text-lg text-white/90 font-light">
                Direct connection with authorized dealerships for new cars
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Why Six */}
        <section className="mobile-section min-h-screen flex items-center px-4 ">
          <div className="w-full">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h1 className="text-4xl font-bold text-white text-center mb-8">Why Six Buys & Sell</h1>
              
              <div className="space-y-6 text-white">
                <p className="text-base leading-relaxed text-center font-light">
                  SIX operates on a free and premium subscription model. While anyone can post and browse 
                  ads for free, our paid plans offer advanced features such as faster sales, boosted visibility, 
                  and advertising options.
                </p>
                
                <p className="text-base leading-relaxed text-center font-light">
                  By combining the best of B2C (Business-to-Consumer) and C2C (Consumer-to-Consumer) 
                  models, SIX serves as a comprehensive online marketplace where people can conveniently 
                  buy, sell, or rent products and services nearby.
                </p>
                
                <p className="text-base leading-relaxed text-center font-medium">
                  With a presence all over India, SIX is committed to making transactions <strong>faster, safer, and 
                  smarter</strong> for everyone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: How SIX Works - Cards */}
        <section className="mobile-section min-h-screen flex items-center px-4 py-8">
          <div className="w-full">
            <h1 className="text-4xl font-bold text-white text-center mb-8">
              How Does SIX – Buy & Sell Work?
            </h1>
            
            <div className="space-y-6">
              {/* For Dealer */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
                <div className="h-48 bg-gradient-to-br from-gray-100/50 to-gray-200/50 relative">
                  <img className="w-full h-full object-cover" src="/six/carguy.png" alt="For Dealer" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">For<br/>Dealer</h3>
                  </div>
                </div>
              </div>

              {/* For Sellers */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
                <div className="h-48 bg-gradient-to-br from-yellow-100/50 to-orange-200/50 relative">
                  <img className="w-full h-full object-cover" src="/six/girlwithPackage.png" alt="For Sellers" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">For<br/>Sellers</h3>
                  </div>
                </div>
              </div>

              {/* For Buyers */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
                <div className="h-48 bg-gradient-to-br from-blue-100/50 to-purple-200/50 relative">
                  <img className="w-full h-full object-cover" src="/six/officeCouple.png" alt="For Buyers" />
                  <div className="absolute bottom-4 right-4">
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg text-right">For<br/>Buyers</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: For Sellers Detail */}
        <section className="mobile-section  flex items-center px-4 py-2">
          <div className="w-full space-y-6">
            
            
            <div className="bg-white/10 backdrop-blur-lg border rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">For Sellers</h2>
              <p className="text-base text-white leading-relaxed font-light">
                Sellers can easily post advertisements for their products or services with 
                photos, pricing, and detailed descriptions. Our platform ensures 
                maximum visibility, giving sellers the tools to reach more potential buyers 
                quickly.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
              <div className="h-64 bg-gradient-to-br from-yellow-100/50 to-orange-200/50">
                <img className="w-full h-full object-cover" src="/six/girlwithPackage.png" alt="Woman with Packages" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: For Buyers Detail */}
        <section className="mobile-section  flex items-center px-4 py-3">
          <div className="w-full space-y-6">
           
            
            <div className="bg-white/10 backdrop-blur-lg border rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">For Buyers</h2>
              <p className="text-base text-white leading-relaxed font-light">
                Buyers can browse thousands of listings across categories such as cars, bikes, 
                scooters, commercial vehicles, and properties. They can connect directly 
                with sellers or showrooms and make purchases or rental agreements 
                conveniently and securely.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
              <div className="h-64 bg-gradient-to-br from-blue-100/50 to-purple-200/50">
                <img className="w-full h-full object-cover" src="/six/officeCouple.png" alt="Couple at Desk" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 10: Products & Services Intro */}
        <section className="mobile-section  flex items-center px-4 py-3">
          <div className="w-full">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl text-center">
              <h1 className="text-4xl font-bold text-white mb-8">Products & Services</h1>
              <p className="text-base text-white leading-relaxed font-light">
                SIX – Buy & Sell offers a wide range of categories where users can list, discover, and transact with 
                ease. Our platform supports both new and used products, as well as services, ensuring that buyers 
                and sellers find exactly what they need.
              </p>
            </div>
          </div>
        </section>

        {/* Section 11: Automobiles Products Detail */}
        <section className="mobile-section flex items-center px-4 py-2">
          <div className="w-full space-y-6">
           
            
            <div className="bg-white/10 backdrop-blur-lg border rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-white mb-8">Automobiles</h2>
              <ul className="space-y-4 text-white text-base">
                <li className="flex items-center font-light">
                  <span className="w-2 h-2 bg-white rounded-full mr-4"></span>
                  New Cars
                </li>
                <li className="flex items-center font-light">
                  <span className="w-2 h-2 bg-white rounded-full mr-4"></span>
                  Used Cars
                </li>
                <li className="flex items-center font-light">
                  <span className="w-2 h-2 bg-white rounded-full mr-4"></span>
                  New Bikes & Scooters
                </li>
                <li className="flex items-center font-light">
                  <span className="w-2 h-2 bg-white rounded-full mr-4"></span>
                  Used Bikes & Scooters
                </li>
                <li className="flex items-center font-light">
                  <span className="w-2 h-2 bg-white rounded-full mr-4"></span>
                  New Commercial Vehicles
                </li>
                <li className="flex items-center font-light">
                  <span className="w-2 h-2 bg-white rounded-full mr-4"></span>
                  Used Commercial Vehicles
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
              <div className="h-64 bg-gradient-to-br from-red-100/50 to-blue-200/50">
                <img className="w-full h-full object-cover" src="/six/carMech.jpg" alt="Car Mechanic" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 12: Real Estate Products Detail */}
        <section className="mobile-section  flex items-center px-4 py-3">
          <div className="w-full space-y-6">
           
            <div className="bg-white/10 backdrop-blur-lg border rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-white mb-8">Real Estate</h2>
              <ul className="space-y-6 text-white text-base">
                <li className="flex items-center font-light">
                  <span className="w-2 h-2 bg-white rounded-full mr-4"></span>
                  Properties for Rent
                </li>
                <li className="flex items-center font-light">
                  <span className="w-2 h-2 bg-white rounded-full mr-4"></span>
                  Properties for Sale
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
              <div className="h-64 bg-gradient-to-br from-yellow-100/50 to-green-200/50">
                <img className="w-full h-full object-cover" src="/six/HomeV.png" alt="House/Property" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 13: Services Detail */}
        <section className="mobile-section  flex items-center px-4 py-3">
          <div className="w-full space-y-6">
          
            
            <div className="bg-white/10 backdrop-blur-lg border rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-white mb-8">Services</h2>
              <ul className="space-y-6 text-white text-base">
                <li className="flex items-center font-light">
                  <span className="w-2 h-2 bg-white rounded-full mr-4"></span>
                  Dealer & Showroom Listings
                </li>
                <li className="flex items-center font-light">
                  <span className="w-2 h-2 bg-white rounded-full mr-4"></span>
                  Advertising & Promotions for faster sales
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
              <div className="h-64 bg-gradient-to-br from-blue-100/50 to-gray-200/50">
                <img className="w-full h-full object-cover" src="/six/Service.png" alt="Services" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 14: Availability & Expansion */}
        <section 
          className="mobile-section flex items-center px-4 py-8 relative overflow-hidden" 
          style={{ 
            backgroundImage: 'url(/six/bg-last.jpg)', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-yellow-500/10 to-pink-500/20"></div>
          <div className="bg-white/10 backdrop-blur-md border py-8 px-6 rounded-3xl w-full relative z-10">
            <h1 className="text-4xl font-bold text-white text-center mb-8">
              Availability & Expansion
            </h1>
            
            <div className="text-white space-y-6">
              <p className="text-base leading-relaxed text-center font-medium">
                SIX – Buy & Sell was founded in 2024 in Kolkata with a vision to simplify online buying and selling for 
                everyone. In a short span of time, it has expanded rapidly and now operates in over 4,500 locations across 
                India.
              </p>
              
              <div className="space-y-6">
                <div className="text-center">
                  <p className="text-lg font-semibold">Headquarters: <span className="text-orange-400">KOLKATA</span>, India</p>
                  <p className="text-lg font-semibold">Regional Office: <span className="text-orange-400">DELHI</span>, India</p>
                </div>
                
                <div className="text-center">
                  <p className="text-base font-medium mb-4">Other branches coming soon in:</p>
                  <p className="text-base font-medium leading-relaxed">
                    <span className="text-orange-400">Bangalore, Hyderabad, Ahmedabad, Mumbai, Jaipur, Chennai, Pune, 
                    Visakhapatnam</span> and others
                  </p>
                </div>
              </div>
              
              <p className="text-base leading-relaxed text-center font-medium">
                With a strong presence across the country and a continuously growing user base, SIX is dedicated to 
                building a nationwide marketplace that seamlessly connects buyers, sellers, and businesses in every 
                region of India.
              </p>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default AboutUsSixMobile;