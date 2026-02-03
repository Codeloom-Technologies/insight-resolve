import { cn } from "@/lib/utils";
import logoImage from "@/assets/insight-resolve.png";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ 
  className, 
  size = "md",
}: LogoProps) {
  const sizes = {
    sm: "h-8",
    md: "h-10",
    lg: "h-14",
  };

  return (
    <img 
      src={logoImage} 
      alt="InsightResolve" 
      className={cn("w-auto object-contain", sizes[size], className)}
    />
  );
}
