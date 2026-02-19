"use client";
import React from "react";
import Link from "next/link";
import { UserProfile } from "@clerk/nextjs";
import Logo from "@/components/ui/Logo";
import { useUser, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import BackButton from "@/components/ui/BackButton";

export default function ProfilePage() {
    return (
        <div className="relative min-h-screen bg-background flex flex-col items-center">
            {/* Premium Background Effects */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern opacity-[0.2] text-primary/20" />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

                {/* Floating Halos */}
                <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full animate-pulse-slow" />
                <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-blue-500/5 blur-[150px] rounded-full animate-pulse-slow [animation-delay:3s]" />
            </div>

            <Navbar />

            <main className="relative z-10 pt-32 pb-20 px-6 w-full max-w-6xl flex flex-col items-center">
                <div className="text-center mb-12 animate-in fade-in slide-in-from-top-4 duration-1000">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Manage Your <span className="text-primary">Profile</span>
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                        Securely update your personal information, security settings, and clinical preferences.
                    </p>
                </div>

                <div className="w-full flex justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                    <UserProfile
                        appearance={{
                            elements: {
                                rootBox: "w-full shadow-[0_0_50px_rgba(0,0,0,0.1)] rounded-[2.5rem] overflow-hidden border border-border/40 glass bg-white/5",
                                card: "bg-transparent shadow-none w-full",
                                navbar: "bg-muted/10 border-r border-border/30 backdrop-blur-md",
                                navbarMobileMenuButton: "text-foreground",
                                headerTitle: "text-foreground font-black text-2xl tracking-tight",
                                headerSubtitle: "text-muted-foreground text-base",
                                profileSectionTitleText: "text-foreground font-bold text-lg border-b border-border/20 pb-2 mb-4",
                                userPreviewMainIdentifier: "text-foreground font-bold",
                                userPreviewSecondaryIdentifier: "text-muted-foreground",
                                formButtonPrimary: "bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]",
                                formFieldInput: "bg-background/50 border-border/50 focus:border-primary rounded-xl",
                                breadcrumbItem: "text-muted-foreground font-medium",
                                breadcrumbSeparator: "text-muted-foreground/50",
                                scrollBox: "bg-transparent",
                                pageScrollBox: "bg-transparent",
                                formFieldLabel: "text-foreground/80 font-semibold",
                                accordionTriggerButton: "text-foreground font-semibold hover:bg-muted/20",
                                badge: "bg-primary/10 text-primary border-primary/20",
                            }
                        }}
                    />
                </div>
            </main>
        </div>
    );
}

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
                    <Link href="/pricing" className="text-sm font-bold hover:text-primary transition-colors">Pricing</Link>
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
