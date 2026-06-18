import { GraduationCap, MapPin, Briefcase, Search, BarChart3, Globe } from "lucide-react";

const highlights = [
  {
    icon: Search,
    title: "SEO & Performance Marketing",
    desc: "Implementing SEO strategies to improve rankings, organic traffic, and overall online visibility.",
  },
  {
    icon: BarChart3,
    title: "Google Ads & Meta Ads Campaigns",
    desc: "Creating and managing data-driven ad campaigns that generate quality leads and maximize ROI.",
  },
  {
    icon: Globe,
    title: "WordPress Website Development",
    desc: "Building responsive WordPress websites with clean design, fast performance, and smooth user experience.",
  },
];

const AboutSection = () => (
  <section id="about" className="py-24">
    <div className="container mx-auto px-4">
      <div className="animate-on-scroll text-center mb-12">
        <p className="text-primary text-sm font-medium uppercase tracking-wide mb-2">About Me</p>
        <h2 className="text-4xl md:text-5xl font-heading font-bold">Who Am I</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
        <div className="animate-on-scroll flex flex-col justify-between h-full gap-6">
          <p className="text-muted-foreground leading-relaxed text-lg">
            I am a results-driven <span className="text-primary font-medium">Digital Marketing Specialist</span> based in Chennai, specializing in SEO and performance marketing. I focus on improving online visibility and driving targeted traffic to generate leads and support business growth.
          </p>

          <div className="flex flex-col justify-between flex-1 gap-6">
            {highlights.map((h) => (
              <div key={h.title} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <h.icon className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground text-[17.5px]">{h.title}</h4>
                  <p className="text-muted-foreground text-[15.5px] leading-relaxed mt-1">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div className="animate-on-scroll bg-card border border-border rounded-lg p-6 card-hover">
            <div className="flex items-center gap-2 mb-3">
              <GraduationCap className="text-primary" size={22} />
              <h3 className="font-heading font-semibold text-lg">Education</h3>
            </div>
            <p className="text-foreground font-medium">Bachelor of Commerce (Corporate Secretaryship)</p>
            <p className="text-muted-foreground text-sm mt-1">Government Arts College, Paramakudi</p>
            <p className="text-primary text-sm">2020 – 2023</p>
          </div>

          <div className="animate-on-scroll bg-card border border-border rounded-lg p-6 card-hover" style={{ transitionDelay: "0.1s" }}>
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="text-primary" size={22} />
              <h3 className="font-heading font-semibold text-lg">Location</h3>
            </div>
            <p className="text-foreground font-medium">Chennai, India</p>
            <p className="text-primary text-sm mt-1">Available for remote work</p>
          </div>

          <div className="animate-on-scroll bg-card border border-border rounded-lg p-6 card-hover" style={{ transitionDelay: "0.2s" }}>
            <div className="flex items-center gap-2 mb-3">
              <Briefcase className="text-primary" size={22} />
              <h3 className="font-heading font-semibold text-lg">Experience</h3>
            </div>
            <p className="text-foreground font-medium">1.8+ Years Experience</p>
            <p className="text-primary text-sm mt-1">SEO | Paid Ads | WordPress | CRM</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
