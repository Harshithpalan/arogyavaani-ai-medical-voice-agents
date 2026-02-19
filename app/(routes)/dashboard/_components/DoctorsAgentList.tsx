import { AIDoctorAgents } from '@/shared/list'
import * as React from 'react'
import DoctorAgentCard from './DoctorAgentCard'

function DoctorsAgentList() {
  return (
    <div className='mt-12 mb-16 px-4'>
      <div className='flex flex-col gap-2 mb-10 text-left md:text-left'>
        <h2 className='text-3xl md:text-4xl font-black tracking-tight'>
          AI Specialist <span className='text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600'>Doctors Agent</span>
        </h2>
        <p className='text-muted-foreground text-sm md:text-base max-w-2xl font-medium'>
          Consult with our specialized AI medical professionals. Each agent is pre-configured with expert medical knowledge.
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8'>
        {AIDoctorAgents.map((doctor, index) => (
          <div key={index} className='flex justify-center'>
            <DoctorAgentCard doctorAgent={doctor} />
          </div>
        ))}
      </div>
    </div>
  )
}
export default DoctorsAgentList