import { useState, useEffect } from 'react';
import worldMap from '@/assets/world-map.png';
import gameplay1 from '@/assets/gameplay-1.png';
import gameplay2 from '@/assets/gameplay-2.png';
import gameplay3 from '@/assets/gameplay-3.png';
import gameplay4 from '@/assets/gameplay-4.png';
import gameplay5 from '@/assets/gameplay-5.png';
import gameplay6 from '@/assets/gameplay-6.png';
import redDot from '@/assets/red-dot.png';
import blueDot from '@/assets/blue-dot.png';
import CountdownTimer from './CountdownTimer';

const mapImages = [worldMap, gameplay1, gameplay2, gameplay3, gameplay4, gameplay5, gameplay6];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % mapImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Map - Cycling Images */}
      <div className="absolute inset-0">
        {mapImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="War of Dots Map"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-40' : 'opacity-0'
            }`}
          />
        ))}
        {/* Fog of War Overlay */}
        <div className="fog-overlay absolute inset-0" />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
      </div>

      {/* Floating Dots - Red Team */}
      <img 
        src={redDot} 
        alt="" 
        className="absolute top-[20%] left-[10%] w-8 h-8 md:w-12 md:h-12 opacity-70 animate-float pointer-events-none"
        aria-hidden="true"
      />
      <img 
        src={redDot} 
        alt="" 
        className="absolute top-[60%] left-[15%] w-6 h-6 md:w-10 md:h-10 opacity-50 animate-float-delayed pointer-events-none"
        aria-hidden="true"
      />
      <img 
        src={redDot} 
        alt="" 
        className="absolute bottom-[25%] left-[8%] w-5 h-5 md:w-8 md:h-8 opacity-60 animate-float pointer-events-none"
        aria-hidden="true"
      />

      {/* Floating Dots - Blue Team */}
      <img 
        src={blueDot} 
        alt="" 
        className="absolute top-[25%] right-[12%] w-8 h-8 md:w-12 md:h-12 opacity-70 animate-float-delayed pointer-events-none"
        aria-hidden="true"
      />
      <img 
        src={blueDot} 
        alt="" 
        className="absolute top-[55%] right-[10%] w-6 h-6 md:w-10 md:h-10 opacity-50 animate-float pointer-events-none"
        aria-hidden="true"
      />
      <img 
        src={blueDot} 
        alt="" 
        className="absolute bottom-[30%] right-[15%] w-5 h-5 md:w-8 md:h-8 opacity-60 animate-float-delayed pointer-events-none"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-up">
          <h1 className="font-military text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-gradient-gold mb-4 drop-shadow-2xl">
            WAR OF DOTS
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/90 mb-2 uppercase tracking-[0.2em]">
            Command. Conquer. Dominate.
          </p>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mb-8">
            A strategic multiplayer game where every move matters
          </p>
        </div>

        <div className="animate-fade-up delay-200">
          <CountdownTimer />
        </div>

        <div className="animate-fade-up delay-400 mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#about" 
            className="btn-war-gold px-8 py-3 rounded-md font-semibold uppercase tracking-wider inline-block"
          >
            Learn More
          </a>
          <a 
            href="#discord" 
            className="btn-war px-8 py-3 rounded-md text-foreground inline-block"
          >
            Join Discord
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse-slow" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
