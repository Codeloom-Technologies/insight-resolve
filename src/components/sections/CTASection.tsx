import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, MessageCircle } from 'lucide-react';

export function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary via-primary to-accent/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container-wide relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your{' '}
            <span className="text-gradient">Complaint Handling?</span>
          </h2>
          <p className="text-lg text-primary-foreground/70 mb-10">
            Join the growing number of organisations trusting InsightResolve for smarter, 
            faster, compliant complaint resolution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact?demo=true">
                <Calendar className="w-5 h-5" />
                Book a Demo
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">
                <MessageCircle className="w-5 h-5" />
                Speak to an Expert
              </Link>
            </Button>
          </div>

          <p className="mt-8 text-sm text-primary-foreground/50">
            No commitment required. See how InsightResolve can work for you.
          </p>
        </div>
      </div>
    </section>
  );
}
