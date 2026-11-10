import { createClient } from "@libsql/client";

export const turso = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

export async function initDB() {
  await turso.execute(`
    CREATE TABLE IF NOT EXISTS chat_logs (
      id        INTEGER PRIMARY KEY AUTOINCREMENT,
      message   TEXT    NOT NULL,
      response  TEXT    NOT NULL,
      created_at TEXT   NOT NULL DEFAULT (datetime('now'))
    )
  `);
}

export async function logChat(message: string, response: string) {
  try {
    await turso.execute({
      sql: `INSERT INTO chat_logs (message, response, created_at)
            VALUES (?, ?, datetime('now'))`,
      args: [message, response],
    });
  } catch (err) {
    // Never block the chat response — just log the error
    console.error("Turso log error:", err);
  }
}

export async function getChatLogs(limit = 100) {
  const result = await turso.execute(
    `SELECT id, message, response, created_at
     FROM chat_logs
     ORDER BY created_at DESC
     LIMIT ${limit}`
  );
  return result.rows as unknown as {
    id: number;
    message: string;
    response: string;
    created_at: string;
  }[];
}
