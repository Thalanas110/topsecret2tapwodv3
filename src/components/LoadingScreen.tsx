import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import redDot from '@/assets/red-dot.png';
import blueDot from '@/assets/blue-dot.png';

interface LoadingScreenProps {
    onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
    const [progress, setProgress] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => {
                        setIsExiting(true);
                        setTimeout(onComplete, 800); // Wait for exit animation
                    }, 500);
                    return 100;
                }
                // Random progress increments for "hacking/loading" feel
                return Math.min(prev + Math.random() * 15, 100);
            });
        }, 150);

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <div
            className={cn(
                "fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center overflow-hidden transition-opacity duration-700",
                isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
            )}
        >
            {/* Background Grid/Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

            <div className="relative z-10 flex flex-col items-center gap-12 max-w-md w-full px-6">

                {/* Animated Dots Conflict */}
                <div className="relative w-32 h-32 flex items-center justify-center">
                    <div className="absolute inset-0 border border-war-gold/20 rounded-full animate-[spin_4s_linear_infinite]" />
                    <div className="absolute inset-2 border border-dashed border-war-gold/10 rounded-full animate-[spin_8s_linear_infinite_reverse]" />

                    <div className="relative w-full h-full animate-[spin_3s_linear_infinite]">
                        <img
                            src={blueDot}
                            alt="Blue"
                            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 drop-shadow-[0_0_10px_rgba(50,100,200,0.8)]"
                        />
                        <img
                            src={redDot}
                            alt="Red"
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-8 h-8 drop-shadow-[0_0_10px_rgba(200,50,50,0.8)]"
                        />
                    </div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-war-gold font-military text-2xl tracking-widest animate-pulse">
                        VS
                    </div>
                </div>

                {/* Text and Progress */}
                <div className="w-full space-y-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-military text-foreground tracking-[0.2em] uppercase">
                        Initializing Battlefield
                    </h2>

                    <div className="flex items-center gap-4 text-sm font-mono text-muted-foreground/80 justify-center h-6">
                        <span className="typing-text">
                            {progress < 30 ? "Establishing Secure Connection..." :
                                progress < 60 ? "Loading Tactical Assets..." :
                                    progress < 90 ? "Syncing Global Intel..." :
                                        "System Ready."}
                        </span>
                    </div>

                    {/* Custom Progress Bar */}
                    <div className="h-2 w-full bg-secondary/50 rounded-full overflow-hidden border border-white/5 relative">
                        <div
                            className="h-full bg-gradient-to-r from-war-gold via-yellow-500 to-war-gold transition-all duration-200 ease-out relative"
                            style={{ width: `${progress}%` }}
                        >
                            <div className="absolute right-0 top-0 bottom-0 w-full animate-[shimmer_1s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12" />
                        </div>
                    </div>

                    <div className="flex justify-between text-xs text-war-gold/60 font-mono">
                        <span>SYS.VER.2.0.4</span>
                        <span>{Math.round(progress)}%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
