"use client";
import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Shield, Zap, Star } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { useUser, UserButton } from "@clerk/nextjs";
import BackButton from "@/components/ui/BackButton";

export default function PricingPage() {
    return (
        <div className="relative min-h-screen bg-background overflow-x-hidden">
            {/* Shared Premium Background Effects */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern opacity-[0.2] text-primary/20" />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

                {/* Floating Halos */}
                <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full animate-pulse-slow" />
                <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-blue-500/5 blur-[150px] rounded-full animate-pulse-slow [animation-delay:3s]" />
            </div>

            <Navbar />

            <main className="relative z-10 pt-32 pb-20 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto text-center mb-20 animate-in fade-in slide-in-from-top-4 duration-1000">
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
                        Transparent <span className="text-primary">Pricing</span> <br />
                        <span className="text-foreground/90">for Trusted Care</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Choose the plan that fits your clinical workflow. Scale as you grow with ArogyaVaani's intelligence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Starter Plan */}
                    <PricingCard
                        title="Starter"
                        price="Free"
                        description="Perfect for individual clinicians exploring AI assistance."
                        features={[
                            "Up to 50 sessions/month",
                            "Standard voice agents",
                            "Basic clinical summaries",
                            "Email support",
                        ]}
                        icon={<Zap className="w-6 h-6 text-blue-400" />}
                    />

                    {/* Professional Plan */}
                    <PricingCard
                        title="Professional"
                        price="$49"
                        period="/month"
                        description="For growing clinics needing advanced triage capabilities."
                        features={[
                            "Unlimited clinical sessions",
                            "Advanced medical specialties",
                            "Custom voice profiles",
                            "Priority clinic support",
                            "HIPAA compliant storage",
                        ]}
                        highlight
                        icon={<Star className="w-6 h-6 text-primary" />}
                    />

                    {/* Enterprise Plan */}
                    <PricingCard
                        title="Enterprise"
                        price="Custom"
                        description="Scalable solutions tailored for hospital systems."
                        features={[
                            "Full EHR integration",
                            "Multi-agent orchestration",
                            "Dedicated account manager",
                            "Advanced analytics dashboard",
                            "SLA & Premium hosting",
                        ]}
                        icon={<Shield className="w-6 h-6 text-blue-600" />}
                    />
                </div>

                <div className="mt-20 text-center">
                    <p className="text-muted-foreground">
                        All plans include SSL encryption and 99.9% uptime guarantee.
                    </p>
                </div>
            </main>
        </div>
    );
}

const PricingCard = ({
    title,
    price,
    period,
    description,
    features,
    highlight,
    icon
}: {
    title: string;
    price: string;
    period?: string;
    description: string;
    features: string[];
    highlight?: boolean;
    icon: React.ReactNode;
}) => (
    <div className={`relative p-8 rounded-[2.5rem] border transition-all duration-300 hover:-translate-y-2 group ${highlight
        ? "bg-primary/5 border-primary/30 shadow-2xl shadow-primary/20 scale-105 z-10"
        : "bg-muted/30 border-border/50 glass hover:bg-muted/50"
        }`}>
        {highlight && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold tracking-wider uppercase">
                Most Popular
            </div>
        )}
        <div className="mb-6 flex justify-between items-start">
            <div className="p-3 rounded-2xl bg-background/50 border border-border/50 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <div className="text-right">
                <h3 className="text-xl font-bold">{title}</h3>
            </div>
        </div>
        <div className="mb-6">
            <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black">{price}</span>
                {period && <span className="text-muted-foreground">{period}</span>}
            </div>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                {description}
            </p>
        </div>
        <div className="space-y-4 mb-8">
            {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                    <div className="shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span>{feature}</span>
                </div>
            ))}
        </div>
        <Link href="/dashboard" className="w-full">
            <Button
                className={`w-full h-12 rounded-2xl font-bold transition-all ${highlight
                    ? "bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
                    : "variant-outline border-primary/20 hover:bg-primary/5"
                    }`}
            >
                Get Started
            </Button>
        </Link>
    </div>
);
const Navbar = () => {
    const { user } = useUser();
    return (
        <nav className="fixed top-0 left-0 right-0 z-[60] flex h-20 w-full items-center justify-between glass border-b px-6 md:px-12 lg:px-24">
            <Link href="/" className="flex items-center gap-2 group transition-all">
                <div className="flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Logo size={40} />
                </div>
                <h1 className="text-lg font-bold tracking-tight text-foreground md:text-xl">
                    Arogya<span className="text-primary font-extrabold">Vaani</span>
                </h1>
            </Link>

            <div className="flex items-center gap-4 md:gap-8">
                <div className="hidden md:flex items-center gap-6 mr-4">
                    <Link href="/dashboard" className="text-sm font-bold hover:text-primary transition-colors">Home</Link>
                    <Link href="/dashboard/history" className="text-sm font-bold hover:text-primary transition-colors">History</Link>
                    <Link href="/pricing" className="text-sm font-bold text-primary">Pricing</Link>
                </div>

                <div className="flex items-center gap-4">
                    <BackButton href="/dashboard" label="Back" />
                    {!user ? (
                        <div className="flex items-center gap-4">
                            <Link href="/sign-in">
                                <Button variant="ghost" className="font-bold text-base px-5">Login</Button>
                            </Link>
                            <Link href="/sign-up">
                                <Button size="lg" className="font-bold px-8 text-base shadow-lg hover:shadow-primary/20 transition-all rounded-xl">Sign Up</Button>
                            </Link>
                        </div>
                    ) : (
                        <div className="flex gap-4 items-center">
                            <div className="border-l pl-4 border-border/50">
                                <UserButton
                                    appearance={{
                                        elements: {
                                            userButtonAvatarBox: "h-12 w-12"
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};
