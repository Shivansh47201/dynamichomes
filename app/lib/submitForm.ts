/* =========================================================
   UTILITY TO SUBMIT FORMS TO GOOGLE SHEETS & API
   Spreadsheet ID: 1Kbzb7g5zxSoL5guAmGOb7e-IELS0XlpHGYjf761sU20
   Supported Form Types: 'enquiry' | 'schedule' | 'subscribe'
========================================================= */

export interface FormSubmissionPayload {
  type: "enquiry" | "schedule" | "subscribe";
  name?: string;
  phone?: string;
  email?: string;
  property?: string;
  date?: string;
  timeSlot?: string;
  topic?: string;
  message?: string;
  source?: string;
}

const GOOGLE_SHEETS_WEBHOOK_URL =
  process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL ||
  "https://script.google.com/macros/s/AKfycbx2xDscrkY_C9f8vKMhJJx1oeAlfITLe81ltx5VNnL6atsKwiroAphDPaHkHiFMQhVJ/exec";

export async function submitFormToGoogleSheets(payload: FormSubmissionPayload): Promise<boolean> {
  const fullPayload = {
    ...payload,
    timestamp: new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    }),
    spreadsheetId: "1Kbzb7g5zxSoL5guAmGOb7e-IELS0XlpHGYjf761sU20",
  };

  try {
    // 1. Direct Client-side Submission to Google Apps Script (Works in static out/ export)
    if (GOOGLE_SHEETS_WEBHOOK_URL) {
      fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fullPayload),
      }).catch((err) => console.warn("Google Apps Script Client POST warning:", err));
    }

    // 2. Also try API route if available
    fetch("/api/lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fullPayload),
    }).catch(() => {});

    return true;
  } catch (error) {
    console.error("Error submitting form:", error);
    return true;
  }
}
