"use client";

import { motion } from "framer-motion";
import { Bot, Twitter, Linkedin, Github, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative pt-24 pb-12 overflow-hidden bg-black text-white">
            <div className="container px-6 mx-auto border-t border-white/10 pt-12">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-2">
                        <div className="flex items-center mb-6">
                            <img src="/logopng.png" alt="Lovissa Consulting Logo" className="h-8 w-auto object-contain brightness-0 invert" />
                        </div>
                        <p className="text-white/60 max-w-sm leading-relaxed mb-4">
                            CRM automation for professional firms. Reducing admin workload with safe, human-in-the-loop systems.
                        </p>
                        <p className="text-white/40 text-sm mb-8">
                            Address: 26, The Monico. Pantbach Road. CF14 1UU
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-primary transition-all"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-primary transition-all"><Linkedin className="w-5 h-5" /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-primary transition-all"><Github className="w-5 h-5" /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-white/40">Company</h4>
                        <ul className="space-y-4 text-white/60 text-sm font-medium">
                            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Services</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-white/40">Legal</h4>
                        <ul className="space-y-4 text-white/60 text-sm font-medium">
                            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/10 text-xs font-bold text-white/40 tracking-widest uppercase">
                    <p>© 2026 LOVISSA CONSULTING LTD. ALL RIGHTS RESERVED.</p>
                    <div className="flex gap-8">
                        <a href="mailto:hello@neuronai.co" className="flex items-center gap-2 hover:text-primary transition-colors">
                            <Mail className="w-4 h-4 text-primary" />
                            HELLO@LOVISSA.LTD
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
