import {
  Search, Link, Settings, FileText, PenTool, Globe,
  Target, BarChart3, Linkedin, Palette,
  TrendingUp, LineChart, BarChart, Mail
} from "lucide-react";

const skills = [
  { icon: Search, label: "On-page SEO" },
  { icon: Link, label: "Off-page SEO" },
  { icon: Settings, label: "Technical SEO" },
  { icon: FileText, label: "Keyword Research" },
  { icon: PenTool, label: "Blog Optimization" },
  { icon: Globe, label: "WordPress Creation" },
  { icon: Target, label: "Meta Ads" },
  { icon: BarChart3, label: "Google Ads" },
  { icon: Linkedin, label: "LinkedIn Mgmt" },
  { icon: Palette, label: "Canva Design" },
];

const tools = [
  { icon: TrendingUp, label: "Ubersuggest" },
  { icon: LineChart, label: "Search Console" },
  { icon: BarChart, label: "Google Analytics" },
  { icon: Palette, label: "Canva" },
  { icon: Target, label: "Meta Ads Manager" },
  { icon: Mail, label: "Mailchimp" },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 bg-card/50">
    <div className="container mx-auto px-4">
      <div className="animate-on-scroll text-center mb-12">
        <p className="text-primary text-sm font-medium uppercase tracking-wide mb-2">Skills & Tools</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold">What I Work With</h2>
      </div>

      <div className="mb-14">
        <h3 className="animate-on-scroll text-xl font-heading font-semibold mb-6 text-center">Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {skills.map((s, i) => (
            <div
              key={s.label}
              className="animate-on-scroll bg-card border border-border rounded-lg p-4 flex flex-col items-center gap-3 card-hover"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <s.icon className="text-primary" size={24} />
              <span className="text-sm text-center">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="animate-on-scroll text-xl font-heading font-semibold mb-6 text-center">Tools</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {tools.map((t, i) => (
            <div
              key={t.label}
              className="animate-on-scroll bg-card border border-border rounded-lg p-4 flex flex-col items-center gap-3 card-hover"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <t.icon className="text-primary" size={24} />
              <span className="text-sm text-center">{t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection;
