"use client";

import Link from "next/link";
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
                        { name: "Accounting Firms", href: "#" },
                        { name: "Law Firms", href: "#" },
                        { name: "Housing Agencies", href: "#" }
                    ].map((sector, index) => (
                        <motion.div
                            key={sector.name}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                href={sector.href}
                                className={`text-lg sm:text-xl md:text-2xl text-black font-bold tracking-tight transition-all ${sector.href !== "#"
                                    ? "hover:text-primary cursor-pointer border-b-2 border-transparent hover:border-primary/30"
                                    : "cursor-default"
                                    }`}
                            >
                                {sector.name}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
