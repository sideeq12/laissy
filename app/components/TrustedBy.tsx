"use client";

import { motion } from "framer-motion";

const partners: string[] = [];

export default function TrustedBy() {
    return (
        <section className="py-12 sm:py-16 md:py-20 border-y border-white/5 relative overflow-hidden bg-white">
            <div className="container px-4 sm:px-6 mx-auto">
                <p className="text-center text-xs sm:text-sm font-semibold tracking-widest text-black mb-8 sm:mb-12">
                    SPECIALISING IN PROFESSIONAL SECTORS
                </p>

                <div className="flex flex-wrap justify-center gap-6 sm:gap-12 md:gap-16 opacity-60">
                    {[
                        "Accounting Firms",
                        "Law Firms",
                        "Housing Agencies",
                        "Hospitality",
                        "Debt Recovery"
                    ].map((sector, index) => (
                        <motion.span
                            key={sector}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-lg sm:text-xl md:text-2xl text-black font-bold tracking-tight  transition-colors cursor-default"
                        >
                            {sector}
                        </motion.span>
                    ))}
                </div>
            </div>
        </section>
    );
}
