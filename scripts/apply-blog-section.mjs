import fs from "node:fs";

// NAV_LINKS: restore Blog
const constantsPath = "src/lib/constants.ts";
let constants = fs.readFileSync(constantsPath, "utf8");
if (!constants.includes('{ label: "Blog", href: "/blog" }')) {
  constants = constants.replace(
    '  { label: "Work", href: "/work" },\n  { label: "Contact", href: "/contact" },',
    '  { label: "Work", href: "/work" },\n  { label: "Blog", href: "/blog" },\n  { label: "Contact", href: "/contact" },',
  );
  fs.writeFileSync(constantsPath, constants);
}

// Home: simple blog section (no Payload)
const pagePath = "src/app/page.tsx";
let page = fs.readFileSync(pagePath, "utf8");

if (!page.includes('from "@/components/FadeIn"')) {
  page = page.replace(
    'import { CTABanner } from "@/components/CTABanner";',
    'import { CTABanner } from "@/components/CTABanner";\nimport { FadeIn } from "@/components/FadeIn";',
  );
}

const blogSection = `
      <section className="border-t border-white/5 py-20">
        <motion.div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
`;

// Fix - don't use motion, use plain section
const blogSectionCorrect = `
      <section className="border-t border-white/5 py-20">
        <motion.div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
`;

const sectionBlock = `
      <section className="border-t border-white/5 py-20">
        <motion.div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
`;

// Actually write the correct block without motion
const insert = `
      <section className="border-t border-white/5 py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <motion.div className="flex flex-wrap items-end justify-between gap-6">
`;

// Let me simplify entirely
const block = `
      <section className="border-t border-white/5 py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <motion.div>
`;

// Final clean block
const homeBlogSection = `      <section className="border-t border-white/5 py-20">
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
              </motion.div>
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

// Fix typos in block - I had motion.div and wrong closing tags
const homeBlogSectionFixed = `      <section className="border-t border-white/5 py-20">
        <motion.div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
`;

const finalBlock = `      <section className="border-t border-white/5 py-20">
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

if (!page.includes("Read the blog")) {
  page = page.replace(
    "      <Testimonials />\n      <ProcessTimeline />\n      <CTABanner />",
    `      <Testimonials />\n      <ProcessTimeline />\n\n${finalBlock}      <CTABanner />`,
  );
  fs.writeFileSync(pagePath, page);
}

// Blog empty state: no /orah-control gateway
const blogPath = "src/app/blog/page.tsx";
let blog = fs.readFileSync(blogPath, "utf8");
const oldEmpty = `            <motion.div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-white/70">
              No posts yet. Create your first post in{" "}
              <Link
                href="/orah-control"
                className="text-[#00D4FF] hover:text-white transition font-semibold"
              >
                /orah-control
              </Link>
              .
            </div>`;

const oldEmpty2 = `            <motion.div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-white/70">
              No posts yet. Create your first post in{" "}
              <Link
                href="/orah-control"
                className="text-[#00D4FF] hover:text-white transition font-semibold"
              >
                /orah-control
              </Link>
              .
            </div>`;

const newEmpty = `            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-white/70">
              New articles are on the way. Check back soon for notes on brand, web, and
              creative systems.
            </div>`;

if (blog.includes("/orah-control")) {
  blog = blog.replace(
    /            <div className="rounded-2xl border border-white\/10 bg-white\/\[0\.03\] p-8 text-white\/70">\s*No posts yet\.[\s\S]*?<\/motion.div>/,
    newEmpty.trim(),
  );
  if (blog.includes("/orah-control")) {
    blog = blog.replace(
      `            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-white/70">
              No posts yet. Create your first post in{" "}
              <Link
                href="/orah-control"
                className="text-[#00D4FF] hover:text-white transition font-semibold"
              >
                /orah-control
              </Link>
              .
            </div>`,
      newEmpty.trim(),
    );
  }
  fs.writeFileSync(blogPath, blog);
}

console.log("Done");
