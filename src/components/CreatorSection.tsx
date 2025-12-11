import creatorProfile from '@/assets/creator-profile.png';

const CreatorSection = () => {
  return (
    <section id="creator" className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-primary/20 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="font-military text-3xl sm:text-4xl md:text-5xl text-center text-gradient-gold mb-12">
          THE CREATOR
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8 bg-card/50 backdrop-blur-sm rounded-lg p-8 border border-border/50">
          {/* Creator Image */}
          <div className="relative shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/50 shadow-lg shadow-primary/20">
              <img
                src={creatorProfile}
                alt="TeaAndPython - Creator of War of Dots"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-war-blood rounded-full border-2 border-background" />
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-primary rounded-full border-2 border-background" />
          </div>

          {/* Creator Info */}
          <div className="text-center md:text-left">
            <h3 className="font-military text-2xl md:text-3xl text-foreground mb-2">
              TeaAndPython
            </h3>
            <p className="text-primary uppercase tracking-widest text-sm mb-4">
              Game Developer
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-lg">
              The mastermind behind War of Dots. Passionate about creating engaging 
              strategic experiences that challenge players to think tactically and 
              dominate the battlefield.
            </p>
            <div className="mt-6 flex gap-4 justify-center md:justify-start">
              <a
                href="https://www.youtube.com/@TeaAndPython"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-war px-6 py-2 rounded-md text-sm"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorSection;
