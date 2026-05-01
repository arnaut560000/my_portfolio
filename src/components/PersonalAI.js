import fs from "fs";
import path from "path";

const highlights = [
  {
    label: "Goal",
    value: "Support daily productivity, planning, reminders, and useful text-based interactions."
  },
  {
    label: "Approach",
    value: "A local assistant prototype with a clear interface and practical task-focused behavior."
  },
  {
    label: "Focus",
    value: "Future support for voice output, mobile deployment, and stronger context handling."
  }
];

const features = [
  "Conversational interface for questions, planning, and everyday support",
  "Task and reminder features to help manage personal workflow",
  "Context retention for more relevant and consistent responses",
  "A productivity-first experience built around practical daily use"
];

export default function PersonalAI() {
  const screenshotPath = path.join(process.cwd(), "screenshots", "AI.jpg");
  const fallbackScreenshotPath = path.join(process.cwd(), "public", "ai-screenshot.png");
  const hasScreenshot = fs.existsSync(screenshotPath);
  const hasFallbackScreenshot = fs.existsSync(fallbackScreenshotPath);
  const imageSrc = hasScreenshot
    ? "/media/AI.jpg"
    : hasFallbackScreenshot
      ? "/media/ai-screenshot.png"
      : "/personal-ai-visual.svg";
  const imageAlt = hasScreenshot
    ? "Screenshot of the Personal AI interface"
    : hasFallbackScreenshot
      ? "Screenshot of the Personal AI interface"
    : "Personal AI concept visual";

  return (
    <section id="personal-ai" className="py-24">
      <div className="section-container">
        <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="eyebrow mb-5">Personal AI</span>
            <h2 className="section-title">
              Personal AI Assistant Prototype
            </h2>
          </div>
          <p className="max-w-xl text-sm uppercase tracking-[0.2em] text-white/38">
            A practical assistant concept kept secondary to the main system projects.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <div className="card-dark overflow-hidden p-0">
              <div className="relative">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="h-[340px] w-full object-cover object-top md:h-[390px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 rounded-[1.4rem] border border-white/10 bg-black/35 p-5 backdrop-blur-md">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-primary">
                      Interface Preview
                    </p>
                    <p className="mt-2 text-sm leading-7 text-white/78">
                      {hasScreenshot
                        ? "Live screenshot from the current AI interface."
                        : hasFallbackScreenshot
                          ? "Live screenshot from the current AI interface."
                          : "Add a real screenshot named AI.jpg to screenshots to replace this visual."}
                    </p>
                  </div>
                <span className="rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                    In Progress
                  </span>
                </div>
              </div>
            </div>

            <div className="card-dark relative overflow-hidden p-8 md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.1),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(214,160,102,0.12),transparent_28%)]"></div>
            <div className="relative z-10">
              <div className="mb-8 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/65">
                  Featured Build
                </span>
                <span className="rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                  Personal Product
                </span>
              </div>

              <h3 className="mb-5 max-w-3xl text-3xl font-semibold leading-tight text-white md:text-4xl">
                A local assistant prototype for productivity, planning, and reminders.
              </h3>

              <p className="mb-8 max-w-2xl text-base leading-8 text-white/65">
                A local assistant prototype designed for daily productivity,
                planning, reminders, and text-based interactions, with future
                support for voice output and mobile deployment.
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div key={item.label} className="tech-panel p-4">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">
                      {item.label}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/78">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>

          <div className="space-y-6">
            <div className="card-dark p-8 md:p-10">
              <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-primary">
                Core Features
              </p>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div
                    key={feature}
                    className="flex items-center gap-4 rounded-[1.4rem] border border-white/10 bg-white/[0.03] px-4 py-4"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/25 bg-primary/10 text-sm font-semibold text-primary">
                      0{index + 1}
                    </span>
                    <p className="text-sm font-medium text-white/78">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-dark p-8 md:p-10">
              <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-primary">
                Current Status
              </p>
              <p className="text-base leading-8 text-white/65">
                The section now presents the AI project as a dedicated product
                feature within the portfolio. As development continues, this
                area can be expanded with deeper feature breakdowns, demo
                content, or technical implementation details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}