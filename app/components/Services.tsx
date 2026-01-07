"use client";

import { motion } from "framer-motion";
import { Bot, Cpu, Zap, BarChart3, Mail, Database, CheckCircle2, Users, Calendar, Phone } from "lucide-react";

const services = [
    {
        title: "Email Automation",
        desc: "Safely handles VAT deadlines, invoice requests, document status, and onboarding from your shared inbox—without giving advice.",
        icon: <Mail className="w-8 h-8" />,
        color: "bg-blue-500"
    },
    {
        title: "Website Chatbot",
        desc: "Instant, guided responses for common enquiries on your website. Light identity checks, clear boundaries, and always offers human handoff.",
        icon: <Bot className="w-8 h-8" />,
        color: "bg-emerald-500"
    },
    {
        title: "Booking Automation",
        desc: "Collects booking intent, checks availability, schedules meetings, and sends confirmations. Escalates special cases to your team.",
        icon: <Calendar className="w-8 h-8" />,
        color: "bg-purple-500"
    },
    {
        title: "Voice AI (Optional)",
        desc: "Handles inbound calls, answers admin questions, and routes intelligently. Logs outcomes and escalates complex cases.",
        icon: <Phone className="w-8 h-8" />,
        color: "bg-yellow-500"
    },
    {
        title: "Shared Intent Library",
        desc: "All channels share one brain: intent recognition, business rules, and escalation paths maintained in one place.",
        icon: <Database className="w-8 h-8" />,
        color: "bg-orange-500"
    },
    {
        title: "Human-in-the-Loop",
        desc: "Draft-only mode for trust building. Staff approve responses before sending. Full logging of every interaction.",
        icon: <CheckCircle2 className="w-8 h-8" />,
        color: "bg-pink-500"
    }
];

export default function Services() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    return (
        <section id="services" className="py-16 sm:py-20 md:py-24 bg-white/[0.02] relative overflow-hidden">
            <div className="container px-4 sm:px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 gap-6 sm:gap-8"
                >
                    <div className="max-w-xl">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 px-2">What We <span className="text-gradient">Automate</span></h2>
                        <p className="text-white/60 text-sm sm:text-base px-2">Multi-channel client enquiry automation with built-in safety, escalation, and human oversight.</p>
                    </div>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05, borderColor: "rgba(59, 130, 246, 0.5)" }}
                        whileTap={{ scale: 0.98 }}
                        className="glass px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold border-primary/20 hover:border-primary/50 transition-all w-full md:w-auto inline-block text-center text-white"
                    >
                        View Platform Demo
                    </motion.a>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                y: -8,
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                            className="glass-card p-6 sm:p-8 md:p-10 group cursor-default"
                        >
                            <motion.div
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 ${service.color}/10 text-white`}
                            >
                                {service.icon}
                            </motion.div>
                            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{service.title}</h3>
                            <p className="text-white/50 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">{service.desc}</p>
                            <div className="h-1 w-0 bg-primary group-hover:w-full transition-all duration-500" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
