import Image from "next/image";
import { ExternalLink } from "lucide-react";
import screenshot from "../../screenshots/AI.jpg";

export default function PersonalAI() {
  return (
    <section id="personal-ai" className="py-16 md:py-20">
      <div className="section-container">
        <span className="eyebrow mb-5">Beyond the day job · Personal AI</span>
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h2 className="section-title">RoomAI. A local companion.</h2>
            <p className="section-copy mt-5">An ongoing experiment in a personal AI companion with memory, an animated interface, and a Python FastAPI backend.</p>
            <dl className="mt-6 space-y-5 text-base leading-7">
              <div><dt className="font-semibold text-primary">Local model</dt><dd className="mt-1 text-white/75">Runs with Ollama and a local language model.</dd></div>
              <div><dt className="font-semibold text-primary">Personal context</dt><dd className="mt-1 text-white/75">Explores remembering facts shared naturally in conversation, such as a name or a current project.</dd></div>
            </dl>
            <a href="https://github.com/arnaut560000/personal-AI" className="outline-btn mt-7 gap-2">Explore the repository <ExternalLink size={18} aria-hidden="true" /></a>
          </div>
          <figure className="overflow-hidden rounded-2xl border border-white/15 bg-black/25">
            <Image src={screenshot} alt="Personal AI prototype conversation interface" sizes="(min-width: 1024px) 560px, 100vw" className="h-auto w-full" />
            <figcaption className="border-t border-white/10 p-4 text-sm text-white/70">Earlier Personal AI interface. The current RoomAI source is linked alongside.</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
