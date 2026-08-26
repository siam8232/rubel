import React from 'react';
import { Navbar } from './components/Navbar';
import { BentoGrid } from './components/BentoGrid';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 selection:bg-orange-500/30 selection:text-orange-200">
      {/* Background Decorative Ambient Gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl" />
        {/* Subtle grid mesh */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      {/* Main Top Navbar */}
      <Navbar />

      {/* Bento Grid Content */}
      <main id="main-content" className="relative z-10">
        <BentoGrid />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}

