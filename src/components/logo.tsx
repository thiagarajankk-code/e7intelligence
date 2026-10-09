import { useId } from "react";
import { cn } from "@/lib/cn";

/**
 * e7 monogram: a geometric "e" beside a "7" drawn as three connected nodes.
 * The "e" inherits the current text colour; the "7" carries the brand gradient.
 */
export function LogoMark({ className }: { className?: string }) {
  const id = useId();

  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={cn("h-8 w-8", className)}
    >
      <defs>
        <linearGradient id={id} x1="23" y1="13" x2="35" y2="29" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--brand)" />
          <stop offset="1" stopColor="var(--accent)" />
        </linearGradient>
      </defs>
      <path
        d="M5.5 20.5H19.5A7 7 0 1 0 17.45 25.45"
        stroke="currentColor"
        strokeWidth="2.8"
      />
      <path d="M24 13.5H34L27 27.5" stroke={`url(#${id})`} strokeWidth="2.8" />
      <circle cx="24" cy="13.5" r="2.4" fill="var(--brand)" />
      <circle cx="34" cy="13.5" r="2.4" fill={`url(#${id})`} />
      <circle cx="27" cy="27.5" r="2.4" fill="var(--accent)" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-1.5", className)}>
      <LogoMark />
      {/* The mark already reads "e7", so the wordmark only carries the rest */}
      <span className="font-display text-lg font-medium tracking-tight">
        Intelligence
      </span>
    </span>
  );
}
