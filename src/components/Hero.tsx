import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-furniture.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 via-secondary/50 to-background/80" />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-32 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in">
          Don't buy your office furniture,
          <br />
          <span className="text-foreground/90">subscribe to it.</span>
        </h1>
        
        <div className="mt-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Button size="lg" className="text-lg px-8 py-6 h-auto">
            Explore the service
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
