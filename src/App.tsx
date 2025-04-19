import { SpeedInsights } from "@vercel/speed-insights/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="text-white">
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <SpeedInsights />
      </main>
      <Footer />
    </>
  );
}

export default App;
