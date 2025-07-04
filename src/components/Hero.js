// src/components/Hero.js
import QuoteForm from './QuoteForm';

export default function Hero() {
  return (
    <section className="bg-green-50 min-h-screen flex items-center justify-center text-center px-4">
      <div className="max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-800">
          Landscaping & Junk Removal in VA, MD & DC
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-6">
          From lawn care and mulch delivery to junk cleanouts and moving help — Riverview Company has you covered.
        </p>
        <a
          href="#quote"
          className="inline-block bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
        >
          Request a Free Quote
        </a>
        <div className="mt-4 text-sm text-gray-500">
          ✓ Fully insured · ✓ Fast response · ✓ Locally owned
        </div>
      </div>
    </section>
  );
}
