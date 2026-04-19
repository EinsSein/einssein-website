import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Projects from "@/components/Projects";
import CalendarSection from "@/components/CalendarSection";
import InstagramSection from "@/components/InstagramSection";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Partners />
        <Projects />
        <CalendarSection />
        <InstagramSection />
        <Process />
        <Stats />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
