import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "full" | "icon";
  theme?: "light" | "dark";
}

export function Logo({ 
  className, 
  showTagline = false, 
  size = "md",
  variant = "full",
  theme = "light"
}: LogoProps) {
  const sizes = {
    sm: { icon: "w-8 h-8", text: "text-lg", tagline: "text-[8px]" },
    md: { icon: "w-10 h-10", text: "text-xl", tagline: "text-[10px]" },
    lg: { icon: "w-14 h-14", text: "text-2xl", tagline: "text-xs" },
  };

  const currentSize = sizes[size];
  const isDark = theme === "dark";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Icon - Navy square with teal arrow (or inverted for dark) */}
      <div 
        className={cn(
          "relative rounded-lg flex items-center justify-center",
          isDark ? "bg-accent" : "bg-primary",
          currentSize.icon
        )}
      >
        {/* Arrow icon */}
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          className="w-[60%] h-[60%]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M7 17L17 7M17 7H9M17 7V15" 
            stroke={isDark ? "hsl(var(--primary))" : "hsl(var(--accent))"}
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Text */}
      {variant === "full" && (
        <div className="flex flex-col">
          <div className={cn("font-bold leading-tight", currentSize.text)}>
            <span className="text-accent">Insight</span>
            <span className={isDark ? "text-primary-foreground" : "text-primary"}>Resolve</span>
            <span className={isDark ? "text-primary-foreground" : "text-primary"}>.</span>
          </div>
          {showTagline && (
            <span 
              className={cn(
                "font-semibold tracking-[0.2em] uppercase",
                isDark ? "text-primary-foreground/80" : "text-primary",
                currentSize.tagline
              )}
            >
              SMART. COMPLIANCE. CONSISTENT.
            </span>
          )}
        </div>
      )}
    </div>
  );
}
