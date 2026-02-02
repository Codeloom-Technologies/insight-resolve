import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  Shield,
  FileSearch,
  BarChart3,
  Settings,
  Users,
  ArrowRight,
  Phone,
} from "lucide-react";

const services = [
  {
    icon: Phone,
    title: "Call Handling (Inbound & Outbound)",
    description:
      "Professional call handling services for complaint intake and customer communication.",
  },
  {
    icon: MessageSquare,
    title: "Complaint Handling", // make it top
    description:
      "Expert complaint handlers managing every case with precision and care.",
  },
  {
    icon: Shield,
    title: "Compliance-Driven Management",
    description:
      "Every step aligned with regulatory requirements and best practices.",
  },
  {
    icon: FileSearch,
    title: "Case Review & Assessments",
    description:
      "Independent reviews ensuring fair outcomes and regulatory compliance.",
  },
  {
    icon: BarChart3,
    title: "Reporting & Insights",
    description:
      "Data-driven insights to identify trends and prevent future issues.",
  },
  {
    icon: Settings,
    title: "System Integration",
    description:
      "Seamless integration with your existing CRM and business systems.",
  },
  // {
  //   icon: Users,
  //   title: "Training Services",
  //   description:
  //     "Upskill your team with compliance-focused training programmes.",
  // },
];

export function ServicesPreview() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="badge-accent mb-4">Our Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Complaint Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From initial contact to final resolution, we handle every aspect of
            complaint management with expertise and compliance at the core.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-interactive p-8 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="feature-icon mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="accent" size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
