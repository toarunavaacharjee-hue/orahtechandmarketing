import type { Metadata } from "next";
import Link from "next/link";
import { getPayload } from "payload";
import config from "@payload-config";

import { FadeIn } from "@/components/FadeIn";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Design notes, creative playbooks, and practical insights on branding, content systems, and web experience.",
};

type PostListItem = {
  id: string | number;
  title: string;
  slug: string;
  excerpt: string;
  tags?: { tag: string }[] | null;
  publishedAt?: string | null;
};

export default async function BlogPage() {
  let docs: PostListItem[] = [];
  try {
    const payload = await getPayload({ config });
    const res = await payload.find({
      collection: "posts",
      where: { status: { equals: "published" } },
      sort: "-publishedAt",
      limit: 30,
    });
    docs = res.docs as PostListItem[];
  } catch {
    docs = [];
  }

  return (
    <div className="pt-10">
      <section className="pb-14">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-white/75 ring-1 ring-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00D4FF]" />
              Insights and playbooks
            </div>
            <h1 className="mt-6 font-heading text-4xl tracking-tight text-white sm:text-5xl">
              Blog
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
              Short, actionable notes—built for founders, marketing teams, and design leads.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          {docs.length ? (
            <div className="grid gap-4 md:grid-cols-3">
              {docs.map((p, idx) => {
                const tag = p?.tags?.[0]?.tag ?? "Design";
                return (
                  <FadeIn key={p.id} delay={idx * 0.03}>
                    <Link
                      href={`/blog/${p.slug}`}
                      className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-white/20 hover:bg-white/[0.05]"
                    >
                      <div className="inline-flex self-start rounded-full bg-[#FF5C1A]/10 px-3 py-1 text-xs font-semibold text-[#FF5C1A] ring-1 ring-[#FF5C1A]/20">
                        {tag}
                      </div>
                      <div className="mt-4 font-heading text-xl text-white">{p.title}</div>
                      <p className="mt-3 flex-1 text-sm leading-6 text-white/70">{p.excerpt}</p>
                      {p.publishedAt && (
                        <p className="mt-3 text-xs text-white/35">
                          {new Date(p.publishedAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </p>
                      )}
                      <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#00D4FF] opacity-0 transition group-hover:opacity-100">
                        Read more <span aria-hidden="true">→</span>
                      </div>
                    </Link>
                  </FadeIn>
                );
              })}
            </div>
          ) : (
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-white/70">
              No posts yet. Create your first post in{" "}
              <Link
                href="/orah-control"
                className="text-[#00D4FF] hover:text-white transition font-semibold"
              >
                /orah-control
              </Link>
              .
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
