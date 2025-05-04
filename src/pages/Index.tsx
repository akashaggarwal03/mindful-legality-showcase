
import React from 'react';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import Hero from '@/components/Home/Hero';
import About from '@/components/Home/About';
import PracticeAreas from '@/components/Home/PracticeAreas';
import Team from '@/components/Home/Team';
import Contact from '@/components/Home/Contact';
import DisclaimerModal from '@/components/ui/disclaimer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <DisclaimerModal/>
      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
