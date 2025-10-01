"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <form className="space-y-4 max-w-lg mx-auto">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full border p-3 rounded"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full border p-3 rounded"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <textarea
        placeholder="Your Message"
        className="w-full border p-3 rounded h-32"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />
      <button className="bg-orange-600 text-white px-6 py-3 rounded hover:bg-orange-700 w-full">
        Send
      </button>
    </form>
  );
}
