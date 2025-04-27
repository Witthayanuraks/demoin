import React from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Countdown from './components/Countdown';
import Schedule from './components/Schedule';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import './index.css';

const FloralDivider = () => (
  <div className="w-full py-6 flex justify-center">
    <svg width="120" height="24" viewBox="0 0 120 24" fill="none" className="text-pink-300">
      <path d="M0 12C10 12 10 0 20 0C30 0 30 12 40 12C50 12 50 0 60 0C70 0 70 12 80 12C90 12 90 0 100 0C110 0 110 12 120 12" stroke="currentColor" strokeWidth="2"/>
      <path d="M30 12L36 6M42 12L36 18M90 12L84 6M78 12L84 18" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  </div>
);

const HeartOrnament = () => (
  <div className="absolute -right-4 -top-4 text-pink-200">
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
    </svg>
  </div>
);

function App() {
  return (
    <div className="font-sans bg-pink-50 min-h-screen relative overflow-hidden">
      <div className="fixed -left-20 top-1/4 text-pink-100 opacity-60 -rotate-12">
        <svg width="200" height="200" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" fill="currentColor"/>
        </svg>
      </div>
      
      <div className="fixed -right-20 bottom-1/3 text-pink-100 opacity-60 rotate-12">
        <svg width="200" height="200" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" fill="currentColor"/>
        </svg>
      </div>

      <div className="relative z-10">
        <Header />
        
        <FloralDivider />
        <div className="relative">
          <HeartOrnament />
          <Gallery />
        </div>
        
        <FloralDivider />
        <Countdown />
        
        <FloralDivider />
        <Schedule />
        
        <FloralDivider />
        <MapSection />
        
        <FloralDivider />
        <Footer />
      </div>
    </div>
  );
}

export default App;