export default function Footer() {
  return (
    <footer className="py-8">
      <div className="section-container">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-6 text-sm text-white/65">
          <p>&copy; {new Date().getFullYear()} Arnaut Ezekiel Alfonso.</p>
          <a href="https://github.com/arnaut560000" className="inline-flex min-h-11 items-center hover:text-primary">Find me on GitHub</a>
        </div>
      </div>
    </footer>
  );
}
