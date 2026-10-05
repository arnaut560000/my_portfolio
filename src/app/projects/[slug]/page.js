import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Expand, Code2, Check } from "lucide-react";
import { projects, getProject } from "@/data/projects";
import Footer from "@/components/Footer";
import ProjectVisual from "@/components/ProjectVisual";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const preview = project.image
    ? { url: project.image.src, width: project.image.width, height: project.image.height, alt: `${project.title} interface` }
    : { url: "/facebook-preview.png", width: 1734, height: 907, alt: "Arnaut Ezekiel Alfonso portfolio" };
  return {
    title: `${project.title} | Arnaut Ezekiel Alfonso`,
    description: project.summary,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: { title: project.title, description: project.summary, url: `/projects/${slug}`, images: [preview] },
    twitter: { card: "summary_large_image", title: project.title, description: project.summary, images: [preview.url] }
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return (
    <>
      <header className="section-container py-7">
        <Link href="/#projects" className="inline-flex min-h-11 items-center gap-2 text-sm text-primary"><ArrowLeft size={18} aria-hidden="true" />Back to projects</Link>
      </header>
      <main id="main-content" className="section-container pb-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">{project.category} · {project.status}</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">{project.title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">{project.summary}</p>
        <a href={project.repository} className="outline-btn mt-6 gap-2"><Code2 size={18} aria-hidden="true" />View source on GitHub</a>
        <dl className="mt-8 grid gap-5 border-y border-white/15 py-6 sm:grid-cols-[0.7fr_1.3fr]">
          <div><dt className="text-sm text-white/60">My role</dt><dd className="mt-2 font-medium">{project.role || "Web application development"}</dd></div>
          <div><dt className="text-sm text-white/60">Technologies</dt><dd className="mt-2 leading-7">{project.stack.join(" · ")}</dd></div>
        </dl>
        {project.image ? <figure className="mt-10 overflow-hidden rounded-2xl border border-white/15 bg-black/30">
          <Image src={project.image} alt={`${project.title} full dashboard screenshot`} sizes="(min-width: 1280px) 1200px, 100vw" preload className="h-auto w-full" />
          <figcaption className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 px-5 py-4 text-sm text-white/70">
            <span>Application interface</span>
            <a href={project.image.src} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-primary"><Expand size={16} aria-hidden="true" />Open full-size screenshot<span className="sr-only"> (opens in a new tab)</span></a>
          </figcaption>
        </figure> : (
          <div className="mt-10 grid overflow-hidden rounded-2xl border border-white/15 md:grid-cols-2">
            <ProjectVisual project={project} />
            <section className="border-t border-white/10 bg-white/[0.025] p-6 sm:p-10 md:border-l md:border-t-0">
              <h2 className="text-2xl font-semibold">Built into the system</h2>
              <ul className="mt-7 space-y-5">{project.evidence.map((item) => <li key={item} className="flex items-start gap-3 text-base leading-7 text-white/75"><Check size={18} className="mt-1 shrink-0 text-primary" aria-hidden="true" />{item}</li>)}</ul>
              <p className="mt-8 text-sm leading-7 text-white/60">Explore the implementation and setup instructions in the public repository.</p>
            </section>
          </div>
        )}
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <section><h2 className="text-2xl font-semibold">The problem</h2><p className="mt-4 text-base leading-8 text-white/75">{project.problem}</p></section>
          <section><h2 className="text-2xl font-semibold">Engineering focus</h2><p className="mt-4 text-base leading-8 text-white/75">{project.focus}</p></section>
        </div>
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">The workflow</h2>
          <ol className="mt-6 grid gap-5 md:grid-cols-3">
            {project.workflow.map((step, index) => <li key={step.title} className="rounded-xl border border-white/15 bg-white/[0.035] p-6"><p aria-hidden="true" className="text-sm text-primary">0{index + 1}</p><h3 className="mt-3 text-lg font-semibold">{step.title}</h3><p className="mt-3 text-base leading-7 text-white/75">{step.text}</p></li>)}
          </ol>
        </section>
        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-semibold">What it delivers</h2>
          <p className="mt-4 text-base leading-8 text-white/75">{project.outcome}</p>
          <p className="mt-4 border-l-2 border-primary/50 pl-4 text-sm leading-7 text-white/65">{project.note}</p>
        </section>
        <Link href="/#contact" className="orange-btn mt-10">Discuss a similar project</Link>
      </main>
      <Footer />
    </>
  );
}
