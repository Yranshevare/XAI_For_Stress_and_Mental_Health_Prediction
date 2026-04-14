"use client";
import { motion } from "framer-motion";
import { Bell, User, BarChart3, Sparkles, RefreshCw, Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
// import { Progress } from "@/components/ui/progress";

const stressDrivers = [
    { label: "Sleep Quality", impact: 32, color: "from-primary to-primary/60" },
    { label: "Work Load Intensity", impact: 24, color: "from-primary/80 to-primary/40" },
    { label: "Heart Rate Variability (HRV)", impact: 18, color: "from-primary/60 to-primary/30" },
    { label: "Caffeine Intake", impact: 12, color: "from-primary/50 to-primary/20" },
];

const Results = () => {
    const searchParams = useSearchParams();
    const [resultData, setResultData] = useState<any>(null);
    const [waterfallPlot, setWaterfallPlot] = useState<string | null>(null);

    useEffect(() => {
        try {
            const encodedResult = searchParams.get("result");
            if (encodedResult) {
                const decoded = JSON.parse(decodeURIComponent(encodedResult));
                setResultData(decoded);
                console.log("Decoded result data:", decoded);
            }
        } catch (error) {
            console.error("Error decoding result:", error);
        }

        try {
            const storedPlot = sessionStorage.getItem("waterfall_plot");
            if (storedPlot) {
                const plotValue = storedPlot.startsWith("data:image") ? storedPlot : `data:image/png;base64,${storedPlot.replace(/^"|"$/g, "")}`;
                console.log(plotValue)
                setWaterfallPlot(plotValue);
            }
        } catch (error) {
            console.error("Error reading waterfall plot from sessionStorage:", error);
            setWaterfallPlot(null);
        }
    }, [searchParams]);

    const score = Math.max(resultData?.prediction_probability?.["0"] || 0, resultData?.prediction_probability?.["1"] || 0) * 100;
    const circumference = 2 * Math.PI * 54;
    const strokeDashoffset = circumference - (score / 100) * circumference;

    const stressLabel = score >= 80 ? "High Stress" : score >= 60 ? "Moderate Stress" : score >= 40 ? "Mild Stress" : "Low Stress";
    const stressDescription =
        score >= 80
            ? "Your biometric patterns show significant physiological arousal. Consider immediate stress-relief actions such as deep breathing or a short walk."
            : score >= 60
            ? "Your body is under noticeable strain. Try reducing stimuli and taking one focused recovery break today."
            : score >= 40
            ? "Your stress level is moderate. Keep tracking your data and maintain healthy routines."
            : "Your stress level is low. Continue with your current self-care habits and stay mindful of small changes.";

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
                                    {score.toFixed(2)}
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
                                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stressLabel}</h1>
                                <p className="text-muted-foreground leading-relaxed max-w-lg">
                                    {stressDescription}
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
                <div className="grid md:grid-cols-2 gap-6 mb-6 h-96">
                    {/* Stress Drivers / LIME Features */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-card rounded-2xl border border-border shadow-card p-6 h-full flex flex-col"
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <Sparkles className="w-5 h-5 text-primary" />
                            <h2 className="text-lg font-bold text-foreground">Top Stress Drivers (LIME)</h2>
                        </div>
                        <div className="space-y-5 max-h-64 overflow-y-auto flex-1">
                            {resultData?.lime_top_features && resultData.lime_top_features.length > 0
                                ? resultData.lime_top_features.map((driver: any, i: number) => (
                                      <motion.div
                                          key={driver.feature}
                                          initial={{ opacity: 0, x: -20 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{ delay: 0.5 + i * 0.1 }}
                                      >
                                          <div className="flex items-center justify-between mb-2">
                                              <span className="text-sm font-medium text-foreground">{driver.feature}</span>
                                              <span className="text-sm font-semibold text-primary">{(driver.importance * 100).toFixed(2)}%</span>
                                          </div>
                                          <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                              <motion.div
                                                  initial={{ width: 0 }}
                                                  animate={{ width: `${Math.min(Math.abs(driver.importance) * 100, 100)}%` }}
                                                  transition={{ duration: 1, delay: 0.7 + i * 0.15, ease: "easeOut" }}
                                                  className={`h-full rounded-full bg-gradient-to-r ${
                                                      driver.importance >= 0 ? "from-primary to-primary/60" : "from-destructive to-destructive/60"
                                                  }`}
                                              />
                                          </div>
                                      </motion.div>
                                  ))
                                : stressDrivers.map((driver, i) => (
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

                    {/* SHAP Features */}
                    {resultData?.shap_top_features && resultData.shap_top_features.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-card rounded-2xl border border-border shadow-card p-6 h-full flex flex-col"
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <BarChart3 className="w-5 h-5 text-primary" />
                                <h2 className="text-lg font-bold text-foreground">Top Features (SHAP)</h2>
                            </div>
                            <div className="space-y-3 max-h-64 overflow-y-auto flex-1">
                                {resultData.shap_top_features.map((item: any, i: number) => (
                                    <motion.div
                                        key={item.feature}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.5 + i * 0.05 }}
                                        className="flex items-center justify-between p-2 bg-secondary rounded-md"
                                    >
                                        <span className="text-sm font-medium text-foreground">{item.feature}</span>
                                        <span className={`text-sm font-semibold ${item.importance >= 0 ? "text-primary" : "text-destructive"}`}>
                                            {item.importance.toFixed(3)}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Model Details + Prediction Probability */}
                    {/* <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="space-y-6 h-full">
                        <div className="bg-card rounded-2xl border border-border shadow-card p-6 flex-1">
                            <h3 className="font-bold text-foreground mb-4">Prediction Probability</h3>
                            <div className="space-y-3">
                                {resultData?.prediction_probability
                                    ? Object.entries(resultData.prediction_probability).map(([label, prob]: [string, any]) => (
                                          <motion.div
                                              key={label}
                                              initial={{ opacity: 0 }}
                                              animate={{ opacity: 1 }}
                                              transition={{ delay: 0.6 }}
                                              className="flex items-center justify-between"
                                          >
                                              <span className="text-sm text-muted-foreground">Class {label}</span>
                                              <span className="text-sm font-semibold text-foreground">{(prob * 100).toFixed(2)}%</span>
                                          </motion.div>
                                      ))
                                    : modelDetails.map((item, i) => (
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
                    </motion.div> */}
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

                    {/* SHAP Waterfall Plot */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="bg-card rounded-2xl border border-border shadow-card p-6"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <BarChart3 className="w-5 h-5 text-primary" />
                            <h2 className="text-lg font-bold text-foreground">SHAP Waterfall</h2>
                        </div>
                        {waterfallPlot ? (
                            <div className="rounded-3xl overflow-hidden border border-border bg-black/5">
                                <img src={waterfallPlot} alt="SHAP Waterfall Plot" className="w-full h-[340px] object-contain bg-white" />
                            </div>
                        ) : (
                            <div className="flex h-[340px] items-center justify-center rounded-3xl border border-dashed border-border bg-secondary text-sm text-muted-foreground">
                                No SHAP waterfall image available.
                            </div>
                        )}
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
