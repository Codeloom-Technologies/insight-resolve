import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Building2, 
  Shield, 
  Flame, 
  Droplets, 
  Smartphone, 
  ShoppingBag,
  Rocket,
  AlertTriangle,
  ArrowRight
} from 'lucide-react';

const industries = [
  { icon: Rocket, name: 'Startups & SMEs', description: 'Scale with confidence' },
  { icon: Building2, name: 'Financial Services', description: 'FCA compliant handling' },
  { icon: Shield, name: 'Insurance', description: 'Claims & complaints' },
  { icon: Flame, name: 'Energy', description: 'Ofgem aligned' },
  { icon: Droplets, name: 'Utilities', description: 'Water & waste services' },
  { icon: Smartphone, name: 'Telecoms', description: 'Ofcom compliant' },
  { icon: ShoppingBag, name: 'Retail/Services', description: 'Consumer protection' },
  { icon: AlertTriangle, name: 'High-Risk Sectors', description: 'Specialist support' },
];

export function IndustriesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="badge-accent mb-4">Industries We Serve</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Expertise Across Regulated Sectors
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From startups to established enterprises, we provide compliant and call handling 
            tailored to your industry's unique regulatory requirements.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="group bg-card rounded-xl p-6 border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mx-auto mb-4 group-hover:scale-110 transition-transform">
                <industry.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{industry.name}</h3>
              <p className="text-sm text-muted-foreground">{industry.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="accent" size="lg" asChild>
            <Link to="/industries">
              View All Industries
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
