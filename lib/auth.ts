import { cookies } from "next/headers";

const COOKIE_NAME = "spe_admin_session";
const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days in seconds

// Simple HMAC-like token: base64(timestamp:hash)
// Hash = base64(password + timestamp + secret_salt)
const SALT = "spe-admin-2026";

function generateToken(password: string): string {
  const timestamp = Date.now().toString();
  const payload = `${password}:${timestamp}:${SALT}`;
  const hash = Buffer.from(payload).toString("base64");
  return Buffer.from(`${timestamp}:${hash}`).toString("base64");
}

function verifyToken(token: string, password: string): boolean {
  try {
    const decoded = Buffer.from(token, "base64").toString();
    const [timestamp, hash] = decoded.split(":");
    if (!timestamp || !hash) return false;

    // Check expiry
    const tokenAge = Date.now() - parseInt(timestamp);
    if (tokenAge > SESSION_MAX_AGE * 1000) return false;

    // Verify hash
    const expectedPayload = `${password}:${timestamp}:${SALT}`;
    const expectedHash = Buffer.from(expectedPayload).toString("base64");
    return hash === expectedHash;
  } catch {
    return false;
  }
}

export function createSession(): string | null {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) {
    console.error("ADMIN_PASSWORD not set - cannot create session");
    return null;
  }
  return generateToken(password);
}

export function verifySession(token: string): boolean {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return false;
  return verifyToken(token, password);
}

export async function getSession(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return false;
  return verifySession(token);
}

export function checkPassword(input: string): boolean {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return false;
  return input === password;
}

export { COOKIE_NAME, SESSION_MAX_AGE };
