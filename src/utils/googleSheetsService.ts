import { JWT } from "google-auth-library";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
// const CREDENTIALS_PATH = process.env.GOOGLE_APPLICATION_CREDENTIALS as string;
const CREDENTIALS_PATH = process.env.VERCEL
  ? "/var/task/secrets/afrilion.json"
  : "./secrets/afrilion.json";
const SHEET_ID = process.env.GOOGLE_SHEET_ID as string;

async function getAuthClient() {
  try {
    const auth = new JWT({
      keyFile: CREDENTIALS_PATH,
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
