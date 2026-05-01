"use client";

const projects = [
  {
    title: "Outage Management System",
    image: "/media/outage-management-system.png",
    category: "Monitoring Platform",
    status: "Completed",
    feature:
      "Interactive map, downstream affected-area detection, KML/GPX/XLSX upload, validation reports, affected consumers, KWHR loss estimates, and interruption records.",
    tags: ["MAP VIEW", "LEAFLET", "KML/GPX", "EXCEL DATA", "VALIDATION", "REPORTS"],
    techStack: ["Python", "Flask", "Leaflet", "JavaScript", "HTML", "CSS", "XLSX", "KML", "GPX"],
    featured: true,
    problem:
      "Helps teams understand where service interruptions happen, what areas are affected, and what records need validation.",
    description:
      "A map-based outage monitoring system designed to visualize feeder lines, affected areas, and service interruption impact using uploaded KML, GPX, and Excel data."
  },
  {
    title: "Apartment Management System",
    image: "/media/apartment-management-system.png",
    category: "Operations Dashboard",
    status: "Completed",
    feature:
      "Tenant records, apartment status tracking, payment monitoring, maintenance requests, dashboard analytics, archived records, and admin/staff login.",
    tags: ["TENANTS", "PAYMENTS", "MAINTENANCE", "DASHBOARD", "CRUD"],
    techStack: ["PHP", "MySQL", "JavaScript", "Bootstrap", "HTML", "CSS", "XAMPP"],
    problem:
      "Helps property staff organize tenant, payment, unit, and maintenance information in one dashboard.",
    description:
      "A property management dashboard for managing apartment units, tenants, payments, maintenance records, and occupancy status."
  },
  {
    title: "Document Management System",
    image: "/media/document-management-system.png",
    category: "Workflow Tracker",
    status: "Prototype",
    feature:
      "Document uploads, manual status updates, status history, search, analytics dashboard, user accounts, file handling, and workflow tracking.",
    tags: ["WORKFLOW", "ANALYTICS", "UPLOADS", "STATUS HISTORY", "SEARCH"],
    techStack: ["Python", "Flask", "SQLite", "JavaScript", "HTML", "CSS"],
    problem:
      "Helps office users track where documents are in the workflow and review status changes without manual follow-ups.",
    description:
      "A department document tracking system for uploading records, monitoring document status, viewing update history, and improving office workflow visibility."
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="eyebrow mb-5">Projects</span>
            <h2 className="section-title">Practical systems I have built for operations, tracking, mapping, and management.</h2>
          </div>
          <p className="max-w-lg text-sm uppercase leading-7 tracking-[0.2em] text-white/38">
            Real interface previews and workflow-focused features from systems I developed for academic, office, and operational use.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group relative overflow-hidden rounded-[2rem] border p-4 shadow-glow transition duration-300 hover:-translate-y-1.5 hover:bg-white/[0.055] md:p-5 ${
                project.featured
                  ? "border-primary/40 bg-primary/[0.055] hover:border-primary/70 hover:shadow-[0_28px_90px_rgba(214,160,102,0.16)]"
                  : "border-white/10 bg-white/[0.035] hover:border-primary/45 hover:shadow-[0_24px_80px_rgba(214,160,102,0.1)]"
              }`}
            >
              <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(214,160,102,0.08),transparent_34%,rgba(125,211,252,0.06))] opacity-0 transition duration-300 group-hover:opacity-100"></div>

              <div className={`relative grid gap-5 lg:items-center ${
                project.featured ? "lg:grid-cols-[0.86fr_1.14fr]" : "lg:grid-cols-[0.92fr_1.08fr]"
              }`}>
                <div className="flex flex-col justify-between rounded-[1.5rem] border border-white/10 bg-black/25 p-6 md:p-7">
                  <div>
                    <div className="mb-7 flex items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        {project.featured && (
                          <span className="rounded-full border border-primary/40 bg-primary/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                            Featured System
                          </span>
                        )}
                        <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                          {project.category}
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/65">
                          {project.status}
                        </span>
                      </div>
                      <span className="text-5xl font-semibold leading-none text-white/10">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-2xl font-semibold leading-tight text-white md:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-white/62">
                      {project.description}
                    </p>
                    <p className="mt-5 max-w-2xl border-l border-primary/45 pl-4 text-sm font-medium leading-7 text-white/78">
                      {project.feature}
                    </p>
                  </div>

                  <div className="mt-8 space-y-5">
                    <div>
                      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/36">
                        Key Features
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[11px] font-semibold tracking-[0.12em] text-white/58"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/36">
                        Tech Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-primary/20 bg-primary/[0.08] px-3 py-1.5 text-xs font-medium text-primary/90"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

                <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#111216] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                  <div className="flex h-11 items-center gap-2 border-b border-white/10 bg-black/45 px-4 backdrop-blur-md">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ef6f6c]"></span>
                    <span className="h-2.5 w-2.5 rounded-full bg-[#e0b94f]"></span>
                    <span className="h-2.5 w-2.5 rounded-full bg-[#6ecf8f]"></span>
                    <span className="ml-3 h-2 w-24 rounded-full bg-white/12"></span>
                  </div>
                  <div className="relative aspect-video w-full overflow-hidden bg-black">
                    <img
                      src={project.image}
                      alt={`${project.title} interface preview`}
                      className="block h-full w-full object-cover object-center align-middle transition duration-700 group-hover:scale-[1.035]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_28%),linear-gradient(to_top,rgba(0,0,0,0.22),transparent_45%)]"></div>
                    <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_42px_rgba(0,0,0,0.28)]"></div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}