"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from "chart.js";
import { gsap } from "gsap";
import { TrendingDown, Clock, CheckCircle2, Shield } from "lucide-react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export default function Impact() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const statsRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Animate stats count-up when in view
    useEffect(() => {
        if (isInView) {
            statsRefs.current.forEach((ref, index) => {
                if (ref) {
                    const target = ref.getAttribute("data-target");
                    const isPercentage = target?.includes("%");
                    const numericValue = parseFloat(target?.replace(/[^0-9.]/g, "") || "0");

                    gsap.fromTo(
                        ref,
                        { textContent: 0 },
                        {
                            textContent: numericValue,
                            duration: 2,
                            delay: index * 0.2,
                            ease: "power2.out",
                            snap: { textContent: isPercentage ? 1 : 0.1 },
                            onUpdate: function () {
                                const current = gsap.getProperty(ref, "textContent") as number;
                                ref.textContent = isPercentage
                                    ? `${Math.round(current)}%`
                                    : `${current.toFixed(1)}`;
                            },
                        }
                    );
                }
            });
        }
    }, [isInView]);

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: "rgba(255, 255, 255, 0.7)",
                    font: { size: 12 }
                }
            },
            tooltip: {
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                padding: 12,
                titleColor: "#fff",
                bodyColor: "#fff",
                borderColor: "rgba(59, 130, 246, 0.3)",
                borderWidth: 1
            }
        },
        scales: {
            x: {
                grid: { color: "rgba(255, 255, 255, 0.05)" },
                ticks: { color: "rgba(255, 255, 255, 0.6)" }
            },
            y: {
                grid: { color: "rgba(255, 255, 255, 0.05)" },
                ticks: { color: "rgba(255, 255, 255, 0.6)" }
            }
        }
    };

    // Data for charts
    const inboxData = {
        labels: ["Before Automation", "After Automation"],
        datasets: [{
            label: "Weekly Inbound Enquiries",
            data: [420, 118],
            backgroundColor: ["rgba(239, 68, 68, 0.6)", "rgba(16, 185, 129, 0.6)"],
            borderColor: ["rgb(239, 68, 68)", "rgb(16, 185, 129)"],
            borderWidth: 2
        }]
    };

    const timeSavedData = {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 6", "Week 8"],
        datasets: [{
            label: "Hours Saved Per Week",
            data: [1.2, 2.8, 4.5, 5.8, 6.2, 6.4],
            borderColor: "rgb(59, 130, 246)",
            backgroundColor: "rgba(59, 130, 246, 0.1)",
            fill: true,
            tension: 0.4,
            borderWidth: 3
        }]
    };

    const automationSplitData = {
        labels: ["Automated Safely", "Draft-Only (Reviewed)", "Escalated to Human"],
        datasets: [{
            data: [72, 18, 10],
            backgroundColor: [
                "rgba(16, 185, 129, 0.8)",
                "rgba(59, 130, 246, 0.8)",
                "rgba(251, 191, 36, 0.8)"
            ],
            borderColor: ["rgb(16, 185, 129)", "rgb(59, 130, 246)", "rgb(251, 191, 36)"],
            borderWidth: 2
        }]
    };

    const responseTimeData = {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [{
            label: "Average Response Time (minutes)",
            data: [34, 12, 4, 0.8],
            borderColor: "rgb(139, 92, 246)",
            backgroundColor: "rgba(139, 92, 246, 0.2)",
            fill: true,
            tension: 0.4,
            borderWidth: 3
        }]
    };

    const stats = [
        { icon: <CheckCircle2 className="w-6 h-6" />, value: "72%", label: "Enquiries Automated Safely" },
        { icon: <Clock className="w-6 h-6" />, value: "6.2", label: "Hours Saved per Week" },
        { icon: <TrendingDown className="w-6 h-6" />, value: "72%", label: "Inbox Volume Reduction" },
        { icon: <Shield className="w-6 h-6" />, value: "10%", label: "Escalation Rate (Good!)" }
    ];

    return (
        <section ref={sectionRef} id="impact" className="py-16 sm:py-20 md:py-24 bg-white/[0.02] relative overflow-hidden">
            <div className="container px-4 sm:px-6 mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <span className="text-primary font-bold tracking-widest text-xs sm:text-sm mb-3 sm:mb-4 uppercase block">
                        Empirical Evidence
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 px-2">
                        Measured Impact, Not <span className="text-gradient">Marketing Claims</span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base px-4">
                        Real operational outcomes from pilot deployments and production usage. Conservative estimates, no exaggeration.
                    </p>
                </motion.div>

                {/* Key Stats Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="glass-card p-4 sm:p-6 text-center"
                        >
                            <div className="flex justify-center mb-3 sm:mb-4 text-primary">
                                {stat.icon}
                            </div>
                            <div
                                ref={(el) => { statsRefs.current[index] = el; }}
                                data-target={stat.value}
                                className="text-2xl sm:text-3xl md:text-4xl font-black text-primary mb-1 sm:mb-2"
                            >
                                0
                            </div>
                            <p className="text-xs sm:text-sm text-white/60">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Charts Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
                    {/* Chart 1: Inbox Reduction */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="glass-card p-5 sm:p-6 md:p-8"
                    >
                        <h3 className="text-lg sm:text-xl font-bold mb-2">Inbox Volume Before vs After</h3>
                        <p className="text-xs sm:text-sm text-white/50 mb-4 sm:mb-6">Weekly inbound client enquiries handled by the system</p>
                        <div className="h-64 sm:h-80">
                            <Bar data={inboxData} options={{ ...chartOptions, scales: chartOptions.scales }} />
                        </div>
                        <p className="text-xs text-white/40 mt-4 italic">Based on pilot deployment averaging 3 firms over 8 weeks.</p>
                    </motion.div>

                    {/* Chart 2: Time Saved */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="glass-card p-5 sm:p-6 md:p-8"
                    >
                        <h3 className="text-lg sm:text-xl font-bold mb-2">Weekly Staff Time Recovered</h3>
                        <p className="text-xs sm:text-sm text-white/50 mb-4 sm:mb-6">Cumulative hours saved per week as system learns</p>
                        <div className="h-64 sm:h-80">
                            <Line data={timeSavedData} options={{ ...chartOptions, scales: chartOptions.scales }} />
                        </div>
                        <p className="text-xs text-white/40 mt-4 italic">Time savings plateau as system reaches optimal performance.</p>
                    </motion.div>

                    {/* Chart 3: Automation Split */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="glass-card p-5 sm:p-6 md:p-8"
                    >
                        <h3 className="text-lg sm:text-xl font-bold mb-2">How Enquiries Are Handled</h3>
                        <p className="text-xs sm:text-sm text-white/50 mb-4 sm:mb-6">Distribution across automation confidence levels</p>
                        <div className="h-64 sm:h-80 flex items-center justify-center">
                            <Doughnut data={automationSplitData} options={{ ...chartOptions, scales: undefined }} />
                        </div>
                        <p className="text-xs text-white/40 mt-4 italic">10% escalation rate ensures safety and human oversight.</p>
                    </motion.div>

                    {/* Chart 4: Response Time */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="glass-card p-5 sm:p-6 md:p-8"
                    >
                        <h3 className="text-lg sm:text-xl font-bold mb-2">Average Client Response Time</h3>
                        <p className="text-xs sm:text-sm text-white/50 mb-4 sm:mb-6">From hours to near-instant for common enquiries</p>
                        <div className="h-64 sm:h-80">
                            <Line data={responseTimeData} options={{ ...chartOptions, scales: chartOptions.scales }} />
                        </div>
                        <p className="text-xs text-white/40 mt-4 italic">Response time measured from enquiry received to first reply sent.</p>
                    </motion.div>
                </div>

                {/* Trust Signal */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="glass-card p-6 sm:p-8 text-center border-primary/20"
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Shield className="w-5 h-5 text-primary" />
                        <p className="text-sm sm:text-base font-semibold text-white/80">
                            Automation is intentionally limited. When confidence drops, the system escalates.
                        </p>
                    </div>
                    <p className="text-xs sm:text-sm text-white/50">
                        Based on pilot deployments and early production usage. Results vary by firm size, enquiry volume, and complexity.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
