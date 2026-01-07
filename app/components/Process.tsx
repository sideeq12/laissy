"use client";

import { motion } from "framer-motion";

const steps = [
    {
        num: "01",
        title: "Frame the Goal",
        desc: "We define enquiry automation, not generic AI. Focus on email and chatbot—safe, repeatable, measurable."
    },
    {
        num: "02",
        title: "Scope Definition",
        desc: "V1 handles VAT dates, invoices, and onboarding. No tax advice. Clear escalation rules to prevent creep."
    },
    {
        num: "03",
        title: "Shared Logic",
        desc: "Email and chatbot share the same intent logic, rules, and templates to avoid duplication."
    },
    {
        num: "04",
        title: "Quality Control",
        desc: "Strict quality rules. If the system is unsure, it escalates to a human immediately. No guessing."
    },
    {
        num: "05",
        title: "Documentation",
        desc: "Full documentation of intents, flows, and rules so your system remains maintainable."
    }
];

export default function Process() {
    return (
        <section id="process" className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
            <div className="container px-4 sm:px-6 mx-auto">
                <div className="flex flex-col items-center text-center mb-12 sm:mb-16 md:mb-20">
                    <span className="text-primary font-bold tracking-widest text-xs sm:text-sm mb-3 sm:mb-4 uppercase">Our Methodology</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 px-2">How We Deliver <span className="text-gradient">Safe Automation</span></h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-white/5 -translate-y-12 z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left"
                        >
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full glass flex items-center justify-center text-xl sm:text-2xl font-black mb-6 sm:mb-8 border-primary/20 text-primary shrink-0 bg-background">
                                {step.num}
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{step.title}</h3>
                            <p className="text-white/50 text-sm leading-relaxed max-w-xs">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
