import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Eye, Star } from "lucide-react";
import { useEffect, useRef } from "react";

const CakeGallery = () => {
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

  const cakeCollection = [
    {
      name: "Wedding Elegance",
      category: "Wedding",
      price: "From KSh 2,800",
      image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400&h=400&fit=crop",
      description: "Multi-tier wedding cake with delicate floral decorations"
    },
    {
      name: "Birthday Bliss",
      category: "Birthday",
      price: "From KSh 1,200",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop",
      description: "Colorful birthday cake perfect for celebrations"
    },
    {
      name: "Chocolate Dreams",
      category: "Premium",
      price: "From KSh 1,800",
      image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400&h=400&fit=crop",
      description: "Rich chocolate cake with ganache and berries"
    },
    {
      name: "Floral Fantasy",
      category: "Custom",
      price: "From KSh 2,500",
      image: "https://images.unsplash.com/photo-1607478900766-efe13248b125?w=400&h=400&fit=crop",
      description: "Artistic cake with handcrafted sugar flowers"
    },
    {
      name: "Rustic Charm",
      category: "Rustic",
      price: "From KSh 1,500",
      image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=400&h=400&fit=crop",
      description: "Naked cake style with fresh fruits and cream"
    },
    {
      name: "Vintage Romance",
      category: "Vintage",
      price: "From KSh 2,200",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=400&fit=crop",
      description: "Classic vintage design with intricate piping"
    }
  ];

  return (
    <section ref={sectionRef} id="gallery" className="py-20 bg-gradient-to-b from-pastel-pink to-pastel-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="flex items-center justify-center mb-4">
            <Star className="w-6 h-6 text-cake-primary mr-2" />
            <span className="text-cake-text/70 font-quicksand font-medium tracking-wide uppercase text-sm">
              Our Creations
            </span>
            <Star className="w-6 h-6 text-cake-primary ml-2" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-cake-text mb-6">
            Sweet Gallery
          </h2>
          <p className="text-lg text-cake-text/80 font-quicksand max-w-2xl mx-auto">
            Every cake tells a story. Browse our collection of handcrafted masterpieces, each one uniquely designed with love and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cakeCollection.map((cake, index) => (
            <Card 
              key={cake.name}
              className="group overflow-hidden bg-white/80 backdrop-blur-sm border border-pastel-pink/30 hover:shadow-2xl transition-all duration-500 rounded-3xl animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-t-3xl">
                <img 
                  src={cake.image} 
                  alt={cake.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                  {cake.category}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-3">
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
                    Order
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16 animate-on-scroll">
          <Button 
            className="bg-cake-primary hover:bg-cake-primary/90 text-cake-text px-10 py-4 text-lg font-quicksand font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-0"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Heart className="w-5 h-5 mr-2" />
            Order Your Dream Cake
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CakeGallery;
