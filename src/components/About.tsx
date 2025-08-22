import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, User, MapPin, Clock, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary text-primary-foreground">
              About Jurassic Software
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              29 Years of ERP Excellence in Kolhapur
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Established in 1995 by Anil Joshi, we've been designing, building, and implementing our own in-house ERP solutions for manufacturing industries across Maharashtra.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Building2 className="h-8 w-8 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Story</h3>
                  <p className="text-muted-foreground">
                    Since 1995, Jurassic Software Private Limited has been at the forefront of ERP innovation in Kolhapur. What started as a vision to streamline manufacturing processes has grown into a comprehensive ERP platform trusted by foundries, machine shops, dairies, and cylinder tracking businesses.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <User className="h-8 w-8 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Leadership</h3>
                  <p className="text-muted-foreground">
                    Founded and led by <strong>Anil Joshi</strong>, our team combines deep industry knowledge with cutting-edge technology. We understand the unique challenges faced by small and medium enterprises in manufacturing sectors.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="h-8 w-8 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Local Presence</h3>
                  <p className="text-muted-foreground">
                    Based in Rajarampuri, Kolhapur, we provide hands-on support and implementation services. Our local presence ensures quick response times and personalized service to our clients across Maharashtra.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-gradient-card shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Clock className="h-6 w-6 text-primary mr-2" />
                    Business Hours
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    <strong>Monday to Saturday:</strong> 10:00 AM - 6:00 PM
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Remote support available beyond business hours for critical issues
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Our Values</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-accent" />
                      <span>Reliability & Trust</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-accent" />
                      <span>Quick Response & Support</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-accent" />
                      <span>Practical Solutions</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-accent" />
                      <span>Local Understanding</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;