
import { Button } from "@/components/ui/button";
import { Palette, Zap, Star } from "lucide-react";

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-16">
      {/* Clean WordPress-style hero */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 tracking-tight">
          KANYANGE
          <br />
          <span className="text-red-500">INK</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light max-w-2xl mx-auto">
          Professional Tattoo Art
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg font-medium"
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Gallery
          </Button>
          <Button 
            variant="outline" 
            className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg font-medium"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
