import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface CardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  href?: string;
  className?: string;
}

export function Card({
  icon: Icon,
  title,
  description,
  href,
  className,
}: CardProps) {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      href={href}
      className={cn(
        "group block bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.04)] p-6 transition-all duration-200",
        href && "hover:shadow-[0_2px_6px_rgba(0,0,0,0.06),0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-0.5",
        className
      )}
    >
      {Icon && (
        <div className="w-12 h-12 rounded-lg bg-[#E31837]/10 flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-[#E31837]" />
        </div>
      )}
      <h3 className="text-lg font-bold text-[#1C1C1E] mb-2">{title}</h3>
      <p className="text-[#9CA3AF] text-sm leading-relaxed">{description}</p>
      {href && (
        <div className="mt-4 flex items-center gap-1 text-[#E31837] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
          Learn More <ArrowRight className="w-4 h-4" />
        </div>
      )}
    </Wrapper>
  );
}
