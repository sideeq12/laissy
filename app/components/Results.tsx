"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Clock, Shield, BarChart3, Mail, Bot, CheckCircle2 } from "lucide-react";

const results = [
    {
        title: "London Law Firm",
        metric: "92%",
        label: "Enquiry Response Accuracy",
        icon: <Shield className="w-5 h-5" />,
        img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "City Finance Group",
        metric: "14h",
        label: "Saved Per Week / Staff",
        icon: <Clock className="w-5 h-5" />,
        img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Operations Consult",
        metric: "78%",
        label: "Admin Cost Reduction",
        icon: <TrendingUp className="w-5 h-5" />,
        img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Healthcare Admin",
        metric: "0.2s",
        label: "Average Response Time",
        icon: <BarChart3 className="w-5 h-5" />,
        img: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Real Estate Ops",
        metric: "100%",
        label: "Compliance Adherence",
        icon: <CheckCircle2 className="w-5 h-5" />,
        img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Compliance Tech",
        metric: "650k",
        label: "Enquiries Handled / Yr",
        icon: <Bot className="w-5 h-5" />,
        img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "HR Hub UK",
        metric: "88%",
        label: "Client Satisfaction Rate",
        icon: <Users className="w-5 h-5" />,
        img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Operations Team",
        metric: "4x",
        label: "Scalability Multiplier",
        icon: <Mail className="w-5 h-5" />,
        img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop"
    }
];

export default function Results() {
    return (
        <section id="results" className="py-24 relative bg-gray-50/30 font-medium">
            <div className="container px-6 mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">Proven <span className="text-gradient">Impact</span></h2>
                    <p className="text-gray-500">Real-world operational results from professional service firms.</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {results.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card !rounded-none overflow-hidden group flex flex-col h-full"
                        >
                            <div className="h-48 overflow-hidden relative !rounded-none">
                                <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                                <div className="absolute bottom-4 left-6">
                                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                </div>
                            </div>
                            <div className="p-6 flex flex-col gap-4 bg-white grow">
                                <div className="text-center md:text-left">
                                    <div className="text-3xl font-black text-primary mb-1">{item.metric}</div>
                                    <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">{item.label}</div>
                                </div>
                                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center gap-3 text-gray-300">
                                    {item.icon}
                                    <span className="text-[10px] font-bold tracking-widest uppercase">Verified Result</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
