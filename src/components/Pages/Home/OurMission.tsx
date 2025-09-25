"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import our1 from "@/assets/HeroBannerSection/our1.png";
import our2 from "@/assets/HeroBannerSection/our2.png";

const OurMission = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="xl:container w-[98%] mx-auto  px-2 md:px-0 " ref={sectionRef}>
      <div 
        className={`bg-gradient-to-r from-[#2B3B7A] via-[#3A4B8C] to-[#4C60B8] p-8 md:p-16 lg:p-20 rounded-2xl shadow-lg transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Section */}
          <div 
            className={`text-white space-y-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="inline-block animate-fade-in-up">Our</span>
              <br />
              <span 
                className={`text-[#4ADE80] font-bold inline-block transition-all duration-700 delay-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                Mission & Vision
              </span>
            </h1>
            
            <div className="space-y-4">
              <p 
                className={`text-sm md:text-base leading-relaxed text-gray-100 transition-all duration-700 delay-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                $30 Billion In Travel Rewards Go Unredeemed Each Year. Mi-Travel Empowers Travelers To 
                Effortlessly Redeem Rewards.
              </p>
              
              <p 
                className={`text-sm md:text-base leading-relaxed text-gray-100 transition-all duration-700 delay-900 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                To Be The Leading Global Platform For AI-Optimized Reward Travel By Handling 25% Of 
                Global Loyalty Redemption By 2030.
              </p>
            </div>
          </div>

          {/* Image Section - Following exact design */}
          <div 
            className={`relative flex justify-center md:justify-end transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative">
              {/* Main airplane wing image with rounded corners */}
              <div className="relative group">
                <Image
                  src={our1}
                  alt="Airplane wing over ocean"
                  className={`rounded-3xl h-[280px] md:h-[320px] lg:h-[360px] w-[320px] md:w-[360px] lg:w-[400px] object-cover transition-all duration-700 delay-600 group-hover:scale-105 group-hover:shadow-2xl ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                />
                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Small overlapping image positioned at bottom-left */}
 <div 
  className={`absolute -bottom-12 -left-12 md:-bottom-16 md:-left-16 transition-all duration-700 delay-800 group ${
    isVisible ? 'opacity-100 translate-y-0 translate-x-0' : 'opacity-0 translate-y-4 -translate-x-4'
  }`}
>
  <Image
    src={our2}
    width={240}
    height={240}
    alt="Traveler with backpack"
    className="rounded-2xl h-[240px] w-[240px] object-cover transition-all duration-500 group-hover:scale-110 group-hover:shadow-md"
  />
</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default OurMission;