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
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            The smarter way to furnish
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-8 pb-6 px-6">
                <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
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
