"use client";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Bell, User, Upload, FileText, CheckCircle, Edit3, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

const FEATURE_KEYS = [
    "acc_x_mean",
    "acc_x_std",
    "acc_x_min",
    "acc_x_max",
    "acc_y_mean",
    "acc_y_std",
    "acc_y_min",
    "acc_y_max",
    "acc_z_mean",
    "acc_z_std",
    "acc_z_min",
    "acc_z_max",
    "ecg_mean",
    "ecg_std",
    "ecg_min",
    "ecg_max",
    "emg_mean",
    "emg_std",
    "emg_min",
    "emg_max",
    "eda_mean",
    "eda_std",
    "eda_min",
    "eda_max",
    "temp_mean",
    "temp_std",
    "temp_min",
    "temp_max",
    "resp_mean",
    "resp_std",
    "resp_min",
    "resp_max",
    "net_acc_mean",
    "net_acc_std",
    "net_acc_min",
    "net_acc_max",
    "ecg_peak_freq",
    "resp_peak_freq",
    "temp_slope",
    "eda_slope",
    "label",
    "subject",
];

const FEATURE_GROUPS: { title: string; keys: string[] }[] = [
    { title: "Accelerometer (X/Y/Z)", keys: FEATURE_KEYS.filter((k) => k.startsWith("acc_")) },
    { title: "Net Acceleration", keys: FEATURE_KEYS.filter((k) => k.startsWith("net_acc")) },
    { title: "ECG", keys: FEATURE_KEYS.filter((k) => k.startsWith("ecg_")) },
    { title: "EMG", keys: FEATURE_KEYS.filter((k) => k.startsWith("emg_")) },
    { title: "EDA", keys: FEATURE_KEYS.filter((k) => k.startsWith("eda_")) },
    { title: "Temperature", keys: FEATURE_KEYS.filter((k) => k.startsWith("temp_")) },
    { title: "Respiration", keys: FEATURE_KEYS.filter((k) => k.startsWith("resp_")) },
    { title: "Meta", keys: ["label", "subject"] },
];

// const DUMMY_VALUES: Record<string, string> = {
//     acc_x_mean: "-0.4832",
//     acc_x_std: "0.2145",
//     acc_x_min: "-1.2340",
//     acc_x_max: "0.5621",
//     acc_y_mean: "0.8721",
//     acc_y_std: "0.1523",
//     acc_y_min: "0.3210",
//     acc_y_max: "1.4520",
//     acc_z_mean: "-0.0312",
//     acc_z_std: "0.3891",
//     acc_z_min: "-0.9870",
//     acc_z_max: "0.8943",
//     ecg_mean: "0.0023",
//     ecg_std: "0.0891",
//     ecg_min: "-0.4521",
//     ecg_max: "0.9812",
//     emg_mean: "0.0015",
//     emg_std: "0.0034",
//     emg_min: "-0.0120",
//     emg_max: "0.0450",
//     eda_mean: "4.2310",
//     eda_std: "1.8920",
//     eda_min: "1.2300",
//     eda_max: "8.9400",
//     temp_mean: "34.8200",
//     temp_std: "0.3200",
//     temp_min: "33.9100",
//     temp_max: "35.7800",
//     resp_mean: "0.1230",
//     resp_std: "0.5670",
//     resp_min: "-1.2340",
//     resp_max: "1.8900",
//     net_acc_mean: "0.9821",
//     net_acc_std: "0.2340",
//     net_acc_min: "0.3210",
//     net_acc_max: "1.8760",
//     ecg_peak_freq: "1.1700",
//     resp_peak_freq: "0.2800",
//     temp_slope: "-0.0012",
//     eda_slope: "0.0340",
//     label: "2",
//     subject: "5",
// };

function parseCSV(text: string): Record<string, string> {
    try {
        const lines = text.trim().split("\n");
        if (lines.length < 2) return {};
        const headers = lines[0].split(",").map((h) => h.trim().toLowerCase());
        const values = lines[1].split(",").map((v) => v.trim());
        const result: Record<string, string> = {};
        headers.forEach((h, i) => {
            if (FEATURE_KEYS.includes(h) && values[i] !== undefined) {
                result[h] = values[i];
            }
        });
        Object.keys(result).forEach((k) => {
            if (!FEATURE_KEYS.includes(k)) {
                delete result[k];
            }
        });
        return result;
    } catch (error) {
        return { error: "Failed to parse CSV. Please ensure it has a header row with valid feature names and a single row of values." };
    }
}

