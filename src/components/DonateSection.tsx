import { Rocket, Heart, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DonateSection = () => {
  return (
    <section id="donate" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-war-dark via-war-darker to-war-dark" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-war-gold/20 to-war-red/20 border border-war-gold/30 mb-6">
            <Rocket className="w-10 h-10 text-war-gold" />
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-war-gold">BOOST</span>{' '}
            <span className="text-foreground">Development</span>
          </h2>

          {/* Description */}
          <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
            Support the development of War of Dots and help bring new features, maps, and game modes to the battlefield!
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Zap className="w-4 h-4 text-war-gold" />
              <span>Faster Updates</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Heart className="w-4 h-4 text-war-red" />
              <span>Support Indie Dev</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-war-gold to-yellow-600 hover:from-yellow-600 hover:to-war-gold text-war-darker font-bold text-lg px-8 py-6 rounded-lg shadow-lg shadow-war-gold/20 transition-all duration-300 hover:scale-105"
          >
            <a href="https://buymeacoffee.com/pythonic_tea" target="_blank" rel="noopener noreferrer">
              ☕ Buy Me a Coffee
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
