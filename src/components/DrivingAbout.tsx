import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Car, Shield, CheckCircle, Clock } from "lucide-react";

const DrivingAbout = () => {
  const stats = [
    { number: "10+", label: "Years Experience", icon: Clock },
    { number: "1500+", label: "Students Trained", icon: Users },
    { number: "15", label: "Modern Vehicles", icon: Car },
    { number: "95%", label: "Pass Rate", icon: Award },
  ];

  const certifications = [
    "NTSA Approved Driving School",
    "Licensed Driving Instructors",
    "ISO 9001:2015 Certified",
    "Kenya Bureau of Standards Approved",
  ];

  const instructors = [
    {
      name: "John Kamau",
      qualification: "Senior Driving Instructor",
      experience: "8 years",
      specialization: "Category B & C",
      certification: "NTSA Licensed"
    },
    {
      name: "Mary Wanjiku",
      qualification: "Motorcycle Instructor",
      experience: "5 years",
      specialization: "Category A",
      certification: "NTSA Licensed"
    },
    {
      name: "Peter Ochieng",
      qualification: "Commercial Vehicle Instructor",
      experience: "12 years",
      specialization: "Category C, D, E",
      certification: "NTSA Licensed"
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="h-6 w-6 text-red-600" />
            <span className="text-red-600 font-medium">Trusted & Certified</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            About DriveSafe Academy
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto">
            We are Kenya's premier driving school with over a decade of experience in providing quality driving education. Our NTSA-approved curriculum and expert instructors ensure you learn to drive safely and confidently.
          </p>
        </div>
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="text-center hover:shadow-md transition-shadow bg-black">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-white">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* About Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">Why Choose DriveSafe Academy?</h3>
              <div className="space-y-4 text-black">
                <p>
                  Established in 2014, DriveSafe Academy has been at the forefront of driving education in Kenya. We pride ourselves on providing comprehensive, safe, and effective driving instruction that prepares our students for real-world driving situations.
                </p>
                <p>
                  Our modern fleet of vehicles and experienced instructors ensure that every student receives personalized attention and quality training. We follow strict NTSA guidelines and continuously update our curriculum to meet current road safety standards.
                </p>
              </div>
            </div>
            {/* Certifications */}
            <div>
              <h4 className="text-lg font-semibold text-black mb-4">Our Certifications</h4>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                    <span className="text-black">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Mission */}
            <div className="bg-black p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-white mb-3">Our Mission</h4>
              <p className="text-white">
                To provide world-class driving education that creates confident, safe, and responsible drivers who contribute to road safety in Kenya and beyond.
              </p>
            </div>
          </div>
          {/* Instructors */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-6">Meet Our Expert Instructors</h3>
            <div className="space-y-6">
              {instructors.map((instructor, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow bg-black">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="text-lg font-semibold text-white">{instructor.name}</h4>
                            <p className="text-sm text-white">{instructor.qualification}</p>
                          </div>
                          <Badge variant="outline" className="text-xs text-white border-white">
                            {instructor.certification}
                          </Badge>
                        </div>
                        <div className="space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span className="text-white">Experience:</span>
                            <span className="font-medium text-white">{instructor.experience}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-white">Specialization:</span>
                            <span className="font-medium text-white">{instructor.specialization}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-red-600 px-8 py-4 rounded-full">
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-white" />
              <span className="text-white font-medium">NTSA Approved</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-white" />
              <span className="text-white font-medium">Fully Licensed</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-white" />
              <span className="text-white font-medium">Quality Assured</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrivingAbout;