import { Shield, Zap, CheckCircle } from 'lucide-react';

export function BrandStory() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="badge-accent mb-4">Our Story</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Built Different. By Design.
            </h2>
          </div>

          {/* Story Content */}
          <div className="prose prose-lg max-w-none text-center mb-12">
            <p className="text-muted-foreground">
              We saw organisations struggling with rising complaint volumes, stricter regulations, 
              and outdated systems that weren't built for today's expectations. Internal teams were 
              overwhelmed. Outsourced providers lacked consistency. And generic CRMs couldn't keep 
              up with compliance demands.
            </p>
            <p className="text-foreground font-medium text-xl mt-6">
              So we built something different.
            </p>
          </div>

          {/* Key Pillars */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Compliance-First',
                description: 'Every workflow designed with regulatory requirements at the core.',
              },
              {
                icon: Zap,
                title: 'Technology-Powered',
                description: 'Intelligent automation that guides, flags, and ensures nothing is missed.',
              },
              {
                icon: CheckCircle,
                title: 'Outcome-Focused',
                description: 'Consistent, quality resolutions that protect customers and reputation.',
              },
            ].map((pillar) => (
              <div key={pillar.title} className="text-center">
                <div className="feature-icon mx-auto mb-4">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{pillar.title}</h3>
                <p className="text-muted-foreground">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
