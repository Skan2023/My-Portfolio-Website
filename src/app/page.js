import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <div id="hero">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <Skills />
        <div id="work">
          <Experience />
          <Projects />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="contact">
          <Footer />
        </div>
      </main>
    </>
  );
}
