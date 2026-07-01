import { Search, Globe, Megaphone, ExternalLink, TrendingUp, Users, MousePointerClick, Eye, Target, BarChart3, AlertTriangle, Zap, ArrowRight, Briefcase, IndianRupee, CheckCircle2, MapPin, KeyRound, Info, Calendar } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import adsBg1 from "@/assets/ads-bg-1.jpg";
import adsBg2 from "@/assets/ads-bg-2.jpg";
import adsBg3 from "@/assets/ads-bg-3.jpg";
import seoProjectImg from "@/assets/seo-project-landing.jpg";

type Category = "seo" | "web" | "ads";

const categories: { key: Category; label: string; icon: React.ElementType }[] = [
  { key: "seo", label: "SEO Projects", icon: Search },
  { key: "web", label: "Web Development", icon: Globe },
  { key: "ads", label: "Meta Ads", icon: Megaphone },
];

type AdProject = {
  title: string;
  badge: string;
  industry: string;
  duration: string;
  type: string;
  goal: string;
  bannerImage: string;
  accent: "blue" | "purple" | "teal";
  metrics: { label: string; value: string; icon: React.ElementType }[];
  before?: { cpl: string; ctr: string };
  after?: { cpl: string; ctr: string };
  challenge: string[];
  whatIDid: string[];
};

