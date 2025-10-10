import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to transform your workspace?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Join hundreds of forward-thinking companies who've made the switch to sustainable, 
            flexible furniture solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 h-auto">
              Start your subscription
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto">
              View showcase
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
