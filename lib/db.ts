import { neon } from "@neondatabase/serverless";

// Reads DATABASE_URL from environment (set this in .env.local for dev,
// and in Vercel Project Settings > Environment Variables for production).
// Returns null if not configured, so the app still runs without a DB.
export function getSql() {
  const url = process.env.DATABASE_URL;
  if (!url) return null;
  return neon(url);
}

// Run this once (e.g. via `node --loader ts-node/esm scripts/migrate.ts`
// or manually in the Neon SQL editor) to create the contact_messages table:
//
// CREATE TABLE IF NOT EXISTS contact_messages (
//   id SERIAL PRIMARY KEY,
//   name TEXT NOT NULL,
//   email TEXT NOT NULL,
//   message TEXT NOT NULL,
//   created_at TIMESTAMPTZ NOT NULL DEFAULT now()
// );
