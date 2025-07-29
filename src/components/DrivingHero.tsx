import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Users } from "lucide-react";

const DrivingHero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1500&q=80')"
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/80"></div>
      </div>
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-red-600">
                <Award className="h-5 w-5" />
                <span className="text-sm font-medium">NTSA Approved</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight drop-shadow-lg">
                Start Driving <span className="text-red-600 block">Today</span>
              </h1>
              <p className="text-lg text-gray-200 max-w-lg mx-auto lg:mx-0 drop-shadow">
                Get your license fast. Professional instructors. Modern cars.
              </p>
            </div>
            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 justify-center lg:justify-start">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm text-white">Certified</span>
              </div>
              <div className="flex items-center space-x-2 justify-center lg:justify-start">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm text-white">Expert Instructors</span>
              </div>
              <div className="flex items-center space-x-2 justify-center lg:justify-start">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm text-white">Modern Vehicles</span>
              </div>
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white shadow-lg"
                onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Enroll Now
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600 shadow-lg"
                onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Courses
              </Button>
            </div>
            {/* Stats */}
            <div className="flex items-center space-x-8 pt-4 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">1500+</div>
                <div className="text-sm text-gray-300">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">95%</div>
                <div className="text-sm text-gray-300">Pass Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">10+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>
          {/* Right Content - Hero Image Placeholder (optional, can be removed for a cleaner look) */}
        </div>
      </div>
    </section>
  );
};

export default DrivingHero;