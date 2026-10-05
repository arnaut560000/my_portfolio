import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code2, Check } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectVisual from "./ProjectVisual";

function ProjectLinks({ project, featured = false }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
      <Link href={`/projects/${project.slug}`} className={`${featured ? "orange-btn" : "inline-flex min-h-11 items-center font-semibold text-primary"} gap-2`} aria-label={`Explore ${project.title}`}>View case study <ArrowUpRight size={17} aria-hidden="true" /></Link>
      <a href={project.repository} className="inline-flex min-h-11 items-center gap-2 text-sm text-white/70 hover:text-white" aria-label={`View ${project.title} source on GitHub`}><Code2 size={17} aria-hidden="true" />Source code</a>
    </div>
  );
}

function Stack({ project }) {
  return <ul aria-label="Technologies" className="mt-5 flex flex-wrap gap-2">{project.stack.map((tech) => <li key={tech} className="rounded-full border border-white/15 px-3 py-1 text-xs leading-5 text-white/75">{tech}</li>)}</ul>;
}

export default function Projects() {
  const [featured, ...more] = projects;
  return (
    <section id="projects" className="py-16 md:py-20">
      <div className="section-container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div><span className="eyebrow mb-5">Selected work</span><h2 className="section-title max-w-2xl">Built for the work<br className="hidden sm:block" /> behind the service.</h2></div>
          <p className="max-w-sm text-base leading-7 text-white/65">From municipal appointments to offline records and utility maps—practical systems, with the code behind them.</p>
        </div>
        <article className="mt-10 grid overflow-hidden rounded-2xl border border-primary/30 bg-white/[0.035] lg:grid-cols-2">
          <div className="p-6 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">Featured / Government services</p>
            <h3 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">{featured.title}</h3>
            <p className="mt-4 text-base leading-7 text-white/75">{featured.summary}</p>
            <Stack project={featured} />
            <ul className="mt-6 space-y-3">{featured.evidence.slice(0, 3).map((item) => <li key={item} className="flex items-center gap-3 text-sm text-white/75"><Check size={16} aria-hidden="true" className="shrink-0 text-primary" />{item}</li>)}</ul>
            <ProjectLinks project={featured} featured />
          </div>
          <div className="border-t border-white/10 lg:border-l lg:border-t-0"><ProjectVisual project={featured} /></div>
        </article>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {more.map((project) => (
            <article key={project.slug} className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/15 bg-white/[0.025]">
              {project.image ? (
                <Link href={`/projects/${project.slug}`} aria-label={`View ${project.title} walkthrough`} className="group flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-white/10 bg-black/25 p-5">
                  <Image src={project.image} alt={`${project.title} dashboard interface`} sizes="(min-width: 1280px) 580px, (min-width: 768px) 50vw, 100vw" className="max-h-full w-auto max-w-full rounded-lg border border-white/10 object-contain transition duration-300 group-hover:scale-[1.02]" />
                </Link>
              ) : <div className="border-b border-white/10"><ProjectVisual project={project} compact /></div>}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className="text-xs uppercase tracking-[0.13em] text-primary">{project.category} · {project.status}</p>
                <h3 className="mt-3 text-2xl font-semibold leading-tight">{project.title}</h3>
                <p className="mt-3 text-base leading-7 text-white/70">{project.summary}</p>
                <Stack project={project} />
                <div className="mt-auto"><ProjectLinks project={project} /></div>
              </div>
            </article>
          ))}
        </div>
        <a href="https://github.com/arnaut560000?tab=repositories" className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm text-white/70 hover:text-primary">More projects on GitHub <ArrowUpRight size={17} aria-hidden="true" /></a>
      </div>
    </section>
  );
}
