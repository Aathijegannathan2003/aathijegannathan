import { MapPin, Clock, ArrowDown, Download } from "lucide-react";
import { Button } from "./ui/button";
import profileImg from "@/assets/profile-nobg.png";
import resumeAsset from "@/assets/resume.pdf.asset.json";

const skillBadges = [
  { label: "Search Engine Optimization", top: "2%", right: "-18%", delay: "0s" },
  { label: "Google Ads Management", top: "26%", right: "-24%", delay: "0.3s" },
  { label: "Meta Ads Management", top: "50%", right: "-28%", delay: "0.6s" },
  { label: "WordPress Development", top: "74%", right: "-22%", delay: "0.9s" },
  { label: "Responsive Design", top: "8%", left: "-20%", delay: "0.4s" },
  { label: "Landing Page Optimization", top: "38%", left: "-28%", delay: "0.7s" },
  { label: "CRM Management", top: "68%", left: "-22%", delay: "1s" },
];

// Mobile arc layout (300px - 550px), matching the reference design
const mobileBadges = [
  { label: "Search Engine Optimization", top: "4%", right: "0%", delay: "0s" },
  { label: "Google Ads Management", top: "24%", right: "-1%", delay: "0.3s" },
  { label: "Meta Ads Management", top: "46%", right: "0%", delay: "0.6s" },
  { label: "WordPress Development", top: "68%", right: "-1%", delay: "0.9s" },
  { label: "Responsive Design", top: "12%", left: "0%", delay: "0.4s" },
  { label: "Landing Page Optimization", top: "33%", left: "-1%", delay: "0.7s" },
  { label: "CRM Management", top: "58%", left: "0%", delay: "1s" },
];


const HeroSection = () => {
  return (
  <section id="home" className="min-h-[auto] lg:min-h-screen flex items-center relative overflow-hidden pt-24 pb-12 lg:pt-20 lg:pb-0 lg:-mt-[30px]">
    {/* Gradient orbs */}
    <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

    <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      <div className="space-y-4 sm:space-y-5 lg:space-y-6 animate-fade-in order-2 lg:order-1">
        <p className="text-primary font-medium tracking-wide uppercase text-sm">
          Hello, I'm
        </p>
        <h1 className="text-[30px] sm:text-4xl lg:text-6xl font-heading font-bold leading-tight break-words">
          <span className="text-gradient">Aathijegannathan V N</span>
        </h1>
        <h2 className="text-base sm:text-xl lg:text-2xl text-muted-foreground font-heading">
          SEO | Paid Ads | WordPress | CRM Executive
        </h2>
        <p className="text-muted-foreground max-w-lg leading-relaxed text-[14.5px] sm:text-[15px] lg:text-base">
          Driving organic growth through SEO strategies, managing PPC ad campaigns, building WordPress websites, and handling CRM activities.
        </p>

        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <MapPin size={16} className="text-primary" /> Chennai, India
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={16} className="text-primary" /> 1.8+ Years Experience
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
          <a href="#projects" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/80 glow-border">
              View My Work
            </Button>
          </a>
          <a href={resumeAsset.url} download="Aathi-Jegannathan-Resume.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary/50 text-foreground bg-transparent hover:bg-transparent hover:text-muted-foreground">
              <Download size={16} className="mr-2" /> Download Resume
            </Button>
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center order-1 lg:order-2" style={{ animationDelay: "0.3s" }}>
        {/* Mobile/tablet arc wrapper */}
        <div className="relative w-full max-w-[360px] xl:max-w-none xl:w-auto mx-auto flex justify-center py-6 xl:py-0">
          {/* Decorative ring (mobile) */}
          <div className="xl:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[270px] h-[270px] min-[420px]:w-[300px] min-[420px]:h-[300px] rounded-full border border-primary/15" />

          <div className="relative">
            {/* Circular border ring with glow */}
            <div className="w-[210px] h-[212px] min-[420px]:w-[250px] min-[420px]:h-[252px] sm:w-[300px] sm:h-[303px] lg:w-[410px] lg:h-[413px] rounded-full overflow-hidden border-2 border-primary/40 animate-float shadow-[0_0_80px_rgba(59,130,246,0.35),0_0_120px_rgba(59,130,246,0.15)]" style={{ backgroundColor: "#1d283a" }}>
              <img
                src={profileImg}
                alt="Aathijegannathan V N - SEO | Paid Ads | WordPress | CRM Executive"
                width={320}
                height={320}
                className="w-full h-full object-cover object-top scale-[1.25] translate-y-[22px] sm:translate-y-[30px] lg:translate-y-[43px] translate-x-[2px]"
              />
            </div>

            {/* Floating skill badges (desktop only) */}
            {skillBadges.map((badge) => (
              <span
                key={badge.label}
                className="absolute hidden xl:flex items-center px-5 py-2.5 rounded-full bg-card/80 backdrop-blur-sm border border-primary/30 text-sm font-medium text-foreground shadow-[0_4px_20px_rgba(59,130,246,0.2)] animate-float whitespace-nowrap"
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

          {/* Floating skill badges (mobile / tablet) */}
          {mobileBadges.map((badge) => (
            <span
              key={badge.label}
              className="absolute xl:hidden flex items-center px-2.5 py-1.5 rounded-md bg-card/90 backdrop-blur-sm border border-primary/25 text-[9px] min-[420px]:text-[10px] font-medium text-foreground shadow-[0_4px_14px_rgba(0,0,0,0.4)] animate-float whitespace-nowrap"
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
        </div>

        <a
          href="#about"
          className="xl:hidden mt-2 text-muted-foreground/70 animate-bounce"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={20} />
        </a>
      </div>

    </div>

    <a
      href="#about"
      className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors"
    >
      <ArrowDown size={24} />
    </a>
  </section>
  );
};


export default HeroSection;
