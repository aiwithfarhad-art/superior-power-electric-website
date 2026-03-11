"use client";

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "dark" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  href?: string;
  showArrow?: boolean;
  children: React.ReactNode;
}

const variants = {
  primary:
    "bg-[#E31837] text-white hover:bg-[#C21430] border-transparent",
  dark: "bg-[#1C1C1E] text-white hover:bg-[#2A2A2E] border-transparent",
  ghost:
    "bg-transparent text-[#1C1C1E] hover:bg-[#F5F5F5] border-[#E5E5E5]",
  white:
    "bg-white text-[#1C1C1E] hover:bg-[#F5F5F5] border-transparent",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  showArrow = true,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-semibold rounded-lg border transition-all duration-200 cursor-pointer",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
        {showArrow && <ArrowRight className="w-4 h-4" />}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      {showArrow && <ArrowRight className="w-4 h-4" />}
    </button>
  );
}
