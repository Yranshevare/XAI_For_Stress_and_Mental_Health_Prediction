"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Bell,
  User,
  BarChart3,
  Sparkles,
  RefreshCw,
  Home,
  TrendingUp,
} from "lucide-react";

const stressDrivers = [
  { label: "Sleep Quality", impact: 32 },
  { label: "Work Load Intensity", impact: 24 },
  { label: "Heart Rate Variability (HRV)", impact: 18 },
  { label: "Caffeine Intake", impact: 12 },
];

const modelDetails = [
  { label: "Confidence Level", value: "94.2%" },
  { label: "Last Updated", value: "Just now" },
  { label: "Data Points", value: "1,240" },
];

const weeklyData = [65, 45, 70, 55, 80, 60, 65];
const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function Results() {
  const score = 65;
  const circumference = 2 * Math.PI * 54;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-background relative overflow-hidden"
    >

      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      {/* NAVBAR */}
      <nav className="border-b border-border bg-card/80 backdrop-blur">
        <div className="flex justify-between items-center h-16 px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-primary text-primary-foreground rounded-xl flex items-center justify-center font-bold">
              M
            </div>
            <span className="font-bold text-lg text-foreground">
              MindCheck
            </span>
          </Link>

          <div className="flex gap-4 text-muted-foreground">
            <Bell className="w-5 h-5 cursor-pointer hover:text-foreground" />
            <User className="w-5 h-5 cursor-pointer hover:text-foreground" />
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto py-10 px-4 relative z-10">

        {/* SCORE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-card border border-border rounded-2xl p-8 mb-6 shadow-sm"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">

            {/* CIRCLE */}
            <div className="relative w-[160px] h-[160px] flex items-center justify-center">
              <svg width="160" height="160" viewBox="0 0 120 120">
                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  strokeWidth="8"
                  className="stroke-muted"
                  fill="none"
                />
                <motion.circle
                  cx="60"
                  cy="60"
                  r="54"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  className="stroke-primary"
                  strokeDasharray={circumference}
                  initial={{ strokeDashoffset: circumference }}
                  animate={{ strokeDashoffset }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  transform="rotate(-90 60 60)"
                />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-foreground">
                  {score}
                </span>
                <span className="text-xs text-muted-foreground">
                  Score
                </span>
              </div>
            </div>

            {/* TEXT */}
            <div className="text-center md:text-left">
              <span className="px-3 py-1 bg-accent rounded-full text-xs text-accent-foreground">
                Prediction Complete
              </span>

              <h1 className="text-3xl font-bold text-foreground mt-3">
                Moderate Stress
              </h1>

              <p className="text-muted-foreground mt-2 max-w-lg">
                Your biometric patterns suggest an elevated level of physiological arousal.
                This is 12% higher than your baseline from the last 7 days.
              </p>
            </div>

            <div className="hidden md:flex w-20 h-20 bg-accent rounded-2xl items-center justify-center">
              <BarChart3 className="text-primary w-10 h-10" />
            </div>
          </div>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-5 gap-6 mb-6">

          {/* STRESS DRIVERS */}
          <div className="md:col-span-3 bg-card border border-border rounded-2xl p-6">
            <h2 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              Top Stress Drivers
            </h2>

            {stressDrivers.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="mb-5"
              >
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-foreground">{d.label}</span>
                  <span className="text-primary">{d.impact}% Impact</span>
                </div>

                <div className="h-2 bg-muted rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${d.impact * 2.5}%` }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                    className="h-2 bg-primary rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* MODEL + BUTTONS */}
          <div className="md:col-span-2 space-y-4">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-bold mb-4 text-foreground">
                Model Details
              </h3>

              {modelDetails.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex justify-between text-sm mb-2"
                >
                  <span className="text-muted-foreground">{m.label}</span>
                  <span className="text-foreground font-semibold">
                    {m.value}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col gap-4">

              <Link href="/assessment" className="w-full">
                <button className="w-full bg-primary text-white py-3 rounded-lg flex items-center justify-center gap-2 
                hover:opacity-90 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 group">
                  <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                  Run New Prediction
                </button>
              </Link>

              <Link href="/" className="w-full">
                <button className="w-full border border-border py-3 rounded-lg flex items-center justify-center gap-2 
                hover:bg-accent hover:scale-[1.02] hover:shadow-md transition-all duration-300">
                  <Home className="w-4 h-4" />
                  Go to Home
                </button>
              </Link>

            </div>
          </div>
        </div>

        {/* AI + WEEKLY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-2 gap-6 mb-10"
        >

          {/* AI */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              AI Insight
            </h2>

            <p className="text-muted-foreground italic">
              "Your recent data shows a correlation between late-night screen time
              and decreased HRV. The model predicts that prioritizing 15 minutes
              of mindfulness before bed could reduce your morning stress score by
              up to 15%."
            </p>
          </div>

          {/* WEEKLY */}
          <div className="bg-card border border-border rounded-2xl p-6">

            <div className="flex items-end gap-2 h-32 mb-4">
              {weeklyData.map((val, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${val}%` }}
                  transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
                  className="flex-1 bg-primary/40 rounded-t-md hover:bg-primary"
                />
              ))}
            </div>

            <div className="flex justify-between text-xs text-muted-foreground mb-4">
              {weekDays.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-foreground flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  Weekly Trend
                </h3>
                <p className="text-sm text-muted-foreground">
                  Stable, with weekend spikes
                </p>
              </div>

            <Link
                href="/full-report"
                className="text-sm font-semibold text-primary cursor-pointer hover:underline"
                >
                View Full Report →
            </Link>
            </div>
          </div>
        </motion.div>

        {/* FOOTER */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-between text-xs text-muted-foreground border-t pt-6"
        >
          <div className="flex gap-4">
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
          </div>
          <span>© 2026 MindCheck</span>
        </motion.div>

      </main>
    </motion.div>
  );
}