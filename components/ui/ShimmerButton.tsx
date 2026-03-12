"use client";

import { type ReactNode } from "react";

interface ShimmerButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export function ShimmerButton({
  children,
  className = "",
  href,
  onClick,
}: ShimmerButtonProps) {
  const baseClasses =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-[#E31837] px-8 py-4 font-heading text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:scale-[1.02] hover:brightness-110 active:scale-[0.98] min-h-[52px] shadow-lg shadow-[#E31837]/30";

  const shimmer = (
    <span className="absolute inset-0 overflow-hidden rounded-lg">
      <span className="absolute inset-0 -translate-x-full animate-[shimmerSlide_3s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </span>
  );

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${className}`}>
        {shimmer}
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`}>
      {shimmer}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}
