import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Users, Car, GraduationCap, Award } from "lucide-react";

const DrivingGallery = () => {
  const galleryCategories = [
    {
      title: "Student Graduations",
      icon: GraduationCap,
      images: [
        { title: "Graduation Ceremony 2024", description: "Celebrating our successful students", url: "https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/473372196_1004931754990510_165313056347614450_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=3AAXHD6FJfgQ7kNvwG7bCzD&_nc_oc=Adl506QYKVfKDRWAB_BgE-x6SzCP-qelGytIJrd2jBRPIENZXtDYAyoY4HKd6QYZk90&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=yiiC1DTycSpMXVia_XiEHg&oh=00_AfQFXYI5ZTLWLudpbbX_dHgZWAQCyTCwmpTQTs2DsfdCMQ&oe=688ED9AB" },
        { title: "License Recipients", description: "New drivers receiving their certificates", url: "https://images.template.net/484941/Driving-School-Certificate-Template-edit-online.png" },
        { title: "Achievement Awards", description: "Outstanding students recognition", url: "https://digitaldrivingschool.co.ke/img/cyn.jpg" },
      ]
    },
    {
      title: "Training Sessions",
      icon: Users,
      images: [
        { title: "Practical Lessons", description: "Students learning real-world driving skills", url: "https://www.capitalfm.co.ke/business/files/2023/09/IMG-20230903-WA0001.jpg" },
        { title: "Theory Classes", description: "Interactive classroom learning sessions", url: "https://pictures-kenya.jijistatic.com/74074039_MzAwLTQwMC0xMzhlNDU4OTIx.webp" },
        { title: "Parking Practice", description: "Mastering parking and maneuvering", url: "https://bluebelldrivingschool.com/wp-content/uploads/BACK-OF-CAR-IN-CONES-ANGLE-scaled.jpg" },
      ]
    },
    {
      title: "Our Fleet",
      icon: Car,
      images: [
        { title: "Training Cars", description: "Modern, well-maintained vehicles for learning", url: "https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/486641412_1057221446428207_2274444615844101973_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=BACsaCrVhxcQ7kNvwFiDCwT&_nc_oc=Adkd_TvzIwBFAKfgNyCqCAgB6a3i5Up0fKCB6B6rwpqqX1TJJLFqh7ocQB2QYevKreA&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=ukVFNhtALo4oBD3sttYtlA&oh=00_AfR-C8E6JTz3Wy_Yx74k-ea476TjXDM6fSeOrXd1k1-R5w&oe=688EEF2F" },
        { title: "Motorcycle Training", description: "Category A training bikes", url: "https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/473582541_1004931751657177_5420589585286838637_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ccHXUB7V4pEQ7kNvwFKx2g8&_nc_oc=AdkWd5BXB6iAYayKdGfNrfUWz1X-fvv2XcTsSjfVrU1U2LdMvhW_RcGNIqwC9cLKw0E&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=cobc5LgGL7JKCbj4qBc82w&oh=00_AfThWM7H64I-mgyv-k0PZm2QTIXIp-UDfpua7Fxb76si2Q&oe=688EED79" },
        { title: "Commercial Vehicles", description: "Trucks and buses for commercial training", url: "https://www.topride.co.ke/static/images/IMG_1184.JPG" },
      ]
    },
    {
      title: "Instructors",
      icon: Award,
      images: [
        { title: "Expert Instructors", description: "Our certified and experienced team", url: "https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/480779699_9075238299179668_2451838465230332864_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Sks94WRQamQQ7kNvwELerpV&_nc_oc=AdmkHNmnJVFRyX88tMtWezJfbpNyby2eikkJtznQAFrdzZU8Cs-pk_SbmfQwR8oxmwM&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=qA5wSP9nPRgCzelOKH-hSg&oh=00_AfQIdY1hGtVK5fmamRsUSqUqSVjaQEoKmfVVWMyj_-JMQA&oe=688EBE8C" },
        { title: "Training Staff", description: "Dedicated professionals at your service", url: "https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/480602418_9075238229179675_9172128654268937179_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zHOg0ncqP0sQ7kNvwEqefV4&_nc_oc=AdmqAv1XHJv0o42b27EdydB652E49kwztIzHU6WUEDIGz34ECpVMW9QcQ89rO8E_5K4&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=aNjaKRjhbQ_SpyTKjv6KVg&oh=00_AfR4JYRNybPi6mlEXfjHjskzagVwJUti95H6ds7YpAGz0A&oe=688EC800" },
        { title: "Instructor Certification", description: "Continuous professional development", url: "https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/480860849_9075238292513002_6694897528741440309_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Ly6aJU4AhC8Q7kNvwGrqlDs&_nc_oc=Adlo1GxHPTlzpobZ9R-A0AxpjwSn9Ojw7CmVR3F_o7BNbOen1QA3rhTkMDovFW_rg-g&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=rC-TuMQsZyjQ-8pE4svNtg&oh=00_AfSuqQ3UNQkik5HLZ-9j9cfubdwaUiZrNBtWvhuvIVGJSA&oe=688EC87A" },
      ]
    }
  ];

  const testimonialImages = [
    {
      name: "Sarah Mwangi",
      course: "Category B",
      quote: "Best driving school in Nairobi! The instructors are patient and professional.",
      rating: 5,
      avatar: "https://plus.unsplash.com/premium_photo-1715876267697-800a09450c4b?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://plus.unsplash.com/premium_photo-1715876267697-800a09450c4b?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "David Kiprotich",
      course: "Category C",
      quote: "Excellent training for commercial vehicles. Now I'm a confident truck driver.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBwZXJzb258ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "Grace Akinyi",
      course: "Category A",
      quote: "Learned to ride a motorcycle safely. Great experience with DriveSafe Academy.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.images.map((image, imageIndex) => (
                    <Card key={imageIndex} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                      <div className="aspect-square relative overflow-hidden">
                        <img src={image.url} alt={image.title} className="w-full h-full object-cover rounded-t-lg group-hover:scale-110 transition-transform duration-500" />
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="text-center text-white p-6">
                            <p className="font-bold text-lg">{image.title}</p>
                            <p className="text-base mt-2 opacity-90">{image.description}</p>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonialImages.map((testimonial, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow p-2">
                <CardContent className="p-8">
                  {/* Student Photo */}
                  <div className="w-28 h-28 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden border-4 border-red-600">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  
                  {/* Rating */}
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-muted-foreground text-base mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>

                  {/* Student Info */}
                  <div>
                    <p className="font-bold text-foreground text-lg">{testimonial.name}</p>
                    <Badge variant="outline" className="text-sm mt-3">
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