import { NextRequest } from "next/server";
import { openai } from "@/config/OpenAiModel";
import { NextResponse } from "next/server";
import { SessionChatTable } from "@/config/schema";
import { db } from "@/config/db";
import { eq } from "drizzle-orm";

const REPORT_GEN_PROMT = `You are an AI Medical Assistant. Process the following conversation transcript between a Medical AI Agent and a Patient. 
Extract and generate a highly structured medical report in JSON format.

FIELDS TO FILL:
1. sessionId: The provided session identifier.
2. agent: The name/specialization of the AI doctor.
3. user: Patient name (use "Anonymous" if unknown).
4. timestamp: Current ISO timestamp.
5. chiefComplaint: The primary reason the user sought medical help (one clear sentence).
6. summary: A professional clinical summary (3-4 sentences) of the encounter.
7. symptoms: An array of specific medical symptoms identified.
8. duration: Explicitly state how long the symptoms have persisted.
9. severity: One of [Mild, Moderate, Severe, Normal].
10. medicationsMentioned: Array of any medicines discussed.
11. recommendations: Array of actionable medical advice or next steps.

IMPORTANT: If any field is not explicitly mentioned in the conversation, provide a logical medical inference or use "Not mentioned" rather than leaving it blank.

Return ONLY a raw JSON object. No markdown, no "json" tags, no leading/trailing text.
{
  "sessionId": "",
  "agent": "",
  "user": "",
  "timestamp": "",
  "chiefComplaint": "",
  "summary": "",
  "symptoms": [],
  "duration": "",
  "severity": "",
  "medicationsMentioned": [],
  "recommendations": []
}
`

export async function POST(req: NextRequest) {
  const { sessionId, sessionDetail, messages } = await req.json();

  try {
    const transcriptText = messages.map((m: any) => `${m.role}: ${m.text}`).join('\n');
    const UserInput = `Session Details: ${JSON.stringify(sessionDetail)}\n\nTranscript:\n${transcriptText}\n\nSessionID: ${sessionId}`;

    const completion = await openai.chat.completions.create({
      model: "google/gemini-2.0-flash-001",
      messages: [
        { role: 'system', content: REPORT_GEN_PROMT },
        { role: "user", content: UserInput }
      ],
      response_format: { type: "json_object" }
    });

    const rawResp = completion.choices[0].message.content;
    if (!rawResp) throw new Error("No response from AI");

    const JSONResp = JSON.parse(rawResp);

    // save to Database
    const result = await db.update(SessionChatTable).set({
      report: JSONResp,
      conversation: messages
    }).where(eq(SessionChatTable.sessionId, sessionId));

    return NextResponse.json(JSONResp);
  } catch (e: any) {
    console.error("Error in medical-report route:", e);
    return NextResponse.json({ error: e.message || "Internal Server Error" }, { status: 500 });
  }
}