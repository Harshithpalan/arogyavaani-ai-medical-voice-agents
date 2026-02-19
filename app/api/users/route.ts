import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  const { name, email } = await req.json();

  try {
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Check if User Already Exits 
    const users = await db.select().from(usersTable)
      .where(eq(usersTable.email, email));

    // If Not Then Create New user
    if (users?.length == 0) {
      const result = await db.insert(usersTable).values({
        name: name || 'User',
        email: email,
        credits: 10
      }).returning({
        name: usersTable.name,
        email: usersTable.email,
        credits: usersTable.credits
      });
      return NextResponse.json(result[0]);
    }

    return NextResponse.json(users[0]);
  }
  catch (e: any) {
    console.error("Error in users route:", e);
    return NextResponse.json({ error: e.message || "Internal Server Error" }, { status: 500 });
  }
}