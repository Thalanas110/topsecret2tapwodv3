import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, MouseEvent } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const handleWithdrawal = (e: MouseEvent) => {
    e.preventDefault();
    setIsExiting(true);
    setTimeout(() => {
      navigate("/");
    }, 500); // Wait for transition duration
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Background Effects */}
      <div className="fog-overlay absolute inset-0 z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className={cn(
        "relative z-10 text-center px-4 max-w-2xl mx-auto transition-all duration-500 ease-in-out",
        isExiting ? "opacity-0 translate-y-10 scale-95" : "animate-fade-up"
      )}>
        {/* Glitch/Distortion Effect Container */}
        <div className="relative mb-8">
          <h1 className="text-8xl md:text-9xl font-military text-transparent bg-clip-text bg-gradient-to-b from-war-gold to-yellow-700 animate-pulse tracking-widest drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]">
            404
          </h1>
          <div className="absolute top-0 left-0 w-full h-full text-8xl md:text-9xl font-military text-red-500/20 blur-sm animate-[pulse_3s_ease-in-out_infinite] pointer-events-none tracking-widest">
            404
          </div>
        </div>

        <div className="space-y-6 bg-secondary/80 backdrop-blur-sm p-8 rounded-lg border border-war-gold/20 shadow-2xl">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-military text-war-gold tracking-wider">
              SECTOR NULL // ACCESS DENIED
            </h2>
            <p className="text-xl text-red-300 font-mono tracking-widest uppercase">
              // PROTOCOL VIOLATION DETECTED //
            </p>
          </div>

          <p className="text-muted-foreground text-lg text-justify font-mono border-l-2 border-war-gold/30 pl-4 py-2">
            OPERATIVE: The coordinates <span className="text-war-gold bg-black/30 px-2 py-0.5 rounded">{location.pathname}</span> do not correspond to any sanctioned objective on the tactical grid.
            <br /><br />
            Your deviation from the assigned mission parameters has been logged. Persistent unauthorized reconnaissance in void sectors constitutes a Class-4 infraction.
          </p>

          <div className="pt-4">
            <Button
              onClick={handleWithdrawal}
              size="lg"
              className="bg-war-blood hover:bg-red-700 text-white font-military tracking-widest text-lg px-8 border border-red-900 shadow-[0_0_15px_rgba(220,38,38,0.4)] w-full md:w-auto"
            >
              INITIATE TACTICAL WITHDRAWAL
            </Button>
          </div>
        </div>

        {/* Decorative Radar Ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border border-war-gold/5 rounded-full z-[-1] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] border border-war-gold/10 rounded-full z-[-1] pointer-events-none animate-[spin_20s_linear_infinite]" />
      </div>
    </div>
  );
};

export default NotFound;
