import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, CheckCircle } from "lucide-react";
import heroBackground from "@/assets/hero-agents.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container-wide relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-8 animate-fade-in-up">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">
              UK's First Smart Compliance Solution
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up animation-delay-100">
            Smart. <span className="text-gradient">Compliance.</span>{" "}
            Consistent.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            We resolve issues before they become a problem. InsightResolve is
            the UK's first smart, compliance-driven complaint handling service —
            powered by our proprietary CompliFlow intelligence engine.
          </p>

          {/* Trust Points */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 animate-fade-in-up animation-delay-300">
            {[
              "Ombudsman Compliant",
              "Real-time Risk Detection",
              "Data-Insight Reporting",
            ].map((point) => (
              <div
                key={point}
                className="flex items-center gap-2 text-primary-foreground/80"
              >
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">{point}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact?demo=true">
                Book a Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">Speak to an Expert</Link>
            </Button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up animation-delay-500">
          {[
            { value: "80%", label: "Compliance Rate" },
            { value: "48hrs", label: "Avg. Resolution Time" },
            { value: "5+", label: "Clients Served" },
            { value: "20+", label: "Risk Prevented" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-primary-foreground/60">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-accent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
