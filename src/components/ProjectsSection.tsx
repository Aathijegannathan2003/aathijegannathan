import { Search, Globe, Megaphone, ExternalLink, Users, Eye, TrendingUp, MousePointerClick, IndianRupee, Target } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import adsBg1 from "@/assets/ads-bg-1.jpg";
import adsBg2 from "@/assets/ads-bg-2.jpg";
import adsBg3 from "@/assets/ads-bg-3.jpg";
import seoProjectImg from "@/assets/seo-project-landing.jpg";
import webLabmateImg from "@/assets/web-labmate.jpg";
import webDigitalsiddeshImg from "@/assets/web-digitalsiddesh.jpg";

type Category = "seo" | "web" | "ads" | "googleAds";

const categories: { key: Category; label: string; icon: React.ElementType }[] = [
  { key: "seo", label: "SEO Projects", icon: Search },
  { key: "web", label: "Web Development", icon: Globe },
  { key: "ads", label: "Meta Ads", icon: Megaphone },
  { key: "googleAds", label: "Google Ads", icon: Target },
];

/* ---------- Types ---------- */

type SeoProject = {
  title: string;
  niche: string;
  region: string;
  goal: string;
  bannerImage: string;
  status: string;
  contributions: string[];
  keywords: string[];
  url?: string;
};

type WebProject = {
  title: string;
  niche: string;
  region: string;
  goal: string;
  bannerImage: string;
  url?: string;
  problem: string[];
  whatIDid: string[];
  result: string[];
};

type AdProject = {
  title: string;
  industry: string;
  type: string;
  goal: string;
  bannerImage: string;
  metrics: { label: string; value: string; icon: React.ElementType }[];
  challenge: string[];
  whatIDid: string[];
};

type GoogleAdsProject = {
  title: string;
  industry: string;
  type: string;
  goal: string;
  product?: string;
  bannerImage: string;
  metrics: { label: string; value: string; icon: React.ElementType }[];
  campaignDetails: { label: string; value: string }[];
  whatIDid: string[];
  note: string;
};

/* ---------- Data ---------- */

const seoProjects: SeoProject[] = [
  {
    title: "SEO & Landing Page Project",
    niche: "Cleaning Service",
    region: "Belfast, UK",
    goal: "Design and optimize an SEO-focused landing page for a cleaning service business targeting local customers in Belfast, UK.",
    bannerImage: seoProjectImg,
    url: "https://cleanwithdb.co.uk/",
    status:
      "Completed SEO implementation. Client website is currently inactive, so the live project is unavailable for public viewing.",
    contributions: [
      "Conducted keyword research for local SEO targeting",
      "Built and optimized 8+ SEO-friendly landing pages",
      "Improved on-page SEO (title tags, meta descriptions, headings)",
      "Implemented keyword placement and internal linking strategies",
      "Optimized CTAs and content structure for better conversions",
      "Assisted with local SEO and technical SEO improvements",
    ],
    keywords: [
      "best cleaning services in Belfast",
      "Local cleaning service related keywords",
    ],
  },
];

const webProjects: WebProject[] = [
  {
    title: "Labmate Asia",
    niche: "Lab Equipment",
    region: "India",
    url: "https://labmateasia.com",
    bannerImage: webLabmateImg,
    goal: "Design and develop a professional business website to showcase lab equipment products and generate quality inquiries across India.",
    problem: [
      "No structured or modern website presence",
      "Difficult for customers to explore products online",
      "Poor user experience and navigation issues",
      "No proper lead generation system",
      "Not optimized for SEO and mobile devices",
    ],
    whatIDid: [
      "Planned and developed the complete website structure from scratch",
      "Designed a clean, professional UI aligned with the business niche",
      "Created product-based pages with clear categorization and navigation",
      "Developed responsive design for mobile, tablet, and desktop",
      "Implemented enquiry/lead generation forms for customer conversions",
      "Optimized website speed and performance",
      "Applied basic on-page SEO (meta tags, headings, URL structure)",
      "Integrated WhatsApp and call-to-action buttons for quick contact",
    ],
    result: [
      "Improved online presence and brand credibility",
      "Increased customer inquiries through website forms",
      "Better user engagement and session duration",
      "Mobile-friendly experience leading to higher reach",
      "Strong foundation for SEO and digital marketing campaigns",
    ],
  },
  {
    title: "Digitalsiddesh",
    niche: "Digital Marketing Agency",
    region: "Chennai, India",
    url: "https://digitalsiddesh.com/wordpress-developer-chennai/",
    bannerImage: webDigitalsiddeshImg,
    goal: "Build a WordPress developer landing page optimized for SEO and lead generation.",
    problem: [
      "Missing dedicated service landing page",
      "Weak on-page SEO structure",
      "Poor mobile responsiveness",
    ],
    whatIDid: [
      "Built SEO-friendly landing page",
      "Performed technical SEO audit",
      "Improved mobile responsiveness & page structure",
      "Supported SEO optimization and performance improvements",
    ],
    result: [
      "Better keyword visibility for target service pages",
      "Improved page speed and mobile experience",
      "Cleaner structure supporting SEO growth",
    ],
  },
];

