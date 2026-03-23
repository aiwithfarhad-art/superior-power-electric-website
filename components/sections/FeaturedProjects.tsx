"use client";

import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const projects = [
  {
    type: "200A Panel Upgrade",
    description: "Complete electrical panel replacement in a Brampton home",
  },
  {
    type: "Pot Light Installation",
    description: "12 LED pot lights installed in a finished basement",
  },
  {
    type: "EV Charger Setup",
    description: "Tesla Wall Connector with dedicated 50A circuit",
  },
  {
    type: "Kitchen Rewire",
    description: "Full kitchen electrical during renovation",
  },
  {
    type: "Hot Tub Hookup",
    description: "Dedicated 240V circuit with GFCI protection",
  },
  {
    type: "Commercial LED Retrofit",
    description: "Office building LED lighting upgrade",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14 animate-on-scroll">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black uppercase text-[#1C1C1E] tracking-tight">
            Our Work Speaks for Itself
          </h2>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.type}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.625, 0.05, 0, 1],
              }}
              className="group"
            >
              {/* Placeholder Image */}
              <div className="bg-white rounded-xl aspect-[4/3] flex flex-col items-center justify-center gap-3">
                <Camera className="w-8 h-8 text-[#E31837]" />
                <span className="text-sm text-[#6B7280] font-body">
                  Photos Coming Soon
                </span>
              </div>

              {/* Project Info */}
              <div className="mt-4">
                <h3 className="font-heading text-base font-bold uppercase text-[#1C1C1E] tracking-wide">
                  {project.type}
                </h3>
                <p className="mt-1 text-sm text-[#6B7280] font-body leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center animate-on-scroll">
          <p className="text-sm text-[#6B7280] font-body max-w-xl mx-auto">
            Professional photos coming soon. Every project below is ESA
            inspected and certified.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
