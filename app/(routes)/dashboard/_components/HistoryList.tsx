"use client"
import * as React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import AddNewSessionDialog from "./AddNewSessionDialog";
import axios from "axios";
import HistoryTable, { SessionDetail } from "./HistoryTable";
import { UserDetailContext } from "@/context/UserDetailContext";

function HistoryList() {
  const { UserDetail } = React.useContext(UserDetailContext);
  const [historyList, setHistoryList] = useState<SessionDetail[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    UserDetail && GetHistoryList();
  }, [UserDetail])

  const GetHistoryList = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await axios.get('/api/session-chat?sessionId=all&email=' + UserDetail?.email);
      console.log(result.data);
      if (Array.isArray(result.data)) {
        setHistoryList(result.data);
      } else {
        setHistoryList([]);
        console.error("Expected array for history list, got:", result.data);
      }
    } catch (err: any) {
      console.error("Failed to fetch history:", err);
      setError("Failed to load your history. Please try refreshing.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='mt-10'>
      {historyList.length == 0 ?
        <div className='flex items-center flex-col justify-center p-12 border-2 border-dashed rounded-[2rem] bg-muted/5 border-muted-foreground/20 glass'>
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
            <Image src={'/medical-assistance.png'} alt='empty'
              width={120}
              height={120}
              className="relative drop-shadow-2xl"
            />
          </div>
          <h2 className='font-bold text-2xl mt-4 text-foreground/80 tracking-tight'>Your health journey starts here</h2>
          <p className="text-muted-foreground max-w-md text-center mt-2 mb-8">
            Consult with specialized AI medical agents and keep track of your health reports in one secure place.
          </p>
          <AddNewSessionDialog />
        </div>
        :
        <div>
          <HistoryTable historyList={historyList} />
        </div>
      }
    </div>
  );
}

export default HistoryList;