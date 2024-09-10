import { JWT } from "google-auth-library";
import fs from "fs";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
const SHEET_ID = process.env.GOOGLE_SHEET_ID as string;

async function getAuthClient() {
  try {
    let credentials;
    if (process.env.VERCEL) {
      // For Vercel deployment, use the JSON content directly
      credentials = JSON.parse(
        process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON || "{}",
      );
    } else {
      // For local development, read from the file
      const CREDENTIALS_PATH = "./secrets/afrilion.json";
      credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, "utf8"));
    }

    const auth = new JWT({
      email: credentials.client_email,
      key: credentials.private_key,
      scopes: SCOPES,
    });

    await auth.authorize();
    return auth;
  } catch (error) {
    console.error("Error authenticating:", error);
    throw error;
  }
}

export async function appendToSheet(values: string[][]) {
  try {
    const { google } = await import("googleapis");
    const auth = await getAuthClient();
    const sheets = google.sheets({ version: "v4", auth });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: "Sheet1",
      valueInputOption: "USER_ENTERED",
      requestBody: { values },
    });

    console.log(`${response.data.updates?.updatedCells} cells appended.`);
    return response.data;
  } catch (error) {
    console.error("Error appending to sheet:", error);
    throw error;
  }
}
