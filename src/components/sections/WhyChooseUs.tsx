import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle, 
  Zap, 
  Eye, 
  TrendingUp, 
  Link as LinkIcon, 
  Heart,
  ArrowRight
} from 'lucide-react';

const reasons = [
  {
    icon: CheckCircle,
    title: 'Compliance Built In',
    description: 'Every workflow, every step, every outcome designed with regulatory requirements at the core.',
  },
  {
    icon: Zap,
    title: 'Faster Resolutions',
    description: 'Intelligent prioritisation and structured workflows reduce resolution times significantly.',
  },
  {
    icon: Eye,
    title: 'Full Transparency',
    description: 'Real-time visibility into every case through our secure client portal.',
  },
  {
    icon: TrendingUp,
    title: 'Predictive Insights',
    description: 'Identify trends and potential issues before they escalate into larger problems.',
  },
  {
    icon: LinkIcon,
    title: 'Seamless Integration',
    description: 'Works with your existing systems — no disruption, just enhancement.',
  },
  {
    icon: Heart,
    title: 'True Partnership',
    description: "We're not just a provider. We're an extension of your team, committed to your success.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="badge-accent mb-4">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              A Partner, Not Just a Provider
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              InsightResolve goes beyond traditional outsourcing. We combine expert complaint handlers 
              with intelligent technology to deliver consistent, compliant outcomes you can trust.
            </p>
            <Button variant="accent" size="lg" asChild>
              <Link to="/why-choose-us">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Right - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="bg-card rounded-xl p-6 border border-border/50 hover:border-accent/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <reason.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
