import type { Metadata } from "next";

import { BlogListClient } from "@/components/BlogListClient";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Design notes, creative playbooks, and practical insights on branding, content systems, and web experience.",
};

export default function BlogPage() {
  return <BlogListClient />;
}
