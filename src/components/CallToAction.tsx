import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail } from "lucide-react";

const CallToAction = () => {
  return (
    <section id="cta" className="py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              Get Started Today
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              Ready to transform your workspace?
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
              Join hundreds of forward-thinking companies who've made the switch to sustainable, 
              flexible furniture solutions.
            </p>
          </div>

          {/* Email signup */}
          <div className="max-w-xl mx-auto mb-12 animate-slide-up">
            <div className="flex flex-col sm:flex-row gap-3 p-2 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-lg">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input 
                  type="email" 
                  placeholder="Enter your work email" 
                  className="pl-12 h-14 border-0 bg-transparent text-lg focus-visible:ring-0"
                />
              </div>
              <Button size="lg" className="h-14 px-8 text-base group">
                Get started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground text-center mt-4">
              No credit card required • Free consultation • Quick setup
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-12 border-t border-border/50 animate-fade-in-delayed">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Happy clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50k+</div>
              <div className="text-sm text-muted-foreground">Furniture pieces</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">80%</div>
              <div className="text-sm text-muted-foreground">Carbon reduced</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