const adProjects: AdProject[] = [
  {
    title: "Free Class Lead Campaign",
    industry: "Health & Wellness Industry",
    type: "Lead Generation",
    goal: "Generate high-quality leads for free demo classes at minimal cost.",
    bannerImage: adsBg1,
    metrics: [
      { label: "Leads", value: "65+", icon: Users },
      { label: "Cost Per Lead", value: "₹6", icon: IndianRupee },
      { label: "Impressions", value: "5,406", icon: Eye },
      { label: "CTR", value: "6.66%", icon: TrendingUp },
    ],
    challenge: [
      "Limited budget with high competition",
      "Need to attract relevant audience only",
      "Low initial engagement on ads",
    ],
    whatIDid: [
      "Audience research & targeting",
      "High-converting ad creatives",
      "Lead form optimization",
      "Daily optimization & monitoring",
      "Reduced CPL with performance tracking",
    ],
  },
  {
    title: "Lead Generation Campaign",
    industry: "Health & Wellness Industry",
    type: "Lead Generation",
    goal: "Generate consistent and quality leads in a competitive niche.",
    bannerImage: adsBg2,
    metrics: [
      { label: "Leads", value: "32+", icon: Users },
      { label: "Cost Per Lead", value: "₹45", icon: IndianRupee },
      { label: "Impressions", value: "25,309", icon: Eye },
      { label: "CTR", value: "1.49%", icon: TrendingUp },
    ],
    challenge: [
      "Highly competitive market",
      "Need to maintain lead quality",
      "Higher expected CPL due to niche targeting",
    ],
    whatIDid: [
      "Defined precise target audience",
      "High-converting ad creatives",
      "Funnel-based lead generation",
      "Optimized placements & bidding",
      "Monitored & refined targeting",
    ],
  },
  {
    title: "Meta Ads Lead Campaign",
    industry: "Health & Wellness Industry",
    type: "Lead Generation",
    goal: "Generate high-quality leads at a lower cost while improving reach, engagement, and conversion performance.",
    bannerImage: adsBg3,
    metrics: [
      { label: "Leads", value: "42", icon: Users },
      { label: "Cost Per Lead", value: "₹5.55", icon: IndianRupee },
      { label: "Impressions", value: "4,049", icon: Eye },
      { label: "Reach", value: "2,911", icon: MousePointerClick },
    ],
    challenge: [
      "Better audience refinement needed",
      "Reduce cost per lead",
      "Maintain steady lead volume",
    ],
    whatIDid: [
      "Built & managed campaign structure",
      "Optimized budget allocation",
      "Refined demographics & interests",
      "Improved delivery settings",
      "Continuous performance tracking",
    ],
  },
];

const googleAdsProjects: GoogleAdsProject[] = [
  {
    title: "Google Search Ads Campaign",
    industry: "Laboratory & Life Science",
    type: "Google Search Campaign",
    goal: "Generate qualified clicks and leads for laboratory products.",
    product: "Colony counting machine",
    bannerImage: adsBg1,
    metrics: [
      { label: "Clicks", value: "80", icon: MousePointerClick },
      { label: "Impressions", value: "1,000+", icon: Eye },
      { label: "Avg. CPC", value: "₹64.77", icon: IndianRupee },
      { label: "Total Spend", value: "₹5.18K", icon: IndianRupee },
      { label: "Qualified Leads", value: "2", icon: Users },
    ],
    campaignDetails: [
      { label: "Budget", value: "₹5,000" },
      { label: "Duration", value: "June – July 2026" },
    ],
    whatIDid: [
      "Conducted keyword research for high-intent search terms.",
      "Created and optimized Google Search Ads campaign.",
      "Wrote compelling ad copies to improve CTR.",
      "Added negative keywords to reduce irrelevant traffic.",
      "Optimized bidding strategy and campaign settings.",
      "Continuously monitored and improved campaign performance.",
    ],
    note: "Improved campaign performance through continuous optimization and keyword refinement.",
  },
];

