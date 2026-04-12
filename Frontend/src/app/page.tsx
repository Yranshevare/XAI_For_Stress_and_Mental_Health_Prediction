"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  Brain,
  Eye,
  Heart,
  Upload,
  Cpu,
  FileText,
  Send,
} from "lucide-react";

export default function Page() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Research", href: "#" },
    { label: "Contact", href: "#" },
  ];

  const features = [
    {
      icon: Brain,
      title: "AI Prediction",
      description:
        "Real-time risk assessment using state-of-the-art neural networks trained on clinical datasets.",
    },
    {
      icon: Eye,
      title: "Explainable AI Insights",
      description:
        "Understand the 'why' behind every prediction with our transparency layer designed for users.",
    },
    {
      icon: Heart,
      title: "Mental Health Awareness",
      description:
        "Access curated resources and actionable wellness steps for better mental health.",
    },
  ];

  const steps = [
    {
      icon: Upload,
      number: "1",
      title: "Enter Your Data",
      description:
        "Provide anonymous biometric and behavioral patterns through secure portal.",
    },
    {
      icon: Cpu,
      number: "2",
      title: "AI Model Predicts",
      description:
        "Advanced AI processes patterns to detect early mental health signals.",
    },
    {
      icon: FileText,
      number: "3",
      title: "Get Explainable Results",
      description:
        "Receive detailed report with clear explanations and next steps.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">

      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 glass border-b border-border"
      >
        <div className="container flex items-center justify-between h-16">

          <Link href="/" className="flex items-center gap-2.5 cursor-pointer">
            <div className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center hover:scale-110 transition">
              <span className="text-white font-bold">M</span>
            </div>
            <span className="font-bold text-lg hover:text-primary transition">
              MindPredict AI
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

          <Link href="/assessment" className="hidden md:block">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-primary text-white px-4 py-2 rounded-lg cursor-pointer hover:opacity-90 transition"
            >
              Get Started
            </motion.button>
          </Link>

          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>
      {/* MOBILE MENU */}
<AnimatePresence>
  {mobileOpen && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      className="md:hidden absolute top-16 left-0 w-full bg-card border-t border-border px-6 py-4 space-y-4"
    >
      {navLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          onClick={() => setMobileOpen(false)}
          className="block text-sm text-muted-foreground"
        >
          {link.label}
        </a>
      ))}

      <Link href="/assessment">
        <button className="w-full bg-gradient-primary text-white py-2 rounded-lg">
          Get Started
        </button>
      </Link>
    </motion.div>
  )}
