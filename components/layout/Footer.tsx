// components/layout/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 md:flex-row md:items-center md:justify-between">
        <div className="text-xs text-slate-400">
          © {new Date().getFullYear()} Catzy Fresh Studio. All rights reserved.
        </div>
        <div className="flex gap-4 text-xs text-slate-400">
          <Link href="/devlogs" className="hover:text-teal-300">
            Devlogs
          </Link>
          <Link href="/careers" className="hover:text-teal-300">
            Careers
          </Link>
          <Link href="/contact" className="hover:text-teal-300">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
