import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-[var(--nav-bg)] border-b border-border/40 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <a href="/" className="text-2xl font-bold tracking-tight text-foreground relative group">
              FURNISH
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("features")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("circularity")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                Circularity
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("showcase")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                Showcase
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("cta")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden sm:flex hover:scale-105 transition-transform">
              Login
            </Button>
            <Button size="sm" className="hidden sm:flex hover:scale-105 transition-transform hover:shadow-lg">
              Get started
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden backdrop-blur-lg bg-background/95 border-t border-border/40 animate-slide-up">
          <div className="container mx-auto px-6 py-4 space-y-4">
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("circularity")}
              className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Circularity
            </button>
            <button
              onClick={() => scrollToSection("showcase")}
              className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Showcase
            </button>
            <button
              onClick={() => scrollToSection("cta")}
              className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Contact
            </button>
            <div className="pt-4 space-y-2">
              <Button variant="ghost" size="sm" className="w-full">
                Login
              </Button>
              <Button size="sm" className="w-full">
                Get started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
