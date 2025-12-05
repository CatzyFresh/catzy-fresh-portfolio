// components/ui/Button.tsx
"use client";

import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  variant?: ButtonVariant;
  href?: string; // if provided, renders as <Link>
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Button({
  variant = "primary",
  href,
  children,
  className,
  ...rest
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full font-sans text-button transition-transform duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cf-teal focus-visible:ring-offset-2 focus-visible:ring-offset-cf-black";

  const variantClasses =
    variant === "primary"
      ? // PRIMARY – filled teal, strong glow, darker + inner shadow on press
        "bg-cf-teal text-cf-black shadow-neon-teal px-6 py-2.5 hover:-translate-y-0.5 hover:bg-cf-teal-glow hover:shadow-neon-teal active:bg-[#0b7f82] active:shadow-inner"
      : // SECONDARY – outline teal, subtle glow on hover, teal fill + inner shadow on press
        "border border-cf-teal bg-cf-black text-cf-white shadow-soft-card px-5 py-2 hover:-translate-y-0.5 hover:shadow-neon-teal active:bg-cf-teal active:text-cf-black active:shadow-inner";

  const classes = cn(baseClasses, variantClasses, className);

  // Link-style button
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  // Regular button
  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
