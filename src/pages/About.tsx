import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/sections/CTASection";
import { Shield, Zap, Target, Users, Award, Globe } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Compliance First",
    description:
      "Regulatory alignment is built into everything we do, not bolted on as an afterthought.",
  },
  {
    icon: Zap,
    title: "Innovation Driven",
    description:
      "We continuously improve our technology and processes to stay ahead of industry demands.",
  },
  {
    icon: Target,
    title: "Outcome Focused",
    description:
      "Every decision is guided by the goal of achieving better outcomes for our clients.",
  },
  {
    icon: Users,
    title: "People Centred",
    description:
      "We combine technology with expert human judgment for the best possible results.",
  },
  {
    icon: Award,
    title: "Quality Obsessed",
    description:
      "Consistent, high-quality service delivery is our non-negotiable standard.",
  },
  {
    icon: Globe,
    title: "Global Standards",
    description:
      "We apply international best practices while meeting local regulatory requirements.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <span className="badge-accent mb-6 inline-block bg-accent/20 text-accent">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Redefining Complaint Handling for the{" "}
              <span className="text-gradient">Modern Enterprise</span>
            </h1>
            <p className="text-xl text-primary-foreground/70">
              InsightResolve is an Outsourcing company which was created with a
              simple belief: complaint handling should be smarter, faster, and
              fully compliant — not a stressful, inconsistent, or risky process
              for businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We saw organisations struggling with rising complaint volumes,
                  stricter regulations, and outdated systems that weren't built
                  for today's expectations. Internal teams were overwhelmed.
                  Outsourced providers lacked consistency. And generic CRMs
                  couldn't keep up with compliance demands.
                </p>
                <p className="text-foreground font-semibold text-lg">
                  So we built something different.
                </p>
                <p>
                  InsightResolve blends expert complaint handlers with
                  intelligent, compliance-aware technology to deliver outcomes
                  businesses can trust. Every case is managed with structure,
                  transparency, and regulatory precision — supported by our
                  proprietary intelligence engine that guides each step, flags
                  risks, and ensures nothing is missed.
                </p>
              </div>
            </div>
            <div className="bg-secondary/50 rounded-2xl p-8 lg:p-12">
              <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-6">
                "We don't just resolve complaints. We protect your customers,
                your reputation, and your compliance position."
              </blockquote>
              <div className="w-16 h-1 bg-accent rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <span className="badge-accent mb-4">Our Mission</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Smarter, Safer, More Consistent
            </h2>
            <p className="text-lg text-muted-foreground">
              Our mission is to redefine complaint handling for modern
              organisations — making it smarter, safer, and more consistent than
              ever before. We believe every complaint is an opportunity to
              demonstrate excellence and build trust.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-16">
            <span className="badge-accent mb-4">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What Drives Us
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="card-interactive p-8">
                <div className="feature-icon mb-6">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
