"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-20 pt-10 md:pb-28 md:pt-16"
    >
      <div className="absolute left-[-6rem] top-20 h-72 w-72 rounded-full bg-primary/12 blur-3xl"></div>
      <div className="absolute right-[-8rem] top-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.35),rgba(0,0,0,0.7))]"></div>

      <div className="section-container relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-[2.25rem] border border-white/10 bg-black/35 p-8 shadow-glow backdrop-blur-xl md:p-12"
          >
            <span className="eyebrow mb-6">Arnaut Ezekiel Alfonso</span>

            <h1 className="mb-6 max-w-3xl text-4xl font-semibold leading-[0.95] text-white md:text-6xl xl:text-7xl">
              I build practical web systems for operations, tracking, and automation.
            </h1>

            <p className="mb-10 max-w-2xl text-base leading-8 text-white/68 md:text-lg">
              I develop responsive web applications and system prototypes that
              combine clean interfaces with real workflow logic, database
              management, dashboards, and practical problem-solving.
            </p>

            <div className="mb-10 flex flex-wrap gap-4">
              <a href="/cv.pdf" className="orange-btn" download>
                Download CV
              </a>
              <a href="#projects" className="outline-btn">
                Selected Work
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4">
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">
                  Focus
                </p>
                <p className="mt-3 text-lg font-semibold text-white">
                  Web Systems
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4">
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">
                  Style
                </p>
                <p className="mt-3 text-lg font-semibold text-white">
                  Modern UI
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4">
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">Based In</p>
                <p className="mt-3 text-lg font-semibold text-white">
                  Philippines
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="orange-glow relative mx-auto h-[560px] max-w-[560px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0c0c0c]">
              <img
                src="/media/profile.png"
                alt="Profile"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_32%)]"></div>
              <div className="grid-lines absolute inset-0 opacity-15"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"></div>
              <div className="absolute left-6 top-6 right-6 h-24 rounded-[1.5rem] border border-white/10 bg-gradient-to-r from-white/10 to-transparent"></div>
              <div className="absolute bottom-24 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
              <div className="absolute right-6 top-8 rounded-full border border-primary/35 bg-black/25 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary backdrop-blur-sm">
                Portfolio
              </div>

              <div className="absolute bottom-6 left-6 z-10 max-w-[16rem] rounded-[1.5rem] border border-white/10 bg-black/35 p-5 backdrop-blur-md">
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">
                  Profile
                </p>
                <p className="mt-3 text-xl font-semibold text-white">
                  Arnaut Ezekiel Alfonso
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}