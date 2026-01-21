"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";

export default function ProblemSolution() {
    const points: { problem: string; solution: string; desc: string; metric: string }[] = [



    ];

    return (
        <section id="problem-solution" className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
            <div className="container bg-white px-4 sm:px-6 mx-auto">
                <div className="text-center mb-12 sm:mb-16 md:mb-20">
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 rounded-full border border-gray-200 bg-white  text-black text-xs sm:text-sm font-bold mb-4 uppercase tracking-wider"
                    >
                        The Problem with Manual Operations
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-2"
                    >
                        From Overwhelmed to <span className="text-primary">Optimized</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-black max-w-2xl mx-auto text-sm sm:text-base px-4"
                    >
                        Professional service firms waste hours on repetitive enquiries. Here's how we solve that—safely.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {points.map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            className="glass-card relative overflow-hidden group h-full flex flex-col"
                        >
                            {/* Problem Section (Top) */}
                            <div className="p-6 sm:p-8 flex-1 relative z-10 bg-white transition-colors duration-500 group-hover:from-red-500/0">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20 shrink-0">
                                        <XCircle className="w-5 h-5 text-red-400" />
                                    </div>
                                    <h3 className="text-lg font-bold text-red-400/90">{point.problem}</h3>
                                </div>


                            </div>

                            {/* Animated Connector */}
                            <div className="relative h-px w-full bg-white ">
                                <div className="absolute left-1/2 -top-3 -translate-x-1/2 w-6 h-6 rounded-full bg-white border border-gray-100 flex items-center justify-center z-20 shadow-xl group-hover:border-primary/50 group-hover:scale-110 transition-all duration-500">
                                    <ArrowRight className="w-3 h-3 text-gray-300 group-hover:text-primary group-hover:rotate-90 transition-all duration-500" />
                                </div>
                            </div>

                            {/* Solution Section (Bottom) */}
                            <div className="p-6 sm:p-8 flex-1 relative z-10 bg-gradient-to-t from-primary/5 to-transparent transition-colors duration-500 group-hover:from-primary/10 group-hover:to-primary/5">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0 group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-primary transition-colors duration-300">{point.solution}</h3>
                                </div>
                                <p className="text-black text-sm leading-relaxed mb-6 group-hover:text-gray-700 transition-colors">
                                    {point.desc}
                                </p>

                                {/* Metric Badge */}
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300 w-full justify-center">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                    </span>
                                    <span className="text-xs font-bold text-primary tracking-wide uppercase">{point.metric}</span>
                                </div>
                            </div>

                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-center mt-12 sm:mt-16"
                >
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="glass px-8 py-4 rounded-full font-bold border-primary/30 hover:border-primary/60 transition-all inline-flex items-center gap-2 group text-gray-800"
                    >
                        See How It Works
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
