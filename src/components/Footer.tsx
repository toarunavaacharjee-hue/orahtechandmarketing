import Link from "next/link";

import { BRAND, HOME, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/40">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                <div className="h-4 w-4 rounded bg-[#FF5C1A]" />
              </div>
              <div>
                <div className="font-heading text-white">{BRAND.name}</div>
                <div className="text-sm text-white/60">{BRAND.tagline}</div>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/65">
              Tech-first, performance-obsessed growth partner for ambitious brands.
              Strategy, execution, and automation—built to scale.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 md:col-span-7">
            <div>
              <div className="text-sm font-semibold text-white">Quick links</div>
              <ul className="mt-4 grid gap-2 text-sm">
                {NAV_LINKS.filter((l) => l.href !== "/blog").map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-white/65 hover:text-white transition"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold text-white">Services</div>
              <ul className="mt-4 grid gap-2 text-sm">
                {HOME.services.items.map((s) => (
                  <li key={s.title}>
                    <Link
                      href="/services"
                      className="text-white/65 hover:text-white transition"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold text-white">Contact</div>
              <ul className="mt-4 grid gap-2 text-sm text-white/65">
                <li>
                  <a
                    href={`mailto:${HOME.footer.contact.email}`}
                    className="hover:text-white transition"
                  >
                    {HOME.footer.contact.email}
                  </a>
                </li>
                <li>
                  <a href="tel:+919000000000" className="hover:text-white transition">
                    {HOME.footer.contact.phone}
                  </a>
                </li>
                <li>{HOME.footer.contact.city}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/5 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <div>© 2025 {BRAND.name}. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white transition">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

