"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle2, Loader2, ArrowRight } from "lucide-react";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus("success");
    };

    return (
        <section id="contact" className="py-20 sm:py-24 relative overflow-hidden">
            <div className="container px-4 sm:px-6 mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-6 sm:p-10 md:p-14 relative overflow-hidden"
                >
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                        {/* Text Side */}
                        <div>
                            <span className="inline-block px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs sm:text-sm font-bold mb-6 uppercase tracking-wider">
                                Start Automation
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                                Ready to Safe-Guard Your Time?
                            </h2>
                            <p className="text-white/60 mb-8 leading-relaxed">
                                Join forward-thinking professional service firms automating their client enquiries safely. No "AI hype" — just solid, rule-based efficiency.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    "Safe automation only (no advice gave)",
                                    "Human-in-the-loop escalation",
                                    "2-3 week average deployment"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-white/80">
                                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Form Side */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
                            {status === "success" ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle2 className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">Message Received</h3>
                                    <p className="text-white/60">We'll be in touch within 24 hours.</p>
                                    <button
                                        onClick={() => setStatus("idle")}
                                        className="mt-6 text-sm text-primary hover:text-primary/80 font-medium"
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="text-xs font-bold text-white/50 uppercase tracking-wider mb-2 block">Full Name</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all placeholder:text-white/20"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold text-white/50 uppercase tracking-wider mb-2 block">Work Email</label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all placeholder:text-white/20"
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold text-white/50 uppercase tracking-wider mb-2 block">Firm Name (Optional)</label>
                                        <input
                                            type="text"
                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all placeholder:text-white/20"
                                            placeholder="Acme Consulting"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === "submitting"}
                                        className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-all mt-4 flex items-center justify-center gap-2 group"
                                    >
                                        {status === "submitting" ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Request Demo Access
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                    <p className="text-xs text-center text-white/30 mt-4">
                                        No commitment required. We respect your inbox.
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
