import React, { lazy, Suspense } from "react";

const About = lazy(() => import("./components/About"));
const Client = lazy(() => import("./components/Client"));
const Hero = lazy(() => import("./components/Hero"));
const Quote = lazy(() => import("./components/Quote"));
const Services = lazy(() => import("./components/Services"));
const Statistics = lazy(() => import("./components/Statistics"));

export default function Home() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <Statistics />
        <About />
        <Services />
        <Client />
        <Quote />
      </Suspense>
    </main>
  );
}
