const coreStacks = [
  {
    name: "Frontend",
    tools: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"]
  },
  {
    name: "Backend",
    tools: ["Python", "Flask", "PHP", "Node.js", "REST APIs"]
  },
  {
    name: "Database",
    tools: ["MySQL", "SQLite", "Data Modeling", "CRUD Systems"]
  },
  {
    name: "Tools",
    tools: ["Git", "XAMPP", "Excel/XLSX", "KML", "GPX", "Leaflet"]
  }
];

const details = [
  {
    label: "Development",
    value:
      "Building practical web applications with clear layouts, reliable CRUD flows, and maintainable project structure."
  },
  {
    label: "Systems",
    value:
      "Designing tools for tracking, management, reporting, and day-to-day operational visibility."
  },
  {
    label: "Mindset",
    value:
      "Turning real workflow problems into interfaces that are easier to understand, use, and improve."
  }
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="max-w-3xl">
            <span className="eyebrow mb-5">About</span>
            <h2 className="section-title">
              I focus on useful software that makes work easier to track, manage, and understand.
            </h2>
            <p className="section-copy mt-6">
              I am a developer based in the Philippines with experience building
              portfolio-ready systems for operations, document tracking,
              apartment management, outage monitoring, and productivity support.
            </p>
          </div>

          <div className="space-y-6">
            <div className="card-dark p-8 md:p-10">
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                Core Stacks
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {coreStacks.map((stack) => (
                  <div
                    key={stack.name}
                    className="rounded-[1.25rem] border border-white/10 bg-black/25 p-5"
                  >
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-white">
                      {stack.name}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {stack.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full border border-primary/20 bg-primary/[0.08] px-3 py-1.5 text-xs font-medium text-primary/90"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {details.map((item) => (
                <div key={item.label} className="tech-panel p-5">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">
                    {item.label}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-white/72">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
