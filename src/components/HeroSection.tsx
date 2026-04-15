import { MapPin, Clock, ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import profileImg from "@/assets/profile-placeholder.jpg";

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
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/30 glow-border animate-float">
            <img
              src={profileImg}
              alt="Aathijegannathan V N - Digital Marketing Executive"
              width={512}
              height={512}
              className="w-full h-full object-cover"
            />
          </div>
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
