import { Card, CardContent } from "@/components/ui/card";
import { Package, Recycle, Settings, Truck } from "lucide-react";

const features = [
  {
    icon: Package,
    title: "Designed, Sealed, Delivered",
    description: "We handle everything from design consultation to installation. Your perfect workspace, delivered and set up hassle-free."
  },
  {
    icon: Recycle,
    title: "Circular & Sustainable",
    description: "Every piece is part of our circular economy. When you're done, we refurbish and give it new life elsewhere."
  },
  {
    icon: Settings,
    title: "Flexible & Scalable",
    description: "Scale up or down as your team grows. Swap pieces seasonally or refresh your space whenever inspiration strikes."
  },
  {
    icon: Truck,
    title: "White Glove Service",
    description: "From delivery to setup, maintenance to pickup - we handle all the logistics so you can focus on your business."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-32 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 animate-slide-up">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            The smarter way to furnish
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-delayed">
            Experience the future of office furniture with our comprehensive subscription service
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-8 pb-6 px-6">
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300 group-hover:scale-110">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
