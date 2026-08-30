import { Container } from "@/components/ui/container";

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
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-lg text-muted">
            A simple path from idea to something running in production.
          </p>
        </div>
        <ol className="mt-14 grid gap-8 sm:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n} className="rounded-2xl border border-border p-8">
              <span className="font-mono text-sm text-muted">{s.n}</span>
              <h3 className="mt-4 text-lg font-medium">{s.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
