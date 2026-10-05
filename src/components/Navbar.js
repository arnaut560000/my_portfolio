"use client";

import { useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef(null);

  function handleEscape(event) {
    if (event.key === "Escape" && open) {
      setOpen(false);
      menuButton.current?.focus();
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50" onKeyDown={handleEscape}>
      <div className="section-container pt-4">
        <div className="flex h-16 items-center justify-between gap-3 border-b border-white/15 bg-[#07080a]/95 px-3 backdrop-blur-xl">
          <a href="#home" onClick={() => setOpen(false)} aria-label="Arnaut Alfonso, home" className="inline-flex min-h-11 items-center gap-3 text-sm font-bold uppercase tracking-widest">
            <span className="flex h-10 w-10 items-center justify-center border border-primary/35 text-primary">AE</span><span>Arnaut Alfonso</span>
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
            {links.map((link) => <a key={link.name} href={link.href} className="inline-flex min-h-11 items-center text-sm text-white/75 hover:text-primary">{link.name}</a>)}
          </nav>
          <div className="hidden lg:block"><a href="#contact" className="orange-btn px-4 py-2 text-sm">Let&apos;s Talk</a></div>
          <button ref={menuButton} type="button" className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="mobile-navigation">{open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}</button>
        </div>
        {open && (
          <nav id="mobile-navigation" aria-label="Mobile navigation" className="mt-2 border border-white/15 bg-[#09090b] p-4 shadow-glow lg:hidden">
            {links.map((link) => <a key={link.name} href={link.href} onClick={() => setOpen(false)} className="flex min-h-12 items-center px-2 text-base text-white/80 hover:text-primary">{link.name}</a>)}
          </nav>
        )}
      </div>
    </header>
  );
}
