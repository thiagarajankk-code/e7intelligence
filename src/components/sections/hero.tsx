import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { HeroBrain } from "@/components/motion/hero-brain";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[480px] w-[640px] bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--brand)_22%,transparent),transparent)] blur-2xl"
      />
      <Container className="relative py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="max-w-xl">
            <Reveal>
              <h1 className="text-balance font-display text-4xl font-semibold tracking-tight sm:text-5xl sm:leading-[1.08]">
                AI tools that solve{" "}
                <span className="text-gradient">real problems</span> for people
                and entrepreneurs
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-pretty text-lg text-muted">
                e7Intelligence builds practical AI software that removes
                friction from everyday work — so founders and teams can move
                faster and get more done without the busywork.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button href="#contact">Talk to us</Button>
                <Button href="#solutions" variant="secondary">
                  See what we build
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal
            delay={0.2}
            y={0}
            className="mx-auto w-full max-w-md lg:max-w-none"
          >
            <HeroBrain />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
