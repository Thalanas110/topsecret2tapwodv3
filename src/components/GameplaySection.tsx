import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Crosshair, Target } from 'lucide-react';
import redDot from '@/assets/red-dot.png';
import blueDot from '@/assets/blue-dot.png';

import gameplay1 from '@/assets/gameplay-1.png';
import gameplay2 from '@/assets/gameplay-2.png';
import gameplay3 from '@/assets/gameplay-3.png';
import gameplay4 from '@/assets/gameplay-4.png';
import gameplay5 from '@/assets/gameplay-5.png';
import gameplay6 from '@/assets/gameplay-6.png';

const screenshots = [
  { src: gameplay1, alt: 'War of Dots Gameplay - River Battles' },
  { src: gameplay2, alt: 'War of Dots Gameplay - Coastal Assault' },
  { src: gameplay3, alt: 'War of Dots Gameplay - Mountain Pass' },
  { src: gameplay4, alt: 'War of Dots Gameplay - Strategic Positioning' },
  { src: gameplay5, alt: 'War of Dots Gameplay - Forest Combat' },
  { src: gameplay6, alt: 'War of Dots Gameplay - Bridge Control' },
];

const GameplaySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const nextSlide = () => {
    goToSlide((currentIndex + 1) % screenshots.length);
  };

  const prevSlide = () => {
    goToSlide((currentIndex - 1 + screenshots.length) % screenshots.length);
  };

  // Auto-advance slides (pauses on interaction)
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section id="gameplay" className="py-20 md:py-32 px-4 relative overflow-hidden">
      {/* Decorative background elements - CSS only for performance */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-[5%] w-32 h-32 bg-war-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-[5%] w-40 h-40 bg-war-blue/5 rounded-full blur-3xl" />
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-8 left-8 text-war-gold/20 hidden md:block">
        <Crosshair className="w-8 h-8" />
      </div>
      <div className="absolute top-8 right-8 text-war-gold/20 hidden md:block">
        <Target className="w-8 h-8" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header with animated underline */}
        <div className="text-center mb-12">
          <div className="inline-block relative">
            <h2 className="font-military text-3xl md:text-5xl text-gradient-gold mb-4">
              Gameplay Preview
            </h2>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-war-gold to-transparent" />
          </div>
          <p className="text-muted-foreground mt-4 flex items-center justify-center gap-2">
            <img src={redDot} alt="" className="w-4 h-4" aria-hidden="true" />
            Experience intense tactical battles across diverse terrain
            <img src={blueDot} alt="" className="w-4 h-4" aria-hidden="true" />
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative group">
          {/* Outer glow frame */}
          <div className="absolute -inset-1 bg-gradient-to-r from-war-red/20 via-war-gold/30 to-war-blue/20 rounded-xl blur-sm opacity-60" />
          
          <div className="war-card overflow-hidden rounded-xl relative">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-war-gold/40 rounded-tl-xl z-10" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-war-gold/40 rounded-tr-xl z-10" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-war-gold/40 rounded-bl-xl z-10" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-war-gold/40 rounded-br-xl z-10" />

            <div className="relative aspect-video overflow-hidden">
              {screenshots.map((screenshot, index) => (
                <img
                  key={index}
                  src={screenshot.src}
                  alt={screenshot.alt}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                    index === currentIndex 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-105'
                  }`}
                  loading="lazy"
                />
              ))}
              {/* Vignette overlay */}
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.4)_100%)]" />
              {/* Scan line effect - CSS only */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.3)_2px,rgba(0,0,0,0.3)_4px)]" />
            </div>
          </div>

          {/* Navigation Arrows with enhanced styling */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:-left-5 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-war-darker/90 hover:bg-war-dark rounded-full border border-war-gold/30 transition-all duration-300 hover:scale-110 hover:border-war-gold/60 group-hover:opacity-100 md:opacity-0 shadow-lg shadow-black/30"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-war-gold" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 md:-right-5 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-war-darker/90 hover:bg-war-dark rounded-full border border-war-gold/30 transition-all duration-300 hover:scale-110 hover:border-war-gold/60 group-hover:opacity-100 md:opacity-0 shadow-lg shadow-black/30"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-war-gold" />
          </button>

          {/* Slide counter badge */}
          <div className="absolute bottom-4 right-4 px-3 py-1 bg-war-darker/80 rounded-full border border-war-gold/30 text-xs text-war-gold font-mono z-10">
            {currentIndex + 1} / {screenshots.length}
          </div>
        </div>

        {/* Thumbnail Navigation - Enhanced */}
        <div className="flex justify-center gap-2 md:gap-3 mt-8 overflow-x-auto pb-2 px-4">
          {screenshots.map((screenshot, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`flex-shrink-0 w-16 h-10 md:w-24 md:h-14 rounded-md overflow-hidden border-2 transition-all duration-300 relative ${
                index === currentIndex 
                  ? 'border-war-gold scale-110 shadow-lg shadow-war-gold/20' 
                  : 'border-border/30 opacity-50 hover:opacity-100 hover:border-border'
              }`}
            >
              <img
                src={screenshot.src}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {index === currentIndex && (
                <div className="absolute inset-0 bg-war-gold/10" />
              )}
            </button>
          ))}
        </div>

        {/* Progress bar for current slide */}
        <div className="flex justify-center gap-1 mt-4">
          {screenshots.map((_, index) => (
            <div
              key={index}
              className={`h-0.5 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 bg-war-gold' 
                  : 'w-2 bg-border/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameplaySection;
