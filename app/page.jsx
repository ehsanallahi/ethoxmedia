import { Navbar } from "@/components/header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutUsSection from "@/components/AboutUsSection";
import ContactUsSection from "@/components/ContactUsSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <AboutUsSection />
      <BlogSection />
      <ContactUsSection />
      <Footer />
    </main>
  );
}