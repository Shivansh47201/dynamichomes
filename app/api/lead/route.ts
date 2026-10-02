import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

/* =========================================================
   GOOGLE SHEETS & LOCAL DISK INTEGRATION API ENDPOINT
   Spreadsheet ID: 1Kbzb7g5zxSoL5guAmGOb7e-IELS0XlpHGYjf761sU20
   Supported Form Types: 'enquiry' | 'schedule' | 'subscribe'
========================================================= */

// Default Google Apps Script Web App deployment URL or environment variable override
const GOOGLE_SHEETS_WEBHOOK_URL =
  process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
  process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL ||
  "https://script.google.com/macros/s/AKfycbx2xDscrkY_C9f8vKMhJJx1oeAlfITLe81ltx5VNnL6atsKwiroAphDPaHkHiFMQhVJ/exec";

// Save leads locally to disk in app/data/leads.json
function saveLeadToLocalDisk(lead: any) {
  try {
    const filePath = path.join(process.cwd(), "app", "data", "leads.json");
    let leads: any[] = [];
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      leads = JSON.parse(fileContent || "[]");
    }
    leads.unshift(lead); // Put newest lead at top
    fs.writeFileSync(filePath, JSON.stringify(leads, null, 2), "utf-8");
  } catch (err) {
    console.warn("[Local Disk Save Error]", err);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      type = "enquiry",
      name = "",
      phone = "",
      email = "",
      property = "",
      date = "",
      timeSlot = "",
      topic = "",
      message = "",
      source = "Website",
    } = body;

    const formattedTimestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });

    const payload = {
      timestamp: formattedTimestamp,
      type: type.toLowerCase(), // 'enquiry' | 'schedule' | 'subscribe'
      name,
      phone,
      email,
      property,
      date,
      timeSlot,
      topic,
      message,
      source,
      spreadsheetId: "1Kbzb7g5zxSoL5guAmGOb7e-IELS0XlpHGYjf761sU20",
    };

    console.log(`[Form Lead Received - ${type.toUpperCase()}]`, payload);

    // 1. Save to local disk (app/data/leads.json)
    saveLeadToLocalDisk(payload);

    // Forward to Google Apps Script Webhook if available
    let googleSheetSuccess = false;
    let googleSheetMessage = "Logged locally";

    if (
      GOOGLE_SHEETS_WEBHOOK_URL &&
      !GOOGLE_SHEETS_WEBHOOK_URL.includes("AKfycbz_GOOGLE_SHEETS_DEFAULT_WEBHOOK")
    ) {
      try {
        const formData = new URLSearchParams();
        Object.entries(payload).forEach(([k, v]) => {
          formData.append(k, String(v ?? ""));
        });

        const response = await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData.toString(),
          redirect: "follow",
        });

        if (response.ok) {
          googleSheetSuccess = true;
          googleSheetMessage = "Successfully submitted to Google Sheet";
        }
      } catch (err) {
        console.warn("[Google Sheet Forward Warning]", err);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Lead recorded successfully",
      googleSheet: {
        submitted: googleSheetSuccess,
        note: googleSheetMessage,
      },
      data: payload,
    });
  } catch (error) {
    console.error("[Form Submission API Error]", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to submit form",
      },
      { status: 500 }
    );
  }
}
