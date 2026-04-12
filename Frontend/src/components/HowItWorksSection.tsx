"use client";
import { motion } from "framer-motion";
import { Upload, Cpu, FileText } from "lucide-react";

const steps = [
    {
        icon: Upload,
        number: "1",
        title: "Enter Your Data",
        description: "Provide anonymous biometric and behavioral patterns through our secure, encrypted portal.",
    },
    {
        icon: Cpu,
        number: "2",
        title: "AI Model Predicts",
        description: "Our proprietary transformer models process patterns to identify early signs of stress or imbalance.",
    },
    {
        icon: FileText,
        number: "3",
        title: "Get Explainable Results",
        description: "Receive a detailed report with clear justifications and recommended next steps for your health.",
    },
];

const HowItWorksSection = () => {
    return (
        <section id="how-it-works" className="py-24 bg-secondary/30">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Steps */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl font-bold text-foreground mb-12"
                        >
                            How It Works
                        </motion.h2>

                        <div className="space-y-8">
                            {steps.map((step, i) => (
                                <motion.div
                                    key={step.number}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15, duration: 0.5 }}
                                    className="flex gap-5 group"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent group-hover:bg-gradient-primary group-hover:text-primary-foreground flex items-center justify-center text-primary transition-colors">
                                        <step.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-foreground mb-1">
                                            {step.number}. {step.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Analysis Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-2xl" />
                        <div className="relative bg-card rounded-2xl shadow-elevated border border-border p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                                    <Cpu className="w-5 h-5 text-primary-foreground" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground text-sm">Analysis Progress</h4>
                                    <p className="text-xs text-muted-foreground">Processing signals...</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {[85, 72, 91].map((val, i) => (
                                    <motion.div key={i} className="h-3 bg-secondary rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${val}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.3 + i * 0.2 }}
                                            className="h-full bg-gradient-primary rounded-full"
                                        />
                                    </motion.div>
                                ))}
                            </div>

                            <div className="flex justify-between mt-4">
                                <span className="text-xs font-medium text-muted-foreground">Confidence</span>
                                <span className="text-xs font-bold text-primary">High</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
