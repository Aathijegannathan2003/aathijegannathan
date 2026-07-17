import { Mail, Phone, Linkedin, MapPin, Send, ExternalLink, Download } from "lucide-react";
import { Button } from "./ui/button";
import profileImg from "@/assets/profile-nobg.png";
import resumeAsset from "@/assets/resume.pdf.asset.json";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="animate-on-scroll text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold">Let's Connect</h2>
        </div>

        <div className="max-w-5xl mx-auto rounded-2xl border border-border bg-card/40 p-6 md:p-10 backdrop-blur">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left: Info */}
            <div className="animate-on-scroll space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-medium">
                <Send size={12} /> LET'S CONNECT
              </span>
              <p className="text-[15px] text-foreground/90 leading-relaxed">
                Digital Marketing Executive specializing in SEO, Paid Ads, WordPress, and CRM. Open to full-time opportunities and professional collaborations.
              </p>
              <div className="w-16 h-1 bg-primary rounded-full" />

              <div className="space-y-3">
                <a href="mailto:aathij06@gmail.com" className="flex items-center gap-3 p-3 rounded-lg bg-background/40 border border-border hover:border-primary/50 transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm text-foreground truncate">aathij06@gmail.com</p>
                  </div>
                  <ExternalLink size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <a href="tel:9994603395" className="flex items-center gap-3 p-3 rounded-lg bg-background/40 border border-border hover:border-primary/50 transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="text-sm text-foreground">9994603395</p>
                  </div>
                  <ExternalLink size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-background/40 border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="text-sm text-foreground">Chennai, Tamil Nadu, India</p>
                  </div>
                </div>

                <a
                  href="https://www.linkedin.com/in/aathijegannathan-vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-background/40 border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Linkedin size={18} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground">LinkedIn</p>
                    <p className="text-sm text-foreground truncate">linkedin.com/in/aathijegannathan-vn</p>
                  </div>
                  <ExternalLink size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>

            {/* Right: Profile card */}
            <div className="animate-on-scroll flex flex-col items-center text-center space-y-4 p-6 rounded-xl bg-background/40 border border-border card-hover">
              <div className="w-52 h-52 rounded-full overflow-hidden border-2 border-primary/40 shadow-[0_0_60px_rgba(59,130,246,0.35)]" style={{ backgroundColor: "#1d283a" }}>
                <img
                  src={profileImg}
                  alt="Aathijegannathan VN"
                  className="w-full h-full object-cover object-top scale-[1.25] translate-y-[22px] translate-x-[1px]"
                />
              </div>

              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" /> Available for Work
              </span>

              <div>
                <h4 className="text-2xl font-heading font-bold">Aathijegannathan VN</h4>
                <p className="text-primary font-medium">Digital Marketing Executive</p>
              </div>

              <p className="text-sm text-foreground font-medium">
                SEO | Paid Ads | WordPress | CRM
              </p>

              <a href={resumeAsset.url} download="Aathi-Jegannathan-Resume.pdf" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button variant="outline" className="w-full border-primary/50 text-foreground bg-transparent hover:bg-transparent hover:text-muted-foreground">
                  <Download size={16} className="mr-2" /> Download Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
