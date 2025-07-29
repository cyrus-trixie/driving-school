
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Heart, Share2 } from "lucide-react";

const Gallery = () => {
  const tattooCategories = [
    {
      name: "Realism",
      count: 45,
      image: "https://images.unsplash.com/photo-1565058379802-bbe93b2dfd52?w=400&h=400&fit=crop",
    },
    {
      name: "Traditional",
      count: 38,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=400&fit=crop",
    },
    {
      name: "Geometric",
      count: 32,
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=400&fit=crop",
    },
    {
      name: "Watercolor",
      count: 27,
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop",
    },
    {
      name: "Black & Grey",
      count: 52,
      image: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?w=400&h=400&fit=crop",
    },
    {
      name: "Neo Traditional",
      count: 29,
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
    }
  ];

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Work
          </h2>
          <p className="text-lg text-gray-600">
            Browse our latest tattoo designs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tattooCategories.map((category, index) => (
            <Card 
              key={category.name}
              className="group overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Eye className="w-6 h-6 text-white cursor-pointer hover:text-red-400" />
                    <Heart className="w-6 h-6 text-white cursor-pointer hover:text-red-400" />
                    <Share2 className="w-6 h-6 text-white cursor-pointer hover:text-red-400" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
                  <Badge className="bg-red-500 text-white border-none">
                    {category.count}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg font-medium">
            View All Work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
