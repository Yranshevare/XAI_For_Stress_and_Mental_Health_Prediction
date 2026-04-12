"use client";
import { motion } from "framer-motion";
import { Brain, Eye, Heart } from "lucide-react";

const features = [
    {
        icon: Brain,
        title: "AI Prediction",
        description: "Real-time risk assessment using state-of-the-art neural networks trained on clinical datasets.",
    },
    {
        icon: Eye,
        title: "Explainable AI Insights",
        description: "Understand the 'why' behind every prediction with our transparency layer designed for users.",
    },
    {
        icon: Heart,
        title: "Mental Health Awareness",
        description: "Access a curated library of resources to support your journey and provide actionable wellness steps.",
    },
];

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturesSection = () => {
    return (
        <section id="features" className="py-24 relative">
            <div className="absolute inset-0 bg-gradient-hero opacity-50" />
            <div className="container relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-semibold uppercase tracking-widest text-primary">Core Capabilities</span>
                    <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">Advanced AI at Your Service</h2>
                </motion.div>

                <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6">
                    {features.map((f) => (
                        <motion.div
                            key={f.title}
                            variants={item}
                            whileHover={{ y: -6, transition: { duration: 0.2 } }}
                            className="group bg-card rounded-2xl p-8 border border-border shadow-card hover:shadow-elevated transition-shadow"
                        >
                            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-colors text-primary">
                                <f.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturesSection;
