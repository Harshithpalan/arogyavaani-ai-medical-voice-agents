import React from "react";
import HistoryList from "./_components/HistoryList";
import { Button } from "@/components/ui/button";
import DoctorsAgentList from "./_components/DoctorsAgentList";
import AddNewSessionDialog from "./_components/AddNewSessionDialog";

function dashboard() {
    return (
        <div className="max-w-6xl mx-auto space-y-12">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h2 className="font-extrabold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60 tracking-tight">
                        My Dashboard
                    </h2>
                    <p className="text-muted-foreground mt-2 text-lg">
                        Manage your consultations and medical reports.
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <AddNewSessionDialog />
                </div>
            </header>

            <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <HistoryList />
                <DoctorsAgentList />
            </section>
        </div>
    )
}

export default dashboard;