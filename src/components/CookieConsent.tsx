import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";

const COOKIE_CONSENT_KEY = "insightresolve_cookie_consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 animate-fade-in">
      <div className="container-wide">
        <div className="bg-card border border-border/50 rounded-2xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
            <Cookie className="w-6 h-6 text-accent" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-foreground mb-1">We value your privacy</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We use cookies to enhance your browsing experience, analyse site traffic, and personalise content. By clicking "Accept All", you consent to our use of cookies in accordance with our{" "}
              <Link to="/cookies" className="text-accent hover:underline">
                Cookie Policy
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-accent hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <Button variant="ghost" size="sm" onClick={decline} className="flex-1 md:flex-none">
              Decline
            </Button>
            <Button variant="accent" size="sm" onClick={accept} className="flex-1 md:flex-none">
              Accept All
            </Button>
          </div>
          <button onClick={decline} className="absolute top-3 right-3 md:hidden text-muted-foreground hover:text-foreground">
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
