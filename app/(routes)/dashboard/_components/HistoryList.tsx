"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import AddNewSessionDialog from "./AddNewSessionDialog";
import axios from "axios";
import HistoryTable from "./HistoryTable";
import { SessionDetail } from "../medical-agent/[sessionId]/page";

function HistoryList() {
  const [historyList, setHistoryList] = useState([]);

  useEffect(() => {
    GetHistoryList();
  }, [])

  const GetHistoryList = async () => {
    const result = await axios.get('/api/session-chat?sessionId=all');
    console.log(result.data);
    setHistoryList(result.data);

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