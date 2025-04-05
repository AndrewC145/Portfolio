import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Header />
      <main className="text-white">
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
    </>
  );
}

export default App;
