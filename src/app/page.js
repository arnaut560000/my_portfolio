import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PersonalAI from "@/components/PersonalAI";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative text-white">
      <Navbar />
      <Hero />
      <About />
      <PersonalAI />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
