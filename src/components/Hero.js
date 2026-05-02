"use client";

import { motion } from "framer-motion";
import { Facebook, Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/", icon: Facebook },
  { label: "GitHub", href: "https://github.com/arnaut560000", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: Linkedin },
  { label: "Email", href: "mailto:arnautAlfonsor8@gmail.com", icon: Mail }
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pb-16 pt-28 md:pt-32"
    >
      <div className="absolute inset-0 hero-grid opacity-65"></div>
      <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-primary/10 to-transparent"></div>
      <div className="absolute right-0 top-0 h-full w-[42%] bg-[linear-gradient(90deg,transparent,rgba(214,160,102,0.08))]"></div>
      <div className="absolute left-[8%] top-[25%] h-px w-[78%] rotate-[24deg] bg-accent/35"></div>
      <div className="absolute left-[13%] top-[18%] h-px w-[68%] -rotate-[20deg] bg-accent/25"></div>

      <div className="section-container relative z-10">
        <div className="relative min-h-[calc(100vh-8rem)]">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="mb-10 flex max-w-3xl items-start gap-5">
              <div className="mt-1 h-24 w-2 bg-primary"></div>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-primary">
                  Arnaut Ezekiel Alfonso
                </p>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/62 md:text-base">
                  I build responsive web systems, workflow dashboards, mapping
                  tools, and database-backed applications for real operational
                  use.
                </p>
              </div>
            </div>

            <h1 className="pointer-events-none relative max-w-6xl select-none text-[4.8rem] font-black uppercase leading-[0.78] text-white md:text-[8.5rem] lg:text-[10.5rem]">
              <span className="block">Software</span>
              <span className="block pl-0 md:pl-[28%]">Developer</span>
            </h1>

            <div className="mt-12 grid gap-8 lg:grid-cols-[0.78fr_1fr_0.58fr] lg:items-end">
              <p className="max-w-sm border-l border-white/15 pl-5 text-sm leading-7 text-white/58">
                Practical interfaces with real workflow logic: uploads,
                dashboards, reports, maps, records, and clean user flows.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      aria-label={item.label}
                      className="flex h-11 w-11 items-center justify-center border border-white/12 bg-white/[0.035] text-white/70 transition hover:-translate-y-1 hover:border-primary/50 hover:text-primary"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>

              <div className="flex flex-wrap gap-3 lg:justify-end">
                <a href="#projects" className="orange-btn px-5 py-3 text-xs">
                  Projects
                </a>
                <a href="/resume.png" className="outline-btn px-5 py-3 text-xs" download>
                  CV
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="pointer-events-none absolute bottom-24 right-0 hidden w-[24rem] lg:block"
          >
            <div className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-black/40 shadow-glow">
              <img
                src="/media/profile.png"
                alt="Arnaut Ezekiel Alfonso"
                className="h-full w-full object-cover object-center opacity-50 grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