const Assessment = () => {
    const [phase, setPhase] = useState<"upload" | "verify">("upload");
    const [formData, setFormData] = useState<Record<string, string>>({});
    const [fileName, setFileName] = useState("");
    const [dragOver, setDragOver] = useState(false);
    const navigate = useRouter();

    const loadFile = useCallback(
        (file: File) => {
            setFileName(file.name);
            const reader = new FileReader();
            reader.onload = (e) => {
                const text = e.target?.result as string;
                const parsed = parseCSV(text);
                if (parsed.error) {
                    alert(parsed.error);
                    return;
                }
                // Fill with dummy values for any missing keys
                const merged: Record<string, string> = {};
                FEATURE_KEYS.forEach((k) => {
                    merged[k] = parsed[k] || "0.00";
                });
                setFormData(merged);
                setPhase("verify");
            };
            // console.log("Loading file:", file.);
            reader.readAsText(file);
        },
        [fileName]
    );

    const handleDrop = useCallback(
        (e: React.DragEvent) => {
            e.preventDefault();
            setDragOver(false);
            const file = e.dataTransfer.files[0];
            if (file) loadFile(file);
        },
        [loadFile]
    );

    const handleFileInput = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0];
            if (file) loadFile(file);
        },
        [loadFile]
    );

    const handleFieldChange = (key: string, value: string) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    const handleSubmit = async () => {
        try {
            // Get sensor features only (exclude label and subject)
            const sensorFeatures = [
                "acc_x_mean", "acc_x_std", "acc_x_min", "acc_x_max",
                "acc_y_mean", "acc_y_std", "acc_y_min", "acc_y_max",
                "acc_z_mean", "acc_z_std", "acc_z_min", "acc_z_max",
                "ecg_mean", "ecg_std", "ecg_min", "ecg_max",
                "emg_mean", "emg_std", "emg_min", "emg_max",
                "eda_mean", "eda_std", "eda_min", "eda_max",
                "temp_mean", "temp_std", "temp_min", "temp_max",
                "resp_mean", "resp_std", "resp_min", "resp_max",
                "net_acc_mean", "net_acc_std", "net_acc_min", "net_acc_max",
                "ecg_peak_freq", "resp_peak_freq",
                "temp_slope", "eda_slope"
            ];

            // Convert string values to numbers and only include sensor features
            const dataToSend: Record<string, number> = {};
            sensorFeatures.forEach((key) => {
                const value = formData[key];
                dataToSend[key] = parseFloat(value) || 0;
            });

            // console.log("Sending data to backend:", dataToSend);

            const res = await axios.post("http://127.0.0.1:5000/predict", dataToSend);
            
            // console.log("Backend response status:", res.status);
            // console.log("Backend response data:", res.data);
            
            if (res.status === 200) {
                console.log("✓ Assessment completed successfully");
                navigate.push("/Results?result=" + encodeURIComponent(JSON.stringify(res.data)));
            } else {
                alert("Failed to run assessment. Please try again.");
            }
        } catch (error) {
            console.error("Error during assessment:", error);
            alert("An error occurred while running the assessment. Please check your data and try again.");
        }
    };

    return (
        <div className="min-h-screen bg-background relative overflow-hidden pt-16">
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent/30 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-0 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />

            <main className="container relative z-10 py-10 max-w-5xl mx-auto">
                <AnimatePresence mode="wait">
                    {phase === "upload" ? (
                        <motion.div
                            key="upload"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="max-w-2xl mx-auto"
                        >
                            <div className="text-center mb-8">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                                    className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-4"
                                >
                                    <Upload className="w-8 h-8 text-primary-foreground" />
                                </motion.div>
                                <h1 className="text-3xl font-bold text-foreground">Upload Sensor Data</h1>
                                <p className="text-muted-foreground mt-2">Upload a CSV file with your WESAD sensor features for stress assessment</p>
                            </div>

                            {/* Drop zone */}
                            <motion.label
                                htmlFor="csv-upload"
                                onDragOver={(e) => {
                                    e.preventDefault();
                                    setDragOver(true);
                                }}
                                onDragLeave={() => setDragOver(false)}
                                onDrop={handleDrop}
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                className={`block cursor-pointer rounded-2xl border-2 border-dashed p-12 text-center transition-all duration-300 ${
                                    dragOver
                                        ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                                        : "border-border bg-card hover:border-primary/50 hover:bg-accent/30"
                                }`}
                            >
                                <motion.div
                                    animate={dragOver ? { y: -5, scale: 1.1 } : { y: 0, scale: 1 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <FileText className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                                    <p className="text-foreground font-semibold text-lg">Drop your CSV file here</p>
                                    <p className="text-muted-foreground text-sm mt-1">or click to browse files</p>
                                    <p className="text-xs text-muted-foreground/60 mt-3">Supports .csv files with WESAD feature columns</p>
                                </motion.div>
                                <input id="csv-upload" type="file" accept=".csv" onChange={handleFileInput} className="hidden" />
                            </motion.label>

                            {/* Feature list hint */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="mt-6 bg-card rounded-xl border border-border p-4"
                            >
                                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                                    Expected Features ({FEATURE_KEYS.length})
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {FEATURE_KEYS.map((k, i) => (
                                        <motion.span
                                            key={k}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.5 + i * 0.015 }}
                                            className="px-2 py-0.5 rounded-md bg-secondary text-[10px] font-mono text-muted-foreground"
                                        >
                                            {k}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="verify"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                                            <CheckCircle className="w-5 h-5 text-primary-foreground" />
                                        </div>
                                        <div>
                                            <h1 className="text-2xl font-bold text-foreground">Verify Feature Values</h1>
                                            <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                                                <FileText className="w-3.5 h-3.5" />
                                                {fileName}
                                                <span className="text-xs">• {FEATURE_KEYS.length} features loaded</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => {
                                        setPhase("upload");
                                        setFormData({});
                                        setFileName("");
                                    }}
                                    className="border-border"
                                >
                                    <X className="w-4 h-4 mr-1" /> Re-upload
                                </Button>
                            </div>

                            <div className="flex items-center gap-2 mb-6 px-3 py-2 rounded-lg bg-accent/50 border border-primary/20">
                                <Edit3 className="w-4 h-4 text-primary" />
                                <p className="text-xs text-foreground">Review and edit any values below before running the assessment.</p>
                            </div>

                            {/* Feature groups */}
                            <div className="space-y-4">
                                {FEATURE_GROUPS.map((group, gi) => (
                                    <motion.div
                                        key={group.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: gi * 0.08, duration: 0.4 }}
                                        className="bg-card rounded-xl border border-border p-5"
                                    >
                                        <h3 className="text-sm font-bold text-foreground mb-3">{group.title}</h3>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                                            {group.keys.map((key, idx) => (
                                                <motion.div
                                                    key={key}
                                                    initial={{ opacity: 0, y: 8 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: gi * 0.08 + idx * 0.02, duration: 0.3 }}
                                                >
                                                    <label className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-1 block">
                                                        {key}
                                                    </label>
                                                    <Input
                                                        type="text"
                                                        value={formData[key] ?? "0.00"}
                                                        onChange={(e) => handleFieldChange(key, e.target.value)}
                                                        className="bg-secondary border-border text-sm font-mono h-9"
                                                    />
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Submit */}
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex gap-4 pt-6">
                                <Button
                                    size="lg"
                                    onClick={handleSubmit}
                                    className="flex-1 bg-gradient-primary hover:opacity-90 shadow-lg shadow-primary/20 group"
                                >
                                    Run Assessment
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Footer */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-10 text-center">
                    <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                        <Lock className="w-4 h-4" />
                        Your data is encrypted and private
                    </div>
                </motion.div>
                <div className="mt-4 text-center text-xs text-muted-foreground">© 2024 MindCheck. Designed for your peace of mind.</div>
            </main>
        </div>
    );
};

export default Assessment;
