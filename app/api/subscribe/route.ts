import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Path to the Mails.json file
    const filePath = path.join(process.cwd(), "app", "data", "Mails.json");

    // Read existing emails
    let emails: string[] = [];
    try {
      const fileContent = await fs.readFile(filePath, "utf8");
      emails = JSON.parse(fileContent);

      // Validate that emails is an array
      if (!Array.isArray(emails)) {
        emails = [];
      }
    } catch (error) {
      // File doesn't exist or is empty, start with empty array

      emails = [];
    }

    // Add new email if it doesn't exist
    if (!emails.includes(email)) {
      emails.push(email);

      // Write updated emails back to file
      await fs.writeFile(filePath, JSON.stringify(emails, null, 2));
    }

    return NextResponse.json(
      { success: true, message: "Successfully subscribed" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error saving email:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
