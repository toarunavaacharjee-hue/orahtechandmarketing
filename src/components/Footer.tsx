import Link from "next/link";

import { BRAND, HOME, NAV_LINKS } from "@/lib/constants";

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-black/40">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                <svg width="20" height="20" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                  <circle cx="11" cy="11" r="8.5" stroke="#FF5C1A" strokeWidth="2.5" />
                  <circle cx="11" cy="11" r="4" stroke="#00D4FF" strokeWidth="1.5" strokeDasharray="2 2" />
                  <circle cx="11" cy="11" r="1.5" fill="#FF5C1A" />
                </svg>
              </div>
              <div>
                <div className="font-heading text-white">{BRAND.name}</div>
                <div className="text-sm text-white/60">{BRAND.tagline}</div>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/65">
              Creative-first partner for ambitious brands. Premium design, clear systems,
              and modern web execution—built to scale.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={BRAND.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 text-white/60 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white"
              >
                <LinkedInIcon />
              </a>
              <a
                href={BRAND.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 text-white/60 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white"
              >
                <InstagramIcon />
              </a>
              <a
                href={BRAND.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 text-white/60 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 md:col-span-7">
            <div>
              <div className="text-sm font-semibold text-white">Quick links</div>
              <ul className="mt-4 grid gap-2 text-sm">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-white/65 hover:text-white transition">
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/free-audit" className="text-[#FF5C1A] hover:text-white transition font-semibold">
                    Free Audit →
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold text-white">Services</div>
              <ul className="mt-4 grid gap-2 text-sm">
                {HOME.services.items.map((s) => (
                  <li key={s.title}>
                    <Link href="/services" className="text-white/65 hover:text-white transition">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold text-white">Contact</div>
              <ul className="mt-4 grid gap-3 text-sm text-white/65">
                <li>
                  <a href={`mailto:${BRAND.email}`} className="hover:text-white transition">
                    {BRAND.email}
                  </a>
                </li>
                <li>{BRAND.location}</li>
              </ul>
              <div className="mt-6">
                <Link
                  href="/free-audit"
                  className="inline-flex h-10 items-center justify-center rounded-full bg-[#FF5C1A] px-4 text-sm font-semibold text-black hover:brightness-110 transition"
                >
                  Get a Free Audit
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/5 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white transition">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms</Link>
            <Link href="/sitemap.xml" className="hover:text-white transition">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
