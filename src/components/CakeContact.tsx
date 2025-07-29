
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Instagram, MessageCircle, Heart, Send } from "lucide-react";
import { useEffect, useRef } from "react";

const CakeContact = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-gradient-to-b from-pastel-lavender to-pastel-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-6 h-6 text-cake-primary mr-2" />
            <span className="text-cake-text/70 font-quicksand font-medium tracking-wide uppercase text-sm">
              Get In Touch
            </span>
            <Heart className="w-6 h-6 text-cake-primary ml-2" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-cake-text mb-6">
            Let's Create Your 
            <span className="text-cake-primary"> Sweet Dream</span>
          </h2>
          <p className="text-lg text-cake-text/80 max-w-2xl mx-auto font-quicksand">
            Ready to make your celebration unforgettable? Contact us today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/80 backdrop-blur-sm border border-pastel-pink/30 rounded-3xl animate-on-scroll">
            <CardHeader>
              <CardTitle className="text-2xl font-playfair text-cake-text flex items-center space-x-2">
                <MessageCircle className="w-6 h-6 text-cake-primary" />
                <span>Send us a Message</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-cake-text font-quicksand font-medium">First Name</Label>
                  <Input 
                    id="firstName" 
                    className="bg-white/50 border-pastel-pink/50 text-cake-text focus:border-cake-primary rounded-xl font-quicksand"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-cake-text font-quicksand font-medium">Last Name</Label>
                  <Input 
                    id="lastName" 
                    className="bg-white/50 border-pastel-pink/50 text-cake-text focus:border-cake-primary rounded-xl font-quicksand"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-cake-text font-quicksand font-medium">Phone</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  className="bg-white/50 border-pastel-pink/50 text-cake-text focus:border-cake-primary rounded-xl font-quicksand"
                  placeholder="+254 700 000 000"
                />
              </div>
              
              <div>
                <Label htmlFor="cakeDetails" className="text-cake-text font-quicksand font-medium">Your Cake Vision</Label>
                <textarea 
                  id="cakeDetails"
                  className="w-full p-4 bg-white/50 border border-pastel-pink/50 rounded-xl text-cake-text focus:border-cake-primary focus:outline-none resize-none font-quicksand"
                  rows={4}
                  placeholder="Tell us about your dream cake: occasion, size, flavors, design..."
                ></textarea>
              </div>
              
              <Button className="w-full bg-cake-primary hover:bg-cake-primary/90 text-cake-text py-4 text-lg font-quicksand font-semibold rounded-xl border-0 transition-all duration-300 hover:shadow-lg">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* WhatsApp */}
            <Card className="bg-white/80 backdrop-blur-sm border border-pastel-pink/30 rounded-3xl hover:shadow-xl transition-all duration-300 animate-on-scroll">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-cake-text font-playfair font-semibold text-lg">WhatsApp Orders</h3>
                    <p className="text-cake-text/70 font-quicksand">+254 700 123 456</p>
                  </div>
                </div>
                <p className="text-cake-text/70 font-quicksand text-sm mb-4">Quick orders and instant responses</p>
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white rounded-xl font-quicksand font-medium border-0">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Instagram */}
            <Card className="bg-white/80 backdrop-blur-sm border border-pastel-pink/30 rounded-3xl hover:shadow-xl transition-all duration-300 animate-on-scroll">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400 rounded-full flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-cake-text font-playfair font-semibold text-lg">Follow Us</h3>
                    <p className="text-cake-text/70 font-quicksand">@sweetdreamske</p>
                  </div>
                </div>
                <p className="text-cake-text/70 font-quicksand text-sm mb-4">See our latest creations</p>
                <Button className="w-full bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 text-white rounded-xl font-quicksand font-medium border-0">
                  <Instagram className="w-4 h-4 mr-2" />
                  Follow on Instagram
                </Button>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <div className="grid grid-cols-1 gap-4 animate-on-scroll">
              <Card className="bg-white/80 backdrop-blur-sm border border-pastel-pink/30 rounded-2xl">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-cake-primary" />
                    <div>
                      <h4 className="text-cake-text font-quicksand font-semibold text-sm">Call Us</h4>
                      <p className="text-cake-text/70 font-quicksand text-sm">+254 700 123 456</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border border-pastel-pink/30 rounded-2xl">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-cake-primary" />
                    <div>
                      <h4 className="text-cake-text font-quicksand font-semibold text-sm">Email</h4>
                      <p className="text-cake-text/70 font-quicksand text-sm">hello@sweetdreams.co.ke</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border border-pastel-pink/30 rounded-2xl">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-cake-primary" />
                    <div>
                      <h4 className="text-cake-text font-quicksand font-semibold text-sm">Visit Us</h4>
                      <p className="text-cake-text/70 font-quicksand text-sm">Nairobi, Kenya</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border border-pastel-pink/30 rounded-2xl">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-cake-primary" />
                    <div>
                      <h4 className="text-cake-text font-quicksand font-semibold text-sm">Hours</h4>
                      <p className="text-cake-text/70 font-quicksand text-sm">Mon-Sat: 8AM-7PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-pastel-pink/30 animate-on-scroll">
          <p className="text-cake-text/60 font-quicksand">
            © 2024 Sweet Dreams Bakery Kenya. Made with <Heart className="w-4 h-4 inline text-cake-primary" /> for sweet celebrations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CakeContact;
