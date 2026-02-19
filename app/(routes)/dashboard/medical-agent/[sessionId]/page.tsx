"use client"
import axios from "axios";
import { useParams } from "next/navigation";
import * as React from "react";
import { useEffect, useState } from "react";
import { doctorAgent } from "../../_components/DoctorAgentCard";
import { Circle, Loader, PhoneCall, Slice } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Vapi from '@vapi-ai/web';
import { PhoneOff } from "lucide-react";
import { Messages } from "openai/resources/chat/completions.mjs";
import { useRouter } from "next/navigation";
import { toast } from "sonner";


export type SessionDetail = {
  id: number,
  notes: string,
  sessionId: string,
  report: JSON,
  selectedDoctor: doctorAgent,
  createdOn: string,
}

type messages = {
  role: string,
  text: string
}

function MedicalVoiceAgent() {
  const { sessionId } = useParams();
  const [sessionDetail, setSessionDetail] = useState<SessionDetail>();
  const [callStarted, setCallStarted] = useState(false);
  const [vapiInstance, setVapiInstance] = useState<any>();
  const [currentRole, setCurrentRole] = useState<string | null>();
  const [liveTranscript, setLiveTranscript] = useState<string>();
  const [messages, setMessages] = useState<messages[]>([]);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(0);
  const router = useRouter()

  useEffect(() => {
    sessionId && GetSessionDetails();
  }, [sessionId]);

  useEffect(() => {
    let interval: any;
    if (callStarted) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    } else {
      setTimer(0);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [callStarted]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const GetSessionDetails = async () => {
    const result = await axios.get('/api/session-chat?sessionId=' + sessionId);
    console.log(result.data);
    setSessionDetail(result.data);
  }

  const StartCall = async () => {
    if (!sessionDetail) {
      toast.error('Session details not loaded yet. Please wait.');
      return;
    }
    setLoading(true);
    const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_API_KEY!);
    setVapiInstance(vapi);

    const VapiAgentConfig = {
      name: 'AI Medical Doctor Voice Agent',
      firstMessage: `Hello, I am your AI ${sessionDetail?.selectedDoctor?.specialist}. I've reviewed your notes regarding "${sessionDetail?.notes}". How can I help you today?`,
      transcriber: {
        provider: 'assembly-ai',
        language: 'en'
      },
      voice: {
        provider: '11labs',
        voiceId: sessionDetail?.selectedDoctor?.voiceId
      },
      model: {
        provider: 'openai',
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: sessionDetail?.selectedDoctor?.agentPrompt
          }
        ]
      }
    }

    //@ts-ignore
    vapi.start(VapiAgentConfig);

    vapi.on('error', (e: any) => {
      console.error('Vapi Error:', e);
      toast.error('Voice agent connection error. Please try again.');
      setLoading(false);
    });

    vapi.on('call-start', () => {
      console.log('Call started');
      setLoading(false);
      setCallStarted(true);
    });
    vapi.on('call-end', () => {
      console.log('Call ended')
      setCallStarted(false);
    });
    vapi.on('message', (message) => {
      if (message.type === 'transcript') {
        const { role, transcriptType, transcript } = message;
        console.log(`${message.role}: ${message.transcript}`);

        if (transcriptType == 'partial') {
          setLiveTranscript(transcript);
          setCurrentRole(role);
        }
        else if (transcriptType == 'final') {
          // Final transcript
          setMessages((prev: any) => [...prev, { role: role, text: transcript }]);
          setLiveTranscript('');
          setCurrentRole(null);
        }
      }
    });

    vapi.on('speech-start', () => {
      console.log('Assistant started speaking');
      setCurrentRole('assistant');
    });
    vapi.on('speech-end', () => {
      console.log('Assistant stopped speaking');
      setCurrentRole('user');
    });
  }

  const endCall = async () => {
    setLoading(true);
    if (!vapiInstance) return;

    try {
      // Stop the call
      vapiInstance.stop();
      setCallStarted(false);

      // Generate Report
      toast.info('Generating your medical report... Please wait.');
      await GenerateReport();
      toast.success('Your report is generated!');
    } catch (error) {
      console.error("Error ending call or generating report:", error);
      toast.error("Failed to generate report, but your session is saved.");
    } finally {
      setLoading(false);
      setVapiInstance(null);
      router.replace('/dashboard');
    }
  };

  const GenerateReport = async () => {
    // Include pending live transcript if it exists
    const finalMessages = [...messages];
    if (liveTranscript && liveTranscript.trim().length > 0) {
      finalMessages.push({ role: currentRole || 'user', text: liveTranscript });
    }

    const result = await axios.post('/api/medical-report', {
      messages: finalMessages,
      sessionDetail: sessionDetail,
      sessionId: sessionId
    });
    console.log(result.data);
    return result.data;
  }

  return (
    <div className='p-5 border rounded-3xl bg-secondary'>
      {!sessionDetail ? (
        <div className='flex justify-center items-center h-64'>
          <Loader className='animate-spin' />
          <span className='ml-2'>Loading session details...</span>
        </div>
      ) : (
        <>
          <div className='flex justify-between items-center'>
            <h2 className='p-1 px-2 border rounded-md flex gap-2 items-center'><Circle className={`h-4 w-4 rounded-full ${callStarted ? 'bg-green-500' : 'bg-red-500'}`} />{callStarted ? 'Connected.....' : 'Not Connected'}</h2>
            <h2 className='font-bold text-xl text-gray-400'>{formatTime(timer)}</h2>
          </div>

          <div className='flex items-center flex-col mt-10'>
            <Image src={sessionDetail?.selectedDoctor?.image} alt={sessionDetail?.selectedDoctor?.specialist ?? ''}
              width={120}
              height={120}
              className='h-[100px] w-[100px] object-cover rounded-full'
            />
            <h2 className=' mt-2 text-lg'>{sessionDetail?.selectedDoctor?.specialist}</h2>
            <p className='text-sm text-gray-400'>AI Medical Voice Agent</p>

            <div className='mt-12 overflow-y-auto flex flex-col item-center items-center px-10 md:px-28 lg:px-52 xl:px-72'>
              {messages?.slice(-4).map((msg: messages, index) => (

                <h2 className='text-gray-400 p-2' key={index}>{msg.role}: {msg.text}</h2>


              ))}
              {liveTranscript && liveTranscript?.length > 0 && <h2 className='text-lg '>{currentRole}:{liveTranscript}</h2>}

            </div>

            {!callStarted ? (
              <Button className='mt-20' onClick={StartCall} disabled={loading}>
                {loading ? <Loader className='animate-spin' /> : <PhoneCall />}Start Call
              </Button>
            ) : (
              <Button variant={'destructive'} onClick={endCall} disabled={loading}>
                {loading ? <Loader className='animate-spin' /> : <PhoneOff />} Disconnect</Button>
            )}
          </div>
        </>
      )}
    </div>
  );
}


export default MedicalVoiceAgent; 