import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import workspaceImage from "@/assets/workspace-1.jpg";

const projects = [
  {
    title: "Tech Startup HQ",
    description: "A flexible workspace for 50+ employees with modular furniture",
    category: "Office Space"
  },
  {
    title: "Creative Agency",
    description: "Inspiring environment with sustainable design elements",
    category: "Design Studio"
  },
  {
    title: "Co-working Space",
    description: "Scalable solution for dynamic shared workspaces",
    category: "Shared Office"
  }
];

const Showcase = () => {
  return (
    <section id="showcase" className="py-32 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 animate-slide-up">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Inspiring workspaces we've created
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-delayed">
            From startups to enterprises, see how we transform spaces
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group overflow-hidden border-border/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={workspaceImage}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <Button variant="ghost" className="group/btn p-0 h-auto hover:bg-transparent">
                  View project
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in-delayed">
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto group hover:border-primary hover:text-primary">
            View all projects
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
