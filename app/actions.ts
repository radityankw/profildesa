"use server";

import { getSql } from "@/lib/db";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Mohon lengkapi semua kolom sebelum mengirim." };
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return { status: "error", message: "Format email belum valid." };
  }

  try {
    const sql = getSql();
    if (sql) {
      await sql`
        INSERT INTO contact_messages (name, email, message)
        VALUES (${name}, ${email}, ${message})
      `;
    } else {
      // No DATABASE_URL configured yet — log so nothing is silently lost
      // during local development.
      console.log("[contact] DATABASE_URL not set, message not persisted:", {
        name,
        email,
        message,
      });
    }
    return {
      status: "success",
      message: "Pesan Anda terkirim. Terima kasih, kami akan segera merespons.",
    };
  } catch (err) {
    console.error("[contact] failed to save message", err);
    return {
      status: "error",
      message: "Terjadi kendala saat mengirim pesan. Silakan coba lagi.",
    };
  }
}
