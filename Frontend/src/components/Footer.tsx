
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="border-t border-border bg-card py-16">
            <div className="container">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div>
                        <Link href="/" className="flex items-center gap-2.5">
                            <div className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center">
                                <span className="text-primary-foreground font-bold text-lg">M</span>
                            </div>
                            <span className="font-bold text-lg text-foreground">MindPredict AI</span>
                        </Link>
                        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                            Building a future where mental health is proactive, not reactive. Using data for good.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Platform</h4>
                        <ul className="space-y-2.5 text-sm text-muted-foreground">
                            {["Assessments", "How It Works", "Security", "Pricing"].map((l) => (
                                <li key={l}>
                                    <a href="#" className="hover:text-foreground transition-colors">
                                        {l}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Company</h4>
                        <ul className="space-y-2.5 text-sm text-muted-foreground">
                            {["About Us", "Research Paper", "Careers", "Contact"].map((l) => (
                                <li key={l}>
                                    <a href="#" className="hover:text-foreground transition-colors">
                                        {l}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Newsletter</h4>
                        <p className="text-sm text-muted-foreground mb-3">Get the latest insights on AI and wellness.</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 px-3 py-2 rounded-lg bg-secondary border border-border text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                            />
                            <Button size="icon" className="bg-gradient-primary hover:opacity-90 flex-shrink-0">
                                <Send className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-6 border-t border-border text-center text-xs text-muted-foreground">
                    © 2024 MindPredict AI Inc. All rights reserved. Not a medical diagnostic tool.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
