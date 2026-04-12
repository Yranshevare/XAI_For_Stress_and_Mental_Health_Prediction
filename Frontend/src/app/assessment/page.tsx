"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Upload, FileText, Lock, Bell, User } from "lucide-react";
import Link from "next/link";
import Papa from "papaparse";

const FEATURE_KEYS = [
  "acc_x_mean","acc_x_std","acc_x_min","acc_x_max",
  "acc_y_mean","acc_y_std","acc_y_min","acc_y_max",
  "acc_z_mean","acc_z_std","acc_z_min","acc_z_max",
  "ecg_mean","ecg_std","ecg_min","ecg_max",
  "emg_mean","emg_std","emg_min","emg_max",
  "eda_mean","eda_std","eda_min","eda_max",
  "temp_mean","temp_std","temp_min","temp_max",
  "resp_mean","resp_std","resp_min","resp_max",
  "net_acc_mean","net_acc_std","net_acc_min","net_acc_max",
  "ecg_peak_freq","resp_peak_freq","temp_slope","eda_slope",
  "label","subject",
];

export default function Assessment() {
    const handleFileUpload = (file: File) => {
  Papa.parse(file, {
    header: true,
    skipEmptyLines: true,
    complete: async function (results: any) {
      const row = results.data[0];

      const formattedData: any = {
        acc_x_mean: parseFloat(row.acc_x_mean),
        acc_x_std: parseFloat(row.acc_x_std),
        acc_x_min: parseFloat(row.acc_x_min),
        acc_x_max: parseFloat(row.acc_x_max),

        acc_y_mean: parseFloat(row.acc_y_mean),
        acc_y_std: parseFloat(row.acc_y_std),
        acc_y_min: parseFloat(row.acc_y_min),
        acc_y_max: parseFloat(row.acc_y_max),

        acc_z_mean: parseFloat(row.acc_z_mean),
        acc_z_std: parseFloat(row.acc_z_std),
        acc_z_min: parseFloat(row.acc_z_min),
        acc_z_max: parseFloat(row.acc_z_max),

        ecg_mean: parseFloat(row.ecg_mean),
        ecg_std: parseFloat(row.ecg_std),
        ecg_min: parseFloat(row.ecg_min),
        ecg_max: parseFloat(row.ecg_max),

        emg_mean: parseFloat(row.emg_mean),
        emg_std: parseFloat(row.emg_std),
        emg_min: parseFloat(row.emg_min),
        emg_max: parseFloat(row.emg_max),

        eda_mean: parseFloat(row.eda_mean),
        eda_std: parseFloat(row.eda_std),
        eda_min: parseFloat(row.eda_min),
        eda_max: parseFloat(row.eda_max),

        temp_mean: parseFloat(row.temp_mean),
        temp_std: parseFloat(row.temp_std),
        temp_min: parseFloat(row.temp_min),
        temp_max: parseFloat(row.temp_max),

        resp_mean: parseFloat(row.resp_mean),
        resp_std: parseFloat(row.resp_std),
        resp_min: parseFloat(row.resp_min),
        resp_max: parseFloat(row.resp_max),

        net_acc_mean: parseFloat(row.net_acc_mean),
        net_acc_std: parseFloat(row.net_acc_std),
        net_acc_min: parseFloat(row.net_acc_min),
        net_acc_max: parseFloat(row.net_acc_max),

        ecg_peak_freq: parseFloat(row.ecg_peak_freq),
        resp_peak_freq: parseFloat(row.resp_peak_freq),
        temp_slope: parseFloat(row.temp_slope),
        eda_slope: parseFloat(row.eda_slope),
      };

      const res = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
      });

      const data = await res.json();
      console.log("Prediction:", data);
    },
  });
};
  const safeFloat = (val: any) => {
  const n = parseFloat(val);
  return isNaN(n) ? 0 : n;
};
  const [dragOver, setDragOver] = useState(false);
  

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">

      {/* BACKGROUND BLOBS (animated) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute bottom-20 left-0 w-60 h-60 bg-primary/5 rounded-full blur-3xl"
      />

      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative z-10 border-b border-border bg-card/80 backdrop-blur"
      >
        <div className="flex items-center justify-between h-16 px-6">

          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-9 h-9 bg-primary text-primary-foreground flex items-center justify-center rounded-xl font-bold shadow"
            >
              M
            </motion.div>

            <span className="font-bold text-lg text-foreground">
              MindCheck
            </span>
          </Link>

          <div className="flex gap-4 text-muted-foreground">
            <motion.div whileHover={{ scale: 1.2 }}>
              <Bell className="w-5 h-5 cursor-pointer hover:text-foreground" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <User className="w-5 h-5 cursor-pointer hover:text-foreground" />
            </motion.div>
          </div>

        </div>
      </motion.nav>

      {/* MAIN */}
      <main className="relative z-10 max-w-3xl mx-auto py-12 px-4 text-center">

        {/* ICON */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-2xl mx-auto mb-4 shadow-sm"
        >
          <Upload className="w-8 h-8 text-primary" />
        </motion.div>

        {/* HEADING */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-foreground"
        >
          Upload Sensor Data
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground mt-2 text-sm"
        >
          Upload a CSV file with your WESAD sensor features for stress assessment
        </motion.p>

        {/* UPLOAD BOX */}
        <motion.label
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          className={`mt-8 block cursor-pointer rounded-2xl border-2 border-dashed p-12 transition-all duration-300 ${
            dragOver
              ? "border-primary bg-primary/10 shadow-lg"
              : "border-border bg-card hover:border-primary/50 hover:bg-muted"
          }`}
        >
          <FileText className="w-12 h-12 mx-auto text-muted-foreground mb-4" />

          <p className="text-foreground font-semibold text-lg">
            Drop your CSV file here
          </p>

          <p className="text-muted-foreground text-sm mt-1">
            or click to browse files
          </p>

          <p className="text-xs text-muted-foreground mt-3">
            Supports .csv files with WESAD feature columns
          </p>

          <input
            type="file"
            className="hidden"
            accept=".csv"
            onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleFileUpload(file);
            }}
            />
        </motion.label>

        {/* FEATURES */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 bg-card border border-border rounded-2xl p-5 text-left shadow-sm"
        >
          <p className="text-xs font-semibold text-muted-foreground uppercase mb-3">
            Expected Features ({FEATURE_KEYS.length})
          </p>

          <div className="flex flex-wrap gap-2">
            {FEATURE_KEYS.map((f, i) => (
              <motion.span
                key={f}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + i * 0.02 }}
                className="px-2 py-0.5 rounded-md bg-orange-50 text-xs font-mono text-[#949390] border border-[#eee7d8]"
              >
                {f}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* FOOTER */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 text-sm text-muted-foreground flex items-center justify-center gap-2"
        >
          <Lock className="w-4 h-4" />
          Your data is encrypted and private
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-4 text-xs text-muted-foreground"
        >
          © 2026 MindCheck. Designed for your peace of mind.
        </motion.div>

      </main>
    </div>
  );
}