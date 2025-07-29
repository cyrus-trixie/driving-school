import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, MessageCircle, Facebook, Instagram, Twitter } from "lucide-react";

const DrivingContact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "+254 700 000 000",
        "+254 750 000 000"
      ],
      action: "Call Now",
      actionLink: "tel:+254700000000"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: [
        "+254 700 000 000",
        "Quick responses 24/7"
      ],
      action: "Chat on WhatsApp",
      actionLink: "https://wa.me/254700000000"
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "info@drivesafe.co.ke",
        "admissions@drivesafe.co.ke"
      ],
      action: "Send Email",
      actionLink: "mailto:info@drivesafe.co.ke"
    },
    {
      icon: MapPin,
      title: "Location",
      details: [
        "Kiambu Road, Opposite Shell Petrol Station",
        "Next to Equity Bank, Nairobi"
      ],
      action: "Get Directions",
      actionLink: "#"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:30 PM" },
    { day: "Saturday", hours: "8:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "9:00 AM - 4:00 PM" },
  ];

  const socialMedia = [
    { icon: Facebook, name: "Facebook", link: "#", handle: "@DriveSafeAcademy" },
    { icon: Instagram, name: "Instagram", link: "#", handle: "@drivesafe_academy" },
    { icon: Twitter, name: "Twitter", link: "#", handle: "@DriveSafeKE" },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Phone className="h-6 w-6 text-primary" />
            <span className="text-primary font-medium">Get in Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact DriveSafe Academy
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your driving journey? Contact us today for more information or to schedule your free assessment drive.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center space-x-3 text-lg">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <span>{contact.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-1">
                        {contact.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-foreground text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full"
                        onClick={() => window.open(contact.actionLink, '_blank')}
                      >
                        {contact.action}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Map Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Find Us</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-secondary/20 rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p className="font-medium">Interactive Map</p>
                    <p className="text-sm">Kiambu Road, Opposite Shell Petrol Station</p>
                    <p className="text-sm">Next to Equity Bank, Nairobi</p>
                    <Button variant="outline" size="sm" className="mt-4">
                      Open in Google Maps
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Business Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Business Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm font-medium">{schedule.day}</span>
                    <span className="text-sm text-muted-foreground">{schedule.hours}</span>
                  </div>
                ))}
                <div className="mt-4 p-3 bg-success/10 rounded-lg">
                  <p className="text-sm text-success font-medium">Open 7 Days a Week</p>
                  <p className="text-xs text-muted-foreground mt-1">Emergency contact available 24/7</p>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardHeader>
                <CardTitle>Follow Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialMedia.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-secondary/20 transition-colors cursor-pointer">
                      <IconComponent className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-sm">{social.name}</p>
                        <p className="text-xs text-muted-foreground">{social.handle}</p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6 space-y-4">
                <h4 className="font-semibold text-foreground">Quick Actions</h4>
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Apply Online
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open('tel:+254700000000')}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open('https://wa.me/254700000000', '_blank')}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-warning/10 border-warning/20">
              <CardContent className="p-4 text-center">
                <h4 className="font-semibold text-foreground text-sm mb-2">Emergency Contact</h4>
                <p className="text-xs text-muted-foreground mb-3">For urgent driving school matters</p>
                <Button size="sm" variant="outline" className="text-xs">
                  +254 700 000 000
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-secondary/30 p-8 rounded-2xl max-w-4xl mx-auto">
            <h4 className="text-xl font-bold text-foreground mb-4">
              Visit Our Driving School
            </h4>
            <p className="text-muted-foreground mb-6">
              Come and see our facilities, meet our instructors, and take a free assessment drive. We're open 7 days a week and always happy to welcome new students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-primary hover:bg-primary/90"
                onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Schedule Free Assessment
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.open('tel:+254700000000')}
              >
                Call for Directions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrivingContact;