
import CakeNavigation from "@/components/CakeNavigation";
import CakeHero from "@/components/CakeHero";
import CakeWorkDone from "@/components/CakeWorkDone";
import CakeGallery from "@/components/CakeGallery";
import CakeAbout from "@/components/CakeAbout";
import CakeTypes from "@/components/CakeTypes";
import CakeContact from "@/components/CakeContact";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pastel-cream to-pastel-pink">
      <CakeNavigation />
      <CakeHero />
      <CakeWorkDone />
      <CakeGallery />
      <CakeAbout />
      <CakeTypes />
      <CakeContact />
    </div>
  );
};

export default Index;
