"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
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

function FaqAccordionItem({
  question,
  answer,
  index,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, delay: index * 0.08 }}
      className={cn(
        "group rounded-xl",
        "transition-all duration-200 ease-in-out",
        "shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.04)]",
        isOpen
          ? "bg-gradient-to-br from-white via-[#F8F9FA] to-white shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
          : "hover:bg-[#F8F9FA]/60"
      )}
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer"
      >
        <h3
          className={cn(
            "text-lg md:text-xl font-bold font-heading uppercase tracking-tight transition-colors duration-200 pr-4",
            isOpen ? "text-[#1C1C1E]" : "text-[#1C1C1E]/70"
          )}
        >
          {question}
        </h3>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1,
          }}
          transition={{ duration: 0.2 }}
          className={cn(
            "p-1 rounded-full flex-shrink-0",
            "transition-colors duration-200",
            isOpen ? "text-[#E31837]" : "text-[#9CA3AF]"
          )}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { duration: 0.2, ease: "easeIn" },
            }}
          >
            <div className="px-6 pb-5 pt-1">
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                className="text-lg md:text-xl text-[#4B5563] leading-relaxed font-body"
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ({ items, className }: FAQProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div className={cn("space-y-2.5", className)}>
      {items.map((item, index) => (
        <FaqAccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          index={index}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
