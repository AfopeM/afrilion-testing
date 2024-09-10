import { NextResponse } from "next/server";
import { appendToSheet } from "@/utils/googleSheetsService";

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const result = await appendToSheet([Object.values(formData)]);
    return NextResponse.json(
      { message: "Form data sent to Google Sheet successfully", result },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error in API route:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    const errorStack = error instanceof Error ? error.stack : undefined;
    return NextResponse.json(
      {
        message: "Error sending form data to Google Sheet",
        error: errorMessage,
        stack: errorStack,
      },
      { status: 500 },
    );
  }
}
