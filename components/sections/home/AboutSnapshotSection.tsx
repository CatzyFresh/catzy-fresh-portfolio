// components/sections/home/AboutSnapshotSection.tsx
import Link from "next/link";

export default function AboutSnapshotSection() {
  return (
    <section
      className="border-b border-cf-dark-grey bg-cf-black"
      aria-labelledby="about-snapshot-heading"
    >
      <div className="mx-auto max-w-[var(--container-2xl)] px-4 py-10 md:py-12">
        <div className="max-w-2xl space-y-3">
          <h2
            id="about-snapshot-heading"
            className="heading-h2 text-cf-white"
          >
            Who We Are
          </h2>
          <p className="body-text text-cf-grey-text">
            Catzy Fresh is a small, hands-on game studio obsessed with fast
            iteration, clean systems, and teaching ourselves through every
            project: from beginner clones to ambitious original IP.
          </p>
          <p className="body-text text-cf-grey-text">
            We treat each game as part of a portfolio — not a one-off hit. That
            means reusable tools, shared code, and clear learnings from every
            build.
          </p>

          <div className="mt-4 flex justify-end">
            <Link
              href="/about"
              className="inline-flex items-center small-text font-semibold text-cf-white hover:text-cf-teal"
            >
              Read Our Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
