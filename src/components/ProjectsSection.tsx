import { Search, Globe, Megaphone, ExternalLink, Users, Eye, TrendingUp, MousePointerClick, IndianRupee, Target } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

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
    niche: "Life Science & Pharma Distribution",
    region: "India",
    url: "https://labmateasia.com",
    bannerImage: webLabmateImg,
    goal: "Build a professional business website that positions Labmate Asia as a leading lab equipment distributor in India, showcasing their supply of lab and medical equipment for pharma and life science labs.",
    problem: [
      "No structured or modern website presence",
      "Limited online visibility for a national distributor",
      "Difficult for customers to explore products and principals",
      "No clear call-to-action for quick contact",
      "Poor mobile experience and slow page performance",
    ],
    whatIDid: [
      "Designed a clean, professional homepage with the headline 'We are the Leading Lab Equipment Distributor in India'",
      "Highlighted the business as a 'Life Science and Pharma Distributor'",
      "Created a clear company description covering product supply, global manufacturers, and after-sales support",
      "Added prominent 'Call Now' and 'Whatsapp Now' call-to-action buttons",
      "Built an 'Our Principals' section to showcase trusted global brand logos",
      "Developed responsive design for mobile, tablet, and desktop",
      "Optimized page speed, navigation, and basic on-page SEO",
      "Integrated WhatsApp and phone contact options for quick lead generation",
    ],
    result: [
      "Improved online presence and brand credibility across India",
      "Clear positioning as a leading lab equipment distributor",
      "Better user engagement and easier product discovery",
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
    <h4 className="font-heading font-semibold text-primary tracking-normal text-base">
      {children}
    </h4>
    <div className="mt-1 h-[2px] w-10 bg-primary/70 rounded-full" />
  </div>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-1.5">
    {items.map((it) => (
      <li key={it} className="text-[14px] text-muted-foreground flex items-start gap-1.5">
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
    className="animate-on-scroll visible bg-card border border-border rounded-2xl card-hover hover:border-primary/50 p-4 sm:p-5 md:p-6"
    style={{ transitionDelay: `${i * 0.1}s` }}
  >
    <div className="mb-4 flex items-center gap-3 flex-wrap">
      <div>
        <h3 className="font-heading font-bold tracking-normal text-[19px] sm:text-[22px] md:text-[26px] text-foreground break-words">
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
    <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-4 lg:gap-6 lg:divide-x lg:divide-border">
      {children}
    </div>
  </div>
);

const Banner = ({ src, alt }: { src: string; alt: string }) => (
  <div className="rounded-lg overflow-hidden border border-border w-full lg:w-[90%]">
    <img src={src} alt={alt} width={1024} height={768} loading="lazy" className="w-full h-40 sm:h-48 lg:h-36 object-cover" />
  </div>
);

const MetaRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-wrap items-baseline gap-1">
    <span className="text-primary font-heading font-semibold tracking-normal text-base md:text-lg">{label}</span>
    <span className="text-muted-foreground">-</span>
    <span className="font-semibold text-foreground text-base md:text-lg break-words">{value}</span>
  </div>
);


/* ---------- Cards ---------- */

const SeoCard = ({ p, i }: { p: SeoProject; i: number }) => (
  <CardShell title={p.title} url={p.url} i={i}>
    <div className="space-y-4 lg:pr-6">
      <Banner src={p.bannerImage} alt={`${p.title} banner`} />
      <div>
        <SeoHeading>Goal</SeoHeading>
        <p className="text-[14px] text-muted-foreground leading-snug">{p.goal}</p>
      </div>
      <div>
        <SeoHeading>Keywords</SeoHeading>
        <ul className="space-y-1.5">
          {p.keywords.map((k) => (
            <li key={k} className="text-[14px] text-muted-foreground flex items-start gap-1.5">
              <span className="w-1 h-1 rounded-full bg-muted-foreground mt-1.5 shrink-0" />
              <span>&ldquo;{k}&rdquo;</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="space-y-4 lg:pl-6">
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
        <p className="text-[14px] text-muted-foreground leading-snug">{p.status}</p>
      </div>
    </div>
  </CardShell>
);

const WebCard = ({ p, i }: { p: WebProject; i: number }) => (
  <CardShell title={p.title} url={p.url} i={i}>
    <div className="space-y-4 lg:pr-6">
      <div className="rounded-lg overflow-hidden border border-border w-full lg:w-[90%]">
        <img
          src={p.bannerImage}
          alt={`${p.title} banner`}
          width={1024}
          height={768}
          loading="lazy"
          className="w-full h-44 sm:h-52 lg:h-44 object-cover"
        />
      </div>
      <div>
        <SeoHeading>Goal</SeoHeading>
        <p className="text-[14px] text-muted-foreground leading-snug">{p.goal}</p>
      </div>
      <div>
        <SeoHeading>Problem</SeoHeading>
        <BulletList items={p.problem} />
      </div>
    </div>
    <div className="space-y-4 lg:pl-6">
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
    <div className="space-y-4 lg:pr-6">
      <Banner src={p.bannerImage} alt={`${p.title} banner`} />
      <div>
        <SeoHeading>Goal</SeoHeading>
        <p className="text-[14px] text-muted-foreground leading-snug">{p.goal}</p>
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
    <div className="space-y-4 lg:pl-6">
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
    <div className="space-y-4 lg:pr-6">
      <Banner src={p.bannerImage} alt={`${p.title} banner`} />
      <div>
        <SeoHeading>Goal</SeoHeading>
        <p className="text-[14px] text-muted-foreground leading-snug">{p.goal}</p>
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
    <div className="space-y-4 lg:pl-6">
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
        <p className="text-[14px] text-muted-foreground leading-snug">{p.note}</p>
      </div>
    </div>
  </CardShell>
);

/* ---------- Section ---------- */

const ProjectsSection = () => {
  const [active, setActive] = useState<Category>("seo");

  return (
    <section id="projects" className="py-16 md:py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="animate-on-scroll text-center mb-10 md:mb-12">
          <p className="text-primary text-sm font-medium uppercase tracking-wide mb-2">Projects</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">My Work</h2>
        </div>

        <div className="animate-on-scroll grid grid-cols-2 sm:flex sm:justify-center gap-2 mb-8 md:mb-10 sm:flex-wrap">
          {categories.map((c) => (
            <Button
              key={c.key}
              size="sm"
              variant={active === c.key ? "default" : "outline"}
              onClick={() => setActive(c.key)}
              className={
                "w-full sm:w-auto sm:size-default text-xs sm:text-sm " +
                (active === c.key
                  ? "bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-primary/50")
              }
            >
              <c.icon size={14} className="mr-1.5 sm:mr-2 shrink-0" />
              {c.label}
            </Button>
          ))}
        </div>


        <div className="w-full lg:w-[83%] lg:mx-auto space-y-6">
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
