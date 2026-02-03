import { cn } from "@/lib/utils";
import logoImage from "@/assets/insight-resolve.png";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({ 
  className, 
  showTagline = false, 
  size = "md",
}: LogoProps) {
  const sizes = {
    sm: { logo: "h-8", tagline: "text-[8px]" },
    md: { logo: "h-10", tagline: "text-[10px]" },
    lg: { logo: "h-14", tagline: "text-xs" },
  };

  const currentSize = sizes[size];

  return (
    <div className={cn("flex flex-col", className)}>
      <img 
        src={logoImage} 
        alt="InsightResolve" 
        className={cn("w-auto object-contain", currentSize.logo)}
      />
      {showTagline && (
        <span 
          className={cn(
            "font-semibold tracking-[0.2em] uppercase text-primary mt-1",
            currentSize.tagline
          )}
        >
          SMART. COMPLIANCE. CONSISTENT.
        </span>
      )}
    </div>
  );
}
