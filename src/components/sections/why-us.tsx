import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";

const points = [
  {
    stat: "Practical first",
    body: "We start from a real problem and a measurable result — not a demo. If it doesn't save time or money, we don't ship it.",
  },
  {
    stat: "Built for small teams",
    body: "Our tools assume you don't have a large IT department. Setup is light, and we handle the plumbing.",
  },
  {
    stat: "Own your stack",
    body: "No lock-in games. You keep your data, your accounts, and clear documentation for everything we deliver.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="scroll-mt-16 border-b border-border py-24">
      <Container>
        <SectionHeading eyebrow="02 / Why us" title="Why e7Intelligence">
          An IT and AI company built around one idea: technology should quietly
          do the work, so people can focus on the parts that matter.
        </SectionHeading>
        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {points.map((p, i) => (
            <Reveal
              key={p.stat}
              delay={i * 0.1}
              className="border-t border-border pt-6"
            >
              <span className="font-mono text-xs text-muted">0{i + 1}</span>
              <p className="mt-3 font-display text-lg font-medium text-brand">
                {p.stat}
              </p>
              <p className="mt-3 text-sm leading-6 text-muted">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
