import { NextRequest, NextResponse } from "next/server";
import { initDB, getChatLogs } from "../../../lib/turso";

export async function GET(request: NextRequest) {
  const password = request.headers.get("x-dashboard-password");
  if (password !== process.env.DASHBOARD_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await initDB();
  const logs = await getChatLogs(200);
  return NextResponse.json({ logs });
}
