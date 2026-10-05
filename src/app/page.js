import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PersonalAI from "@/components/PersonalAI";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className="relative text-white">
      <Navbar />
      <main id="main-content">
        <Hero />
        <Projects />
        <Experience />
        <About />
        <PersonalAI />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
