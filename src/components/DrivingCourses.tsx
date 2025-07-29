import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bike, Car, Truck, RefreshCw, Shield, Award } from "lucide-react";

const DrivingCourses = () => {
  const courses = [
    {
      category: "Category A",
      title: "Motorcycle License",
      icon: Bike,
      description: "Learn to ride motorcycles safely and confidently. Covers basic to advanced riding techniques.",
      duration: "2-3 weeks",
      lessons: "8-12 lessons",
      popular: false,
    },
    {
      category: "Category B",
      title: "Car License",
      icon: Car,
      description: "Most popular course. Learn to drive cars with manual or automatic transmission.",
      duration: "4-6 weeks",
      lessons: "20-30 lessons",
      popular: true,
    },
    {
      category: "Category C, D, E",
      title: "Commercial Vehicles",
      icon: Truck,
      description: "Heavy vehicles, matatus, trucks, and buses. For professional drivers.",
      duration: "6-8 weeks",
      lessons: "30-40 lessons",
      popular: false,
    },
    {
      category: "Refresher",
      title: "Refresher Course",
      icon: RefreshCw,
      description: "Perfect for licensed drivers who want to improve their skills or haven't driven in a while.",
      duration: "1-2 weeks",
      lessons: "5-10 lessons",
      popular: false,
    },
    {
      category: "Defensive",
      title: "Defensive Driving",
      icon: Shield,
      description: "Advanced safety techniques, hazard awareness, and accident prevention strategies.",
      duration: "1 week",
      lessons: "5-8 lessons",
      popular: false,
    },
  ];

  return (
    <section id="courses" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Award className="h-6 w-6 text-red-600" />
            <span className="text-red-600 font-medium">NTSA Approved Courses</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Choose Your Driving Course
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            We offer comprehensive driving courses for all license categories. All our courses follow NTSA-approved curriculum and are taught by certified instructors.
          </p>
        </div>
        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const IconComponent = course.icon;
            return (
              <Card key={index} className="relative group hover:shadow-lg transition-all duration-300 border-2 border-black bg-white">
                {course.popular && (
                  <div className="absolute -top-3 left-6 z-10">
                    <Badge className="bg-red-600 text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 w-16 h-16 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-200 transition-colors">
                    <IconComponent className="h-8 w-8 text-red-600" />
                  </div>
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-xs border-red-600 text-red-600">
                      {course.category}
                    </Badge>
                    <CardTitle className="text-xl text-black">{course.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-black text-sm leading-relaxed">
                    {course.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-black">Duration:</span>
                      <span className="font-medium text-black">{course.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-black">Lessons:</span>
                      <span className="font-medium text-black">{course.lessons}</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button 
                      className="w-full" 
                      variant={course.popular ? "default" : "outline"}
                      onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Enroll in This Course
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        {/* NTSA Certification */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-3 bg-red-600 px-6 py-3 rounded-full">
            <Award className="h-5 w-5 text-white" />
            <span className="text-white font-medium">All courses are NTSA approved and follow official curriculum</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrivingCourses;