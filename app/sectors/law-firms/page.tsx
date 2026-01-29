"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import {
    AlertCircle,
    CheckCircle2,
    ShieldCheck,
    Scale,
    Clock,
    UserCheck,
    ChevronLeft,
    FileText,
    MessageSquare,
    Zap
} from "lucide-react";
import Link from "next/link";

export default function LawFirmsPage() {
    return (
        <main className="min-h-screen bg-white selection:bg-primary/30">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-gray-900">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2000&auto=format&fit=crop"
                        alt="Law firm office"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
                </div>

                <div className="container px-6 mx-auto relative z-10">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-white/60 hover:text-primary transition-colors mb-8 text-sm font-medium group"
                    >
                        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Law Firms
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed font-light">
                            Specialised CRM automation for high-compliance legal environments. Maintain professional standards while eliminating repetitive admin.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Challenges Section */}
            <section className="py-24 bg-gray-50">
                <div className="container px-6 mx-auto">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-16">
                            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">Sector Challenges</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Common challenges we address</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    title: "Enquiry Overload",
                                    desc: "High volumes from clients seeking frequent updates on case progress.",
                                    icon: <Zap className="w-6 h-6 text-primary" />
                                },
                                {
                                    title: "Repetitive Tasks",
                                    desc: "Constant questions about onboarding, document requirements, and next steps.",
                                    icon: <MessageSquare className="w-6 h-6 text-primary" />
                                },
                                {
                                    title: "Fee-Earner Distraction",
                                    desc: "Critical केस-work being interrupted by administrative enquiries.",
                                    icon: <Clock className="w-6 h-6 text-primary" />
                                },
                                {
                                    title: "Regulatory Pressure",
                                    desc: "Strict confidentiality and compliance requirements in every interaction.",
                                    icon: <ShieldCheck className="w-6 h-6 text-primary" />
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-6">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* How We Help Section */}
            <section className="py-24 bg-white">
                <div className="container px-6 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
                        <div>
                            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">Our Solution</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">How we help law firms</h2>

                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Automated Intake",
                                        desc: "Handle status-related client enquiries automatically based on your CRM data."
                                    },
                                    {
                                        title: "Onboarding Guidance",
                                        desc: "Guide clients through document submission and onboarding without manual follow-ups."
                                    },
                                    {
                                        title: "Smart Escalation",
                                        desc: "Legal or sensitive matters are instantly escalated to the designated staff members."
                                    },
                                    {
                                        title: "Full Audit Trails",
                                        desc: "Maintain comprehensive logs for every automated interaction for compliance reviews."
                                    }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 group">
                                        <div className="mt-1">
                                            <CheckCircle2 className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                                            <p className="text-gray-500 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1000&auto=format&fit=crop"
                                alt="Legal professional using dashboard"
                                className="w-full rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-8 rounded-2xl shadow-xl max-w-xs hidden md:block">
                                <p className="text-2xl font-bold mb-2">14h+</p>
                                <p className="text-sm opacity-80 font-medium leading-relaxed">Average weekly admin time saved per fee-earner.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Compliance Callout */}
            <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                <div className="container px-6 mx-auto relative z-10 text-center">
                    <div className="max-w-3xl mx-auto">
                        <Scale className="w-12 h-12 text-primary mx-auto mb-8" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Built with compliance in mind</h2>
                        <p className="text-gray-400 text-lg mb-12">
                            Our systems are designed to supplement, not replace, professional expertise.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { title: "No legal advice", desc: "Responses are strictly rule-based and process-oriented." },
                                { title: "Clear escalation", desc: "Sensitive enquiries are always routed to humans." },
                                { title: "Total Control", desc: "Designed around strict confidentiality and firm standards." }
                            ].map((item, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm">
                                    <h4 className="font-bold text-primary mb-3 uppercase tracking-wider text-xs">{item.title}</h4>
                                    <p className="text-sm text-gray-300 font-medium">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
