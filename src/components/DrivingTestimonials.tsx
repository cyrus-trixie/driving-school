import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Users, Award } from "lucide-react";

const DrivingTestimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mwangi",
      age: 24,
      course: "Category B - Car License",
      rating: 5,
      date: "January 2024",
      quote: "DriveSafe Academy made learning to drive so easy and stress-free! The instructors are incredibly patient and professional. I passed my test on the first try thanks to their excellent training.",
      achievement: "Passed on First Try"
    },
    {
      name: "David Kiprotich",
      age: 32,
      course: "Category C - Commercial License",
      rating: 5,
      date: "December 2023",
      quote: "As someone switching to commercial driving, I needed thorough training. The instructors here know their stuff and the practical sessions were very comprehensive. Now I'm confidently driving trucks!",
      achievement: "Career Change Success"
    },
    {
      name: "Grace Akinyi",
      age: 28,
      course: "Category A - Motorcycle License",
      rating: 5,
      date: "February 2024",
      quote: "I was nervous about learning to ride a motorcycle, but the instructors made me feel safe and confident. The bikes they use for training are well-maintained and perfect for beginners.",
      achievement: "Overcame Fear"
    },
    {
      name: "John Mutua",
      age: 45,
      course: "Refresher Course",
      rating: 5,
      date: "November 2023",
      quote: "Hadn't driven in 10 years and needed to refresh my skills. The refresher course was exactly what I needed. Patient instructors and flexible scheduling worked perfectly for my busy life.",
      achievement: "Skills Refreshed"
    },
    {
      name: "Mary Wanjiru",
      age: 22,
      course: "Category B - Car License",
      rating: 5,
      date: "March 2024",
      quote: "Best decision I made! The theory classes were engaging and the practical lessons were thorough. The instructors really care about your success. Highly recommend DriveSafe Academy!",
      achievement: "Excellent Results"
    },
    {
      name: "Peter Ochieng",
      age: 29,
      course: "Defensive Driving",
      rating: 5,
      date: "January 2024",
      quote: "The defensive driving course opened my eyes to so many safety techniques I never knew. This training has made me a much safer and more confident driver on Kenyan roads.",
      achievement: "Safety Expert"
    }
  ];

  const stats = [
    { number: "95%", label: "Pass Rate on First Try" },
    { number: "4.9/5", label: "Average Student Rating" },
    { number: "1500+", label: "Successful Graduates" },
    { number: "99%", label: "Would Recommend" }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="h-6 w-6 text-primary" />
            <span className="text-primary font-medium">Student Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our successful graduates have to say about their experience at DriveSafe Academy.
          </p>
        </div>

        {/* Success Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 relative">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-20">
                  <Quote className="h-8 w-8 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">({testimonial.rating}/5)</span>
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>

                {/* Student Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">Age {testimonial.age} • {testimonial.date}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Badge variant="outline" className="text-xs">
                      {testimonial.course}
                    </Badge>
                    <div className="flex items-center space-x-2">
                      <Award className="h-4 w-4 text-success" />
                      <span className="text-xs text-success font-medium">{testimonial.achievement}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-2xl font-bold text-foreground">4.9/5</span>
              </div>
              <p className="text-muted-foreground mb-6">
                Based on 300+ verified student reviews across all courses
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Join Our Success Stories
                </button>
                <button 
                  className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Read More Reviews
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DrivingTestimonials;