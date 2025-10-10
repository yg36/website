import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[var(--nav-bg)] border-b border-border/40">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <a href="/" className="text-2xl font-bold tracking-tight text-foreground">
              FURNISH
            </a>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#circularity" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Circularity
              </a>
              <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                How it works
              </a>
              <a href="#showcase" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Showcase
              </a>
              <a href="#resources" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Resources
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              Login
            </Button>
            <Button size="sm">
              Get started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
