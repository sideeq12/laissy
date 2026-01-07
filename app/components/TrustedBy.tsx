"use client";

import { motion } from "framer-motion";

const partners = [
    "MICROSOFT", "GOOGLE", "META", "AMAZON", "OPENAI", "ANTHROPIC"
];

export default function TrustedBy() {
    return (
        <section className="py-12 sm:py-16 md:py-20 border-y border-white/5 relative overflow-hidden bg-white/[0.01]">
            <div className="container px-4 sm:px-6 mx-auto">
                <p className="text-center text-xs sm:text-sm font-semibold tracking-widest text-white/30 mb-8 sm:mb-12">
                    TRUSTED BY INNOVATIVE TEAMS WORLDWIDE
                </p>

                <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                    {partners.map((partner, index) => (
                        <motion.span
                            key={partner}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-lg sm:text-xl md:text-2xl font-black tracking-tighter"
                        >
                            {partner}
                        </motion.span>
                    ))}
                </div>
            </div>
        </section>
    );
}
