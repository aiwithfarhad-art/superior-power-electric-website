"use client";

import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";

const reviews = [
  {
    name: "Daniel Lebar",
    text: "We had Superior Power Electric upgrade our service to 200 amps and our experience was great. Throughout the process, from the initial quote to completion of the job, Shaun and his crew were courteous and professional.",
  },
  {
    name: "Tanya Burkart",
    text: "Shaun was on time, patient and answered all of my questions. He took his time and did a thorough review. Great job Shaun.",
  },
  {
    name: "J Bassi",
    text: "Recently hired Superior Power Electric for project to install new lighting fixtures and outlets. From the very beginning Shaun was very transparent and provided us with a competitive quote. Shaun and his team are very professional.",
  },
  {
    name: "Amanda Braddock",
    text: "A mouse had chewed the wire to our dishwasher and we needed it fixed before we could install our new one. Great communication in setting up the appointment. Shaun was on time and identified the issue and the fix correctly.",
  },
  {
    name: "Anna Mather",
    text: "We called Shaun again because we were so happy with his previous work and knew he was a great communicator and problem solver. Once again he was able to quickly identify the concern and even came on a snowy Sunday to fix our issue.",
  },
  {
    name: "Dharam Mann",
    text: "I had some outlets without power. Shaun showed up within 30 minutes and fixed everything in less than an hour. Shaun was professional, walked me through all the issues, educated me and has earned my TRUST.",
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-[#1a2975] font-black uppercase text-3xl sm:text-4xl lg:text-[56px] tracking-tight leading-[1.05]">
            What Brampton Homeowners Say
          </h2>
          <p className="text-[#64748b] font-body text-base md:text-lg mt-4">
            47 verified Google reviews &middot; 4.9 average
          </p>
        </motion.div>

        {/* Review grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl border border-gray-200 p-6 border-t-[3px] border-t-[#1B4FE4] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="font-body text-[#374151] text-[15px] leading-relaxed line-clamp-4">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Footer */}
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Avatar circle */}
                  <div className="w-9 h-9 rounded-full bg-[#1B4FE4] flex items-center justify-center">
                    <span className="text-white text-xs font-bold font-heading">
                      {getInitials(review.name)}
                    </span>
                  </div>
                  <span className="font-heading text-sm font-bold uppercase text-[#1a2975]">
                    {review.name}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs text-[#94a3b8] bg-[#F1F5F9] rounded-full px-3 py-1">
                  <span className="font-bold" style={{ color: "#4285F4" }}>
                    G
                  </span>
                  via Google
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <a
            href="https://www.google.com/maps/place/Superior+Power+Electric"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-[#1B4FE4] text-[#1B4FE4] font-heading text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:bg-[#1B4FE4] hover:text-white"
          >
            Read All 47 Reviews on Google
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
