import React from 'react';
import Hero from './components/Hero';
import QuoteForm from './components/QuoteForm'; // 🆕 Add this line


export default function Home() {
  return (
    <>
      <Hero />
      <div id="quote" className="flex justify-center py-10 bg-white">
        <QuoteForm />
      </div>
    </>
  );
}
