import Link from "next/link";
import { ArrowUpRight, Building2 } from "lucide-react";

const experience = [
  {
    role: "Web Developer / Government Programmer",
    organization: "Talavera, Nueva Ecija Municipal Office",
    department: "Mayor’s Office · Local Government Unit",
    start: "2025-07-01", end: "2026-08-11", dates: "July 2025 – August 2026",
    responsibilities: [
      "Developed and maintained a web-based scheduling system for free dental services, using Supabase and Render.",
      "Built and maintained a locally hosted information system for the Sanitation Office using Python and Flask.",
      "Provided technical support across municipal offices, helping staff resolve computer and system issues."
    ],
    project: "/projects/talavera-dental-scheduling", projectLabel: "Explore the dental scheduling system"
  },
  {
    role: "Programmer · Project-based",
    organization: "NEECO · Engineering Department",
    department: "Utility operations",
    start: "2025-03", end: "2025-06", dates: "March – June 2025",
    responsibilities: [
      "Developed an outage management system connecting operational records with an interactive map.",
      "Worked with Python, Flask, and geospatial data to support outage tracing and reporting."
    ],
    project: "/projects/outage-management-system", projectLabel: "Explore the outage management system"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="border-y border-white/10 bg-white/[0.02] py-16 md:py-20">
      <div className="section-container grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <span className="eyebrow mb-5">Professional experience</span>
          <h2 className="section-title">Code, with a<br className="hidden lg:block" /> public purpose.</h2>
          <p className="section-copy mt-5 max-w-sm">Building the system is one part of the job. Keeping it useful for the people who rely on it is the other.</p>
          <a href="/Arnaut_online.pdf" download className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary">Download my résumé <ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
        <ol className="space-y-10 border-l border-primary/30 pl-6 sm:pl-9">
          {experience.map((job) => (
            <li key={job.organization} className="relative">
              <span aria-hidden="true" className="absolute -left-[29px] top-1.5 h-2 w-2 rounded-full bg-primary sm:-left-[41px]" />
              <p className="text-sm text-primary"><time dateTime={job.start}>{job.dates.split(" – ")[0]}</time> – <time dateTime={job.end}>{job.dates.split(" – ")[1]}</time></p>
              <h3 className="mt-3 text-xl font-semibold sm:text-2xl">{job.role}</h3>
              <p className="mt-3 flex items-start gap-2 text-base text-white/90"><Building2 size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-primary" />{job.organization}</p>
              <p className="mt-1 text-sm text-white/60">{job.department}</p>
              <ul className="mt-5 list-disc space-y-3 pl-4 text-sm leading-7 text-white/70 marker:text-primary/60">{job.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul>
              <Link href={job.project} className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary">{job.projectLabel}<ArrowUpRight size={16} className="shrink-0" aria-hidden="true" /></Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
