"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
    // CORE PRODUCT & POSITIONING
    {
        q: "Is this a generic AI chatbot?",
        a: "No. This is a rule-based CRM automation platform specifically designed for professional service firms. It handles repetitive admin questions only—never professional advice."
    },
    {
        q: "What exactly does the system automate?",
        a: "It automates high-volume, repetitive client communication across email, chat, booking, data cleaning and voice channels—handling enquiries like VAT deadlines, invoice resends, document status, and appointment scheduling."
    },
    {
        q: "How does your automation work with our existing systems?",
        a: "Our solutions are designed to integrate with your current tools, including Law & accounting systems, CRM, and internal workflows. We don’t replace your systems, we enhance them by automating processes and improving data flow."
    },


    // SAFETY, CONTROL & TRUST

    {
        q: "Will automation replace our staff?",
        a: "No. Our approach is built around human oversight. We automate repetitive administrative tasks, allowing your team to focus on higher-value work that requires professional judgement."
    },
    {
        q: "Can we review responses before they're sent?",
        a: "Yes. The platform starts in draft-only mode where all AI-generated responses require staff approval before sending. Auto-send is only enabled when you're ready."
    },
    {
        q: "Can we control which enquiries are automated?",
        a: "Absolutely. You define the intents, set the rules, and approve the templates. You have full control over what the system handles and what gets escalated."
    },

    // EMAIL AUTOMATION
    {
        q: "Does it work with Google Workspace / Gmail?",
        a: "Yes. We integrate natively with Google Workspace. The system monitors your shared inbox and can draft or send responses based on your chosen mode."
    },
    {
        q: "Are all email actions logged?",
        a: "Yes. Every email interaction, intent classification, and escalation decision is logged with full traceability for audit and quality review."
    },



    // BOOKING & APPOINTMENTS
    {
        q: "Can the system handle appointment bookings?",
        a: "Yes. It collects booking intent, checks availability, schedules meetings, and sends confirmations. Special case requests are escalated to staff for handling."
    },

    // DATA, PRIVACY & COMPLIANCE
    {
        q: "How do you ensure data security and compliance?",
        a: "We design all workflows with data protection, controlled access, and auditability in mind. Sensitive or uncertain cases are always escalated to your team, ensuring compliance with professional standards."
    },
    {
        q: "Can your system handle data inconsistencies or duplicates?",
        a: "Yes. Our workflows include data cleaning, standardisation, and validation processes to ensure information is accurate, consistent, and ready for use across your systems."
    },
    {
        q: "How is client data kept separate between firms?",
        a: "Each firm operates in a fully isolated environment with its own intent library, templates, and data sources. No data is shared between firms on the platform."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 relative bg-gray-50/50">
            <div className="container px-6 mx-auto max-w-4xl">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">Common <span className="text-gradient">Questions</span></h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="glass-card overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                            >
                                <span className="text-lg font-bold text-gray-900">{faq.q}</span>
                                {openIndex === index ? <Minus className="text-primary" /> : <Plus />}
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-gray-500 leading-relaxed">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
