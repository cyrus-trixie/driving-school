import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ChefHat } from "lucide-react";
import { useEffect, useRef } from "react";

const CakeTypes = () => {
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

  const cakeTypes = [
    {
      name: "Wedding Cakes",
      description: "Elegant multi-tier designs for your special day",
      price: "From KSh 2,500",
      image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=300&h=200&fit=crop",
      popular: true
    },
    {
      name: "Birthday Cakes",
      description: "Fun and colorful designs for all ages",
      price: "From KSh 1,200",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop",
      popular: true
    },
    {
      name: "Anniversary Cakes",
      description: "Romantic designs to celebrate love",
      price: "From KSh 1,800",
      image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=300&h=200&fit=crop",
      popular: false
    },
    {
      name: "Custom Cakes",
      description: "Unique designs tailored to your vision",
      price: "From KSh 2,200",
      image: "https://images.unsplash.com/photo-1607478900766-efe13248b125?w=300&h=200&fit=crop",
      popular: false
    },
    {
      name: "Corporate Cakes",
      description: "Professional designs for business events",
      price: "From KSh 2,000",
      image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=300&h=200&fit=crop",
      popular: false
    },
    {
      name: "Graduation Cakes",
      description: "Celebrate achievements with style",
      price: "From KSh 1,500",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=200&fit=crop",
      popular: true
    }
  ];

  return (
    <section ref={sectionRef} id="cake-types" className="py-20 bg-gradient-to-b from-pastel-blue to-pastel-lavender">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="flex items-center justify-center mb-4">
            <ChefHat className="w-6 h-6 text-cake-primary mr-2" />
            <span className="text-cake-text/70 font-quicksand font-medium tracking-wide uppercase text-sm">
              Cake Types
            </span>
            <ChefHat className="w-6 h-6 text-cake-primary ml-2" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-cake-text mb-6">
            Every Occasion 
            <span className="text-cake-primary"> Deserves Sweetness</span>
          </h2>
          <p className="text-lg text-cake-text/80 font-quicksand max-w-2xl mx-auto">
            From intimate celebrations to grand events, we create the perfect cake for every moment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cakeTypes.map((cake, index) => (
            <Card 
              key={cake.name}
              className="group overflow-hidden bg-white/80 backdrop-blur-sm border border-pastel-pink/30 hover:shadow-2xl transition-all duration-500 rounded-3xl animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-t-3xl">
                <img 
                  src={cake.image} 
                  alt={cake.name}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {cake.popular && (
                  <Badge className="absolute top-4 left-4 bg-cake-primary/90 text-cake-text border-0 font-quicksand font-medium backdrop-blur-sm">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </Badge>
                )}
              </div>
              
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-playfair font-semibold text-cake-text mb-2">{cake.name}</h3>
                  <p className="text-cake-text/70 font-quicksand text-sm leading-relaxed">{cake.description}</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-quicksand font-semibold text-cake-primary">{cake.price}</span>
                  <Button 
                    size="sm" 
                    className="bg-cake-secondary hover:bg-cake-secondary/90 text-cake-text border-0 rounded-full font-quicksand font-medium px-4"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Order Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CakeTypes;
