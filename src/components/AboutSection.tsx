import { Target, Swords, Gem, Star, Shield } from 'lucide-react';
import redDot from '@/assets/red-dot.png';
import blueDot from '@/assets/blue-dot.png';

// features
const features = [
  {
    icon: Target,
    title: 'Dominate the Map',
    description: 'Break enemy lines and take control of key cities. The more you own, the stronger you grow.',
  },
  {
    icon: Swords,
    title: 'Live Tactical Combat',
    description: 'Engage in live, high-stakes battles. Think fast, adapt faster. Your decisions in the heat of the moment determine whether you rise or fall.',
  },
  {
    icon: Gem,
    title: 'Resource Management',
    description: 'Stockpile resources or upgrade your troops. Outmaneuver your opponents not just with force, but with cunning strategy',
  },
  {
    icon: Star,
    title: 'Special Events',
    description: 'limited-time challenges and map-altering events will make your War of Dots experience truly interesting',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 md:py-32 px-4 bg-secondary/30 overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[10%] w-48 h-48 bg-war-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-[10%] w-48 h-48 bg-war-blue/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-war-gold/3 rounded-full blur-3xl" />
      </div>

      {/* Corner decorations */}
      <div className="absolute top-12 left-8 text-war-gold/10 hidden md:block">
        <Shield className="w-12 h-12" />
      </div>
      <div className="absolute top-12 right-8 text-war-gold/10 hidden md:block rotate-12">
        <Shield className="w-12 h-12" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="font-military text-3xl md:text-5xl text-gradient-gold mb-4">
              What is War of Dots?
            </h2>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-war-gold to-transparent" />
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mt-6">
            War of Dots is a strategic multiplayer game where every move matters.
            Command your armies in real-time battles across dynamic maps: capture territory,
            control resources, and conquer your rivals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="war-card p-6 md:p-8 group hover:scale-[1.02] transition-all duration-300 relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card corner accent */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-war-gold/20 rounded-tl-lg" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-war-gold/20 rounded-br-lg" />

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10 border border-accent/30 group-hover:bg-accent/20 group-hover:border-accent/50 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-military text-xl md:text-2xl text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action with dots */}
        <div className="text-center mt-16">
          <p className="font-military text-xl md:text-2xl text-gradient-blood">
            Think you can rise above the chaos and outsmart the rest?
          </p>
          <p className="text-lg text-muted-foreground mt-2 mb-8">
            The battle's waiting.
          </p>

          {/* Red and Blue dots display */}
          <div className="flex items-center justify-center gap-6 md:gap-10 mt-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-war-blue/30 rounded-full blur-xl scale-110 group-hover:scale-125 transition-transform duration-500" />
              <img
                src={blueDot}
                alt="Blue Team"
                className="w-20 h-20 md:w-28 md:h-28 relative z-10 drop-shadow-[0_0_15px_rgba(50,100,200,0.5)] hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="text-war-gold/60 font-military text-2xl md:text-3xl">VS</span>
            <div className="relative group">
              <div className="absolute inset-0 bg-war-red/30 rounded-full blur-xl scale-110 group-hover:scale-125 transition-transform duration-500" />
              <img
                src={redDot}
                alt="Red Team"
                className="w-20 h-20 md:w-28 md:h-28 relative z-10 drop-shadow-[0_0_15px_rgba(200,50,50,0.5)] hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
};

export default AboutSection;
