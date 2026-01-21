"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Chen",
        role: "Managing Partner @ Precision Accounting",
        content: "Lovissa Consulting Ltd automated our most repetitive client enquiries. Our team now focuses on advisory work instead of answering the same VAT questions repeatedly.",
        avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
        name: "James Wilson",
        role: "Operations Director @ Wilson Tax Services",
        content: "The draft-only mode gave us confidence to start. Now we trust the system to auto-send for simple enquiries, saving hours every week.",
        avatar: "https://i.pravatar.cc/150?u=james"
    },
    {
        name: "Emma Rodriguez",
        role: "Practice Manager @ Coastal Bookkeeping",
        content: "Client satisfaction improved immediately. They get instant responses to booking and invoice questions, and we handle complex cases with full context.",
        avatar: "https://i.pravatar.cc/150?u=elena"
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 relative">
            <div className="container px-6 mx-auto">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-20 line-height-tight text-gray-900">Voices of <span className="text-gradient">Success</span></h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-8 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex gap-1 mb-6 text-yellow-500">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                                </div>
                                <p className="text-gray-600 italic leading-relaxed mb-8">&quot;{t.content}&quot;</p>
                            </div>

                            <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-primary/30" />
                                <div>
                                    <h4 className="font-bold text-sm text-gray-900">{t.name}</h4>
                                    <p className="text-gray-500 text-xs">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
