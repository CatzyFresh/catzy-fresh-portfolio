// components/sections/home/WhatWeBuildSection.tsx
import Link from "next/link";
import Image from "next/image";

const capabilities = [
  {
    title: "Game Design",
    desc: "Core loops, progression systems, feedback, difficulty curves, and retention-oriented structures.",
    iconSrc: "/images/icons/game-design.svg", // replace with your new illustration if needed
    iconAlt: "Game design illustration",
  },
  {
    title: "Development",
    desc: "Unity builds for Mobile & WebGL, performant prototypes, and scalable foundations for live ops.",
    iconSrc: "/images/icons/development.svg",
    iconAlt: "Development illustration",
  },
  {
    title: "Art & Branding",
    desc: "Cohesive visual identities, UI/UX, logo work, and polished presentation for players and partners.",
    iconSrc: "/images/icons/art-branding.svg",
    iconAlt: "Art and branding illustration",
  },
];

export default function WhatWeBuildSection() {
  return (
    <section
      className="border-b border-cf-dark-grey bg-cf-dark-grey"
      aria-labelledby="what-we-build-heading"
    >
      <div className="mx-auto max-w-[var(--container-2xl)] px-4 py-10 md:py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl space-y-2">
            <h2
              id="what-we-build-heading"
              className="heading-h2 text-cf-white"
            >
              What We Build
            </h2>
            <p className="body-text text-cf-grey-text">
              From first prototype to polished vertical slice, we cover design,
              development, and presentation under one neon-tinged roof.
            </p>
          </div>
          <Link
            href="/studio"
            className="small-text font-semibold text-cf-teal hover:text-cf-teal-glow"
          >
            Visit Studio Page →
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {capabilities.map((cap) => (
            <article
              key={cap.title}
              className="flex flex-col rounded-2xl border border-cf-teal bg-cf-black/80 p-6 shadow-soft-card"
            >
              {/* Illustration block (wider, similar language to posters, but smaller) */}
              <div className="mb-4 overflow-hidden rounded-xl border border-cf-teal/60 bg-cf-black/60">
                <div className="relative h-24 md:h-28 w-full">
                  <Image
                    src={cap.iconSrc}
                    alt={cap.iconAlt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 280px, (min-width: 768px) 220px, 100vw"
                  />
                </div>
              </div>

              <h3 className="small-text font-semibold text-cf-white">
                {cap.title}
              </h3>
              <p className="mt-2 small-text text-cf-grey-text">{cap.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
