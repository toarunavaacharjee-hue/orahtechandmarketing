import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const file = resolve(root, "src/app/page.tsx");

let src = readFileSync(file, "utf8");

const blogSection = `
      <section className="border-t border-white/5 py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00D4FF]">
                  Blog
                </p>
                <h2 className="mt-2 font-heading text-3xl tracking-tight text-white sm:text-4xl">
                  Insights and playbooks
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-white/70">
                  Short, actionable notes on branding, content systems, and web experience—for
                  founders, marketing teams, and design leads.
                </p>
              </div>
              <Link
                href="/blog"
                className="inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-white/5 px-5 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/10 transition"
              >
                Read the blog →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
`;

src = src.replace(blogSection, "\n");

// Also remove unused imports if FadeIn and Link are no longer needed
// FadeIn might still be used — let's just remove the Link import if /blog was its only use
// Check if Link is still used elsewhere
if (!src.includes('href="/blog"') && !src.includes("href='/blog'")) {
  // Link is still used for /industries, /free-audit etc so keep it
}

writeFileSync(file, src, "utf8");
console.log("Done: blog section removed from page.tsx");
