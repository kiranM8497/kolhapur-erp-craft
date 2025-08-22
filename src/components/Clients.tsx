import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, Factory, Milk, Cylinder } from "lucide-react";

const Clients = () => {
  const clients = [
    {
      name: "SUYESH AUTOMOBILE CASTING PRIVATE LIMITED",
      industry: "Foundry",
      icon: Factory,
      modules: ["Finance", "Production (Foundry)", "Raw Material Stock", "Finished Product Stock", "Gate Inward/Outward", "HR", "TS-reports", "Maintenance & Breakdown"]
    },
    {
      name: "SUYESH AUTOPARTS PRIVATE LIMITED",
      industry: "Machine Shop",
      icon: Factory,
      modules: ["Finance", "Production", "Raw Material Stock", "Finished Product Stock", "Gate Inward/Outward", "HR", "TS-reports", "Maintenance & Breakdown"]
    },
    {
      name: "SUYESH DUCTILE CASTING PVT. LTD",
      industry: "Foundry",
      icon: Factory,
      modules: ["Finance", "Production (Foundry)", "Raw Material Stock", "Finished Product Stock", "Gate Inward/Outward", "HR", "TS-reports", "Maintenance & Breakdown"]
    },
    {
      name: "SUYESH FOUNDRY PVT. LTD.",
      industry: "Foundry",
      icon: Factory,
      modules: ["Finance", "Production (Foundry)", "Raw Material Stock", "Finished Product Stock", "Gate Inward/Outward", "HR", "TS-reports", "Maintenance & Breakdown"]
    },
    {
      name: "JAGADEESH CASTINGS PVT. LTD",
      industry: "Foundry & Machine Shop",
      icon: Factory,
      modules: ["Finance", "Production (Foundry)", "Raw Material Stock", "Finished Product Stock", "Gate Inward/Outward", "HR", "TS-reports", "Maintenance & Breakdown"]
    },
    {
      name: "G & S PRECISIONS",
      industry: "Machine Shop",
      icon: Factory,
      modules: ["Finance", "Raw Material Stock", "Finished Product Stock", "Gate Inward/Outward", "HR", "TS-reports", "Maintenance & Breakdown"]
    },
    {
      name: "ALLIED VENTURES",
      industry: "Machine Shop",
      icon: Factory,
      modules: ["Raw Material Stock", "Finished Product Stock", "Gate Inward/Outward", "TS-reports", "Maintenance & Breakdown"]
    },
    {
      name: "SHREE WARANA SAHAKARI DUDH UTPADAK PRAKRIYA SANGH LTD.",
      industry: "Dairy",
      icon: Milk,
      modules: ["Milk Inward", "Consumption", "Finished Product", "Inventory"]
    },
    {
      name: "WARANA DAIRY & AGRO INDUSTRIES LTD",
      industry: "Dairy",
      icon: Milk,
      modules: ["Milk Inward", "Consumption", "Finished Product", "Inventory"]
    },
    {
      name: "Kolhapur Oxygen & Acetylene Pvt. Ltd.",
      industry: "Cylinder Tracking",
      icon: Cylinder,
      modules: ["Inward", "In-house (Production)", "Outward (Sale)", "Stock (Empty/Full)", "TS-reports"]
    }
  ];

  const getIndustryColor = (industry: string) => {
    if (industry.includes("Foundry")) return "bg-primary text-primary-foreground";
    if (industry.includes("Machine")) return "bg-secondary text-secondary-foreground";
    if (industry.includes("Dairy")) return "bg-accent text-accent-foreground";
    if (industry.includes("Cylinder")) return "bg-muted text-muted-foreground";
    return "bg-primary text-primary-foreground";
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="clients" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent text-accent-foreground">
              Our Trusted Clients
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Proven Success Across Industries
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From foundries to dairies, our ERP solutions have streamlined operations for leading companies across Maharashtra
            </p>
          </div>

          {/* Trust Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">SMEs Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">99.5%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">&lt;30min</div>
              <div className="text-sm text-muted-foreground">Avg. Support Response</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clients.map((client, index) => (
              <Card key={index} className="bg-gradient-card shadow-card hover:shadow-professional transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-start space-x-3">
                    <client.icon className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold leading-tight">{client.name}</h3>
                      <Badge className={`mt-2 ${getIndustryColor(client.industry)}`}>
                        {client.industry}
                      </Badge>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">Implemented Modules:</h4>
                    <div className="flex flex-wrap gap-1">
                      {client.modules.map((module, moduleIndex) => (
                        <Badge key={moduleIndex} variant="secondary" className="text-xs">
                          {module}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Ready to join our satisfied clients?
            </p>
            <Button 
              size="lg"
              onClick={scrollToContact}
            >
              Request Similar Implementation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;