import { Layout } from '@/components/layout/Layout';
import { CTASection } from '@/components/sections/CTASection';
import { 
  Rocket, 
  Building2, 
  Shield, 
  Flame, 
  Droplets, 
  Smartphone, 
  ShoppingBag,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

const industries = [
  {
    icon: Rocket,
    name: 'Startups & Small Businesses',
    description: 'Scale your complaint/call handling with confidence. Get enterprise-level compliance without enterprise complexity.',
    benefits: ['No setup overhead', 'Scalable pricing', 'Fast implementation', 'Expert support'],
    regulation: 'Various sector-specific requirements',
  },
  {
    icon: Building2,
    name: 'Financial Services',
    description: 'FCA-compliant complaint handling that protects your licence and your customers.',
    benefits: ['FCA DISP aligned', 'FSCS ready', 'Root cause analysis', 'Regulatory reporting'],
    regulation: 'FCA Handbook compliance',
  },
  {
    icon: Shield,
    name: 'Social Housing', // TODO CHANGE WRITE UP
    description: 'Handle claims complaints with the rigour and fairness regulators demand.',
    benefits: ['Claims escalation', 'FOS preparation', 'Vulnerability support', 'Fair outcomes'],
    regulation: 'Housing onbudmen & Lloyd\'s requirements',
  },
  {
    icon: Flame,
    name: 'Energy',
    description: 'Ofgem-aligned complaint handling for energy suppliers and networks.',
    benefits: ['Ofgem compliance', 'Ombudsman ready', 'Vulnerability focus', 'SLA tracking'],
    regulation: 'Ofgem Standards of Conduct',
  },
  {
    icon: Droplets,
    name: 'Utilities',
    description: 'Water and waste services complaint management with regulatory precision.',
    benefits: ['WATRS alignment', 'CCWater reporting', 'Service recovery', 'Performance metrics'],
    regulation: 'Ofwat requirements',
  },
  {
    icon: Smartphone,
    name: 'Telecoms',
    description: 'Ofcom-compliant complaint handling for telecoms and broadband providers.',
    benefits: ['ADR scheme ready', 'Ofcom alignment', 'Billing disputes', 'Service issues'],
    regulation: 'Ofcom General Conditions',
  },
  {
    icon: ShoppingBag,
    name: 'Retail/Services',
    description: 'Consumer protection compliant handling for retail and e-commerce businesses.',
    benefits: ['Consumer rights', 'Returns handling', 'Quality issues', 'Service complaints'],
    regulation: 'Consumer Rights Act 2015',
  },
  {
    icon: AlertTriangle,
    name: 'High-Risk & Regulated Sectors',
    description: 'Specialist complaint handling for sectors facing heightened regulatory scrutiny.',
    benefits: ['Enhanced due diligence', 'Risk mitigation', 'Regulatory liaison', 'Crisis support'],
    regulation: 'Multi-regulatory compliance',
  },
];

export default function Industries() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <span className="badge-accent mb-6 inline-block bg-accent/20 text-accent">Industries We Serve</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Expertise Across{' '}
              <span className="text-gradient">Regulated Sectors</span>
            </h1>
            <p className="text-xl text-primary-foreground/70">
              From startups to established enterprises, we provide compliant complaint handling 
              tailored to your industry's unique regulatory requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry) => (
              <div key={industry.name} className="card-interactive p-8 group">
                <div className="flex items-start gap-6">
                  <div className="feature-icon flex-shrink-0 group-hover:scale-110 transition-transform">
                    <industry.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{industry.name}</h3>
                    <p className="text-muted-foreground mb-4">{industry.description}</p>
                    
                    <div className="mb-4">
                      <span className="text-xs font-medium text-accent uppercase tracking-wide">
                        {industry.regulation}
                      </span>
                    </div>

                    <ul className="grid grid-cols-2 gap-2">
                      {industry.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
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
