import { useState, useEffect } from 'react';
import FlipDigit from './FlipDigit';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const RELEASE_DATE = new Date('2026-01-15T00:00:00').getTime();

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = Date.now();
      const difference = RELEASE_DATE - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const [useFlip, setUseFlip] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setUseFlip(window.innerWidth > 1100);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  return (
    <div className="flex flex-col items-center gap-4">
      <h3 className="text-sm md:text-base uppercase tracking-[0.3em] text-muted-foreground">
        Launching In
      </h3>
      <div className="flex gap-2 md:gap-4">
        {[
          { value: timeLeft.days, label: 'Days' },
          { value: timeLeft.hours, label: 'Hours' },
          { value: timeLeft.minutes, label: 'Mins' },
          { value: timeLeft.seconds, label: 'Secs' },
        ].map((item, index) => (
          <div key={item.label} className="flex flex-col items-center">
            {useFlip ? (
              <FlipDigit value={item.value} />
            ) : (
              <div className="countdown-digit w-14 h-16 md:w-20 md:h-24 flex items-center justify-center rounded-md">
                <span className="font-military text-2xl md:text-4xl text-gradient-gold">
                  {formatNumber(item.value)}
                </span>
              </div>
            )}
            <span className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground mt-2">
              {item.label}
            </span>
          </div>
        ))}
      </div>
      <p className="text-sm text-muted-foreground mt-2">
        January 15, 2026
      </p>
    </div>
  );
};

export default CountdownTimer;
