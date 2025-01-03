import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutUs } from './pages/AboutUs';
import { Services } from './pages/Services';
import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';

function App() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <div id="home">
        <Hero />
      </div>
      <div id="about-us">
        <AboutUs />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </main>
  );
}

export default App;