import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';     // ඔබේ කලින් තිබුණු Hero component එක
import About from './components/About';

import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#151515] text-white font-sans flex flex-col selection:bg-blue-500/30">
      <Navbar />
      
      {/* Home / Hero Section */}
      <div id="home" className="max-w-[1300px] mx-auto w-full px-6 pt-32 pb-10 md:px-12 md:pt-40 md:pb-12 flex-grow flex items-center">
        <Hero />
      </div>

      <About />
    
      <Skills />
      <Projects />
      <Contact />

      {/* Simple Footer */}
      <footer className="text-center py-6 text-gray-600 text-sm border-t border-white/5 mt-10">
        © {new Date().getFullYear()} Shenal Nikeshana Rajapaksha. All rights reserved.
      </footer>
    </div>
  );
}