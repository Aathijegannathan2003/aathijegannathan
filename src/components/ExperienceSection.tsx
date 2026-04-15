import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "SEO Analyst",
    company: "FITA Academy",
    duration: "1.3 Years",
    points: [
      "Managed 10+ webpages",
      "Performed on-page SEO and backlink building",
      "Conducted keyword research",
      "Used Ubersuggest for analysis",
      "Performed website audits",
    ],
  },
  {
    role: "Digital Marketing Executive",
    company: "Labmate Asia Pvt Ltd",
    duration: "3 Months",
    points: [
      "Built a WordPress website from scratch to SEO optimization",
      "Managed LinkedIn page",
      "Handled email marketing using Mailchimp",
      "Designed creatives using Canva",
      "Managed CRM-related activities",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-24">
    <div className="container mx-auto px-4">
      <div className="animate-on-scroll text-center mb-12">
        <p className="text-primary text-sm font-medium uppercase tracking-wide mb-2">Experience</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold">Where I've Worked</h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-8">
        {experiences.map((exp, i) => (
          <div
            key={exp.company}
            className="animate-on-scroll bg-card border border-border rounded-lg p-6 card-hover relative"
            style={{ transitionDelay: `${i * 0.15}s` }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Briefcase className="text-primary" size={22} />
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-semibold text-lg">{exp.role}</h3>
                <p className="text-primary text-sm">{exp.company}</p>
                <span className="text-muted-foreground text-xs">{exp.duration}</span>
                <ul className="mt-4 space-y-2">
                  {exp.points.map((p) => (
                    <li key={p} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
