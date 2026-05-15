"use client";

import Link from "next/link";
import { useState } from "react";

import { FadeIn } from "@/components/FadeIn";
import { BLOG_POSTS, type BlogPost } from "@/lib/blog-posts";

const categories = ["All", "Branding", "Web Design", "AI & Automation", "Creative Process", "Strategy"] as const;

function PostCard({ p }: { p: BlogPost }) {
  return (
    <Link
      href={`/blog/${p.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-white/20 hover:bg-white/[0.05]"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="inline-flex rounded-full bg-[#FF5C1A]/10 px-3 py-1 text-xs font-semibold text-[#FF5C1A] ring-1 ring-[#FF5C1A]/20">
          {p.tag}
        </div>
        <span className="text-xs text-white/35">{p.readTime} min read</span>
      </div>
      <div className="mt-4 font-heading text-xl text-white">{p.title}</div>
      <p className="mt-3 flex-1 text-sm leading-6 text-white/70">{p.excerpt}</p>
      <p className="mt-3 text-xs text-white/35">
        {new Date(p.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
      </p>
      <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#00D4FF] opacity-0 transition group-hover:opacity-100">
        Read more <span aria-hidden="true">→</span>
      </div>
    </Link>
  );
}

export function BlogListClient() {
  const [active, setActive] = useState<string>("All");
  const sorted = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  const posts = active === "All" ? sorted : sorted.filter((p) => p.category === active);

  return (
    <div className="pt-10">
      <section className="pb-14">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-white/75 ring-1 ring-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00D4FF]" />
              Insights and playbooks
            </div>
            <h1 className="mt-6 font-heading text-4xl tracking-tight text-white sm:text-5xl">Blog</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
              Short, actionable notes—built for founders, marketing teams, and design leads.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={[
                  "h-9 rounded-full px-4 text-sm font-semibold transition",
                  active === c
                    ? "bg-white/10 text-white ring-1 ring-white/20"
                    : "text-white/60 ring-1 ring-white/10 hover:text-white hover:bg-white/5",
                ].join(" ")}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {posts.length === 0 ? (
              <p className="col-span-3 py-10 text-sm text-white/50">No posts in this category yet.</p>
            ) : (
              posts.map((p, idx) => (
                <FadeIn key={p.slug} delay={idx * 0.04}>
                  <PostCard p={p} />
                </FadeIn>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
