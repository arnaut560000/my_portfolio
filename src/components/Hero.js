import Image from "next/image";
import { ExternalLink, Code2, Mail, Download } from "lucide-react";
import portrait from "../../screenshots/profile.jpg";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-32 md:pb-20 md:pt-40">
      <div aria-hidden="true" className="hero-grid absolute inset-0 opacity-50" />
      <div className="section-container relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-primary">Arnaut Ezekiel Alfonso · Web Developer</p>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl xl:text-6xl">Software that helps<br className="hidden sm:block" /> public service <span className="text-primary">work better.</span></h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">I’m a developer with government programming experience at Talavera Municipal Office. I build and maintain web systems, offline tools, and workflows that support staff and the communities they serve.</p>
          <p className="mt-5 text-sm leading-7 text-white/60">Python / Flask · PHP / Laravel · Supabase · Render</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="orange-btn">View Projects</a>
            <a href="/Arnaut_online.pdf" className="outline-btn gap-2" download><Download size={18} aria-hidden="true" />Download CV</a>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-5 text-white/75">
            <a href="https://github.com/arnaut560000" className="inline-flex min-h-11 items-center gap-2 text-sm hover:text-primary"><Code2 size={18} aria-hidden="true" />GitHub</a>
            <a href="mailto:arnautAlfonsor8@gmail.com" className="inline-flex min-h-11 items-center gap-2 text-sm hover:text-primary"><Mail size={18} aria-hidden="true" />Email</a>
            <a href="https://www.facebook.com/arnaut.alfonso" aria-label="Facebook" className="inline-flex min-h-11 min-w-11 items-center justify-center hover:text-primary"><ExternalLink size={18} aria-hidden="true" /><span className="ml-2 text-sm">Facebook</span></a>
          </div>
        </div>
        <figure className="overflow-hidden rounded-2xl border border-white/15 bg-black/30">
          <Image src={portrait} alt="Arnaut Ezekiel Alfonso" sizes="(min-width: 1024px) 440px, (min-width: 640px) 600px, 100vw" preload className="aspect-[4/3] w-full object-cover object-center" />
          <figcaption className="border-t border-white/10 p-5 text-sm leading-6 text-white/75">Nueva Ecija, Philippines <span className="block text-primary">Open to freelance work and development opportunities</span></figcaption>
        </figure>
      </div>
    </section>
  );
}