</AnimatePresence>

      {/* HERO */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-50 text-yellow-700 text-xs font-semibold mb-4">
              <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
              NEXT-GEN CLINICAL AI
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              AI Powered{" "}
              <span className="text-gradient">Mental Health</span>{" "}
              Prediction
            </h1>

            <p className="mt-6 text-muted-foreground text-lg">
              Experience the future of mental wellness with our advanced AI model providing explainable insights and early detection.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link href="/assessment">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-primary text-white px-5 py-3 rounded-lg flex items-center gap-2 shadow-md hover:scale-105 transition cursor-pointer"
                >
                  Start Assessment <ArrowRight size={18} />
                </motion.button>
              </Link>

              <motion.button
                whileTap={{ scale: 0.95 }}
                className="border border-border px-5 py-3 rounded-lg hover:bg-secondary transition cursor-pointer"
              >
                View Demo
              </motion.button>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              Trusted by <b>2,000+</b> early adopters
            </p>
          </div>

          {/* IMAGE CARD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex justify-center"
          >
            <div className="relative bg-card border border-border rounded-2xl p-5 shadow-lg w-full max-w-[460px] hover:shadow-2xl transition">

              <motion.img
                src="/hero-plant.png"
                alt="hero"
                className="w-full h-[260px] object-contain rounded-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <div className="mt-4 bg-secondary rounded-xl p-3 hover:bg-primary/10 transition">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Prediction Accuracy</span>
                  <span className="text-sm font-bold text-primary">94.2%</span>
                </div>

                <div className="h-2 bg-accent rounded-full mt-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "94%" }}
                    className="h-full bg-gradient-primary rounded-full"
                  />
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24">
        <div className="container">

          <div className="text-center mb-12">
            <p className="text-sm text-primary font-semibold">Core Capabilities</p>
            <h2 className="text-3xl font-bold">Advanced AI at Your Service</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <motion.div
                key={f.title}
                whileHover={{ scale: 1.05, y: -8 }}
                className="bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-elevated transition cursor-pointer"
              >
                <f.icon className="w-6 h-6 text-primary mb-4 hover:scale-125 transition" />
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 bg-secondary/30">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Brain className="text-primary" />
              How It Works
            </h2>

            <div className="space-y-8">
              {steps.map((s) => (
                <motion.div
                  key={s.number}
                  whileHover={{ x: 6 }}
                  className="flex gap-5 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-primary hover:bg-primary/20 transition">
                    <s.icon className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className="font-bold">
                      {s.number}. {s.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {s.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ANALYSIS */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-card p-6 rounded-xl border shadow hover:shadow-xl transition"
          >
            <h3 className="font-bold mb-2 flex items-center gap-2">
              <Brain className="text-primary" />
              Analysis Progress
            </h3>

            <p className="text-sm text-muted-foreground mb-4">
              Processing signals...
            </p>

            <div className="space-y-3">
              {[85, 70, 92].map((v, i) => (
                <div key={i} className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${v}%` }}
                    className="h-full bg-primary"
                  />
                </div>
              ))}
            </div>

            <p className="mt-4 text-sm">
              Confidence: <b>High</b>
            </p>
          </motion.div>

        </div>
      </section>

      {/* CTA */}
      
      <section className="py-24">
  <div className="container">
    
    <div className="bg-gradient-cta text-white text-center p-12 rounded-3xl">

      <h2 className="text-3xl font-bold">
        Take control of your mental wellness today
      </h2>

      <p className="mt-4 text-white/80">
        Join thousands of users who are using predictive AI to build resilience and prioritize their mental health.
      </p>

      <Link href="/assessment">
   <motion.button
  whileHover={{ scale: 1.06 }}
  whileTap={{ scale: 0.95 }}
  className="
    mt-8 
    bg-white 
    text-black 
    px-10 py-3 
    rounded-lg 
    mx-auto 
    flex items-center justify-center gap-2
    transition-all duration-300
    hover:bg-gray-200
    hover:text-indigo-600
    shadow-md
  "
>
  Get Started <ArrowRight size={18} />
</motion.button>
      </Link>

    </div>

  </div>
</section>

      {/* FOOTER (UPDATED WITH M ICON + LINKS) */}
      <footer className="border-t border-border bg-card py-16">
        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          <div>
            <div className="flex items-center gap-2 mb-3 cursor-pointer">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold">
                M
              </div>
              <h3 className="font-bold text-lg hover:text-primary transition">
                MindPredict AI
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Building a future where mental health is proactive, not reactive. Using data for good.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Platform</h4>
            <div className="text-sm text-muted-foreground space-y-2">
              <p className="cursor-pointer hover:text-primary">Features</p>
              <p className="cursor-pointer hover:text-primary">How it Works</p>
              <p className="cursor-pointer hover:text-primary">Security</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <div className="text-sm text-muted-foreground space-y-2">
              <p className="cursor-pointer hover:text-primary">About</p>
              <p className="cursor-pointer hover:text-primary">Careers</p>
              <p className="cursor-pointer hover:text-primary">Contact</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Get the latest insights on AI and wellness.
            </p>

            <div className="flex gap-2">
              <input className="flex-1 px-3 py-2 rounded-lg bg-secondary border border-border text-sm" />
              <button className="bg-gradient-primary p-2 rounded-lg text-white">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
         
        <div className="text-center text-xs text-muted-foreground mt-10">
          © 2026 MindPredict AI. All rights reserved. Not a medical diagnostic tool.
        </div>
      </footer>

    </div>
  );
}