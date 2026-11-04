import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Experience from "@/app/components/Experience";
import Skills from "@/app/components/Skills";
import About from "@/app/components/About";
import Portfolio from "@/app/components/Portfolio";
import Contact from "@/app/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Portfolio />
      <Contact />
    </main>
  );
}
