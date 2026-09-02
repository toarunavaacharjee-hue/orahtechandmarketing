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
  {
    slug: "donation-page-design-what-increases-ngo-conversion-rates",
    title: "Donation Page Design: What Actually Increases NGO Conversion Rates",
    excerpt:
      "Most nonprofit donation pages lose supporters at the exact moment they're ready to give. Here's what separates pages that convert from pages that don't.",
    tag: "Web Design",
    category: "Web Design",
    publishedAt: "2026-05-17",
    readTime: 7,
    content: `
<p>A supporter who lands on your donation page has usually already decided, emotionally, that they want to help—they clicked from an email, a social post, or a fundraising campaign. The donation page's only job is to not lose that decision on the way to the payment field. Most nonprofit donation pages fail at exactly that moment.</p>
<h2>Why Donation Pages Lose Supporters</h2>
<p>The drop-off isn't usually about the cause. It's friction: a blank amount field that forces a decision, a checkout that asks for information before explaining what the gift funds, or a page that looks so generic it undermines the credibility the campaign just built.</p>
<h2>The Elements That Actually Move the Needle</h2>
<h3>Suggested Amounts, Not a Blank Field</h3>
<p>A blank "Enter amount" field makes every donor do math under pressure. Preset amounts (with a custom option available) reduce hesitation and, in practice, tend to raise the average gift—donors anchor to the numbers you show them.</p>
<h3>Show the Impact of Each Amount</h3>
<p>"$50" is an amount. "$50 provides school meals for a child for a month" is a reason. Tie every suggested amount to something concrete and specific—vague impact statements ("$50 helps our mission") don't do the same work.</p>
<h3>Default to Monthly, Not One-Time</h3>
<p>Recurring donations are the highest-value asset a nonprofit's website can generate, and most donors will give monthly if it's the default option rather than an afterthought toggle below the one-time button.</p>
<h3>Minimal Checkout Fields</h3>
<p>Every extra required field before payment is a reason to abandon. Ask for name, email, and payment details—collect anything else (mailing address, how they heard about you) after the gift is made, not before.</p>
<h3>Trust Signals Built for Nonprofits Specifically</h3>
<p>Donors want to know their money is used responsibly. A registration/charity number, a link to financial transparency (annual report, charity rating), and a specific story or quote from someone the organisation has actually helped do more for trust than a generic "100% goes to the cause" claim.</p>
<h2>Where to Place the Story Relative to the Ask</h2>
<p>Put a short, specific story above the donation form, not below it—donors should feel the "why" before they see the "how much." Save the longer version of your impact story for a separate page and link to it, so the donation page itself stays focused on one action.</p>
<h2>A Quick Donation Page Audit</h2>
<ol>
<li>Are there preset amounts tied to specific outcomes?</li>
<li>Is monthly giving the default, not an afterthought?</li>
<li>Does the form ask for the minimum required before payment?</li>
<li>Is there a specific, credible trust signal (registration number, financial transparency link) visible on the page?</li>
<li>Does the page load in under 3 seconds on mobile, where most campaign traffic arrives?</li>
</ol>
<h2>FAQ</h2>
<h3>Should a donation page default to one-time or monthly giving?</h3>
<p>Monthly, where sustainable — recurring donations are typically the highest-value asset a nonprofit website generates, and defaulting to it rather than treating it as a secondary toggle measurably increases how many donors choose it.</p>
<h3>What information should a donation form actually ask for?</h3>
<p>Only what's needed to process the gift — name, email, and payment details. Anything else, like a mailing address or how they heard about you, can be collected after the donation is made.</p>
<h3>Do suggested donation amounts actually work?</h3>
<p>Yes — donors tend to anchor to the amounts shown rather than doing mental math from a blank field, and tying each amount to a specific outcome tends to outperform a generic amount list.</p>
<p>If your donation page is getting traffic from campaigns but not converting it, <a href="/industries/ngo">see how we approach nonprofit and NGO design work</a>, or <a href="/free-audit">book a free audit</a> and we'll run this checklist against your actual page.</p>
`,
    faq: [
      {
        question: "Should a donation page default to one-time or monthly giving?",
        answer:
          "Monthly, where sustainable — recurring donations are typically the highest-value asset a nonprofit website generates, and defaulting to it rather than treating it as a secondary toggle measurably increases how many donors choose it.",
      },
      {
        question: "What information should a donation form actually ask for?",
        answer:
          "Only what's needed to process the gift — name, email, and payment details. Anything else, like a mailing address or how they heard about you, can be collected after the donation is made.",
      },
      {
        question: "Do suggested donation amounts actually work?",
        answer:
          "Yes — donors tend to anchor to the amounts shown rather than doing mental math from a blank field, and tying each amount to a specific outcome tends to outperform a generic amount list.",
      },
    ],
  },
  {
    slug: "saas-landing-page-structure-before-a-signup",
    title: "SaaS Landing Page Structure: What to Show Above the Fold Before a Signup",
    excerpt:
      "SaaS landing pages have seconds to prove what the product does, who it's for, and why now. Here's the structure that actually holds up.",
    tag: "Web Design",
    category: "Web Design",
    publishedAt: "2026-05-24",
    readTime: 8,
    content: `
<p>A SaaS landing page has a few seconds to answer three questions before a visitor decides to leave: what is this, who is it for, and why should I care right now. Everything above the fold should answer those three things. Everything else can wait.</p>
<h2>The Above-the-Fold Formula That Works</h2>
<h3>An Outcome-First Headline</h3>
<p>Lead with what changes for the user, not what the product is. "Automate your invoicing in 5 minutes" beats "The all-in-one finance platform for modern teams" every time—the first tells a visitor exactly what they get, the second describes a category.</p>
<h3>One Sentence of Context</h3>
<p>Immediately under the headline, a single line should confirm who this is for. If a visitor doesn't recognise themselves in that sentence within a few seconds, they'll assume the product isn't for them—even if it is.</p>
<h3>One Primary CTA, One Lower-Commitment Path</h3>
<p>"Start Free Trial" as the primary action, with a lighter secondary option ("Watch a 2-minute demo" or "See pricing") for visitors who aren't ready to commit yet. Don't make the secondary option compete visually with the primary one.</p>
<h3>A Real Product Visual</h3>
<p>Stock photography of people smiling at laptops tells a visitor nothing about the product. A real screenshot or short product clip does more conversion work than almost any other above-the-fold element on a SaaS page.</p>
<h2>What Belongs Below the Fold, in Order</h2>
<ol>
<li><strong>Objection handling</strong> — the two or three reasons a skeptical visitor wouldn't sign up, addressed directly.</li>
<li><strong>Proof</strong> — logos, a specific customer result, or a review with a real name and role attached.</li>
<li><strong>Feature-to-outcome mapping</strong> — not a feature list, but each feature paired with the outcome it produces.</li>
<li><strong>Integrations or a trust bar</strong> — especially important for tools that plug into an existing stack.</li>
<li><strong>A second CTA</strong> — repeat the primary action once the page has done its convincing.</li>
</ol>
<h2>Free Trial vs. Demo: Choosing the Right Primary CTA</h2>
<p>Self-serve, lower-price-point products usually convert better with a free trial as the primary CTA—it removes a human bottleneck from the funnel. Higher-price or complex products, anything that needs a champion inside a buying committee, usually convert better pushing toward a demo, where a real conversation can handle objections a page can't.</p>
<h2>Common SaaS Landing Page Mistakes We See</h2>
<p>The most frequent one: a single landing page trying to serve every persona and every traffic source at once. A page built for a cold LinkedIn ad and a page built for a warm newsletter click should not look identical—the trust level, and therefore the ask, is different.</p>
<h2>FAQ</h2>
<h3>Should a SaaS landing page require a credit card for a free trial?</h3>
<p>Only if your product's activation is fast enough that most trial users reach value before the trial ends. If activation is slow, a card requirement filters out visitors before they've seen the product work, which usually costs more signups than it prevents fraud.</p>
<h3>How long should a SaaS landing page be?</h3>
<p>Long enough to handle the real objections your buying committee has, and no longer. A $20/month self-serve tool needs far less page than a $20,000/year enterprise platform.</p>
<h3>What's more important on a SaaS landing page: design or copy?</h3>
<p>Copy carries the argument; design determines whether anyone reads it. Both matter, but a beautifully designed page with a vague headline will underperform a plainer page with a specific, outcome-first one.</p>
<p>If your signup or demo page is getting traffic but not converting it, <a href="/industries/saas">see how we approach SaaS website and product design</a>, or <a href="/free-audit">book a free audit</a>.</p>
`,
    faq: [
      {
        question: "Should a SaaS landing page require a credit card for a free trial?",
        answer:
          "Only if your product's activation is fast enough that most trial users reach value before the trial ends. If activation is slow, a card requirement filters out visitors before they've seen the product work, which usually costs more signups than it prevents fraud.",
      },
      {
        question: "How long should a SaaS landing page be?",
        answer:
          "Long enough to handle the real objections your buying committee has, and no longer. A $20/month self-serve tool needs far less page than a $20,000/year enterprise platform.",
      },
      {
        question: "What's more important on a SaaS landing page: design or copy?",
        answer:
          "Copy carries the argument; design determines whether anyone reads it. Both matter, but a beautifully designed page with a vague headline will underperform a plainer page with a specific, outcome-first one.",
      },
    ],
  },
  {
    slug: "healthcare-website-trust-signals-patients-look-for",
    title: "Healthcare Website Trust Signals Patients Look for Before Booking",
    excerpt:
      "Healthcare decisions carry more perceived risk than almost any other purchase. Here's what makes patients trust a practice enough to book.",
    tag: "Branding",
    category: "Branding",
    publishedAt: "2026-05-31",
    readTime: 7,
    content: `
<p>Healthcare decisions carry more perceived risk than almost any other online purchase—a visitor isn't just choosing a service, they're choosing who to trust with their health. A healthcare website has to establish that trust before the "Book an Appointment" button means anything.</p>
<h2>Why Healthcare Websites Need a Different Trust Model</h2>
<p>Most trust-building advice for websites—logos, star ratings, "as seen in" badges—is built for lower-stakes purchases. Healthcare visitors are looking for something more specific: evidence that this particular provider understands their particular concern, and that booking won't lead to a confusing or impersonal experience.</p>
<h2>The Trust Signals That Actually Matter</h2>
<h3>Credentials, Specifically Stated</h3>
<p>"Board-certified" or "15 years in pediatric care" does more than a generic "experienced and caring team." Vague credibility language reads as filler; specific credentials read as fact.</p>
<h3>Real Photos, Not Stock</h3>
<p>Stock photography of unrelated people in white coats is one of the fastest ways to undermine trust on a healthcare site. Real photos of the actual practice, providers, and space signal that there's a real place and real people behind the website.</p>
<h3>Specific Outcomes, Not Generic Praise</h3>
<p>"Dr. Patel listened to everything and adjusted my treatment until the pain actually went away" does more work than "Great doctor, highly recommend." Specific testimonials, with consent, read as true; generic ones read as decoration.</p>
<h3>A Clear "What Happens Next"</h3>
<p>A large part of healthcare anxiety is uncertainty about the process itself. A short, explicit description of what happens after booking—confirmation, what to bring, how long the visit takes—reduces the hesitation that keeps a visitor from clicking at all.</p>
<h3>Insurance and Pricing Transparency</h3>
<p>Hiding pricing or insurance information behind a phone call adds friction at the exact moment a visitor is deciding whether to commit. Even a general range or a clear list of accepted insurers removes a real source of hesitation.</p>
<h2>Where These Signals Should Live</h2>
<p>Not buried on a separate "About Us" page three clicks deep. Credentials, real photography, and a specific testimonial belong near the booking action itself—on the service page or homepage, right where the visitor is deciding whether to commit.</p>
<h2>A Quick Trust Audit for Your Practice's Website</h2>
<ol>
<li>Are credentials stated specifically, not just "experienced" or "caring"?</li>
<li>Are the photos real, or stock?</li>
<li>Is there at least one specific, outcome-based testimonial near the booking CTA?</li>
<li>Does the page explain what happens after someone books?</li>
<li>Is insurance or pricing information available without a phone call?</li>
</ol>
<p>If your practice's website isn't converting visits into bookings, <a href="/industries/healthcare">see how we approach healthcare and wellness brand design</a>, or <a href="/contact">get in touch</a>.</p>
`,
  },
  {
    slug: "product-page-mistakes-that-kill-conversion-for-d2c-brands",
    title: "Product Page Mistakes That Kill Conversion for D2C Brands",
    excerpt:
      "A beautiful product page that doesn't answer every buyer question is just expensive decoration. Here's what's actually missing on most D2C product pages.",
    tag: "Web Design",
    category: "Web Design",
    publishedAt: "2026-06-07",
    readTime: 8,
    content: `
<p>A product page has one job: answer every question a buyer has before they leave to find those answers somewhere else—usually on a competitor's site, or a review aggregator you don't control. Most product pages we review are decorated well and answer surprisingly little.</p>
<h2>The Anatomy of a Converting Product Page</h2>
<h3>Not Enough Photos, or the Wrong Ones</h3>
<p>A single hero shot and a lifestyle image isn't enough for anything beyond an impulse buy under $20. Show the product from every angle a buyer would need to see in person: scale, texture, how it looks in use, and any detail that differentiates it from a cheaper alternative.</p>
<h3>Sizing and Usage Guidance Buried or Missing</h3>
<p>Uncertainty about fit or usage is one of the biggest drivers of both cart abandonment and returns. A clear size chart, a "how to choose" guide, or simple usage instructions near the add-to-cart button removes hesitation before it becomes an abandoned cart.</p>
<h3>Reviews Buried Below the Fold</h3>
<p>If reviews only appear after a long scroll, most visitors never see them before deciding to leave. A review count and star rating near the top of the page—even if the full reviews live further down—gives early social proof at the decision point.</p>
<h3>Shipping and Returns Information Hidden</h3>
<p>"Free returns within 30 days" removes purchase anxiety instantly. If that information is buried in a footer link instead of visible on the product page itself, it isn't doing any conversion work.</p>
<h3>No Honest Differentiation</h3>
<p>If a buyer can't tell why your product is worth choosing over a near-identical, cheaper alternative, they'll default to price. A short, specific "why this one" section—material, process, a guarantee, a real difference—gives them a reason beyond cost.</p>
<h3>A Slow Mobile Page</h3>
<p>Product pages are usually the heaviest pages on a store, thanks to multiple high-resolution images. On mobile, where most D2C traffic now arrives, an unoptimised product page can be the single biggest conversion leak on the entire site.</p>
<h2>What to Add, Not Just Fix</h2>
<p>Beyond fixing what's broken, the highest-leverage additions are usually user-generated content—real customer photos, not studio shots—and a simple, honest bundle or upsell placed after the primary decision is made, not before.</p>
<h2>A Quick Product Page Audit</h2>
<ol>
<li>Do the photos answer every question a buyer would ask in person?</li>
<li>Is sizing/usage guidance visible without a click?</li>
<li>Is a review count visible near the top of the page?</li>
<li>Are shipping and returns terms visible on the page itself?</li>
<li>Does the page load quickly on mobile with all product images present?</li>
</ol>
<p>If your product pages are getting traffic but not converting it, <a href="/industries/d2c">see how we approach D2C brand and store design</a>, or <a href="/free-audit">book a free audit</a>.</p>
`,
  },
  {
    slug: "how-to-structure-a-real-estate-project-launch-page",
    title: "How to Structure a Real Estate Project Launch Page",
    excerpt:
      "A launch page has to build confidence in something buyers can't walk through yet. Here's how to structure one that actually does.",
    tag: "Web Design",
    category: "Web Design",
    publishedAt: "2026-06-14",
    readTime: 7,
    content: `
<p>A real estate project launch page has to build confidence in something a buyer can't yet walk through. Unlike most landing pages, the "product" doesn't exist in a finished state yet—which means the page is doing more trust-building work than almost any other category of landing page.</p>
<h2>The Core Sections a Launch Page Needs</h2>
<h3>A Lifestyle-First Hero, Not a Floor Plan</h3>
<p>The first thing a visitor sees should sell the feeling of living there or owning it—not a technical drawing. Save the floor plans and specifications for further down the page, once the visitor is emotionally invested enough to want the details.</p>
<h3>Developer Credibility, Stated Plainly</h3>
<p>Past project proof—photos of completed, delivered projects, and any relevant registration or compliance information—matters more here than almost anywhere else. Buyers are being asked to commit significant money to something unbuilt; developer track record is the single biggest trust lever available.</p>
<h3>Real Visualisation</h3>
<p>High-quality renders, a video walkthrough, and a clear master plan do more to close the gap between "imagining it" and "believing it" than any amount of descriptive copy.</p>
<h3>Clear Pricing and Typology</h3>
<p>Vague "price on request" language filters out serious buyers along with unserious ones. Where possible, showing a starting price range and a clear breakdown of unit types keeps unqualified leads from clogging the enquiry funnel.</p>
<h3>Appropriately Gated Lead Capture</h3>
<p>A full brochure download is a reasonable thing to gate behind a name and phone number—buyers expect that exchange in real estate. But don't gate basic information, like location, starting price, or amenities, that a visitor needs just to decide whether to engage at all.</p>
<h3>Location Advantages, Made Concrete</h3>
<p>"Prime location" is filler. Specific distances to schools, transit, employment hubs, or landmarks give a buyer something they can actually evaluate.</p>
<h2>Mistakes That Undermine Buyer Confidence</h2>
<p>The most common one: presenting renders and specifications with no visible proof that the developer has delivered before. Without that, even a beautifully designed page reads as a promise rather than a plan.</p>
<h2>A Launch Page Checklist</h2>
<ol>
<li>Does the hero sell the lifestyle before the specifications?</li>
<li>Is past project proof visible, not just claimed?</li>
<li>Are renders or a walkthrough video present?</li>
<li>Is pricing information available without a phone call?</li>
<li>Are location advantages specific, not generic?</li>
</ol>
<p>If you're launching a new project and need the page to build real confidence, <a href="/industries/real-estate">see how we approach real estate and development marketing</a>, or <a href="/contact">get in touch</a>.</p>
`,
  },
  {
    slug: "course-landing-page-checklist-for-edtech-launches",
    title: "Course Landing Page Checklist for EdTech Launches",
    excerpt:
      "A course landing page's job is to make enrolling feel like a safe decision, not a leap of faith. Here's the checklist we use.",
    tag: "Web Design",
    category: "Web Design",
    publishedAt: "2026-06-21",
    readTime: 8,
    content: `
<p>A prospective student deciding whether to enrol is weighing time, money, and the risk of a course that doesn't deliver. A course landing page's job is to remove enough of that uncertainty that "enrol now" feels like a safe decision, not a leap of faith.</p>
<h2>What Prospective Students Actually Need to See</h2>
<h3>An Outcome-Based Headline</h3>
<p>"Learn Python" describes the course. "Go from zero to building your first data project in 8 weeks" describes the outcome. Students enrol for what they'll be able to do, not for the subject matter itself.</p>
<h3>A Real Curriculum Breakdown</h3>
<p>A vague topic list reads as unfinished. A module-by-module breakdown—even a short one—signals that the course is structured and that the student's time will be well spent.</p>
<h3>Instructor Credibility</h3>
<p>Specific instructor background (what they've built, taught, or shipped) matters more than a generic "expert-led" claim. Students are trusting a person as much as a curriculum.</p>
<h3>Format and Time Commitment, Stated Clearly</h3>
<p>Self-paced or live cohort, hours per week, total duration—ambiguity here is one of the fastest ways to lose a prospective student who's mentally checking whether the course fits their schedule.</p>
<h3>Pricing and Cohort Dates</h3>
<p>Hidden pricing creates the same hesitation here as anywhere else. If cohorts run on a schedule, showing the next start date creates useful, honest urgency without needing to manufacture it.</p>
<h3>Outcome-Based Social Proof</h3>
<p>Alumni outcomes—jobs landed, projects built, specific before/after results—convert far better than generic five-star praise. If you have placement or completion statistics, they belong near the enrolment CTA, not buried in a separate page.</p>
<h3>An FAQ That Handles Real Objections</h3>
<p>Refund policy, prerequisites, and any claims about outcomes—job guarantees, certification value—should be addressed directly. Avoiding these questions doesn't make them go away; it just means the student leaves the page to find the answer somewhere less favourable to you.</p>
<h2>Common Mistakes</h2>
<p>The most common one we see: leading with the instructor's or institution's story instead of the student's outcome. Students don't enrol because of your history—they enrol because of what they'll be able to do afterward.</p>
<h2>A Course Landing Page Checklist</h2>
<ol>
<li>Does the headline state an outcome, not just a topic?</li>
<li>Is there a real, module-level curriculum breakdown?</li>
<li>Is instructor credibility specific, not generic?</li>
<li>Are format, time commitment, and pricing all visible without a call?</li>
<li>Does the FAQ address refunds, prerequisites, and outcome claims directly?</li>
</ol>
<p>If your course pages are getting traffic but not enrolments, <a href="/industries/education">see how we approach education and EdTech marketing</a>, or <a href="/free-audit">book a free audit</a>.</p>
`,
  },
  {
    slug: "how-much-does-brand-identity-design-cost",
    title: "How Much Does Brand Identity Design Cost in 2026?",
    excerpt:
      "Branding quotes vary wildly because they bundle wildly different things under one label. Here's a framework for what you're actually paying for.",
    tag: "Strategy",
    category: "Strategy",
    publishedAt: "2026-06-28",
    readTime: 8,
    content: `
<p>"How much does branding cost" is one of the hardest questions to get a straight answer to, because the honest answer is: it depends entirely on scope, and most quotes bundle wildly different things under the same label. Here's a framework for understanding what you're actually paying for.</p>
<h2>What's Actually Included in "Brand Identity"</h2>
<p>At minimum, a brand identity project should include positioning and messaging work, not just visuals, a logo system, a colour and typography system, and a set of guidelines your team can actually use. Anything that skips the positioning step and jumps straight to a logo is design work, not brand identity work—and it usually shows.</p>
<h2>Price Ranges by Scope</h2>
<h3>Freelancer or Solo Designer</h3>
<p>Typically the most affordable option, and often the right call for an early-stage company that needs a clean, competent identity quickly. The tradeoff is usually less strategic depth—you're getting design execution more than positioning strategy.</p>
<h3>Boutique Creative Agency</h3>
<p>A mid-range option that usually includes real strategy work alongside design: positioning, messaging, a full visual system, and guidelines built for how your team actually produces content day to day.</p>
<h3>Large Branding Agency</h3>
<p>The highest-cost option, often justified for larger organisations with complex stakeholder alignment needs, multiple sub-brands, or significant market research requirements. For most growing brands, this level of investment buys process and prestige more than it buys a better outcome.</p>
<h2>What Drives the Price Up or Down</h2>
<p>The biggest cost drivers aren't the logo itself—they're the number of stakeholders who need to sign off, whether market research is included, how many touchpoints the guidelines need to cover (packaging and product UI cost more to systemise than a website alone), and how many rounds of revision are built into the process.</p>
<h2>How to Know If You're Overpaying (or Underpaying)</h2>
<p>You're likely overpaying if you're being billed agency rates for execution-only work with no strategy behind it. You're likely underpaying—in the sense of getting less than you need—if the "brand identity" you're being sold is a logo and nothing else: no messaging framework, no system for consistency, no guidelines your team can use without you.</p>
<h2>FAQ</h2>
<h3>Is a cheap branding package ever worth it?</h3>
<p>For a very early-stage company that needs something clean and functional fast, yes. The risk is outgrowing it quickly if there's no underlying positioning work to build on.</p>
<h3>How long does a proper brand identity project take?</h3>
<p>Most well-run projects take 4–8 weeks from discovery to final delivery, depending on how many stakeholders are involved in approval.</p>
<h3>Should branding include a website, or just the identity system?</h3>
<p>They can be scoped separately, but a brand identity built without any reference to how it will actually be used on a website often needs rework once the site is designed. If a website is coming soon, it's worth planning for that in the same engagement.</p>
<p>If you want a clear, scoped quote for your specific situation rather than a generic price range, <a href="/services">see our branding and identity services</a> or <a href="/contact">get in touch</a>.</p>
`,
    faq: [
      {
        question: "Is a cheap branding package ever worth it?",
        answer:
          "For a very early-stage company that needs something clean and functional fast, yes. The risk is outgrowing it quickly if there's no underlying positioning work to build on.",
      },
      {
        question: "How long does a proper brand identity project take?",
        answer:
          "Most well-run projects take 4–8 weeks from discovery to final delivery, depending on how many stakeholders are involved in approval.",
      },
      {
        question: "Should branding include a website, or just the identity system?",
        answer:
          "They can be scoped separately, but a brand identity built without any reference to how it will actually be used on a website often needs rework once the site is designed.",
      },
    ],
  },
  {
    slug: "freelancer-vs-design-agency-for-early-stage-startups",
    title: "Freelancer vs. Design Agency: Which Is Right for an Early-Stage Startup?",
    excerpt:
      "This isn't really a budget question—it's a surface-area question. Here's how to actually decide.",
    tag: "Strategy",
    category: "Strategy",
    publishedAt: "2026-07-05",
    readTime: 7,
    content: `
<p>This decision gets framed as a budget question, but budget is rarely the real constraint. The better question is: how much surface area does your creative need cover, and how much of that can one person reasonably hold in their head at once?</p>
<h2>What a Freelancer Is Better At</h2>
<p>For a single, well-defined deliverable—a logo, a pitch deck, a landing page—a good freelancer is often faster and more cost-effective than an agency. You're getting one skilled person's undivided attention on a scoped piece of work, with less process overhead.</p>
<h2>What an Agency Is Better At</h2>
<p>Once the need becomes ongoing—a content system that needs to stay consistent across a dozen channels, a brand identity that has to scale across a growing team, a website that needs continuous iteration—an agency's advantage is coverage: multiple skill sets, backup if one person is unavailable, and a process built for consistency at volume rather than a single project.</p>
<h2>The Real Decision Factor: Surface Area, Not Budget</h2>
<p>A single freelancer, however talented, has a ceiling on how many disciplines they can cover well—strategy, design, copy, and production rarely live at expert level in one person. If your need spans multiple disciplines and needs to stay consistent over time, that's the signal to look at an agency, regardless of budget size.</p>
<h2>A Hybrid Model That Works for Many Startups</h2>
<p>Many early-stage teams get the best of both: a freelancer or in-house generalist handling day-to-day, lower-stakes production, with an agency engaged for the higher-leverage work—brand identity, a website redesign, a fundraising deck—where consistency and strategic depth matter more.</p>
<h2>Questions to Ask Before You Decide</h2>
<ol>
<li>Is this a single deliverable, or an ongoing need?</li>
<li>Does the work span multiple disciplines (strategy, design, copy, dev) that need to stay consistent?</li>
<li>What happens to quality and timelines if your single point of contact is unavailable for two weeks?</li>
<li>Do you need a process that scales, or a one-time output?</li>
</ol>
<p>If you're weighing this decision for a specific project, <a href="/services">see what we cover</a> or <a href="/contact">talk it through with us</a>—we'll tell you honestly if a freelancer would actually serve you better.</p>
`,
  },
  {
    slug: "how-to-brief-a-design-agency-free-template",
    title: "How to Brief a Design Agency (With a Free Template)",
    excerpt:
      "A weak brief is the biggest predictor of a disappointing creative project—not budget, not talent. Here's the 7-question brief that fixes it.",
    tag: "Creative Process",
    category: "Creative Process",
    publishedAt: "2026-07-12",
    readTime: 7,
    content: `
<p>A weak brief is the single biggest predictor of a disappointing project—not agency talent, not budget. Most briefs fail for the same reason: they describe execution ("make it modern, use blue") instead of outcome ("help enterprise buyers trust us within the first 10 seconds on the site").</p>
<h2>Why Most Briefs Fail</h2>
<p>A brief that specifies execution locks a creative team into your first idea, which is rarely your best one—that's what you're paying them to find. A brief that specifies the outcome, audience, and constraints gives a team room to solve the actual problem.</p>
<h2>The Minimum Viable Brief: 7 Questions</h2>
<ol>
<li><strong>What has to be true after this project that isn't true now?</strong> The actual goal, stated as an outcome.</li>
<li><strong>Who is this for, specifically?</strong> Not "everyone"—the actual person making the decision.</li>
<li><strong>What's non-negotiable?</strong> Brand guidelines, technical constraints, legal requirements—anything that isn't up for creative interpretation.</li>
<li><strong>What do you like, and why?</strong> Reference examples with the reason they work for you, not just "something like this."</li>
<li><strong>What have you tried that didn't work?</strong> Saves the team from re-discovering a dead end you already found.</li>
<li><strong>What's the timeline, and what's driving it?</strong> A real deadline (a launch, a fundraising round) changes how a team prioritises versus an arbitrary one.</li>
<li><strong>How will you know this worked?</strong> A specific metric or outcome to evaluate against, agreed before the work starts.</li>
</ol>
<h2>What NOT to Include</h2>
<p>Resist the urge to specify exact colours, layouts, or copy in the brief itself unless they're genuinely non-negotiable. That's the part you're hiring a creative team to figure out—over-specifying it usually produces a worse outcome than trusting the process you're paying for.</p>
<h2>A Copy-Paste Brief Template</h2>
<blockquote>
Goal: [what has to be true after this project]<br/>
Audience: [who this is for, specifically]<br/>
Constraints: [non-negotiables]<br/>
References: [examples + why they work]<br/>
What hasn't worked: [prior attempts, if any]<br/>
Timeline: [deadline + what's driving it]<br/>
Success metric: [how you'll know it worked]
</blockquote>
<p>If you're about to brief a project and want a second pair of eyes on it before you send it out, <a href="/contact">send it our way</a>—or <a href="/free-audit">book a free audit</a> and we'll help you scope it properly.</p>
`,
  },
  {
    slug: "design-system-101-how-to-stop-rebuilding-the-same-assets",
    title: "Design System 101: How to Stop Rebuilding the Same Assets Every Campaign",
    excerpt:
      "Most growing brands don't lack talent—they lack a system. Here's what a lean design system actually needs, and what it doesn't.",
    tag: "Creative Process",
    category: "Creative Process",
    publishedAt: "2026-07-19",
    readTime: 7,
    content: `
<p>Most growing brands don't lack talent—they lack a system, which means every new campaign starts from a half-remembered version of the last one. A design system's entire value is that it stops that from happening.</p>
<h2>The Cost of Not Having One</h2>
<p>Without a system, every new team member or freelancer re-derives your brand's rules from whatever examples they happen to find, which means small inconsistencies compound over time: slightly different blues, three versions of the logo lockup, a headline style that's drifted from what the brand guidelines, if they exist at all, actually specify. The cost isn't just visual—it's the hours spent rebuilding assets that should already exist.</p>
<h2>What Belongs in a Lean Design System</h2>
<p>A design system doesn't need to be a 200-page brand bible to be useful—in fact, the more comprehensive it gets, the less likely anyone actually uses it. The version that gets used includes:</p>
<ul>
<li><strong>Core components</strong> — buttons, cards, headline styles, spacing rules, defined once and reused everywhere.</li>
<li><strong>A short list of don'ts</strong> — the three or four mistakes that happen most often, stated explicitly, are more useful than an exhaustive rulebook nobody reads.</li>
<li><strong>Templates per channel</strong> — a social post template, an email template, a slide template, pre-built so production doesn't start from a blank canvas each time.</li>
</ul>
<h2>How to Build One Without Stopping Production</h2>
<p>The mistake teams make is trying to build the system before shipping anything else, which stalls real work for weeks. The better approach: build the system from what you're already producing. Audit the last 10–15 pieces of creative you've shipped, pull out the patterns that are actually working, and formalise those, rather than designing a system in a vacuum and hoping it matches reality.</p>
<h2>Signs You've Outgrown Ad Hoc Design</h2>
<ul>
<li>Every new hire or freelancer needs a week of back-and-forth to "get" the brand.</li>
<li>You're rebuilding the same type of asset, like a social template or a slide layout, from scratch each time it's needed.</li>
<li>Different channels—website, social, sales decks—visibly don't look like the same company.</li>
</ul>
<p>If any of those sound familiar, <a href="/services">see how we build design systems</a> that teams actually use, or <a href="/contact">get in touch</a>.</p>
`,
  },
  {
    slug: "core-web-vitals-for-marketing-sites-what-actually-affects-conversion",
    title: "Core Web Vitals for Marketing Sites: What Actually Affects Conversion (Not Just SEO)",
    excerpt:
      "Core Web Vitals get treated as an SEO checkbox, but they correlate directly with conversion rate. Here's what actually moves the needle.",
    tag: "Web Design",
    category: "Web Design",
    publishedAt: "2026-07-26",
    readTime: 8,
    content: `
<p>Core Web Vitals get talked about almost entirely as an SEO checkbox—a score to satisfy, not a thing that affects whether visitors actually convert. That framing undersells them. These metrics correlate directly with conversion rate on marketing sites, independent of anything to do with search rankings.</p>
<h2>The Three Metrics, in Plain English</h2>
<h3>LCP (Largest Contentful Paint)</h3>
<p>How long it takes the biggest visible element, usually a hero image or headline, to appear. If your hero section is slow to render, visitors are staring at a blank or half-loaded page during the exact moment you're trying to make a first impression.</p>
<h3>INP (Interaction to Next Paint)</h3>
<p>How responsive the page feels when someone actually clicks something. A slow INP means a visitor clicks a CTA and the page hesitates before responding, which reads as broken, even if it technically isn't.</p>
<h3>CLS (Cumulative Layout Shift)</h3>
<p>How much the page jumps around as it loads. A classic example: a visitor goes to tap a CTA, and an ad or image loads in above it, shifting the button down—so they tap the wrong thing. This isn't just annoying, it's a direct conversion leak.</p>
<h2>Why They Matter More Than Your SEO Score</h2>
<p>Search ranking is a slow-moving, indirect incentive to fix these. Conversion rate is immediate and direct: a visitor who experiences a slow, jumpy page forms an impression of the brand before reading a single word of copy. Fixing Core Web Vitals is fixing first impressions, not just a technical score.</p>
<h2>The Fixes That Move the Needle Most on Marketing Sites</h2>
<ul>
<li><strong>Image optimisation.</strong> Hero images are usually the single biggest LCP cost on a marketing site—compress and size them correctly before anything else.</li>
<li><strong>Font loading strategy.</strong> Custom fonts that block rendering until they load are a common, invisible cause of a slow LCP and layout shift.</li>
<li><strong>A third-party script audit.</strong> Chat widgets, analytics tags, and marketing pixels each add weight and can block interactivity—most sites are running scripts nobody's audited in over a year.</li>
<li><strong>Careful use of hero video and animation.</strong> Autoplay video and heavy animation libraries look impressive but are frequently the biggest single cause of a poor INP score on otherwise well-built sites.</li>
</ul>
<h2>How to Check Your Own Site</h2>
<p>Run your key pages—homepage, your main landing pages—through Google's PageSpeed Insights, using the mobile score specifically, since that's where most traffic and most of the problems live. A score consistently below 70 on mobile is usually costing you conversions, not just ranking positions.</p>
<h2>FAQ</h2>
<h3>Do Core Web Vitals actually affect conversion rate, or just SEO?</h3>
<p>Both. Search ranking is the indirect effect; a visitor's first impression of a slow or jumpy page is the direct one, and it happens on every visit regardless of how they arrived.</p>
<h3>What's the fastest fix for a slow marketing site?</h3>
<p>Almost always image optimisation—hero and above-the-fold images are the most common single cause of a poor score, and usually the easiest to fix without a full rebuild.</p>
<h3>Does using a page builder or CMS make Core Web Vitals worse?</h3>
<p>Often, yes—many page builders load more script and style weight than a custom-built page needs. It's not disqualifying, but it's worth auditing specifically if your site is built on one.</p>
<p>If your site's performance might be costing you conversions, <a href="/services">see our web design and development work</a>, or <a href="/free-audit">book a free audit</a> and we'll show you exactly what's slowing you down.</p>
`,
    faq: [
      {
        question: "Do Core Web Vitals actually affect conversion rate, or just SEO?",
        answer:
          "Both. Search ranking is the indirect effect; a visitor's first impression of a slow or jumpy page is the direct one, and it happens on every visit regardless of how they arrived.",
      },
      {
        question: "What's the fastest fix for a slow marketing site?",
        answer:
          "Almost always image optimisation — hero and above-the-fold images are the most common single cause of a poor score, and usually the easiest to fix without a full rebuild.",
      },
      {
        question: "Does using a page builder or CMS make Core Web Vitals worse?",
        answer:
          "Often, yes — many page builders load more script and style weight than a custom-built page needs. It's worth auditing specifically if your site is built on one.",
      },
    ],
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
