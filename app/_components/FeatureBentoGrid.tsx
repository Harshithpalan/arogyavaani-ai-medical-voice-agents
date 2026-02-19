"use client";
import { cn } from "@/lib/utils";
import React from "react";

import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";


export function FeatureBentoGrid() {
  return (
    <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[22rem] gap-6 px-4">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn(
            "glass transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 group/bento",
            "[&>p:text-lg]",
            item.className
          )}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const SkeletonOne = () => {
  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] flex-col space-y-3 p-6 group-hover/bento:scale-95 transition-transform duration-500 overflow-hidden relative"
    >
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          variants={{
            initial: { opacity: 0.3, x: 0, scale: 0.95 },
            animate: { opacity: 1, x: 10, scale: 1, transition: { delay: i * 0.1, duration: 0.4 } }
          }}
          className="flex items-center gap-4 rounded-2xl border border-primary/5 bg-background p-4 shadow-sm backdrop-blur-sm"
        >
          <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <IconSignature className="h-5 w-5 text-primary group-hover/bento:rotate-12 transition-transform duration-300" />
          </div>
          <div className="space-y-2 flex-1">
            <div className="h-2 w-32 rounded-full bg-primary/20 animate-pulse" />
            <div className="h-1.5 w-full rounded-full bg-muted/40" />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

const SkeletonTwo = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] items-center justify-center p-6 group-hover/bento:scale-105 transition-transform duration-500">
      <div className="relative h-40 w-full max-w-[220px] rounded-[2.5rem] border-2 border-primary/10 bg-background p-5 shadow-2xl overflow-hidden glass">
        <div className="absolute inset-x-0 top-0 h-1.5 bg-primary/20 overflow-hidden">
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="h-full w-1/2 bg-primary"
          />
        </div>
        <div className="flex items-center gap-3 mb-6">
          <div className="size-8 rounded-full bg-red-500/10 flex items-center justify-center">
            <div className="size-2.5 rounded-full bg-red-500 animate-ping" />
          </div>
          <div className="h-2 w-20 rounded-full bg-muted animate-pulse" />
        </div>
        <div className="space-y-3">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex gap-2 items-center">
              <div className="h-1.5 flex-1 rounded-full bg-muted/60" />
              <div className="h-1.5 w-8 rounded-full bg-primary/20" />
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-between items-center">
          <div className="h-5 w-14 rounded-full bg-primary/5 border border-primary/10" />
          <div className="flex -space-x-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="size-6 rounded-full border-2 border-background bg-muted" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] rounded-2xl bg-muted/10 items-center justify-center relative overflow-hidden p-6"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10 opacity-50" />
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="relative group-hover/bento:scale-110 transition-transform duration-500">
          <div className="absolute inset-0 scale-150 bg-red-500/10 blur-2xl rounded-full animate-pulse" />
          <div className="text-6xl drop-shadow-2xl relative z-20">🫀</div>
        </div>
        <div className="space-y-2 text-center">
          <div className="h-2 w-40 rounded-full bg-primary/30 relative overflow-hidden">
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute inset-0 bg-primary/40"
            />
          </div>
          <div className="h-1.5 w-24 mx-auto rounded-full bg-muted/40" />
        </div>
      </div>
      <svg className="absolute inset-x-0 bottom-0 w-full h-1/2 opacity-40 group-hover/bento:opacity-80 transition-opacity duration-700" viewBox="0 0 100 40">
        <path
          d="M0 20 L15 20 L18 10 L22 30 L26 15 L30 25 L35 20 L50 20 L55 10 L60 35 L65 15 L70 25 L75 20 L100 20"
          fill="none"
          stroke="url(#pulse-gradient-2)"
          strokeWidth="2"
          strokeLinecap="round"
          className="animate-draw"
          style={{
            strokeDasharray: "400",
            strokeDashoffset: "400",
            animation: "draw-pulse 4s infinite linear"
          }}
        />
        <defs>
          <linearGradient id="pulse-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="var(--primary)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
      <style>{`
        @keyframes draw-pulse {
          to { strokeDashoffset: -400; }
        }
      `}</style>
    </motion.div>
  );
};

