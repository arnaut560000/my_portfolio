"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, ExternalLink, Copy } from "lucide-react";

const contactEmail = "arnautAlfonsor8@gmail.com";

export default function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = data.get("name")?.toString().trim();
    const email = data.get("email")?.toString().trim();
    const message = data.get("message")?.toString().trim();
    if (!name || !email || !message) {
      setStatus("Please enter your name, email, and a message.");
      return;
    }
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setStatus("Your email app should open with a draft. Review it and press Send there. If nothing opens, copy the email address and contact me directly.");
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setStatus("Email address copied.");
    } catch {
      setStatus(`Copy this email address: ${contactEmail}`);
    }
  }

  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="section-container">
        <span className="eyebrow mb-5">Contact</span>
        <h2 className="section-title">Have a workflow to improve?</h2>
        <p className="section-copy mt-5 max-w-2xl">Get in touch about freelance projects, collaboration, or development opportunities.</p>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="card-dark min-w-0 p-6 md:p-8">
            <h3 className="text-2xl font-semibold">Let&apos;s talk</h3>
            <ul className="mt-6 space-y-5 text-base text-white/80">
              <li><a href={`mailto:${contactEmail}`} className="flex min-h-11 items-center gap-3 hover:text-primary"><Mail className="shrink-0 text-primary" size={20} aria-hidden="true" /><span className="break-all">{contactEmail}</span></a></li>
              <li><a href="tel:+639058327342" className="flex min-h-11 items-center gap-3 hover:text-primary"><Phone className="shrink-0 text-primary" size={20} aria-hidden="true" />+63 905 832 7342</a></li>
              <li className="flex min-h-11 items-center gap-3"><MapPin className="shrink-0 text-primary" size={20} aria-hidden="true" />Nueva Ecija, Philippines</li>
              <li><a href="https://www.facebook.com/arnaut.alfonso" className="flex min-h-11 items-center gap-3 hover:text-primary"><ExternalLink className="shrink-0 text-primary" size={20} aria-hidden="true" />Arnaut Alfonso on Facebook</a></li>
            </ul>
            <button type="button" onClick={copyEmail} className="outline-btn mt-6 gap-2"><Copy size={18} aria-hidden="true" />Copy email address</button>
          </div>
          <form onSubmit={handleSubmit} className="card-dark min-w-0 space-y-5 p-6 md:p-8" aria-labelledby="email-draft-title" aria-describedby="email-draft-help">
            <h3 id="email-draft-title" className="text-2xl font-semibold">Prepare an email</h3>
            <p id="email-draft-help" className="text-sm leading-7 text-white/70">This opens a draft in your email app. You&apos;ll send it from there; this website does not submit your message.</p>
            <div><label htmlFor="contact-name" className="mb-2 block text-sm font-medium">Name</label><input id="contact-name" name="name" type="text" autoComplete="name" maxLength={100} required className="contact-input" /></div>
            <div><label htmlFor="contact-email" className="mb-2 block text-sm font-medium">Email</label><input id="contact-email" name="email" type="email" autoComplete="email" maxLength={254} required className="contact-input" /></div>
            <div><label htmlFor="contact-message" className="mb-2 block text-sm font-medium">Message</label><textarea id="contact-message" name="message" rows={5} maxLength={1500} required className="contact-input" /></div>
            <button type="submit" className="orange-btn w-full">Open email app</button>
          </form>
        </div>
        <p role="status" aria-live="polite" className="mt-5 min-h-7 text-sm leading-7 text-primary">{status}</p>
      </div>
    </section>
  );
}
