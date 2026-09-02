export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  category: "Branding" | "Web Design" | "AI & Automation" | "Creative Process" | "Strategy";
  publishedAt: string;
  updatedAt?: string;
  readTime: number;
  content: string;
  faq?: Array<{ question: string; answer: string }>;
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
    title: "7 Landing Page Mistakes That Kill Conversions (And How to Fix Them)",
    excerpt:
      "A beautiful landing page that doesn't convert is just expensive decoration. Here's why landing pages fail, the mistakes we fix most often, and a checklist to diagnose your own.",
    tag: "Web Design",
    category: "Web Design",
    publishedAt: "2026-05-06",
    updatedAt: "2026-09-02",
    readTime: 11,
    content: `
<p>We review a lot of landing pages. Most of them are beautifully designed, well-written, and completely forgettable the moment someone closes the tab. If you're wondering why your landing page isn't converting, the answer is almost never "the design isn't pretty enough." It's usually one of a small set of structural mistakes that show up again and again, on B2B sites, e-commerce stores, and PPC campaigns alike.</p>

<h2>Why Don't Landing Pages Convert?</h2>
<p>When traffic arrives but nobody acts, it's almost always one of three root causes: the page doesn't make the value clear in the first five seconds, the page asks for a decision before it's earned trust, or the page technically fails a chunk of visitors (slow load, broken mobile layout, a form that's a chore to fill in). Everything below is a symptom of one of those three problems.</p>

<h2>The 7 Most Common Landing Page Conversion Problems</h2>

<h3>1. The Headline Describes You, Not the Outcome</h3>
<p>"We are a full-service digital marketing agency with 10+ years of experience" is a description of your company. It's not a reason for someone to stay on the page. Replace it with the specific outcome your best customers care about. "Get 3x more leads from the traffic you already have" is a headline.</p>
<p><strong>The fix:</strong> Write the outcome first, the how second, and your company name last. If you can't state the outcome in under 10 words, the offer isn't clear enough yet—fix that before you touch the design.</p>

<h3>2. Too Many CTAs Competing for Attention</h3>
<p>When there are four buttons on a landing page—Book a Call, Learn More, See Pricing, Download the Guide—visitors do none of them. Every landing page should have one primary CTA, repeated 2–3 times down the page. Everything else is a distraction.</p>
<p><strong>The fix:</strong> Pick the single next step you actually want. Delete or visually demote every other button on the page.</p>

<h3>3. No Social Proof at the Decision Point</h3>
<p>Most pages put testimonials at the bottom, after the CTA. That's backwards. Put your strongest social proof right next to the button where someone makes the decision to click. That's where trust needs to land.</p>
<p><strong>The fix:</strong> Place a logo strip, a single strong testimonial, or a stat ("200+ brands supported") directly beside or beneath your primary CTA—not three scrolls away.</p>

<h3>4. Mobile Is an Afterthought</h3>
<p>Over 60% of landing page traffic comes from mobile on most campaigns. If your hero section requires scrolling to see the headline, or if your CTA button is tiny on a phone, you're losing conversions before anyone reads a word. Design mobile first.</p>
<p><strong>The fix:</strong> Open the page on your own phone before you ship it. If the headline and CTA aren't both visible without scrolling, the layout isn't done.</p>

<h3>5. The Page Is Slow</h3>
<p>Every additional second of load time reduces conversions by roughly 7%. Run your page through PageSpeed Insights. If your score is below 70 on mobile, fix that before you touch copy or design.</p>
<p><strong>The fix:</strong> Compress hero images, defer non-critical scripts, and avoid heavyweight animation libraries above the fold.</p>

<h3>6. The Message Doesn't Match the Ad</h3>
<p>Someone clicks an ad promising "50% off your first order" and lands on your generic homepage with no mention of the offer. That mismatch kills trust instantly, and it's one of the most common landing page conversion problems in paid campaigns specifically.</p>
<p><strong>The fix:</strong> The headline of the landing page should echo the promise of the ad almost word for word. If the ad and the page feel like two different companies, you've lost the visitor.</p>

<h3>7. The Form Asks for Too Much, Too Soon</h3>
<p>A ten-field form in exchange for a free guide is a bigger ask than most visitors are willing to make on a first visit. Every additional form field reduces completion rate.</p>
<p><strong>The fix:</strong> Ask only for what you need to make the very next contact (usually name + email). Collect the rest later, once trust is established.</p>

<h2>PPC Landing Page Mistakes That Waste Ad Spend</h2>
<p>If you're running paid traffic, landing page mistakes get expensive fast—every visitor who bounces is money spent for nothing. A few PPC-specific problems compound the ones above:</p>
<ul>
<li><strong>Sending paid traffic to your homepage.</strong> A homepage has to serve everyone. A landing page only has to convert the one audience your ad targeted. Build a dedicated page per campaign.</li>
<li><strong>Poor message match hurts Quality Score.</strong> On Google Ads specifically, a landing page that doesn't match the ad's keywords and promise lowers your Quality Score, which raises your cost per click—so this mistake taxes you twice.</li>
<li><strong>One landing page for every campaign.</strong> Cold traffic, retargeting traffic, and referral traffic are at different stages of trust. A single generic page can't speak to all three.</li>
</ul>

<h2>How to Diagnose Your Landing Page's Conversion Problems</h2>
<p>Before you redesign anything, run this checklist against your current page:</p>
<ol>
<li>Can a first-time visitor state your offer in one sentence after 5 seconds on the page?</li>
<li>Is there exactly one primary action, and is it visible without scrolling on mobile?</li>
<li>Is social proof visible within one scroll of the CTA, not just at the bottom of the page?</li>
<li>Does the page load in under 3 seconds on mobile (check PageSpeed Insights)?</li>
<li>If this page receives paid traffic, does the headline match the ad copy that sent people here?</li>
<li>Does the form ask for the minimum information needed for the next step?</li>
</ol>
<p>If you answered "no" to two or more of these, that's usually enough to explain a weak conversion rate—no full redesign required, just targeted fixes.</p>

<h2>Landing Page Mistakes: FAQ</h2>
<h3>What is the biggest mistake on a landing page?</h3>
<p>An unclear or company-centric headline. If a visitor can't tell what they get and why it matters within 5 seconds, no amount of design polish downstream will save the conversion rate.</p>
<h3>Why is my landing page getting traffic but no conversions?</h3>
<p>This is almost always a message-match or trust problem: the page doesn't clearly continue the promise that brought the visitor there, or it asks for a decision (a purchase, a form fill) before establishing enough credibility to earn it.</p>
<h3>How long should a landing page be?</h3>
<p>Long enough to answer every objection your best customers actually have, and no longer. A high-consideration B2B purchase often needs a longer page with more proof; a simple, low-cost offer usually converts better short. Length should follow the buying decision, not a template.</p>
<h3>What's a good landing page conversion rate?</h3>
<p>Benchmarks vary widely by industry and traffic source, but most well-optimised landing pages convert in the 3–10% range. If you're well under that, it's worth running the diagnostic checklist above before assuming it's a traffic quality problem.</p>

<p>If your landing page isn't converting the way it should, <a href="/contact">let's talk</a>—we do conversion-focused web design and we'll tell you exactly what to fix. Prefer a self-serve starting point? <a href="/free-audit">book a free audit</a> and we'll run this diagnostic against your actual page.</p>
`,
    faq: [
      {
        question: "What is the biggest mistake on a landing page?",
        answer:
          "An unclear or company-centric headline. If a visitor can't tell what they get and why it matters within 5 seconds, no amount of design polish downstream will save the conversion rate.",
      },
      {
        question: "Why is my landing page getting traffic but no conversions?",
        answer:
          "This is almost always a message-match or trust problem: the page doesn't clearly continue the promise that brought the visitor there, or it asks for a decision before establishing enough credibility to earn it.",
      },
      {
        question: "How long should a landing page be?",
        answer:
          "Long enough to answer every objection your best customers actually have, and no longer. Length should follow the buying decision, not a template.",
      },
      {
        question: "What's a good landing page conversion rate?",
        answer:
          "Benchmarks vary by industry and traffic source, but most well-optimised landing pages convert in the 3–10% range.",
      },
    ],
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
  {
    slug: "how-to-position-your-brand-without-losing-your-audience",
    title: "How to Reposition Your Brand Without Losing Your Audience",
    excerpt:
      "Brand repositioning done badly costs you everything you've built. Done right, it accelerates growth. Here's the framework we use with clients.",
    tag: "Strategy",
    category: "Strategy",
    publishedAt: "2026-04-14",
    readTime: 6,
    content: `
<p>Most repositioning projects fail for the same reason: the team changes the logo and the tagline, calls it "rebranding," and wonders why nothing changed. Positioning isn't how you look—it's where you sit in the mind of your customer relative to every alternative.</p>
<h2>What Repositioning Actually Changes</h2>
<p>True repositioning means changing one or more of three things:</p>
<ul>
<li><strong>Who you're for:</strong> Moving from "everyone" to a specific buyer profile. A healthcare SaaS that used to sell to anyone with a budget, now sells exclusively to multi-site clinical groups. Every word on the website changes.</li>
<li><strong>What you're against:</strong> The alternative your buyer compares you to. If you're positioned against spreadsheets, you sound different than if you're positioned against enterprise software.</li>
<li><strong>What makes you different:</strong> The one thing you do better than every alternative for your specific buyer—not the one thing you're proud of.</li>
</ul>
<h2>The Risk of Doing It Too Fast</h2>
<p>Repositioning sends signals. Existing customers notice. If the change is jarring, you lose them before the new audience arrives. The safest approach: run the new positioning in parallel before you commit. A/B test messaging on paid traffic. See which version converts better before you rewrite your homepage.</p>
<h2>The Framework We Use</h2>
<ol>
<li><strong>Interview your best 5 customers:</strong> Ask why they chose you, what they were using before, and what they'd miss if you disappeared. Their language is your new positioning.</li>
<li><strong>Map the competitive landscape:</strong> Place every competitor on a 2×2. Find the quadrant nobody owns that your best customers actually want.</li>
<li><strong>Write the positioning statement:</strong> For [specific buyer], [your brand] is the [category] that [differentiated benefit], unlike [alternative], because [reason to believe].</li>
<li><strong>Test before you commit:</strong> Landing page test, one campaign, 30 days. If it converts better, roll it out.</li>
</ol>
<p>If you're working through a repositioning and want a second set of eyes, <a href="/contact">get in touch</a>—we run brand strategy workshops that usually surface the answer in a day.</p>
`,
  },
  {
    slug: "the-ux-metrics-that-actually-matter",
    title: "The UX Metrics That Actually Matter for Growing Brands",
    excerpt:
      "Most UX teams track too many metrics and act on none of them. Here's how to identify the two or three numbers that tell you whether your product experience is working.",
    tag: "Strategy",
    category: "Strategy",
    publishedAt: "2026-04-07",
    readTime: 5,
    content: `
<p>There's no shortage of UX metrics you <em>could</em> track. Session duration, pages per visit, scroll depth, heatmap coverage, rage click rate, NPS, CSAT, CES—the list goes on. The problem isn't a lack of data. It's knowing which numbers to act on.</p>
<h2>The Three Categories That Matter</h2>
<p>Every meaningful UX metric falls into one of three buckets:</p>
<ul>
<li><strong>Completion rate:</strong> What percentage of users who start a key flow finish it? For an e-commerce brand, that's add-to-cart → checkout → purchase. For a SaaS, it's signup → first key action → return visit. This is the most important metric and the one most teams don't track precisely enough.</li>
<li><strong>Time to value:</strong> How long does it take a new user to get to the moment where your product actually helps them? Every minute before that moment is friction. Every minute after it is engagement. Reduce the first; extend the second.</li>
<li><strong>Return intent:</strong> Did the user come back? Repeat visitors are the leading indicator of retention, and retention is the leading indicator of LTV. If your DAU/MAU ratio is below 20%, your product isn't becoming a habit.</li>
</ul>
<h2>What to Do With the Data</h2>
<p>Pick one flow. Map every step. Find the biggest drop-off point. Fix just that one thing. Measure again. This loop—pick, map, fix, measure—is more valuable than any dashboard overhaul.</p>
<h2>The Mistake Growing Brands Make</h2>
<p>They optimize for acquisition metrics (traffic, CTR, CPA) while ignoring experience metrics. A landing page that converts at 6% but drops 80% of users in the first session has a UX problem, not a traffic problem. Fix the experience first.</p>
<p>If you want us to run a UX audit on your key flows and identify the biggest drop-off points, <a href="/free-audit">book a free audit here</a>.</p>
`,
  },
  {
    slug: "what-a-good-pitch-deck-actually-looks-like",
    title: "What a Good Pitch Deck Actually Looks Like in 2025",
    excerpt:
      "Most pitch decks fail at slide 3. Here's how to structure a deck that holds attention, builds a clear story, and makes the ask feel obvious.",
    tag: "Creative Process",
    category: "Creative Process",
    publishedAt: "2026-03-31",
    readTime: 5,
    content: `
<p>Pitch decks are one of the most high-stakes creative deliverables a brand produces. They go in front of investors, partners, enterprise buyers, or boards—people who are time-pressured, skeptical, and pattern-matching against dozens of similar decks. Here's what makes one work.</p>
<h2>The Structure That Works</h2>
<p>The best decks follow a narrative arc, not an information checklist. The sequence that consistently works:</p>
<ol>
<li><strong>The problem (1 slide):</strong> Make it specific, make it painful. One sentence. Not a list of statistics.</li>
<li><strong>The insight (1 slide):</strong> Why now? What's changed in the market, technology, or behaviour that makes this the right time?</li>
<li><strong>The solution (1–2 slides):</strong> What you do, and for whom. Keep it concrete. Show the thing, don't just describe it.</li>
<li><strong>The proof (2–3 slides):</strong> Revenue, customers, retention, partnerships—whatever you have. Early traction beats projections every time.</li>
<li><strong>The market (1 slide):</strong> Bottom-up sizing only. "SAM of $X, targeting Y% in 3 years" is more credible than quoting a Gartner report.</li>
<li><strong>The team (1 slide):</strong> Why you? What unfair advantage do you have?</li>
<li><strong>The ask (1 slide):</strong> How much, what it funds, and the milestone it gets you to.</li>
</ol>
<h2>The Design Principles That Separate Good Decks</h2>
<p>One idea per slide—always. If a slide needs a header and four bullet points, it's two slides. Use visuals to show, not decorate. Charts should communicate instantly. Annotations explain the point, not what's already visible in the chart.</p>
<h2>What Most Decks Get Wrong</h2>
<p>They start with the company story instead of the problem. Nobody cares about your founding story until they care about the problem you're solving. Lead with the market reality, not your journey.</p>
<p>If you're preparing a pitch deck for investors or enterprise sales, <a href="/contact">get in touch</a>—we design decks that tell a clear story and look the part.</p>
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
