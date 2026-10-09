import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { StepRail } from "@/components/motion/step-rail";

const steps = [
  {
    n: "01",
    title: "Tell us the problem",
    body: "A short call to understand the workflow, the people involved, and what a good outcome looks like.",
  },
  {
    n: "02",
    title: "We prototype fast",
    body: "Within days you get a working prototype on real data, so you can judge it on results — not slides.",
  },
  {
    n: "03",
    title: "Ship and support",
    body: "We integrate it into your tools, hand over documentation, and stay on for monitoring and improvements.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-16 border-b border-border py-24"
    >
      <Container>
        <SectionHeading eyebrow="03 / Process" title="How it works">
          A simple path from idea to something running in production.
        </SectionHeading>
        <ol className="relative mt-14 grid gap-8 sm:grid-cols-3 sm:pt-10">
          <StepRail />
          {steps.map((s, i) => (
            <li key={s.n} className="relative">
              {/* Node where the step hangs off the rail */}
              <span
                aria-hidden
                className="absolute -top-10 left-8 hidden h-10 w-px bg-line sm:block"
              >
                <span className="absolute -left-1 -top-1 h-2 w-2 rounded-full bg-brand" />
              </span>
              <Reveal
                delay={i * 0.12}
                className="h-full rounded-2xl border border-border bg-background p-8"
              >
                <span className="font-mono text-sm text-brand">{s.n}</span>
                <h3 className="mt-4 font-display text-lg font-medium">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">{s.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
