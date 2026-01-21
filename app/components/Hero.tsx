"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);


    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 md:pt-24 overflow-hidden">
            {/* Background Image with Parallax */}
            <motion.div style={{ y }} className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
                    alt="Professional office workspace"
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/60" />
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 -left-1/4 w-64 h-64 md:w-96 md:h-96 bg-primary/10 rounded-full blur-[128px] z-0"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 -right-1/4 w-64 h-64 md:w-96 md:h-96 bg-accent/10 rounded-full blur-[128px] z-0"
            />

            <motion.div className="container px-4 sm:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="inline-block px-3 py-1.5 sm:px-4 rounded-full border border-white/10 bg-white/5 text-xs sm:text-sm font-medium text-primary mb-4 sm:mb-6"
                    >
                        Safe, Rule-Based CRM Automation
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 sm:mb-8 leading-[1.2] max-w-4xl mx-auto px-2"
                    >
                        CRM Automation <br />
                        <span className="text-gradient">For Professional Firms</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed px-2 font-light"
                    >
                        Lovissa Consulting is a UK-based consulting firm specialising in client operations and automation. We design systems that reduce admin workload while maintaining compliance and human oversight.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4"
                    >
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all group text-sm sm:text-base"
                        >
                            Request a Consultation
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* Stats with Stagger Animation */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-xs sm:max-w-4xl mx-auto px-4"
                >
                    {[
                        { value: "100%", label: "Human Oversight" },
                        { value: "Zero", label: "Unauthorized Advice" },
                        { value: "UK", label: "Based Consulting" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="glass-card p-5 sm:p-6 text-center cursor-default"
                        >
                            <p className="text-2xl sm:text-3xl font-black text-primary mb-1 sm:mb-2">{stat.value}</p>
                            <p className="text-xs sm:text-sm text-gray-500">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section >
    );
}
