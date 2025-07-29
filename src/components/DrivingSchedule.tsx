import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Phone } from "lucide-react";

const DrivingSchedule = () => {
  const scheduleData = [
    {
      day: "Monday - Friday",
      timeSlots: [
        { time: "8:00 AM - 10:00 AM", type: "Theory Classes", available: true },
        { time: "10:30 AM - 12:30 PM", type: "Practical Lessons", available: true },
        { time: "2:00 PM - 4:00 PM", type: "Practical Lessons", available: true },
        { time: "4:30 PM - 6:30 PM", type: "Theory Classes", available: true },
      ]
    },
    {
      day: "Saturday",
      timeSlots: [
        { time: "8:00 AM - 10:00 AM", type: "Practical Lessons", available: true },
        { time: "10:30 AM - 12:30 PM", type: "Theory Classes", available: true },
        { time: "2:00 PM - 4:00 PM", type: "Practical Lessons", available: false },
      ]
    },
    {
      day: "Sunday",
      timeSlots: [
        { time: "9:00 AM - 11:00 AM", type: "Practical Lessons", available: true },
        { time: "2:00 PM - 4:00 PM", type: "Make-up Classes", available: true },
      ]
    }
  ];

  const intakeDates = [
    { month: "February 2024", dates: ["5th", "12th", "19th", "26th"], available: true },
    { month: "March 2024", dates: ["4th", "11th", "18th", "25th"], available: true },
    { month: "April 2024", dates: ["1st", "8th", "15th", "22th", "29th"], available: true },
  ];

  return (
    <section id="schedule" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Calendar className="h-6 w-6 text-primary" />
            <span className="text-primary font-medium">Flexible Scheduling</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Class Schedule & Intake Dates
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our flexible schedule options. We offer both theory and practical lessons throughout the week to fit your lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Weekly Schedule */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">Weekly Class Schedule</h3>
            
            {scheduleData.map((daySchedule, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>{daySchedule.day}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {daySchedule.timeSlots.map((slot, slotIndex) => (
                      <div key={slotIndex} className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                        <div className="space-y-1">
                          <div className="font-medium text-foreground">{slot.time}</div>
                          <div className="text-sm text-muted-foreground">{slot.type}</div>
                        </div>
                        <Badge 
                          variant={slot.available ? "default" : "secondary"}
                          className={slot.available ? "bg-success text-success-foreground" : ""}
                        >
                          {slot.available ? "Available" : "Full"}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Intake Dates */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">Upcoming Intake Dates</h3>
            
            {intakeDates.map((intake, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg text-primary">{intake.month}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {intake.dates.map((date, dateIndex) => (
                      <div key={dateIndex} className="p-3 bg-white border rounded-lg text-center hover:border-primary transition-colors cursor-pointer">
                        <div className="font-medium text-foreground">{date}</div>
                        <div className="text-xs text-success">Available</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Booking Section */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <h4 className="text-lg font-semibold text-foreground">Book Your Appointment</h4>
                  <p className="text-muted-foreground text-sm">
                    Ready to start your driving journey? Book a free assessment or schedule your first lesson.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      className="flex-1"
                      onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Book Assessment
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call Us
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Location Info */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <MapPin className="h-5 w-5 text-primary" />
                <h4 className="text-lg font-semibold">Training Location</h4>
              </div>
              <p className="text-muted-foreground mb-4">
                Kiambu Road, Opposite Shell Petrol Station<br />
                Next to Equity Bank, Nairobi
              </p>
              <div className="text-sm text-muted-foreground">
                <p>Ample parking available • Easy access by public transport</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DrivingSchedule;