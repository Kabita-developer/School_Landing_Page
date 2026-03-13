import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Activities from './components/Activities';
import TwitterSection from './components/TwitterSection';
import FeatureCards from './components/FeatureCards';
import Partners from './components/Partners';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-secondary selection:text-primary">
      {/* Navbar component now contains the Header and Sticky Nav */}
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Welcome />
        <Activities />
        <TwitterSection />
        <FeatureCards />
        <Partners />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
