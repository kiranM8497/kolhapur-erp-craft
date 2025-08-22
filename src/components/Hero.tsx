import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-accent text-accent-foreground">
            Trusted ERP Partner Since 1995
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Kolhapur's Leading
            <span className="block text-accent">ERP Solutions Provider</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            Empowering Foundries, Machine Shops, Dairies & Cylinder Tracking businesses with our proven in-house ERP platform for 29+ years
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={scrollToContact}
              className="shadow-hero"
            >
              Book Free Demo
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={scrollToContact}
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Get Custom Quote
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-primary-foreground/80">
              <Calendar className="h-5 w-5" />
              <span className="font-semibold">29 Years Experience</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-primary-foreground/80">
              <MapPin className="h-5 w-5" />
              <span className="font-semibold">Kolhapur Based</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-primary-foreground/80">
              <Award className="h-5 w-5" />
              <span className="font-semibold">Own ERP Product</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;