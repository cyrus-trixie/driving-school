import DrivingNavigation from "@/components/DrivingNavigation";
import DrivingHero from "@/components/DrivingHero";
import DrivingCourses from "@/components/DrivingCourses";
import DrivingPricing from "@/components/DrivingPricing";
import DrivingSchedule from "@/components/DrivingSchedule";
import DrivingAbout from "@/components/DrivingAbout";
import DrivingApplication from "@/components/DrivingApplication";
import DrivingGallery from "@/components/DrivingGallery";
import DrivingTestimonials from "@/components/DrivingTestimonials";
import DrivingContact from "@/components/DrivingContact";

const DrivingIndex = () => {
  return (
    <div className="min-h-screen bg-background">
      <DrivingNavigation />
      <DrivingHero />
      <DrivingCourses />
      <DrivingPricing />
      <DrivingGallery />
      <DrivingSchedule />
      <DrivingAbout />
      <DrivingApplication />
      <DrivingTestimonials />
      <DrivingContact />
    </div>
  );
};

export default DrivingIndex;