import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate required fields
    const required = ["name", "email", "business", "what_you_do", "what_to_automate", "budget"];
    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    const submission = {
      ...body,
      submittedAt: new Date().toISOString(),
      id: `app_${Date.now()}`,
    };

    // Log to file (replace with webhook/DB in production)
    const logDir = path.join(process.cwd(), "data");
    try {
      await fs.mkdir(logDir, { recursive: true });
      const logFile = path.join(logDir, "applications.jsonl");
      await fs.appendFile(logFile, JSON.stringify(submission) + "\n", "utf8");
    } catch {
      // File logging failure shouldn't break the response
    }

    // Log to console for Vercel function logs
    console.log("New application:", JSON.stringify(submission));

    return NextResponse.json({ success: true, id: submission.id }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
