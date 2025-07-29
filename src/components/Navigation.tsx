
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-gray-900">
            KANYANGE <span className="text-red-500">INK</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-red-500 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-600 hover:text-red-500 transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-red-500 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-red-500 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-red-500 transition-colors">
              Contact
            </button>
          </div>

          <Button 
            className="hidden md:block bg-red-500 hover:bg-red-600 text-white"
            onClick={() => scrollToSection('contact')}
          >
            Book Now
          </Button>

          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-red-500 transition-colors text-left px-4">
                Home
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-600 hover:text-red-500 transition-colors text-left px-4">
                Gallery
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-red-500 transition-colors text-left px-4">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-red-500 transition-colors text-left px-4">
                Services
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-red-500 transition-colors text-left px-4">
                Contact
              </button>
              <Button 
                className="mx-4 bg-red-500 hover:bg-red-600 text-white"
                onClick={() => scrollToSection('contact')}
              >
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
