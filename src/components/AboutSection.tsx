import { GraduationCap, MapPin } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-24">
    <div className="container mx-auto px-4">
      <div className="animate-on-scroll text-center mb-12">
        <p className="text-primary text-sm font-medium uppercase tracking-wide mb-2">About Me</p>
        <h2 className="text-4xl md:text-5xl font-heading font-bold">Who I Am</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
        <div className="animate-on-scroll space-y-4">
          <p className="text-muted-foreground leading-relaxed text-lg">
            I'm a results-driven Digital Marketing Executive based in Chennai, specializing in SEO and performance marketing. I focus on improving online visibility and driving targeted traffic to support business growth.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            I have hands-on experience in SEO, along with Google Ads and Meta Ads, creating and managing campaigns that generate quality leads and deliver measurable ROI. I also build responsive WordPress websites with clean design and smooth user experience.
          </p>
        </div>

        <div className="space-y-5">
          <div className="animate-on-scroll bg-card border border-border rounded-lg p-6 card-hover">
            <div className="flex items-center gap-2 mb-3">
              <GraduationCap className="text-primary" size={22} />
              <h3 className="font-heading font-semibold text-lg">Education</h3>
            </div>
            <p className="text-foreground font-medium">Bachelor of Commerce (Corporate Secretaryship)</p>
            <p className="text-muted-foreground text-sm mt-1">Government Arts College, Paramakudi</p>
            <p className="text-muted-foreground text-sm">2020 – 2023</p>
          </div>

          <div className="animate-on-scroll bg-card border border-border rounded-lg p-6 card-hover" style={{ transitionDelay: "0.1s" }}>
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="text-primary" size={22} />
              <h3 className="font-heading font-semibold text-lg">Location</h3>
            </div>
            <p className="text-foreground font-medium">Chennai, India</p>
            <p className="text-muted-foreground text-sm mt-1">Available for remote work</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
