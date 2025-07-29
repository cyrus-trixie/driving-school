
import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";

const CakeHero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1920&h=1080&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pastel-cream/90 via-pastel-pink/80 to-pastel-blue/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="w-8 h-8 text-cake-primary mr-3" />
          <span className="text-cake-text/80 font-quicksand font-medium tracking-wide uppercase text-sm">
            Premium Bakery
          </span>
          <Sparkles className="w-8 h-8 text-cake-primary ml-3" />
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-cake-text mb-6 leading-tight">
          Handcrafted Cakes
          <br />
          <span className="text-cake-primary">for Every</span>
          <br />
          Celebration
        </h1>
        
        <p className="text-xl md:text-2xl text-cake-text/80 mb-10 font-quicksand font-light max-w-2xl mx-auto leading-relaxed">
          Made with love, passion, and the finest ingredients. Creating sweet memories that last a lifetime.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            className="bg-cake-primary hover:bg-cake-primary/90 text-cake-text px-10 py-4 text-lg font-quicksand font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-0 min-w-[180px]"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Heart className="w-5 h-5 mr-2" />
            Order Now
          </Button>
          <Button 
            variant="outline" 
            className="border-2 border-cake-text/30 text-cake-text bg-white/50 hover:bg-white/70 backdrop-blur-sm px-10 py-4 text-lg font-quicksand font-medium rounded-full min-w-[180px]"
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Gallery
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cake-text/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cake-text/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default CakeHero;
