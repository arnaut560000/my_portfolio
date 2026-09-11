const stacks = [
  { name: "Frontend", tools: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"] },
  { name: "Backend", tools: ["Python", "Flask", "PHP", "Node.js", "REST APIs"] },
  { name: "Data", tools: ["MySQL", "SQLite", "Data modeling", "Excel / XLSX"] },
  { name: "Tools & mapping", tools: ["Git", "Leaflet", "KML", "GPX", "XAMPP"] }
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20">
      <div className="section-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="eyebrow mb-5">About & skills</span>
          <h2 className="section-title">Practical problems. Useful software.</h2>
          <p className="section-copy mt-6">I am a developer based in Nueva Ecija, Philippines. My work spans outage monitoring, apartment management, and document tracking, with an emphasis on clear interfaces and reliable workflows.</p>
          <p className="section-copy mt-5">I enjoy connecting the interface with the logic behind it: structured records, file handling, maps, reports, and tools that make day-to-day work easier to follow.</p>
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
