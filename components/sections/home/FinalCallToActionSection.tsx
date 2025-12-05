// components/sections/home/FinalCallToActionSection.tsx
import { Button } from "@/components/ui/Button";

export default function FinalCallToActionSection() {
  return (
    <section className="bg-cf-black" aria-labelledby="final-cta-heading">
      <div className="mx-auto max-w-[var(--container-2xl)] px-4 py-12 md:py-16 text-center">
        <h2
          id="final-cta-heading"
          className="heading-h1 mb-4 text-cf-white sm:text-display"
        >
          Ready to Dive In?
        </h2>
        <p className="body-text text-cf-grey-text max-w-2xl mx-auto">
          Browse the games we&apos;re building now, or reach out if you want to
          collaborate, publish, or bring Catzy Fresh into your next idea.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button variant="primary" href="/games">
            Explore Our Games
          </Button>
          <Button variant="secondary" href="/contact">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
