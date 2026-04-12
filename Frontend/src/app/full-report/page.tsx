"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, BarChart3, Brain, Activity } from "lucide-react";

export default function FullReport() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-background p-6 md:p-10"
    >

      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-foreground">
          Full Analysis Report
        </h1>

        <Link
          href="/results"
          className="flex items-center gap-2 text-sm text-primary hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Results
        </Link>
      </div>

      {/* SUMMARY CARDS */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">

        <div className="bg-card border border-border rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="w-5 h-5 text-primary" />
            <h2 className="font-semibold">Stress Level</h2>
          </div>
          <p className="text-2xl font-bold">Moderate</p>
          <p className="text-sm text-muted-foreground">
            Based on physiological signals
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <BarChart3 className="w-5 h-5 text-primary" />
            <h2 className="font-semibold">Model Confidence</h2>
          </div>
          <p className="text-2xl font-bold">94.2%</p>
          <p className="text-sm text-muted-foreground">
            High reliability prediction
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <Brain className="w-5 h-5 text-primary" />
            <h2 className="font-semibold">AI Insight</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Your stress pattern is mainly influenced by sleep quality and
            heart rate variability trends.
          </p>
        </div>

      </div>

      {/* DETAILED REPORT */}
      <div className="bg-card border border-border rounded-2xl p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">Detailed Explanation</h2>

        <p className="text-muted-foreground leading-relaxed">
          The model analyzes multiple physiological signals including ECG,
          EDA, respiratory rate, and motion data. It detects patterns
          associated with stress response in the body.
          <br /><br />
          In your case, elevated activity in heart rate variability and
          reduced sleep quality contributed most to the final prediction.
          The system combines machine learning outputs with explainable AI
          techniques like SHAP and LIME to generate transparent insights.
        </p>
      </div>

      {/* FOOTER NOTE */}
      <div className="text-sm text-muted-foreground text-center">
        This report is generated using AI-based physiological analysis.
        It is for informational purposes only and not a medical diagnosis.
      </div>

    </motion.div>
  );
}