
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Let's Create <span className="bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to turn your vision into reality? Get in touch and let's start your tattoo journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center space-x-2">
                <MessageCircle className="w-6 h-6 text-red-400" />
                <span>Book Consultation</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-gray-300">First Name</Label>
                  <Input 
                    id="firstName" 
                    className="bg-slate-700 border-slate-600 text-white focus:border-red-400"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-gray-300">Last Name</Label>
                  <Input 
                    id="lastName" 
                    className="bg-slate-700 border-slate-600 text-white focus:border-red-400"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email" className="text-gray-300">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  className="bg-slate-700 border-slate-600 text-white focus:border-red-400"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-gray-300">Phone</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  className="bg-slate-700 border-slate-600 text-white focus:border-red-400"
                  placeholder="Your phone number"
                />
              </div>
              
              <div>
                <Label htmlFor="tattooIdea" className="text-gray-300">Tattoo Idea</Label>
                <textarea 
                  id="tattooIdea"
                  className="w-full p-3 bg-slate-700 border border-slate-600 rounded-md text-white focus:border-red-400 focus:outline-none resize-none"
                  rows={4}
                  placeholder="Describe your tattoo idea, size, placement, and any reference images you have..."
                ></textarea>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Phone className="w-6 h-6 text-green-400" />
                  <div>
                    <h3 className="text-white font-semibold">Call Us</h3>
                    <p className="text-gray-300">0701212125</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">Available for consultations and appointments</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <div>
                    <h3 className="text-white font-semibold">Email Us</h3>
                    <p className="text-gray-300">info@kanyangeink.com</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">Send us your ideas and reference images</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <MapPin className="w-6 h-6 text-red-400" />
                  <div>
                    <h3 className="text-white font-semibold">Visit Our Studio</h3>
                    <p className="text-gray-300">Downtown Art District</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">Clean, professional, and welcoming environment</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Clock className="w-6 h-6 text-purple-400" />
                  <div>
                    <h3 className="text-white font-semibold">Studio Hours</h3>
                    <div className="text-gray-300 space-y-1">
                      <p>Mon - Fri: 10:00 AM - 8:00 PM</p>
                      <p>Saturday: 10:00 AM - 6:00 PM</p>
                      <p>Sunday: By Appointment</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-white font-semibold mb-4">Follow Our Journey</h3>
                <div className="flex space-x-4">
                  <button className="p-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110">
                    <Instagram className="w-5 h-5 text-white" />
                  </button>
                  <button className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110">
                    <Facebook className="w-5 h-5 text-white" />
                  </button>
                </div>
                <p className="text-gray-400 text-sm mt-4">
                  See our latest work and client stories
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
