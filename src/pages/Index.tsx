
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SemesterGrid from "@/components/SemesterGrid";
import FeaturesSection from "@/components/FeaturesSection";
import QuizSection from "@/components/QuizSection";
import ResourcesSection from "@/components/ResourcesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background cyber-grid">
      <Header />
      <HeroSection />
      <SemesterGrid />
      <FeaturesSection />
      <QuizSection />
      <ResourcesSection />
      <Footer />
    </div>
  );
};

export default Index;
