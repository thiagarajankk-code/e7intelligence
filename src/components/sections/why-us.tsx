import { Container } from "@/components/ui/container";

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
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Why e7Intelligence
          </h2>
          <p className="mt-4 text-lg text-muted">
            An IT and AI company built around one idea: technology should quietly
            do the work, so people can focus on the parts that matter.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {points.map((p) => (
            <div key={p.stat}>
              <p className="text-lg font-medium text-brand">{p.stat}</p>
              <p className="mt-3 text-sm leading-6 text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
