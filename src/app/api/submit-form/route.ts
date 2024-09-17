import { NextResponse } from "next/server";
import { appendToSheet } from "@/utils/googleSheetsService";
import { RateLimiter } from "limiter";

const limiter = new RateLimiter({ tokensPerInterval: 200, interval: "minute" });

export async function POST(request: Request) {
  try {
    const remainingRequests = await limiter.removeTokens(1);
    if (remainingRequests < 0) {
      return NextResponse.json(
        { message: "Rate limit exceeded. Please try again later." },
        { status: 429 },
      );
    }

    console.log("API route called");
    const formData = await request.json();
    console.log("Received form data:", formData);
    const result = await appendToSheet([Object.values(formData)]);
    console.log("Append result:", result);
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
