"use client";
import { motion } from "framer-motion";
import { Bell, User, BarChart3, Sparkles, RefreshCw, Home, ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// import { Progress } from "@/components/ui/progress";

const stressDrivers = [
    { label: "Sleep Quality", impact: 32, color: "from-primary to-primary/60" },
    { label: "Work Load Intensity", impact: 24, color: "from-primary/80 to-primary/40" },
    { label: "Heart Rate Variability (HRV)", impact: 18, color: "from-primary/60 to-primary/30" },
    { label: "Caffeine Intake", impact: 12, color: "from-primary/50 to-primary/20" },
];

const modelDetails = [
    { label: "Confidence Level", value: "94.2%" },
    { label: "Last Updated", value: "Just now" },
    { label: "Data Points", value: "1,240" },
];

const weeklyData = [65, 45, 70, 55, 80, 60, 65];
const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const Results = () => {
    const score = 65;
    const circumference = 2 * Math.PI * 54;
    const strokeDashoffset = circumference - (score / 100) * circumference;

    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            {/* Decorative blurs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />

            {/* Navbar */}
            <nav className="relative z-10 glass border-b border-border">
                <div className="container flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center">
                            <span className="text-primary-foreground font-bold text-lg">M</span>
                        </div>
                        <span className="font-bold text-lg text-foreground">MindCheck</span>
                    </Link>
                    <div className="flex items-center gap-3">
                        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                            <Bell className="w-5 h-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                            <User className="w-5 h-5" />
                        </Button>
                        <div className="w-9 h-9 rounded-full bg-gradient-primary flex items-center justify-center">
                            <User className="w-4 h-4 text-primary-foreground" />
                        </div>
                    </div>
                </div>
            </nav>

            <main className="container relative z-10 py-10 max-w-5xl mx-auto">
                {/* Score Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-card rounded-2xl border border-border shadow-card p-8 mb-6"
                >
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Score Ring */}
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative flex-shrink-0"
                        >
                            <svg width="160" height="160" viewBox="0 0 120 120">
                                <circle cx="60" cy="60" r="54" fill="none" strokeWidth="8" className="stroke-secondary" />
                                <motion.circle
                                    cx="60"
                                    cy="60"
                                    r="54"
                                    fill="none"
                                    strokeWidth="8"
                                    strokeLinecap="round"
                                    className="stroke-primary"
                                    strokeDasharray={circumference}
                                    initial={{ strokeDashoffset: circumference }}
                                    animate={{ strokeDashoffset }}
                                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                                    transform="rotate(-90 60 60)"
                                />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1 }}
                                    className="text-4xl font-bold text-foreground"
                                >
                                    {score}
                                </motion.span>
                                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Score</span>
                            </div>
                        </motion.div>

                        {/* Info */}
                        <div className="flex-1 text-center md:text-left">
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-xs font-semibold uppercase tracking-wider text-accent-foreground mb-3">
                                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                    Prediction Complete
                                </span>
                                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Moderate Stress</h1>
                                <p className="text-muted-foreground leading-relaxed max-w-lg">
                                    Your biometric patterns suggest an elevated level of physiological arousal. This is 12% higher than your baseline
                                    from the last 7 days.
                                </p>
                            </motion.div>
                        </div>

                        {/* Icon */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 }}
                            className="hidden md:flex w-20 h-20 rounded-2xl bg-accent items-center justify-center"
                        >
                            <BarChart3 className="w-10 h-10 text-primary" />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Grid */}
                <div className="grid md:grid-cols-5 gap-6 mb-6">
                    {/* Stress Drivers */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-3 bg-card rounded-2xl border border-border shadow-card p-6"
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <Sparkles className="w-5 h-5 text-primary" />
                            <h2 className="text-lg font-bold text-foreground">Top Stress Drivers</h2>
                        </div>
                        <div className="space-y-5">
                            {stressDrivers.map((driver, i) => (
                                <motion.div
                                    key={driver.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + i * 0.1 }}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-medium text-foreground">{driver.label}</span>
                                        <span className="text-sm font-semibold text-primary">{driver.impact}% Impact</span>
                                    </div>
                                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${driver.impact * 2.5}%` }}
                                            transition={{ duration: 1, delay: 0.7 + i * 0.15, ease: "easeOut" }}
                                            className={`h-full rounded-full bg-gradient-to-r ${driver.color}`}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Model Details + Actions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="md:col-span-2 space-y-6"
                    >
                        <div className="bg-card rounded-2xl border border-border shadow-card p-6">
                            <h3 className="font-bold text-foreground mb-4">Model Details</h3>
                            <div className="space-y-3">
                                {modelDetails.map((item, i) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.6 + i * 0.1 }}
                                        className="flex items-center justify-between"
                                    >
                                        <span className="text-sm text-muted-foreground">{item.label}</span>
                                        <span className="text-sm font-semibold text-foreground">{item.value}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="space-y-3">
                            <Button size="lg" className="w-full bg-gradient-primary hover:opacity-90 shadow-lg shadow-primary/20 group" asChild>
                                <Link href="/assessment">
                                    <RefreshCw className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-500" />
                                    Run New Prediction
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" className="w-full border-border hover:bg-secondary" asChild>
                                <Link href="/">
                                    <Home className="w-4 h-4 mr-2" />
                                    Go to Home
                                </Link>
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Bottom Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                    {/* AI Insight */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="bg-card rounded-2xl border border-border shadow-card p-6"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <Sparkles className="w-5 h-5 text-primary" />
                            <h2 className="text-lg font-bold text-foreground">AI Insight</h2>
                        </div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 }}
                            className="text-muted-foreground leading-relaxed italic"
                        >
                            "Your recent data shows a correlation between late-night screen time and decreased HRV. The model predicts that
                            prioritizing 15 minutes of mindfulness before bed could reduce your morning stress score by up to 15%."
                        </motion.p>
                    </motion.div>

                    {/* Weekly Trend */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="bg-card rounded-2xl border border-border shadow-card p-6"
                    >
                        <div className="flex items-end gap-1.5 h-32 mb-4">
                            {weeklyData.map((val, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${val}%` }}
                                    transition={{ duration: 0.6, delay: 0.9 + i * 0.08, ease: "easeOut" }}
                                    className="flex-1 bg-gradient-to-t from-primary/60 to-primary/20 rounded-t-md relative group"
                                >
                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                                        {val}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <div className="flex justify-between mb-4">
                            {weekDays.map((day) => (
                                <span key={day} className="text-[10px] font-medium text-muted-foreground flex-1 text-center">
                                    {day}
                                </span>
                            ))}
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="font-bold text-foreground flex items-center gap-1.5">
                                    <TrendingUp className="w-4 h-4 text-primary" />
                                    Weekly Trend
                                </h3>
                                <p className="text-sm text-muted-foreground">Stable, with weekend spikes</p>
                            </div>
                            <span className="text-sm font-semibold text-primary flex items-center gap-1 cursor-pointer hover:underline">
                                View Full Report <ArrowRight className="w-3 h-3" />
                            </span>
                        </div>
                    </motion.div>
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-6"
                >
                    <div className="flex gap-4">
                        <span className="hover:text-foreground cursor-pointer transition-colors">Privacy Policy</span>
                        <span className="hover:text-foreground cursor-pointer transition-colors">Terms of Use</span>
                    </div>
                    <span>© 2024 MindCheck</span>
                </motion.div>
            </main>
        </div>
    );
};

export default Results;
