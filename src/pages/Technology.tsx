import { Layout } from '@/components/layout/Layout';
import { CTASection } from '@/components/sections/CTASection';
import { 
  Brain, 
  AlertTriangle, 
  Clock, 
  Workflow, 
  Scale, 
  FileCheck,
  BarChart,
  Cpu,
  Lock,
  Zap,
  Shield
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Real-Time Compliance Logic',
    description: 'Built-in regulatory rules engine that guides every case through compliant pathways, automatically flagging deviations.',
  },
  {
    icon: AlertTriangle,
    title: 'Risk Detection',
    description: 'AI-powered risk scoring identifies potential escalations, vulnerable customers, and compliance risks in real-time.',
  },
  {
    icon: Clock,
    title: 'SLA Tracking',
    description: 'Automated monitoring of regulatory and internal SLAs with proactive alerts before deadlines are missed.',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Intelligent routing, automatic task assignment, and structured workflows that eliminate manual inefficiency.',
  },
  {
    icon: Scale,
    title: 'Regulatory Alignment',
    description: 'Pre-configured for FCA, Ofgem, Ofcom, and other UK regulatory requirements. Always up-to-date with the latest rules.',
  },
  {
    icon: FileCheck,
    title: 'Audit-Ready Management',
    description: 'Complete audit trails, document management, and evidence collection for regulatory examinations.',
  },
  {
    icon: BarChart,
    title: 'Predictive Analytics',
    description: 'Advanced analytics that identify trends, predict potential issues, and provide actionable insights for improvement.',
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'Bank-grade security with encryption, access controls, and compliance with ISO 27001 and GDPR requirements.',
  },
];

const stats = [
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '<200ms', label: 'Response Time' },
  { value: '256-bit', label: 'Encryption' },
  { value: 'ISO 27001', label: 'Certified' },
];

export default function Technology() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-success rounded-full blur-3xl" />
        </div>
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-6">
                <Cpu className="w-4 h-4" />
                <span className="text-sm font-medium">Powered by Intelligence</span>
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                CompliFlow{' '}
                <span className="text-gradient">Intelligence Engine</span>
              </h1>
              <p className="text-xl text-primary-foreground/70">
                Our proprietary technology platform is the brain behind InsightResolve. 
                It guides every case with compliance-aware logic, flags risks in real-time, 
                and ensures nothing is missed.
              </p>
            </div>

            {/* Tech Visual */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto relative">
                {/* Central Core */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 rounded-3xl bg-accent/20 backdrop-blur-sm flex items-center justify-center animate-pulse-glow border border-accent/30">
                    <Brain className="w-16 h-16 text-accent" />
                  </div>
                </div>

                {/* Orbiting Elements */}
                {[Zap, Shield, BarChart, Lock].map((Icon, index) => {
                  const angle = (index * 90) - 45;
                  const radius = 40;
                  const x = 50 + radius * Math.cos(angle * (Math.PI / 180));
                  const y = 50 + radius * Math.sin(angle * (Math.PI / 180));

                  return (
                    <div
                      key={index}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2"
                      style={{ left: `${x}%`, top: `${y}%` }}
                    >
                      <div className="w-16 h-16 rounded-2xl bg-card/90 backdrop-blur-sm flex items-center justify-center text-accent shadow-lg border border-border/50 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                        <Icon className="w-7 h-7" />
                      </div>
                    </div>
                  );
                })}

                {/* Connection Ring */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="hsl(var(--accent))"
                    strokeWidth="0.5"
                    strokeDasharray="6 4"
                    opacity="0.4"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-card border-y border-border/50">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Intelligence at Every Step
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              CompliFlow combines advanced technology with deep regulatory expertise 
              to deliver smarter, faster, compliant outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="card-interactive p-6 group">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
