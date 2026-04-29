import { Search, Globe, Megaphone, ExternalLink, TrendingUp, Users, MousePointerClick, Eye } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

type Category = "seo" | "web" | "ads";

type Section = { heading: string; items: string[] };

const categories: { key: Category; label: string; icon: React.ElementType }[] = [
  { key: "seo", label: "SEO Projects", icon: Search },
  { key: "web", label: "Web Development", icon: Globe },
  { key: "ads", label: "Meta Ads", icon: Megaphone },
];

const projects: Record<Category, {
  title: string;
  url?: string;
  points: string[];
  description?: string;
  goal?: string;
  sections?: Section[];
  metrics?: { label: string; value: string; icon: React.ElementType }[];
}[]> = {
  seo: [
    {
      title: "CleanWithDB (UK Client)",
      url: "https://cleanwithdb.co.uk",
      goal: "Improve Google ranking and generate organic leads for a cleaning service in Belfast",
      sections: [
        {
          heading: "Problem",
          items: [
            "Website had low visibility on Google",
            "No proper keyword targeting",
            "Weak on-page SEO structure",
          ],
        },
        {
          heading: "What I Did",
          items: [
            'Performed keyword research and targeted: "best cleaning services in Belfast"',
            "Planned and designed the landing page structure from scratch to final implementation",
            "Executed on-page SEO optimization (title tags, meta descriptions, headings)",
            "Improved content structure (H1, H2, keyword placement)",
            "Implemented internal linking strategy and strong CTAs",
            "Focused on local SEO and technical SEO improvements",
            "Tracked website performance using Google Search Console and Google Analytics",
          ],
        },
      ],
      points: [],
    },
    {
      title: "Digitalsiddesh",
      url: "https://digitalsiddesh.com/",
      points: [
        "Optimized SEO content for WordPress website",
        'Targeted keyword: "best WordPress freelancer in Chennai"',
        "Improved content readability & keyword placement",
        "Enhanced on-page SEO for better search visibility",
      ],
    },
  ],
  web: [
    {
      title: "Labmate Asia",
      url: "https://labmateasia.com",
      points: [
        "Built complete website from scratch using WordPress",
        "Created SEO-friendly site structure",
        "Optimized pages for search engines & performance",
        "Improved UI/UX for better user engagement",
        "Handled end-to-end website development from design to SEO optimization",
      ],
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
  ads: [
    {
      title: "Free Class Lead Campaign",
      description:
        "Ran a lead generation campaign with proper audience targeting and ad creatives, resulting in high engagement and low-cost leads.",
      points: ["Generated 65+ leads"],
      metrics: [
        { label: "Leads", value: "65+", icon: Users },
        { label: "CPL", value: "₹6", icon: TrendingUp },
        { label: "Impressions", value: "5,406", icon: Eye },
        { label: "Reach", value: "4,800+", icon: Users },
        { label: "CTR", value: "6.66%", icon: MousePointerClick },
      ],
    },
    {
      title: "Lead Generation Campaign",
      description:
        "Executed a targeted campaign in a competitive niche, focusing on reaching the right audience and generating quality leads.",
      points: ["Generated 32+ leads"],
      metrics: [
        { label: "Leads", value: "32+", icon: Users },
        { label: "CPL", value: "₹45", icon: TrendingUp },
        { label: "Impressions", value: "25,309", icon: Eye },
        { label: "Reach", value: "16,400+", icon: Users },
        { label: "CTR", value: "1.49%", icon: MousePointerClick },
      ],
    },
  ],
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

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects[active].map((p, i) => (
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

              {p.metrics && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                  {p.metrics.map((m) => (
                    <div key={m.label} className="bg-muted rounded-lg p-3 text-center">
                      <m.icon size={16} className="text-primary mx-auto mb-1" />
                      <p className="text-lg font-bold font-heading">{m.value}</p>
                      <p className="text-xs text-muted-foreground">{m.label}</p>
                    </div>
                  ))}
                </div>
              )}

              {p.goal && (
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">Goal: </span>
                  {p.goal}
                </p>
              )}

              {p.sections?.map((sec) => (
                <div key={sec.heading} className="mb-4 last:mb-0">
                  <div className="h-px bg-border mb-3" />
                  <h4 className="font-heading font-semibold text-foreground mb-2">{sec.heading}</h4>
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
      </div>
    </section>
  );
};

export default ProjectsSection;
