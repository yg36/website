import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import circularImage from "@/assets/circular-concept.jpg";

const benefits = [
  "Reduce carbon footprint by up to 80%",
  "Zero furniture waste to landfill",
  "Extend furniture lifecycle by 5x",
  "Support circular economy principles"
];

const Circularity = () => {
  return (
    <section id="circularity" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 animate-slide-in">
            <Badge className="mb-6 text-base px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20">
              Circular Economy
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sustainability isn't optional,
              <br />
              <span className="text-primary">it's essential</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Every piece of furniture in our collection is part of a circular system. 
              When you're done, we refurbish and give it new life—reducing waste and 
              maximizing value.
            </p>
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={circularImage} 
                alt="Circular economy concept" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Circularity;
