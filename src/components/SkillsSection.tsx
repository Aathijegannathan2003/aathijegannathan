import {
  Search, Globe, Users, Palette,
  LineChart, TrendingUp, Megaphone, BarChart3, Wrench, Mail,
  Layers,
} from "lucide-react";

const coreSkills = [
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    desc: "Implement on-page, technical, and local SEO strategies to improve search visibility, rankings, and organic website traffic.",
    gradient: "from-blue-500 to-blue-600",
    textColor: "text-blue-400",
    dot: "bg-blue-400",
  },
  {
    icon: BarChart3,
    title: "Search Engine Marketing (SEM)",
    desc: "Plan and optimize Google Ads campaigns to drive website traffic and generate leads through keyword research, ad copy, bidding, and performance analysis.",
    gradient: "from-orange-500 to-amber-500",
    textColor: "text-orange-400",
    dot: "bg-orange-400",
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing (SMM)",
    desc: "Create and optimize Meta Ads campaigns to generate leads through audience targeting, budget management, ad copy, and performance analysis.",
    gradient: "from-emerald-500 to-teal-500",
    textColor: "text-emerald-400",
    dot: "bg-emerald-400",
  },
  {
    icon: Globe,
    title: "WordPress Development",
    desc: "Build and customize responsive WordPress websites and landing pages using Elementor, with a focus on SEO-friendly structure and content optimization.",
    gradient: "from-purple-500 to-purple-600",
    textColor: "text-purple-400",
    dot: "bg-purple-400",
  },
  {
    icon: Users,
    title: "CRM Management",
    desc: "Manage customer and lead data, maintain accurate records, track interactions, and support regular CRM activities for effective follow-up.",
    gradient: "from-cyan-500 to-teal-500",
    textColor: "text-cyan-400",
    dot: "bg-cyan-400",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    desc: "Create and optimize basic email campaigns using Mailchimp to communicate with customers and support engagement and conversions.",
    gradient: "from-violet-500 to-purple-500",
    textColor: "text-violet-400",
    dot: "bg-violet-400",
  },
  {
    icon: LineChart,
    title: "Google Analytics & Search Console",
    desc: "Analyze website performance, traffic, user behavior, clicks, impressions, keywords, indexing, and other important SEO metrics.",
    gradient: "from-sky-500 to-indigo-500",
    textColor: "text-sky-400",
    dot: "bg-sky-400",
  },
  {
    icon: Palette,
    title: "Canva Design",
    desc: "Design professional social media creatives, brochures, PDFs, banners, and other marketing materials using Canva Pro.",
    gradient: "from-pink-500 to-rose-500",
    textColor: "text-pink-400",
    dot: "bg-pink-400",
  },
];

const tools = [
  { icon: BarChart3, label: "Google Ads", color: "text-orange-400 bg-orange-500/10" },
  { icon: Megaphone, label: "Meta Ads Manager", color: "text-blue-400 bg-blue-500/10" },
  { icon: Globe, label: "WordPress", color: "text-purple-400 bg-purple-500/10" },
  { icon: Layers, label: "Elementor", color: "text-rose-400 bg-rose-500/10" },
  { icon: TrendingUp, label: "Google Analytics", color: "text-amber-400 bg-amber-500/10" },
  { icon: LineChart, label: "Google Search Console", color: "text-sky-400 bg-sky-500/10" },
  { icon: Search, label: "Google Business Profile", color: "text-emerald-400 bg-emerald-500/10" },
  { icon: Mail, label: "Mailchimp", color: "text-violet-400 bg-violet-500/10" },
  { icon: Palette, label: "Canva Pro", color: "text-cyan-400 bg-cyan-500/10" },
  { icon: Users, label: "Synergy CRM", color: "text-teal-400 bg-teal-500/10" },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 bg-card/50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="h-px w-8 bg-primary/60" />
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em]">Skills & Tools</p>
          <span className="h-px w-8 bg-primary/60" />
        </div>
        <h2 className="text-4xl md:text-5xl font-heading font-bold">
          What I <span className="text-primary">Work</span> With
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Strategic skills and powerful tools I use to deliver results.
        </p>
      </div>

      <div className="grid gap-6 mx-auto items-stretch lg:[grid-template-columns:70fr_30fr]" style={{ transform: "translateX(-10px)", maxWidth: "1340px" }}>
        {/* Core Skills */}
        <div className="bg-card/80 border border-border rounded-2xl p-6 md:p-8 flex flex-col h-full">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Search className="text-primary" size={18} />
            </div>
            <div>
              <h3 className="text-xl font-heading font-semibold">Core Skills</h3>
              <p className="text-muted-foreground text-sm">Tools & technologies I work with</p>
            </div>
          </div>

          <div className="relative mt-4">
            {/* Vertical timeline line */}
            <div className="absolute left-[22px] top-4 bottom-4 w-px bg-border" />

            <div className="space-y-5">
              {coreSkills.map((s) => (
                <div
                  key={s.title}
                  className="group relative flex items-start gap-5 pl-1 hover-glow transition-all duration-300 rounded-xl p-2 -ml-2"
                >
                  {/* Icon + dot */}
                  <div className="relative shrink-0 z-10">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center shadow-lg`}>
                      <s.icon className="text-white" size={20} />
                    </div>
                    <div className={`absolute top-1/2 -right-2 w-2 h-2 rounded-full ${s.dot} ring-4 ring-card/80 transform -translate-y-1/2 translate-x-1/2`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-0.5">
                    <h4 className={`font-heading font-semibold mb-1 ${s.textColor}`} style={{ fontSize: "17px" }}>
                      {s.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed" style={{ fontSize: "14px" }}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="bg-card/80 border border-border rounded-2xl p-6 md:p-7 flex flex-col h-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Wrench className="text-primary" size={18} />
            </div>
            <h3 className="text-xl font-heading font-semibold">Tools I Use</h3>
          </div>

          <div className="space-y-2.5">
            {tools.map((t) => (
              <div
                key={t.label}
                className="group flex items-center gap-3 px-3 py-2.5 rounded-lg bg-background/60 border border-border/70 hover:border-primary/40 hover:bg-background hover:-translate-y-0.5 hover-glow transition-all cursor-default"
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${t.color}`}>
                  <t.icon size={18} />
                </div>
                <span className="text-sm font-medium flex-1">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection;
