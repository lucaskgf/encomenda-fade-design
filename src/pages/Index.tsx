
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { BackgroundShapes } from "@/components/DecorativeShapes";
import AnimationController from "@/components/AnimationController";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimationController />
      <BackgroundShapes />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <HowItWorksSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
