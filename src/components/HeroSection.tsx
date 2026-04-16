import { MapPin, Clock, ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import profileImg from "@/assets/profile-nobg.png";

const skillBadges = [
  { label: "SEO Strategy Optimization", top: "8%", right: "-18%", delay: "0s" },
  { label: "Google Ads Management", top: "28%", right: "-22%", delay: "0.3s" },
  { label: "Meta Ads Campaign Management", top: "48%", right: "-26%", delay: "0.6s" },
  { label: "WordPress Website Development", top: "68%", right: "-20%", delay: "0.9s" },
  { label: "Responsive Web Design", top: "12%", left: "-24%", delay: "0.4s" },
  { label: "Landing Page Optimization", top: "40%", left: "-20%", delay: "0.7s" },
  { label: "Customer Relationship Management", top: "68%", left: "-26%", delay: "1s" },
];

const HeroSection = () => (
  <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
    {/* Gradient orbs */}
    <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6 animate-fade-in">
        <p className="text-primary font-medium tracking-wide uppercase text-sm">
          Hello, I'm
        </p>
        <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
          Aathijegannathan{" "}
          <span className="text-gradient">V N</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-muted-foreground font-heading">
          Digital Marketing Executive
        </h2>
        <p className="text-muted-foreground max-w-lg leading-relaxed">
          Driving organic growth with SEO strategies, building high-performing WordPress websites, and generating quality leads through paid campaigns.
        </p>

        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <MapPin size={16} className="text-primary" /> Chennai, India
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={16} className="text-primary" /> 1.6+ Years Experience
          </span>
        </div>

        <div className="flex gap-4 pt-2">
          <a href="#projects">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/80 glow-border">
              View My Work
            </Button>
          </a>
          <a href="#contact">
            <Button size="lg" variant="outline" className="border-primary/50 text-foreground hover:bg-primary/10">
              Contact Me
            </Button>
          </a>
        </div>
      </div>

      <div className="flex justify-center" style={{ animationDelay: "0.3s" }}>
        <div className="relative">
          {/* Circular border ring with glow */}
          <div className="w-[290px] h-[290px] md:w-[410px] md:h-[410px] rounded-full overflow-hidden border-2 border-primary/40 animate-float shadow-[0_0_80px_rgba(59,130,246,0.35),0_0_120px_rgba(59,130,246,0.15)]">
            <img
              src={profileImg}
              alt="Aathijegannathan V N - Digital Marketing Executive"
              width={512}
              height={512}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating skill badges */}
          {skillBadges.map((badge) => (
            <span
              key={badge.label}
              className="absolute hidden md:flex items-center px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-primary/30 text-xs font-medium text-foreground shadow-[0_4px_20px_rgba(59,130,246,0.2)] animate-float whitespace-nowrap"
              style={{
                top: badge.top,
                left: badge.left,
                right: badge.right,
                animationDelay: badge.delay,
              }}
            >
              {badge.label}
            </span>
          ))}

          <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-primary/20 rounded-full blur-xl" />
        </div>
      </div>
    </div>

    <a
      href="#about"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors"
    >
      <ArrowDown size={24} />
    </a>
  </section>
);

export default HeroSection;
