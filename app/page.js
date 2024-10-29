import About from "./components/About";
import Client from "./components/Client";
import Hero from "./components/Hero";
import Quote from "./components/Quote";
import Services from "./components/Services";
import Statistics from "./components/Statistics";

export default function Home() {

  return (
    <main>
      <Hero/>
      <Statistics/>
      <About/>
      <Services/>
      <Client/>
      <Quote/>
    </main>
      
  );
}
