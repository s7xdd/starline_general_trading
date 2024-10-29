import About from "./components/About";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Statistics from "./components/Statistics";

export default function Home() {

  return (
    <main>
      <Hero/>
      <Statistics/>
      <About/>
      <Services/>
    </main>
      
  );
}
