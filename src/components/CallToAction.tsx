
import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const CallToAction = () => {
  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Order?
          </h3>
          <p className="text-lg max-w-2xl mx-auto">
            Experience the finest pork dishes crafted with passion and served with pride
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-semibold mb-2">Visit Us</h4>
            <p>123 Food Street, City Center</p>
          </div>

          <div className="text-center">
            <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-semibold mb-2">Call Us</h4>
            <p>+1 (555) 123-4567</p>
          </div>

          <div className="text-center">
            <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-semibold mb-2">Hours</h4>
            <p>Mon-Sun: 11AM - 10PM</p>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg hover:shadow-xl transform hover:scale-105">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
