import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function CTA() {
  return (
    <section id="contact" className="scroll-mt-16 py-24">
      <Container>
        <div className="rounded-3xl border border-border bg-surface px-8 py-16 text-center sm:px-16">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Have a problem worth automating?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
            Tell us what&apos;s slowing you down. We&apos;ll tell you honestly
            whether AI is the right fix — and if so, how we&apos;d approach it.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={`mailto:${site.email}`}>Email {site.email}</Button>
            <Button href={`https://${site.domain}`} variant="secondary">
              {site.domain}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
