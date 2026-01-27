import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { CompanyDetailsSection } from "@/components/companydetailssection";
import { FounderSection } from "@/components/founder-section";
import { ServicesSection } from "@/components/services-section";
import { ProjectsSection } from "@/components/projects-section";
import { BuildingsSection } from "@/components/building-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CompanyDetailsSection />
      <FounderSection />
      <ServicesSection />
      <ProjectsSection />
      <BuildingsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
