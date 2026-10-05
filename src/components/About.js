const stacks = [
  { name: "Frontend", tools: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"] },
  { name: "Backend & desktop", tools: ["Python", "Flask", "PHP", "Laravel", "Tkinter"] },
  { name: "Data & deployment", tools: ["Supabase", "PostgreSQL", "MySQL", "SQLite", "Render", "Vercel"] },
  { name: "Tools & mapping", tools: ["Git / GitHub", "Leaflet", "KML / GPX", "Excel / XLSX", "ReportLab"] }
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20">
      <div className="section-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="eyebrow mb-5">About & skills</span>
          <h2 className="section-title">Practical problems. Useful software.</h2>
          <p className="section-copy mt-6">Based in Nueva Ecija, Philippines, I bring hands-on experience developing and maintaining systems for local government, alongside technical support for municipal staff.</p>
          <p className="section-copy mt-5">My work spans dental scheduling, sanitation office records, utility mapping, and offline desktop applications. I connect clear interfaces with the details behind them: validated records, staff permissions, useful reports, and maintainable workflows.</p>
          <a href="/Arnaut_online.pdf" className="outline-btn mt-7" download>Download CV</a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {stacks.map((stack) => (
            <div key={stack.name} className="rounded-2xl border border-white/15 bg-white/[0.035] p-6">
              <h3 className="text-base font-semibold">{stack.name}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {stack.tools.map((tool) => <li key={tool} className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm text-primary">{tool}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
