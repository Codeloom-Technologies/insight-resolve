import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  MessageCircle,
  Users,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactOptions = [
  {
    icon: Calendar,
    title: "Book a Demo",
    description:
      "See InsightResolve in action with a personalised demonstration.",
    value: "demo",
  },
  {
    icon: MessageCircle,
    title: "General Enquiry",
    description: "Have a question? We'd love to hear from you.",
    value: "enquiry",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "Interested in partnering with InsightResolve?",
    value: "partnership",
  },
];

export default function Contact() {
  const [searchParams] = useSearchParams();
  const initialType = searchParams.get("demo") ? "demo" : "enquiry";
  const [selectedType, setSelectedType] = useState(initialType);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Get form data
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const company = formData.get("company") as string;
    const industry = formData.get("industry") as string;
    const message = formData.get("message") as string;

    // Validate required fields
    // if (!firstName || !lastName || !email || !company || !message) {
    //   toast({
    //     title: "Error",
    //     description: "Please fill in all required fields",
    //     variant: "destructive",
    //   });
    //   setIsSubmitting(false);
    //   return;
    // }

    // Create email subject based on selected type
    let subject = "";
    switch (selectedType) {
      case "demo":
        subject = `Demo Request: ${firstName} ${lastName} from ${company}`;
        break;
      case "partnership":
        subject = `Partnership Enquiry: ${firstName} ${lastName} from ${company}`;
        break;
      default:
        subject = `General Enquiry: ${firstName} ${lastName} from ${company}`;
    }

    // Create email body
    const body = `
  Contact Type: ${
    selectedType === "demo"
      ? "Demo Request"
      : selectedType === "partnership"
      ? "Partnership Enquiry"
      : "General Enquiry"
  }
  
  Personal Information:
  -------------------
  First Name: ${firstName}
  Last Name: ${lastName}
  Email: ${email}
  Phone: ${phone || "Not provided"}
  Company: ${company}
  Industry: ${industry || "Not specified"}
  
  Message:
  --------
  ${message}
  
  ---
  This message was sent from the InsightResolve contact form.
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:info@insightresolve.co.uk?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    try {
      // Open email client
      window.location.href = mailtoLink;

      // Show success message
      toast({
        title: "Opening email client",
        description: "Please send the email to complete your message.",
      });

      // Simulate a short delay for UI feedback
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSubmitted(true);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to open email client. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Let's Start a <span className="text-gradient">Conversation</span>
            </h1>
            <p className="text-xl text-primary-foreground/70">
              Ready to transform your complaint handling? Book a demo, ask a
              question, or explore partnership opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6 mb-8">
                <a
                  href="mailto:info@insightresolve.co.uk"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">
                      info@insightresolve.co.uk
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+4474443738070"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-muted-foreground">
                      {" "}
                      +44 (74) 443 738 070
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">
                      London, United Kingdom
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Type Selection */}
              <div className="space-y-3">
                {contactOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setSelectedType(option.value)}
                    className={`w-full p-4 rounded-xl border text-left transition-all ${
                      selectedType === option.value
                        ? "border-accent bg-accent/5"
                        : "border-border hover:border-accent/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <option.icon
                        className={`w-5 h-5 ${
                          selectedType === option.value
                            ? "text-accent"
                            : "text-muted-foreground"
                        }`}
                      />
                      <div>
                        <p
                          className={`font-medium ${
                            selectedType === option.value
                              ? "text-accent"
                              : "text-foreground"
                          }`}
                        >
                          {option.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {option.description}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center text-success mx-auto mb-6">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Thank You!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      We've received your message and will get back to you
                      within 24 hours.
                    </p>
                    <Button
                      variant="accent"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="text-xl font-semibold text-foreground mb-6">
                      {selectedType === "demo" && "Book Your Demo"}
                      {selectedType === "enquiry" && "Send Us a Message"}
                      {selectedType === "partnership" && "Partnership Enquiry"}
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          First Name *
                        </label>
                        <Input placeholder="John" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Last Name *
                        </label>
                        <Input placeholder="Smith" required />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          placeholder="john@company.com"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone
                        </label>
                        <Input
                          type="tel"
                          placeholder="+44 (0) 123 456 789"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Company *
                      </label>
                      <Input placeholder="Your company name" required />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Industry
                      </label>
                      <select
                        className="w-full h-10 px-3 rounded-lg border border-input bg-background text-foreground"
                        required
                      >
                        <option value="">Select your industry</option>
                        <option value="financial-services">
                          Financial Services
                        </option>
                        <option value="insurance">Insurance</option>
                        <option value="energy">Energy</option>
                        <option value="utilities">Utilities</option>
                        <option value="telecoms">Telecoms</option>
                        <option value="retail">Retail</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        placeholder={
                          selectedType === "demo"
                            ? "Tell us about your current complaint handling challenges and what you'd like to see in the demo..."
                            : "How can we help you?"
                        }
                        rows={5}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="accent"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <ArrowRight className="w-4 h-4" />
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to our Privacy Policy
                      and Terms of Service.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
