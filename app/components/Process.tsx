"use client";

import { motion } from "framer-motion";
import { Target, Search, Share2, ShieldCheck, FileText, ArrowUpRight } from "lucide-react";

const steps = [
    {
        num: "01",
        title: "Frame the Goal",
        desc: "We define CRM automation, focus on email and chatbot—safe and measurable.",
        icon: <Target className="w-6 h-6" />,
        date: "Phase 1"
    },
    {
        num: "02",
        title: "Scope Definition",
        desc: "V1 handles VAT dates & invoices. No tax advice. Clear escalation rules.",
        icon: <Search className="w-6 h-6" />,
        date: "Phase 2"
    },
    {
        num: "03",
        title: "Shared Logic",
        desc: "Email and chatbot share the same intent logic and rules.",
        icon: <Share2 className="w-6 h-6" />,
        date: "Phase 3"
    },
    {
        num: "04",
        title: "Quality Control",
        desc: "Strict quality rules. If unsure, the system escalates immediately.",
        icon: <ShieldCheck className="w-6 h-6" />,
        date: "Phase 4"
    },
    {
        num: "05",
        title: "Documentation",
        desc: "Full documentation of intents and flows for maintainability.",
        icon: <FileText className="w-6 h-6" />,
        date: "Launch"
    }
];

export default function Process() {
    return (
        <section id="process" className="py-24 relative overflow-hidden bg-white">
            {/* Background Gradient Effect */}
            <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-primary/5 rounded-tl-[百分之百] blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-primary font-bold tracking-widest text-sm uppercase mb-4"
                    >
                        Our Methodology
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900"
                    >
                        Roadmap to <span className="text-primary">Safe Automation</span>
                    </motion.h2>
                </div>

                {/* Horizontal Roadmap Container */}
                <div className="relative min-h-[500px] hidden lg:block">
                    {/* The Curved Path */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 400" fill="none" preserveAspectRatio="none">
                        <motion.path
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            d="M0,350 C200,350 300,300 500,250 C700,200 800,100 1100,50"
                            stroke="#10B981"
                            strokeWidth="3"
                            strokeDasharray="10 10"
                        />
                        {/* Static Path for glow */}
                        <path
                            d="M0,350 C200,350 300,300 500,250 C700,200 800,100 1100,50"
                            stroke="#10B981"
                            strokeWidth="3"
                            className="opacity-20 blur-sm"
                        />
                    </svg>

                    {/* Nodes and Content */}
                    <div className="absolute inset-0 flex justify-between items-start pointer-events-none">
                        {steps.map((step, idx) => {
                            // Calculate approximate positions along the curve
                            const x = (idx * 22) + 5; // Horizontal spread
                            const y = 350 - (idx * 70) - (idx > 2 ? 20 : 0); // Vertical drift
                            const isEven = idx % 2 === 0;

                            return (
                                <div
                                    key={idx}
                                    className="absolute flex flex-col items-center pointer-events-auto"
                                    style={{ left: `${x}%`, top: `${y}px` }}
                                >
                                    {/* Vertical Date / Phase Label */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.5 + idx * 0.2 }}
                                        className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap"
                                    >
                                        <span className="text-xs font-bold text-gray-400 rotate-[-90deg] inline-block mb-4 origin-bottom">
                                            {step.date}
                                        </span>
                                        <div className="w-[1px] h-8 bg-primary/30 mx-auto" />
                                    </motion.div>

                                    {/* The Node */}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 20,
                                            delay: idx * 0.3
                                        }}
                                        className="w-14 h-14 rounded-full bg-black border-4 border-primary shadow-lg shadow-primary/20 flex items-center justify-center text-primary z-10 hover:scale-110 transition-transform cursor-pointer relative group"
                                    >
                                        {step.icon}
                                        {/* Tooltip-like background circle on hover */}
                                        <div className="absolute inset-0 bg-primary/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 -z-10" />
                                    </motion.div>

                                    {/* Content Card (Alternating) */}
                                    <motion.div
                                        initial={{ opacity: 0, y: isEven ? 20 : -20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.4 }}
                                        className={`absolute ${isEven ? 'top-20' : '-bottom-48'} w-48 text-left`}
                                    >
                                        <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                                        <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                                    </motion.div>
                                </div>
                            );
                        })}

                        {/* Final Destination Arrow */}
                        <div className="absolute right-0 top-0 flex flex-col items-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 2 }}
                                className="flex flex-col items-center"
                            >
                                <span className="text-sm font-bold text-gray-900 rotate-[-90deg] mb-12 origin-bottom whitespace-nowrap">
                                    Operational Excellence
                                </span>
                                <div className="p-2 bg-primary rounded-full text-white">
                                    <ArrowUpRight className="w-6 h-6" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Mobile / Tablet Layout (Simplified Vertical) */}
                <div className="lg:hidden space-y-12">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex gap-6 items-start"
                        >
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-black border-2 border-primary flex items-center justify-center text-primary">
                                {step.icon}
                            </div>
                            <div>
                                <span className="text-xs font-bold text-primary mb-1 block">{step.date}</span>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
                                <p className="text-gray-500">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
