
import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Users, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";

const CakeAbout = () => {
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

  const features = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every cake crafted with passion using family recipes."
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Finest ingredients sourced locally for exceptional taste."
    },
    {
      icon: Users,
      title: "Personal Touch",
      description: "Each creation personalized to make your moments special."
    },
    {
      icon: Sparkles,
      title: "Artistic Design",
      description: "Culinary expertise meets artistic flair in every cake."
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gradient-to-b from-pastel-cream to-pastel-blue">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll">
            <div className="flex items-center mb-6">
              <Heart className="w-6 h-6 text-cake-primary mr-2" />
              <span className="text-cake-text/70 font-quicksand font-medium tracking-wide uppercase text-sm">
                About Us
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-cake-text mb-8 leading-tight">
              Why Choose 
              <span className="text-cake-primary"> Sweet Dreams</span>
            </h2>
            
            <div className="space-y-6 text-cake-text/80 font-quicksand leading-relaxed">
              <p className="text-lg">
                Creating magical moments through handcrafted cakes for over a decade in Kenya.
              </p>
              
              <p className="text-lg">
                From birthdays to weddings, we bring your sweetest dreams to life with quality, 
                creativity, and that personal touch.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={feature.title}
                className="bg-white/80 backdrop-blur-sm border border-pastel-pink/30 rounded-3xl hover:shadow-xl transition-all duration-500 animate-on-scroll"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cake-primary to-cake-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-cake-text" />
                  </div>
                  <h3 className="text-lg font-playfair font-semibold text-cake-text mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-cake-text/70 font-quicksand text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 animate-on-scroll">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "5000+", label: "Happy Customers" },
              { number: "15000+", label: "Cakes Created" },
              { number: "4.9", label: "Average Rating" }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-playfair font-bold text-cake-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-cake-text/70 font-quicksand font-medium text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CakeAbout;
