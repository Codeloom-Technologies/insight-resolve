import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/sections/CTASection";
import {
  MessageSquare,
  Shield,
  FileSearch,
  BarChart3,
  Settings,
  Users,
  Phone,
  FileText,
  Heart,
  Eye,
} from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "Complaint Handling",
    description:
      "End-to-end complaint management by expert handlers who understand regulatory requirements and customer expectations.",
    features: [
      "Multi-channel intake",
      "Structured case management",
      "Quality assurance",
      "Timely resolution",
    ],
  },
  {
    icon: Phone,
    title: "Call Handling (Inbound & Outbound)",
    description:
      "Professional call handling services for complaint intake and customer communication.",
    features: [
      "Inbound support",
      "Outbound follow-up",
      "Script development",
      "Quality monitoring",
    ],
  },
  {
    icon: Eye,
    title: "Client Portal Access",
    description:
      "Real-time visibility into every case through our secure, intuitive client portal.",
    features: [
      "Live case tracking",
      "Document access",
      "Performance metrics",
      "Audit trails",
    ],
  },

  {
    icon: FileSearch,
    title: "Case Review & Independent Assessments",
    description:
      "Independent review of cases to ensure fair outcomes and identify areas for improvement.",
    features: [
      "Quality audits",
      "Outcome fairness review",
      "Process assessment",
      "Recommendations",
    ],
  },
  {
    icon: BarChart3,
    title: "Reporting & Insights",
    description:
      "Comprehensive analytics and insights to drive continuous improvement and identify trends.",
    features: [
      "Real-time dashboards",
      "Trend analysis",
      "Root cause identification",
      "Regulatory reporting",
    ],
  },
  {
    icon: Settings,
    title: "CRM & System Integration",
    description:
      "Seamless integration with your existing systems for unified workflows and data consistency.",
    features: [
      "API integration",
      "Data synchronisation",
      "Workflow automation",
      "Custom connectors",
    ],
  },
  {
    icon: Shield,
    title: "Compliance-Driven Case Management",
    description:
      "Every case managed with regulatory requirements at the core, ensuring full compliance at every step.",
    features: [
      "Ombudsman",
      "Ofgem compliance",
      "Ofcom requirements",
      "Industry standards",
    ],
  },
  // {
  //   icon: FileText,
  //   title: "Policy & Process Support",
  //   description:
  //     "Expert guidance on complaint handling policies and processes to meet regulatory standards.",
  //   features: [
  //     "Policy development",
  //     "Process optimisation",
  //     "Compliance review",
  //     "Best practices",
  //   ],
  // },
  // {
  //   icon: Users,
  //   title: "Training Services",
  //   description:
  //     "Upskill your internal teams with our compliance and customer focused training programmes.",
  //   features: [
  //     "Regulatory training",
  //     "Case handling skills",
  //     "Communication training",
  //     "Continuous development",
  //     "ethics-driven customer engagement",
  //   ],
  // },
  // {
  //   icon: Heart,
  //   title: "Ethics-Driven Customer Engagement",
  //   description:
  //     "Customer interactions guided by fairness, empathy, and ethical principles.",
  //   features: [
  //     "Vulnerable customer support",
  //     "Fair treatment",
  //     "Empathetic communication",
  //     "Ethical outcomes",
  //   ],
  // },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <span className="badge-accent mb-6 inline-block bg-accent/20 text-accent">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Comprehensive Complaint{" "}
              <span className="text-gradient">Solutions</span>
            </h1>
            <p className="text-xl text-primary-foreground/70">
              From initial contact to final resolution, we handle every aspect
              of complaint management with expertise, technology, and compliance
              at the core.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={service.title} className="card-interactive p-8 group">
                <div className="flex items-start gap-6">
                  <div className="feature-icon flex-shrink-0 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {feature}
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
