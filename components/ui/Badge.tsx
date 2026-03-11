import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "dark" | "light";
  className?: string;
}

export function Badge({ children, variant = "primary", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase",
        variant === "primary" && "bg-[#E31837]/10 text-[#E31837]",
        variant === "dark" && "bg-[#1C1C1E] text-white",
        variant === "light" && "bg-white/10 text-white",
        className
      )}
    >
      {children}
    </span>
  );
}
