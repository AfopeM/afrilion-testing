import { JWT } from "google-auth-library";
import fs from "fs";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
const SHEET_ID = process.env.GOOGLE_SHEET_ID as string;

async function getAuthClient() {
  try {
    let credentials;
    if (process.env.VERCEL) {
      console.log("Using Vercel environment");
      credentials = JSON.parse(
        process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON || "{}",
      );
    } else {
      console.log("Using local environment");
      const CREDENTIALS_PATH = "./secrets/afrilion.json";
      credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, "utf8"));
    }

    console.log("Credentials loaded:", !!credentials);

    if (!credentials.client_email || !credentials.private_key) {
      throw new Error(
        "Invalid credentials: missing client_email or private_key",
      );
    }

    const auth = new JWT({
      email: credentials.client_email,
      key: credentials.private_key,
      scopes: SCOPES,
    });

    await auth.authorize();
    console.log("Auth client created successfully");
    return auth;
  } catch (error) {
    console.error("Error in getAuthClient:", error);
    throw error;
  }
}

export async function appendToSheet(values: string[][]) {
  try {
    console.log("Starting appendToSheet");
    const { google } = await import("googleapis");
    const auth = await getAuthClient();
    const sheets = google.sheets({ version: "v4", auth });

    if (!SHEET_ID) {
      throw new Error("GOOGLE_SHEET_ID is not set");
    }

    console.log("Appending to sheet:", SHEET_ID);
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: "Sheet1",
      valueInputOption: "USER_ENTERED",
      requestBody: { values },
    });

    console.log(`${response.data.updates?.updatedCells} cells appended.`);
    return response.data;
  } catch (error) {
    console.error("Error in appendToSheet:", error);
    throw error;
  }
}
