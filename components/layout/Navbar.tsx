// components/layout/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Games", href: "/games" },
  { label: "Studio", href: "/studio" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Devlogs", href: "/devlogs" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Later you can switch this based on theme for light/dark variants
  const logoSrc = "/images/logo/catzy-fresh-icon.png";

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg border border-teal-400/70 bg-slate-950 shadow-[0_0_12px_rgba(45,212,191,0.35)]">
            <Image
              src={logoSrc}
              alt="Catzy Fresh logo"
              width={24}
              height={24}
              className="object-contain"
            />
          </div>
          <span className="text-sm font-semibold tracking-wide text-teal-300">
            CATZY FRESH
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm transition ${
                  active
                    ? "text-teal-300"
                    : "text-slate-300/70 hover:text-teal-200"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-teal-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile menu button */}
        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          <span className="text-slate-200">{open ? "✕" : "☰"}</span>
        </button>
      </nav>

      {/* Mobile nav dropdown */}
      {open && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-3">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-2 py-2 text-sm ${
                    active
                      ? "bg-teal-500/10 text-teal-300"
                      : "text-slate-200/80 hover:bg-slate-900"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
