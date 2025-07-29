import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, CreditCard, Calendar } from "lucide-react";

const DrivingPricing = () => {
  const packages = [
    {
      category: "Category A",
      title: "Motorcycle Course",
      price: "15,000",
      originalPrice: null,
      duration: "2-3 weeks",
      popular: false,
      features: [
        "8-12 practical lessons",
        "Theory classes included",
        "NTSA exam preparation",
        "Practice materials",
        "Certificate upon completion"
      ],
      installments: "Pay in 2 installments",
    },
    {
      category: "Category B",
      title: "Car Driving Course",
      price: "30,000",
      originalPrice: "35,000",
      duration: "4-6 weeks",
      popular: true,
      features: [
        "20-30 practical lessons",
        "Comprehensive theory classes",
        "NTSA exam preparation",
        "Highway driving training",
        "Parking & maneuver practice",
        "Free assessment drive",
        "Certificate upon completion"
      ],
      installments: "Pay in 3 installments",
    },
    {
      category: "Category C/D/E",
      title: "Commercial Vehicles",
      price: "45,000",
      originalPrice: null,
      duration: "6-8 weeks",
      popular: false,
      features: [
        "30-40 practical lessons",
        "Commercial vehicle regulations",
        "Load handling training",
        "Route planning",
        "Safety protocols",
        "NTSA exam preparation",
        "Professional certificate"
      ],
      installments: "Pay in 3 installments",
    },
    {
      category: "Refresher",
      title: "Refresher Course",
      price: "5,000",
      originalPrice: null,
      duration: "1-2 weeks",
      popular: false,
      features: [
        "5-10 practical lessons",
        "Skills assessment",
        "Confidence building",
        "Updated road rules",
        "Flexible scheduling"
      ],
      installments: "Full payment only",
    },
    {
      category: "Defensive",
      title: "Defensive Driving",
      price: "8,000",
      originalPrice: null,
      duration: "1 week",
      popular: false,
      features: [
        "5-8 specialized lessons",
        "Hazard awareness training",
        "Emergency procedures",
        "Advanced safety techniques",
        "Certificate of completion"
      ],
      installments: "Full payment only",
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <CreditCard className="h-6 w-6 text-primary" />
            <span className="text-primary font-medium">Transparent Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Affordable Learning Packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our range of driving courses with flexible payment options. No hidden fees, just quality instruction.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card key={index} className={`relative group hover:shadow-lg transition-all duration-300 ${pkg.popular ? 'border-primary border-2 ring-2 ring-primary/20' : 'border-2 hover:border-primary/20'}`}>
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="space-y-2">
                  <Badge variant="outline" className="text-xs mb-2">
                    {pkg.category}
                  </Badge>
                  <CardTitle className="text-xl">{pkg.title}</CardTitle>
                  <div className="space-y-1">
                    <div className="flex items-baseline justify-center space-x-2">
                      <span className="text-3xl font-bold text-foreground">KSh {pkg.price}</span>
                      {pkg.originalPrice && (
                        <span className="text-lg text-muted-foreground line-through">KSh {pkg.originalPrice}</span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{pkg.duration}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Features */}
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Payment Options */}
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Payment Options</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{pkg.installments}</p>
                </div>
                
                <Button 
                  className={`w-full ${pkg.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                  variant={pkg.popular ? "default" : "outline"}
                  onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">No Hidden Fees</div>
            <p className="text-sm text-muted-foreground">All costs included in the package price</p>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">Flexible Payment</div>
            <p className="text-sm text-muted-foreground">Pay in installments for major courses</p>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">Money Back Guarantee</div>
            <p className="text-sm text-muted-foreground">Full refund if not satisfied after first lesson</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrivingPricing;