import { Layout } from "@/components/layout/Layout";
import { Cookie, Info, Settings, BarChart3, Share2, ShieldCheck, ToggleRight } from "lucide-react";

const cookieTypes = [
  {
    icon: ShieldCheck,
    name: "Strictly Necessary Cookies",
    description:
      "These cookies are essential for the website to function properly. They enable core features such as security, session management, and accessibility. These cookies cannot be disabled.",
    examples: ["Session authentication", "Security tokens", "Load balancing"],
    canDisable: false,
  },
  {
    icon: BarChart3,
    name: "Analytics Cookies",
    description:
      "These cookies help us understand how visitors interact with our website by collecting anonymous usage data. This information helps us improve our site and services.",
    examples: ["Page visit counts", "Traffic sources", "User journey analysis", "Feature usage statistics"],
    canDisable: true,
  },
  {
    icon: Settings,
    name: "Functional Cookies",
    description:
      "These cookies enable enhanced functionality and personalisation, such as remembering your preferences and settings when you return to our site.",
    examples: ["Language preferences", "Region settings", "Display preferences", "Previously viewed content"],
    canDisable: true,
  },
  {
    icon: Share2,
    name: "Marketing Cookies",
    description:
      "These cookies may be set by our advertising partners to build a profile of your interests and show you relevant content on other sites. We currently do not use marketing cookies, but this may change in the future.",
    examples: ["Interest-based profiles", "Cross-site tracking", "Ad performance measurement"],
    canDisable: true,
  },
];

const sections = [
  {
    icon: Info,
    title: "What Are Cookies?",
    content:
      "Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work efficiently, provide a better user experience, and supply information to site owners. Cookies can be \"persistent\" (remaining on your device until they expire or are deleted) or \"session-based\" (deleted when you close your browser).",
  },
  {
    icon: Cookie,
    title: "How We Use Cookies",
    content:
      "InsightResolve uses cookies to ensure our website functions correctly, to understand how visitors use our site, and to improve your experience. We are committed to using cookies responsibly and transparently.",
  },
];

const rights = [
  "Accept or reject non-essential cookies when you first visit our site",
  "Change your cookie preferences at any time through your browser settings",
  "Delete cookies that have already been stored on your device",
  "Browse our site with cookies disabled, though some features may not work as intended",
];

const browserLinks = [
  { name: "Google Chrome", url: "https://support.google.com/chrome/answer/95647" },
  { name: "Mozilla Firefox", url: "https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" },
  { name: "Safari", url: "https://support.apple.com/en-gb/guide/safari/sfri11471/mac" },
  { name: "Microsoft Edge", url: "https://support.microsoft.com/en-us/microsoft-edge/manage-cookies-in-microsoft-edge-168dab11-0753-043d-7c16-ede5947fc64d" },
];

export default function Cookies() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Cookie className="w-8 h-8 text-accent" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              This Cookie Policy explains how InsightResolve uses cookies and similar technologies on our website. We believe in transparency and want you to understand what data we collect and why.
            </p>
            <p className="text-sm text-primary-foreground/60 mt-4">Last updated: February 2026</p>
          </div>
        </div>
      </section>

      {/* What & How */}
      <section className="section-padding bg-background">
        <div className="container-wide max-w-4xl grid gap-8">
          {sections.map((s) => (
            <div key={s.title} className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <s.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-3 text-foreground">{s.title}</h2>
                  <p className="text-muted-foreground">{s.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cookie Types */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-foreground">Types of Cookies We Use</h2>
          <div className="grid gap-8">
            {cookieTypes.map((ct) => (
              <div key={ct.name} className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <ct.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-foreground">{ct.name}</h3>
                      <span
                        className={`text-xs font-medium px-3 py-1 rounded-full ${
                          ct.canDisable
                            ? "bg-muted text-muted-foreground"
                            : "bg-accent/10 text-accent"
                        }`}
                      >
                        {ct.canDisable ? "Optional" : "Required"}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-3">{ct.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {ct.examples.map((ex) => (
                        <span key={ex} className="text-xs bg-muted px-3 py-1.5 rounded-lg text-muted-foreground">
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Choices */}
      <section className="section-padding bg-background">
        <div className="container-wide max-w-4xl">
          <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <ToggleRight className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-3 text-foreground">Your Choices</h2>
                <p className="text-muted-foreground mb-4">You have the right to:</p>
                <ul className="space-y-2 ml-1 mb-6">
                  {rights.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
                <h3 className="font-semibold text-foreground mb-3">Managing Cookies in Your Browser</h3>
                <p className="text-muted-foreground mb-3">
                  You can manage cookies through your browser settings. Here are links to cookie management guides for popular browsers:
                </p>
                <div className="flex flex-wrap gap-3">
                  {browserLinks.map((b) => (
                    <a
                      key={b.name}
                      href={b.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-accent hover:underline"
                    >
                      {b.name} →
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Questions?</h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed">
            If you have any questions about our use of cookies, please contact us at{" "}
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
