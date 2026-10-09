import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import {
  SolutionScene,
  type SolutionSceneName,
} from "@/components/motion/solution-scenes";

const solutions: Array<{
  scene: SolutionSceneName;
  title: string;
  body: string;
}> = [
  {
    scene: "workflow",
    title: "AI workflow automation",
    body: "Turn repetitive, manual processes into reliable automated flows — data entry, reporting, follow-ups, and handoffs.",
  },
  {
    scene: "assistant",
    title: "Custom AI assistants",
    body: "Domain-trained assistants that answer questions, draft work, and take action inside the tools your team already uses.",
  },
  {
    scene: "documents",
    title: "Document & data intelligence",
    body: "Extract, summarize, and structure information from contracts, invoices, tickets, and knowledge bases.",
  },
  {
    scene: "toolkit",
    title: "Entrepreneur toolkit",
    body: "Ready-to-use tools for solo founders and small teams: research, content, outreach, and operations without a full staff.",
  },
  {
    scene: "integration",
    title: "Integration & delivery",
    body: "We connect AI to your CRM, spreadsheets, and internal systems, then ship it with monitoring and support.",
  },
  {
    scene: "sprints",
    title: "Advisory & build sprints",
    body: "Short, focused engagements to identify the highest-leverage use case and prove it with a working prototype.",
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="scroll-mt-16 border-b border-border py-24">
      <Container>
        <SectionHeading eyebrow="01 / Solutions" title="What we build">
          Software and services focused on outcomes, not hype. Each one is
          designed to pay for itself in time saved.
        </SectionHeading>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item, i) => (
            <div
              key={item.title}
              className="group bg-background p-8 transition-colors hover:bg-surface"
            >
              <Reveal delay={(i % 3) * 0.08}>
                <SolutionScene name={item.scene} />
                <h3 className="mt-6 font-display text-lg font-medium">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.body}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
