import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructor";
import MusicSchoolTestimonials from "@/components/TestimonialCard";
import TestimonialCard from "@/components/TestimonialCard";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChosseUs from "@/components/WhyChosseUs";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      
       <HeroSection/>
       <FeaturedCourses/>
       <WhyChosseUs/>
       <MusicSchoolTestimonials/>
       <UpcomingWebinars/>
       <Instructors/>
       <Footer/>
    </main>
  );
}
