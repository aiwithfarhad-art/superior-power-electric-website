"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What areas do you serve?",
    a: "We serve Brampton and the entire Greater Toronto Area including Mississauga, Toronto, Vaughan, Caledon, Oakville, Milton, and surrounding areas.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes, we are fully licensed and insured. Our ECRA/ESA License number is #7014710. We adhere to or surpass Ontario Electrical Safety Code standards.",
  },
  {
    q: "Do you offer emergency electrical services?",
    a: "Yes, we provide 24/7 emergency electrical services. If you're experiencing a power outage, electrical fault, or any urgent electrical issue, call us immediately.",
  },
  {
    q: "How much experience do you have?",
    a: "We have over 15 years of industry expertise in both residential and commercial electrical work across the Greater Toronto Area.",
  },
  {
    q: "How do your estimates work?",
    a: "We offer two options. Our $49 Project Assessment is an in-person visit with a licensed electrician who reviews your project, explains the scope, safety considerations, and recommended solutions. The $49 is credited toward your job if you decide to move forward. We also offer free remote estimates if you can provide clear photos and details of your project.",
  },
  {
    q: "What residential services do you offer?",
    a: "We offer a complete range of services including panel upgrades, pot light installation, hot tub hookups, rewiring, lighting, ceiling fans, surge protection, smoke detectors, generators, and more.",
  },
  {
    q: "Do you offer financing for electrical work?",
    a: "We can discuss payment options for larger projects like panel upgrades and rewiring. Contact us at (905) 452-8439 to discuss your project and we will work out a payment plan that fits your budget.",
  },
  {
    q: "What is your $49 Project Assessment?",
    a: "Our $49 Project Assessment is an in-person visit where a licensed electrician reviews your project, explains the scope, safety considerations, and recommended solutions. The $49 is credited toward your job if you decide to move forward. We also offer free remote estimates if you can provide clear photos and project details.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="bg-white py-20 md:py-28 relative">
      <div className="premium-divider" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-on-scroll">
          <span className="eyebrow">Got Questions?</span>
          <h2 className="heading-section mt-3 text-foreground">
            FREQUENTLY ASKED{" "}
            <span className="text-gradient-red">QUESTIONS</span>
          </h2>
          <div className="silver-line mt-4" />
        </div>

        <div className="animate-on-scroll">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-xl px-5 md:px-6 border border-border/40 bg-white"
                style={{ boxShadow: "0 2px 12px hsl(0 0% 0% / 0.04)" }}
              >
                <AccordionTrigger className="text-left font-heading text-base md:text-lg font-semibold text-foreground hover:text-primary transition-colors py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-text-muted text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />
    </section>
  );
}
