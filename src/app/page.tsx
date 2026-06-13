import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Collection from "@/components/Collection";
import Booking from "@/components/Booking";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Collection />
      <Booking />
      <Testimonials />
      <Footer />
    </main>
  );
}
