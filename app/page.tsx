import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import ProblemSolution from "./components/ProblemSolution";
import Services from "./components/Services";
import Process from "./components/Process";
import Impact from "./components/Impact";
import Results from "./components/Results";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30">
      <Navbar />
      <Hero />
      <TrustedBy />
      <ProblemSolution />
      <Services />
      <Process />
      <Impact />
      <Results />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
