import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-furniture.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center transform scale-105 animate-[scale_20s_ease-in-out_infinite_alternate]"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-secondary/50 to-background/90" />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-32 text-center">
        <div className="inline-block mb-6 animate-slide-up">
          <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold backdrop-blur-sm border border-primary/20">
            Sustainable • Flexible • Premium
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-tight animate-fade-in">
          Don't buy your office furniture,
          <br />
          <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            subscribe to it.
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-delayed">
          Join the circular economy with premium furniture that adapts to your growing business
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delayed">
          <Button size="lg" className="text-lg px-8 py-6 h-auto group hover:shadow-[var(--shadow-glow)] transition-all duration-300">
            Explore the service
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto backdrop-blur-sm bg-background/50 group">
            <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            Watch demo
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent" />
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700" />
    </section>
  );
};

export default Hero;
