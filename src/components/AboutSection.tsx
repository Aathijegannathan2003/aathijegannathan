import { Search, Globe, Megaphone } from "lucide-react";

const highlights = [
  { icon: Search, title: "SEO Expert", desc: "Improve search rankings & organic traffic" },
  { icon: Globe, title: "WordPress Dev", desc: "High-performing websites with clean design" },
  { icon: Megaphone, title: "Paid Ads", desc: "Quality lead generation via Meta & Google Ads" },
];

const AboutSection = () => (
  <section id="about" className="py-24">
    <div className="container mx-auto px-4">
      <div className="animate-on-scroll text-center mb-12">
        <p className="text-primary text-sm font-medium uppercase tracking-wide mb-2">About Me</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold">Who I Am</h2>
      </div>

      <div className="animate-on-scroll max-w-3xl mx-auto text-center mb-16">
        <p className="text-muted-foreground leading-relaxed text-lg">
          I specialize in SEO strategies that improve search rankings and drive organic traffic. I also build high-performing WordPress websites with clean design and smooth user experience. I create and manage Meta ad campaigns that generate quality leads and support business growth.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {highlights.map((h, i) => (
          <div
            key={h.title}
            className="animate-on-scroll bg-card border border-border rounded-lg p-6 text-center card-hover"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
              <h.icon className="text-primary" size={28} />
            </div>
            <h3 className="font-heading font-semibold text-lg mb-2">{h.title}</h3>
            <p className="text-muted-foreground text-sm">{h.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
