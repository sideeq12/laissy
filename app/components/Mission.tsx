"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function Mission() {
    return (
        <section id="mission" className="py-24 bg-gray-900 border-y border-white/5 relative overflow-hidden">
            {/* Subtle Gradient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container px-6 mx-auto relative z-10">
                <div className="max-w-3xl mx-auto flex flex-col gap-20 text-center">
                    {/* Mission Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8 mx-auto">
                            <Target className="w-4 h-4" />
                            Our Mission
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                            To help professional service organisations <span className="text-primary italic">reduce repetitive work</span> through safe, rule-based automation.
                        </h2>
                        <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto">
                            We exist to preserve human oversight, compliance, and professional standards while eliminating the administrative burden of client-facing tasks.
                        </p>
                    </motion.div>

                    {/* Divider Icon */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-px h-16 bg-gradient-to-b from-primary/50 to-emerald-500/50 mx-auto"
                    />

                    {/* Vision Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-bold uppercase tracking-widest mb-8 mx-auto">
                            <Eye className="w-4 h-4" />
                            Our Vision
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                            To become a <span className="text-emerald-500 italic">trusted global partner</span> for professional service organisations.
                        </h2>
                        <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto">
                            Helping them operate more efficiently through responsible automation that enhances, not replaces, human judgement.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
