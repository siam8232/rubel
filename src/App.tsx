import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { BentoGrid } from './components/BentoGrid';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-orange-500/20 selection:text-orange-900 dark:selection:bg-orange-500/30 dark:selection:text-orange-200 transition-colors duration-300">
        {/* Background Decorative Ambient Gradients */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-0 left-1/4 w-[450px] h-[450px] bg-orange-500/5 dark:bg-orange-500/5 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-500/5 dark:bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-amber-500/5 dark:bg-amber-500/5 rounded-full blur-3xl" />
          
          {/* Subtle grid mesh */}
          <div
            className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
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
    </ThemeProvider>
  );
}
