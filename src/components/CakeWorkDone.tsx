
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Eye, Star, Calendar, Users } from "lucide-react";
import { useEffect, useRef } from "react";

const CakeWorkDone = () => {
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

  const completedProjects = [
    {
      name: "Sarah's Wedding Celebration",
      occasion: "Wedding",
      date: "December 2024",
      guests: "120 guests",
      image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=500&h=400&fit=crop",
      description: "Three-tier ivory wedding cake with gold accents and fresh roses"
    },
    {
      name: "Little Emma's 5th Birthday",
      occasion: "Birthday",
      date: "November 2024", 
      guests: "25 kids",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=400&fit=crop",
      description: "Colorful unicorn-themed cake with rainbow layers inside"
    },
    {
      name: "Corporate Annual Gala",
      occasion: "Corporate",
      date: "October 2024",
      guests: "200 guests",
      image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=500&h=400&fit=crop",
      description: "Elegant chocolate cake with company branding and gold details"
    },
    {
      name: "Garden Party Anniversary",
      occasion: "Anniversary",
      date: "October 2024",
      guests: "80 guests",
      image: "https://images.unsplash.com/photo-1607478900766-efe13248b125?w=500&h=400&fit=crop",
      description: "Rustic naked cake with seasonal flowers and berries"
    },
    {
      name: "Medical School Graduation",
      occasion: "Graduation",
      date: "September 2024",
      guests: "40 guests",
      image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=500&h=400&fit=crop",
      description: "Professional themed cake with medical symbols and achievements"
    },
    {
      name: "Baby Shower Celebration",
      occasion: "Baby Shower",
      date: "September 2024",
      guests: "30 guests", 
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=500&h=400&fit=crop",
      description: "Soft pastel cake with baby-themed decorations and fondant figures"
    }
  ];

  return (
    <section ref={sectionRef} id="work-done" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="flex items-center justify-center mb-4">
            <Star className="w-6 h-6 text-cake-primary mr-2" />
            <span className="text-cake-text/70 font-quicksand font-medium tracking-wide uppercase text-sm">
              Our Success Stories
            </span>
            <Star className="w-6 h-6 text-cake-primary ml-2" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-cake-text mb-6">
            Every Occasion Deserves Sweetness
          </h2>
          <p className="text-lg text-cake-text/80 font-quicksand max-w-3xl mx-auto">
            From intimate celebrations to grand events, we create the perfect cake for every moment. 
            See how we've made special occasions even sweeter for our amazing clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {completedProjects.map((project, index) => (
            <Card 
              key={project.name}
              className="group overflow-hidden bg-white border border-pastel-pink/20 hover:shadow-2xl transition-all duration-500 rounded-2xl animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover icons */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <div className="p-2 bg-white/90 rounded-full backdrop-blur-sm">
                      <Eye className="w-4 h-4 text-cake-text cursor-pointer hover:text-cake-primary transition-colors" />
                    </div>
                    <div className="p-2 bg-white/90 rounded-full backdrop-blur-sm">
                      <Heart className="w-4 h-4 text-cake-text cursor-pointer hover:text-cake-primary transition-colors" />
                    </div>
                  </div>
                </div>
                
                <Badge className="absolute top-4 left-4 bg-cake-primary/90 text-cake-text border-0 font-quicksand font-medium backdrop-blur-sm">
                  {project.occasion}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-playfair font-semibold text-cake-text mb-2">{project.name}</h3>
                  <p className="text-cake-text/70 font-quicksand text-sm leading-relaxed mb-3">{project.description}</p>
                  
                  <div className="flex items-center justify-between text-xs text-cake-text/60 font-quicksand">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.date}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      {project.guests}
                    </div>
                  </div>
                </div>
                
                <Button 
                  size="sm" 
                  className="w-full bg-cake-secondary hover:bg-cake-secondary/90 text-cake-text border-0 rounded-full font-quicksand font-medium"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Order Similar Design
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16 animate-on-scroll">
          <p className="text-cake-text/70 font-quicksand mb-6 max-w-2xl mx-auto">
            Ready to create your own sweet memory? Let's design the perfect cake for your special occasion.
          </p>
          <Button 
            className="bg-cake-primary hover:bg-cake-primary/90 text-cake-text px-10 py-4 text-lg font-quicksand font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-0"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Heart className="w-5 h-5 mr-2" />
            Start Your Sweet Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CakeWorkDone;
