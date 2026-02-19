"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Clock,
  Mic,
  ArrowRight,
  Brain,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { useUser, UserButton } from "@clerk/nextjs";
import { FeatureBentoGrid } from "./_components/FeatureBentoGrid";
import Logo from "@/components/ui/Logo";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern opacity-[0.2] text-primary/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

        {/* Dynamic Beams */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[2px] h-full bg-gradient-to-b from-transparent via-primary/40 to-transparent animate-beam opacity-20" />
          <div className="absolute top-0 left-2/4 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-400/30 to-transparent animate-beam [animation-delay:2s] opacity-20" />
          <div className="absolute top-0 left-3/4 w-[2px] h-full bg-gradient-to-b from-transparent via-primary/40 to-transparent animate-beam [animation-delay:5s] opacity-20" />
        </div>

        {/* Floating Halos */}
        <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-blue-500/5 blur-[150px] rounded-full animate-pulse-slow [animation-delay:3s]" />
      </div>

      <Navbar />

      <main className="relative z-10 flex flex-col items-center justify-center pt-32 px-6 md:px-12 lg:px-24">
        {/* Announcement Badge */}
        <div className="mb-8 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 text-primary text-sm font-medium shadow-xl shadow-primary/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            AI-Powered Medical Solutions
          </div>
        </div>

        {/* Hero Content */}
        <div className="max-w-5xl text-center">
          <div className="relative inline-block mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.2] mb-6 animate-in fade-in slide-in-from-top-8 duration-1000">
              <span className="inline-block animate-floating cursor-default">🩺</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-cyan-400 bg-300% animate-gradient text-glow">
                Revolutionize Patient Care
              </span>
              <br />
              <span className="text-foreground/80 text-3xl md:text-4xl lg:text-5xl font-semibold">
                with AI Medical Voice Agents
              </span>
            </h1>
          </div>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Redefine healthcare with ArogyaVaani. Harness the power of voice intelligence to streamline clinical workflows, enhance patient interactions, and provide trusted care that never stops — reliable and caring, 24/7.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <Link href="/dashboard">
              <button className="cssbuttonsIoButton">
                Get Started
                <div className="icon">
                  <svg height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor" />
                  </svg>
                </div>
              </button>
            </Link>
          </div>
        </div>

        {/* Features Preview */}
        <div className="mt-32 w-full max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Enterprise-Grade Architecture</h2>
            <p className="text-muted-foreground">Built for reliability, security, and medical accuracy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-[2.5rem] bg-muted/30 border glass hover:bg-muted/50 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">HIPAA Compliant</h3>
              <p className="text-muted-foreground">Highest standard of data protection and patient privacy protocols.</p>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-muted/30 border glass hover:bg-muted/50 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Real-time Triage</h3>
              <p className="text-muted-foreground">Instant medical assessment with advanced voice synthesis logic.</p>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-muted/30 border glass hover:bg-muted/50 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Clinical Intelligence</h3>
              <p className="text-muted-foreground">Knowledge-driven agents specialized in diverse medical fields.</p>
            </div>
          </div>
        </div>

        <div className="mt-32">
          <FeatureBentoGrid />
        </div>
      </main>
    </div>
  );
}

import BubbleButton from "@/components/ui/BubbleButton";

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
            <Link href="/dashboard" className="hidden sm:block">
              <button className="dashboard-button">
                <span className="dashboard-button-content">Dashboard</span>
              </button>
            </Link>
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
    </nav>
  );
};
