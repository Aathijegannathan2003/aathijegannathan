import { MapPin, Clock, ArrowDown, Download } from "lucide-react";
import { Button } from "./ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import profileImg from "@/assets/profile-nobg.png";
import resumeAsset from "@/assets/resume.pdf.asset.json";

const skillBadges = [
  { label: "Search Engine Optimization", topMobile: "0%", rightMobile: "-8%", top: "2%", right: "-18%", delay: "0s" },
  { label: "Google Ads Management", topMobile: "20%", rightMobile: "-10%", top: "26%", right: "-24%", delay: "0.3s" },
  { label: "Meta Ads Management", topMobile: "44%", rightMobile: "-12%", top: "50%", right: "-28%", delay: "0.6s" },
  { label: "WordPress Development", topMobile: "70%", rightMobile: "-8%", top: "74%", right: "-22%", delay: "0.9s" },
  { label: "Responsive Design", topMobile: "8%", leftMobile: "-12%", top: "8%", left: "-20%", delay: "0.4s" },
  { label: "Landing Page Optimization", topMobile: "32%", leftMobile: "-10%", top: "38%", left: "-28%", delay: "0.7s" },
  { label: "CRM Management", topMobile: "60%", leftMobile: "-12%", top: "68%", left: "-22%", delay: "1s" },
];

const HeroSection = () => {
  const isMobile = useIsMobile();
  return (
  <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20 -mt-[30px]">
    {/* Gradient orbs */}
    <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6 animate-fade-in">
        <p className="text-primary font-medium tracking-wide uppercase text-sm">
          Hello, I'm
        </p>
        <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
          <span className="text-gradient">Aathijegannathan V N</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-muted-foreground font-heading">
          SEO | Paid Ads | WordPress | CRM Executive
        </h2>
        <p className="text-muted-foreground max-w-lg leading-relaxed">
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

        <div className="flex gap-4 pt-2">
          <a href="#projects">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/80 glow-border">
              View My Work
            </Button>
          </a>
          <a href={resumeAsset.url} download="Aathi-Jegannathan-Resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-primary/50 text-foreground bg-transparent hover:bg-transparent hover:text-muted-foreground">
              <Download size={16} className="mr-2" /> Download Resume
            </Button>
          </a>
        </div>
      </div>

      <div className="flex justify-center" style={{ animationDelay: "0.3s" }}>
        <div className="relative">
          {/* Circular border ring with glow */}
          <div className="w-[290px] h-[293px] md:w-[410px] md:h-[413px] rounded-full overflow-hidden border-2 border-primary/40 animate-float shadow-[0_0_80px_rgba(59,130,246,0.35),0_0_120px_rgba(59,130,246,0.15)]" style={{ backgroundColor: "#1d283a" }}>
            <img
              src={profileImg}
              alt="Aathijegannathan V N - SEO | Paid Ads | WordPress | CRM Executive"
              width={320}
              height={320}
              className="w-full h-full object-cover object-top scale-[1.25] translate-y-[28px] translate-x-[4px]"
            />
          </div>

          {/* Floating skill badges */}
          {skillBadges.map((badge) => (
            <span
              key={badge.label}
              className="absolute flex items-center px-3 py-1.5 md:px-5 md:py-2.5 rounded-full bg-card/80 backdrop-blur-sm border border-primary/30 text-[8px] md:text-sm font-medium text-foreground shadow-[0_4px_20px_rgba(59,130,246,0.2)] animate-float whitespace-nowrap"
              style={{
                top: isMobile ? badge.topMobile : badge.top,
                left: isMobile ? badge.leftMobile : badge.left,
                right: isMobile ? badge.rightMobile : badge.right,
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
};

export default HeroSection;
