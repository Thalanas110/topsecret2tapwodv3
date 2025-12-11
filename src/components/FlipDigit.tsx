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

            {/* Animation Layers - Only render when flipping to save resources? 
          Actually keeping them in DOM is smoother for transitions. 
          We need:
          1. Top Half of Previous Value (Static until covered?) -> No, this is the "bg" for the top
          2. Bottom Half of Previous Value (Flipping Down) -> This is flip-card-bottom-flip ? No.
          
          Standard Flip 3D Logic:
          - Underneath: Current Value (Full)
          - Top Layer: Previous Value Top Half 
          - Flip Layer: Previous Value Top Half (Starts at 0, rotates to -90?? No.)
          
          Let's verify standard 3D flip logic:
          When changing from 3 -> 2:
          - Top-Back: 2 (Static)
          - Bottom-Back: 3 (Static) -> wait, Bottom-Back should be 2.
          
          Correct Layers:
          1. Upper Card (Back): Current Value (Next)
          2. Lower Card (Back): Current Value (Next)
          3. Upper Card (Front): Previous Value (Current) -> Flips Down
          4. Lower Card (Front): Previous Value (Current) -> Static? No.

          Actually:
          - Top Half: Shows Current Value (Underneath) vs Previous Value (Over). 
            - Previous Value Top rotates Down (-90deg) to reveal Current Value Top.
          - Bottom Half: Shows Previous Value (Underneath) vs Current Value (Over).
            - Current Value Bottom rotates Up (from 90deg? or top rotates to it?) 
          
          Simpler 2-card approach:
          - Top Half: Static Previous (Wait, if I flip down, it reveals Top Current).
          - Bottom Half: Static Current (Wait, if top flips down, it covers Bottom Previous?).

          Let's stick to the keyframes I defined:
          flip-top: rotateX(0) -> rotateX(-90). (Starts flat, folds down)
          flip-bottom: rotateX(90) -> rotateX(0). (Starts folded up, folds flat)

          So:
          1. Static Top: Current Value (The one appearing)
          2. Static Bottom: Previous Value (The one disappearing... wait)
          
          Let's trace "Flip Down":
          - Start: Showing '00'
          - End: Showing '59' (Counting down)
          
          Animation: '00' Top folds down to become '00' Bottom? No.
           '00' Top folds down.
           '59' Bottom folds down (from top).

          Let's use the standard "Flip Clock" DOM structure:
          - Top (Static): Current Value (Next number)
          - Bottom (Static): Previous Value (Old number)
          - Top-Flip (Animated): Previous Value. Rotates 0 -> -90.
          - Bottom-Flip (Animated): Current Value. Rotates 90 -> 0.

          Let's implement this.
       */}

            {/* 
        Container state:
        We are transitioning FROM `previousValue` TO `currentValue`.
      */}

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
