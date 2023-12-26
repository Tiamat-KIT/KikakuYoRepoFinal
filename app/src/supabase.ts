/* import {createClient} from "@supabase/supabase-js"
export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
) */
import * as TrainJson from "../train-a145c-3375c34ca27d.json"
import { google } from "googleapis";

export async function getGoogleSheetsData(range: string) {
  const auth = await google.auth.getClient({
    projectId: "train-a145c",
    credentials: {
      type: "service_account",
      private_key: TrainJson["private_key"],
      client_email: TrainJson["client_email"],
      client_id: TrainJson["client_id"],
      token_url: TrainJson["token_uri"],
      universe_domain: "googleapis.com",
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const data = await sheets.spreadsheets.values.get({
    spreadsheetId: "<Your Spread sheet ID from shared url>",
    range: range,
  });

  return data.data.values;
}