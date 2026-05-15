import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FadeIn } from "@/components/FadeIn";
import { BLOG_POSTS, getPostBySlug } from "@/lib/blog-posts";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Blog" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="pt-10 pb-24">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
        <FadeIn>
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition">
            ← Back to Blog
          </Link>

          <div className="mt-8">
            <div className="inline-flex rounded-full bg-[#FF5C1A]/10 px-3 py-1 text-xs font-semibold text-[#FF5C1A] ring-1 ring-[#FF5C1A]/20">
              {post.tag}
            </div>
            <h1 className="mt-4 font-heading text-3xl tracking-tight text-white sm:text-4xl lg:text-5xl">{post.title}</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">{post.excerpt}</p>
            <p className="mt-3 text-sm text-white/40">
              {new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>

          <div className="mt-10 border-t border-white/10 pt-10">
            <div
              className="text-white/80 leading-7 [&>*+*]:mt-5 [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:text-white [&_h2]:mt-10 [&_h2]:mb-3 [&_h3]:font-heading [&_h3]:text-xl [&_h3]:text-white [&_h3]:mt-8 [&_p]:leading-7 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_li]:leading-6 [&_blockquote]:border-l-2 [&_blockquote]:border-[#00D4FF] [&_blockquote]:pl-4 [&_blockquote]:text-white/60 [&_blockquote]:italic [&_a]:text-[#00D4FF] [&_a]:underline [&_a]:underline-offset-2 [&_a]:hover:text-white [&_a]:transition [&_strong]:text-white [&_em]:text-white/80"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-white/50 hover:text-white transition">
              ← All posts
            </Link>
            <Link href="/contact" className="inline-flex h-10 items-center justify-center rounded-full bg-[#FF5C1A] px-5 text-sm font-semibold text-black hover:brightness-110 transition">
              Work with us →
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
