
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import LivingSpaces from './components/LivingSpaces';
import Entrances from './components/Entrances';
import Comparison from './components/Comparison';
import Workflow from './components/Workflow';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AISmartConsultant from './components/AISmartConsultant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ValueProps />
        <LivingSpaces />
        <Entrances />
        <Comparison />
        <Workflow />
        <div id="contact-section">
          <ContactForm />
        </div>
      </main>
      <Footer />
      <AISmartConsultant />
    </div>
  );
};

export default App;
