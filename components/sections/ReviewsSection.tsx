"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { reviews } from "@/data/reviews";
import { business } from "@/data/business";

export function ReviewsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Reviews"
          line1={`${business.googleReviews.count} Five-Star`}
          line2="Google Reviews"
          description={`Rated ${business.googleReviews.rating} out of 5 on Google. Here is what our customers say about working with us.`}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 6).map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.625, 0.05, 0, 1],
              }}
              className="bg-white rounded-xl p-6"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="text-[#1C1C1E] text-sm leading-relaxed mb-4">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E31837]/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-[#E31837]">
                    {review.author[0]}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#1C1C1E]">
                    {review.author}
                  </div>
                  {review.service && (
                    <div className="text-xs text-[#9CA3AF]">
                      {review.service}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
