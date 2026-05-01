export default function Footer() {
  return (
    <footer className="py-10">
      <div className="section-container">
        <div className="flex flex-col items-start justify-between gap-4 rounded-[2rem] border border-white/10 bg-black/30 px-6 py-6 text-sm text-white/50 backdrop-blur-xl md:flex-row md:items-center">
          <p>&copy; 2026 Arnaut Ezekiel Alfonso. All rights reserved.</p>
          <p className="uppercase tracking-[0.18em] text-white/35">
            Designed for modern web presentation
          </p>
        </div>
      </div>
    </footer>
  );
}
