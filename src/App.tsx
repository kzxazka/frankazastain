import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Services from './components/Services.tsx';
import Portfolio from './components/Portfolio.tsx';
import Pricing from './components/Pricing.tsx';
import ContactForm from './components/ContactForm.tsx';
import FAQ from './components/FAQ.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="bg-brand-black text-white selection:bg-brand-purple selection:text-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Pricing />
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;