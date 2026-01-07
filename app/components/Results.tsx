"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Clock, Zap } from "lucide-react";

const results = [
    {
        title: "E-commerce Titan",
        metric: "85%",
        label: "Reduction in Support Tickets",
        icon: <Users className="w-6 h-6" />,
        img: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "SaaS Enterprise",
        metric: "$2.4M",
        label: "Annual Labor Savings",
        icon: <TrendingUp className="w-6 h-6" />,
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
    }
];

export default function Results() {
    return (
        <section id="results" className="py-24 relative bg-white/[0.01]">
            <div className="container px-6 mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Proven <span className="text-gradient">Impact</span></h2>
                    <p className="text-white/60">Real data from businesses that have integrated our AI solutions.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {results.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="glass-card overflow-hidden group"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                                <div className="absolute bottom-6 left-8">
                                    <h3 className="text-2xl font-bold">{item.title}</h3>
                                </div>
                            </div>
                            <div className="p-10 flex flex-col md:flex-row gap-8 items-center bg-white/[0.02]">
                                <div className="flex-1 text-center md:text-left">
                                    <div className="text-5xl font-black text-primary mb-2">{item.metric}</div>
                                    <div className="text-white/50 font-medium">{item.label}</div>
                                </div>
                                <div className="w-px h-12 bg-white/10 hidden md:block" />
                                <div className="flex items-center gap-4 text-white/40">
                                    {item.icon}
                                    <span className="text-sm font-semibold tracking-wider">VERIFIED RESULT</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
