"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Personal AI", href: "#personal-ai" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="section-container pt-6">
        <div className="flex h-16 items-center justify-between border-b border-white/10 bg-[#07080a]/70 px-1 backdrop-blur-xl">
          <a
            href="#home"
            className="group flex items-center gap-3 text-sm font-black uppercase tracking-[0.24em] text-white"
          >
            <span className="flex h-10 w-10 items-center justify-center border border-white/15 bg-white/[0.04] text-base tracking-[-0.04em] text-primary">
              AE
            </span>
            <span>
              Port<span className="text-primary">folio</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/58 transition hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <span className="border border-primary/35 bg-primary/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
              Available
            </span>
            <a href="#contact" className="orange-btn px-5 py-2.5 text-xs">
              Let&apos;s Talk
            </a>
          </div>

          <button
            className="border border-white/10 bg-white/[0.04] p-3 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="section-container pt-3 md:hidden">
          <div className="border border-white/10 bg-black/80 p-5 shadow-glow backdrop-blur-xl">
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium uppercase tracking-[0.18em] text-white/75 transition hover:text-white"
                >
                  {link.name}
                </a>
              ))}
              <a href="#contact" className="orange-btn mt-2 w-fit text-xs">
                Let&apos;s Talk
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
