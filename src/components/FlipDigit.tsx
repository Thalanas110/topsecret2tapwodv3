import { useEffect, useState, useRef } from 'react';

interface FlipDigitProps {
    value: number;
}

const FlipDigit = ({ value }: FlipDigitProps) => {
    const [currentValue, setCurrentValue] = useState(value);
    const [previousValue, setPreviousValue] = useState(value);
    const [isFlipping, setIsFlipping] = useState(false);
    const nodeRef = useRef<HTMLDivElement>(null);

    // Helper to format number to 2 digits
    const format = (n: number) => String(n).padStart(2, '0');

    useEffect(() => {
        if (value !== currentValue) {
            setPreviousValue(currentValue);
            setCurrentValue(value);
            setIsFlipping(true);

            const timeout = setTimeout(() => {
                setIsFlipping(false);
                setPreviousValue(value);
            }, 600); // Duration matches CSS animation

            return () => clearTimeout(timeout);
        }
    }, [value, currentValue]);

    return (
        <div ref={nodeRef} className="flip-digit relative w-14 h-16 md:w-20 md:h-24 rounded-md bg-transparent">
            {/* Static Background (Current Value) - Visible when not flipping or after flip */}
            <div className="absolute inset-0 w-full h-full z-0">
                <div className="flip-card-top">
                    <div className="flip-card-content">
                        <span className="font-military text-2xl md:text-4xl">{format(currentValue)}</span>
                    </div>
                </div>
                <div className="flip-card-bottom">
                    <div className="flip-card-content">
                        <span className="font-military text-2xl md:text-4xl">{format(currentValue)}</span>
                    </div>
                </div>
            </div>

            {/* Animation Layers - Only render when flipping to save resources? */}

            {/* 1. Top Static: Current Value (The End Result Top) */}
            <div className="flip-card-top z-0">
                <div className="flip-card-content">
                    <span className="font-military text-2xl md:text-4xl">{format(currentValue)}</span>
                </div>
            </div>

            {/* 2. Bottom Static: Previous Value (The Start Result Bottom - visible until covered) */}
            <div className="flip-card-bottom z-0">
                <div className="flip-card-content">
                    <span className="font-military text-2xl md:text-4xl">{format(previousValue)}</span>
                </div>
            </div>

            {/* 3. Top Flip: Previous Value (The Start Result Top - Flips down) */}
            {isFlipping && (
                <div className="flip-card-top-flip z-20">
                    <div className="flip-card-content">
                        <span className="font-military text-2xl md:text-4xl">{format(previousValue)}</span>
                    </div>
                </div>
            )}

            {/* 4. Bottom Flip: Current Value (The End Result Bottom - Flips down) */}
            {isFlipping && (
                <div className="flip-card-bottom-flip z-20">
                    <div className="flip-card-content">
                        <span className="font-military text-2xl md:text-4xl">{format(currentValue)}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FlipDigit;
