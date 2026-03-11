"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  className?: string;
}

export function FAQ({ items, className }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-[#E5E5E5] rounded-xl overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-5 text-left cursor-pointer hover:bg-[#F5F5F5] transition-colors"
          >
            <span className="font-semibold text-[#1C1C1E] pr-4">
              {item.question}
            </span>
            <ChevronDown
              className={cn(
                "w-5 h-5 text-[#9CA3AF] flex-shrink-0 transition-transform duration-200",
                openIndex === index && "rotate-180"
              )}
            />
          </button>
          <div
            className={cn(
              "overflow-hidden transition-all duration-200",
              openIndex === index ? "max-h-96" : "max-h-0"
            )}
          >
            <p className="px-5 pb-5 text-[#6B7280] leading-relaxed">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
