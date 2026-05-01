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
    <header className="sticky top-0 z-50">
      <div className="section-container pt-5">
        <div className="flex h-20 items-center justify-between rounded-full border border-white/10 bg-black/35 px-6 shadow-glow backdrop-blur-xl">
          <a href="#home" className="text-lg font-semibold uppercase tracking-[0.35em] text-white md:text-xl">
            Port<span className="text-primary">folio</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70 transition hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              Available
            </span>
            <a href="#contact" className="orange-btn px-5 py-2.5 text-xs">
              Let&apos;s Talk
            </a>
          </div>

          <button
            className="rounded-full border border-white/10 bg-white/[0.04] p-3 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="section-container pt-3 md:hidden">
          <div className="rounded-[1.75rem] border border-white/10 bg-black/60 p-5 shadow-glow backdrop-blur-xl">
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
