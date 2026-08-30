import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 h-[400px] bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--brand)_30%,transparent),transparent)] blur-2xl"
      />
      <Container className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
            IT &amp; AI products and services
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            AI tools that solve real problems for people and entrepreneurs
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted">
            e7Intelligence builds practical AI software that removes friction from
            everyday work — so founders and teams can move faster and get more done
            without the busywork.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="#contact">Talk to us</Button>
            <Button href="#solutions" variant="secondary">
              See what we build
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
