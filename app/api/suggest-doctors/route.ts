import { openai } from "@/config/OpenAiModel";
import { AIDoctorAgents } from "@/shared/list";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { notes } = await req.json();

  try {
    const completion = await openai.chat.completions.create({
      model: "google/gemini-2.0-flash-001",
      messages: [
        { role: 'system', content: JSON.stringify(AIDoctorAgents) },
        { role: "user", content: "User Notes/Symptoms:" + notes + ",Depends on user notes and symptoms, Please suggest list of doctors, Return Object in JSON only" }
      ],
      response_format: { type: "json_object" }
    });

    const rawResp = completion.choices[0].message.content;
    if (!rawResp) throw new Error("No response from AI");

    const JSONResp = JSON.parse(rawResp.trim().replace('```json', '').replace('```', ''));
    return NextResponse.json(JSONResp);

  } catch (e: any) {
    console.error("Error in suggest-doctors route:", e);
    return NextResponse.json({ error: e.message || "Internal Server Error" }, { status: 500 });
  }
}