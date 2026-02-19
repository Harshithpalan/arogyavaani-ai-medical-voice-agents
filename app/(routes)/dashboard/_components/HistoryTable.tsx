"use client"
import React, { ReactNode } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from "next/image"
import moment from 'moment'
import ViewReportDialog from './ViewReportDialog';

export type SessionDetail = {
  createdOn: string | Date;
  notes: string;
  selectedDoctor: any;
  id: string;
  sessionId: string;
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

type Props = {
  historyList: SessionDetail[]
}

function HistoryTable({ historyList }: Props) {
  return (
    <div className="w-full space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-foreground/80 tracking-tight">Recent Consultations</h3>
        <span className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full border">
          {historyList.length} Reports
        </span>
      </div>

      <div className="grid w-full overflow-hidden border rounded-2xl glass shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/30 border-b hover:bg-muted/30">
              <TableHead className="py-4 font-bold text-foreground w-[35%]">AI Medical Specialist</TableHead>
              <TableHead className="py-4 font-bold text-foreground w-[35%]">Description</TableHead>
              <TableHead className="py-4 font-bold text-foreground w-[20%]">Time</TableHead>
              <TableHead className="py-4 font-bold text-foreground text-right pr-8 w-[10%]">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {historyList.map((record: SessionDetail, index: number) => (
              <TableRow key={record.id || index} className="group hover:bg-primary/5 transition-colors border-b last:border-0">
                <TableCell className="py-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl overflow-hidden border bg-muted/50 group-hover:border-primary group-hover:scale-105 transition-all shadow-sm">
                      {record.selectedDoctor.image ? (
                        <Image
                          src={record.selectedDoctor.image}
                          alt={record.selectedDoctor.specialist}
                          width={48}
                          height={48}
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <span className="text-xl">🩺</span>
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{record.selectedDoctor.specialist}</p>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest text-[10px]">Medical Agent</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="py-5 font-medium text-muted-foreground max-w-xs truncate">
                  {record.notes}
                </TableCell>
                <TableCell className="py-5 text-muted-foreground font-medium">
                  {moment(new Date(record.createdOn)).fromNow()}
                </TableCell>
                <TableCell className="py-5 text-right pr-8">
                  <ViewReportDialog record={record} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <p className="text-center text-xs text-muted-foreground/60 py-4 uppercase tracking-[0.2em]">
        Previous Consultation Reports
      </p>
    </div>
  )
}

export default HistoryTable