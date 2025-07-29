import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Car } from "lucide-react";

const DrivingNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Car className="h-8 w-8 text-red-600" />
            <span className="text-xl font-bold text-white">DriveSafe Academy</span>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-red-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('courses')} className="text-white hover:text-red-600 transition-colors">
              Courses
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-white hover:text-red-600 transition-colors">
              Pricing
            </button>
            <button onClick={() => scrollToSection('schedule')} className="text-white hover:text-red-600 transition-colors">
              Schedule
            </button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-red-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-red-600 transition-colors">
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('application')}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Enroll Now
            </Button>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-red-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border-t border-red-600">
              <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-white hover:text-red-600 w-full text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('courses')} className="block px-3 py-2 text-white hover:text-red-600 w-full text-left">
                Courses
              </button>
              <button onClick={() => scrollToSection('pricing')} className="block px-3 py-2 text-white hover:text-red-600 w-full text-left">
                Pricing
              </button>
              <button onClick={() => scrollToSection('schedule')} className="block px-3 py-2 text-white hover:text-red-600 w-full text-left">
                Schedule
              </button>
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-white hover:text-red-600 w-full text-left">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-white hover:text-red-600 w-full text-left">
                Contact
              </button>
              <div className="px-3 py-2">
                <Button 
                  onClick={() => scrollToSection('application')}
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                >
                  Enroll Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default DrivingNavigation;