const adProjects: AdProject[] = [
  {
    title: "Free Class Lead Campaign",
    badge: "Lead Generation",
    industry: "Health & Wellness Industry",
    duration: "",
    type: "Lead Generation",
    goal: "Generate high-quality leads for free demo classes at minimal cost.",
    bannerImage: adsBg1,
    accent: "blue",
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
    badge: "Lead Generation",
    industry: "Health & Wellness Industry",
    duration: "",
    type: "Lead Generation",
    goal: "Generate consistent and quality leads in a competitive niche.",
    bannerImage: adsBg2,
    accent: "purple",
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
    badge: "Lead Generation",
    industry: "Health & Wellness Industry",
    duration: "",
    type: "Lead Generation",
    goal: "Generate high-quality leads at a lower cost while improving reach, engagement, and conversion performance.",
    bannerImage: adsBg3,
    accent: "teal",
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

const accentMap = {
  blue: {
    badgeBg: "bg-blue-500/15 text-blue-400 border-blue-500/30",
    ring: "hover:border-blue-500/50",
    btn: "bg-blue-600 hover:bg-blue-500 text-white",
    arrow: "bg-blue-500/20 text-blue-400",
  },
  purple: {
    badgeBg: "bg-purple-500/15 text-purple-400 border-purple-500/30",
    ring: "hover:border-purple-500/50",
    btn: "bg-purple-600 hover:bg-purple-500 text-white",
    arrow: "bg-purple-500/20 text-purple-400",
  },
  teal: {
    badgeBg: "bg-teal-500/15 text-teal-400 border-teal-500/30",
    ring: "hover:border-teal-500/50",
    btn: "bg-teal-600 hover:bg-teal-500 text-white",
    arrow: "bg-teal-500/20 text-teal-400",
  },
};

type SeoProject = {
  title: string;
  badge: string;
  niche: string;
  region: string;
  goal: string;
  bannerImage: string;
  status: string;
  contributions: string[];
  keywords: string[];
  url?: string;
};

const seoProjects: SeoProject[] = [
  {
    title: "SEO & Landing Page Project",
    badge: "SEO PROJECT",
    niche: "Cleaning Service",
    region: "Belfast, UK",
    goal: "Design and optimize an SEO-focused landing page for a cleaning service business targeting local customers in Belfast, UK.",
    bannerImage: seoProjectImg,
    url: "https://cleanwithdb.co.uk/",
    status: "Completed SEO implementation. Client website is currently inactive, so the live project is unavailable for public viewing.",
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

type Section = { heading: string; items: string[]; icon?: string };

const projects: Record<"web", {
  title: string;
  url?: string;
  points: string[];
  description?: string;
  goal?: string;
  sections?: Section[];
}[]> = {
  web: [
    {
      title: "Labmate Asia",
      url: "https://labmateasia.com",
      goal: "Design and develop a professional business website to showcase lab equipment products and generate quality inquiries across India",
      sections: [
        {
          heading: "Problem",
          icon: "⚠️",
          items: [
            "No structured or modern website presence",
            "Difficult for customers to explore products online",
            "Poor user experience and navigation issues",
            "No proper lead generation system",
            "Not optimized for SEO and mobile devices",
          ],
        },
        {
          heading: "What I Did",
          icon: "🛠",
          items: [
            "Planned and developed the complete website structure from scratch",
            "Designed a clean, professional UI aligned with the business niche",
            "Created product-based pages with clear categorization and navigation",
            "Developed responsive design for mobile, tablet, and desktop",
            "Implemented enquiry/lead generation forms for customer conversions",
            "Optimized website speed and performance",
            "Applied basic on-page SEO (meta tags, headings, URL structure)",
            "Integrated WhatsApp and call-to-action buttons for quick contact",
            "Ensured user-friendly navigation for better engagement",
          ],
        },
        {
          heading: "Result",
          icon: "📈",
          items: [
            "Improved online presence and brand credibility",
            "Increased customer inquiries through website forms",
            "Better user engagement and session duration",
            "Mobile-friendly experience leading to higher reach",
            "Strong foundation for SEO and digital marketing campaigns",
          ],
        },
      ],
      points: [],
    },
    {
      title: "Digitalsiddesh",
      url: "https://digitalsiddesh.com/wordpress-developer-chennai/",
      points: [
        "Built SEO-friendly landing page",
        "Performed technical SEO audit",
        "Improved mobile responsiveness & page structure",
        "Supported SEO optimization and performance improvements",
      ],
    },
  ],
};

const AdCard = ({ p, i }: { p: AdProject; i: number }) => {
  const a = accentMap[p.accent];
  return (
    <div
      className={`animate-on-scroll visible bg-card border border-border rounded-2xl overflow-hidden card-hover ${a.ring}`}
      style={{ transitionDelay: `${i * 0.1}s` }}
    >
      {/* Banner */}
      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={p.bannerImage}
          alt={`${p.title} banner`}
          loading="lazy"
          width={1024}
          height={512}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-card" />
        <div className="relative h-full p-5 flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border ${a.badgeBg}`}>
              <Megaphone size={12} /> {p.badge}
            </span>
            <span className="text-white/90 text-sm font-semibold tracking-wide">∞ Meta</span>
          </div>
          <div>
            <h3 className="font-heading font-bold text-2xl text-white drop-shadow mb-2">{p.title}</h3>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/85">
              <span className="inline-flex items-center gap-1"><Briefcase size={12} /> {p.industry}</span>
              {p.duration && (
                <>
                  <span className="opacity-50">+</span>
                  <span className="inline-flex items-center gap-1"><Calendar size={12} /> {p.duration}</span>
                </>
              )}
              <span className="opacity-50">+</span>
              <span className="inline-flex items-center gap-1"><Target size={12} /> {p.type}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 space-y-5">
        {/* Goal */}
        <div className="flex gap-3">
          <div className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${a.arrow}`}>
            <Target size={18} />
          </div>
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-1 flex items-center gap-2">Goal</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.goal}</p>
          </div>
        </div>

        {/* Results */}
        <div>
          <h4 className="font-heading font-semibold text-foreground mb-3 flex items-center gap-2">
            <BarChart3 size={16} className="text-primary" /> Results
          </h4>
          <div className="grid grid-cols-4 gap-2">
            {p.metrics.map((m) => (
              <div key={m.label} className="bg-muted/40 border border-border rounded-lg p-3 text-center">
                <m.icon size={16} className="text-primary mx-auto mb-1.5" />
                <p className="text-base font-bold font-heading leading-tight">{m.value}</p>
                <p className="text-[10px] text-muted-foreground mt-0.5 leading-tight">{m.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Before / After */}
        {p.before && p.after && (
          <div className="bg-muted/30 border border-border rounded-lg p-3">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
              <div className="text-center">
                <p className="text-[11px] text-muted-foreground mb-1">Before Campaign</p>
                <div className="flex justify-center gap-4">
                  <div>
                    <p className="font-bold text-sm line-through opacity-70">{p.before.cpl}</p>
                    <p className="text-[10px] text-muted-foreground">Cost Per Lead</p>
                  </div>
                  <div>
                    <p className="font-bold text-sm line-through opacity-70">{p.before.ctr}</p>
                    <p className="text-[10px] text-muted-foreground">CTR</p>
                  </div>
                </div>
              </div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${a.arrow}`}>
                <ArrowRight size={16} />
              </div>
              <div className="text-center">
                <p className="text-[11px] text-muted-foreground mb-1">After Campaign</p>
                <div className="flex justify-center gap-4">
                  <div>
                    <p className="font-bold text-sm text-green-400">{p.after.cpl}</p>
                    <p className="text-[10px] text-muted-foreground">Cost Per Lead</p>
                  </div>
                  <div>
                    <p className="font-bold text-sm text-green-400">{p.after.ctr}</p>
                    <p className="text-[10px] text-muted-foreground">CTR</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Challenge + What I Did */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h5 className="font-heading font-semibold text-sm mb-2 flex items-center gap-2 text-yellow-500">
              <AlertTriangle size={14} /> Challenge
            </h5>
            <ul className="space-y-1.5">
              {p.challenge.map((it) => (
                <li key={it} className="text-xs text-muted-foreground flex items-start gap-2">
                  <CheckCircle2 size={12} className="text-green-500 mt-0.5 shrink-0" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-heading font-semibold text-sm mb-2 flex items-center gap-2 text-primary">
              <Zap size={14} /> What I Did
            </h5>
            <ul className="space-y-1.5">
              {p.whatIDid.map((it) => (
                <li key={it} className="text-xs text-muted-foreground flex items-start gap-2">
                  <CheckCircle2 size={12} className="text-green-500 mt-0.5 shrink-0" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const SeoHeading = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-2">
    <h4 className="font-heading font-bold text-primary uppercase tracking-wider text-base">
      {children}
    </h4>
    <div className="mt-1 h-[2px] w-10 bg-primary/70 rounded-full" />
  </div>
);

const SeoCard = ({ p, i }: { p: SeoProject; i: number }) => {
  return (
    <div
      className="animate-on-scroll visible bg-card border border-border rounded-2xl card-hover hover:border-primary/50 p-5 md:p-6"
      style={{ transitionDelay: `${i * 0.1}s` }}
    >
      {/* Title */}
      <div className="mb-4 flex items-center gap-3">
        <div>
          <h3 className="font-heading font-extrabold uppercase tracking-wide text-[22px] md:text-[26px] text-foreground">
            {p.title}
          </h3>
          <div className="mt-1.5 h-[2px] w-20 bg-primary rounded-full" />
        </div>
        {p.url && (
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors"
            aria-label={`Visit ${p.title}`}
          >
            <ExternalLink size={18} />
          </a>
        )}
      </div>

      {/* Two columns with divider */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-4 md:gap-6 md:divide-x md:divide-border">
        {/* LEFT */}
        <div className="space-y-4 md:pr-6">
          <div className="rounded-lg overflow-hidden border border-border w-[90%]">
            <img
              src={p.bannerImage}
              alt={`${p.title} banner`}
              loading="lazy"
              width={1024}
              height={300}
              className="w-full h-36 object-cover"
            />
          </div>

          <div>
            <SeoHeading>Goal</SeoHeading>
            <p className="text-sm text-muted-foreground leading-snug">{p.goal}</p>
          </div>

          <div>
            <SeoHeading>Keywords</SeoHeading>
            <ul className="space-y-1.5">
              {p.keywords.map((k) => (
                <li key={k} className="text-sm text-muted-foreground flex items-start gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground mt-1.5 shrink-0" />
                  <span>&ldquo;{k}&rdquo;</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-4 md:pl-6">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-baseline gap-1">
              <span className="text-primary font-heading font-bold uppercase tracking-wide text-lg">Niche</span>
              <span className="text-muted-foreground">-</span>
              <span className="font-semibold text-foreground text-lg">{p.niche}</span>
            </div>
            <div className="flex flex-wrap items-baseline gap-1">
              <span className="text-primary font-heading font-bold uppercase tracking-wide text-lg">Region</span>
              <span className="text-muted-foreground">-</span>
              <span className="font-semibold text-foreground text-lg">{p.region}</span>
            </div>
          </div>

          <div>
            <SeoHeading>My Contribution</SeoHeading>
            <ul className="space-y-1.5">
              {p.contributions.map((it) => (
                <li key={it} className="text-sm text-muted-foreground flex items-start gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground mt-1.5 shrink-0" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SeoHeading>Project Status</SeoHeading>
            <p className="text-sm text-muted-foreground leading-snug">{p.status}</p>
          </div>
        </div>
      </div>
    </div>
  );
};


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

        {active === "ads" ? (
          <div className="grid md:grid-cols-2 gap-6 mx-auto" style={{ maxWidth: "min(100%, calc(56rem * 1.07))" }}>
            {adProjects.map((p, i) => (
              <AdCard key={p.title} p={p} i={i} />
            ))}
          </div>
        ) : active === "seo" ? (
          <div className="w-full md:w-[83%] md:mx-auto">
            {seoProjects.map((p, i) => (
              <SeoCard key={p.title} p={p} i={i} />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6 mx-auto" style={{ maxWidth: "min(100%, calc(56rem * 1.07))" }}>
            {projects.web.map((p, i) => (
              <div
                key={p.title}
                className="animate-on-scroll visible bg-card border border-border rounded-lg p-6 card-hover"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading font-semibold text-lg">{p.title}</h3>
                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                      aria-label={`Visit ${p.title}`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>

                {p.goal && (
                  <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">🎯 Goal: </span>
                    {p.goal}
                  </p>
                )}

                {p.sections?.map((sec) => (
                  <div key={sec.heading} className="mb-4 last:mb-0">
                    <div className="h-px bg-border mb-3" />
                    <h4 className="font-heading font-semibold text-foreground mb-2 flex items-center gap-2">
                      {sec.icon && <span aria-hidden>{sec.icon}</span>}
                      {sec.heading}
                    </h4>
                    <ul className="space-y-2">
                      {sec.items.map((it) => (
                        <li key={it} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {p.points.length > 0 && (
                  <ul className="space-y-2">
                    {p.points.map((pt) => (
                      <li key={pt} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                )}

                {p.description && (
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
