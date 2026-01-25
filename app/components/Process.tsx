"use client";

import { motion } from "framer-motion";

import { Target, Search, Share2, ShieldCheck, FileText } from "lucide-react";

const steps = [
    {
        num: "01",
        title: "Frame the Goal",
        desc: "We define CRM automation, not generic AI. Focus on email and chatbot—safe, repeatable, measurable.",
        icon: <Target className="w-8 h-8" />
    },
    {
        num: "02",
        title: "Scope Definition",
        desc: "V1 handles VAT dates, invoices, and onboarding. No tax advice. Clear escalation rules to prevent creep.",
        icon: <Search className="w-8 h-8" />
    },
    {
        num: "03",
        title: "Shared Logic",
        desc: "Email and chatbot share the same intent logic, rules, and templates to avoid duplication.",
        icon: <Share2 className="w-8 h-8" />
    },
    {
        num: "04",
        title: "Quality Control",
        desc: "Strict quality rules. If the system is unsure, it escalates to a human immediately. No guessing.",
        icon: <ShieldCheck className="w-8 h-8" />
    },
    {
        num: "05",
        title: "Documentation",
        desc: "Full documentation of intents, flows, and rules so your system remains maintainable.",
        icon: <FileText className="w-8 h-8" />
    }
];

export default function Process() {
    return (
        <section id="process" className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
            <div className="container bg-white px-4 sm:px-6 mx-auto max-w-5xl">
                <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
                    <span className="text-black font-bold tracking-widest text-xs sm:text-sm mb-3 sm:mb-4 uppercase">Our Methodology</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 px-2">How We Deliver <span className="text-black">Safe Automation</span></h2>
                </div>

                <div className="space-y-12 sm:space-y-16 relative">
                    {/* Vertical line for desktop */}
                    <div className="hidden md:block absolute left-[39px] top-0 bottom-0 w-0.5 bg-gray-100 z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12"
                        >
                            <div className="flex-shrink-0 w-20 h-20 rounded-2xl glass flex flex-col items-center justify-center border-primary/20 text-primary bg-white shadow-xl relative">
                                <span className="absolute -top-3 -left-3 bg-black text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-20">
                                    {step.num}
                                </span>
                                {step.icon}
                            </div>
                            <div className="flex-1 text-center md:text-left pt-2">
                                <h3 className="text-2xl sm:text-3xl font-black mb-4 text-black tracking-tight">{step.title}</h3>
                                <p className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-3xl">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