/* ---------- Shared UI ---------- */

const SeoHeading = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-2">
    <h4 className="font-heading font-bold text-primary uppercase tracking-wider text-base">
      {children}
    </h4>
    <div className="mt-1 h-[2px] w-10 bg-primary/70 rounded-full" />
  </div>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-1.5">
    {items.map((it) => (
      <li key={it} className="text-base text-muted-foreground flex items-start gap-1.5">
        <span className="w-1 h-1 rounded-full bg-muted-foreground mt-1.5 shrink-0" />
        <span>{it}</span>
      </li>
    ))}
  </ul>
);

const CardShell = ({
  title,
  url,
  i,
  children,
}: {
  title: string;
  url?: string;
  i: number;
  children: React.ReactNode;
}) => (
  <div
    className="animate-on-scroll visible bg-card border border-border rounded-2xl card-hover hover:border-primary/50 p-5 md:p-6"
    style={{ transitionDelay: `${i * 0.1}s` }}
  >
    <div className="mb-4 flex items-center gap-3">
      <div>
        <h3 className="font-heading font-extrabold uppercase tracking-wide text-[22px] md:text-[26px] text-foreground">
          {title}
        </h3>
        <div className="mt-1.5 h-[2px] w-20 bg-primary rounded-full" />
      </div>
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 transition-colors"
          aria-label={`Visit ${title}`}
        >
          <ExternalLink size={18} />
        </a>
      )}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-4 md:gap-6 md:divide-x md:divide-border">
      {children}
    </div>
  </div>
);

const Banner = ({ src, alt }: { src: string; alt: string }) => (
  <div className="rounded-lg overflow-hidden border border-border w-[90%]">
    <img src={src} alt={alt} width={1024} height={768} loading="lazy" className="w-full h-36 object-cover" />
  </div>
);

const MetaRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-wrap items-baseline gap-1">
    <span className="text-primary font-heading font-bold uppercase tracking-wide text-lg">{label}</span>
    <span className="text-muted-foreground">-</span>
    <span className="font-semibold text-foreground text-lg">{value}</span>
  </div>
);

/* ---------- Cards ---------- */

