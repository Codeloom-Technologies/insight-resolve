import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { CTASection } from '@/components/sections/CTASection';
import { 
  Zap, 
  Shield, 
  AlertTriangle, 
  Eye, 
  BarChart3, 
  Workflow,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const solutions = [
  {
    icon: Zap,
    title: 'Fast, Consistent Resolution',
    description: 'Intelligent workflows prioritise and route cases efficiently. Structured processes ensure every case follows best practice.',
  },
  {
    icon: Shield,
    title: 'Compliance-Driven Handling',
    description: 'Every step aligned with regulatory requirements. Built-in guidance ensures handlers never miss critical compliance points.',
  },
  {
    icon: AlertTriangle,
    title: 'Real-Time Risk Flagging',
    description: 'Our CompliFlow engine identifies potential risks, escalations, and compliance issues before they become problems.',
  },
  {
    icon: Eye,
    title: 'Full Client Visibility',
    description: 'Track every case in real-time through our secure portal. No surprises, complete transparency, always in control.',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Insights',
    description: 'Advanced analytics reveal trends, root causes, and opportunities. Turn complaint data into strategic advantage.',
  },
  {
    icon: Workflow,
    title: 'Seamless Integration',
    description: 'Works with your existing systems. No disruption to your operations, just enhanced capability and visibility.',
  },
];

const outcomes = [
  '40% faster resolution times',
  '80% compliance rate',
  'Zero regulatory breaches',
  'Real-time case visibility',
  'Actionable insights',
  'Reduced escalations',
];

export default function OurSolution() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-success rounded-full blur-3xl" />
        </div>
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <span className="badge-accent mb-6 inline-block bg-accent/20 text-accent">Our Solution</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Smart, Compliant,{' '}
              <span className="text-gradient">Consistent</span>
            </h1>
            <p className="text-xl text-primary-foreground/70 mb-8">
              Fast, consistent, compliance-driven complaint handling powered by intelligent 
              workflows, real-time risk flagging, structured case guidance, client visibility, 
              and data-driven insights.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact?demo=true">
                See It In Action
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              How InsightResolve Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our integrated approach combines expert complaint handlers with intelligent 
              technology for outcomes you can trust.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <div key={solution.title} className="card-interactive p-8 group">
                <div className="feature-icon mb-6 group-hover:scale-110 transition-transform">
                  <solution.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{solution.title}</h3>
                <p className="text-muted-foreground">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="badge-accent mb-4">Proven Results</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Outcomes You Can Measure
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our clients see tangible improvements in resolution times, compliance scores, 
                and customer satisfaction. The numbers speak for themselves.
              </p>
              <Button variant="accent" size="lg" asChild>
                <Link to="/contact">
                  Talk to Our Team
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {outcomes.map((outcome) => (
                <div key={outcome} className="bg-card rounded-xl p-6 border border-border/50 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
