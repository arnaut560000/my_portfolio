import Image from "next/image";
import { ExternalLink } from "lucide-react";
import screenshot from "../../screenshots/AI.jpg";

export default function PersonalAI() {
  return (
    <section id="personal-ai" className="py-16 md:py-20">
      <div className="section-container">
        <span className="eyebrow mb-5">Personal AI · In progress</span>
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h2 className="section-title">A personal assistant, in progress.</h2>
            <p className="section-copy mt-5">A local assistant prototype exploring conversational support for planning, reminders, and everyday productivity.</p>
            <dl className="mt-6 space-y-5 text-base leading-7">
              <div><dt className="font-semibold text-primary">Current focus</dt><dd className="mt-1 text-white/75">Text-based interaction, task and reminder workflows, and context retention.</dd></div>
              <div><dt className="font-semibold text-primary">Planned next</dt><dd className="mt-1 text-white/75">Voice output, mobile deployment, and more reliable context handling.</dd></div>
            </dl>
            <a href="https://personal-ai-delta-pink.vercel.app/" target="_blank" rel="noopener noreferrer" className="orange-btn mt-7 gap-2">View Prototype <ExternalLink size={18} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
          </div>
          <figure className="overflow-hidden rounded-2xl border border-white/15 bg-black/25">
            <Image src={screenshot} alt="Personal AI prototype conversation interface" sizes="(min-width: 1024px) 560px, 100vw" className="h-auto w-full" />
            <figcaption className="border-t border-white/10 p-4 text-sm text-white/70">Interface preview of the assistant prototype.</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
