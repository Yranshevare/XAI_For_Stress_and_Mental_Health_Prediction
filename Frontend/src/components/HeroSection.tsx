"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-hero">
            {/* Decorative blobs */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/40 rounded-full blur-3xl" />

            <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
                {/* Left */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
                        Next-Gen Clinical AI
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
                    >
                        AI Powered <span className="text-gradient">Mental Health</span> Prediction
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="mt-6 text-muted-foreground text-lg max-w-md leading-relaxed"
                    >
                        Experience the future of mental wellness with our advanced AI model providing explainable insights and early detection.
                        Empathetic technology for a healthier mind.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-8 flex flex-wrap gap-4"
                    >
                        <Link href="/Assessment">
                            <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-all shadow-lg shadow-primary/25 group">
                                Start Assessment
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Button size="lg" variant="outline" className="border-border hover:bg-accent transition-colors">
                            View Demo
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mt-8 flex items-center gap-3"
                    >
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full bg-gradient-primary border-2 border-card" />
                            ))}
                        </div>
                        <span className="text-sm text-muted-foreground">
                            Trusted by <strong className="text-foreground">2,000+</strong> early adopters
                        </span>
                    </motion.div>
                </div>

                {/* Right */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="relative flex justify-center"
                >
                    <div className="relative w-full max-w-md">
                        <div className="absolute inset-0 bg-accent/50 rounded-3xl blur-2xl scale-95" />
                        <div className="relative bg-card rounded-3xl shadow-elevated p-6 border border-border">
                            <img
                                src={"./hero-plant.png"}
                                alt="Growing plant symbolizing mental health"
                                className="w-full h-56 object-contain animate-float"
                                width={640}
                                height={640}
                            />
                            <div className="mt-4 bg-secondary rounded-xl p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-medium text-foreground">Prediction Accuracy</span>
                                    <span className="text-sm font-bold text-primary">94.2%</span>
                                </div>
                                <div className="h-2.5 bg-accent rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "94%" }}
                                        transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                                        className="h-full bg-gradient-primary rounded-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
