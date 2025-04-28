import { useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import EventsSection from "@/components/events-section";
import BlogSection from "@/components/blog-section";
import AirbnbSection from "@/components/airbnb-section";
import TeamSection from "@/components/team-section";
import GetInvolvedSection from "@/components/get-involved-section";
import TestimonialsSection from "@/components/testimonials-section";
import GallerySection from "@/components/gallery-section";
import ContactSection from "@/components/contact-section";

const Home = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Layout>
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <BlogSection />
        <AirbnbSection />
        <TeamSection />
        <GetInvolvedSection />
        <TestimonialsSection />
        <GallerySection />
        <ContactSection />
      </Layout>
    </motion.div>
  );
};

export default Home;
