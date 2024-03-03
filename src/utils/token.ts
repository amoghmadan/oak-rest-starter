import { crypto } from "crypto";

export function generateKey(): string {
  const randomBytes: Uint8Array = new Uint8Array(20);
  crypto.getRandomValues(randomBytes);
  return Array.from(randomBytes)
    .map((byte: number): string => {
      return byte.toString(16).padStart(2, "0");
    })
    .join("");
}
