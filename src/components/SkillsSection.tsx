import {
  Search, Globe, Target, BarChart3, Users, Palette,
  LineChart, TrendingUp, Mail, Megaphone, BarChart, Wrench,
  ChevronRight,
} from "lucide-react";

const coreSkills = [
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    points: [
      "On-page SEO optimization",
      "Off-page link building",
      "Technical and local SEO",
    ],
    color: "from-blue-500 to-blue-600",
    bar: "bg-blue-500",
  },
  {
    icon: Globe,
    title: "WordPress Development",
    points: [
      "Landing page optimization",
      "Plugin setup & configuration",
      "Elementor customization",
    ],
    color: "from-purple-500 to-purple-600",
    bar: "bg-purple-500",
  },
  {
    icon: Target,
    title: "Meta Ads Manager",
    points: [
      "Campaign setup & structure",
      "Ad management & scaling",
      "Lead generation strategy",
    ],
    color: "from-emerald-500 to-emerald-600",
    bar: "bg-emerald-500",
  },
  {
    icon: BarChart3,
    title: "Google Ads",
    points: [
      "Search campaign setup",
      "Campaign optimization",
      "Keyword targeting strategy",
    ],
    color: "from-orange-500 to-amber-500",
    bar: "bg-orange-500",
  },
  {
    icon: Users,
    title: "CRM Management",
    points: [
      "Customer data handling",
      "Regular data updates",
      "Track leads efficiently",
    ],
    color: "from-cyan-500 to-teal-500",
    bar: "bg-cyan-500",
  },
  {
    icon: Palette,
    title: "Canva",
    points: [
      "Social media creatives",
      "Marketing design assets",
      "Brochure design",
    ],
    color: "from-pink-500 to-rose-500",
    bar: "bg-pink-500",
  },
];

const tools = [
  { icon: BarChart3, label: "Google Ads", color: "text-orange-400 bg-orange-500/10" },
  { icon: Megaphone, label: "Meta Ads Manager", color: "text-blue-400 bg-blue-500/10" },
  { icon: BarChart, label: "Google Analytics", color: "text-amber-400 bg-amber-500/10" },
  { icon: LineChart, label: "Google Search Console", color: "text-sky-400 bg-sky-500/10" },
  { icon: TrendingUp, label: "Ubersuggest", color: "text-violet-400 bg-violet-500/10" },
  { icon: Palette, label: "Canva", color: "text-cyan-400 bg-cyan-500/10" },
  { icon: Users, label: "Synergy CRM", color: "text-teal-400 bg-teal-500/10" },
  { icon: Mail, label: "Mailchimp", color: "text-yellow-400 bg-yellow-500/10" },
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

      <div className="grid gap-6 max-w-6xl mx-auto items-stretch lg:[grid-template-columns:67fr_33fr]">
        {/* Core Skills */}
        <div className="bg-card/80 border border-border rounded-2xl p-6 md:p-7 flex flex-col h-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Search className="text-primary" size={18} />
            </div>
            <h3 className="text-xl font-heading font-semibold">Core Skills</h3>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 flex-1 auto-rows-fr">
            {coreSkills.map((s) => (
              <div
                key={s.title}
                className="group relative bg-background/60 border border-border/70 rounded-xl p-4 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-3 shadow-lg`}>
                  <s.icon className="text-white" size={22} />
                </div>
                <h4 className="font-heading font-semibold text-foreground text-base mb-2 leading-snug">{s.title}</h4>
                <ul className="space-y-1.5 mb-3 flex-1">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-muted-foreground text-xs leading-relaxed">
                      <span className={`mt-1.5 w-1 h-1 rounded-full ${s.bar} shrink-0`} />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className={`h-[3px] w-10 rounded-full ${s.bar} group-hover:w-full transition-all duration-500 mt-auto`} />
              </div>
            ))}
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
                className="group flex items-center gap-3 px-3 py-2.5 rounded-lg bg-background/60 border border-border/70 hover:border-primary/40 hover:bg-background transition-all cursor-default"
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${t.color}`}>
                  <t.icon size={18} />
                </div>
                <span className="text-sm font-medium flex-1">{t.label}</span>
                <ChevronRight
                  className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all"
                  size={16}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection;
