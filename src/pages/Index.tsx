import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Features from "@/components/Features";
import Circularity from "@/components/Circularity";
import Showcase from "@/components/Showcase";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <TrustedBy />
      <Features />
      <Circularity />
      <Showcase />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
