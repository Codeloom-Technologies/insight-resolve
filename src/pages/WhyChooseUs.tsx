import { Layout } from '@/components/layout/Layout';
import { CTASection } from '@/components/sections/CTASection';
import { 
  CheckCircle, 
  Zap, 
  Eye, 
  TrendingUp, 
  Link as LinkIcon, 
  Heart,
  Shield,
  Award
} from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Compliance Built Into Every Step',
    description: 'Unlike generic outsourcers, compliance is woven into our DNA. Every workflow, every decision, every outcome is designed with regulatory requirements at the core.',
    highlight: 'Regulatory confidence',
  },
  {
    icon: Zap,
    title: 'Faster, Smarter Resolutions',
    description: 'Our CompliFlow intelligence engine prioritises cases intelligently, guides handlers through optimal resolution paths, and eliminates bottlenecks.',
    highlight: '40% faster resolution',
  },
  {
    icon: Award,
    title: 'Consistent Quality',
    description: 'Structured workflows and quality assurance processes ensure every case meets the same high standard, regardless of volume or complexity.',
    highlight: '99.8% quality score',
  },
  {
    icon: Eye,
    title: 'Transparent Client Portal',
    description: 'Real-time visibility into every case through our secure portal. Track progress, access documents, and monitor performance metrics anytime.',
    highlight: 'Full transparency',
  },
  {
    icon: TrendingUp,
    title: 'Predictive Insights',
    description: 'Advanced analytics identify trends, predict potential issues, and provide actionable insights to prevent future complaints.',
    highlight: 'Data-driven improvement',
  },
  {
    icon: LinkIcon,
    title: 'Seamless System Integration',
    description: 'InsightResolve integrates with your existing CRM, ticketing, and business systems for unified workflows and data consistency.',
    highlight: 'No disruption',
  },
  {
    icon: Heart,
    title: 'A Partner, Not Just a Provider',
    description: "We're invested in your success. Our teams work as an extension of yours, aligned with your goals and committed to your outcomes.",
    highlight: 'True partnership',
  },
  {
    icon: CheckCircle,
    title: 'Proven Track Record',
    description: 'Trusted by organisations across financial services, insurance, energy, utilities, telecoms, and retail sectors.',
    highlight: '500+ clients served',
  },
];

export default function WhyChooseUs() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <span className="badge-accent mb-6 inline-block bg-accent/20 text-accent">Why Choose Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              The InsightResolve{' '}
              <span className="text-gradient">Difference</span>
            </h1>
            <p className="text-xl text-primary-foreground/70">
              We're not just another outsourcing company. We're a smart, compliance-driven partner 
              built to transform how you handle complaints.
            </p>
          </div>
        </div>
      </section>

      {/* Reasons Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <div key={reason.title} className="card-interactive p-8 group">
                <div className="flex items-start gap-6">
                  <div className="feature-icon flex-shrink-0 group-hover:scale-110 transition-transform">
                    <reason.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-3">
                      {reason.highlight}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{reason.title}</h3>
                    <p className="text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
