// components/sections/home/HeroSection.tsx
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section
      className="relative border-b border-cf-dark-grey bg-cf-black"
      aria-labelledby="hero-heading"
    >
      {/* Cinematic background (CSS only, no image needed for now) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-50 blur-3xl">
          <div className="h-full w-full bg-[radial-gradient(circle_at_10%_20%,rgba(17,179,182,0.4),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(17,180,182,0.3),transparent_60%)]" />
        </div>
        <div className="absolute inset-0 opacity-[0.15] mix-blend-soft-light bg-[linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-size-[0.5px_3px]" />
      </div>

      <div className="relative mx-auto flex max-w-[var(--container-2xl)] flex-col-reverse gap-10 px-4 py-16 md:flex-row md:items-center md:py-20">
        {/* LEFT */}
        <div className="max-w-xl space-y-6">
          <p className="small-text uppercase tracking-[0.25em] text-cf-grey-text">
            Catzy Fresh Studio
          </p>

          <h1
            id="hero-heading"
            className="heading-h1 text-cf-white sm:text-display"
          >
            We Build Fun, Fast &amp; Fresh Games
          </h1>

          <p className="small-text text-cf-grey-text">
            Mobile • WebGL • Indie Experiments
          </p>

          <p className="body-text text-cf-grey-text">
            A focused indie studio crafting sharp, snackable experiences with
            neon style, tight feedback loops, and room to grow into full
            products.
          </p>

          <div className="pt-2">
            <Button variant="primary" href="#featured-games">
              Explore Our Games
            </Button>
          </div>
        </div>

        {/* RIGHT – Catzy Fresh info card */}
        <div className="flex flex-1 items-center justify-center">
          <div className="relative h-64 w-full max-w-sm rounded-[1.75rem] border border-cf-teal bg-cf-dark-grey/60 p-px shadow-neon-teal">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[1.7rem] bg-cf-black">
              <div className="absolute inset-0 opacity-60">
                <div className="h-full w-full bg-[radial-gradient(circle_at_20%_0%,rgba(17,179,182,0.4),transparent_55%),radial-gradient(circle_at_80%_90%,rgba(17,180,182,0.3),transparent_60%)]" />
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-soft-light bg-[linear-gradient(to_bottom,rgba(255,255,255,0.16)_1px,transparent_1px)] bg-size-[0.5px_3px]" />

              <div className="relative flex h-full flex-col justify-between p-4">
                {/* Top row: logo + label */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cf-teal bg-cf-black shadow-neon-teal overflow-hidden">
                    <Image
                      src="/images/logo/catzy-fresh-icon.png"
                      alt="Catzy Fresh logo"
                      width={32}
                      height={32}
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <div className="space-y-0.5">
                    <p className="small-text text-cf-grey-text">
                      Indie Game Studio
                    </p>
                    <p className="small-text font-semibold text-cf-white">
                      CATZY FRESH
                    </p>
                  </div>
                </div>

                {/* Middle: capabilities */}
                <div className="grid grid-cols-3 gap-2 small-text text-cf-grey-text">
                  <div className="rounded-xl border border-cf-dark-grey bg-cf-black/60 p-2">
                    <p className="text-[0.7rem] font-semibold text-cf-teal">
                      Mobile
                    </p>
                    <p className="text-[0.7rem]">Touch-first gameplay</p>
                  </div>
                  <div className="rounded-xl border border-cf-dark-grey bg-cf-black/60 p-2">
                    <p className="text-[0.7rem] font-semibold text-cf-teal">
                      WebGL
                    </p>
                    <p className="text-[0.7rem]">1-click browser demos</p>
                  </div>
                  <div className="rounded-xl border border-cf-dark-grey bg-cf-black/60 p-2">
                    <p className="text-[0.7rem] font-semibold text-cf-teal">
                      Prototypes
                    </p>
                    <p className="text-[0.7rem]">Fast iteration loops</p>
                  </div>
                </div>

                {/* Bottom: catchy studio line */}
                <p className="small-text text-cf-grey-text">
                  Catzy Fresh is a compact indie lab for sharp prototypes, neon
                  visuals, and snackable builds that can grow into full games.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
