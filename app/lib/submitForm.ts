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
    if (GOOGLE_SHEETS_WEBHOOK_URL) {
      // Build URL Encoded form params for Google Apps Script e.parameter support
      const formDataParams = new URLSearchParams();
      Object.entries(fullPayload).forEach(([key, val]) => {
        formDataParams.append(key, String(val ?? ""));
      });

      // Send form submission to Google Apps Script Web App
      fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formDataParams.toString(),
      }).catch((err) => console.warn("Google Apps Script Client POST warning:", err));
    }

    // Also send to API route if running with server
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
