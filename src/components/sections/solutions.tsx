import { Container } from "@/components/ui/container";

const solutions = [
  {
    title: "AI workflow automation",
    body: "Turn repetitive, manual processes into reliable automated flows — data entry, reporting, follow-ups, and handoffs.",
  },
  {
    title: "Custom AI assistants",
    body: "Domain-trained assistants that answer questions, draft work, and take action inside the tools your team already uses.",
  },
  {
    title: "Document & data intelligence",
    body: "Extract, summarize, and structure information from contracts, invoices, tickets, and knowledge bases.",
  },
  {
    title: "Entrepreneur toolkit",
    body: "Ready-to-use tools for solo founders and small teams: research, content, outreach, and operations without a full staff.",
  },
  {
    title: "Integration & delivery",
    body: "We connect AI to your CRM, spreadsheets, and internal systems, then ship it with monitoring and support.",
  },
  {
    title: "Advisory & build sprints",
    body: "Short, focused engagements to identify the highest-leverage use case and prove it with a working prototype.",
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="scroll-mt-16 border-b border-border py-24">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            What we build
          </h2>
          <p className="mt-4 text-lg text-muted">
            Software and services focused on outcomes, not hype. Each one is
            designed to pay for itself in time saved.
          </p>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item) => (
            <div key={item.title} className="bg-background p-8">
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
