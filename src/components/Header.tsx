import { Button } from "@/components/ui/button";
import { Building2, Phone, Mail } from "lucide-react";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-lg font-bold text-foreground">Jurassic Software</h1>
              <p className="text-xs text-muted-foreground">ERP Solutions Since 1995</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('industries')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Industries
            </button>
            <button 
              onClick={() => scrollToSection('clients')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Clients
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-2">
            <a href="tel:+917028198097" className="hidden sm:flex items-center text-primary hover:text-primary/80">
              <Phone className="h-4 w-4 mr-1" />
              <span className="text-sm">+91 7028198097</span>
            </a>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="default"
              size="sm"
            >
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;