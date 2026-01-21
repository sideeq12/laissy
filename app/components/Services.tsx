"use client";

import { motion } from "framer-motion";
import { Bot, Cpu, Mail } from "lucide-react";

const services = [
    {
        title: "CRM Automation",
        desc: "Automate CRM updates and client communication with safe, firm-approved responses. Always includes clear escalation paths to your team.",
        icon: <Mail className="w-8 h-8" />,
        color: "bg-blue-500"
    },
    {
        title: "Email & Chat Workflow Design",
        desc: "We design intent-based workflows that mirror your best staff. You approve every response template before it goes live.",
        icon: <Bot className="w-8 h-8" />,
        color: "bg-emerald-500"
    },
    {
        title: "Automation Strategy",
        desc: "Process mapping, risk assessment, and phased rollout planning (Pilot → Scale). We ensure compliance and staff buy-in.",
        icon: <Cpu className="w-8 h-8" />,
        color: "bg-purple-500"
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
                ease: [0.22, 1, 0.36, 1] as any
            }
        }
    };

    return (
        <section id="services" className="py-16 sm:py-20 md:py-24 bg-white relative text-blue-900 overflow-hidden">
            <div className="container px-4 sm:px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 gap-6 sm:gap-8"
                >
                    <div className="max-w-xl">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 px-2">Core <span className="text-black">Services</span></h2>
                        <p className="text-gray-500 text-sm sm:text-base px-2">Specialized automation consulting for high-compliance professional environments.</p>
                    </div>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05, borderColor: "rgba(59, 130, 246, 0.5)" }}
                        whileTap={{ scale: 0.98 }}
                        className="glass px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold border-primary/20 hover:border-primary/50 transition-all w-full md:w-auto inline-block text-center text-gray-800"
                    >
                        Request a Consultation
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
                            className="glass-card p-6 sm:p-8 md:p-10 group cursor-pointer"
                        >
                            <motion.div
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 ${service.color}/10 text-primary`}
                            >
                                {service.icon}
                            </motion.div>
                            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">{service.title}</h3>
                            <p className="text-gray-500 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">{service.desc}</p>
                            <div className="h-1 w-0 bg-black group-hover:w-full transition-all duration-500" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
