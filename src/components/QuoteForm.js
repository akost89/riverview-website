// src/components/QuoteForm.js

import React, { useState } from "react";

const WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbzpaqEAOtyiVkTDW7KKI1K0jOpPM0X3w4Xd4Nyq41U3jg_VAfGDLmf691t9btcM5ktNWA/exec";

export default function QuoteForm() {
  const [name, setName]       = useState("");
  const [email, setEmail]     = useState("");
  const [phone, setPhone]     = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus]   = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending…");

    const params = new URLSearchParams({ name, email, phone, message });
    const url    = `${WEB_APP_URL}?${params.toString()}`;

    try {
      await fetch(url, { method: "GET", mode: "no-cors" });
      setStatus("✅ Quote request sent!");
      setName(""); setEmail(""); setPhone(""); setMessage("");
    } catch {
      setStatus("❌ There was an error. Please try again.");
    }
  };

  return (
    <section id="quote" className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Request Your Free Quote
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
          <textarea
            placeholder="Tell us about your project..."
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
            rows="4"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition"
          >
            Get My Quote
          </button>
        </form>
        {status && (
          <p className="mt-4 text-center text-gray-700">{status}</p>
        )}
      </div>
    </section>
  );
}
