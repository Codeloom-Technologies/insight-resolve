import { Layout } from "@/components/layout/Layout";
import { FileText, Scale, AlertCircle, ShieldCheck, Ban, CreditCard, Globe, Gavel } from "lucide-react";

const sections = [
  {
    icon: FileText,
    title: "1. Introduction",
    content:
      "These Terms of Service (\"Terms\") govern your access to and use of InsightResolve's services, including our complaint handling, case management, remediation, and compliance solutions. By engaging our services, you agree to be bound by these Terms. If you do not agree, please do not use our services.",
  },
  {
    icon: Scale,
    title: "2. Services",
    content:
      "InsightResolve provides AI-powered complaint resolution, customer remediation, and regulatory compliance services to financial services organisations and other regulated industries. The specific scope of services will be outlined in your individual service agreement or statement of work.",
    points: [
      "Complaint handling and case management",
      "Customer remediation and redress processing",
      "Regulatory compliance monitoring and reporting",
      "Data analysis and insight generation",
      "Workflow automation and process optimisation",
    ],
  },
  {
    icon: ShieldCheck,
    title: "3. Client Obligations",
    content: "As a client of InsightResolve, you agree to:",
    points: [
      "Provide accurate, complete, and timely information necessary for service delivery",
      "Ensure you have lawful authority to share any personal data with us",
      "Comply with all applicable laws and regulations in your use of our services",
      "Maintain the confidentiality of any account credentials provided to you",
      "Notify us promptly of any unauthorised use of your account or security concerns",
    ],
  },
  {
    icon: Ban,
    title: "4. Prohibited Use",
    content: "You agree not to use our services to:",
    points: [
      "Violate any applicable law, regulation, or third-party rights",
      "Transmit malicious software, viruses, or harmful code",
      "Attempt to gain unauthorised access to our systems or networks",
      "Interfere with the proper functioning of our platform",
      "Use our services for any fraudulent, deceptive, or misleading activity",
    ],
  },
  {
    icon: Globe,
    title: "5. Intellectual Property",
    content:
      "All intellectual property rights in our platform, technology, methodologies, and deliverables remain the property of InsightResolve unless expressly agreed otherwise in writing. You retain ownership of any data you provide to us. We do not claim ownership over your data, and we will only use it as necessary to deliver the agreed services.",
  },
  {
    icon: CreditCard,
    title: "6. Fees and Payment",
    content: "Fees for our services will be outlined in your service agreement. Unless otherwise stated:",
    points: [
      "Invoices are issued monthly and payable within 30 days of receipt",
      "All fees are exclusive of VAT, which will be added where applicable",
      "Late payments may incur interest at the statutory rate",
      "We reserve the right to suspend services for persistent non-payment",
    ],
  },
  {
    icon: AlertCircle,
    title: "7. Limitation of Liability",
    content:
      "To the maximum extent permitted by law, InsightResolve's total liability for any claims arising from or related to these Terms or our services shall be limited to the fees paid by you in the twelve (12) months preceding the claim. We shall not be liable for any indirect, incidental, consequential, or punitive damages, including loss of profits, data, or business opportunities.",
  },
  {
    icon: Gavel,
    title: "8. Termination",
    content: "Either party may terminate the service agreement:",
    points: [
      "By providing 30 days' written notice to the other party",
      "Immediately if the other party commits a material breach that remains unremedied after 14 days' written notice",
      "Immediately if the other party becomes insolvent or enters administration",
    ],
    footer:
      "Upon termination, we will securely return or delete your data in accordance with our Data Governance policy and any applicable retention requirements.",
  },
  {
    icon: Scale,
    title: "9. Governing Law and Disputes",
    content:
      "These Terms are governed by the laws of England and Wales. Any disputes arising from these Terms shall first be addressed through good-faith negotiation. If unresolved, disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.",
  },
  {
    icon: FileText,
    title: "10. Changes to These Terms",
    content:
      "We may update these Terms from time to time. Material changes will be communicated to active clients in advance. Continued use of our services after changes take effect constitutes acceptance of the revised Terms.",
  },
];

export default function Terms() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-accent" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Please read these terms carefully before using InsightResolve's services. These terms set out the rights and obligations of both parties and govern your use of our platform and solutions.
            </p>
            <p className="text-sm text-primary-foreground/60 mt-4">Last updated: February 2026</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-wide max-w-4xl">
          <div className="grid gap-8">
            {sections.map((s) => (
              <div key={s.title} className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <s.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-3 text-foreground">{s.title}</h2>
                    <p className="text-muted-foreground mb-3">{s.content}</p>
                    {s.points && (
                      <ul className="space-y-2 ml-1">
                        {s.points.map((pt) => (
                          <li key={pt} className="flex items-start gap-2 text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    )}
                    {s.footer && <p className="text-muted-foreground mt-3">{s.footer}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Questions?</h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed">
            If you have any questions about these Terms of Service, please contact us at{" "}
            <a href="mailto:info@insightresolve.co.uk" className="text-accent hover:underline">
              info@insightresolve.co.uk
            </a>
            .
          </p>
        </div>
      </section>
    </Layout>
  );
}
