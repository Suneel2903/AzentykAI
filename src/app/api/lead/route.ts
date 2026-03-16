import { NextResponse } from "next/server";
import { BRAND } from "@/content/placeholders";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Log intent to server console
        console.log("LEAD_CAPTURE:", body);
        console.log("TODO: Integrate with CRM at:", BRAND.demoEmailTarget);

        return NextResponse.json({ success: true }, { status: 200 });
    } catch {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
}
