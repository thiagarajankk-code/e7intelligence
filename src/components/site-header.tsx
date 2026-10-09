import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" aria-label={site.name}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button href="#contact" className="hidden md:inline-flex">
          Get in touch
        </Button>
      </Container>
      <ScrollProgress />
    </header>
  );
}
