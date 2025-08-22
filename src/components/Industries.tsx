import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Factory, Milk, Cylinder, CheckCircle } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Factory,
      title: "Foundry & Machine Shop",
      description: "Complete production management from raw materials to finished products",
      modules: [
        "Finance & Accounting",
        "Production Management (Foundry)",
        "Raw Material Stock",
        "Finished Product Stock",
        "Jobwork Management",
        "Gate Inward/Outward",
        "Human Resources",
        "TS-related Reports",
        "Maintenance & Breakdown"
      ],
      benefits: [
        "Improved accuracy in production tracking",
        "Enhanced traceability throughout processes",
        "Reduced machine downtime",
        "Faster dispatch and delivery"
      ]
    },
    {
      icon: Milk,
      title: "Dairy Industry",
      description: "End-to-end dairy operations from milk collection to finished products",
      modules: [
        "Milk Inward Processing",
        "Consumption Tracking",
        "Finished Product Management",
        "Inventory Control"
      ],
      benefits: [
        "Complete milk-to-product traceability",
        "Batch visibility and quality control",
        "Accurate stock management",
        "Streamlined dairy operations"
      ]
    },
    {
      icon: Cylinder,
      title: "Cylinder Tracking",
      description: "Full lifecycle management of cylinders and gas operations",
      modules: [
        "Cylinder Inward",
        "In-house Production",
        "Cylinder Outward (Sales)",
        "Stock Management (Empty/Full)",
        "TS-related Reports"
      ],
      benefits: [
        "Complete cylinder lifecycle tracking",
        "Accurate empty/full stock counts",
        "Reduced turnaround time",
        "Better customer service"
      ]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="industries" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary text-primary-foreground">
              Industries We Serve
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Specialized ERP Solutions for Key Industries
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Deep industry expertise with tailored modules designed for specific business processes
            </p>
          </div>

          <div className="space-y-12">
            {industries.map((industry, index) => (
              <Card key={index} className="bg-gradient-card shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-2xl">
                    <industry.icon className="h-10 w-10 text-primary" />
                    <span>{industry.title}</span>
                  </CardTitle>
                  <p className="text-muted-foreground text-lg">{industry.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4 text-lg">Available Modules</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {industry.modules.map((module, moduleIndex) => (
                          <div key={moduleIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                            <span className="text-sm">{module}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-4 text-lg">Key Benefits</h4>
                      <ul className="space-y-2">
                        {industry.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <Button 
                        className="mt-6" 
                        variant="outline"
                        onClick={scrollToContact}
                      >
                        Discuss {industry.title} Solution
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;