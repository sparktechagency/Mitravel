"use client"
import React, { useState, useEffect, useRef } from 'react';

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  className?: string;
  start?: boolean;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, duration = 2000, className, start = false }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!start) {
      setDisplayValue(0); // reset when not in view
      return;
    }

    let startValue = 0;
    const increment = value / (duration / 16); // ~60fps
    const interval = setInterval(() => {
      startValue += increment;
      if (startValue >= value) {
        startValue = value;
        clearInterval(interval);
      }
      setDisplayValue(Math.floor(startValue));
    }, 16);

    return () => clearInterval(interval);
  }, [value, duration, start]);

  return <span className={className}>{displayValue}</span>;
};

interface MarketData {
  id: string;
  targetValue: number;
  title: string;
  subtitle: string;
  delay: number;
  gradientClass: string;
  animationClass: string;
}

const marketData: MarketData[] = [
  {
    id: 'amount1',
    targetValue: 700,
    title: 'Total Addressable Market (TAM)',
    subtitle: 'The entire market opportunity is $250B Credit Card, $250B Airlines, $200B Hospitality',
    delay: 500,
    gradientClass: 'bg-gradient-1',
    animationClass: 'animate-slide-in-delay-1'
  },
  {
    id: 'amount2',
    targetValue: 100,
    title: 'Serviceable Available Market (SAM)',
    subtitle: 'The Segment Of The TAM That Can Be Served By Our Product/Services',
    delay: 1000,
    gradientClass: 'bg-gradient-2',
    animationClass: 'animate-slide-in-delay-2'
  },
  {
    id: 'amount3',
    targetValue: 10,
    title: 'Serviceable Obtainable Market (SOM)',
    subtitle: '10% Of Wasted Loyalty Points + 25% Of Global Loyalty Redemption',
    delay: 1500,
    gradientClass: 'bg-gradient-3',
    animationClass: 'animate-slide-in-delay-3'
  }
];

const MarketAnimation = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setInView(entry.isIntersecting); // Set to true when section is in view
    }, { threshold: 0.5 }); // Trigger when 50% of the section is in view

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
    <div ref={sectionRef} className="relative xl:container w-[98%] mx-auto lg:p-10 p-2 py-5 ">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 lg:gap-2 xl:gap-8 mx-auto">
        {marketData.map((market) => (
          <div
            key={market.id}
            className={`text-center ${market.animationClass}`}
            style={{ animationDelay: `${market.delay}ms` }}
          >
            <br />
            <div className={` text-[#37DF32] text-xl lg:text-3xl xl:text-6xl font-bold  drop-shadow-lg ${market.gradientClass}`}>
              $<AnimatedNumber value={market.targetValue} start={inView} duration={2000} className="text-xl lg:text-3xl xl:text-6xl  font-bold text-[#37DF32]" />
              B
            </div>
            <div className="text-md xl:text-xl font-semibold mb-1  opacity-90 text-black">
              {market.title}
            </div>
            <div className="md:px-5 xl:px-10 text-sm md:text-md opacity-80 leading-relaxed text-black">
              {market.subtitle}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketAnimation;
