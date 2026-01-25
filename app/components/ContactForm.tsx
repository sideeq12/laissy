"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle2, Loader2, ArrowRight } from "lucide-react";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
    const [selectedInterest, setSelectedInterest] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus("success");
    };

    return (
        <section id="contact" className="py-20 sm:py-24 relative overflow-hidden">
            <div className="container px-4 sm:px-6 mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-6 sm:p-10 md:p-14 relative overflow-hidden"
                >
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    <div className="flex flex-col items-center text-center relative z-10">
                        {/* Text Side */}
                        <div className="max-w-2xl mb-16">
                            <span className="inline-block px-4 py-2 rounded-full border border-primary/20 bg-black text-white text-xs sm:text-sm font-bold mb-6 uppercase tracking-wider">
                                Start Automation
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                                Ready to Safe-Guard Your Time?
                            </h2>
                            <p className="text-gray-500 mb-8 leading-relaxed max-w-xl mx-auto">
                                Join forward-thinking professional service firms automating their client enquiries safely. No "AI hype" — just solid, rule-based efficiency.
                            </p>

                            <ul className="flex flex-wrap justify-center gap-6">
                                {[
                                    "Safe automation only (no advice gave)",
                                    "Human-in-the-loop escalation",
                                    "Instant deployment"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-gray-600">
                                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-3 h-3 text-primary" />
                                        </div>
                                        <span className="text-sm font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Form Side */}
                        <div className="bg-white rounded-2xl p-6 sm:p-10 w-full max-w-2xl mx-auto">
                            {status === "success" ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle2 className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Message Received</h3>
                                    <p className="text-gray-600 max-w-xs mx-auto">
                                        Thanks. We review every request manually and will follow up if there's a fit.
                                    </p>
                                    <button
                                        onClick={() => setStatus("idle")}
                                        className="mt-6 text-sm text-primary hover:text-primary/80 font-medium"
                                    >
                                        Send another request
                                    </button>
                                </motion.div>
                            ) : (
                                <>
                                    <h4 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h4>
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        {/* 1. Work Email (High Signal Filter) */}
                                        <div>
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">
                                                Work Email <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all placeholder:text-gray-400"
                                                placeholder="name@company.com"
                                            />
                                        </div>

                                        {/* 2. Company Name */}
                                        <div>
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">
                                                Company Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all placeholder:text-gray-400"
                                                placeholder="Acme Consulting Ltd"
                                            />
                                        </div>

                                        {/* 3. Role (Qualifier) */}
                                        <div>
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">
                                                Your Role <span className="text-red-500">*</span>
                                            </label>
                                            <select
                                                required
                                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all [&>option]:bg-white"
                                                defaultValue=""
                                            >
                                                <option value="" disabled>Select your role...</option>
                                                <option value="partner">Partner / Founder</option>
                                                <option value="manager">Manager / Operations</option>
                                                <option value="admin">Admin / Support</option>
                                                <option value="technical">IT / Technical</option>
                                            </select>
                                        </div>

                                        {/* 4. Automation Interest */}
                                        <div>
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">
                                                What do you want to automate?
                                            </label>
                                            <select
                                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all [&>option]:bg-white"
                                                value={selectedInterest}
                                                onChange={(e) => setSelectedInterest(e.target.value)}
                                            >
                                                <option value="" disabled>Select an option...</option>
                                                <option value="email">Email enquiries</option>
                                                <option value="chat">Website chat</option>
                                                <option value="booking">Booking / scheduling</option>
                                                <option value="voice">Voice / phone calls</option>
                                            </select>
                                        </div>

                                        {/* 5. Problem Statement (Value) */}
                                        <div>
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">
                                                What problem are you trying to solve? <span className="text-red-500">*</span>
                                            </label>
                                            <textarea
                                                required
                                                rows={6}
                                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all placeholder:text-gray-400 resize-none"
                                                placeholder="e.g. Inbox overload, slow response times..."
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={status === "submitting"}
                                            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-all mt-6 flex items-center justify-center gap-2 group shadow-lg shadow-primary/20"
                                        >
                                            {status === "submitting" ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    Reviewing...
                                                </>
                                            ) : (
                                                <>
                                                    Request a Consultation
                                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                        <p className="text-xs text-center text-gray-400 mt-4">
                                            We manually review every request. Higher quality = faster response.
                                        </p>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
