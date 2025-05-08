import React from 'react';
import Features from '@/components/Features';
import Leading from '@/components/Leading';
import Tokenomics from '@/components/Tokenomics';
import FAQ from '@/components/FAQ';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      
      <section id="features" className="w-full">
        <Features />
      </section>
      
      <section id="lol-forge-leading" className="w-full">
        <Leading />
      </section>
      
      <section id="tokenomics" className="w-full">
        <Tokenomics />
      </section>
      
      <section id="faq" className="w-full">
        <FAQ />
      </section>
      
      <Footer />
    </main>
  );
}
