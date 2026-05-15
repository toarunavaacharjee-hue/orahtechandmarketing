import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPayload } from "payload";
import config from "@payload-config";

import { FadeIn } from "@/components/FadeIn";

export const dynamic = "force-dynamic";

type PostDoc = {
  id: string | number;
  title: string;
  slug: string;
  excerpt: string;
  content: unknown;
  tags?: { tag: string }[] | null;
  publishedAt?: string | null;
};

function renderLexical(node: unknown): string {
  if (!node || typeof node !== "object") return "";
  const n = node as {
    type?: string;
    children?: unknown[];
    text?: string;
    format?: number;
    tag?: string;
    listType?: string;
    url?: string;
    newTab?: boolean;
    root?: { children?: unknown[] };
  };

  if ("root" in n && n.root) {
    return (n.root.children ?? []).map(renderLexical).join("");
  }

  const children = (n.children ?? []).map(renderLexical).join("");

  switch (n.type) {
    case "paragraph":
      return children ? `<p>${children}</p>` : "";
    case "heading":
      return `<${n.tag}>${children}</${n.tag}>`;
    case "list":
      return n.listType === "bullet" ? `<ul>${children}</ul>` : `<ol>${children}</ol>`;
    case "listitem":
      return `<li>${children}</li>`;
    case "link": {
      const rel = n.newTab ? ' rel="noopener noreferrer"' : "";
      const target = n.newTab ? ' target="_blank"' : "";
      return `<a href="${n.url ?? "#"}"${target}${rel}>${children}</a>`;
    }
    case "text": {
      let t = (n.text ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
      if (n.format && n.format & 1) t = `<strong>${t}</strong>`;
      if (n.format && n.format & 2) t = `<em>${t}</em>`;
      if (n.format && n.format & 8) t = `<code>${t}</code>`;
      return t;
    }
    case "quote":
      return `<blockquote>${children}</blockquote>`;
    case "horizontalrule":
      return "<hr />";
    default:
      return children;
  }
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const payload = await getPayload({ config });
    const res = await payload.find({
      collection: "posts",
      where: { slug: { equals: slug }, status: { equals: "published" } },
      limit: 1,
    });
    const post = res.docs[0] as PostDoc | undefined;
    if (post) return { title: post.title, description: post.excerpt };
  } catch {}
  return { title: "Blog" };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  let post: PostDoc | null = null;
  try {
    const payload = await getPayload({ config });
    const res = await payload.find({
      collection: "posts",
      where: { slug: { equals: slug }, status: { equals: "published" } },
      limit: 1,
    });
    post = (res.docs[0] as PostDoc) ?? null;
  } catch {
    post = null;
  }

  if (!post) notFound();

  const tag = post.tags?.[0]?.tag ?? null;
  const html = renderLexical(post.content);

  return (
    <div className="pt-10 pb-24">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
        <FadeIn>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition"
          >
            ← Back to Blog
          </Link>

          <div className="mt-8">
            {tag && (
              <div className="inline-flex rounded-full bg-[#FF5C1A]/10 px-3 py-1 text-xs font-semibold text-[#FF5C1A] ring-1 ring-[#FF5C1A]/20">
                {tag}
              </div>
            )}
            <h1 className="mt-4 font-heading text-3xl tracking-tight text-white sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">{post.excerpt}</p>
            {post.publishedAt && (
              <p className="mt-3 text-sm text-white/40">
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            )}
          </div>

          <div className="mt-10 border-t border-white/10 pt-10">
            <div
              className="text-white/80 leading-7 [&>*+*]:mt-5 [&_h1]:font-heading [&_h1]:text-3xl [&_h1]:text-white [&_h1]:mt-8 [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:text-white [&_h2]:mt-8 [&_h3]:font-heading [&_h3]:text-xl [&_h3]:text-white [&_h3]:mt-6 [&_h4]:font-heading [&_h4]:text-lg [&_h4]:text-white [&_h4]:mt-6 [&_p]:leading-7 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mt-1 [&_blockquote]:border-l-2 [&_blockquote]:border-[#00D4FF] [&_blockquote]:pl-4 [&_blockquote]:text-white/60 [&_blockquote]:italic [&_a]:text-[#00D4FF] [&_a]:hover:text-white [&_a]:transition [&_code]:bg-white/10 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_code]:text-[#b8ff6c] [&_strong]:text-white [&_em]:text-white/80 [&_hr]:border-white/10 [&_hr]:my-8"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>

          <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/50 hover:text-white transition"
            >
              ← All posts
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-full bg-[#FF5C1A] px-5 text-sm font-semibold text-black hover:brightness-110 transition"
            >
              Work with us →
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
