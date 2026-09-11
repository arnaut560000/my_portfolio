import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-20">
      <div className="section-container">
        <span className="eyebrow mb-5">Selected work</span>
        <h2 className="section-title">Systems built around real workflows.</h2>
        <p className="section-copy mt-5 max-w-2xl">Explore the problem, workflow, and interface behind each project.</p>
        <div className="mt-10 space-y-8">
          {projects.map((project, index) => (
            <article key={project.slug} className="grid overflow-hidden rounded-2xl border border-white/15 bg-white/[0.035] lg:grid-cols-[0.9fr_1.1fr]">
              <div className="p-6 md:p-8">
                <div className="mb-5 flex flex-wrap items-center gap-3 text-sm">
                  <span className="text-primary">{project.category}</span>
                  <span className="rounded-full border border-white/15 px-3 py-1 text-white/75">{project.status}</span>
                </div>
                <h3 className="text-2xl font-semibold leading-tight md:text-3xl">{project.title}</h3>
                <p className="mt-4 text-base leading-7 text-white/75">{project.summary}</p>
                <ul aria-label="Technologies" className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => <li key={tech} className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary">{tech}</li>)}
                </ul>
                <Link href={`/projects/${project.slug}`} className="outline-btn mt-7 gap-2" aria-label={`Explore ${project.title}`}>Explore Project <ArrowUpRight size={18} aria-hidden="true" /></Link>
              </div>
              <Link href={`/projects/${project.slug}`} aria-label={`View ${project.title} walkthrough`} className="group flex min-w-0 flex-col justify-center border-t border-white/10 bg-black/25 p-4 lg:border-l lg:border-t-0 md:p-6">
                <div aria-hidden="true" className="flex items-center justify-between rounded-t-lg border border-white/10 bg-white/5 px-4 py-3 text-xs text-white/60"><span>Interface preview</span><span>0{index + 1}</span></div>
                <Image src={project.image} alt={`${project.title} dashboard interface`} sizes="(min-width: 1024px) 640px, 100vw" className="h-auto w-full rounded-b-lg border border-t-0 border-white/10 transition group-hover:brightness-110" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
