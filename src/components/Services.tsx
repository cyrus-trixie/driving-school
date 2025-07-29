
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Palette, Clock, Shield, Heart, Zap, Star } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Custom Design",
      price: "From $150",
      duration: "2-4 hours",
    },
    {
      icon: Clock,
      title: "Touch-ups",
      price: "From $80",
      duration: "1-2 hours",
    },
    {
      icon: Shield,
      title: "Cover-ups",
      price: "From $200",
      duration: "3-6 hours",
    },
    {
      icon: Heart,
      title: "Memorial",
      price: "From $120",
      duration: "2-3 hours",
    },
    {
      icon: Zap,
      title: "Flash Tattoos",
      price: "From $60",
      duration: "30min-1hr",
    },
    {
      icon: Star,
      title: "Large Projects",
      price: "Custom Quote",
      duration: "Multiple sessions",
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Services
          </h2>
          <p className="text-lg text-gray-600">
            Professional tattoo services with highest quality standards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <service.icon className="w-8 h-8 text-red-500" />
                  <Badge className="bg-gray-100 text-gray-700 border-none">
                    {service.duration}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="text-2xl font-bold text-red-500 mb-4">
                  {service.price}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg font-medium">
            Book Session
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
