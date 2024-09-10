import { NextResponse } from "next/server";
import { appendToSheet } from "@/utils/googleSheetsService";

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    await appendToSheet([Object.values(formData)]);
    return NextResponse.json(
      { message: "Form data sent to Google Sheet successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending form data to Google Sheet:", error);
    return NextResponse.json(
      { message: "Error sending form data to Google Sheet" },
      { status: 500 },
    );
  }
}
