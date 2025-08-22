import { Building2, Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="h-8 w-8" />
                <div>
                  <h3 className="text-lg font-bold">Jurassic Software</h3>
                  <p className="text-xs text-primary-foreground/80">Pvt. Ltd.</p>
                </div>
              </div>
              <p className="text-sm text-primary-foreground/80 mb-4">
                Kolhapur's trusted ERP partner since 1995, empowering manufacturing businesses with proven solutions.
              </p>
              <div className="text-sm text-primary-foreground/80">
                <p className="font-semibold mb-1">Owner: Anil Joshi</p>
                <p>29+ Years of Excellence</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    ERP Modules
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('industries')}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Industries
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('clients')}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Our Clients
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                  <div>
                    <a href="tel:2312652325" className="text-primary-foreground/80 hover:text-primary-foreground">231 2652325</a><br />
                    <a href="tel:+917028198097" className="text-primary-foreground/80 hover:text-primary-foreground">+91 7028198097</a><br />
                    <a href="tel:9890618245" className="text-primary-foreground/80 hover:text-primary-foreground">9890618245</a>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Mail className="h-4 w-4 mt-1 flex-shrink-0" />
                  <div>
                    <a href="mailto:JSPL270324@gmail.com" className="text-primary-foreground/80 hover:text-primary-foreground">
                      JSPL270324@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Clock className="h-4 w-4 mt-1 flex-shrink-0" />
                  <div className="text-primary-foreground/80">
                    Mon-Sat: 10AM - 6PM
                  </div>
                </div>
              </div>
            </div>

            {/* Address */}
            <div>
              <h4 className="font-semibold mb-4">Office Address</h4>
              <div className="flex items-start space-x-2 text-sm">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  Gouri Lila, Flat no. 303, 3rd floor<br />
                  1598 k/kh E ward, Final Plot No. 111<br />
                  5th Lane, Opp. Shriram Vidyalay<br />
                  Rajarampuri, Kolhapur<br />
                  Maharashtra 416008
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-primary-foreground/80">
                © 2025 Jurassic Software Private Limited. All rights reserved.
              </div>
              <div className="text-xs text-primary-foreground/60 mt-2 md:mt-0">
                Support email is temporary - Please use primary email for inquiries
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;