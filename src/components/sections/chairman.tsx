import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

export function Chairman() {
  return (
    <section
      id="chairman"
      className="scroll-mt-16 border-b border-border bg-surface py-24"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
          <Reveal className="mx-auto w-full max-w-[320px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-background">
              <Image
                src="/team/manimaran.png"
                alt="Manimaran, Chairman of e7Intelligence"
                fill
                sizes="(min-width: 1024px) 320px, 100vw"
                className="object-cover object-top"
                priority
              />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
              Chairman&apos;s message
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              A note from Manimaran
            </h2>
            <blockquote className="mt-6 space-y-4 text-lg leading-8 text-muted">
              <p>
                At e7Intelligence, we build software and AI tools that take on the
                repetitive, time-consuming work our customers face every day &mdash;
                turning slow manual processes into fast, dependable ones.
              </p>
              <p>
                Our vision is simple: give people and entrepreneurs practical
                technology that removes friction, so they can spend their time on
                the decisions and relationships that actually grow their business.
              </p>
            </blockquote>
            <p className="mt-8 text-sm font-medium">
              Manimaran
              <span className="block font-normal text-muted">
                Chairman, e7Intelligence
              </span>
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
