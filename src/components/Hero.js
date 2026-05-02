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
      <motion.div
        className="absolute inset-0 hero-grid opacity-65"
        animate={{ backgroundPosition: ["0px 0px", "54px 54px"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      ></motion.div>
      <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-primary/10 to-transparent"></div>
      <motion.div
        className="absolute right-0 top-0 h-full w-[42%] bg-[linear-gradient(90deg,transparent,rgba(214,160,102,0.08))]"
        animate={{ opacity: [0.55, 0.9, 0.55] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute left-[8%] top-[25%] h-px w-[78%] rotate-[24deg] bg-accent/35"
        animate={{ scaleX: [0.85, 1, 0.85], opacity: [0.22, 0.55, 0.22] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute left-[13%] top-[18%] h-px w-[68%] -rotate-[20deg] bg-accent/25"
        animate={{ scaleX: [1, 0.82, 1], opacity: [0.5, 0.18, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

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

            <h1 className="pointer-events-none relative z-10 max-w-6xl select-none pb-10 text-[4.4rem] font-black uppercase leading-[0.9] text-white sm:text-[5.8rem] md:text-[8rem] lg:text-[9rem] xl:text-[9.6rem]">
              <motion.span
                className="block"
                initial={{ opacity: 0, x: -48 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.75, delay: 0.1 }}
              >
                Software
              </motion.span>
              <motion.span
                className="block pl-0 md:pl-[27%]"
                initial={{ opacity: 0, x: 48 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.75, delay: 0.25 }}
              >
                Developer
              </motion.span>
            </h1>

            <motion.div
              className="mt-12 grid gap-8 lg:grid-cols-[0.78fr_1fr_0.58fr] lg:items-end"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.45 }}
            >
              <p className="max-w-sm border-l border-white/15 pl-5 text-sm leading-7 text-white/58">
                Practical interfaces with real workflow logic: uploads,
                dashboards, reports, maps, records, and clean user flows.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                {socialLinks.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      aria-label={item.label}
                      className="flex h-11 w-11 items-center justify-center border border-white/12 bg-white/[0.035] text-white/70 transition hover:-translate-y-1 hover:border-primary/50 hover:text-primary"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.55 + index * 0.08 }}
                      whileHover={{ y: -5, scale: 1.04 }}
                    >
                      <Icon size={18} />
                    </motion.a>
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
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 36, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.25 }}
            className="relative z-20 mt-20 w-full md:mt-24"
          >
            <motion.div
              className="relative mx-auto max-w-5xl overflow-hidden border border-white/10 bg-[#111] shadow-glow"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src="/media/profile.jpg"
                alt="Arnaut Ezekiel Alfonso"
                className="block h-auto w-full opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/20"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_34%)]"></div>
              <motion.div
                className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/15 to-transparent"
                animate={{ y: ["-100%", "620%"] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "linear" }}
              ></motion.div>
              <div className="absolute bottom-5 left-5 right-5 max-w-md border border-white/10 bg-black/50 p-5 backdrop-blur-md">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
                  Based in Philippines
                </p>
                <p className="mt-2 text-xl font-black uppercase tracking-[0.08em] text-white">
                  Web Systems Developer
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
