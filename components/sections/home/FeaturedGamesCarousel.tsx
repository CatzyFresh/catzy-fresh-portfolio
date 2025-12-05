// components/sections/home/FeaturedGamesCarousel.tsx
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const featuredGames = [
  {
    id: "drone-dash",
    title: "Drone Dash",
    tag: "Arcade • WebGL",
    blurb:
      "Tight obstacle-dodging loops with instant restart and juicy feedback.",
    posterSrc: "/images/games/Drone-Dash-Poster.svg",
  },
  {
    id: "blackjack-empire",
    title: "Blackjack Empire",
    tag: "Casino • Mobile",
    blurb:
      "Classic blackjack core, multiple rule sets, and room for live-ops expansion.",
    posterSrc: "/images/games/Blackjack-Empire-Poster.svg",
  },
  {
    id: "facility-siege",
    title: "Facility Siege",
    tag: "Strategy • PC / Web",
    blurb:
      "Top-down tactical defense with wave design, upgrade paths, and meta systems.",
    // note: keep this spelling exactly as the file name in /public/images/games
    posterSrc: "/images/games/Facility-Seige-Poster.svg",
  },
  {
    id: "lucky-can",
    title: "Lucky Can",
    tag: "Casual • Mobile",
    blurb:
      "Tap-to-win pacing experiment blending slot rhythms with quick, visual rewards.",
    posterSrc: "/images/games/Lucky-Can-Poster.svg",
  },
];

export default function FeaturedGamesCarousel() {
  return (
    <section
      id="featured-games"
      className="border-b border-cf-dark-grey bg-cf-black"
      aria-labelledby="featured-games-heading"
    >
      <div className="mx-auto max-w-[var(--container-2xl)] px-4 py-12 md:py-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2
              id="featured-games-heading"
              className="heading-h2 text-cf-white"
            >
              Featured Games
            </h2>
            <p className="small-text text-cf-grey-text">
              A quick look at the prototypes and builds currently defining the
              Catzy Fresh lab.
            </p>
          </div>
          <Link
            href="/games"
            className="hidden small-text font-semibold text-cf-teal hover:text-cf-teal-glow md:inline-block"
          >
            View all games →
          </Link>
        </div>

        {/* Carousel rail */}
        <div className="mt-6 overflow-x-auto pb-4">
          <div className="flex gap-4 md:gap-6 snap-x snap-mandatory py-2">
            {featuredGames.map((game) => (
              <article
                key={game.id}
                className="snap-start shrink-0 basis-[80%] rounded-[1.75rem] border border-cf-dark-grey bg-cf-dark-grey/70 p-4 shadow-soft-card transition hover:border-cf-teal hover:shadow-neon-teal md:basis-[32%]"
              >
                {/* Poster */}
                <div className="mb-3 w-full overflow-hidden rounded-2xl border border-cf-dark-grey/60 bg-cf-black/40">
                  <div className="relative h-[150px] md:h-[180px] lg:h-[200px] w-full">
                    <Image
                      src={game.posterSrc}
                      alt={`${game.title} poster`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 200px, (min-width: 768px) 180px, 150px"
                      priority={game.id === "drone-dash"}
                    />
                  </div>
                </div>


                <h3 className="small-text font-semibold text-cf-white">
                  {game.title}
                </h3>
                <p className="small-text text-cf-teal">{game.tag}</p>

                <p className="mt-2 small-text text-cf-grey-text">
                  {game.blurb}
                </p>

                <div className="mt-4 flex flex-wrap gap-3 small-text">
                  {/* Secondary – View Game */}
                  <Button
                    variant="secondary"
                    href={`/games/${game.id}`}
                    className="small-text"
                  >
                    View Game
                  </Button>

                  {/* Primary – Play Demo */}
                  <Button variant="primary" className="small-text">
                    Play Demo
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-3 md:hidden">
          <Link
            href="/games"
            className="small-text font-semibold text-cf-teal hover:text-cf-teal-glow"
          >
            View all games →
          </Link>
        </div>
      </div>
    </section>
  );
}
