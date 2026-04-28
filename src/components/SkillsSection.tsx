import {
  Search, Globe, Target, BarChart3, Users, Palette,
  LineChart, TrendingUp, Mail, Megaphone, BarChart, Wrench
} from "lucide-react";

const coreSkills = [
  {
    icon: Search,
    title: "SEO",
    desc: "On-page, Off-page, Technical SEO, Local SEO",
  },
  {
    icon: Globe,
    title: "WordPress",
    desc: "Landing Page Optimization, Plugin Installation, Elementor",
  },
  {
    icon: Target,
    title: "Meta Ads",
    desc: "Campaign Setup, Ad Management, Lead Generation",
  },
  {
    icon: BarChart3,
    title: "Google Ads",
    desc: "Search Campaigns, Campaign Optimization, Keyword Targeting",
  },
  {
    icon: Users,
    title: "CRM Management",
    desc: "Customer Data Handling, Lead Management",
  },
  {
    icon: Palette,
    title: "Canva",
    desc: "Creative Design, Social Media Content, Brochure Design",
  },
];

const tools = [
  { icon: BarChart3, label: "Google Ads" },
  { icon: Megaphone, label: "Meta Ads Manager" },
  { icon: BarChart, label: "Google Analytics" },
  { icon: LineChart, label: "Search Console" },
  { icon: TrendingUp, label: "Ubersuggest" },
  { icon: Palette, label: "Canva" },
  { icon: Users, label: "Synergy CRM" },
  { icon: Mail, label: "Mailchimp" },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 bg-card/50">
    <div className="container mx-auto px-4">
      <div className="animate-on-scroll text-center mb-12">
        <p className="text-primary text-sm font-medium uppercase tracking-wide mb-2">Skills & Tools</p>
        <h2 className="text-4xl md:text-5xl font-heading font-bold">What I Work With</h2>
      </div>

      <div className="grid lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {/* Core Skills - 60% */}
        <div className="lg:col-span-3">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
              <Search className="text-primary" size={18} />
            </div>
            <h3 className="text-xl font-heading font-semibold">Core Skills</h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {coreSkills.map((s, i) => (
              <div
                key={s.title}
                className="animate-on-scroll bg-card border border-border rounded-lg p-5 card-hover hover:border-primary/40 transition-colors"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <s.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground text-base">{s.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-1">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools - 40% */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
              <Wrench className="text-primary" size={18} />
            </div>
            <h3 className="text-xl font-heading font-semibold">Tools</h3>
          </div>

          <div className="bg-card border border-border rounded-lg p-5">
            <div className="grid grid-cols-2 gap-3">
              {tools.map((t, i) => (
                <div
                  key={t.label}
                  className="animate-on-scroll flex items-center gap-3 px-3 py-3 rounded-md bg-background/50 border border-border/60 hover:border-primary/40 transition-colors"
                  style={{ transitionDelay: `${i * 0.05}s` }}
                >
                  <t.icon className="text-primary shrink-0" size={18} />
                  <span className="text-sm font-medium">{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection;
