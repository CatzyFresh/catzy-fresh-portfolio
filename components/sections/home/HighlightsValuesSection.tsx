// components/sections/home/HighlightsValuesSection.tsx

const values = [
  {
    title: "Fast Iteration",
    desc: "Short loops, quick builds, frequent playtests. We learn by shipping, not just planning.",
  },
  {
    title: "Player-Focused",
    desc: "We design around feel and clarity: readable UI, crisp feedback, and satisfying core actions.",
  },
  {
    title: "Creative Experiments",
    desc: "Trying weird ideas in safe, scoped prototypes — from casino pacing to tactical defense.",
  },
  {
    title: "Indie Spirit",
    desc: "Small, honest, hands-on. We own our mistakes and our glow-ups, project by project.",
  },
];

export default function HighlightsValuesSection() {
  return (
    <section
      className="border-b border-cf-dark-grey bg-cf-black"
      aria-labelledby="values-heading"
    >
      <div className="mx-auto max-w-[var(--container-2xl)] px-4 py-10 md:py-12">
        <h2 id="values-heading" className="heading-h2 text-cf-white">
          How We Work
        </h2>
        <p className="body-text text-cf-grey-text">
          A lean studio rhythm: think, prototype, test, refine — all while
          staying true to the Catzy Fresh vibe.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {values.map((value) => (
            <article
              key={value.title}
              className="rounded-2xl border border-cf-dark-grey bg-cf-dark-grey/80 p-5 shadow-(--shadow-soft-card)"
            >
              <h3 className="small-text font-semibold text-cf-white">
                {value.title}
              </h3>
              <p className="mt-2 small-text text-cf-grey-text">{value.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
