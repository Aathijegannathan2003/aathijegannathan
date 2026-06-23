import { Briefcase, GraduationCap, Calendar, CheckCircle2 } from "lucide-react";

type Experience = {
  role: string;
  company: string;
  duration: string;
  type: "Full-time" | "Internship";
  description: string;
  responsibilities: string[];
  icon: "briefcase" | "grad";
  accent: "primary" | "success";
};

const experiences: Experience[] = [
  {
    role: "Digital Marketing Executive",
    company: "Labmate (Asia) Pvt Ltd",
    duration: "Jan 2026 – Present",
    type: "Full-time",
    icon: "briefcase",
    accent: "primary",
    description:
      "Leading digital marketing initiatives to improve online visibility, generate quality leads, and drive business growth.",
    responsibilities: [
      "Built a WordPress website from scratch to SEO optimization",
      "Created SEO-friendly content and handled on-page optimization",
      "Managed Google Ads and Meta Ads campaigns",
      "Handled email marketing using Mailchimp",
      "Managed CRM activities and updated data regularly",
      "Analyzed performance using GA4, Search Console & reports",
    ],
  },
  {
    role: "SEO Analyst (Internship)",
    company: "FITA Academy",
    duration: "Sep 2024 – Dec 2025",
    type: "Internship",
    icon: "grad",
    accent: "success",
    description:
      "Learned and implemented SEO strategies to improve organic visibility, optimized website content using WordPress, and supported Google Search Ads campaigns.",
    responsibilities: [
      "Managed 10+ course web pages with SEO best practices",
      "Performed on-page SEO (meta titles, descriptions & alt tags)",
      "Optimized blog content to improve organic visibility",
      "Conducted keyword research using Google Keyword Planner",
      "Analyzed website performance & SEO insights using Ubersuggest",
      "Reviewed and updated web pages using WordPress",
      "Created and optimized Google Search Ads campaigns & ad copies",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-24">
    <div className="container mx-auto px-4">
      <div className="animate-on-scroll text-center mb-12">
        <p className="text-primary text-sm font-medium uppercase tracking-wide mb-2">Experience</p>
        <h2 className="text-4xl md:text-5xl font-heading font-bold">Where I've Worked</h2>
      </div>

      <div className="relative max-w-[1400px] mx-auto">
        <div className="absolute left-6 top-2 bottom-2 w-px bg-border hidden md:block" aria-hidden />

        <div className="space-y-8">
          {experiences.map((exp, i) => {
            const Icon = exp.icon === "briefcase" ? Briefcase : GraduationCap;
            const isSuccess = exp.accent === "success";
            const accentText = isSuccess ? "text-success" : "text-primary";
            const accentBg = isSuccess ? "bg-success/10" : "bg-primary/10";
            const badgeBg = isSuccess ? "bg-success/15 text-success" : "bg-primary/15 text-primary";
            const dotBg = isSuccess ? "text-success" : "text-primary";

            return (
              <div
                key={exp.company}
                className="animate-on-scroll visible relative md:pl-20"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <div
                  className={`hidden md:flex absolute left-0 top-6 w-12 h-12 rounded-full ${accentBg} border border-border items-center justify-center`}
                >
                  <Icon className={accentText} size={20} />
                </div>

                <div className="bg-card border border-border rounded-xl p-6 md:p-8 card-hover">
                  <div className="grid md:grid-cols-2 gap-6 md:gap-10">
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="font-heading font-bold text-xl md:text-2xl">{exp.role}</h3>
                        <span className={`md:hidden text-xs font-medium px-3 py-1 rounded-full ${badgeBg}`}>
                          {exp.type}
                        </span>
                      </div>
                      <p className={`${accentText} font-medium mb-2`}>{exp.company}</p>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                        <Calendar size={14} className={accentText} />
                        <span>{exp.duration}</span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                    </div>

                    <div className="relative">
                      <span
                        className={`hidden md:inline-block absolute right-0 -top-2 text-xs font-medium px-3 py-1 rounded-full ${badgeBg}`}
                      >
                        {exp.type}
                      </span>
                      <p className={`text-xs font-semibold uppercase tracking-wider mb-4 ${accentText}`}>
                        Key Responsibilities
                      </p>
                      <ul className="space-y-2.5">
                        {exp.responsibilities.map((r) => (
                          <li key={r} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                            <CheckCircle2 size={16} className={`${dotBg} mt-0.5 shrink-0`} />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
