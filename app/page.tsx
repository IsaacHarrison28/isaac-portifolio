import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Experience from "@/app/components/Experience";
import Skills from "@/app/components/Skills";
import About from "@/app/components/About";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      {/* Add Portfolio, Reviews, and Contact sections here */}
    </main>
  );
}
