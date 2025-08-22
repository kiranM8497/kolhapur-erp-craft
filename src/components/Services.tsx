import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Package, 
  Users, 
  ShoppingCart, 
  Calculator, 
  Factory, 
  HeadphonesIcon,
  Smartphone,
  BarChart3,
  FileText,
  Shield
} from "lucide-react";

const Services = () => {
  const modules = [
    {
      icon: Package,
      title: "Inventory Management",
      description: "Real-time stock tracking, batch/lot management, min-max alerts, and automated reordering"
    },
    {
      icon: Factory,
      title: "Production Management",
      description: "Foundry heat tracking, routing, downtime monitoring, and production scheduling"
    },
    {
      icon: Calculator,
      title: "Finance & Accounting",
      description: "Integrated ledgers, cost centers, invoice management, and financial reporting"
    },
    {
      icon: Users,
      title: "Human Resources",
      description: "Attendance tracking, shift management, approvals, and employee records"
    },
    {
      icon: ShoppingCart,
      title: "Sales & Distribution",
      description: "Order processing, dispatch management, and invoice-ready exports"
    },
    {
      icon: HeadphonesIcon,
      title: "Customer Relationship",
      description: "Lead management, follow-ups, quotations, and customer communication"
    }
  ];

  const features = [
    {
      icon: Smartphone,
      title: "Mobile Access",
      description: "Access your ERP on any device, anywhere, anytime"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Live dashboards with key performance indicators"
    },
    {
      icon: FileText,
      title: "Automated Reporting",
      description: "Generate reports automatically with customizable formats"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Role-based access, audit logs, and data encryption"
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent text-accent-foreground">
              ERP Modules & Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comprehensive ERP Platform
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Built on .NET, JavaScript, React, and Node.js - our modular ERP platform grows with your business needs
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">Core ERP Modules</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((module, index) => (
                <Card key={index} className="bg-gradient-card shadow-card hover:shadow-professional transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <module.icon className="h-8 w-8 text-primary" />
                      <span className="text-lg">{module.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{module.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="bg-gradient-card shadow-card hover:shadow-professional transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <feature.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h4 className="font-semibold mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-12 p-6 bg-primary/5 rounded-lg border border-primary/20">
            <h3 className="text-xl font-semibold mb-3">Technology Stack</h3>
            <p className="text-muted-foreground mb-4">
              Our ERP is built on proven, modern technologies ensuring reliability and scalability:
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">.NET Framework</Badge>
              <Badge variant="secondary">JavaScript</Badge>
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">Node.js</Badge>
              <Badge variant="secondary">API-First Architecture</Badge>
              <Badge variant="secondary">On-Premise & Cloud Ready</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;