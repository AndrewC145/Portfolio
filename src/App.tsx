import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      <Header />
      <main className="text-white">
        <Hero />
        <About />
        <Experience />
      </main>
    </>
  );
}

export default App;