const SeoCard = ({ p, i }: { p: SeoProject; i: number }) => (
  <CardShell title={p.title} url={p.url} i={i}>
    <div className="space-y-4 md:pr-6">
      <Banner src={p.bannerImage} alt={`${p.title} banner`} />
      <div>
        <SeoHeading>Goal</SeoHeading>
        <p className="text-base text-muted-foreground leading-snug">{p.goal}</p>
      </div>
      <div>
        <SeoHeading>Keywords</SeoHeading>
        <ul className="space-y-1.5">
          {p.keywords.map((k) => (
            <li key={k} className="text-base text-muted-foreground flex items-start gap-1.5">
              <span className="w-1 h-1 rounded-full bg-muted-foreground mt-1.5 shrink-0" />
              <span>&ldquo;{k}&rdquo;</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="space-y-4 md:pl-6">
      <div className="space-y-1.5">
        <MetaRow label="Niche" value={p.niche} />
        <MetaRow label="Region" value={p.region} />
      </div>
      <div>
        <SeoHeading>My Contribution</SeoHeading>
        <BulletList items={p.contributions} />
      </div>
      <div>
        <SeoHeading>Project Status</SeoHeading>
        <p className="text-base text-muted-foreground leading-snug">{p.status}</p>
      </div>
    </div>
  </CardShell>
);

const WebCard = ({ p, i }: { p: WebProject; i: number }) => (
  <CardShell title={p.title} url={p.url} i={i}>
    <div className="space-y-4 md:pr-6">
      <Banner src={p.bannerImage} alt={`${p.title} banner`} />
      <div>
        <SeoHeading>Goal</SeoHeading>
        <p className="text-base text-muted-foreground leading-snug">{p.goal}</p>
      </div>
      <div>
        <SeoHeading>Problem</SeoHeading>
        <BulletList items={p.problem} />
      </div>
    </div>
    <div className="space-y-4 md:pl-6">
      <div className="space-y-1.5">
        <MetaRow label="Niche" value={p.niche} />
        <MetaRow label="Region" value={p.region} />
      </div>
      <div>
        <SeoHeading>What I Did</SeoHeading>
        <BulletList items={p.whatIDid} />
      </div>
      <div>
        <SeoHeading>Result</SeoHeading>
        <BulletList items={p.result} />
      </div>
    </div>
  </CardShell>
);

const AdCard = ({ p, i }: { p: AdProject; i: number }) => (
  <CardShell title={p.title} i={i}>
    <div className="space-y-4 md:pr-6">
      <Banner src={p.bannerImage} alt={`${p.title} banner`} />
      <div>
        <SeoHeading>Goal</SeoHeading>
        <p className="text-base text-muted-foreground leading-snug">{p.goal}</p>
      </div>
      <div>
        <SeoHeading>Results</SeoHeading>
        <div className="grid grid-cols-2 gap-2">
          {p.metrics.map((m) => (
            <div key={m.label} className="bg-muted/40 border border-border rounded-lg p-2.5 text-center">
              <m.icon size={16} className="text-primary mx-auto mb-1" />
              <p className="text-base font-bold font-heading leading-tight">{m.value}</p>
              <p className="text-[11px] text-muted-foreground mt-0.5 leading-tight">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="space-y-4 md:pl-6">
      <div className="space-y-1.5">
        <MetaRow label="Industry" value={p.industry} />
        <MetaRow label="Type" value={p.type} />
      </div>
      <div>
        <SeoHeading>What I Did</SeoHeading>
        <BulletList items={p.whatIDid} />
      </div>
      <div>
        <SeoHeading>Challenge</SeoHeading>
        <BulletList items={p.challenge} />
      </div>
    </div>
  </CardShell>
);

const GoogleAdsCard = ({ p, i }: { p: GoogleAdsProject; i: number }) => (
  <CardShell title={p.title} i={i}>
    <div className="space-y-4 md:pr-6">
      <Banner src={p.bannerImage} alt={`${p.title} banner`} />
      <div>
        <SeoHeading>Goal</SeoHeading>
        <p className="text-base text-muted-foreground leading-snug">{p.goal}</p>
      </div>
      <div>
        <SeoHeading>Results</SeoHeading>
        <div className="grid grid-cols-2 gap-2">
          {p.metrics.map((m) => (
            <div key={m.label} className="bg-muted/40 border border-border rounded-lg p-2.5 text-center">
              <m.icon size={16} className="text-primary mx-auto mb-1" />
              <p className="text-base font-bold font-heading leading-tight">{m.value}</p>
              <p className="text-[11px] text-muted-foreground mt-0.5 leading-tight">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="space-y-4 md:pl-6">
      <div className="space-y-1.5">
        <MetaRow label="Industry" value={p.industry} />
        <MetaRow label="Type" value={p.type} />
        {p.product && <MetaRow label="Product" value={p.product} />}
      </div>
      <div>
        <SeoHeading>Campaign Details</SeoHeading>
        <div className="space-y-1.5">
          {p.campaignDetails.map((d) => (
            <MetaRow key={d.label} label={d.label} value={d.value} />
          ))}
        </div>
      </div>
      <div>
        <SeoHeading>What I Did</SeoHeading>
        <BulletList items={p.whatIDid} />
      </div>
      <div>
        <SeoHeading>Note</SeoHeading>
        <p className="text-base text-muted-foreground leading-snug">{p.note}</p>
      </div>
    </div>
  </CardShell>
);

/* ---------- Section ---------- */

const ProjectsSection = () => {
  const [active, setActive] = useState<Category>("seo");

  return (
    <section id="projects" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="animate-on-scroll text-center mb-12">
          <p className="text-primary text-sm font-medium uppercase tracking-wide mb-2">Projects</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold">My Work</h2>
        </div>

        <div className="animate-on-scroll flex justify-center gap-2 mb-10 flex-wrap">
          {categories.map((c) => (
            <Button
              key={c.key}
              variant={active === c.key ? "default" : "outline"}
              onClick={() => setActive(c.key)}
              className={
                active === c.key
                  ? "bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
              }
            >
              <c.icon size={16} className="mr-2" />
              {c.label}
            </Button>
          ))}
        </div>

        <div className="w-full md:w-[83%] md:mx-auto space-y-6">
          {active === "seo" && seoProjects.map((p, i) => <SeoCard key={p.title} p={p} i={i} />)}
          {active === "web" && webProjects.map((p, i) => <WebCard key={p.title} p={p} i={i} />)}
          {active === "ads" && adProjects.map((p, i) => <AdCard key={p.title} p={p} i={i} />)}
          {active === "googleAds" && googleAdsProjects.map((p, i) => <GoogleAdsCard key={p.title} p={p} i={i} />)}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
