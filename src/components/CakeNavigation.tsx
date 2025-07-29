
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const CakeNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-pastel-pink/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-playfair font-bold text-cake-text">
            Sweet Dreams
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-cake-text/80 hover:text-cake-text transition-colors font-quicksand">
              Home
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-cake-text/80 hover:text-cake-text transition-colors font-quicksand">
              Gallery
            </button>
            <button onClick={() => scrollToSection('about')} className="text-cake-text/80 hover:text-cake-text transition-colors font-quicksand">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-cake-text/80 hover:text-cake-text transition-colors font-quicksand">
              Contact
            </button>
          </div>

          <Button 
            className="hidden md:block bg-cake-primary hover:bg-cake-primary/90 text-cake-text border-0 rounded-full px-6 font-quicksand font-medium"
            onClick={() => scrollToSection('contact')}
          >
            Order Now
          </Button>

          <button
            className="md:hidden text-cake-text"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-pastel-pink/30 py-4 rounded-b-2xl">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-cake-text/80 hover:text-cake-text transition-colors text-left px-4 font-quicksand">
                Home
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-cake-text/80 hover:text-cake-text transition-colors text-left px-4 font-quicksand">
                Gallery
              </button>
              <button onClick={() => scrollToSection('about')} className="text-cake-text/80 hover:text-cake-text transition-colors text-left px-4 font-quicksand">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-cake-text/80 hover:text-cake-text transition-colors text-left px-4 font-quicksand">
                Contact
              </button>
              <Button 
                className="mx-4 bg-cake-primary hover:bg-cake-primary/90 text-cake-text border-0 rounded-full font-quicksand font-medium"
                onClick={() => scrollToSection('contact')}
              >
                Order Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default CakeNavigation;
