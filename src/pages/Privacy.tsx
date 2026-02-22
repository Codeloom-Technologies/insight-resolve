import { Layout } from "@/components/layout/Layout";
import { Shield, Lock, Eye, FileCheck, RefreshCw, Users, Database, Trash2, AlertTriangle, GraduationCap } from "lucide-react";

const principles = [
  {
    icon: Eye,
    title: "1. Lawful, Fair, and Transparent Processing",
    description: "We process personal data in accordance with GDPR and all relevant UK data protection laws. Our practices ensure:",
    points: [
      "Clear communication about how data is used",
      "Defined lawful bases for processing",
      "Transparent documentation for clients and customers",
    ],
  },
  {
    icon: FileCheck,
    title: "2. Purpose Limitation",
    description: "Data is collected and processed strictly for complaint handling, case management, remediation, and related compliance activities. We do not use data for any purpose outside the agreed scope.",
  },
  {
    icon: Database,
    title: "3. Data Minimisation",
    description: "We only collect the information necessary to resolve a case effectively and compliantly. Unnecessary or excessive data is not retained.",
  },
  {
    icon: RefreshCw,
    title: "4. Accuracy and Integrity",
    description: "We maintain accurate, up-to-date records throughout the lifecycle of a case. Any inaccuracies identified are corrected promptly.",
  },
  {
    icon: Trash2,
    title: "5. Storage Limitation",
    description: "Data is retained only for as long as required by regulation, contractual obligations, or legitimate business needs. Once retention periods expire, data is securely deleted.",
  },
  {
    icon: Lock,
    title: "6. Security and Confidentiality",
    description: "We protect data through:",
    points: [
      "Encrypted storage and transmission",
      "Role-based access controls",
      "Multi-factor authentication",
      "Secure devices and networks",
      "Continuous monitoring and risk assessment",
    ],
    footer: "These controls ensure that personal data remains confidential and protected from unauthorised access.",
  },
];

const lifecycleSteps = [
  { label: "Collection", description: "Data is gathered securely and only when necessary." },
  { label: "Processing", description: "Information is used strictly for complaint handling and compliance activities." },
  { label: "Storage", description: "Data is stored in encrypted, access-controlled environments." },
  { label: "Access", description: "Only authorised personnel can view or handle case information." },
  { label: "Retention", description: "Data is held for defined periods based on regulatory and contractual requirements." },
  { label: "Deletion", description: "Data is securely erased once no longer required." },
];

const gdprItems = [
  "Lawful basis documentation",
  "Privacy notices",
  "Data subject rights processes",
  "Data breach response procedures",
  "Data Protection Impact Assessments (where required)",
];

const dpaItems = [
  "The nature and purpose of processing",
  "Categories of data handled",
  "Security measures in place",
  "Responsibilities of both parties",
  "Retention and deletion processes",
];

const incidentItems = [
  "Rapid detection and containment procedures",
  "Clear communication pathways",
  "Regulatory reporting timelines",
  "Post-incident review and improvement actions",
];

const trainingItems = [
  "Data protection principles",
  "Secure handling of sensitive information",
  "Recognising and preventing security threats",
];

const improvementItems = [
  "Evolving regulations",
  "Industry best practices",
  "Technological advancements",
  "Client feedback",
];

export default function Privacy() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-accent" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Data Governance</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">InsightResolve Data Governance</h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              InsightResolve is built on a foundation of trust, security, and regulatory alignment. Our data governance framework ensures that every piece of customer information is handled with discipline, transparency, and care. We combine intelligent workflows with robust controls to protect data throughout its entire lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <h2 className="text-3xl font-bold mb-12 text-foreground">Our Data Governance Principles</h2>
          <div className="grid gap-8">
            {principles.map((p) => (
              <div key={p.title} className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <p.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{p.title}</h3>
                    <p className="text-muted-foreground mb-3">{p.description}</p>
                    {p.points && (
                      <ul className="space-y-2 ml-1">
                        {p.points.map((pt) => (
                          <li key={pt} className="flex items-start gap-2 text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    )}
                    {p.footer && <p className="text-muted-foreground mt-3">{p.footer}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Lifecycle */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <h2 className="text-3xl font-bold mb-12 text-foreground">Data Lifecycle Management</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">We manage data through a structured lifecycle:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {lifecycleSteps.map((step, i) => (
              <div key={step.label} className="bg-card rounded-2xl p-6 border border-border/50 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <span className="text-accent font-bold">{i + 1}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{step.label}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR, DPA, Incident, Training, Improvement */}
      <section className="section-padding bg-background">
        <div className="container-wide grid md:grid-cols-2 gap-12">
          <ContentBlock icon={Shield} title="GDPR Compliance" intro="InsightResolve maintains full alignment with GDPR requirements, including:" items={gdprItems} />
          <ContentBlock icon={FileCheck} title="Data Processing Agreement (DPA)" intro="All client engagements include a Data Processing Agreement outlining:" items={dpaItems} />
          <ContentBlock icon={AlertTriangle} title="Incident Response and Breach Management" intro="We maintain a documented incident response plan that includes:" items={incidentItems} />
          <ContentBlock icon={GraduationCap} title="Training and Awareness" intro="All InsightResolve personnel receive ongoing training in:" items={trainingItems} footer="This ensures that data governance is embedded into everyday operations." />
        </div>
      </section>

      {/* Continuous Improvement */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <ContentBlock icon={RefreshCw} title="Commitment to Continuous Improvement" intro="We regularly review and enhance our data governance framework to reflect:" items={improvementItems} />
        </div>
      </section>

      {/* Summary */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Summary</h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed">
            InsightResolve is committed to protecting customer data through disciplined governance, secure systems, and transparent processes. Our framework ensures that every case is handled with integrity, compliance, and respect for the individuals behind the data.
          </p>
        </div>
      </section>
    </Layout>
  );
}

function ContentBlock({ icon: Icon, title, intro, items, footer }: { icon: React.ElementType; title: string; intro: string; items: string[]; footer?: string }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-accent" />
        </div>
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      </div>
      <p className="text-muted-foreground mb-3">{intro}</p>
      <ul className="space-y-2 ml-1">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
      {footer && <p className="text-muted-foreground mt-3">{footer}</p>}
    </div>
  );
}
