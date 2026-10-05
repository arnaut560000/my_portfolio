import { ArrowDown, Database, Monitor, CalendarDays } from "lucide-react";

export default function ProjectVisual({ project, compact = false }) {
  const Icon = project.slug === "osy-connect" ? Monitor : CalendarDays;
  return (
    <figure className={`workflow-visual h-full ${compact ? "p-6" : "p-6 sm:p-10"}`}>
      <figcaption className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
        <Icon size={17} aria-hidden="true" />System workflow
      </figcaption>
      <p className={`max-w-sm font-semibold leading-snug ${compact ? "mt-4 text-xl" : "mt-5 text-2xl sm:text-3xl"}`}>{project.visual.label}</p>
      <ol className={`relative ${compact ? "mt-5" : "mt-7"}`}>
        {project.visual.steps.map((step, index) => (
          <li key={step}>
            {index > 0 && <ArrowDown size={16} aria-hidden="true" className="my-2 ml-5 text-primary/60" />}
            <div className="flex items-center gap-4 rounded-xl border border-white/15 bg-[#101820]/95 px-4 py-3">
              <span aria-hidden="true" className="text-xs font-semibold text-primary">0{index + 1}</span>
              <span className="text-sm font-medium text-white/90">{step}</span>
              <span aria-hidden="true" className="ml-auto h-1.5 w-1.5 rounded-full bg-primary/70" />
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-5 flex items-start gap-2 text-xs leading-6 text-white/60"><Database size={15} className="mt-1 shrink-0" aria-hidden="true" />{project.visual.foundation}</p>
    </figure>
  );
}
