import { Button } from "./ui/button";

const YoutubeSection = () => {
    return (
        <section id="youtube" className="py-16 px-4 bg-secondary/30 relative overflow-hidden">
            <div className="fog-overlay absolute inset-0 z-0" />
            <div className="container mx-auto text-center relative z-10">
                <h2 className="text-3xl font-bold mb-8">Featured Video</h2>
                <div className="flex flex-col items-center gap-8">
                    <div className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/11C3NRdxC2c"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>
                    <Button
                        size="lg"
                        className="text-lg px-8"
                        asChild
                    >
                        <a
                            href="https://www.youtube.com/@TeaAndPython"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Channel
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default YoutubeSection;
