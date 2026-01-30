import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Brain, 
  AlertTriangle, 
  Clock, 
  Workflow, 
  Scale, 
  FileCheck,
  BarChart,
  ArrowRight
} from 'lucide-react';

const features = [
  { icon: Brain, label: 'Real-time Compliance Logic' },
  { icon: AlertTriangle, label: 'Risk Detection' },
  { icon: Clock, label: 'SLA Tracking' },
  { icon: Workflow, label: 'Workflow Automation' },
  { icon: Scale, label: 'Regulatory Alignment' },
  { icon: FileCheck, label: 'Audit-Ready Management' },
  { icon: BarChart, label: 'Predictive Analytics' },
];

export function TechnologySection() {
  return (
    <section className="section-padding hero-gradient overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-success rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-6">
              <Brain className="w-4 h-4" />
              <span className="text-sm font-medium">Powered by Intelligence</span>
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              CompliFlow{' '}
              <span className="text-gradient">Intelligence Engine</span>
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-8">
              Our proprietary technology platform guides every case with compliance-aware logic, 
              flags risks in real-time, and ensures nothing is missed. It's the intelligence 
              behind our consistent, compliant outcomes.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/technology">
                Explore Our Technology
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Right - Feature Display */}
          <div className="relative">
            {/* Central Circle */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Center Logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-2xl bg-accent/20 backdrop-blur-sm flex items-center justify-center animate-pulse-glow">
                  <span className="text-4xl font-bold text-accent">CF</span>
                </div>
              </div>

              {/* Orbiting Features */}
              {features.map((feature, index) => {
                const angle = (index * 360) / features.length;
                const radius = 45;
                const x = 50 + radius * Math.cos((angle - 90) * (Math.PI / 180));
                const y = 50 + radius * Math.sin((angle - 90) * (Math.PI / 180));

                return (
                  <div
                    key={feature.label}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-card/90 backdrop-blur-sm flex items-center justify-center text-accent shadow-lg border border-border/50 group-hover:scale-110 transition-transform cursor-default">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs text-primary-foreground/80 bg-primary/80 px-2 py-1 rounded">
                        {feature.label}
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="hsl(var(--accent))"
                  strokeWidth="0.5"
                  strokeDasharray="4 4"
                  opacity="0.3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
