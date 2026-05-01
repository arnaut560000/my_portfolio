"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Facebook } from "lucide-react";

const contactEmail = "arnautAlfonsor8@gmail.com";

export default function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setStatus("Opening your email app...");
  }

  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="eyebrow mb-5">Contact</span>
            <h2 className="section-title">Open to collaboration, freelance work, and development opportunities.</h2>
          </div>
          <p className="max-w-xl text-sm uppercase leading-7 tracking-[0.2em] text-white/38">
            Interested in collaboration, freelance work, or development
            opportunities? Send me a message through my active contact channels.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="card-dark p-8 md:p-10">
            <h3 className="mb-4 text-2xl font-semibold text-white">Contact Information</h3>
            <p className="mb-8 max-w-md text-base leading-7 text-white/62">
              Use email or social links for project inquiries, collaborations,
              or full-time opportunities.
            </p>

            <div className="space-y-5 text-white/75">
              <div className="flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4">
                <Mail className="text-primary" />
                <span>{contactEmail}</span>
              </div>

              <div className="flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4">
                <Phone className="text-primary" />
                <span>+63 9058327342</span>
              </div>

              <div className="flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4">
                <MapPin className="text-primary" />
                <span>Nueva Ecija, Philippines</span>
              </div>

              <div className="flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4">
                <Facebook className="text-primary" />
                <span>facebook.com/Arnaut Alfonso</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="card-dark space-y-5 p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.2em] text-white/38">
              Send a direct message
            </p>
            <input
              name="name"
              type="text"
              placeholder="Name"
              required
              className="w-full rounded-[1.2rem] border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none transition focus:border-primary"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="w-full rounded-[1.2rem] border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none transition focus:border-primary"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              required
              className="w-full rounded-[1.2rem] border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none transition focus:border-primary"
            ></textarea>
            <button type="submit" className="orange-btn w-full">
              Send Message
            </button>
            {status && (
              <p className="text-center text-sm font-medium text-primary">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}