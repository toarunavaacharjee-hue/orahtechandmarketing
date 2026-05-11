"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { BRAND, NAV_LINKS } from "@/lib/constants";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = useMemo(() => NAV_LINKS, []);

  return (
    <header
      className={cx(
        "sticky top-0 z-50 w-full",
        "border-b border-white/5",
        scrolled ? "backdrop-blur-xl bg-black/30" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF]/70 rounded"
        >
          <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
            <span className="h-4 w-4 rounded bg-[#FF5C1A]" />
            <span className="pointer-events-none absolute -inset-1 rounded-xl opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-70 bg-[#00D4FF]/20" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-heading text-sm tracking-tight text-white">
              {BRAND.name}
            </span>
            <span className="text-xs text-white/60">{BRAND.tagline}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cx(
                  "relative text-sm font-medium transition-colors",
                  active ? "text-white" : "text-white/70 hover:text-white"
                )}
              >
                <span>{l.label}</span>
                {active ? (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-2 left-0 right-0 h-[2px] rounded-full bg-[#FF5C1A]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/free-audit"
            className={cx(
              "hidden md:inline-flex items-center justify-center",
              "h-10 rounded-full px-4 text-sm font-semibold",
              "bg-[#FF5C1A] text-black",
              "hover:brightness-110 transition",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5C1A]/70"
            )}
          >
            Get a Free Audit
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className={cx(
              "md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full",
              "bg-white/5 ring-1 ring-white/10 text-white/90",
              "hover:bg-white/10 transition",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF]/70"
            )}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span className="sr-only">{mobileOpen ? "Close" : "Open"} menu</span>
            <div className="grid gap-1.5">
              <span
                className={cx(
                  "block h-0.5 w-5 bg-current transition-transform",
                  mobileOpen && "translate-y-2 rotate-45"
                )}
              />
              <span
                className={cx(
                  "block h-0.5 w-5 bg-current transition-opacity",
                  mobileOpen && "opacity-0"
                )}
              />
              <span
                className={cx(
                  "block h-0.5 w-5 bg-current transition-transform",
                  mobileOpen && "-translate-y-2 -rotate-45"
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="md:hidden border-t border-white/5 bg-black/60 backdrop-blur-xl">
          <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
            <div className="grid gap-2">
              {links.map((l) => {
                const active = pathname === l.href;
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className={cx(
                      "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold",
                      active
                        ? "bg-white/5 text-white ring-1 ring-white/10"
                        : "text-white/80 hover:text-white hover:bg-white/5"
                    )}
                  >
                    <span>{l.label}</span>
                    <span
                      className={cx(
                        "h-1.5 w-1.5 rounded-full",
                        active ? "bg-[#FF5C1A]" : "bg-white/20"
                      )}
                    />
                  </Link>
                );
              })}
              <Link
                href="/free-audit"
                onClick={() => setMobileOpen(false)}
                className={cx(
                  "mt-2 inline-flex h-11 items-center justify-center rounded-xl px-4 text-sm font-semibold",
                  "bg-[#FF5C1A] text-black hover:brightness-110 transition"
                )}
              >
                Get a Free Audit
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

