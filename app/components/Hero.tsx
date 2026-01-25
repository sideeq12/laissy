"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-28 overflow-hidden bg-[#0F172A]">
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
                    alt="Professional office workspace"
                    className="w-full h-full object-cover object-center"
                />
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/80 to-transparent" />
                <div className="absolute inset-0 bg-[#0F172A]/40" />

                {/* Noise Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
                />
            </div>

            <div className="container px-6 sm:px-8 lg:px-12 relative z-10">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-[#E0E0E0] font-medium tracking-wide uppercase text-sm mb-4">
                            For Professional Firms
                        </h2>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                            Safe, Rule-Based <br className="hidden sm:block" />
                            CRM Automation
                        </h1>
                        <p className="text-[#E0E0E0] text-lg sm:text-xl mb-10 leading-relaxed font-light opacity-90 max-w-2xl">
                            Eliminate repetitive administrative work while maintaining total regulatory integrity. We design safe, human-in-the-loop systems specifically for professional service firms.
                        </p>

                        {/* Trust Signals / Stat Badges */}
                        <div className="flex flex-wrap gap-3 mb-10">
                            {[
                                "100% Human Oversight",
                                "Zero Unauthorized Advice",
                                "Compliance-First Design"
                            ].map((badge, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.4 + (idx * 0.1) }}
                                    className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm"
                                >
                                    <CheckCircle2 className="w-4 h-4 text-accent" />
                                    <span className="text-sm font-medium text-white/90">{badge}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Call to Action */}
                        <div className="flex flex-col items-start gap-4">
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-3 transition-all duration-200 shadow-lg shadow-black/20"
                            >
                                Request a Consultation
                                <ArrowRight className="w-5 h-5" />
                            </motion.a>
                            <a
                                href="#process"
                                className="text-white/60 hover:text-white text-sm font-medium transition-colors ml-2 flex items-center gap-1 group"
                            >
                                How it works
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
