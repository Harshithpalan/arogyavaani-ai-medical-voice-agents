"use client"
import React, { ReactNode } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import moment from 'moment';
import Image from 'next/image';

import {
  ShieldAlert,
  Activity,
  ClipboardList,
  Stethoscope,
  Clock,
  Pill,
  CheckCircle2,
  Calendar,
  User,
  AlertCircle
} from "lucide-react";

interface SessionDetail {
  createdOn: string | number | Date;
  selectedDoctor: any;
  notes: string;
  report: {
    chiefComplaint: string;
    summary: string;
    symptoms: string[];
    duration: string;
    severity: string;
    medicationsMentioned: string[];
    recommendations: string[];
    agent?: string;
    user?: string;
    timestamp?: string;
  };
}

type props = {
  record: SessionDetail
}

function ViewReportDialog({ record }: props) {
  const report = record.report;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'outline'} size={'sm'} className="rounded-full px-4 hover:bg-primary/10 hover:text-primary transition-all">
          View Report
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[95vh] overflow-y-auto rounded-[2.5rem] bg-background border-border shadow-xl p-0 scrollbar-hide">
        <div className="bg-primary/5 p-8 border-b border-border">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <ClipboardList className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Clinical Consultation Report</span>
            </div>
            <DialogTitle className="text-3xl font-black text-foreground md:text-4xl text-left">
              Medical <span className="text-primary">Evaluation</span>
            </DialogTitle>
          </DialogHeader>
        </div>

        <div className="p-8 space-y-8">
          {/* Header Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-2xl bg-muted/30 border border-border">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl overflow-hidden border bg-background flex items-center justify-center">
                {record.selectedDoctor?.image ? (
                  <Image src={record.selectedDoctor.image} alt="Doctor" width={48} height={48} className="object-cover h-full w-full" />
                ) : <Stethoscope className="w-6 h-6 text-primary" />}
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Specialist</p>
                <p className="font-bold text-foreground leading-tight">{record.selectedDoctor?.specialist || "AI Medical Agent"}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-background border flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Consultation Date</p>
                <p className="font-bold text-foreground">
                  {record.createdOn ? moment(new Date(record.createdOn)).format('MMMM Do YYYY, h:mm a') : 'N/A'}
                </p>
              </div>
            </div>
          </div>

          {/* Chief Complaint & Summary */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-primary">
              <ShieldAlert className="w-5 h-5" />
              <h3 className="font-bold text-xl uppercase tracking-tight text-foreground/90">Chief Complaint</h3>
            </div>
            <p className="text-lg font-semibold text-foreground/80 pl-7 leading-snug">
              {report?.chiefComplaint || "No specific complaint recorded."}
            </p>

            <div className="mt-6 p-5 bg-primary/5 rounded-2xl border border-primary/10 italic text-muted-foreground leading-relaxed pl-7">
              "{report?.summary || "No summary available."}"
            </div>
          </div>

          {/* Clinical Findings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Symptoms */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-blue-500">
                <Activity className="w-5 h-5" />
                <h3 className="font-bold uppercase tracking-tight text-foreground/80">Symptoms</h3>
              </div>
              <div className="flex flex-wrap gap-2 pl-7">
                {report?.symptoms?.map((symptom, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-sm font-medium">
                    {symptom}
                  </span>
                )) || <p className="text-muted-foreground text-sm">No symptoms noted.</p>}
              </div>
            </div>

            {/* Severity & Duration */}
            <div className="space-y-6 pl-0 md:pl-8 border-l border-border">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-red-500/10 rounded-lg">
                  <AlertCircle className="w-4 h-4 text-red-500" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Clinical Severity</p>
                  <p className="font-bold capitalize text-red-500">{report?.severity || "Normal"}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-primary/10 rounded-lg">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Duration</p>
                  <p className="font-bold text-foreground">{report?.duration || "Not specified"}</p>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Medications & Recommendations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <Pill className="w-5 h-5" />
                <h3 className="font-bold uppercase tracking-tight text-foreground/80">Medications</h3>
              </div>
              <ul className="space-y-2 pl-7">
                {report?.medicationsMentioned?.length ? report.medicationsMentioned.map((med, i) => (
                  <li key={i} className="text-sm flex items-center gap-2 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50" /> {med}
                  </li>
                )) : <li className="text-sm text-muted-foreground">None mentioned.</li>}
              </ul>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle2 className="w-5 h-5" />
                <h3 className="font-bold uppercase tracking-tight text-foreground/80">AI Recommendations</h3>
              </div>
              <ul className="space-y-3 pl-7">
                {report?.recommendations?.map((rec, i) => (
                  <li key={i} className="text-sm p-3 bg-green-500/5 border border-green-500/10 rounded-xl text-foreground/80 flex gap-3 leading-snug">
                    <span className="text-green-600 font-bold shrink-0">{i + 1}.</span>
                    {rec}
                  </li>
                )) || <li className="text-sm text-muted-foreground">No recommendations provided.</li>}
              </ul>
            </div>
          </div>
        </div>

        <div className="p-8 bg-muted/20 border-t border-border flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-black">
              AI Voice Agent Health Record (Powered by ArogyaVaani)
            </p>
            <Button variant="ghost" className="text-xs uppercase font-bold tracking-wider text-primary hover:bg-primary/5" onClick={() => window.print()}>
              Export PDF
            </Button>
          </div>
          <div className="mt-4 p-4 bg-amber-500/5 border border-amber-500/10 rounded-xl">
            <p className="text-sm text-muted-foreground text-center font-medium italic">
              "For personalized guidance and medical decisions, always consult a real doctor"
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ViewReportDialog;