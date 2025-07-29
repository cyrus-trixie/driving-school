import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Users, Car, GraduationCap, Award } from "lucide-react";

const DrivingGallery = () => {
  const galleryCategories = [
    {
      title: "Student Graduations",
      icon: GraduationCap,
      images: [
        { title: "Graduation Ceremony 2024", description: "Celebrating our successful students" },
        { title: "License Recipients", description: "New drivers receiving their certificates" },
        { title: "Achievement Awards", description: "Outstanding students recognition" },
      ]
    },
    {
      title: "Training Sessions",
      icon: Users,
      images: [
        { title: "Practical Lessons", description: "Students learning real-world driving skills" },
        { title: "Theory Classes", description: "Interactive classroom learning sessions" },
        { title: "Parking Practice", description: "Mastering parking and maneuvering" },
      ]
    },
    {
      title: "Our Fleet",
      icon: Car,
      images: [
        { title: "Training Cars", description: "Modern, well-maintained vehicles for learning" },
        { title: "Motorcycle Training", description: "Category A training bikes" },
        { title: "Commercial Vehicles", description: "Trucks and buses for commercial training" },
      ]
    },
    {
      title: "Instructors",
      icon: Award,
      images: [
        { title: "Expert Instructors", description: "Our certified and experienced team" },
        { title: "Training Staff", description: "Dedicated professionals at your service" },
        { title: "Instructor Certification", description: "Continuous professional development" },
      ]
    }
  ];

  const testimonialImages = [
    {
      name: "Sarah Mwangi",
      course: "Category B",
      quote: "Best driving school in Nairobi! The instructors are patient and professional.",
      rating: 5
    },
    {
      name: "David Kiprotich",
      course: "Category C",
      quote: "Excellent training for commercial vehicles. Now I'm a confident truck driver.",
      rating: 5
    },
    {
      name: "Grace Akinyi",
      course: "Category A",
      quote: "Learned to ride a motorcycle safely. Great experience with DriveSafe Academy.",
      rating: 5
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Camera className="h-6 w-6 text-primary" />
            <span className="text-primary font-medium">Our Story in Pictures</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Gallery & Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a look at our training facilities, successful students, and the journey of learning to drive with DriveSafe Academy.
          </p>
        </div>

        {/* Gallery Categories */}
        <div className="space-y-16">
          {galleryCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="space-y-8">
                {/* Category Header */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {category.images.map((image, imageIndex) => (
                    <Card key={imageIndex} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                      <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                        {/* Placeholder for actual images */}
                        <div className="text-center text-primary/60">
                          <Camera className="h-12 w-12 mx-auto mb-2" />
                          <p className="text-sm font-medium">{image.title}</p>
                        </div>
                        
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="text-center text-white p-4">
                            <p className="font-medium">{image.title}</p>
                            <p className="text-sm mt-1 opacity-90">{image.description}</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Student Testimonials with Photos */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Happy Students</h3>
            <p className="text-muted-foreground">Hear from our successful graduates</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialImages.map((testimonial, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  {/* Student Photo Placeholder */}
                  <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  
                  {/* Rating */}
                  <div className="flex justify-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-muted-foreground text-sm mb-4 italic">
                    "{testimonial.quote}"
                  </p>

                  {/* Student Info */}
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <Badge variant="outline" className="text-xs mt-2">
                      {testimonial.course}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-secondary/30 p-8 rounded-2xl max-w-2xl mx-auto">
            <h4 className="text-xl font-bold text-foreground mb-4">
              Ready to Start Your Driving Journey?
            </h4>
            <p className="text-muted-foreground mb-6">
              Join hundreds of successful students who learned to drive with DriveSafe Academy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Enroll Now
              </button>
              <button 
                className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Visit Our School
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrivingGallery;