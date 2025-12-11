import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import GameplaySection from '@/components/GameplaySection';
import DiscordSection from '@/components/DiscordSection';
import DonateSection from '@/components/DonateSection';
import CreatorSection from '@/components/CreatorSection';
import Footer from '@/components/Footer';

import YoutubeSection from '@/components/YoutubeSection';

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <GameplaySection />
      <YoutubeSection />
      <DiscordSection />
      <DonateSection />
      <CreatorSection />
      <Footer />
    </main>
  );
};

export default Index;
