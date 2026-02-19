import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@tabler/icons-react";

export type doctorAgent = {
  id: number,
  specialist: string,
  description: string,
  image: string,
  agentPrompt: string,
  voiceId?: string
}
type props = {
  doctorAgent: doctorAgent
}

function DoctorAgentCard({ doctorAgent }: props) {
  return (
    <div className='group relative flex flex-col p-4 rounded-[2.5rem] bg-background/50 border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 backdrop-blur-sm overflow-hidden'>
      {/* Background Glow Effect */}
      <div className='absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500' />

      <div className='relative aspect-[3/4] w-full mb-4 overflow-hidden rounded-[2rem] border border-border/50 bg-muted'>
        <Image
          src={doctorAgent.image}
          alt={doctorAgent.specialist}
          fill
          className='object-cover transition-transform duration-700 group-hover:scale-110'
        />
        {/* Subtle Overlay */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
      </div>

      <div className='relative'>
        <div className='flex items-center gap-2 mb-1'>
          <div className='w-1.5 h-1.5 rounded-full bg-primary animate-pulse' />
          <h2 className='font-black text-lg text-foreground tracking-tight line-clamp-1'>{doctorAgent.specialist}</h2>
        </div>
        <p className='line-clamp-2 text-sm text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-foreground/70'>
          {doctorAgent.description}
        </p>

        <Button className='w-full mt-6 rounded-2xl h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg shadow-primary/25 transition-all active:scale-95 flex items-center justify-center gap-2 group/btn'>
          Start Consultation
          <IconArrowRight className='w-4 h-4 transition-transform group-hover/btn:translate-x-1' />
        </Button>
      </div>
    </div>
  )
}

export default DoctorAgentCard