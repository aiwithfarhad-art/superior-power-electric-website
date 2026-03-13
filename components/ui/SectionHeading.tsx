import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  line1: string;
  line2?: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  badge,
  line1,
  line2,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" && "text-center"
      )}
    >
      {badge && (
        <span
          className={cn(
            "inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4",
            light
              ? "bg-white/10 text-white"
              : "bg-[#E31837]/10 text-[#E31837]"
          )}
        >
          {badge}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight",
          light ? "text-white" : "text-[#1C1C1E]"
        )}
      >
        {line1}
        {line2 && (
          <>
            <br />
            <span className="font-accent italic text-[0.75em] tracking-[0.05em] text-[#E31837]">
              {line2}
            </span>
          </>
        )}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg max-w-2xl",
            align === "center" && "mx-auto",
            light ? "text-gray-300" : "text-[#9CA3AF]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
