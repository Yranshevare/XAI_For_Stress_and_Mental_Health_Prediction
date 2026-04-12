import CTASection from "@/components/CTASection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";

export default function Home() {
    return (
        <div className="min-h-screen bg-background">
            <HeroSection />
            <FeaturesSection />
            <HowItWorksSection />
            <CTASection />
        </div>
    );
}
