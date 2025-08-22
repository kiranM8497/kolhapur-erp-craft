import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare,
  Monitor,
  Users,
  Building2
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    industry: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = `ERP Inquiry from ${formData.company || formData.name}`;
    const body = `Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone}
Industry: ${formData.industry}
Message: ${formData.message}`;
    
    const mailtoLink = `mailto:JSPL270324@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening Email Client",
      description: "Your default email client will open with the inquiry details.",
    });
    
    // Reset form
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      industry: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary text-primary-foreground">
              Get In Touch
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Contact us today for a free consultation and see how our ERP solutions can streamline your operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="bg-gradient-card shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-6 w-6 text-primary" />
                    <span>Office Address</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Gouri Lila, Flat no. 303, 3rd floor<br />
                    1598 k/kh E ward, Final Plot No. 111<br />
                    5th Lane, Opp. Shriram Vidyalay<br />
                    Rajarampuri, Kolhapur<br />
                    Maharashtra 416008
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Phone className="h-6 w-6 text-primary" />
                    <span>Phone Numbers</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <a 
                    href="tel:2312652325" 
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary"
                  >
                    <span>Office: 231 2652325</span>
                  </a>
                  <a 
                    href="tel:+917028198097" 
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary"
                  >
                    <span>Mobile: +91 7028198097</span>
                  </a>
                  <a 
                    href="tel:9890618245" 
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary"
                  >
                    <span>Mobile: 9890618245</span>
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Mail className="h-6 w-6 text-primary" />
                    <span>Email Contacts</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <a 
                    href="mailto:JSPL270324@gmail.com" 
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary"
                  >
                    <span>JSPL270324@gmail.com</span>
                  </a>
                  <div className="text-sm text-muted-foreground">
                    <p>Support: jurassicsoftwar.office@gmail.com</p>
                    <p className="text-xs text-muted-foreground/70">(Temporary)</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-6 w-6 text-primary" />
                    <span>Business Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    <strong>Monday to Saturday</strong><br />
                    10:00 AM - 6:00 PM
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Remote support available for critical issues
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-card">
                <CardHeader>
                  <CardTitle>Support Channels</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-accent" />
                    <span className="text-sm">Phone Support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-accent" />
                    <span className="text-sm">Email Support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Monitor className="h-4 w-4 text-accent" />
                    <span className="text-sm">Remote Desktop</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-gradient-card shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageSquare className="h-6 w-6 text-primary" />
                    <span>Send us a Message</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry Type</Label>
                      <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="foundry">Foundry</SelectItem>
                          <SelectItem value="machine-shop">Machine Shop</SelectItem>
                          <SelectItem value="foundry-machine">Foundry & Machine Shop</SelectItem>
                          <SelectItem value="dairy">Dairy</SelectItem>
                          <SelectItem value="cylinder-tracking">Cylinder Tracking</SelectItem>
                          <SelectItem value="other">Other Manufacturing</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your requirements..."
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        rows={5}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;