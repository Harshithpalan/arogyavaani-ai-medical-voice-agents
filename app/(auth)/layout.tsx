import React from "react";
import Logo from "@/components/ui/Logo";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative flex min-h-screen items-center justify-center bg-background overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-3xl animate-floating" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-chart-2/10 rounded-full blur-3xl animate-floating" style={{ animationDelay: '1s' }} />
                <div className="absolute inset-0 bg-dot-pattern text-primary/5 opacity-50" />
            </div>

            <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col lg:flex-row items-center justify-center gap-12 py-12">
                {/* Branding Section */}
                <div className="hidden lg:flex flex-col items-start max-w-md space-y-6">
                    <div className="flex items-center gap-3">
                        <Logo size={48} />
                        <h1 className="text-3xl font-bold tracking-tight text-foreground">ArogyaVaani</h1>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-5xl font-extrabold text-foreground leading-tight">
                            Your Personal <span className="text-primary italic">AI Medical</span> Companion.
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Access expert medical guidance and instant symptom analysis, powered by advanced artificial intelligence.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            24/7 Support
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-chart-2/10 text-chart-2 text-sm font-medium border border-chart-2/20">
                            <span className="w-2 h-2 rounded-full bg-chart-2 animate-pulse" />
                            AI Diagnosis
                        </div>
                    </div>
                </div>

                {/* Auth Card Content */}
                <div className="w-full max-w-md animate-in fade-in zoom-in duration-500">
                    <div className="lg:hidden flex flex-col items-center mb-8 text-center space-y-2">
                        <div className="flex items-center gap-2">
                            <Logo size={32} />
                            <h2 className="text-2xl font-bold">ArogyaVaani</h2>
                        </div>
                        <p className="text-sm text-muted-foreground">Your AI Medical Companion</p>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
