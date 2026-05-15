export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  category: "Branding" | "Web Design" | "AI & Automation" | "Creative Process" | "Strategy";
  publishedAt: string;
  readTime: number;
  content: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "why-your-brand-looks-inconsistent",
    title: "Why Your Brand Looks Inconsistent (And How to Fix It)",
    excerpt:
      "Most brands don't have a design problem—they have a system problem. Here's how to build creative consistency without slowing down.",
    tag: "Branding",
    category: "Branding",
    publishedAt: "2026-05-10",
    readTime: 5,
    content: `
<p>You've got a logo. You've got brand colours. You've got a designer (or a Canva account). And yet—every time a new post goes out, it looks like it was made by a different company.</p>
<p>This is the most common creative problem we see. And it almost never comes from a lack of talent. It comes from a lack of <strong>system</strong>.</p>
<h2>The Real Cause of Inconsistency</h2>
<p>Inconsistency happens when too many people are making creative decisions in isolation. Someone resizes a logo differently. Another person picks a slightly different shade of blue. A third person uses a font that "looks close enough." Multiply that across a team and across months, and your brand starts to look like a patchwork quilt.</p>
<p>The fix isn't hiring a better designer. It's building a system that makes the right choices obvious—and wrong choices hard to make accidentally.</p>
<h2>What a Brand System Actually Looks Like</h2>
<p>A working brand system has three layers:</p>
<ul>
<li><strong>Foundations:</strong> Logo lockups, colour codes (hex, RGB, and CMYK), approved typography pairings, spacing rules, and a clear do/don't usage guide.</li>
<li><strong>Templates:</strong> Pre-built social post formats, presentation decks, email headers, and ad creatives. The designer fills in content—not the layout.</li>
<li><strong>Governance:</strong> A single source of truth—one folder, one doc, one place everyone goes to find assets.</li>
</ul>
<h2>The 80/20 Version If You're Not Ready for a Full System</h2>
<ol>
<li>Create a single "brand card"—a one-page reference with your exact colours, fonts, and logo variants.</li>
<li>Make three social post templates and enforce them for 30 days.</li>
<li>Archive every old asset version so nobody accidentally uses the wrong logo.</li>
</ol>
<p>Brand consistency isn't about being rigid. It's about making it <em>easy</em> to look right, and <em>hard</em> to look wrong. If you want us to audit your current brand consistency, <a href="/free-audit">book a free audit here</a>.</p>
`,
  },
  {
    slug: "landing-page-mistakes-that-kill-conversions",
    title: "5 Landing Page Mistakes That Kill Conversions",
    excerpt:
      "A beautiful landing page that doesn't convert is just expensive decoration. Here are the five mistakes we fix most often—and what to do instead.",
    tag: "Web Design",
    category: "Web Design",
    publishedAt: "2026-05-06",
    readTime: 6,
    content: `
<p>We review a lot of landing pages. And we keep seeing the same five mistakes—on pages that are often beautifully designed, well-written, and completely forgettable the moment someone closes the tab.</p>
<h2>1. The Headline Describes You, Not the Outcome</h2>
<p>"We are a full-service digital marketing agency with 10+ years of experience" is a description of your company. It's not a reason for someone to stay on the page. Replace it with the specific outcome your best customers care about. "Get 3x more leads from the traffic you already have" is a headline.</p>
<h2>2. Too Many CTAs</h2>
<p>When there are four buttons on a landing page—Book a Call, Learn More, See Pricing, Download the Guide—visitors do none of them. Every landing page should have one primary CTA, repeated 2–3 times down the page. Everything else is a distraction.</p>
<h2>3. No Social Proof at the Decision Point</h2>
<p>Most pages put testimonials at the bottom, after the CTA. That's backwards. Put your strongest social proof right next to the button where someone makes the decision to click. That's where trust needs to land.</p>
<h2>4. Mobile Is an Afterthought</h2>
<p>Over 60% of landing page traffic comes from mobile on most campaigns. If your hero section requires scrolling to see the headline, or if your CTA button is tiny on a phone—you're losing conversions before anyone reads a word. Design mobile first.</p>
<h2>5. The Page Is Slow</h2>
<p>Every additional second of load time reduces conversions by roughly 7%. Run your page through PageSpeed Insights. If your score is below 70 on mobile, fix that before you touch copy or design.</p>
<p>If your landing page isn't converting the way it should, <a href="/contact">let's talk</a>—we do conversion-focused web design and we'll tell you exactly what to fix.</p>
`,
  },
  {
    slug: "creative-automation-ship-more-without-burning-out",
    title: "Creative Automation: Ship More Without Burning Out Your Design Team",
    excerpt:
      "AI and automation aren't replacing designers—they're giving them leverage. Here's how to build a creative workflow that produces more without sacrificing quality.",
    tag: "AI & Automation",
    category: "AI & Automation",
    publishedAt: "2026-04-29",
    readTime: 7,
    content: `
<p>The problem isn't that your team lacks creativity. It's that too much of their time goes to repetitive work—resizing assets, recreating templates, exporting variants, renaming files. Creative automation fixes that.</p>
<h2>What Creative Automation Actually Means</h2>
<p>It's not just "use AI to generate images." Creative automation is about systematising the repetitive parts of your creative pipeline:</p>
<ul>
<li><strong>Brief to variant:</strong> A structured brief format that feeds directly into a templated production system.</li>
<li><strong>Batch production:</strong> Producing multiple ad sizes or format variants from one master design, automatically.</li>
<li><strong>Repurposing workflows:</strong> Turning a long-form article into social posts, story frames, and an email header—with a clear, repeatable process.</li>
<li><strong>Asset management:</strong> Consistent naming conventions so nobody spends 20 minutes finding last month's approved logo.</li>
</ul>
<h2>The Tools That Actually Help</h2>
<p>Most teams can get 80% of the benefit from: Figma with a well-built component library, a structured brief template, a linear approval workflow, and AI tools for copy variations and rough ideation (not final production).</p>
<h2>Where to Start</h2>
<p>Pick the one thing your team does most repeatedly and systemise that first. For most teams, that's social content. Build three templates, define the brief format, set a weekly cadence. Get that working, then expand the system.</p>
<p>If you want help building this kind of system, <a href="/contact">get in touch</a>—we design and implement creative automation workflows for growing brands.</p>
`,
  },
  {
    slug: "the-creative-brief-that-saves-10-hours-a-week",
    title: "The Creative Brief That Saves 10 Hours Every Week",
    excerpt:
      "Bad briefs are the hidden tax on every creative team. Here's the exact brief structure we use—and why it cuts revision cycles in half.",
    tag: "Creative Process",
    category: "Creative Process",
    publishedAt: "2026-04-21",
    readTime: 5,
    content: `
<p>The most expensive thing in a creative workflow isn't design time. It's revision time—and almost all of it traces back to a bad brief.</p>
<p>When a brief is vague, designers make assumptions. When designers make assumptions, the first round misses the mark. When the first round misses the mark, you get a second round, a third, an email chain, and a creative that's three weeks late and nobody's happy with.</p>
<h2>The Six Fields That Actually Matter</h2>
<ol>
<li><strong>Objective:</strong> What is this piece supposed to do? One specific goal.</li>
<li><strong>Audience:</strong> Who is seeing this, and what do they already know/believe?</li>
<li><strong>Message:</strong> The single thing the viewer should take away. One sentence.</li>
<li><strong>Tone:</strong> 3 adjectives. Not "professional"—that's meaningless. "Direct, confident, warm" is useful.</li>
<li><strong>Format & specs:</strong> Dimensions, file format, where it's going.</li>
<li><strong>Reference:</strong> One example of something that feels right. For calibration, not copying.</li>
</ol>
<h2>What to Leave Out</h2>
<p>Don't brief by committee. Don't include conflicting feedback from three stakeholders in the same doc. Keep it short enough to read in two minutes.</p>
<h2>The Approval Structure That Pairs With It</h2>
<p>Define who gives the final sign-off <em>before</em> work starts—not after the designer presents. One decision-maker, one round of consolidated feedback, one revision cycle.</p>
<p>Teams that implement this structure consistently cut their revision cycles by 40–60%. If you want a copy of the brief template we use with our clients, <a href="/contact">reach out</a> and we'll send it over.</p>
`,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getPostsSorted(): BlogPost[] {
  return [...BLOG_POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getRelatedPosts(current: BlogPost, limit = 2): BlogPost[] {
  return BLOG_POSTS.filter(
    (p) => p.slug !== current.slug && (p.category === current.category || p.tag === current.tag)
  ).slice(0, limit);
}

export function formatPostDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