const SkeletonFour = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] items-center justify-center gap-6 p-6 group-hover/bento:gap-8 transition-all duration-500">
      <div className="w-1/2 h-full rounded-3xl border-2 border-primary/5 bg-background p-5 flex flex-col justify-center gap-4 shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-transparent" />
        <div className="flex items-center gap-3 relative z-10">
          <div className="size-10 rounded-full bg-primary/5 flex items-center justify-center border border-primary/10">
            <div className="size-2 rounded-full bg-primary/40" />
          </div>
          <div className="h-2 w-16 rounded-full bg-muted/80" />
        </div>
        <div className="h-2 w-full rounded-full bg-muted/40 relative z-10" />
        <div className="h-2 w-2/3 rounded-full bg-muted/40 relative z-10" />
      </div>
      <div className="w-1/2 h-full rounded-3xl border-2 border-primary/20 bg-primary/5 p-5 flex flex-col justify-center gap-4 relative overflow-hidden shadow-2xl shadow-primary/10">
        <div className="absolute top-0 right-0 p-3 text-[10px] font-bold text-primary tracking-widest animate-pulse">AI_SYNC_ACTIVE</div>
        <div className="flex items-center gap-3 relative z-10">
          <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center p-2">
            <div className="size-full rounded-full border-2 border-primary/40 border-t-transparent animate-spin" />
          </div>
          <div className="h-2 w-16 rounded-full bg-primary/30" />
        </div>
        <div className="h-2 w-full rounded-full bg-primary/20 relative z-10" />
        <div className="h-2 w-2/3 rounded-full bg-primary/20 relative z-10" />
        <div className="absolute inset-0 shimmer opacity-10" />
      </div>
    </div>
  );
};

const SkeletonFive = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] p-6 flex-col gap-4 group-hover/bento:translate-y-[-5px] transition-transform duration-500">
      <div className="flex-1 rounded-[2rem] border-2 border-primary/10 bg-background/80 p-5 space-y-4 shadow-xl overflow-hidden relative group">
        <div className="absolute inset-0 shimmer opacity-20" />
        <div className="flex justify-between items-center relative z-10">
          <div className="h-4 w-24 rounded-full bg-primary/10 flex items-center px-2">
            <div className="h-1.5 w-1.5 rounded-full bg-primary animate-ping mr-2" />
            <div className="h-1 w-full rounded-full bg-primary/20" />
          </div>
          <div className="h-6 w-6 rounded-lg bg-muted flex items-center justify-center">
            <div className="size-1.5 rounded-full bg-muted-foreground/30" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 relative z-10">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="h-12 rounded-xl bg-muted/30 border border-primary/5 relative overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-1 bg-primary/20" />
            </div>
          ))}
        </div>
        <div className="pt-2 text-[10px] text-primary/60 font-mono flex justify-between relative z-10">
          <span>STATUS: SYNC_READY</span>
          <span className="animate-pulse">LATENCY: 12ms</span>
        </div>
      </div>
    </div>
  );
};
const items = [
  {
    title: "AI Clinical Intelligence",
    description: (
      <span className="text-sm">
        Instantly analyze patient symptoms and medical history with 99% accuracy.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-primary" />,
  },
  {
    title: "Real-time Voice Triage",
    description: (
      <span className="text-sm">
        Empathetic, medical-grade voice interactions for patient intake and triage.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-primary" />,
  },
  {
    title: "Vitals Monitoring Sync",
    description: (
      <span className="text-sm">
        Seamlessly synchronize patient vitals from wearable devices to EHR systems.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-primary" />,
  },
  {
    title: "Automated Clinical Documentation",
    description: (
      <span className="text-sm">
        Generate comprehensive medical reports and session summaries automatically after every call.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-primary" />,
  },
  {
    title: "EHR Deep Integration",
    description: (
      <span className="text-sm">
        Bi-directional sync with major EHR platforms for seamless provider workflows.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-primary" />,
  },
];
