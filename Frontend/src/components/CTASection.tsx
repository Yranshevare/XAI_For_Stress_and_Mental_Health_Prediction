"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CTASection = () => {
    return (
        <section className="py-24">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-3xl bg-gradient-cta p-12 sm:p-16 text-center overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

                    <div className="relative">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight">
                            Take control of your mental
                            <br />
                            wellness today
                        </h2>
                        <p className="mt-4 text-primary-foreground/80 max-w-lg mx-auto">
                            Join thousands of users who are using predictive AI to build resilience and prioritize their mental health.
                        </p>
                        <Link href="/assessment">
                            <Button size="lg" className="mt-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg group">
                                Get Started Free
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
